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

module.exports = { addThyroid }
