import {asyncHandler} from "../utils/async-handler.js"


const registerUser = asyncHandler(async ( req,res ) => { 
    //get user data
    const {email ,username,password , role} = req.body

    //validation
//     if(!email || !password){

//     }
//     if(password.length < 8) {}

//   const isValidate =  validateMe(password)
   
registrationValidation(body)


})

export {registerUser }