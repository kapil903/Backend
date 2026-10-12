import express from "express";
import cors from 'cors';
import cookieParser from "cookie-parser";

const app = express()

app.use(cookieParser());

app.use(cors({
    origin : process.env.CORS_ORIGIN,
    credentials : true
}))

//import routes

import  router  from "./routes/user.routes.js";

router.use("/user", router)

export default app