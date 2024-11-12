<script setup lang="ts">

import TheFooter from '../components/TheFooter.vue';
import TheHeader from '../components/TheHeader.vue';

import CommentFeedView from '../views/CommentFeedView.vue';

</script>

<template>
    <TheHeader />
    <main  role="main" aria-labelledby="main-title">
        <CommentFeedView />
    </main>
    <TheFooter />
</template>
