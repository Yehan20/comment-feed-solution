import { defineStore } from 'pinia';
import type { LocalStorage, Message } from '../types/message';
import { helperDownvote, helperUpvote, helperLocalStorage, helperUpdateLocalStorage} from '../utils/messageHelper';
import { questionFeeds } from '../data/questionFeeds';
import { QuestionFeed } from '../types/questionfeed';
import { getDiff } from '../utils/dateHelper';


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
export const useCommentFeedStore  = defineStore('comments', {

    state: () => {
        return {

            commentFeed:  [] as Message[],
            isSortByUpvote: false,
            isLoaded: false,
            totalPoints: 0,
            isUpvoted: false,
            isDownvoted: false,
            askedBy: "",
            questionId: 'Q1',
            question: '',
            questionDesc: "",
            activeQuestion:'Q1',
            datePosted:new Date(),

        }
    },

    getters: {
       
        // get call comments 
        getComments(state) {

            return (id: number | null) => state.commentFeed.filter((comment) => comment.parentId === id)
        },
        
        // get all replies no matter what comment 
        getReplies(state) {
      
            return state.commentFeed.filter((replyForComment) => replyForComment.parentId !== null); // ld    
        },
       
        // ALl replies avaible per comment
        getRepliesPerComment() {
            return (id: number) => this.getReplies.filter((reply) => reply.parentId == id)
        },
        
        //  match reply per comment 
        getReplyPerComment() {
            return (id: number) => this.getReplies.filter((reply) => reply.id === id)
        },
        
        // get Active Comments coments are not deleted becuase we implement new feature
        getActiveComment(state){
             
            // get all coments that which isDeleated doesnt have a type of boolean 
             return  state.commentFeed.filter((comment)=>typeof comment.isDeleated !== 'boolean' ).length
        }
    },

    actions: {
       
        // add new comment to post
        addComment(comment: Message) {

             this.commentFeed.unshift(comment);
 
            helperUpdateLocalStorage(this.questionId, { commentFeed: [...this.commentFeed] })

        },
        
        // main post 
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

                this.totalPoints += 2; 
                this.isUpvoted = !this.isUpvoted; 
                this.isDownvoted = !this.isDownvoted;

                helperUpdateLocalStorage(this.questionId, {
                    isDownvoted: this.isDownvoted,
                    isUpvoted: this.isUpvoted,
                    totalPoints: this.totalPoints
                })
               return;
            }

        },
       
        // specific reply comment
        upvoteComment(id: number) {
   
            let changedComment = this.commentFeed.find((comment) => comment.id === id) as Message
            helperUpvote(changedComment);

            helperUpdateLocalStorage(this.questionId, { commentFeed: [...this.commentFeed] })

        },
       
        // specific reply comment
        downvoteComment(id: number) {

            let changedComment = this.commentFeed.find((comment) => comment.id === id) as Message
            helperDownvote(changedComment);

            helperUpdateLocalStorage(this.questionId, { commentFeed: [...this.commentFeed] })
        },
      
        // main post
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

                this.totalPoints -= 2; 
                this.isUpvoted = !this.isUpvoted; 
                this.isDownvoted = !this.isDownvoted;
                helperUpdateLocalStorage(this.questionId, { isDownvoted: this.isDownvoted, isUpvoted: this.isUpvoted, totalPoints: this.totalPoints })

                return;

            }


        },
       
        // sort by most upvoted comments 
        sortByUpvote() {
  
                this.isSortByUpvote = true
                this.isLoaded = false;
                this.commentFeed.sort((a, b) => b.points - a.points)
                helperUpdateLocalStorage(this.questionId, { isSortByUpvote: this.isSortByUpvote,commentFeed:this.commentFeed })
            
        },

        // load from storage or from memory
        loadFeed() {

            const fromLocal = helperLocalStorage(this.questionId) as LocalStorage | null;

            if (!fromLocal) {

                const questionFeed: QuestionFeed = {...questionFeeds.find((questionFeed) => questionFeed.id === this.questionId) as QuestionFeed};


                this.commentFeed = [...questionFeed.commentFeed.sort((a,b)=>(getDiff(a.createdAt.toString(),b.createdAt.toString())))] // spread to prevent makin references
               

                this.totalPoints = questionFeed.points;
                this.askedBy = questionFeed.askedBy;
                this.isDownvoted = questionFeed.isDownvoted;
                this.isUpvoted = questionFeed.isUpvoted;
                this.question = questionFeed.question;
                this.questionDesc = questionFeed.questionDesc
                this.isSortByUpvote  = questionFeed.isSortByUpvote
                this.datePosted  = questionFeed.datePosted 

                helperUpdateLocalStorage(this.questionId,
                    {
                        commentFeed: this.commentFeed,
                        isSortByUpvote: this.isSortByUpvote,
                        askedBy: this.askedBy,
                        question: this.question,
                        questionDesc: this.questionDesc,
                        isDownvoted: this.isDownvoted,
                        isUpvoted: this.isUpvoted,
                        totalPoints: this.totalPoints,
                        datePosted:this.datePosted
                    })

            }
            else {

                this.isSortByUpvote = fromLocal.isSortByUpvote as boolean;
                this.askedBy = fromLocal.askedBy as string;
                this.question = fromLocal.question as string;
                this.questionDesc = fromLocal.questionDesc as string;
                this.isDownvoted = fromLocal.isDownvoted as boolean;
                this.isUpvoted = fromLocal.isUpvoted as boolean;
                this.totalPoints = fromLocal.totalPoints as number;
                this.datePosted   = fromLocal.datePosted as Date
                let feed=  (fromLocal.commentFeed) as Message[]

                this.isSortByUpvote 
                ?  this.commentFeed = feed.sort((a,b)=>b.points - a.points)
                 : 
                 this.commentFeed = feed.sort((a,b)=>(getDiff(a.createdAt.toString(),b.createdAt.toString())))
      
            }

            this.isLoaded = true;
        },
     
        // get default order
        resetSort() {

                this.isSortByUpvote = false
                this.commentFeed.sort((a,b)=>(getDiff(a.createdAt.toString(),b.createdAt.toString())))
                this.isLoaded = false;
            
                helperUpdateLocalStorage(this.questionId, { isSortByUpvote: this.isSortByUpvote,commentFeed:this.commentFeed })
        },
        
        // toggle between questions
        changeQuestion(qId: string) {
           
            helperUpdateLocalStorage(this.questionId, { isSortByUpvote: false })
            this.questionId = qId;
            this.loadFeed();
      
        },

        //delete  comment 
         deleteComment(id:number) {
            
            // fetch the comment
            const updatedComment = this.commentFeed.find((comment)=>comment.id == id) as Message; 
           
            // if this propery is not existing add the attribute
            if(!updatedComment.hasOwnProperty("isDeleted")){
                   updatedComment.isDeleated = true; // make it deleted 
            }
            
            // sync it with the local storage
            helperUpdateLocalStorage(this.questionId, { commentFeed: [...this.commentFeed] })
         }

    }


})

