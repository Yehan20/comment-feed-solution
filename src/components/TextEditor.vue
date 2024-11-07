<script setup lang="ts">
import { usecommentFeedStore } from '../store/commentFeedStore';
import { Message } from '../types/message';
import { Key } from '../store/messageKey';
import TextEditorAddButton from './TextEditorAddButton.vue';
import { computed, inject, ref } from 'vue';

// Props
const props  = defineProps<{
     showDiscussion:boolean
}>()


// Pinia Stpre
const commentFeedStore = usecommentFeedStore();

// Consts
const MESSAGE_LIMIT = 400;

// Data
const message = ref("");

// Computed
const getMessangeLength = computed(()=>message.value.length);


// Injects
const parentId = inject(Key,null); // this is the id of the parent wrapping it 

// Methods
const handleSubmit = ()=>{

 const MessageObj:Message = {
     id:Date.now(),
     message:message.value,
     parentId:parentId,
     points:0,
     isDownvoted:false,
     isUpvoted:false,
     userName:"John Doe",
     profilePic:'',
 }

 commentFeedStore.addComment(MessageObj);
 message.value = ''
 
 // trigger and emit to hide our text editor of its not the main 
 if(!props.showDiscussion) {
      emit('@hideEditor');
 }


}

const handleInput = (e:Event) =>{   
     let inputValue =e.target as HTMLTextAreaElement;
     
     inputValue.value.length >= MESSAGE_LIMIT
     ? message.value  = inputValue.value= inputValue.value.substring(0,400) 
     : message.value = inputValue.value;
}

//Emits
const emit = defineEmits<{
      '@hideEditor':[]
}>()

</script>

<template>
    <div class="text__editor__container">
         <h4 v-if="props.showDiscussion">Discussion (8 comments)</h4>
         <form @submit.prevent>
          <textarea @input="handleInput"  :value="message" name="" id=""  :rows="10" class="text__editor" placeholder="text"></textarea>
          <div class="text__editor__foter">
                <p>{{ getMessangeLength }}/800 Characters </p>
                 <TextEditorAddButton  @@addMessage="handleSubmit"/>
          </div>
         </form>
       
    </div>
</template>

<style lang="scss" scoped>
@use  '../assets/scss/variables.scss' as v;
@use '../assets/scss/mixins.scss' as m;
     .text__editor__container{
         max-width: 750px;
          h4 {
             text-transform: uppercase;
             color: v.$darkGray;
             font-weight: 300;
             font-size: 14px;
             margin-bottom: 10px;
             
          }
          .text__editor {
            
             width: 100%;
             padding: 10px;
             color: v.$darkGray;
             
          }
     }
     .text__editor__foter {
          background-color: v.$mediumGray;
          padding: 5px 10px;
          margin-top: -2px;
          @include m.flexConfig(space-between,nowrap,center) 
     }
</style>