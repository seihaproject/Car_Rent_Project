const express = require('express')
const userRouter = express.Router()
const userController = require('../controllers/userConreoller')
userRouter.post('/user/login',userController.login)
          
userRouter.post('/user/register',userController.register)
userRouter.get('/user',userController.getuser)
module.exports = userRouter
