<script setup lang="ts">

import { onMounted } from 'vue';
import MainLayout from './layout/MainLayout.vue';
import { useCommentFeedStore  } from './store/commentFeedStore';

const commentFeedStore = useCommentFeedStore ();

onMounted(()=>{
      commentFeedStore.loadFeed();  
})

</script>
<template>
      <MainLayout/>
</template>

