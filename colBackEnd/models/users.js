const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    uname: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 15
    },

    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 30
    },
    password: {
        type: String,
        required: true,
        minlength: 6,

    },
    role: {

        type: String,
        required: true,
        minlength: 3,
        maxlength: 10

    }
})
module.exports = mongoose.model('users', userSchema)