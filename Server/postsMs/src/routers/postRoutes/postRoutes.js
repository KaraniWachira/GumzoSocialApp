
const express = require('express');
const session = require('express-session')
const postRoutes = express.Router();

require('dotenv').config


const CreateNewPost = require('../../controllers/postControllers/CreateNewPost');
const viewAllPosts = require('../../controllers/postControllers/allPosts');
const DeletePostWithCommentsAndReactions = require('../../controllers/postControllers/DeletePostWithCommentsAndReactions');
const GetPostDetails = require('../../controllers/postControllers/GetPostDetails');




postRoutes.post('/newpost', CreateNewPost);
// postRoutes.get('/posts', getAllPosts);
postRoutes.get('/postDetail', GetPostDetails);
postRoutes.get('/post/allposts', viewAllPosts);
postRoutes.delete('/deletepost', DeletePostWithCommentsAndReactions);



module.exports = postRoutes;




















