<script setup lang="ts">

import Images from '../assets/images/profileImages';
import { useCommentFeedStore  } from '../store/commentFeedStore';
import { Message } from '../types/message';
import { getDate } from '../utils/dateHelper';
import CommentReply from './CommentReply.vue'

const props = defineProps<{
    comments: Message[]
    allReplies?: Message[],

}>()

const commentFeedStore = useCommentFeedStore ();

</script>
<template>
    <div class="comment__item" v-for="(comment, index) in props.comments" :key="index">
        <div class="comment__user">
            <img :src="comment.profilePic? comment.profilePic : Images.DefaultProfile" width="30" height="30" alt="Profile of a User">
            <div class="line">
            </div>
        </div>
        <div class="comment__body">
            <p>
                <span>
                    {{ comment.userName }}
                </span>
                <b> . {{ comment.points }} Points </b>. {{ getDate(comment.createdAt) }}
            </p>

            <p class="comment__message">
                {{ comment.message }}
            </p>

            <CommentReply :messageInfo="{
                id: comment.id,
                upvoted: comment.isUpvoted, downvoted: comment.isDownvoted,
                parentId: comment.parentId,
                userName: comment.userName ?? '',
            }">
                <comment-list v-for="(subComment, index) in commentFeedStore.getRepliesPerComment(comment.id)"
                    :key="index" :comments="commentFeedStore.getReplyPerComment(subComment.id)"
                     />

            </CommentReply>
        </div>
    </div>
</template>

<style lang="scss">
@use '../assets/scss/mixins.scss' as m;
@use '../assets/scss/variables.scss' as v;

.comment__item {
    @include m.verticalPadding(10px, 0);
    @include m.flexConfig(flex-start, nowrap, stretch);
    gap: 20px;
   
    min-width: 572px;

    p {
        margin: 0;
    }

    .comment__user {
        @include m.flexConfig(flex-start, nowrap, stretch);
        flex-direction: column;

        img {
            border-radius: 50%;
            min-height: 30px;
            min-width: 30px;
        }

        flex-shrink: 0;
    }

    .comment__body {

        width: 100%;
        max-width: 450px;

        p {
            font-size: 13px;
            color: v.$darkGray;
            font-weight: 500;

            span {
                color: v.$content;
                font-size: 15px;
            }
        }

        .comment__message {

            font-size: 14px;
            color: v.$content;
            font-weight: 300;

            margin: 8px 0;
        }

    }

    .line {
        height: 100%;
        width: 1px;
        background-color: v.$secondary-bg;
        margin-top: 2px;
        @include m.center(0);
    }
}
</style>
