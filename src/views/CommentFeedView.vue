<script setup lang="ts">
import { onMounted } from 'vue';
import CommentSection from '../components/CommentSection.vue'
import TextEditor from '../components/TextEditor.vue';
import { usecommentFeedStore } from '../store/commentFeedStore';
import { addIcons } from 'oh-vue-icons';
import { RiLoader2Line } from 'oh-vue-icons/icons';
// import BaseModal from '../components/BaseModal.vue';

addIcons(RiLoader2Line);

const commentFeedStore = usecommentFeedStore();



onMounted(()=>{
   commentFeedStore.loadFeed();
})


</script>
<template>
    <div class="comment__feed">


        <div class="question__wrapper">

            <h1>What came first the Egg or the Hen ??</h1>

            <div class="question__detail">
                <p>I have been wondering what came first some says egg some says hen
                    my Teacher asked it told me to come up with the answer tommarow even which answer i have i need to
                    prove it
                    any thoughts?
                </p>
            </div>
            <div class="question__stats">
                <!-- Upvote down vote List -->
            </div>
        </div>
        <TextEditor :parentId="null" :showDiscussion="true" userName="" />

        <div class="filter__wrapper">
            <button :class="{ selected: commentFeedStore.isSortByUpvote }" class="btn btn__sort"
                @click="commentFeedStore.sortByUpvote()">
                Most Upvoted
            </button>

            <button :class="{ selected: !commentFeedStore.isSortByUpvote }" class="btn btn__reset"
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

    </div>
    <!-- <BaseModal/> -->
</template>


<style lang="scss" scoped>
@use '../assets/scss/mixins.scss' as m;

.comment__feed {
    @include m.verticalPadding(40px, 40px);
}

.question__wrapper {
    @include m.verticalMargin(0px, 20px)
}

.question__detail {
    max-width: 750px;
    line-height: 1.6;
}
</style>