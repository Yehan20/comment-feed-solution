import { Message } from "./message";

export interface QuestionFeed {
    id:string;
    question:string;
    isUpvoted:boolean;
    isDownvoted:boolean;
    points:number;
    askedBy:string;
    questionDesc:string;
    isSortByUpvote:boolean;
    commentFeed:Message[];
    datePosted:Date;
}