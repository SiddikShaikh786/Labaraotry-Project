const express = require('express');
const UserRouter = express.Router();

const userController = require('../controller/users')
const samplesController = require('../controller/sample')
const auth = require('../middleware/auth')

//Registration
UserRouter.post('/register', userController.register)

//feth data
UserRouter.get('/users', userController.getAllSamples);

//edit data
UserRouter.get('/getUser/:_id', auth.authorizeAdmin, userController.getUser)
UserRouter.put('/getUser', userController.getUsers)
UserRouter.post("/getUser", userController.getUsers)

//sample
UserRouter.post('/postsample', samplesController.addSample)
UserRouter.get('/getsample', samplesController.getAllDeatils)


//Login
UserRouter.post('/login', userController.login)

module.exports = UserRouter