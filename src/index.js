import dotenv from "dotenv"

import app from "./app.js";

dotenv.config({
    path : "./.env"
})

console.log("PORT loaded:", Boolean(process.env.PORT));

import connectDB from "./db/index.js";

console.log("Connecting to MongoDB...");

connectDB()
    .then(() => {
        console.log("MongoDB connected successfully!");

        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running at port: ${process.env.PORT || 8000}`);
        });
    })
    .catch((error) => {
        console.log("MongoDB connection failed!!!", error);
    });
/*
(async () => {
    try{
        await mongoose.connect('${process.env.MONGODB_URI}/${DB_NAME}')
        app.on("error :", (error) => {
            console.log("Error: ", error)
            throw error
        })

        app.prependOnceListener(process.env.PORT, () => {
            console.log("App is listening on ${process.env.PORT}")
        })
    } catch(error){
        console.log("Error: ", error)
        throw error
    }
})()

*/