import { defineStore } from 'pinia';
import type { LocalStorage, Message } from '../types/message';
import { helperDownvote, helperUpvote, helperLocalStorage, helperUpdateLocalStorage } from '../utils/messageHelper';
import { questionFeeds } from '../data/questionFeeds';
import { QuestionFeed } from '../types/questionfeed';
import Images from '../assets/images/profileImages';

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

            commentFeed:  [

                {
                    id: 1,
                    message: "from azerbaijan",
                    parentId: null,
                    points: 7,
                    isUpvoted: false,
                    isDownvoted: true,
                    userName: "Zeus",
                    profilePic: Images.Zeus,
                    createdAt: new Date("2021-11-08")
                    ,
            
                },
                {
                    id: 2,
                    message: "hello world",
                    parentId: 1,
                    points: 3,
                    isUpvoted: false,
                    isDownvoted: false,
                    userName: "Hades",
                    profilePic: Images.Hades,
                    createdAt: new Date("2024-10-08")
                    ,
            
                },
            
                {
                    id: 111,
                    message: "hello world",
                    parentId: 1,
                    points: 3,
                    isUpvoted: false,
                    isDownvoted: false,
                    userName: "Hades ge malli",
                    profilePic: Images.Hades,
                    createdAt: new Date("2024-10-08")
                    ,
            
                },
                {
                    id: 3,
                    message: "hello world",
                    parentId: 2,
                    points: 5,
                    isUpvoted: false,
                    isDownvoted: false,
                    userName: "Hestia",
                    profilePic: Images.Hestia,
                    createdAt: new Date("2024-11-01"),
            
                },
                {
                    id: 4,
                    message: "hello world",
                    parentId: 3,
                    points: -1,
                    isUpvoted: false,
                    isDownvoted: false,
                    userName: "Appollo",
                    profilePic: Images.Appollo,
                    createdAt: new Date("2024-08-08"),
            
                },
                {
                    id: 5,
                    message: "hello world",
                    parentId: 4,
                    points: 10,
                    isUpvoted: false,
                    isDownvoted: false,
                    userName: "Athena",
                    profilePic: Images.Athena,
                    createdAt: new Date("2024-05-08"),
            
                },
                {
                    id: 6,
                    message: "hello world",
                    parentId: 5,
                    points: 5,
                    isUpvoted: false,
                    isDownvoted: false,
                    userName: "Kronos",
                    profilePic: Images.Kronos,
                    createdAt: new Date("2022-11-08"),
            
                },
                {
                    id: 7,
                    message: "hello world",
                    parentId: 6,
                    points: 7,
                    isUpvoted: false,
                    isDownvoted: false,
                    userName: "Ariest",
                    profilePic: Images.Aries,
                    createdAt: new Date("2023-11-08"),
            
                },
            
            
            
            
                {
                    id: 8,
                    message: "Yehan",
                    parentId: null,
                    points: 8,
                    isUpvoted: false,
                    isDownvoted: false,
                    userName: "Dog",
                    profilePic: Images.Aries,
                    createdAt: new Date("2023-11-08"),
            
                },
            
            
            
                {
                    id: 9,
                    message: "Nilnaga",
                    parentId: null,
                    points: 9,
                    isUpvoted: false,
                    isDownvoted: false,
                    userName: "Cat",
                    profilePic: Images.Aries,
                    createdAt: new Date("2023-11-08"),
            
                },
            
                {
                    id: 10,
                    message: "Don",
                    parentId: null,
                    points: 10,
                    isUpvoted: false,
                    isDownvoted: false,
                    userName: "Lion",
                    profilePic: Images.Aries,
                    createdAt: new Date("2023-11-08"),
            
                },
            
            ],
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

