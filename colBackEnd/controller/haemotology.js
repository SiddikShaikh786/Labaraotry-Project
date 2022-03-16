const haemo= require('../models/haematology')

//ADD HAEMOTOLOGY REPORT  
const addHeamotology= async (req, res, next) =>
{
    try {
        let {
            Haemoglobin,
            TotalCount,
            Neutrophils,
            Lymphocytes,
            eosinophils,
            monocytes,
            basophills,
            rbc,
            pcv,
            mcv

        }=req.body
        await haemo.insertMany([{
            Haemoglobin,
            TotalCount,
            Neutrophils,
            Lymphocytes,
            eosinophils,
            monocytes,
            basophills,
            rbc,
            pcv,
            mcv
        }])

        res.json({
            error:false,
            message: " Haemotlogy  added successfully",
            data:null
        })
        
    } catch (error) {
        next(error)
        
    }
}

//GET SAMPLES
const getHaemo= async (req, res, next) =>{
    try {
        const haemotologyR= await haemo.find().lean();
    res.json({ 
        error:false,
        message:" heamotology Report took successfully",
        data:{haemotologyR}
    })

    } catch (error) {
        next(error)
        
    }
}

module.exports={
    addHeamotology,
    getHaemo
}
