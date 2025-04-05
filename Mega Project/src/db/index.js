import mongoose from "mongoose"

const connectDB = async() =>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("✅ MongoDB connected");
    } catch(error) {
        console.error("❌ MongoDB connection failed",error);
        process.exit(1); // 1 - signal an error or failure

    }
}

export default connectDB;