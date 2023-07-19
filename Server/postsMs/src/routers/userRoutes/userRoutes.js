const express = require('express');
const session = require('express-session')
const userRoutes =express.Router()
require('dotenv').config


const getAllUsers = require ('../../controllers/userContollers/allUsers')
const CreateProfile = require ('../../controllers/userContollers/createProfile')
const DeleteAccount = require ('../../controllers/userContollers/deleteAccount')
const EditUserName = require ('../../controllers/userContollers/EditUserName')
const EditUserProfile = require ('../../controllers/userContollers/EditUserProfile')
const SearchUsersByUsername = require ('../../controllers/userContollers/search')
const ViewUserActivity = require('../../controllers/userContollers/ViewUserActivity')


userRoutes.get('/users', getAllUsers);
userRoutes.post('/user/profile', CreateProfile );
userRoutes.delete('/user/deleteaccount', DeleteAccount);
userRoutes.put('/user/editusername', EditUserName);
userRoutes.post('/user/profile/edit', EditUserProfile);
userRoutes.get('/search', SearchUsersByUsername);
userRoutes.get('/user/activity/:id', ViewUserActivity);
// logicRoutes.get('/search', SearchUsersByUsername);


module.exports = userRoutes















