
const express = require('express');
const session = require('express-session')

require('dotenv').config


const CreateNewPost = require('../../controllers/postControllers');
const viewAllPosts = require('../../controllers/postControllers');
const CommentOnAPost = require('../../controllers/postControllers');
const DeletePostWithCommentsAndReactions = require('../../controllers/postControllers');
const GetPostDetails = require('../../controllers/postControllers');


userPost.post('/newpost', CreateNewPost);
userPost.get('/posts', getAllPosts);
userPost.get('/postDetail', GetPostDetails);
userPost.delete('/deletepost', DeletePostWithCommentsAndReactions);
























