const express = require('express');
const userRoutes = express.Router();
const { postUser } = require('../controllers/UserRegistrationController');
const  { loginUser, loginbUser } = require('../controllers/UserLoginController');
const { logoutUser } = require('../controllers/UserLogoutController');


userRoutes.post('/users/signup', postUser);
userRoutes.post('/users/login', loginUser);
userRoutes.get('/login/:username', loginbUser);
userRoutes.post('/users/logout', logoutUser)

module.exports = userRoutes;
