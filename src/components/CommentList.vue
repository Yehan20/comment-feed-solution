<script setup lang="ts">

import { ref } from 'vue';
import Images from '../assets/images/profileImages';
import { useCommentFeedStore } from '../store/commentFeedStore';
import { Message } from '../types/message';
import { getDate } from '../utils/dateHelper';
import CommentReply from './CommentReply.vue'

const props = defineProps<{
    comments: Message[]
}>()

// large comment feed we show only 20 first
const commentFeedStore = useCommentFeedStore();
const limit = ref(20);
const loadMore = () => limit.value += 10;

</script>
<template>
    <div class="comment__item" v-for="(comment, index) in props.comments.slice(0, limit)" :key="index">
        <div class="comment__user" :class="comment.isDeleated ? 'deleted' : ''">
            <img :src="comment.profilePic ? comment.profilePic : Images.DefaultProfile" width="30" height="30"
                alt="Profile of a User">
            <div class="line">
            </div>
        </div>
        <div class="comment__body">
    
                <p v-if="!comment.isDeleated" aria-label='Username, Total Points, and Creation Date'>
                    <span>
                        {{ comment.userName }}
                    </span>
                    <b> . {{ comment.points }} Points </b>. {{ getDate(comment.createdAt) }}
                </p>
                <p v-else :class="comment.isDeleated ? 'deleted' : ''">
                  Comment Deleted by You 
                </p>
 

                <p v-if="!comment.isDeleated" class="comment__message" aria-label="User comment">
                    {{ comment.message }}
                </p>


            <CommentReply :messageInfo="{
                id: comment.id,
                upvoted: comment.isUpvoted, downvoted: comment.isDownvoted,
                parentId: comment.parentId,
                userName: comment.userName ?? '',
                isDeleted: comment.isDeleated,

            }">
                <comment-list v-for="(subComment, index) in commentFeedStore.getRepliesPerComment(comment.id)"
                    :key="index" :comments="commentFeedStore.getReplyPerComment(subComment.id)" />

            </CommentReply>
        </div>
    </div>
    <button class="btn btn__load" v-if="limit <= props.comments.length" @click="loadMore">View More Comments
        {{ props.comments.length }}</button>
</template>

<style lang="scss">
@use '../assets/scss/mixins.scss' as m;
@use '../assets/scss/variables.scss' as v;

.btn__load {
    padding: 10px;
    background-color: v.$brand-color;
    border-radius: 20px;
    margin-top: 20px;
    color: v.$white;

}

.comment__item {
    @include m.verticalPadding(10px, 10px);
    @include m.flexConfig(flex-start, nowrap, stretch);
    gap: 20px;
    min-width: 572px;

    .deleted {
        opacity: 0.5;
        margin-bottom: 10px;
    }



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

    .load__more {
        cursor: pointer;
    }
}
</style>
