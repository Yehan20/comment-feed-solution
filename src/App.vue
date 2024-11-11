<script setup lang="ts">

import { onMounted } from 'vue';
import MainLayout from './layout/MainLayout.vue';
import { usecommentFeedStore } from './store/commentFeedStore';

const commentFeedStore = usecommentFeedStore();

onMounted(()=>{
      commentFeedStore.loadFeed();  
})

</script>
<template>
      <MainLayout/>
</template>

