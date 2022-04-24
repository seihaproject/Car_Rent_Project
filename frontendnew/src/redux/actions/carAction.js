import axios from "axios";
export const getallCars=()=> async dispatch=>{

    dispatch({type:'LOADING', payload:true})
    try {
        const res = await axios.get("http://localhost:8080/api/cars")
        dispatch({type:"GET_ALL_CARS",payload:res.data})
        dispatch({type:"LOADING",payload:false})
        
    } catch (error) {
        console.log(error)
        dispatch({type:"LOADING", payload:false})
    }

}
//module.exports = getallCars