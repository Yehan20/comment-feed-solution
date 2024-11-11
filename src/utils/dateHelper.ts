export function getDate(createdDate:Date) {
   
    const currentDate = new Date(); // today

    const difference= currentDate.getTime() -  new Date(createdDate).getTime(); // in Ms
   
    // convert to various  formats and check if  matches break out
    const seconds = Math.floor(difference/ 1000);
    if(seconds < 60)   return "Just now";

    const minutes = Math.floor(difference/ (1000 * 60));
    if(minutes < 60) return minutes === 1 ? "1 minute ago" : `${minutes} minutes ago`;

    const hours = Math.floor(difference/ (1000 * 60 * 60));
    if(hours < 24) return hours === 1 ? "1 hour ago" : `${hours} hours ago`;
    
    
    const days = Math.floor(difference/ (1000 * 60 * 60 * 24));
    if(days < 7) return days === 1 ? "1 day ago" : `${days} days ago`;
    
    const weeks = Math.floor(days / 7)
    if(weeks< 4)return weeks === 1 ? "1 week ago" : `${weeks} weeks ago`;

    const months = Math.floor(days / 30);
    if(months < 12) return months === 1 ? "1 month ago" : `${months} months ago`;

    const years = Math.floor(days / 365);
    return years === 1 ? "1 year ago" : `${years} years ago`;

}


