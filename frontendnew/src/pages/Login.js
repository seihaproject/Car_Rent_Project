import React from "react";
import AOS from 'aos';
import { Row, Col,Form, Input, Button, Checkbox } from 'antd';
import {useDispatch, useSelector} from "react-redux";
//import {alertsReducer} from "../redux/reducers/alertsReducer"

import { userLogin } from "../redux/actions/userAction";
import Spinner from "../components/spinner";
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
//import Spinner from '../components/Spinner';
function Login(){
    const dispatch = useDispatch()
   const {loading} = useSelector(state=>state.alertsReducer)
    function onFinish(values){
        alert(values.username)
        dispatch(userLogin(values))
        console.log(values)

    }
    return(

        <div className="login">
             {loading && (<Spinner />)}
            <Row gutter={16}>
              
                <Col lg={16}>
                <h2 className="text-logo">Seiha Rentcar</h2>
                    <img className="carlogin" src="https://www.freeiconspng.com/uploads/black-audi-car-png-17.png"></img>
                </Col>
                <Col lg={8} className='text-left'>
                <Form layout="vertical" className='login-form' onFinish={onFinish}>
                    <h1>Login</h1>
                    <hr/>
                        <Form.Item style={{padding:"1px 25px"}} name='username' label="Username" rules={[{required:true}]}>
                            <Input />
                        </Form.Item>

                        <Form.Item style={{padding:"1px 25px"}} name='password' label="Password" rules={[{required:true}]}>
                            <Input/>
                        </Form.Item>

                       

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="btnlogin">
                    Submit
                    </Button>
                </Form.Item>
                </Form>
                </Col>
            </Row>

        </div>
    )
}
export default Login
