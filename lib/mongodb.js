import mongoose from "mongoose";

export const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Database Connected...");
    } catch (error) {
        console.log("Error in connecting database : ",error);
    }
};