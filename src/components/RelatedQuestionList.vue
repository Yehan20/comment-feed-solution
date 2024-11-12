<script lang="ts" setup>
import { ref } from 'vue';
import { questionFeeds } from '../data/questionFeeds';
import { useCommentFeedStore  } from '../store/commentFeedStore';

// Store
const commentFeedStore = useCommentFeedStore ();

// Refs
const isVisible = ref(true);


</script>

<template>
  <article>
    <button class="toggle-btn" @click="  isVisible = !isVisible">
      <span v-if="isVisible">X</span>
      <span v-else>Show Other Questions</span>
    </button>



      <div v-show="isVisible" class="more__questions">
        <h2>More Questions</h2>
        <button v-if="commentFeedStore.questionId !== 'Q1'" @click="commentFeedStore.changeQuestion('Q1')">
          {{ questionFeeds[0].question }}
        </button>
        <button v-if="commentFeedStore.questionId !== 'Q2'" @click="commentFeedStore.changeQuestion('Q2')">
          {{ questionFeeds[1].question }}
        </button>
        <button v-if="commentFeedStore.questionId !== 'Q3'" @click="commentFeedStore.changeQuestion('Q3')">
          {{ questionFeeds[2].question }}
        </button>
      </div>

  </article>


</template>

<style lang="scss">

@use '../assets/scss/variables.scss' as v;

article {

  transition: all 250ms ease-in;
  margin-top: 10px;
  margin-bottom: 20px;
  max-width: 600px;
  width: 100%;

  font-style: italic;
  .more__questions {
    background-color: #fff8dd;
    padding: 20px;
    button {
      display: block;
      background-color: #fff8dd;
      font-size: 0.9rem;
      margin-top: 20px;
      text-align: start;
  
      &:hover {
        color: v.$brand-color;
      }
    }
  }

 
}

// Toggle Button Styles
.toggle-btn {

  background: v.$brand-color;
  color: #fff;
  padding: 8px 12px;
  transform: translateY(10px);
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9rem;
  &:hover {
     opacity: 0.6;
  }
}

</style>
