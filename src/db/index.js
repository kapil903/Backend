import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        console.log("Attempting MongoDB connection...");

        const connectionInstance = await mongoose.connect(
            process.env.MONGODB_URI,
            {
                dbName: DB_NAME,
                serverSelectionTimeoutMS: 10000
            }
        );

        console.log(
            `MongoDB connected: ${connectionInstance.connection.host}`
        );
    } catch (error) {
        console.log("MongoDB connection error:", error.message);
        throw error;
    }
};

export default connectDB;