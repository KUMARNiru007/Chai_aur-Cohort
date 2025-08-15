import {asyncHandler} from "../utils/async-handler.js"
import User from "../models/user.models.js"
import {sendMail} from "../utils/mail.js"
import {userRegistrationValidator} from "../validators/index.js"


const registerUser = asyncHandler(async ( req,res ) => { 
    //get user data
    const {email ,username,password , role} = req.body

    if (!email || !username || !password || !role) {
        return res.status(404).json({
            message:"All fields are required"
        })
    }
    //     if(password.length < 8) {}
//   const isValidate =  validateMe(password)

    //existing user check
    try {
        const existingUser =await User.findOne({email})
        if(existingUser) {
            return res.status(404).json({
                message: "User already exist"
            })
        }
    }
    
    // create a new user
    try {
    const user = await User.create({
        email,
        password,
        username,
        role,

    })
    return res.status(201).json({
        message :"new user created"
    })
    } catch (error) {
        console.log("ERROR in creating new user",error);
        return res.status(404).json({
            message: "new user not created"
        })

    }


   

});
const loginUser= asyncHandler(async ( req,res ) => { 
    //get user data
    const {email ,username,password , role} = req.body

});

const logoutUser= asyncHandler(async ( req,res ) => { 
    //get user data
    const {email ,username,password , role} = req.body

});

const verifyUser= asyncHandler(async ( req,res ) => { 
    //get user data
    const {email ,username,password , role} = req.body

});

const resendVerificationEmail = asyncHandler(async ( req,res ) => { 
    //get user data
    const {email ,username,password , role} = req.body

});
const refreshAccessToken = asyncHandler(async ( req,res ) => { 
    //get user data
    const {email ,username,password , role} = req.body

});

const forgotPasswordRequest= asyncHandler(async ( req,res ) => { 
    //get user data
    const {email ,username,password , role} = req.body

});

const changeCurrentPassword= asyncHandler(async ( req,res ) => { 
    //get user data
    const {email ,username,password , role} = req.body

});

const getCurrentUser= asyncHandler(async ( req,res ) => { 
    //get user data
    const {email ,username,password , role} = req.body

});

export {registerUser , verifyUser }