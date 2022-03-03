const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')//helps to prevent mismatching b/w domain names/different domain

const app = express();

const dbUrl = 'mongodb+srv://SiddikShaikh:root@cluster0.fsxok.mongodb.net/LabProject?retryWrites=true&w=majority'
//Connecting through mongodb database
mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    if (!err) {
        console.log("DB connected successfully");
    } else {
        console.log("Db not connected,connection failed");
    }
})

//cors level middleware
app.use(cors())

const userRoutes = require('./routes/users');

//Body Parser Middleware
app.use(express.urlencoded({ extended: true }))

//json Middleware
app.use(express.json());

//Router Level Middleware
app.use('/users', userRoutes);

//Error level Route
app.get('/error', (req, res) => {
    res.status(500).send('something went wrong')
})


module.exports=app