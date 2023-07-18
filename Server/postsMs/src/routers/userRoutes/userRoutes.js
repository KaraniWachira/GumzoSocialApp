const express = require('express');
const session = require('express-session')
const userRoutes =express.Router()
require('dotenv').config


const getAllUsers = require ('../../controllers/userContollers')
const CreateProfile = require ('../../controllers/userContollers')
const DeleteAccount = require ('../../controllers/userContollers')
const EditUserName = require ('../../controllers/userContollers')
const EditUserProfile = require ('../../controllers/userContollers')
const SearchUsersByUsername = require ('../../controllers/userContollers')
const ViewUserActivity = require('../../controllers/userContollers')


user.get('/users', getAllUsers);
user.post('/user/profile', CreateProfile );
user.delete('/user/deleteaccount', DeleteAccount);
user.put('/user/editusername', EditUserName);
user.post('/user/profile/edit', EditUserProfile);
user.get('/searchuserbyusername', SearchUsersByUsername);
user.get('/user/activity/:id', ViewUserActivity);

module.exports = userRoutes















