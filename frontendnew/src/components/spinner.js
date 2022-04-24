import React from "react";
import {Spin} from "antd";
function Spinner(){
    return (
        <div className="container">
        <div className="spinner">
            <Spin size="large"></Spin>
        </div>
        </div>

    )
}
export default Spinner;