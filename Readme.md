# Threadly - A Commenting Interface with supported nesting comments

## Introduction
This is a simple frontend + backend website, where nested comments are shown clearly with proper indentation. Here upvoting option is also there.

## Setup:
Project Local setup:
```bash 
git clone https://github.com/Priyanshu9382/threadly.git
cd threadly
````
Frontend setup:
```bash
cd Frontend
npm install
npm run dev
````
Backend setup:  
In threadly directory
```bash
cd Backend
npm install
tsc -b
node dist/index.js
```

## Approach:
I loaded all the comments of a particular post in a Post.tsx with comment showing with the help of a Comment.tsx where each nested comment has a ml-10 tailwind class which helps in clear presentation.
 

## Frontend Tech Stack
- ReactJS + Vite + Typescript(Main frontend library)
- React's useContext is used for Context
- Tailwindcss for class based css

## Backend Tech Stack
- NodeJS for environment
- ExpressJS: library for building server
- MongoDB: for database purposes

## Issues:
- The frontend and backend for the comment part is not integrated till now.
- Authentication part is integrated but in the deployment link, the backend is not hosted till now
- A little responsiveness issue in mobile phones

## Future Modifications:
-  Support for multiple posts 
