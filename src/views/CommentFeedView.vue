<script setup lang="ts">
import { onWatcherCleanup, ref, watch } from 'vue';
import TextEditor from '../components/TextEditor.vue';
import { useCommentFeedStore  } from '../store/commentFeedStore';
import { addIcons } from 'oh-vue-icons';
import { RiLoader2Line } from 'oh-vue-icons/icons';
import { storeToRefs } from 'pinia';
import CommentVoteButtonGroup from '../components/CommentVoteButtonGroup.vue';
import { getDate } from '../utils/dateHelper';
import RelatedQuestionList from '../components/RelatedQuestionList.vue';
import CommentList from '../components/CommentList.vue';


addIcons(RiLoader2Line);

// store
const commentFeedStore = useCommentFeedStore ();

// refs
const { isLoaded, questionId } = storeToRefs(commentFeedStore)
const isQuestionsLoaded = ref(true);


// Wacthers
watch([isLoaded], () => {
    if (!isLoaded.value) {

        let timeoutId = null
        timeoutId = setTimeout(() => {
            isLoaded.value = true
        }, 500)

        // prevent timeout out from building
        onWatcherCleanup(() => {

            clearTimeout(timeoutId);
        })
    }
})

// Question ID Change Trigger Loder
watch(questionId, () => {

    isQuestionsLoaded.value = false;

    let timeoutId = setTimeout(() => {
        isQuestionsLoaded.value = true
    }, 500)

    // prevent timeout out from building
    onWatcherCleanup(() => {

        clearTimeout(timeoutId);
    })

})


</script>
<template>
    <section class="comment__feed">

        <RelatedQuestionList />

        <template v-if="isQuestionsLoaded">
            <div class="question__wrapper">
                <p class="question__author">posted by: <I>{{ commentFeedStore.askedBy }}</I> -
                    {{ getDate(commentFeedStore.datePosted) }}</p>

                <h1 id="main-title">{{ commentFeedStore.question }}</h1>

                <div class="question__detail">
                    <h2>
                        {{ commentFeedStore.questionDesc }}
                    </h2>
                </div>
                <div class="question__stats ">
                 
                    <div class="bg-white rounded">
                        <CommentVoteButtonGroup @@downVote="commentFeedStore.downvoteMain()"
                            @@upVote="commentFeedStore.upovoteMain()" :upvoted="commentFeedStore.isUpvoted"
                            :downvoted="commentFeedStore.isDownvoted" />
                    </div>
                    <p class="m-none">{{ commentFeedStore.totalPoints }} points</p>
                </div>
            </div>



            <TextEditor :parentId="null" :showDiscussion="true" userName="" />

            <div class="filter__wrapper">
                <button title="Sort by Most Points" :class="{ selected: commentFeedStore.isSortByUpvote }"
                    class="btn btn__sort" @click="commentFeedStore.sortByUpvote()">
                    Most Upvoted
                </button>

                <button title="Reset" :class="{ selected: !commentFeedStore.isSortByUpvote }" class="btn btn__reset"
                    @click="commentFeedStore.resetSort()">
                    Reset
                </button>
            </div>


            <div class="comments__section" v-if="commentFeedStore.isLoaded">
                <CommentList :comments="commentFeedStore.getComments(null)" />
            </div>


            <div class="loader__wraper" v-else>
                <v-icon scale='2' color="#750000" name="ri-loader-2-line"></v-icon>
            </div>


        </template>

        <template v-else>
            <div class="loader__wraper">
                <v-icon scale='2' color="#750000" name="ri-loader-2-line"></v-icon>
            </div>
        </template>
    </section>

</template>


<style lang="scss" scoped>
@use '../assets/scss/mixins.scss' as m;

.comment__feed {
    @include m.verticalPadding(20px, 40px);
    max-width: 1100px;
    width: 100%;
}

.comments__section {
    @include m.verticalPadding(10px, 0);
    overflow: auto;
}

.question__wrapper {
    @include m.verticalMargin(0px, 20px);
    max-width: 950px;
}

#main-title {
    line-height: 1.2;
    margin: 20px 0;

    @include m.for-mobile {
        font-size: 1.6rem;
    }
}

.question__detail h2 {
    max-width: 750px;
    line-height: 1.6;
    font-size: 0.9rem;
    font-weight: 400;
    margin: 10px 0;
}

.question__author {
    margin-bottom: 5px;
    margin-top: 5px;
    I {
         font-weight: 600;
    }
}

.question__stats {
    display: flex;
    gap: 15px;
    align-items: center;
}
</style>