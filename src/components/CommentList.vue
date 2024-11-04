<script setup lang="ts">
import TextEditor from './TextEditor.vue';
import Comment from './SingleComment.vue';

</script>
<template>
    <div class="comments__list__section">
           <TextEditor/>
           <Comment/>
           <Comment/>
           <Comment/>
   
    </div>
</template>
<style   scoped lang="scss">
    @import '../assets/mixins.scss';
    
    .comments__list__section {
        @include verticalPadding(10px,0);
    }
   
</style>