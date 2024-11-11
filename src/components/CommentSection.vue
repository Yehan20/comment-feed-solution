<script setup lang="ts">


import { usecommentFeedStore } from '../store/commentFeedStore';
import CommentList from './CommentList.vue';


const commentFeedStore = usecommentFeedStore();



</script>
<template>
    <div class="comments__section">
        <CommentList  :comments="commentFeedStore.getComments(null)"  />
    </div>
</template>

<style scoped lang="scss">

@use '../assets/scss/mixins.scss' as m;

.comments__section {
    @include m.verticalPadding(10px, 0);
}
</style>