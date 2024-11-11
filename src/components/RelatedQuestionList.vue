<script lang="ts" setup>
import { questionFeeds } from '../data/questionFeeds';
import { usecommentFeedStore } from '../store/commentFeedStore';

  const commentFeedStore = usecommentFeedStore();

</script>
<template>

   <aside class="more__questions">
    <h2>More Questions</h2>
    <button v-if="commentFeedStore.questionId !='Q1'" @click="commentFeedStore.changeQuestion('Q1')">{{questionFeeds[0].question}}</button>
    <button v-if="commentFeedStore.questionId !='Q2'" @click="commentFeedStore.changeQuestion('Q2')">{{questionFeeds[1].question}}</button>
    <button v-if="commentFeedStore.questionId !='Q3'" @click="commentFeedStore.changeQuestion('Q3')">{{ questionFeeds[2].question}}</button>
   </aside>

</template>

<style lang="scss">
  @use '../assets/scss/variables.scss' as v;

    .more__questions {
          background-color: v.$white;
          max-width: 600px;
          padding: 20px;
          border-radius: 10px;
          border:1px solid v.$brand-color;
          transition: all 250ms ease-in;
          margin-top: 30px;
          position: sticky;
          top: 25%;
          
    
          
        button {
             display: block;
             background-color: v.$white;
             font-size: 0.9rem;
             margin-top: 20px;
             text-align: start;
             &:hover {
                 color: v.$brand-color
             }
           

        }

    }

    // Define the shake and rotate effect
@keyframes shake {
    0% {
      transform: rotate(-5deg);
    }
    25% {
      transform: rotate(5deg);
    }
    50% {
      transform: rotate(-5deg);
    }
    75% {
      transform: rotate(5deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
</style>