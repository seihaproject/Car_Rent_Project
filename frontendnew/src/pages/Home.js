import React, { useState, useEffect } from "react";
import {useSelector, useDispatch} from "react-redux";
import {carReducer} from "../redux/reducers/carReducers"
import {alertsReducer} from "../redux/reducers/alertsReducer"
import { getallCars } from "../redux/actions/carAction";
import Spinner from "../components/spinner";
import { Button,Col,Row } from 'antd'; 
function Home(){
    const {cars} = useSelector(state=>state.carReducer)
    const {loading}= useSelector(state=>state.alertsReducer)
    console.log('test of data',cars)
    const dispatch = useDispatch();
       
    //cars = dispatch(getallCars())
    // cars = dispatch(getallCars())
    
    useEffect(()=>{
        dispatch(getallCars())
    },[])

    return (
        <>
        
            {loading === true && (<Spinner/>)}
            <h2>The amount of cars is {cars.length}</h2>
            <Row  justify="center" gutter={16}> 
            {cars.map((car)=> {
                return <Col lg={5} sm={24} xs={24} >
                    <div className="car bs1 p-2">
                        <img src={car.image} className="carimg" alt={car.name}></img>
                        <div className="car-content">
                            
                                <span className="header">{car.name}</span>
                                <p>{car.rentPerHour}Rent Per Hour /-</p>
                            
                            <div>
                                <button className="btn1">Book Now</button>
                            </div>
                        </div>
                    </div>
                </Col>
                
                
                } )}
            
        </Row>
        </>
    )
}
export default Home
