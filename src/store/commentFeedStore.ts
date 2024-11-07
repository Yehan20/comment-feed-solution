import { defineStore } from 'pinia';
import type { Message } from '../types/message';
import { helperDownvote, helperUpvote } from '../utils/messageHelper';
import Images from '../assets/images/profileImages';

/*
   reddit 

   updovte click increase by one
   updovte unlick click derease by one

   downvote click decrease by one
   downvote unlick increase by one

   upvote clicked and down vote clicked decrease by two
   downvote clicked and upvote clicked increase by two

*/

//Code of the Store 
export const usecommentFeedStore = defineStore('comments', {

    state: () => {
        return {
            text: "Zeus is God",
            commentFeed: [

                {
                    id: 1,
                    message: "from azerbaijan",
                    parentId: null,
                    points:4,
                    isUpvoted:false,
                    isDownvoted:true,
                    userName:"Zeus",
                    profilePic:Images.Zeus
                },
                {
                    id: 2,
                    message: "hello world",
                    parentId: 1,
                    points:3,
                    isUpvoted:false,
                    isDownvoted:false,
                    userName:"Hades",
                    profilePic:Images.Hades
                },
                {
                    id: 3,
                    message: "hello world",
                    parentId: 2,
                    points:5,
                    isUpvoted:false,
                    isDownvoted:false,
                    userName:"Hestia",
                    profilePic:Images.Hestia
                },
                {
                    id: 4,
                    message: "hello world",
                    parentId: 3,
                    points:-1,
                    isUpvoted:false,
                    isDownvoted:false,
                    userName:"Appollo",
                    profilePic:Images.Appollo
                },
                {
                    id: 5,
                    message: "hello world",
                    parentId: 4,
                    points:12,
                    isUpvoted:false,
                    isDownvoted:false,
                    userName:"Athena",
                    profilePic:Images.Athena
                },
                {
                    id: 6,
                    message: "hello world",
                    parentId: 5,
                    points:12,
                    isUpvoted:false,
                    isDownvoted:false,
                    userName:"Kronos",
                    profilePic:Images.Kronos
                },
                {
                    id: 7,
                    message: "hello world",
                    parentId: 6,
                    points:12,
                    isUpvoted:false,
                    isDownvoted:false,
                    userName:"Ariest",
                    profilePic:Images.Aries
                },
            ],
          
        }
    },
    actions:{

         addComment(comment:Message){

              this.commentFeed.push(comment);
           
         },
         upvoteComment(id:number) {   

              let changedComment = this.commentFeed.find((comment)=>comment.id === id) as Message;
              helperUpvote(changedComment);
              
         },
         downvoteComment(id:number) {

              let changedComment = this.commentFeed.find((comment)=>comment.id === id) as Message  
              helperDownvote(changedComment);
         }
   
       
    }
    

})

