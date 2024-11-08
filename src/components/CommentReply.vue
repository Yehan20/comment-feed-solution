<script setup lang="ts">

import { PxMessageReply, BiArrowUpCircle, BiArrowDownCircle } from "oh-vue-icons/icons";
import { addIcons } from 'oh-vue-icons';
import TextEditor from "./TextEditor.vue";
import { ref } from "vue";
import { usecommentFeedStore } from "../store/commentFeedStore"
import { Message } from "../types/message";


addIcons(PxMessageReply, BiArrowDownCircle, BiArrowUpCircle);



// Props
const props = defineProps<{
    messageInfo: {
        id: number,
        upvoted: boolean,
        downvoted: boolean,
        amount: number
        replies: Message[],
    }
}>()


// Store
const commentFeedStore = usecommentFeedStore();

// refs
const canReply = ref(false);
const notCollapsed = ref(props.messageInfo.amount < 4);

//Methods
const toggleReply = () => void (canReply.value = !canReply.value);
const toggleCollapse = () => void (notCollapsed.value = !notCollapsed.value);


</script>
<template>
    <div class="single__comment__reply" :id="props.messageInfo.id.toString()">

        <div class="comment__buttons__wrapper">

            <button @click="toggleReply">
                <span></span>
                <v-icon scale=1 name="px-message-reply"></v-icon>
                Replies {{ props.messageInfo.amount }}
            </button>

            <button class="btn__upvote" :class="{ selected: props.messageInfo.upvoted }"
                @click="commentFeedStore.upvoteComment(props.messageInfo.id)">
                <v-icon scale=1.2 name="bi-arrow-up-circle"></v-icon>
            </button>
            <button class="btn__downvote" :class="{ selected: props.messageInfo.downvoted }"
                @click="commentFeedStore.downvoteComment(props.messageInfo.id)">
                <v-icon scale=1.2 name="bi-arrow-down-circle"></v-icon>
            </button>
        </div>


        <template v-if="canReply">
            <TextEditor :parentId="messageInfo.id" @@hideEditor="toggleReply()" :showDiscussion="false" />
        </template>


    </div>
    <button v-if="!(props.messageInfo.amount < 4)" @click="toggleCollapse">
        {{ notCollapsed ? 'Hide' : 'Show Thread' }}
    </button>


    <template v-if="notCollapsed">
        <slot />
    </template>


</template>

<style scoped lang="scss">

@use '../assets/scss/variables.scss' as v;

.single__comment__reply p {
    margin: 0;
    font-size: 13px;
    color: v.$darkGray;
    font-weight: 500;
}

.comment__buttons__wrapper {

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

        &.btn__downvote {
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
