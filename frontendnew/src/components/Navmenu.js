import React from 'react';
import { ReactDOM } from 'react';
import {useNavigate} from 'react-router-dom';
import { Button, Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import MenuItem from 'antd/lib/menu/MenuItem';
//import { Button } from 'antd';
import {Link, useHref, Outlet} from "react-router-dom"
function Navmenu(){
    const { SubMenu } = Menu;
    const navigate = useNavigate()
    return(
        <>
    <Menu mode="horizontal">
        <Menu.Item icon={<MailOutlined />}>
          Navigation One
        </Menu.Item>
        <Menu.Item key="app" disabled icon={<AppstoreOutlined />}>
          Navigation Two
        </Menu.Item>
        <SubMenu key="SubMenu" icon={<SettingOutlined />} title="Navigation Three - Submenu">
          <Menu.ItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <Menu.Item key="alipay">
          <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
            Navigation Four - Link
          </a>
        </Menu.Item>
        <Menu.Item>
            <Button type="primary" onClick={()=>navigate('/login')}>Login</Button>
            
        
           
            <Button className="mt-4" onClick={()=>navigate('/register')}>Register</Button>
        </Menu.Item>
      </Menu>
       <Outlet />
    </>
    )

}
    
export default Navmenu;