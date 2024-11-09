<script setup lang="ts">

import TheFooter from '../components/TheFooter.vue';
import TheHeader from '../components/TheHeader.vue';
import CommentFeedView from '../views/CommentFeedView.vue';

</script>

<template>
    <TheHeader />
    <main class="container" role="main">
        <CommentFeedView />
    </main>
    <TheFooter />
</template>
