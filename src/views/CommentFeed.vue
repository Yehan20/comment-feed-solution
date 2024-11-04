<script setup lang="ts">
import CommentList from '../components/CommentList.vue';
</script>
<template>
    <div class="comment__feed">
        <div class="question__wrapper">
            <h1>What came first the Egg or the Hen ??</h1>
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
        <CommentList/>
    </div>
</template>
<style lang="scss" scoped>
  @import '../assets/mixins.scss';
  
  .comment__feed {
    @include verticalPadding(40px,40px);
  }
  .question__wrapper {
      @include verticalMargin(0px,20px)
  }
  .question__detail {
     max-width: 750px;
     line-height: 1.6;
  }
 
</style>