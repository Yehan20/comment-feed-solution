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
@use  '../assets/variables.scss' as v;
@use '../assets/mixins.scss' as m;
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
          padding: 0 10px;
          margin-top: -2px;
          @include m.flexConfig(space-between,nowrap,center) 
     }
</style>