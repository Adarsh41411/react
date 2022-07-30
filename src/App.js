import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import Footer from './components/Footer';
import Signin from './components/Signin';
import Register from './components/Register';
import New from './components/New';
import Browse from './components/Browse';
import Login from './components/Login';

import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
       <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/new" element={<New/>} />
        <Route path="/browse" element={<Browse/>} />
        <Route path="/login" element={<Login/>} />
        {/* <Route  element={Error} /> */}
      </Routes> 

      <Footer />




    </div>

  )
}

export default App;
