const userModel = require("../models/users")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
SECRET_KEY = "TechnoElevate"

const register = async (req, res, next) => {
    let { uname, email, password, role } = req.body
    try {
        const emailExists = await userModel.findOne({ email: email })
        if (emailExists) {
            res.status(400).json({
                error: true,
                message: "email already exists",
                data: null
            })
        } else {
            const saltrounds = 10
            //salt of the password,we are encrypting the password using saltround
            const salt = await bcrypt.genSalt(saltrounds)

            //hash password,it makes the password encrypted
            const hashpassword = await bcrypt.hash(password, salt)

            await userModel.insertMany([
                { uname, email, role, password: hashpassword }
            ])
            res.status(200).json({
                error: false,
                message: "registration successful",
                data: null
            })
        }
    }
    catch (err) {
        next(err)
    }
}
// login Logic
const login = async (req, res, next) => {
    let { email, password } = req.body
    try {
        const userData = await userModel.findOne({ email }).lean()
        if (userData) {
            let { uname, role } = userData
            const isPasswordMatch = await bcrypt.compare(password, userData.password)

            if (isPasswordMatch) {
                const payload = { uname, role }
                const token = await jwt.sign(payload, SECRET_KEY, {
                    expiresIn: "5h"
                })
                res.status(200).json({
                    error: false,
                    message: "login successful",
                    data: {
                        uname, role, token
                    }
                })
            } else {
                res.json({
                    error: true,
                    message: "Invalid password",
                    data: null
                })
            }
        }
        else {
            res.status(401).json({
                error: true,
                message: "User not registered",
                data: null
            })
        }
    } catch (err) {
        next(err)
    }
}

//get samples
const getAllSamples = async (req, res) => {
    try {
        const samples = await userModel.find().lean();
        res.json({
            error: false,
            message: "colledcted samples successfully",
            data:
            {
                samples
            }
        })
    }
    catch (err) {
        next(err)
    }
}


const getUser = async (req, res) => {
    console.log(req.params._id);
    _id = parseInt(req.params._id)
    try {

        const val = await userModel.findOne({ _id: req.params._id }).lean()
        // res.render("./editproduct.handlebars",{selectedProduct:productToEdit})
        res.json({
            error: false,
            message: "get edit",
            data: {
                val
            }
        })
    }
    catch (err) {
        next(err)
    }
}

const getUsers = async (req, res) => {
    console.log(req.body)
    let { _id, uname, email } = req.body;
    try {
        const val1 = await userModel.updateOne({ _id }, { $set: { uname, email } })
        res.json({
            error: false,
            message: "edit successful",
            data: { val1 }
        })
    }
    catch (err) {
        next(err)
    }
}

//DELETE USERS 
const deleteUsers = async (req, res, next) => {
    console.log(req.params)
    let { _id } = req.params
    console.log(_id);
    try {
        await userModel.deleteOne({ _id: _id })
        res.json({
            error: false,
            message: " user deleted Successfully",
            data: null
        })
    }
    catch (err) {
        next(err)
    }

}

module.exports = {
    login, register, getAllSamples, getUser, getUsers, deleteUsers
}