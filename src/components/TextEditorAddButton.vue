<script setup lang="ts">
  // Declaremeit
  
  defineEmits<{
      '@addMessage':[];
   }>()

</script>

<template>
    <button class="btn btn__comment" @click="$emit('@addMessage')" >
       Comment
    </button>
</template>