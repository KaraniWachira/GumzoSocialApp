const express = require('express');
const session = require('express-session');
const friendshipRoutes = express.Router();


const FollowUser = require('../../controllers/friendshipControllers/followUser');
const UnfollowUser = require('../../controllers/friendshipControllers/followUser');
const FollowerCountPerUser = require('../../controllers/friendshipControllers/FollowerCountPerUser');
const ViewFollowers = require('../../controllers/friendshipControllers/viewFollowers');



friendshipRoutes.post('/follow', FollowUser);
friendshipRoutes.post('/unfollow', UnfollowUser);
friendshipRoutes.get('/follower/:id', ViewFollowers);
friendshipRoutes.get('/followers/:id', FollowerCountPerUser);


module.exports = friendshipRoutes;


















