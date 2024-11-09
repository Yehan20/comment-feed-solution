import { defineStore } from 'pinia';
import type { LocalStorage, Message } from '../types/message';
import { helperDownvote, helperUpvote, helperLocalStorage, helperUpdateLocalStorage } from '../utils/messageHelper';
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

const commentFeed: Message[] = [

    {
        id: 1,
        message: "from azerbaijan",
        parentId: null,
        points: 7,
        isUpvoted: false,
        isDownvoted: true,
        userName: "Zeus",
        profilePic: Images.Zeus,
        createdAt: new Date("2021-11-08T14:30:00")
        ,
        collapsed: false
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
        createdAt: new Date("2024-10-08T14:30:00")
        ,
        collapsed: false
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
        createdAt: new Date("2024-11-01T14:30:00"),
        collapsed: false
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
        createdAt: new Date("2024-08-08T04:30:00"),
        collapsed:true
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
        createdAt: new Date("2024-05-08T14:30:00"),
        collapsed: false
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
        createdAt: new Date("2022-11-08T14:30:00"),
        collapsed: false
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
        createdAt: new Date("2023-11-08T14:30:00"),
        collapsed: false
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
        createdAt: new Date("2023-11-08T14:30:00"),
        collapsed: false
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
        createdAt: new Date("2023-11-08T14:30:00"),
        collapsed: false
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
        createdAt: new Date("2023-11-08T14:30:00"),
        collapsed: false
    },

]

//Code of the Store 
export const usecommentFeedStore = defineStore('comments', {

    state: () => {
        return {
       
            commentFeed: [] as Message[],
            isSortByUpvote: false,
            isLoaded:false
        }
    },
 
    actions: {

        addComment(comment: Message) {

            this.commentFeed.push(comment);
            helperUpdateLocalStorage('Q1', {commentFeed: [...this.commentFeed]})

        },

        upvoteComment(id: number) {

            let changedComment = this.commentFeed.find((comment) => comment.id === id) as Message
            helperUpvote(changedComment);

            helperUpdateLocalStorage('Q1', { commentFeed: [...this.commentFeed]})

        },

        downvoteComment(id: number) {

            let changedComment = this.commentFeed.find((comment) => comment.id === id) as Message
            helperDownvote(changedComment);

            helperUpdateLocalStorage('Q1', {commentFeed: [...this.commentFeed]})
        },


        sortByUpvote() {
             this.isSortByUpvote = true

             helperUpdateLocalStorage('Q1',{isSortByUpdate: this.isSortByUpvote})

        },

        loadFeed() {

            const fromLocal = helperLocalStorage("Q1") as LocalStorage | null;

            if (!fromLocal) {
                    this.commentFeed = [...commentFeed],
                    helperUpdateLocalStorage("Q1",{commentFeed:this.commentFeed,isSortByUpdate:this.isSortByUpvote})

            }
            else {

                this.commentFeed = fromLocal.commentFeed as Message[];
                this.isSortByUpvote = fromLocal.isSortByUpdate as  boolean;
            }

            this.isLoaded = true;


        },

        resetSort() {
            this.isSortByUpvote = false;

            helperUpdateLocalStorage('Q1',{isSortByUpdate: this.isSortByUpvote})
        },

   
    }


})

