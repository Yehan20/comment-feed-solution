import { defineStore } from 'pinia';
import type { LocalStorage, Message } from '../types/message';
import { helperDownvote, helperUpvote, helperLocalStorage, helperUpdateLocalStorage } from '../utils/messageHelper';
import { questionFeeds } from '../data/questionFeeds';
import { QuestionFeed } from '../types/questionfeed';

/*
   Upvote | Down Vote Logic based on reddit

   updvote click increase by one
   updvote unlick click derease by one

   downvote click decrease by one
   downvote unlick increase by one

   upvote  clicked and down vote clicked decrease by two
   downvote clicked and upvote clicked increase by two

*/



//Code of the Store 
export const usecommentFeedStore = defineStore('comments', {

    state: () => {
        return {

            commentFeed: [] as Message[],
            isSortByUpvote: false,
            isLoaded: false,
            totalPoints: 0,
            isUpvoted: false,
            isDownvoted: false,
            askedBy: "",
            questionId: 'Q1',
            question: '',
            questionDesc: "",
            mounted: false,
        }
    },

    getters: {

        getComments(state) {

            if (state.isSortByUpvote) {
                return (id: number | null) => state.commentFeed.filter((comment) => comment.parentId === id).sort((a, b) => b.points - a.points);
            }
            return (id: number | null) => state.commentFeed.filter((comment) => comment.parentId === id)
        },

        getReplies(state) {
            console.log('cimputed call REPLY');
            if (state.isSortByUpvote) {

                return state.commentFeed.filter((comment) => comment.parentId !== null).sort((a, b) => b.points - a.points);

            }
            return state.commentFeed.filter((replyForComment) => replyForComment.parentId !== null); // ld    
        },

        getRepliesPerComment() {



            return (id: number) => this.getReplies.filter((reply) => reply.parentId == id)
        },

        allRepliesPerComment() {
            return (id: number) => this.getReplies.filter((reply) => reply.id === id)
        },


    },

    actions: {

        addComment(comment: Message) {

            this.commentFeed.push(comment);

            helperUpdateLocalStorage(this.questionId, { commentFeed: [...this.commentFeed] })

        },

        upovoteMain() {

            if (!this.isDownvoted && !this.isUpvoted) { // comment  not upovted or not downvoted

                this.totalPoints = this.totalPoints + 1
                this.isUpvoted = !this.isUpvoted

                helperUpdateLocalStorage(this.questionId, {
                    isDownvoted: this.isDownvoted,
                    isUpvoted: this.isUpvoted,
                    totalPoints: this.totalPoints
                })
               return;
            }

            if (!this.isDownvoted && this.isUpvoted) {  // comment is upvoted

                this.totalPoints = this.totalPoints - 1
                this.isUpvoted = !this.isUpvoted

                helperUpdateLocalStorage(this.questionId, {
                    isDownvoted: this.isDownvoted,
                    isUpvoted: this.isUpvoted,
                    totalPoints: this.totalPoints
                })
                return;
            }

            if (this.isDownvoted && !this.isUpvoted) {  // comment is downvoted not upvoted

                this.totalPoints += 2; // change 
                this.isUpvoted = !this.isUpvoted; // same
                this.isDownvoted = !this.isDownvoted;

                helperUpdateLocalStorage(this.questionId, {
                    isDownvoted: this.isDownvoted,
                    isUpvoted: this.isUpvoted,
                    totalPoints: this.totalPoints
                })
               return;
            }

        },

        upvoteComment(id: number) {


   
            let changedComment = this.commentFeed.find((comment) => comment.id === id) as Message
            helperUpvote(changedComment);

            helperUpdateLocalStorage(this.questionId, { commentFeed: [...this.commentFeed] })

        },

        downvoteComment(id: number) {

            let changedComment = this.commentFeed.find((comment) => comment.id === id) as Message
            helperDownvote(changedComment);

            helperUpdateLocalStorage(this.questionId, { commentFeed: [...this.commentFeed] })
        },

        downvoteMain() {

            if (!this.isDownvoted && !this.isUpvoted) { // comment not donwvoted or upvoted

                this.totalPoints = this.totalPoints - 1
                this.isDownvoted = !this.isDownvoted
                helperUpdateLocalStorage(this.questionId, { isDownvoted: this.isDownvoted, isUpvoted: this.isUpvoted, totalPoints: this.totalPoints })
                return;

            }


            if (this.isDownvoted && !this.isUpvoted) {  // comment is downvoted and not upvoted 

                this.totalPoints = this.totalPoints + 1
                this.isDownvoted = !this.isDownvoted
                helperUpdateLocalStorage(this.questionId, { isDownvoted: this.isDownvoted, isUpvoted: this.isUpvoted, totalPoints: this.totalPoints })
                return;

            }

            if (!this.isDownvoted && this.isUpvoted) { // comment is not downvoted but upvoted

                this.totalPoints -= 2; // change 
                this.isUpvoted = !this.isUpvoted; // same
                this.isDownvoted = !this.isDownvoted;
                helperUpdateLocalStorage(this.questionId, { isDownvoted: this.isDownvoted, isUpvoted: this.isUpvoted, totalPoints: this.totalPoints })

                return;

            }


        },

        sortByUpvote() {

            if (!this.isSortByUpvote) {
                this.isSortByUpvote = true
                this.isLoaded = false;

                helperUpdateLocalStorage(this.questionId, { isSortByUpvote: this.isSortByUpvote })
            }


        },

        loadFeed() {

            const fromLocal = helperLocalStorage(this.questionId) as LocalStorage | null;

            if (!fromLocal) {
                const questionFeed: QuestionFeed = {...questionFeeds.find((questionFeed) => questionFeed.id === this.questionId) as QuestionFeed};


                this.commentFeed = questionFeed.commentFeed
                this.totalPoints = questionFeed.points;
                this.askedBy = questionFeed.askedBy;
                this.isDownvoted = questionFeed.isDownvoted;
                this.isUpvoted = questionFeed.isUpvoted;
                this.question = questionFeed.question;
                this.questionDesc = questionFeed.questionDesc


                helperUpdateLocalStorage(this.questionId,
                    {
                        commentFeed: this.commentFeed,
                        isSortByUpvote: this.isSortByUpvote,
                        askedBy: this.askedBy,
                        question: this.question,
                        questionDesc: this.questionDesc,
                        isDownvoted: this.isDownvoted,
                        isUpvoted: this.isUpvoted,
                        totalPoints: this.totalPoints

                    })

            }
            else {

                this.commentFeed = fromLocal.commentFeed as Message[];
                this.isSortByUpvote = fromLocal.isSortByUpvote as boolean;
                this.askedBy = fromLocal.askedBy as string;
                this.question = fromLocal.question as string;
                this.questionDesc = fromLocal.questionDesc as string;
                this.isDownvoted = fromLocal.isDownvoted as boolean;
                this.isUpvoted = fromLocal.isUpvoted as boolean;
                this.totalPoints = fromLocal.totalPoints as number;
            }

            this.isLoaded = true;

        },

        resetSort() {

            if (this.isSortByUpvote) {
                this.isSortByUpvote = false
                this.isLoaded = false;
            }


            helperUpdateLocalStorage('Q1', { isSortByUpvote: this.isSortByUpvote })
        },

        changeQuestion(qId: string) {
           
  
            this.questionId = qId;
            this.loadFeed();
      
        }


    }


})

