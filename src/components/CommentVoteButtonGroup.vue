<script setup lang="ts"> 
import {  BiArrowUpCircle, BiArrowDownCircle } from "oh-vue-icons/icons";
import { addIcons } from 'oh-vue-icons';

addIcons(BiArrowDownCircle, BiArrowUpCircle);

  const props = defineProps<{
    upvoted: boolean,
    downvoted: boolean,

  }>()


  const emit = defineEmits<{
      '@upVote':[],
      '@downVote':[]
  }
  >()
</script>

<template>
    <button class="btn btn__upvote" :class="{ selected: props.upvoted }"
        :title="props.upvoted ? 'Click to Undo' : 'Click to Upvote'"

        @click="emit('@upVote')">

        <v-icon scale=1.2 name="bi-arrow-up-circle"></v-icon>
    </button>

    <button class="btn btn__downvote" :class="{ selected: props.downvoted }"
        @click="emit('@downVote')"
        :title="props.downvoted ? 'Click to Undo' : 'Click to DownVote'">

        <v-icon scale=1.2 name="bi-arrow-down-circle"></v-icon>
    </button>
</template>
<style lang="scss" scoped>
@use '../assets/scss/variables.scss' as v;

  button {
    text-transform: lowercase;
    border-radius: 20px;
    padding-left: 10px;
    padding-right: 10px;

    &.btn__upvote {

       padding: 5px;
       margin-right: 0;
   }

   &.btn__downvote {
       padding: 5px;
       margin-right: 0;

   }


   &.btn__upvote.selected {
       color: v.$brand-color !important;
   }

   &.btn__downvote.selected {
       color: v.$downvote-clr !important;
   }
  }

</style>