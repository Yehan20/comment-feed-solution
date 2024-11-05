<script setup lang="ts">
import TextEditorAddButton from './TextEditorAddButton.vue';
</script>

<template>
    <div class="text__editor__container">
         <h4>Discussion (8 comments)</h4>
         <textarea name="" id=""  :rows="10" class="text__editor" placeholder="text"></textarea>
         <div class="text__editor__foter">
               <p>0/800 Characters</p>
                <TextEditorAddButton/>
         </div>
    </div>
</template>

<style lang="scss" scoped>
@import '../assets/variables.scss';
@import '../assets/mixins.scss';
     .text__editor__container{
         max-width: 750px;
          h4 {
             text-transform: uppercase;
             color: $darkGray;
             font-weight: 300;
             font-size: 14px;
             margin-bottom: 10px;
             
          }
          .text__editor {
            
             width: 100%;
             padding: 10px;
             color: $darkGray;
             
          }
     }
     .text__editor__foter {
          background-color: $mediumGray;
          padding: 0 10px;
          margin-top: -2px;
          @include flexConfig(space-between,nowrap,center) 
     }
</style>