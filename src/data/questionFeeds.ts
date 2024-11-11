import Images from "../assets/images/profileImages";
import { Message } from "../types/message";

import { QuestionFeed } from "../types/questionfeed";

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

]

export  const questionFeeds:QuestionFeed[] = [

      {
         id:"Q1",
         question:"what came first the Egg or the Hen ??",
         isUpvoted:false,
         isDownvoted:false,
         points:222,
         askedBy:"Interactive Hark",
         commentFeed:[...commentFeed],

         questionDesc:"I have been wondering what came first some says egg some says hen my Teacher asked it told me to come up with the answer tommarow even which answer i have i need to  prove it  any thoughts?"
      },

      
      {
        id:"Q2",
        question:"If a tree falls in a forest and no one is around to hear it, does it make a sound?",
        isUpvoted:false,
        isDownvoted:false,
        points:22,
        askedBy:"John Doe",
        commentFeed:[...commentFeed],
        questionDesc:"I keep thinking about this strange question. My friend asked me to really think about it and come up with an answer. If no one's there to hear the tree, does it actually make a sound, or does it even matter?"
     },

     
     {
        id:"Q3",
        question:"Is time travel possible, or is it just science fiction?",
        isUpvoted:false,
        isDownvoted:false,
        points:202,
        askedBy:"Tom Smith",
        commentFeed:[...commentFeed],
        questionDesc:"I've been reading about time travel, and it's mind-boggling! Some scientists say it could be possible, while others think it's just fantasy.?"
     }

]