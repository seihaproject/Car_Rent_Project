const express = require('express')
const carController = require('../controllers/carController')
const carRouter = express.Router()

carRouter.route('/cars')
         .get(carController.getallCars)
         //.post(carController.addcar)
         //.get((req,res)=>res.send('hello here is router'))
         
//carRouter.route('/cars/:id')
  //      .get(carController.getcar)
    //    .put(carController.updatecar)
      //  .delete(carController.deletecar)
module.exports = carRouter