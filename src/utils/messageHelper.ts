import { LocalStorage, Message } from "../types/message"

// Upvote senarios  breakdown
export function helperUpvote(changedComment: Message) {

    if (!changedComment.isDownvoted && !changedComment.isUpvoted) { // comment  not upovted or not downvoted

        changedComment["points"] = changedComment["points"] + 1
        changedComment.isUpvoted = !changedComment.isUpvoted
        return

    }


    if (!changedComment.isDownvoted && changedComment.isUpvoted) {  // comment is upvoted and non downvoted

        changedComment["points"] = changedComment["points"] - 1
        changedComment.isUpvoted = !changedComment.isUpvoted
        return;

    }

    if (changedComment.isDownvoted && !changedComment.isUpvoted) {  // comment is downvoted not upvoted or upvoted

        changedComment.points += 2;  
        changedComment.isUpvoted = !changedComment.isUpvoted; 
        changedComment.isDownvoted = !changedComment.isDownvoted;
        return

    }
}

// Downvote senarios breakdown
export function helperDownvote(changedComment: Message) {

    if (!changedComment.isDownvoted && !changedComment.isUpvoted) { // comment not donwvoted or upvoted

        changedComment["points"] = changedComment["points"] - 1
        changedComment.isDownvoted = !changedComment.isDownvoted

        return

    }


    if (changedComment.isDownvoted && !changedComment.isUpvoted) {  // comment is downvoted and not upvoted 

        changedComment["points"] = changedComment["points"] + 1
        changedComment.isDownvoted = !changedComment.isDownvoted

        return;

    }

    if (!changedComment.isDownvoted && changedComment.isUpvoted) { // comment is not downvoted but upvoted

        changedComment.points -= 2; // change 
        changedComment.isUpvoted = !changedComment.isUpvoted; // same
        changedComment.isDownvoted = !changedComment.isDownvoted;

        return

    }
}

// Fetch Local Storage feed
export function helperLocalStorage(key: string): LocalStorage | null{

    const storageData = localStorage.getItem(key);
    if (!storageData) {
        return null;
    }

    return   JSON.parse(storageData);
}

// Update Local Stroage when change to comment feed
export function helperUpdateLocalStorage(key: string, storageData: LocalStorage) {
    
    
     // get the local stroage data  and parase it to make json object or else stop this metho
     let storage: LocalStorage|string = localStorage.getItem(key)  as string ;

     
     if(storage){
        storage =JSON.parse(storage) as LocalStorage  
     }
   
     // if our data is not existing first
    else {
        localStorage.setItem(key,JSON.stringify(storageData));
        return;
    }


     // check which of the attributes of storage data is define 

     if(storageData.commentFeed)storage["commentFeed"] =storageData.commentFeed;  
     if(storageData.isSortByUpvote !=null)storage["isSortByUpvote"] = storageData.isSortByUpvote
     if(storageData.askedBy)storage["askedBy"] = storageData.askedBy;
     if(storageData.isUpvoted !=null) storage["isUpvoted"] = storageData.isUpvoted;
     if(storageData.isDownvoted !=null)storage["isDownvoted"] = storageData.isDownvoted;
     if(storageData.question) storage["question"] = storageData.question;
     if(storageData.totalPoints) storage["totalPoints"] = storageData.totalPoints;
     if(storageData.questionDesc) storage["questionDesc"] = storageData.questionDesc;
     if(storageData.datePosted) storage["datePosted"] = storageData.datePosted;


     // update local storage parsed data with  the value 
     localStorage.setItem(key, JSON.stringify(storage));
}

// Incdicates Weather Message and its children and anestors should be nested or not 
export function helperHasNestedMessages(parentId: number | null, messages: Message[], id:number) {


    let nestingLevel = 0; // amount of comments inside each one
    let pId = parentId;
    let hasChild = false;  //
    
   
    // get the amount of nesting in that message 
    for (let index = 0; index < messages.length; index++) {
        
        if (messages[index].id === pId) {
            nestingLevel++
            pId = messages[index].parentId as number
            index = 0; // loop until we find all the ansestors
         
        }      
    }
    
    // check if our message has a reply 
    if(id){
        for (let index = 0; index < messages.length; index++) {
            
            if (messages[index].parentId === id) {
                hasChild = true
                break;
            
            }      
        }
   }

    // boolean return true if our nesting level is = or more and that message 
    //has replied as well
    return (nestingLevel >=2) && hasChild;

}