<script setup lang="ts">

import { PxMessageReply } from "oh-vue-icons/icons";
import {addIcons} from 'oh-vue-icons';
//import SingleComment from "./SingleComment.vue";
   
addIcons(PxMessageReply);



</script>
<template>
    <div class="single__comment__reply">
        <p>
            <v-icon name="px-message-reply" ></v-icon>
            Replys
        </p> 
     
    </div>
    <slot/>


</template>

<style scoped lang="scss">

@use '../assets/variables.scss' as v;

.single__comment__reply  p {
     margin: 0;
     font-size: 13px;
     color: v.$darkGray;
     font-weight: 500;
}
</style>
