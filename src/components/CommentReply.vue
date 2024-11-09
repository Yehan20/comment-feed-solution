<script setup lang="ts">

import { PxMessageReply, BiArrowUpCircle, BiArrowDownCircle } from "oh-vue-icons/icons";
import { addIcons } from 'oh-vue-icons';
import TextEditor from "./TextEditor.vue";
import { onUpdated, ref } from "vue";
import { usecommentFeedStore } from "../store/commentFeedStore"
import { Message } from "../types/message";
import { helperIsNestedMessage } from "../utils/messageHelper";




// Icom Method
addIcons(PxMessageReply, BiArrowDownCircle, BiArrowUpCircle);

// Props
const props = defineProps<{
    messageInfo: {
        id: number,
        upvoted: boolean,
        downvoted: boolean,
        replies: Message[],
        collapsed: boolean
        parentId: number | null
        userName: string
    }
}>()


// Store
const commentFeedStore = usecommentFeedStore();


// local varabile
const allowCollapse = ref(helperIsNestedMessage(props.messageInfo.parentId, commentFeedStore.commentFeed, props.messageInfo.id))

// refs
const canReply = ref(false);
const messageCanCollapse = ref(allowCollapse.value);
// const singleCommentRef= useTemplateRef('comment');


//Methods
const toggleReply = () => void (canReply.value = !canReply.value);

const handleCollapse = () => {
    messageCanCollapse.value = !messageCanCollapse.value

}

// uncollapse specifc message once a reply is shown
const autoCollapse = () => {
    if (messageCanCollapse.value) {
        messageCanCollapse.value = false

    }


}
onUpdated(() => {
    allowCollapse.value = helperIsNestedMessage(props.messageInfo.parentId, commentFeedStore.commentFeed, props.messageInfo.id)
})



</script>
<template>
    <div class="single__comment__reply" :id="props.messageInfo.id.toString()">

        <div class="comment__buttons__wrapper">
            <div>
                <button class="btn__upvote" :class="{ selected: props.messageInfo.upvoted }"
                    :title="props.messageInfo.upvoted ? 'Click to Undo' : 'Click to Upvote'"
                    @click="commentFeedStore.upvoteComment(props.messageInfo.id)">

                    <v-icon scale=1.2 name="bi-arrow-up-circle"></v-icon>
                </button>

                <button class="btn__downvote" :class="{ selected: props.messageInfo.downvoted }"
                    @click="commentFeedStore.downvoteComment(props.messageInfo.id)"
                    :title="props.messageInfo.downvoted ? 'Click to Undo' : 'Click to DownVote'">

                    <v-icon scale=1.2 name="bi-arrow-down-circle"></v-icon>
                </button>
            </div>


            <button @click="toggleReply" :title="canReply ? 'Click to Cancel' : 'Click to Reply'">

                <template v-if="canReply">
                    Cancel X
                </template>

                <template v-else>
                    Reply <v-icon scale=1 name="px-message-reply"></v-icon>
                </template>
            </button>


            <button class="" v-if="allowCollapse" @click="handleCollapse"
                :title="messageCanCollapse ? 'Click to expand feed' : 'Click to hide feed'">
                {{ messageCanCollapse ? 'Expand +' : 'Hide -' }}
            </button>
        </div>


        <template v-if="canReply">
            <TextEditor :parentId="messageInfo.id" :userName="messageInfo.userName ?? ''"
                @@autoCollapseNest="autoCollapse" @@hideEditor="toggleReply()" :showDiscussion="false" />
        </template>
        
  
    </div>

    <template v-if="!messageCanCollapse">
        <slot />
    </template>



</template>

<style scoped lang="scss">
@use '../assets/scss/variables.scss' as v;



.single__comment__reply {


    p {
        margin: 0;
        font-size: 13px;
        color: v.$darkGray;
        font-weight: 500;
    }

    .comment__buttons__wrapper {
        display: flex;
        gap: 10px;

        button {

            border-width: 3px;
            background-color: v.$white;
            border-radius: 30px;
            padding: 4px 10px;




            margin-bottom: 5px;

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

}
</style>
