import React from 'react';
import '../Css/Navbar.css';
import Logo from '../Images/Logo.png';
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";



function Home() {
  return (
    <div>
      
      <div className="section-main">
        <div className="main-img ">
          <img src={Logo} alt="logo" />
          <h1 className="img-h1">Save Time, Be Smart</h1>;
        </div>

        <div className="main-btn  " >
          <h1 className="btn-h1">Quick Links</h1>
          <div className="clt-btn">
            <button className="btn">Find Your ID</button>
            <button className="btn">No Of Presence</button>
            <button className="btn">Download Attendence</button>
          </div>
        </div>
      </div>
      <div id="btn" >
       
        <NavLink to="/signin"style={{ textDecoration: 'none'}} ><button className="btn3">Sign In </button></NavLink>
        <NavLink to="/register"style={{ textDecoration: 'none'}} ><button className="btn3">Register </button></NavLink>
        <NavLink to="/login"style={{ textDecoration: 'none'}} ><button className="btn3">Login </button></NavLink>
       
      </div>
      



    </div>
  )
}

export default Home;

