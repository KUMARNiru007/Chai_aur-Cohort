import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import db from "./utils/db.connect.js"
import cookieParser from "cookie-parser"


//import all routes
import userRoutes from "./routes/user.routes.js"

dotenv.config()

const app = express()

app.use(
  cors({
    origin :process.env.BASE_URL,
    credentials:true,
    methods:['GET', 'POST', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())


const port = process.env.PORT || 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/kumar', (req, res) => {
  res.send('Hello Kumar')
})

app.get('/hitesh', (req, res) => {
  res.send('Hello 2')
})

db()

//user Routes

app.use("/api/v1/users/", userRoutes)



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})