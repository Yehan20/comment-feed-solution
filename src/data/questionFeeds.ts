import Images from "../assets/images/profileImages";
import { Message } from "../types/message";

import { QuestionFeed } from "../types/questionfeed";
import { DEFAULT_PROFILE } from "../utils/constants";

const commentFeedQ1: Message[] =  [

    {
        id: 1,
        message: "It has to be the egg! If you look at evolution, creatures that were almost-chickens would have laid eggs before actual chickens existed. Over time, the genetic mutations in those eggs led to the first true chicken. So, scientifically, the egg came first.",
        parentId: null,
        points: 10,
        isUpvoted: false,
        isDownvoted: true,
        userName: "Zeus",
        profilePic: Images.Zeus,
        createdAt: new Date("2021-11-08")
        ,

    },
    {
        id: 2,
        message: "Actually, I think it’s the chicken that came first. In many religious texts, animals were created as we know them today. If you follow that perspective, a chicken had to exist first to start laying eggs.",
        parentId: 1,
        points: 3,
        isUpvoted: false,
        isDownvoted: false,
        userName: "Hades",
        profilePic: Images.Hades,
        createdAt: new Date("2022-10-08")
        ,

    },


    {
        id: 3,
        message: "I agree with Zeus. Scientists often point out that eggs existed long before chickens evolved. Dinosaurs and other ancient reptiles laid eggs, so eggs definitely predate chickens!",
        parentId: 1,
        points: 5,
        isUpvoted: false,
        isDownvoted: false,
        userName: "Hestia",
        profilePic: Images.Hestia,
        createdAt: new Date("2024-01-01"),

    },
    {
        id: 4,
        message: "What if we’re overthinking it? The egg and the chicken are part of a continuous cycle, so maybe neither came 'first.' They’re both essential parts of each other’s existence, so it’s like asking which side of a circle is the beginning.",
        parentId: 3,
        points: -1,
        isUpvoted: false,
        isDownvoted: false,
        userName: "Appollo",
        profilePic: Images.Appollo,
        createdAt: new Date("2024-03-08"),

    },
    {
        id: 5,
        message: "From a genetic standpoint, it’s the egg. An almost-chicken (a proto-chicken) would have had a genetic mutation that turned it into a chicken, and this would have occurred within an egg. So the first true chicken came from an egg.",
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
        message: "Maybe it depends on how we define a ‘chicken egg.’ Is it an egg that has a chicken inside, or is it an egg laid by a chicken? If it’s the latter, then maybe the chicken came first, because an almost-chicken laid the first true chicken egg!",
        parentId: 5,
        points: 5,
        isUpvoted: false,
        isDownvoted: false,
        userName: "Kronos",
        profilePic: Images.Kronos,
        createdAt: new Date("2024-07-08"),

    },
    {
        id: 7,
        message: "Who Knows lol",
        parentId: 6,
        points: 7,
        isUpvoted: false,
        isDownvoted: false,
        userName: "Aries",
        profilePic: Images.Aries,
        createdAt: new Date("2024-11-01"),

    },




    {
        id: 8,
        message: "Well your decide.",
        parentId: null,
        points: 8,
        isUpvoted: false,
        isDownvoted: false,
        userName: "Lion",
        profilePic: Images.Lion,
        createdAt: new Date("2023-11-08"),

    },



    {
        id: 9,
        message: "Dr Zoom",
        parentId: 7,
        points: 9,
        isUpvoted: false,
        isDownvoted: false,
        userName: "Its none thats the answer",
        profilePic: Images.DefaultProfile,
        createdAt: new Date("2023-11-08"),

    },

    {
        id: 10,
        message: " The Chicken came  i think if you get my point",
        parentId:9,
        points: 10,
        isUpvoted: false,
        isDownvoted: false,
        userName: "Surfer20",
        profilePic: Images.DefaultProfile,
        createdAt: new Date("2023-11-08"),

    },



    {
        id: 11,
        message: " Same",
        parentId:10,
        points: 1,
        isUpvoted: false,
        isDownvoted: false,
        userName: "Surfer210",
        profilePic: Images.DefaultProfile,
        createdAt: new Date("2023-11-10"),

    },

    {
        id: 12,
        message: " I know the answer but my is your answer lol",
        parentId:7,
        points: 10,
        isUpvoted: true,
        isDownvoted: false,
        userName: "Online Wanderer",
        profilePic: Images.DefaultProfileWomen,
        createdAt: new Date("2023-11-08"),

    },


    
    {
        id: 13,
        message: "Its a time Paradox I think",
        parentId:2,
        points: 10,
        isUpvoted: true,
        isDownvoted: false,
        userName: "Curious12",
        profilePic:'',
        createdAt: new Date("2023-11-08"),

    },


    
    {
        id: 14,
        message: "Can Cars Fly would be a similar question",
        parentId:2,
        points: 10,
        isUpvoted: true,
        isDownvoted: false,
        userName: "Mystic",
        profilePic: Images.John,
        createdAt: new Date("2023-11-08"),

    },

        
    {
        id: 15,
        message: "Bingo you nailed it",
        parentId:13,
        points: 10,
        isUpvoted: true,
        isDownvoted: false,
        userName: "Jakson",
        profilePic:'',
        createdAt: new Date("2023-11-08"),

    },


    {
        id: 16,
        message: "I guess we can agree on this lol",
        parentId:15,
        points: 10,
        isUpvoted: true,
        isDownvoted: false,
        userName: "Zeus",
        profilePic:Images.Zeus,
        createdAt: new Date("2023-11-08"),

    },

    {
        id: 17,
        message: "Whats a time paradox if i may ask",
        parentId:13,
        points: 4,
        isUpvoted: true,
        isDownvoted: false,
        userName: "Jene Smith",
        profilePic:Images.DefaultProfileWomen,
        createdAt: new Date("2023-11-08"),

    },

    {
        id: 18,
        message: "@JeneSmith A time paradox, also known as a temporal paradox or time travel paradox, is a logical contradiction or apparent contradiction related to the idea of time travel or foreknowledge of the future. Time paradoxes are often used to demonstrate the impossibility of time travel to the past",
        parentId:17,
        points: 10,
        isUpvoted: true,
        isDownvoted: false,
        userName: "Curious12",
        profilePic:'',
        createdAt: new Date("2024-10-08"),

    },

    {
        id: 19,
        message: "Thanks a lot",
        parentId:18,
        points: 2,
        isUpvoted: true,
        isDownvoted: false,
        userName: "Jene Smith",
        profilePic:Images.DefaultProfileWomen,
        createdAt: new Date("2024-10-09"),

    },

    
    {
        id: 20,
        message: " Chicken came first because egg comes out from chicken but chicken not comes out from eggs.chick comes out from egg.and chick may have both male or femal",
        parentId:null,
        points: 5,
        isUpvoted: true,
        isDownvoted: false,
        userName: "Mystic",
        profilePic:Images.John,
        createdAt: new Date("2024-09-09"),

    },


    
    {
        id: 21,
        message: "If you are prepared to call that egg a chicken's egg, then the egg came first. Otherwise, the chicken came first and the first chicken's egg had to wait until",
        parentId:null,
        points: 6,
        isUpvoted: true,
        isDownvoted: false,
        userName: "Rennee",
        profilePic:Images.DefaultProfileWomen,
        createdAt: new Date("2024-11-09"),

    },



    
    {
        id: 22,
        message: " Most biologists state unequivocally that the egg came first. At their most basic level, eggs are just female sex cells. ",
        parentId:18,
        points: 11,
        isUpvoted: true,
        isDownvoted: false,
        userName: "Magret",
        profilePic:Images.DefaultProfileWomen,
        createdAt: new Date("2023-10-09"),

    },




    
    {
        id: 23,
        message: "The egg came first since chickens, as a species, are only several thousand years old, while eggs can be traced back hundreds of millions.",
        parentId:null,
        points: 14,
        isUpvoted: true,
        isDownvoted: false,
        userName: "Dr Gray",
        profilePic:'',
        createdAt: new Date("2022-10-09"),

    },


    {
        id: 24,
        message: "with amniotic eggs showing up roughly 340 million or so years ago, and the first chickens evolving at around 58 thousand years ago at the earliest, it's a safe bet to say the egg came first. Eggs were around way before chickens even existed",
        parentId:null,
        points: 17,
        isUpvoted: false,
        isDownvoted: false,
        userName: "Harry Potter",
        profilePic:'',
        createdAt: new Date("2024-10-09"),

    },


    {
        id: 25,
        message: "with amniotic eggs showing up roughly 340 million or so years ago, and the first chickens evolving at around 58 thousand years ago at the earliest, it's a safe bet to say the egg came first. Eggs were around way before chickens even existed",
        parentId:24,
        points: 24,
        isUpvoted: false,
        isDownvoted: false,
        userName: "Harry Potter1",
        profilePic:'',
        createdAt: new Date("2024-10-09"),

    },






    {
        id: 26,
        message: "with amniotic eggs showing up roughly 340 million or so years ago, and the first chickens evolving at around 58 thousand years ago at the earliest, it's a safe bet to say the egg came first. Eggs were around way before chickens even existed",
        parentId:25,
        points: 24,
        isUpvoted: false,
        isDownvoted: false,
        userName: "Harry Potter2",
        profilePic:'',
        createdAt: new Date("2024-10-09"),

    },



    {
        id: 27,
        message: "with amniotic eggs showing up roughly 340 million or so years ago, and the first chickens evolving at around 58 thousand years ago at the earliest, it's a safe bet to say the egg came first. Eggs were around way before chickens even existed",
        parentId:26,
        points: 24,
        isUpvoted: false,
        isDownvoted: false,
        userName: "Harry Potter3",
        profilePic:'',
        createdAt: new Date("2024-10-09"),

    },



    {
        id: 28,
        message: "with amniotic eggs showing up roughly 340 million or so years ago, and the first chickens evolving at around 58 thousand years ago at the earliest, it's a safe bet to say the egg came first. Eggs were around way before chickens even existed",
        parentId:27,
        points: 17,
        isUpvoted: false,
        isDownvoted: false,
        userName: "Potter4",
        profilePic:'',
        createdAt: new Date("2024-10-09"),

    },



    {
        id: 29,
        message: "Thanks google",
        parentId:27,
        points: 26,
        isUpvoted: false,
        isDownvoted: false,
        userName: "Beast",
        profilePic:'',
        createdAt: new Date("2024-10-09"),

    },


    
    {
        id: 30,
        message: "No Comment",
        parentId:24,
        points: 24,
        isUpvoted: false,
        isDownvoted: false,
        userName: "NoName",
        profilePic:Images.DefaultProfileWomen,
        createdAt: new Date("2024-09-09"),

    },

    {
        id: 31,
        message: "Hello World",
        parentId:24,
        points: 22,
        isUpvoted: false,
        isDownvoted: false,
        userName: "John Doe",
        profilePic:DEFAULT_PROFILE.profilePic,
        createdAt: new Date("2024-08-09"),

    },
    


    {
        id: 32,
        message: "So True",
        parentId:21,
        points: 2,
        isUpvoted: false,
        isDownvoted: false,
        userName:DEFAULT_PROFILE.name,
        profilePic:DEFAULT_PROFILE.profilePic,
        createdAt: new Date("2024-10-29"),

    },

    
    {
        id: 33,
        message: "I love that logic",
        parentId:21,
        points: 3,
        isUpvoted: false,
        isDownvoted: false,
        userName:'Mystic',
        profilePic:Images.John,
        createdAt: new Date("2024-10-31"),

    },

      
    {
        id: 34,
        message: "I love pine apple Pizza",
        parentId:24,
        points: 20,
        isUpvoted: false,
        isDownvoted: false,
        userName: "Hestia",
        profilePic:Images.Hestia,
        createdAt: new Date("2024-09-19"),

    },


          
    {
        id: 35,
        message: "@Thanks Mystic",
        parentId:33,
        points: 2,
        isUpvoted: false,
        isDownvoted: false,
        userName: "Rennee",
        profilePic:Images.DefaultProfileWomen,
        createdAt: new Date("2024-09-19"),

    },

    {
        id: 36,
        message: "@Thanks Doc",
        parentId:23,
        points: 5,
        isUpvoted: false,
        isDownvoted: false,
        userName: "Rennee",
        profilePic:Images.DefaultProfileWomen,
        createdAt: new Date("2024-11-01"),

    },


    {
        id: 37,
        message: "@Thanks Sir",
        parentId:23,
        points: 6,
        isUpvoted: false,
        isDownvoted: false,
        userName: "Alexa",
        profilePic:Images.DefaultProfileWomen,
        createdAt: new Date("2024-11-03"),

    },

    {
        id: 38,
        message: "@Thanks Sir",
        parentId:23,
        points: 8,
        isUpvoted: false,
        isDownvoted: false,
        userName:DEFAULT_PROFILE.name,
        profilePic:DEFAULT_PROFILE.profilePic,
        createdAt: new Date("2024-11-10"),

    },

    

    




]
const commentFeedQ2:Message[]=[
    {
        id: 1,
        message: "It depends on how we define 'sound.' If a tree falls and no one hears it, can we say it makes a sound if there's no one there to perceive it?",
        parentId: null,
        points: 7,
        isUpvoted: false,
        isDownvoted: true,
        userName: "Zeus",
        profilePic: Images.Zeus,
        createdAt: new Date("2021-01-01")
    },
    {
        id: 2,
        message: "I think it doesn't make a sound unless there's someone around to hear it. Sound is the result of waves reaching a listener, after all.",
        parentId: 1,
        points: 3,
        isUpvoted: false,
        isDownvoted: false,
        userName: "Hades",
        profilePic: Images.Hades,
        createdAt: new Date("2021-04-01")
    },
    {
        id: 111,
        message: "It's an interesting philosophical question. If no one is there to experience it, does it even exist in the way we understand it?",
        parentId: 1,
        points: 3,
        isUpvoted: false,
        isDownvoted: false,
        userName: "Time Travellor",
        profilePic: '',
        createdAt: new Date("2021-07-01")
    },
    {
        id: 3,
        message: "I believe that it still makes a sound, but it’s just that no one is around to hear it. The physical event of sound waves still occurs.",
        parentId: 2,
        points: 5,
        isUpvoted: false,
        isDownvoted: false,
        userName: "Hestia",
        profilePic: Images.Hestia,
        createdAt: new Date("2021-10-01")
    },
    {
        id: 4,
        message: "This reminds me of the debate between perception and reality. The tree makes a noise, but it's only considered 'sound' when it's heard.",
        parentId: 3,
        points: -1,
        isUpvoted: false,
        isDownvoted: false,
        userName: "Appollo",
        profilePic: Images.Appollo,
        createdAt: new Date("2022-01-01")
    },
    {
        id: 5,
        message: "From a scientific standpoint, yes, it makes a sound. The act of the tree falling causes vibrations, regardless of whether someone is there to hear them.",
        parentId: 4,
        points: 10,
        isUpvoted: false,
        isDownvoted: false,
        userName: "Athena",
        profilePic: Images.Athena,
        createdAt: new Date("2024-04-01")
    },
    {
        id: 6,
        message: "It's all about perspective. If you’re asking whether the sound exists without a witness, that’s a deeper question about perception and consciousness.",
        parentId: 5,
        points: 5,
        isUpvoted: false,
        isDownvoted: false,
        userName: "Kronos",
        profilePic: Images.Kronos,
        createdAt: new Date("2024-07-01")
    },
    {
        id: 7,
        message: "I think the answer depends on the definition of 'sound.' If we consider sound to be only what is perceived by a listener, then no, it wouldn't make a sound.",
        parentId: 6,
        points: 7,
        isUpvoted: false,
        isDownvoted: false,
        userName: "Aries",
        profilePic: Images.Aries,
        createdAt: new Date("2024-08-01")
    },
    {
        id: 8,
        message: "Even if no one hears it, the physical properties of sound still exist in the air. The question becomes, does something need to be perceived to truly exist?",
        parentId: null,
        points: 8,
        isUpvoted: false,
        isDownvoted: false,
        userName: "Dog",
        profilePic: Images.Aries,
        createdAt: new Date("2023-01-01")
    },
    {
        id: 9,
        message: "The tree falling creates vibrations in the air that could be classified as sound. But the question is whether it’s really 'sound' without anyone to hear it.",
        parentId: null,
        points: 9,
        isUpvoted: false,
        isDownvoted: false,
        userName: "Interactivce Harp",
        profilePic: '',
        createdAt: new Date("2023-04-01")
    },
    {
        id: 10,
        message: "I think the tree falling makes a sound, but it's a philosophical question whether it can be considered 'sound' without someone there to experience it.",
        parentId: null,
        points: 10,
        isUpvoted: false,
        isDownvoted: false,
        userName: "Lion",
        profilePic: Images.John,
        createdAt: new Date("2023-07-01")
    }
]

