const express = require('express');
const session = require('express-session');
const reactionsRoutes = express.Router();

require('dotenv').config()

const ReactToPostCommentReply = require('../../controllers/reactionsControllers/ReactToPostCommentReply');
const DeleteReaction = require('../../controllers/reactionsControllers/DeleteReaction');


reactionsRoutes.put('/reactTo', ReactToPostCommentReply);
reactionsRoutes.delete('/react/delete', DeleteReaction);



module.exports = reactionsRoutes;


