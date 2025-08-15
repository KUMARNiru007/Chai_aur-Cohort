import express from "express";
import cors from "cors";
import cookieParser  from "cookie-parser";

const app = express();

//import all routes
import authRoutes from "./routes/auth.routes.js";
import healthCheckRoutes from "./routes/healthcheck.routes.js";



app.use(cors({
    origin : process.env.CORS_ORIGIN,
    credentials:true,
    methods:['GET','POST','DELETE','OPTIONS'],
    allowedHeaders:['Content-type', 'Task-Manager']
  }))
  
  app.use(express.json());
  app.use(express.urlencoded({extented:true}))
  app.use(cookieParser())

app.use("/api/v1/auth",authRoutes )
app.use("/api/v1/healthcheck", healthCheckRoutes)




export default app;