import { Message } from "../types/message"

// Upvote senrios  breakdown
export function helperUpvote(changedComment:Message,){ 
                  
    if(!changedComment.isDownvoted && !changedComment.isUpvoted){ // comment  not upovted or not downvoted

          changedComment["points"] = changedComment["points"] + 1 
          changedComment.isUpvoted = !changedComment.isUpvoted  
     

          return 

     }


     if(!changedComment.isDownvoted && changedComment.isUpvoted){  // comment is upvoted

        changedComment["points"] = changedComment["points"] - 1 
        changedComment.isUpvoted = !changedComment.isUpvoted 

        return; 

     }
        
     if(changedComment.isDownvoted &&  !changedComment.isUpvoted){  // comment is downvoted not upvoted

        changedComment.points+=2; // change 
        changedComment.isUpvoted = !changedComment.isUpvoted; // same
        changedComment.isDownvoted = !changedComment.isDownvoted;

        return 

     }
}

// Downvote senrios breakdown
export function helperDownvote(changedComment:Message,){ 
                  
    if(!changedComment.isDownvoted && !changedComment.isUpvoted){ // comment not donwvoted or upvoted

          changedComment["points"] = changedComment["points"] - 1 
          changedComment.isDownvoted = !changedComment.isDownvoted  

          return 

     }


     if(changedComment.isDownvoted && !changedComment.isUpvoted){  // comment is downvoted and not upvoted 

        changedComment["points"] = changedComment["points"] + 1 
        changedComment.isDownvoted = !changedComment.isDownvoted 

        return; 

     }
        
     if(!changedComment.isDownvoted &&  changedComment.isUpvoted){ // comment is not downvoted but upvoted

        changedComment.points-=2; // change 
        changedComment.isUpvoted = !changedComment.isUpvoted; // same
        changedComment.isDownvoted = !changedComment.isDownvoted;

        return 

     }
}