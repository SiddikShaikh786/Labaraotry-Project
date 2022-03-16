const mongoose = require('mongoose')
const Schema = mongoose.Schema

const haemotologySchema = new Schema({
Haemoglobin: 
{
    type:String,
    required: true
},
TotalCount:
{
    type:String,
    required: true
},
Neutrophils: {
    type:String,
    required: true
},
Lymphocytes: {
    type:String,
    required: true
},
eosinophils: {
    type:String,
    required: true
},
monocytes:{
    type:String,
    required: true
},
basophills: {
    type:String,
    required: true
},
rbc: {
    type:String,
    required: true
},
pcv: {
    type:String,
    required: true
},
mcv: {
    type:String,
    required: true
}
})

module.exports = mongoose.model('Haemotology',haemotologySchema)