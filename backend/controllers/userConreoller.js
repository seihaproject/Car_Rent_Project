//const mongoose = require('mongoose');
const User = require('../models/userModel')
const userController = {
getuser:async(req,res)=>{
    const users =   await User.find()
   return res.json(users)
},
login:async(req,res)=>{
    const {username,password} = req.body
    //res.send('hello')
  
    try {
        const user = await User.findOne({username,password})
        if(user){
            res.status(400).json({msg:'You have succeed to login',user:user})
            
           // res.json(user)
            
        }else{
            res.status(400).json('sorry you have wrong username or password')                
        
        }
    } catch (error) {
        res.status(500).json({msg:'There is error exist during connecting to server'})
        
        
    }

},
register:async(req,res)=>{
    const {username,password} = req.body
        
    try {
        const user = await User.findOne({username})
        
        if(user){
           res.status(400).json({msg:'The user is already'})
        }else{
            const newUser =new  User(req.body)
            await newUser.save()
        return res.status(400).json({msg:'register successfully'})
        }
        
    } catch (error) {
       return  res.status(500).json({msg:'There is error happening during connection'})
    }
}


} 

module.exports = userController;