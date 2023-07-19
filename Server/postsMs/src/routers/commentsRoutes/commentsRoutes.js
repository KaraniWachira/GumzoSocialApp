
const express = require('express');
const session = require('express-session')
const commentsRoutes = express.Router();

require('dotenv').config

const ViewComments = require('../../controllers/commentsControllers/viewComments');
const CommentOnAPost = require('../../controllers/commentsControllers/commentOnAPost');
const CommentsCounterPerPost = require('../../controllers/commentsControllers/CommentsCounterPerPost');



commentsRoutes.get('/viewComments', ViewComments);
commentsRoutes.post('/post/commentonapost', CommentOnAPost);
commentsRoutes.get('/comments/:id', CommentsCounterPerPost);


module.exports = commentsRoutes;

