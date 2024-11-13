<script setup lang="ts">

import { PxMessageReply, BiArrowUpCircle, BiArrowDownCircle, FaReply } from "oh-vue-icons/icons";
import { addIcons } from 'oh-vue-icons';
import TextEditor from "./TextEditor.vue";
import {  onUpdated, ref } from "vue";
import { useCommentFeedStore  } from "../store/commentFeedStore"
import { helperHasNestedMessages } from "../utils/messageHelper";
import BaseModal from "./BaseModal.vue";
import CommentVoteButtonGroup from "./CommentVoteButtonGroup.vue";


// Icon Method
addIcons(PxMessageReply, BiArrowDownCircle, BiArrowUpCircle,FaReply);

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
const commentFeedStore = useCommentFeedStore ();

// refs
const canReplyComment = ref(false);

const hasNestedThreads = ref(helperHasNestedMessages(props.messageInfo.parentId, commentFeedStore.commentFeed, props.messageInfo.id))

// change for expand and show child coments
const showCommentThread = ref(helperHasNestedMessages(props.messageInfo.parentId, commentFeedStore.commentFeed, props.messageInfo.id))

const showModal = ref(false);

// Local varaible
let message = 0;


//Methods
const toggleReply = () => {
    canReplyComment.value = !canReplyComment.value
}

// Expland and Collapse Nested messages 
const handleCollapseThread = () => {
    showCommentThread.value = !showCommentThread.value
}

// Collapse the Messages in the level of the newly added message  show it if you add a message its replies in level will auto collapse
const autoCollapseCommentThread = () => {

    if (showCommentThread.value) {
        showCommentThread.value = false // the thread will show now
    }

}
const deleteCurrentMessage = () => {
    canReplyComment.value = showModal.value = false
}

const handleCancel = () => {

    // if message is empty   remove  the message if not show the model 
    (message) ? showModal.value = true :
        canReplyComment.value = !canReplyComment.value
     
    message =0;
}


// update the value on every change to sync with the comemnts so that we can automaitcally generate hide expand button
onUpdated(() => {
    hasNestedThreads.value = helperHasNestedMessages(props.messageInfo.parentId, commentFeedStore.commentFeed, props.messageInfo.id)

})

</script>

<template>
    <div class="comment__item__reply">

        <div class="comment__buttons__wrapper">
            <div>

                <CommentVoteButtonGroup 
                 @@downVote="commentFeedStore.downvoteComment(props.messageInfo.id)"
                 @@upVote="commentFeedStore.upvoteComment(props.messageInfo.id)"
                 :upvoted="props.messageInfo.upvoted" 
                 :downvoted="props.messageInfo.downvoted"/>

            </div>


            <button class="btn cancel__btn" @click="handleCancel" v-if="canReplyComment"
                :title="canReplyComment ? 'Click to Cancel' : 'Click to Reply'">
                Cancel X
            </button>

            <button class="btn reply__btn" title="Click to Reply" v-else @click="canReplyComment = true">
                Reply 
                <v-icon scale=1 name="px-message-reply"></v-icon>
            </button>


            <button  @click="handleCollapseThread" v-if="commentFeedStore.getRepliesPerComment(props.messageInfo.id).length" class="btn" title="Total Replies">
                {{ commentFeedStore.getRepliesPerComment(props.messageInfo.id).length }}    Replies  
                <v-icon scale=1 name="fa-reply"></v-icon>
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
        description="You have a comment in progress, are you sure you want to discard it? " v-if="showModal"
        @@close=" showModal = !showModal" @@delete="deleteCurrentMessage" />



</template>

<style scoped lang="scss">
@use '../assets/scss/variables.scss' as v;

.comment__item__reply {
    label{
         font-size: 13px;
    }

    p {
        margin: 0;
        font-size: 13px;
        color: v.$darkGray;
        font-weight: 500;
    }

    .comment__buttons__wrapper {
        display: flex;
        gap: 10px;
        align-items: center;
        margin-bottom: 5px;
        
        button{
        
                text-transform: lowercase;
                border-radius: 20px;
                padding-left: 10px;
                padding-right: 10px;
                background-color: v.$secondary-bg;

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
