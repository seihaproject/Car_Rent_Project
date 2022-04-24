import axios from "axios";
import {message} from "antd"
export const userLogin= (reqObj) => async dispatch=>{
 dispatch({type:"LOADING", payload:true})
    try {
        //console.log(reqObj)
        const res = await axios.post("http://localhost:8080/api/user/login",reqObj)
        //localStorage.setItem('user',JSON.stringify(res.data))
        message.success(res.data)
        dispatch({type:"LOADING",payload:false})
        
    } catch (error) {
        console.log(error)
        message.error(error)
        dispatch({type:"LOADING",payload:false})
        
    }   

}
export const userRegister = ({reqObj}) => async dispatch=>{
    dispatch({type:"LOADING",payload:true})
    try {
        const res = await axios.post("http://localhost:8080/api/user/register/",{reqObj})

        
        alert('register successfully')
        dispatch({type:"LOADING", payload:false})
        
        setTimeout(() => {
            window.location.href="http://localhost:3000/login/"
         
        }, 500);
        
        
   } catch (error) {
        console.log(error)
        message.error(error)
        dispatch({type:"LOADING",payload:false})
        
    }


}
