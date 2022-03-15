const gluco=require('../models/glucometry')

//adding GLUCO SAMPLES

const addgluco= async (req,res,next) => {
    try {
        let {fasting,post,gly,calcium}=req.body
        await gluco.insertMany([{
            fasting,
            post,
            gly,
            calcium
        }]) 
        res.json({
            error:false,
            message:" add gluco samples successfully",
            data:null
        })

       
        
    } catch (err) {
        next(err)
    }
}
 //GET REPORT SAMPLES
 const getgluco= async (req, res, next)=>
 {
     try {
        
            const glucometry = await gluco.find().lean();
            res.json({
                error:false,
                message:" get gluco samples successfully",
                data:{glucometry}
            })
        
         
     } catch (error) {
         next(error)
     }
 }



module.exports = {
    addgluco, 
    getgluco
}