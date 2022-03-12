const mongoose = require('mongoose');
const Schema = mongoose.Schema

const thySchema = new Schema({
    tri:
    {
        type: String,
        required: true
    },
    thyroxine:
    {
        type: String,
        required: true
    },
    tsh:
    {
        type: String,
        required: true
    }


})

module.exports = mongoose.model('Thyroid', thySchema)