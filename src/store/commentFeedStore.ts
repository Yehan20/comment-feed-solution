import { defineStore } from 'pinia';
import type { LocalStorage, Message } from '../types/message';
import { helperDownvote, helperUpvote,helperLocalStorage, helperUpdateLocalStorage } from '../utils/messageHelper';
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

const commentFeed:Message[]=  [

    {
        id: 1,
        message: "from azerbaijan",
        parentId: null,
        points:7,
        isUpvoted:false,
        isDownvoted:true,
        userName:"Zeus",
        profilePic:Images.Zeus,
        createdAt:new Date("2021-11-08T14:30:00")
    },
    {
        id: 2,
        message: "hello world",
        parentId: 1,
        points:3,
        isUpvoted:false,
        isDownvoted:false,
        userName:"Hades",
        profilePic:Images.Hades,
        createdAt:new Date("2024-10-08T14:30:00")
    },
    {
        id: 3,
        message: "hello world",
        parentId: 2,
        points:5,
        isUpvoted:false,
        isDownvoted:false,
        userName:"Hestia",
        profilePic:Images.Hestia,
        createdAt:new Date("2024-11-01T14:30:00")
    },
    {
        id: 4,
        message: "hello world",
        parentId: 3,
        points:-1,
        isUpvoted:false,
        isDownvoted:false,
        userName:"Appollo",
        profilePic:Images.Appollo,
        createdAt:new Date("2024-08-08T04:30:00")
    },
    {
        id: 5,
        message: "hello world",
        parentId: 4,
        points:10,
        isUpvoted:false,
        isDownvoted:false,
        userName:"Athena",
        profilePic:Images.Athena,
        createdAt:new Date("2024-05-08T14:30:00")
    },
    {
        id: 6,
        message: "hello world",
        parentId: 5,
        points:5,
        isUpvoted:false,
        isDownvoted:false,
        userName:"Kronos",
        profilePic:Images.Kronos,
        createdAt:new Date("2022-11-08T14:30:00")
    },
    {
        id: 7,
        message: "hello world",
        parentId: 6,
        points:7,
        isUpvoted:false,
        isDownvoted:false,
        userName:"Ariest",
        profilePic:Images.Aries,
        createdAt:new Date("2023-11-08T14:30:00")
    },




    {
        id: 8,
        message: "Yehan",
        parentId: null,
        points:8,
        isUpvoted:false,
        isDownvoted:false,
        userName:"Dog",
        profilePic:Images.Aries,
        createdAt:new Date("2023-11-08T14:30:00")
    },



    {
        id: 9,
        message: "Nilnaga",
        parentId: null,
        points:9,
        isUpvoted:false,
        isDownvoted:false,
        userName:"Cat",
        profilePic:Images.Aries,
        createdAt:new Date("2023-11-08T14:30:00")
    },

    {
        id: 10,
        message: "Don",
        parentId: null,
        points:10,
        isUpvoted:false,
        isDownvoted:false,
        userName:"Lion",
        profilePic:Images.Aries,
        createdAt:new Date("2023-11-08T14:30:00")
    },

]

//Code of the Store 
export const usecommentFeedStore = defineStore('comments', {

    state: () => {
        return {
            text: "Zeus is God",
            commentFeed:[] as Message[],
            isSortByUpvote:false,    
            originalFeed:[] as Message[],
        }
    },
    getters:{
 
    },
    actions:{

         addComment(comment:Message){

              this.commentFeed.push(comment);
              this.originalFeed.push(comment);

              helperUpdateLocalStorage('Q1',
                
                {   commentFeed:[...this.commentFeed],
                    originalFeed:[...this.originalFeed],
                    isSortByUpdate:this.isSortByUpvote
                      
                })
           
         },
         upvoteComment(id:number) {   

              let changedComment = this.commentFeed.find((comment)=>comment.id === id) as Message
              helperUpvote(changedComment);
              helperUpdateLocalStorage('Q1',

                {   commentFeed:[...this.commentFeed],
                    originalFeed:[...this.originalFeed],
                    isSortByUpdate:this.isSortByUpvote
                      
                })
              
         },
         downvoteComment(id:number) {

              let changedComment = this.commentFeed.find((comment)=>comment.id === id) as Message  
              helperDownvote(changedComment);

              helperUpdateLocalStorage('Q1',
                
                {   commentFeed:[...this.commentFeed],
                    originalFeed:[...this.originalFeed],
                    isSortByUpdate:this.isSortByUpvote
                      
                })
         },


         sortByUpvote(){

               let sorted =  [...this.commentFeed].sort((a,b)=>b.points - a.points);
               this.isSortByUpvote = true
               this.commentFeed = sorted;

               helperUpdateLocalStorage('Q1',
                
                {   commentFeed:[...this.commentFeed],
                    originalFeed:[...this.originalFeed],
                    isSortByUpdate:this.isSortByUpvote
                      
                })
             
         },

         loadFeed() {
              const fromLocal =  helperLocalStorage("Q1");

              if(!fromLocal) {
                this.commentFeed =   [...commentFeed],
                this.originalFeed =[...commentFeed]
              
              }
              else {
                 this.commentFeed = fromLocal.commentFeed;
                 this.originalFeed = fromLocal.originalFeed;
                 this.isSortByUpvote = fromLocal.isSortByUpdate
              }
           

         },

         resetSort (){
             this.isSortByUpvote = false;
             this.commentFeed = [...this.originalFeed ] 

             helperUpdateLocalStorage('Q1',
                
                {   commentFeed:[...this.commentFeed],
                    originalFeed:[...this.originalFeed],
                    isSortByUpdate:this.isSortByUpvote
                      
                })
         }
       
    }
    

})

