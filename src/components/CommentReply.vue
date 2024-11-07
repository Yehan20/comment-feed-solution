<script setup lang="ts">

import { PxMessageReply ,BiArrowUpCircle,BiArrowDownCircle  }  from "oh-vue-icons/icons";
import { addIcons } from 'oh-vue-icons';
import TextEditor from "./TextEditor.vue";
import { provide, ref } from "vue";
import { Key} from "../store/messageKey";
import { usecommentFeedStore } from "../store/commentFeedStore";



addIcons(PxMessageReply,BiArrowDownCircle,BiArrowUpCircle);

// Props
const props = defineProps<{
    messageInfo:{
         id:number,
         upvoted:boolean,
         downvoted:boolean,
    }
}>()

// Store
const commentFeedStore  = usecommentFeedStore();

// Provide
provide(Key, props.messageInfo.id);

// refs
const canReply = ref(false);

//Methods
const toggleReply = () => void (canReply.value = !canReply.value);

</script>
<template>
    <div class="single__comment__reply">

        <div class="comment__buttons__wrapper">

            <button @click="toggleReply">
                <span></span>
                <v-icon scale=1 name="px-message-reply"></v-icon>
                Replys
            </button>

            <button class="btn__upvote" :class="{selected:props.messageInfo.upvoted}" @click="commentFeedStore.upvoteComment(props.messageInfo.id)">
                 <v-icon scale=1.2 name="bi-arrow-up-circle"></v-icon>
            </button>
            <button class="btn__downvote" :class="{selected:props.messageInfo.downvoted}" @click="commentFeedStore.downvoteComment(props.messageInfo.id)">
                  <v-icon scale=1.2 name="bi-arrow-down-circle"></v-icon>
            </button>
        </div>


        <template v-if="canReply">
            <TextEditor @@hideEditor="toggleReply()" :showDiscussion="false" />
        </template>


    </div>
    <slot />

</template>

<style scoped lang="scss">
@use '../assets/scss/variables.scss' as v;

.single__comment__reply p {
    margin: 0;
    font-size: 13px;
    color: v.$darkGray;
    font-weight: 500;
}
.comment__buttons__wrapper  {
     
    margin-bottom: 5px;
    button {
     cursor: pointer;
     background-color: v.$white;
     border-radius: 30px;
     padding: 4px 7px;
     border-width: 3px;
     margin-right: 5px;

     &.btn__upvote { 
        border-bottom-right-radius: 0;
        border-top-right-radius: 0;
        margin-right: 0;
     }
     
     &.btn__downvote{
        border-bottom-left-radius: 0;
        border-top-left-radius: 0;
        margin-right: 0;
     }   

     &.btn__upvote.selected {
         color: v.$red;
     }
     
     &.btn__downvote.selected {
        color: v.$blue;
    }

     &:hover {
         opacity: 0.7;
     }
    }
}
</style>
