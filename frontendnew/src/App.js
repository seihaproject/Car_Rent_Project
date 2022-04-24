import logo from './logo.svg';
import Home from "./pages/Home";
import Navmenu from "../src/components/Navmenu"
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import './App.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
//import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
                <Route path="/" element={<Navmenu></Navmenu>}>
                    <Route index element={<Home></Home>}></Route>
                    <Route path='login' element={<Login></Login>}></Route>
                    <Route path='register' element={<Register></Register>}></Route>                
                </Route>


          </Routes>
      </BrowserRouter>
     
</div>
  )
}

export default App;
