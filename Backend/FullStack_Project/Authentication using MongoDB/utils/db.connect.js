import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()

// export a function that connect to db
const db = () => {
    mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("connected to mongodb")
     })
    .catch(() => {
     console.log("Error connecting in mongodb")
    })
}

export default db