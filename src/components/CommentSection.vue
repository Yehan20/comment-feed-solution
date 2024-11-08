<script setup lang="ts">

// import { onUpdated } from 'vue';
import { usecommentFeedStore } from '../store/commentFeedStore';
import CommentList from './CommentList.vue';


const commentFeedStore = usecommentFeedStore();



const comments = (id = null)=>{

        return commentFeedStore.commentFeed.filter((comment)=>comment.parentId  === id); // top level comments

}
const replies = ()=>{
        return commentFeedStore.commentFeed.filter((replyForComment)=>replyForComment.parentId  !== null); // child level comments    

}



</script>
<template>
    <div class="comments__list__section">
        <CommentList  :comments="comments()" :allReplies="replies()" />
    </div>
</template>

<style scoped lang="scss">

@use '../assets/scss/mixins.scss' as m;

.comments__list__section {
    @include m.verticalPadding(10px, 0);
}
</style>