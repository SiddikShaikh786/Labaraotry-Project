const mongoose = require('mongoose');
const Schema = mongoose.Schema
const sampleReportSchema = new Schema({
    date: {
        type: Date,
        required: true
    },
    pname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    sampleId: {
        type: Number,
        required: true
    },

    haemotology:
    {
        type: Object
    },
    thyroid: {
        type: Object
    },
    glucometry: {
        type: Object
    }

})
module.exports = mongoose.model('sampleDetails', sampleReportSchema)