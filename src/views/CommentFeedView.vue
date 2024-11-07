<script setup lang="ts">
import CommentSection from '../components/CommentSection.vue'
import TextEditor from '../components/TextEditor.vue';
import { usecommentFeedStore } from '../store/commentFeedStore';
  
const commentFeedStore = usecommentFeedStore();

</script>
<template>
    <div class="comment__feed">


        <div class="question__wrapper">

            <h1>What came first the Egg or the Hen ??</h1>
            <p>{{commentFeedStore.text}}</p>

            <div class="question__detail">
                 <p>I have been wondering what came first some says egg some says hen  
                    my Teacher asked it told me to come up with the answer tommarow even which answer i have i need to prove it 
                    any thoughts?
                </p>
            </div>
            <div class="question__stats">
                 <!-- Upvote down vote List -->
            </div>
        </div>
        <TextEditor :showDiscussion="true"/>
        <CommentSection/>
    </div>
</template>


<style lang="scss" scoped>
  @use '../assets/scss/mixins.scss' as m;
  
  .comment__feed {
    @include m.verticalPadding(40px,40px);
  }
  .question__wrapper {
      @include m.verticalMargin(0px,20px)
  }
  .question__detail {
     max-width: 750px;
     line-height: 1.6;
  }
 
</style>