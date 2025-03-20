import mongoose from "mongoose"
import bcrypt from "bcryptjs"


const userSchema = new mongoose.Schema({
    name:String,
    email: String,
    password: String,
    role: {
        type: String,
        enum: ["user", "admin"],
        defauLt: "user",
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    verificationToken: {
        type: String,
    },
    resetPasswordToken: {
        type : String,
    },
    resetPasswordExpires: {
        type : Date,
    }

}, 
{
    timestamps: true
})


//hooks -- middle ware --flag next()

userSchema.pre("save" , async function(next) {
  if(this.isModified("password")){
    this.password = await bcrypt.hash(this.password ,10) // 10 salt value salt random string 
  }
    next()

}) // no arrow function

const User= mongoose.model("User", userSchema)


export default User