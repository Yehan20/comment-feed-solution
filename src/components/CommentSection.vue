<script setup lang="ts">


import CommentList from './CommentList.vue';


const  commentFeed:any[] = [

            {
                id: 1,
                comment: "hello world", 
                parentId:null
            },
            {
                id: 2,
                comment: "hello world",
                parentId:1
            },
            {
                id: 3,
                comment: "hello world",
                parentId:2
            },
            {
                id: 4,
                comment: "hello world",
                parentId:3
            },
            {
                id: 5,
                comment: "hello world",
                parentId:4
            },
            {
                id: 6,
                comment: "hello world",
                parentId:5
            },
            {
                id: 7,
                comment: "hello world",
                parentId:6
            },
];

const comments = (id = null)=>{
       return commentFeed.filter((comment)=>comment.parentId  === id);
}
const replies = ()=>{
       return commentFeed.filter((replyForComment)=>replyForComment.parentId  !== null);
}


</script>
<template>
    <div class="comments__list__section">
        <CommentList  :comments="comments()" :allReplies="replies()" />
    </div>
</template>
<style scoped lang="scss">

@import '../assets/mixins.scss';

.comments__list__section {
    @include verticalPadding(10px, 0);
}
</style>