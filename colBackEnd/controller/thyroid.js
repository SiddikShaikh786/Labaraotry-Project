const thyro = require('../models/thyroid')
const addThyroid = async (req, res, next) => {
    try {
        let { tri, thyroxine, tsh } = req.body
        await thyro.insertMany([{
            tri,
            thyroxine,
            tsh
        }])
        res.json({
            error: false,
            message: " thyroid Samples Added successfully",
            data: null
        })

    } catch (err) {
        next(err)

    }

}

//getAllTHYROID REPORT
const getThyroid= async (req,res, next)=> 
{ 
    try {
        const thyroid = await thyro.find().lean();
        res.json({
            error: false,
            message: " get thyroid report successfully",
            data:{thyroid}
        })
    } catch (error) {
        next(error)
    }

}
module.exports = { addThyroid, getThyroid}
