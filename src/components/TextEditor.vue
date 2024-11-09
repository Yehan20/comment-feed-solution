<script setup lang="ts">
import { usecommentFeedStore } from '../store/commentFeedStore';
import { Message } from '../types/message';
import { helperIsNestedMessage } from '../utils/messageHelper';
import TextEditorAddButton from './TextEditorAddButton.vue';
import { computed, onMounted, onWatcherCleanup, ref, useTemplateRef, watch } from 'vue';

// Props
const props = defineProps<{
     showDiscussion: boolean,
     parentId:number | null,
     userName:string
}>()

// Pinia Store
const commentFeedStore = usecommentFeedStore();

// Consts
const MESSAGE_LIMIT = 400;

// Reactive Refs
const message = ref('');
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
          points: 0,
          isDownvoted: false,
          isUpvoted: false,
          userName: "Yehan",
          profilePic: '',
          createdAt:new Date(),
          collapsed:helperIsNestedMessage(props.parentId,commentFeedStore.commentFeed) as boolean
     }


     commentFeedStore.addComment(MessageObj);
     emit('@autoCollapseNest'); // emit logic to auto collapse replies if new reply added 
     message.value = ''

     // trigger and emit to hide our text editor of its not the main 
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
}
const addUserNameMessage = () =>{
     message.value =`@${props.userName} ${message.value}` 
     canReplyWithUsername.value =  !canReplyWithUsername.value
}

//whe loaded auto focus the text editor
onMounted(()=>{
     console.log(input.value);
     input.value?.focus();
})


// Wacth
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
}>()

</script>

<template>
     <div class="text__editor__container" >
          <div class="text__editor__top">
               <h4 v-if="props.showDiscussion">Discussion ({{ commentFeedStore.commentFeed.length }} comments)</h4>
               <h4 v-if="error" class="error__text">{{ error }}</h4>

          </div>

          <form @submit.prevent role="form">
               <textarea ref="text-area"  @input="handleInput" :value="message" name="" id="" :rows="10" class="text__editor"
                    :class="{ error: error }" placeholder="Make it Creative :)"></textarea>
               <div class="text__editor__foter">
                    <p>{{ getMessangeLength }}/800 Characters </p>
                    <TextEditorAddButton @@addMessage="handleSubmit" />
               </div>
          </form>
          <button v-if="props.userName" :disabled="!canReplyWithUsername " @click="addUserNameMessage">Reply using user name </button>

     </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/variables.scss' as v;
@use '../assets/scss/mixins.scss' as m;

.text__editor__container {
     max-width: 750px;

     h4 {
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
          color: v.$darkGray;
          &.error {
                outline-color: v.$red;
                
          }

     }
     .error__text {
           color: v.$red;
           font-weight: 400;
           text-transform: capitalize;
     }
}

.text__editor__foter {
     background-color: v.$mediumGray;
     padding: 5px 10px;
     margin-top: -2px;
     @include m.flexConfig(space-between, nowrap, center)
}
</style>