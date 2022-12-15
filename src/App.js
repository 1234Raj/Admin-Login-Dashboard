import React  from "react";
import Home from './component/Home';
 import AddProduct from './component/AddProduct';
 import ProductList from './component/ProductList';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import SignupLogin from './component/SignupLogin';
import LandingPage from './component/LandingPage';
import Home1 from './component/Home1';
import Home2 from './component/Home2';
import View from "./component/View";
import Dashboard from "./component/Admin/Dashboard";
import './App.css';
import Navbar from "./component/Navbar";
import Login from "./component/Login";
import AdminLogin from "./component/AdminLogin";
import { BrowserRouter, Route, Routes  } from 'react-router-dom';

// import "./component/layout/Navbar.css";


function App() {
  
  return (
    <>
    
      <BrowserRouter>
        <Routes>
          <Route  path="/Home" element={<LandingPage/>} />
          <Route  path="/signup" element={<SignupLogin/>} />
          <Route  path="/Login" element={<Login/>} />
          <Route  path="/admin" element={<AdminLogin/>} />
          <Route  path="/Dashboard" element={<Dashboard/>} />
          <Route  path="/" element={<><Navbar  /><Home /></>} />
          <Route  path="/Add" element={<AddProduct/>} />
          <Route  path="/Edit" element={<ProductList/>} />
          <Route  path="/Next" element={<><Navbar  /><Home1/></>} />
          <Route  path="/View/:id" element={<View/>} />
          <Route  path="/Home2/:id" element={<Home2/>} />
        </Routes>
      </BrowserRouter>
       


    </>
  );
}

export default App;
