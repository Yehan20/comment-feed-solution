<script setup lang="ts">

import { PxMessageReply, BiArrowUpCircle, BiArrowDownCircle } from "oh-vue-icons/icons";
import { addIcons } from 'oh-vue-icons';
import TextEditor from "./TextEditor.vue";
import { onMounted, onUpdated, ref } from "vue";
import { usecommentFeedStore } from "../store/commentFeedStore"
import { helperHasNestedMessages } from "../utils/messageHelper";
import BaseModal from "./BaseModal.vue";
import CommentVoteButtonGroup from "./CommentVoteButtonGroup.vue";


// Icom Method
addIcons(PxMessageReply, BiArrowDownCircle, BiArrowUpCircle);

// Props
const props = defineProps<{
    messageInfo: {
        id: number,
        upvoted: boolean,
        downvoted: boolean,
        parentId: number | null
        userName: string
    }
}>()


// Store
const commentFeedStore = usecommentFeedStore();


// refs
const canReplyComment = ref(false);

const hasNestedThreads = ref(helperHasNestedMessages(props.messageInfo.parentId, commentFeedStore.commentFeed, props.messageInfo.id))

const showCommentThread = ref(helperHasNestedMessages(props.messageInfo.parentId, commentFeedStore.commentFeed, props.messageInfo.id))// main rest


const showModel = ref(false);

// Local varaible

let message = 0;

onMounted(() => {
    //  console.log('mount comment',canReplyComment.value);
})


//Methods
const toggleReply = () => {
    canReplyComment.value = !canReplyComment.value
}

// Expland and Collapse Nested messages 
const handleCollapseThread = () => {
    showCommentThread.value = !showCommentThread.value
}

// Collapse the Messages in the level of the nevly added message 
const autoCollapseCommentThread = () => {

    if (showCommentThread.value) {
        showCommentThread.value = false
    }

}
const deleteCurrentMessage = () => {
    canReplyComment.value = showModel.value = false
}

const handleCancel = () => {

    // if message is empty   remove  the message if not show the model 
    (message) ? showModel.value = true :
        canReplyComment.value = !canReplyComment.value

}

// Updated Life Cycle

onUpdated(() => {
    hasNestedThreads.value = helperHasNestedMessages(props.messageInfo.parentId, commentFeedStore.commentFeed, props.messageInfo.id)
})

</script>
<template>
    <div class="comment__item__reply">

        <div class="comment__buttons__wrapper">
            <div class="bg-white rounded">

                <CommentVoteButtonGroup 
                 @@downVote="commentFeedStore.downvoteComment(props.messageInfo.id)"
                 @@upVote="commentFeedStore.upvoteComment(props.messageInfo.id)"
                 :upvoted="props.messageInfo.upvoted" 
                 :downvoted="props.messageInfo.downvoted"/>

            </div>


            <button class="btn" @click="handleCancel" v-if="canReplyComment"
                :title="canReplyComment ? 'Click to Cancel' : 'Click to Reply'">
                Cancel X
            </button>

            <button class="btn" title="Click to Reply" v-else @click="canReplyComment = true">
                Reply <v-icon scale=1 name="px-message-reply"></v-icon>
            </button>


            <button class="btn" v-if="hasNestedThreads" @click="handleCollapseThread"
                :title="showCommentThread ? 'Click to expand feed' : 'Click to hide feed'">
                {{ showCommentThread ? 'Expand +' : 'Hide -' }}


            </button>
        </div>


        <template v-if="canReplyComment">
            <TextEditor :parentId="messageInfo.id" :userName="messageInfo.userName ?? ''"
                @@autoCollapseNest="autoCollapseCommentThread" @@hideEditor="toggleReply"
                @@checkMessageLength="message = $event" :showDiscussion="false" />
        </template>



    </div>

    <template v-if="!showCommentThread">
        <slot />
    </template>

    <BaseModal title="Discard comment?"
        description="You have a comment in progress, are you sure you want to discard it? " v-if="showModel"
        @@close=" showModel = !showModel" @@delete="deleteCurrentMessage" />



</template>

<style scoped lang="scss">
@use '../assets/scss/variables.scss' as v;



.comment__item__reply {


    p {
        margin: 0;
        font-size: 13px;
        color: v.$darkGray;
        font-weight: 500;
    }

    .comment__buttons__wrapper {
        display: flex;
        gap: 10px;
        margin-bottom: 5px;
        button{
        
                text-transform: lowercase;
                border-radius: 20px;
                padding-left: 10px;
                padding-right: 10px;
   
                &.btn__upvote {
   
                   padding: 5px;
                   margin-right: 0;
               }
       
               &.btn__downvote {
                   padding: 5px;
                   margin-right: 0;
       
               }
          
               &.btn__upvote.selected {
                   color: v.$brand-color !important;
               }
       
               &.btn__downvote.selected {
                   color: v.$downvote-clr !important;
               }
       
               &:hover {
                   opacity: 0.7;
               }     
        }
      
    }

}
</style>