const commentFeedQ3:Message[]=[
    {
        id: 1,
        message: "Time travel is a fascinating concept, but according to current scientific understanding, it's not possible. The theory of relativity allows for the possibility of time dilation, where time moves differently for observers in different frames of reference, but traveling back and forth through time like we see in science fiction is still speculative.",
        parentId: null,
        points: 7,
        isUpvoted: false,
        isDownvoted: true,
        userName: "Zeus",
        profilePic: Images.Zeus,
        createdAt: new Date("2019-01-01"),
    },
    {
        id: 2,
        message: "Some physicists suggest that time travel could be theoretically possible, but only under extremely specific conditions, like near a black hole or through the use of a wormhole. The paradoxes, like the grandfather paradox, make it a complex and unresolved topic.",
        parentId: 1,
        points: 3,
        isUpvoted: false,
        isDownvoted: false,
        userName: "Hades",
        profilePic: Images.Hades,
        createdAt: new Date("2019-03-01"),
    },
    {
        id: 111,
        message: "The idea of traveling back in time raises so many questions, especially when you consider the potential effects on the past. Would changing something in the past create an alternate timeline or a paradox? It's still a huge mystery.",
        parentId: 1,
        points: 3,
        isUpvoted: false,
        isDownvoted: false,
        userName: "Interactive Harp",
        profilePic:'',
        createdAt: new Date("2019-06-01"),
    },
    {
        id: 3,
        message: "Time travel is a fun concept in science fiction, but in reality, it remains purely speculative. There's no known method or technology that would allow us to travel backward or forward in time.",
        parentId: 2,
        points: 5,
        isUpvoted: false,
        isDownvoted: false,
        userName: "Hestia",
        profilePic: Images.Hestia,
        createdAt: new Date("2019-08-01"),
    },
    {
        id: 4,
        message: "I think time travel could be possible, but not in the way it's often portrayed in movies. Instead of jumping through time, maybe it could involve moving through dimensions or manipulating spacetime in ways we don't yet understand.",
        parentId: 3,
        points: -1,
        isUpvoted: false,
        isDownvoted: false,
        userName: "Appollo",
        profilePic: Images.Appollo,
        createdAt: new Date("2020-01-01"),
    },
    {
        id: 5,
        message: "Theoretically, if we could travel faster than the speed of light, we might be able to travel into the future, according to Einstein’s theory of relativity. But traveling backward in time, where paradoxes could occur, still seems impossible.",
        parentId: 4,
        points: 10,
        isUpvoted: false,
        isDownvoted: false,
        userName: "Athena",
        profilePic: Images.Athena,
        createdAt: new Date("2023-06-01"),
    },
    {
        id: 6,
        message: "Time travel could be linked to quantum mechanics, where particles can exist in multiple states at once. If we ever unlock the full mysteries of quantum physics, time travel might become more than just science fiction.",
        parentId: 5,
        points: 5,
        isUpvoted: false,
        isDownvoted: false,
        userName: "Kronos",
        profilePic: Images.Kronos,
        createdAt: new Date("2024-01-01"),
    },
    {
        id: 7,
        message: "While time travel is intriguing, the laws of physics as we understand them today don't allow for it. The closest we have is time dilation, which means time can move differently for objects in motion, but it’s far from the kind of time travel we see in films.",
        parentId: 6,
        points: 7,
        isUpvoted: false,
        isDownvoted: false,
        userName: "Aries",
        profilePic: Images.Aries,
        createdAt: new Date("2024-06-01"),
    },
    {
        id: 8,
        message: "The concept of time travel has inspired countless movies and stories, but there’s no empirical evidence that it’s possible. Our understanding of physics doesn’t yet offer a way to reverse time or jump across it.",
        parentId: null,
        points: 8,
        isUpvoted: false,
        isDownvoted: false,
        userName: "Cool Dude",
        profilePic: '',
        createdAt: new Date("2022-01-01"),
    },
    {
        id: 9,
        message: "I believe time travel might one day be possible, but not in the classic 'machine' sense. Perhaps through advanced technologies or understanding of space-time, we might be able to manipulate our experience of time.",
        parentId: null,
        points: 9,
        isUpvoted: false,
        isDownvoted: false,
        userName: "John",
        profilePic: Images.John,
        createdAt: new Date("2022-06-01"),
    },
    {
        id: 10,
        message: "The idea of time travel taps into our imagination, but it's likely that we’ll need to discover entirely new principles of physics to even consider the possibility. Until then, it's probably going to stay firmly in the realm of fiction.",
        parentId: null,
        points: 10,
        isUpvoted: false,
        isDownvoted: false,
        userName: "Lion",
        profilePic: Images.Lion,
        createdAt: new Date("2023-01-01"),
    },


    {
        id: 11,
        message: "I Agree with you here",
        parentId: 10,
        points: 7,
        isUpvoted: false,
        isDownvoted: false,
        userName: "Jessica",
        profilePic: Images.DefaultProfileWomen,
        createdAt: new Date("2023-02-01"),
    },


    {
        id: 12,
        message: "But isnt there something wrong lion",
        parentId: 10,
        points: 2,
        isUpvoted: false,
        isDownvoted: false,
        userName: "Jans",
        profilePic: '',
        createdAt: new Date("2023-02-20"),
    },


    {
        id: 13,
        message: "Agreee",
        parentId: 10,
        points: 3,
        isUpvoted: false,
        isDownvoted: false,
        userName: "Sam",
        profilePic: '',
        createdAt: new Date("2023-03-20"),
    },


    
    {
        id: 14,
        message: "I Agree with you here",
        parentId: 11,
        points: 2,
        isUpvoted: false,
        isDownvoted: false,
        userName: "Mystic",
        profilePic: Images.John,
        createdAt: new Date("2024-02-01"),
    },



    
    {
        id: 15,
        message: "I'm confused",
        parentId: 11,
        points: 2,
        isUpvoted: false,
        isDownvoted: false,
        userName: "Wolf",
        profilePic: '',
        createdAt: new Date("2024-05-01"),
    },

    {
        id: 16,
        message: "You Should Be",
        parentId: 15,
        points: 2,
        isUpvoted: false,
        isDownvoted: false,
        userName: "Mystic",
        profilePic:Images.John,
        createdAt: new Date("2024-05-01"),
    },

    {
        id: 17,
        message: "@Mystic Look at you",
        parentId: 16,
        points: 2,
        isUpvoted: false,
        isDownvoted: false,
        userName: "Wolf",
        profilePic: '',
        createdAt: new Date("2024-06-01"),
    },


    {
        id: 18,
        message: "@Wolf Where",
        parentId: 17,
        points: 2,
        isUpvoted: false,
        isDownvoted: false,
        userName: "Mystic",
        profilePic:Images.John,
        createdAt: new Date("2024-07-01"),
    },

    {
        id: 19,
        message: "@Mystic Are you smart",
        parentId: 18,
        points: 2,
        isUpvoted: false,
        isDownvoted: false,
        userName: "Wolf",
        profilePic:'',
        createdAt: new Date("2024-07-06"),
    },



    {
        id: 20,
        message: "404 Error .",
        parentId: 8,
        points: 10,
        isUpvoted: false,
        isDownvoted: false,
        userName: "FreeZerr",
        profilePic: '',
        createdAt: new Date("2022-05-01"),
    },


]


