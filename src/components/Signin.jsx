import React from 'react';
import '../Css/Signin.css';
// import { useState } from 'react';
import Register from './Register';
import Home from './Home';
import { useRef,useState, useEffect } from 'react';

import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
// import { Home } from '@mui/icons-material';

function Signup() {

// const userRef=useRef();
// const errRef=useRef();
  

        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')
      
        function emailfield(e) {
          setEmail(e.target.value)
      
        }
        function passfield(event) {
          setPassword(event.target.value)
      
        }
        // function show(event){

        
    //     let message=''
    //     if(email==='ut'&& password==='pass'){
    //          <Register/>
    //     }
    //     else{
    //         message= 'fuck offf'
    //     }
    // }
      
      
        return (
      
          
          <div>
      
            <div className="container">
              <div className="wrapper">
                <div className="title"><span>Login Form</span></div>
                <form action="#">
                  <div className="row">
                    <i className="fas fa-user"></i>
                    <input type="text" placeholder="Email " value={email} onChange={emailfield} required />
                  </div>
                  <div className="row">
                    <i className="fas fa-lock"></i>
                    <input type="password" placeholder="Password" value={password} onChange={passfield} />
                  </div>
                  <div className="pass"><a href="#">Forgot password?</a></div>
                  <div className="row button">
                    <button  onClick={<Register/>} >Login</button>
                  </div>
                  <div className="signup-link">Not a member? <a href="#">Signup now</a></div>
                </form>
              </div>
            </div>
          </div>  
        )
        
        }

export default Signup;
