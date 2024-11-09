<script setup lang="ts">

// import { onUpdated } from 'vue';
import { usecommentFeedStore } from '../store/commentFeedStore';
import CommentList from './CommentList.vue';


const commentFeedStore = usecommentFeedStore();


// extract the main comments top level
const comments = (id = null)=>{
      
     
      if(commentFeedStore.isSortByUpvote){
           const sorted  = [...commentFeedStore.commentFeed].filter((comment)=>comment.parentId  === id).sort((a,b)=>b.points - a.points);

           return sorted;
      }
      
       return commentFeedStore.commentFeed.filter((comment)=>comment.parentId  === id); // top level comments


}

// extract all the replies of any level
const replies = ()=>{
       
      if(commentFeedStore.isSortByUpvote){

           const sorted  = [...commentFeedStore.commentFeed].filter((comment)=>comment.parentId  !== null).sort((a,b)=>b.points - a.points);
          
          
           return sorted;
      }


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