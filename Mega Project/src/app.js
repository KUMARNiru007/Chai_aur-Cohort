import express from "express";

const app = express();

//routes imports
import healthCheckRouter from "./routes/healthcheck.routes.js"


app.use("/api/v1/healthcheck", healthCheckRouter)

export default app;