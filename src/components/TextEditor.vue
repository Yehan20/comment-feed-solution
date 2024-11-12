<script setup lang="ts">
import { useCommentFeedStore  } from '../store/commentFeedStore';
import { Message } from '../types/message';
import { DEFAULT_PROFILE, MESSAGE_LIMIT } from '../utils/constants';
import TextEditorAddButton from './TextEditorAddButton.vue';
import { computed, onMounted, onWatcherCleanup, ref, useTemplateRef, watch } from 'vue';

// Props
const props = defineProps<{
     showDiscussion: boolean,
     parentId:number | null,
     userName:string,
    
}>()

// Pinia Store
const commentFeedStore = useCommentFeedStore ();

// Reactive Refs
const message = ref<string>('');
const error = ref("");
const canReplyWithUsername = ref(true);
const input = useTemplateRef('text-area')

// Computed Methods
const getMessangeLength = computed(() => message.value.length );

// Methods

const handleSubmit = () => {
      
     // Check Empty Values
     if (message.value==='') {
          error.value = "Message must be not be Empty"
          return;
     }
    
     // Initialize Message Object
     const MessageObj: Message = {
          id: Date.now(),
          message: message.value,
          parentId: props.parentId ,
          points:DEFAULT_PROFILE.points,
          isDownvoted: false,
          isUpvoted: false,
          userName: DEFAULT_PROFILE.name,
          profilePic: DEFAULT_PROFILE.profilePic,
          createdAt:new Date(),
         
     }


     commentFeedStore.addComment(MessageObj);
     emit('@autoCollapseNest'); // emit logic to auto collapse replies if new reply added 
     message.value = ''

     // trigger and emit to hide our text editor of its not the main  comment 
     if (!props.showDiscussion) {
          emit('@hideEditor');
     }


}
const handleInput = (e: Event) => {
      
     let inputValue = e.target as HTMLTextAreaElement;
     error.value = '';
     
     inputValue.value.length < 1 ? canReplyWithUsername.value = true : null;

     
     // if length exceeds extract string between first and max limit part and then add it to message
     inputValue.value.length >= MESSAGE_LIMIT  ? (message.value = inputValue.value = inputValue.value.substring(0, 400))
          : message.value = inputValue.value;

     // send message length  to parent to ditermine confirm model behaviour
     emit('@checkMessageLength',message.value.length)
}
const addUserNameMessage = () =>{
     message.value =`@${props.userName} ${message.value}` 
     canReplyWithUsername.value =  !canReplyWithUsername.value
     input.value?.focus();
     emit('@checkMessageLength',message.value.length)
}



// Life cycles
onMounted(()=>{
     input.value?.focus();
})


// Wacthers
watch(error,()=>{
 
     let timeoutId = null
     timeoutId= setTimeout(()=>{
           error.value =''
     },2000)

     // prevent timeout out from building
     onWatcherCleanup(() => {

      clearTimeout(timeoutId);
  })
})

//Emits
const emit = defineEmits<{
     '@hideEditor': [],
     '@autoCollapseNest':[],
     '@checkMessageLength':[amount:number],
}>()

</script>

<template>
     <div class="text__editor__container" >
          <div class="text__editor__top">
               <h3 v-if="props.showDiscussion">Discussion ({{ commentFeedStore.commentFeed.length }} comments)</h3>
               <h3 v-if="error" class="error__text">{{ error }}</h3>

          </div>

          <form @submit.prevent role="form" autocomplete="on">
               <textarea ref="text-area"  @input="handleInput" :value="message" name="" id=""  :rows="8" class="text__editor"
                    :class="{ error: error }" placeholder="Make it Creative :)"></textarea>
               <div class="text__editor__footer">
                    <p>{{ getMessangeLength }} / {{MESSAGE_LIMIT }} Characters </p>
                    <TextEditorAddButton @@addMessage="handleSubmit" />
               </div>
          </form>
          <button class="btn__basic " v-if="props.userName" :disabled="!canReplyWithUsername " @click="addUserNameMessage"  title="Click to Mention User">Mention</button>

     </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/variables.scss' as v;
@use '../assets/scss/mixins.scss' as m;

.text__editor__container {
     max-width: 750px;
     min-width: 450px;
     margin:5px 0 5px 5px;
     @include m.for-mobile {
           min-width: 300px;
     }

     h3 {
          text-transform: uppercase;
          color: v.$darkGray;
          font-weight: 300;
          font-size: 14px;
          margin-bottom: 10px;

     }
     .text__editor__top {
           display: flex;
           justify-content: space-between;
     }

     .text__editor {
     
          width: 100%;
          padding: 10px;
          color:black;
          &.error {
                outline-color: v.$brand-color;
                
          }

     }
     .error__text {
           color: v.$brand-color;
           font-weight: 400;
           text-transform: capitalize;
     }
  

     .text__editor__footer {
          background-color: v.$secondary-bg;
          padding: 5px 10px;

               margin-top: -5px;
        
     
          @include m.flexConfig(space-between, nowrap, center)
     }

   .btn__basic {
          display: inline-block;
          border-width: 3px;
          background-color: v.$white;
          border-radius: 30px;
          padding: 5px 10px;
          margin: 5px 0;
          border-width: 3px;
     }
}



</style>