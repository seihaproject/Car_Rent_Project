//const { getallCars } = require('../../frontend/src/redux/actions/carAction')
const Car = require('../models/carModel')
const carController = {
  
    getallCars:async(req,res)=>{
        try {
            const cars = await Car.find()
            res.json(cars)
        } catch (error) {
            //console.log(error)
            return res.status(500).json({msg:error.message})            
        }    
        
    }
    
}
module.exports = carController