const express = require('express')
const app = express()
const nodemon = require('nodemon')
const connectDB = require('./DBconnection/dbConnect')
const cors = require('cors')
const dotenv = require('dotenv')
const carRouter= require('./routes/routecar')
const userRouter = require('./routes/routeUser')
//const userRouter = require('./routes/routeUser')

dotenv.config()
app.use(cors())
app.use(express.json())

const port = process.env.PORT

app.listen(port,()=>{
    console.log('The server listen at port',port)
})
/*
app.use('/',(req,res)=>{
    res.send('Hello world');
})
*/

app.use('/api',carRouter)
app.use('/api',userRouter)