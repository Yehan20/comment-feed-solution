<script setup lang="ts">
import { usecommentFeedStore } from '../store/commentFeedStore';
// import { Key } from '../store/messageKey';
import { Message } from '../types/message';
// import { Key } from '../store/messageKey';
import TextEditorAddButton from './TextEditorAddButton.vue';
import { computed, ref } from 'vue';

// Props
const props = defineProps<{
     showDiscussion: boolean,
     parentId:number | null
}>()


// Pinia Stpre
const commentFeedStore = usecommentFeedStore();

//console.log(commentFeedStore.mostUpvoted);

// Consts
const MESSAGE_LIMIT = 400;

// Data
const message = ref("");
const error = ref("");

// Computed
const getMessangeLength = computed(() => message.value.length);

// Injects
// const parentId = inject("id",null); 
// console.log(parentId);

// Methods
const handleSubmit = () => {

     if (message.value==='') {
          error.value = "Message must be not be Empty"
          return;
     }

     const MessageObj: Message = {
          id: Date.now(),
          message: message.value,
          parentId: props.parentId ,
          points: 0,
          isDownvoted: false,
          isUpvoted: false,
          userName: "John Doe",
          profilePic: '',
          createdAt:new Date()
     }

     commentFeedStore.addComment(MessageObj);
     message.value = ''



     // trigger and emit to hide our text editor of its not the main 
     if (!props.showDiscussion) {
          emit('@hideEditor');
     }


}

const handleInput = (e: Event) => {

     let inputValue = e.target as HTMLTextAreaElement;
     error.value = '';

     inputValue.value.length >= MESSAGE_LIMIT
          ? message.value = inputValue.value = inputValue.value.substring(0, 400)
          : message.value = inputValue.value;
}

//Emits
const emit = defineEmits<{
     '@hideEditor': []
}>()

</script>

<template>
     <div class="text__editor__container" >
          <div class="text__editor__top">
               <h4 v-if="props.showDiscussion">Discussion (8 comments)</h4>
               <h4 v-if="error" class="error__text">{{ error }}</h4>

          </div>

          <form @submit.prevent>
               <textarea @input="handleInput" :value="message" name="" id="" :rows="10" class="text__editor"
                    :class="{ error: error }" placeholder="text"></textarea>
               <div class="text__editor__foter">
                    <p>{{ getMessangeLength }}/800 Characters </p>
                    <TextEditorAddButton @@addMessage="handleSubmit" />
               </div>
          </form>

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