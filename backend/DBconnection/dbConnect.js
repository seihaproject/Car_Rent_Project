const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
const url = process.env.DATABASE_ACCESS
const connectDB = mongoose.connect(url,{
        useNewUrlParser: true},(error)=>{
            if(!error){
                console.log('Connect successfully')
            }else{
                console.log('There is or are error happenign during connecting to database',error)
            }
    
        })
    

module.exports = connectDB