<script setup lang="ts">
import { onWatcherCleanup, ref, watch } from 'vue';
import CommentSection from '../components/CommentSection.vue'
import TextEditor from '../components/TextEditor.vue';
import { usecommentFeedStore } from '../store/commentFeedStore';
import { addIcons } from 'oh-vue-icons';
import { RiLoader2Line } from 'oh-vue-icons/icons';
import { storeToRefs } from 'pinia';
import CommentVoteButtonGroup from '../components/CommentVoteButtonGroup.vue';



addIcons(RiLoader2Line);

// store
const commentFeedStore = usecommentFeedStore();

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
    <div class="comment__feed">

        <template v-if="isQuestionsLoaded">
            <div class="question__wrapper">

                <h1>{{ commentFeedStore.question }}</h1>

                <div class="question__detail">
                    <h2>
                        {{ commentFeedStore.questionDesc }}
                    </h2>
                </div>
                <div class="question__stats ">
                    <!-- Upvote down vote List -->
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

            <template v-if="commentFeedStore.isLoaded">
                <CommentSection />
            </template>

            <template v-else>
                <div class="loader__wraper">
                    <v-icon scale='2' color="red" name="ri-loader-2-line"></v-icon>
                </div>
            </template>
        </template>

        <template v-else>
            <div class="loader__wraper">
                <v-icon scale='2' color="red" name="ri-loader-2-line"></v-icon>
            </div>
        </template>
    </div>






</template>


<style lang="scss" scoped>
@use '../assets/scss/mixins.scss' as m;

.comment__feed {
    @include m.verticalPadding(40px, 40px);
    max-width: 750px;
    width: 100%;
}

.question__wrapper {
    @include m.verticalMargin(0px, 20px)
}

.question__detail h2 {
    max-width: 750px;
    line-height: 1.6;
    font-size: 0.9rem;
    font-weight: 400;
    margin: 10px 0;
}

.question__stats {
    display: flex;
    gap: 15px;
    align-items: center;
}
</style>