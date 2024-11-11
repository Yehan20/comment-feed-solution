<script setup lang="ts">

import RelatedQuestionList from '../components/RelatedQuestionList.vue';
import TheFooter from '../components/TheFooter.vue';
import TheHeader from '../components/TheHeader.vue';

import CommentFeedView from '../views/CommentFeedView.vue';

</script>

<template>
    <TheHeader />
    <main  role="main">
  
        <CommentFeedView />
        <RelatedQuestionList/>
    </main>
    <TheFooter />
</template>
