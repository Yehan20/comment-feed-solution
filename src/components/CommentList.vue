<script setup lang="ts">

import CommentReply from './CommentReply.vue'

const props = defineProps<{
    comments: any[]
    allReplies: any[]
    bar?: number
}>()

const getRepliesPerComment = (id:number)=>{
     return props.allReplies.filter((comment)=>comment.parentId === id)
}
</script>
<template> 
    <div class="single__comment" v-for="comment, index in comments" :key="index">  
        <div class="single__comment__user">
            <img src="https://images.unsplash.com/photo-1640951613773-54706e06851d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width="30" height="30" alt="">
            <div class="line">

            </div>
        </div>
        <div class="single__comment__body">
            <div>
                <p>
                    <span>
                        User0001
                    </span>
                    .0 Points .less than a minute ago
                </p>

                <p class="comment">
                   
                    {{ comment.comment }}
                </p>


                <CommentReply>

                            <comment-list     
                            v-for="(subComment , index) in  getRepliesPerComment(comment.id)"
                            :key="index"
                            :comments="allReplies.filter((comment)=>comment.id === subComment.id)"
                            :allReplies="allReplies"
                              />
                </CommentReply>
            </div>

        </div>

</div>
   
</template>

<style lang="scss">
@use  '../assets/mixins.scss' as m;
@use  '../assets/variables.scss' as v;

.single__comment {
    @include m.verticalPadding(30px, 0);
    @include m.flexConfig(flex-start, nowrap, stretch);
    gap: 20px;
    max-width: 750px;

    p {
        margin: 0;
    }

    .single__comment__user {
        @include m.flexConfig(flex-start, nowrap, stretch);
        flex-direction: column;

        img {
            border-radius: 50%;
        }

        flex-shrink: 0;
    }

    .single__comment__body {


        p {
            font-size: 13px;
            color: v.$darkGray;
            font-weight: 500;

            span {
                color: #000;
                font-size: 15px;
            }
        }

        .comment {

            font-size: 15px;
            color: #000;
            margin: 8px 0;
        }

    }

    .line {
        height: 100%;
        width: 1px;
        background-color: v.$mediumGray;
        margin-top: 2px;
        @include m.center(0);
    }
}
</style
