import jwt from "jsonwebtoken"

export const isLoggedIn = async (req, res , next) => {
    try{
        console.log(req.cookies)
        let token = req.cookies.token || "" ;
        console.log("token found ",token? "Yes" : "No")

        if(!token){
            console.log('No token')
            return res.status(400).json({
                success:false,
                message: "Authentication Failed"
            })
        }

       
        const decoded =  jwt.verify    (token , process.env.JWT_KEY )     //verify useed to decode   
        console.log("decoded data",decoded)
        req.user = decoded
 
        next();


    
}

     catch(error) {
        console.log("Auth middleware failure")
        return res.status(400).json({
            success:false,
            message: "Internal server error"
        })

    }

}

//token from cookies
//check token
//data from token
