export interface  Message {
    
     id:number ;
     message:string;
     parentId:number | null;
     points:number;
     isUpvoted:boolean;
     isDownvoted:boolean;
     createdAt:Date;
     profilePic:string ;
     userName:string;
     collapsed:  boolean;

}

export interface LocalStorage {
      commentFeed?:Message[];
      originalFeed?:Message[];
      isSortByUpdate?:boolean;
}