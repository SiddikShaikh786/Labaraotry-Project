const mongoose = require('mongoose')
const Schema= mongoose.Schema;

const glucoSchema = new Schema({
    fasting: 
    {
        type:String,
        required: true
    },
    post:{
        type:String,
        required: true
    },
    gly:{
        type:String,
        required: true
    },
    calcium:{
        type:String,
        required: true
    }
})

module.exports = mongoose.model('glucometry',glucoSchema)