export  const questionFeeds:QuestionFeed[] = [

      {
         id:"Q1",
         question:"what came first the Egg or the Hen ?",
         isUpvoted:false,
         isDownvoted:false,
         points:222,
         askedBy:"Peter Johnson",
         commentFeed:[...commentFeedQ1],
         isSortByUpvote:false,
         datePosted:new Date("2023-11-08"),
         questionDesc:"I have been wondering what came first some says egg some says hen my Teacher asked it told me to come up with the answer tommarow even which answer i have i need to  prove it  any thoughts?"
      },

      
      {
        id:"Q2",
        question:"If a tree falls in a forest and no one is around to hear it, does it make a sound?",
        isUpvoted:false,
        isDownvoted:false,
        isSortByUpvote:false,
        points:22,
        askedBy:"Michel S",
        datePosted:new Date("2023-11-08"),
        commentFeed:[...commentFeedQ2],
        questionDesc:"I keep thinking about this strange question. My friend asked me to really think about it and come up with an answer. If no one's there to hear the tree, does it actually make a sound, or does it even matter?"
     },

     
     {
        id:"Q3",
        question:"Is time travel possible, or is it just science fiction?",
        isUpvoted:false,
        isDownvoted:false,
        isSortByUpvote:false,
        datePosted:new Date("2023-11-08"),
        points:202,
        askedBy:"Tim Macintosh",
        commentFeed:[...commentFeedQ3],
        questionDesc:"I've been reading about time travel, and it's mind-boggling! Some scientists say it could be possible, while others think it's just fantasy.?"
     }

]