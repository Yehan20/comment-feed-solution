
# CommentHub

This is  comment feed built with Vue.js, Sass, Pinia, and TypeScript. This application allows users to add and reply to comments, sort comments by upvotes, and view nested replies.
 
Link to the application: 'https://yn-comments-hub.netlify.app/ '

## Tools and technologies used
- Vue Js
- Pinia
- Typescript
- SCSS
- Vite
- Vitest

## Concepts and Areas Covered

- Set up development  environment using Vue JS and TS and vite
- Used Pinia for State Management
- Used emits to pass actions from child to parent
- Use SCSS to Improve Styling
- Used BEM Naming Convention
- Usage of local storage to save the data
- Various array methods sort add reply. 
- Component-Based Architecture: Utilizes Vue's component structure.
- Recursion to Make Nested Comments

## Assumptions 

- Used Reddits upvote  | downvote mechanism
- By Default Most Recent is Sorted
- You can only upvote or downvote once considering you are a user
- Nested comments are collapsed after 1 levels to improve readability.
- Cancelling a reply triggers a **confirmation modal**.

## Extra Features
- Toggle Between new questions
- Upvote and downvote main questions Points
- Mention User name when replying option

## Future Enhancement Ideas
- Add Routing Navigate Between New Feeds
- Allow User to Post a Question 
- Allow Question to be edited and Deleted

## Get started

Firstly you would need to install npm you can install it from  https://nodejs.org/en/download/package-manager/current from this site by choosing your system requirements , if you have node js then you do not need to install, how ever if your version is outdated it will good to upgrade it. 

Open a terminal and clone this repo:

```bash
# Clone this repository
$ git clone 

# Go into the repository
$ cd comment-feed-solution

# Remove current origin repository
$ git remote remove origin

# If you want, you can add a new remote repository
$ git remote add origin https://github.com/<your-github-username>/<your-repo-name>.git
```

Open the project with your favourite code editor if you have vs code you can type code . in your terminal to open it 

```bash
# Terminal for the server
# cd into the rroject folder and open it
# in your text editors terminal or using the shell type

# Install dependencies
$ npm install

# run the server
$ npm run dev
```


```

At this point, you will have the server running locally at http://localhost:5173 or  http://localhost:5174 <br/>.


## Deployment

- This  application is deployed to [Netlify](https://netlify.com/)<br/>

### Deploying the client app to Netlify

First, create a Netlify account if you do not have one already. Log in to your account. If your project is already on GitHub, then you can opt for Netlify's continuous deployment:

- Click `New site from git`, then select `GitHub`
- Select the project repo that you want to link to your Netlify site for continuous deployment
- Apply these settings -> Base Directory: client, Build Command: npm run build, Publish directory: client/build
- Click `Deploy Site`

If you do not have a git repo for your project on GitHub, then you have to manually generate a production build of the client app:

```bash
$ cd client

# create a production build
$ npm run build
```

You can use this `build` folder to deploy the client app to Netlify.
