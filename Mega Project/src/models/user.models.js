import mongoose , {Schema} from "mongoose" ;
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import crypto from "crypto"


const userSchema = new Schema({
    avatar:{
        type:{
            url:String,
            localpath: String,
            
        },
        deafult:{
            url:`https//palccehold.co/600x400`,
            localpath:""
        },
        
    },
    username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        index:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        index:true,
    },
    fullname:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:[true,"password is required"],
    },
    isEmailVerified:{
        type:Boolean,
        default:false,
    },
    forgotPasswordToken:{
        type:String,
    },
    forgotPasswordExpiry:{
        type:Date,
    },
    refreshToken:{
        type:String,
    },
    emailVerificationToken:{
        type:String,
    },
    emailVerificationExpiry:{
        type:Date,
    },

},{timestamps:true});

 
//hooks -just phele just baad mai

userSchema.pre("save", async function(next) {
    if(!this.isModified("password")) return next() ;
    this.password = await bcrypt.hash(this.password, 10)
    next()
})

// if(this.Modified("password")) {
//     this.password = await bcrypt.hash(this.password, 10)
// }


userSchema.methods.isPasswordCorrect = async function(password) {
    await bcrypt.compare(password , this.password)
} //custom method we used in mojngoose like injecting in y=the mongoose.

userSchema.methods.generateAccessToken = function () {//RETURN
    return jwt.sign(
        {
            _id:this._id,
            email:this.email,
            username:this.username,
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expireIn: process.env.ACCESS_TOKEN_EXPIRY},
    );
};

userSchema.methods.generateRefreshToken = function () {
    return jwt.sign(
      {
        _id: this._id,
      },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: process.env.REFRESH_TOKEN_EXPIRY },
    );
  };

  //temporary token for email
  userSchema.methods.generateTemporaryToken = function () {
    const unHashedToken = crypto.randomBytes(20).toString("hex")

    const hashedToken = crypto.createHash("sha256").update(unHashedToken).digest("hex")  // keep it secret

    const tokenExpiry = Date.now() + (20*60*1000) //20 min

    return {   hashedToken, unHashedToken, tokenExpiry  }

}


export const User = mongoose.model("User" , userSchema)