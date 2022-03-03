const samples = require('../models/sample');
//adding sample details
const addSample = async (req, res, next) => {
    try {
        let { date, pname, email, sampleId, haemotology, thyroid, glucometry } = req.body
        await samples.insertMany([{
            date,
            pname,
            email,
            sampleId,
            haemotology,
            thyroid,
            glucometry

        }])
        res.json({
            error: false,
            message: "samplereport as been added successfully",
            data: null
        })
    } catch (err) {
        next(err)
    }
}

//getting sample details
const getAllDeatils = async (req, res, next) => {
    try {
        const sampledata = await samples.find().lean();
        res.json({
            error: false,
            message: " edited sample succesfully",
            data: sampledata
        })
    } catch (err) {
        next(err)
    }

}
module.exports = {
    addSample,
    getAllDeatils
}