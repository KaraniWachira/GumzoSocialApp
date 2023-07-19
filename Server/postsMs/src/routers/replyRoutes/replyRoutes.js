const express = require('express');
const session = require('express-session');
const replyRoutes = express.Router();


const ViewReplies = require('../../controllers/replyControllers/ViewReplies');
const ReplyOnAComment = require('../../controllers/replyControllers/ReplyOnAComment'); 
const ReplyCounterPerComment = require('../../controllers/replyControllers/ReplyCounterPerComment');


replyRoutes.get('/viewreplies/:id', ViewReplies);
replyRoutes.get('/replies/:id', ReplyCounterPerComment);
replyRoutes.post('/replies', ReplyOnAComment)


module.exports = replyRoutes;






