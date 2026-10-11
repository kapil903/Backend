import dotenv from "dotenv"

dotenv.config({
    path : "./.env"
})

console.log("PORT loaded:", Boolean(process.env.PORT));

import connectDB from "./db/index.js";

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000 , () => {
        console.log("Server is running at port: ${process.env.PORT}")
    })
})
.catch((eroor) => {
    console.log("mongoDB connection failed!!!")
})
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