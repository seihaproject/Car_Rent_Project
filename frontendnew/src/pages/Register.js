import React from "react";
import { Row, Col,Form, Input, Button, Checkbox } from 'antd';
import {Link} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux";
import Spinner from "../components/spinner";
import { userRegister } from "../redux/actions/userAction";
import {alertsReducer} from "../redux/reducers/alertsReducer"

function Register(){
    const dispatch = useDispatch();
    const {loading} = useSelector(state=>state.alertsReducer)
function onFinish(values){
    dispatch(userRegister(values))
    console.log(values)
}    

    
    return(

        <div className="login">
            {loading && (<Spinner></Spinner>)}
            <Row gutter={16}>
              
                <Col lg={16}>
                <h2 className="text-logo">Seiha Rentcar</h2>
                    <img className="carlogin" src="https://www.freeiconspng.com/uploads/black-audi-car-png-17.png"></img>
                </Col>
                <Col lg={8} className='text-left'>
                <Form layout="vertical" className='login-form p-5' onFinish={onFinish}>
                    <h1>Login</h1>
                    <hr/>
                <Form.Item name='username' label="Username" rules={[{required:true}]}>
                    <Input />
                </Form.Item>

                <Form.Item name='password' label="Password" rules={[{required:true}]}>
                    <Input/>
                </Form.Item>

                <Form.Item name='confirmpassword' label="Comfirm Password" rules={[{required:true}]}>
                    <Input/>
                </Form.Item>



                <Form.Item
                                    >
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item
                                 >
                    <Button type="primary" htmlType="submit" className="btn1">
                    Register
                    </Button>
                </Form.Item>
                <span>Click here if you have account already <Link to="/login">LOGIN</Link></span>
                </Form>
                </Col>
            </Row>

        </div>
    )
}
export default Register
