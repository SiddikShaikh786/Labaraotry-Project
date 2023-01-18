const express = require('express');
const UserRouter = express.Router();

const userController = require('../controller/users')
const samplesController = require('../controller/sample')
const thyroidReport = require('../controller/thyroid')
const glucoReport = require('../controller/glucometry')
const heamoReport = require('../controller/haemotology')
const auth = require('../middleware/auth')

//Registration
UserRouter.post('/register', userController.register)

//fetch data
UserRouter.get('/users', userController.getAllSamples);

//delete data
UserRouter.delete('/deleteUsers/:_id', userController.deleteUsers)

//edit data
UserRouter.get('/getUser/:_id', auth.authorizeAdmin, userController.getUser)
UserRouter.put('/getUser', userController.getUsers)
UserRouter.post("/getUser", userController.getUsers)

//sample
UserRouter.post('/postsample', samplesController.addSample)
UserRouter.get('/getsample', samplesController.getAllDeatils)


//Login
UserRouter.post('/login', userController.login)

//ADD  THYROID REPORT  & GET REPORT
UserRouter.post('/addthyro', thyroidReport.addThyroid)
UserRouter.get('/getthyroid', thyroidReport.getThyroid)

//ADD GLUCO REPORT & GET GLUCO REPORT
UserRouter.post('/addgluco',glucoReport.addgluco)
UserRouter.get('/getgluco',glucoReport.getgluco)

//ADD HAEMOTOLOGY REPORT  & GET REPORT
UserRouter.post('/addhaemo',heamoReport.addHeamotology)
UserRouter.get('/gethaemo',heamoReport.getHaemo)



module.exports = UserRouter