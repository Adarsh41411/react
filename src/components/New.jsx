import React from 'react';
import '../Css/Navbar.css';
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";

export default function New() {
  return (
    <div id="btn1">

<NavLink to="/new"style={{ textDecoration: 'none'}} ><button className="btn4">Employee Mangement </button></NavLink>
<NavLink to="/new"style={{ textDecoration: 'none'}} ><button className="btn4">Train Data </button></NavLink>
<NavLink to="/browse"style={{ textDecoration: 'none'}} ><button className="btn4">Generate Attendence </button></NavLink>
<NavLink to="/new"style={{ textDecoration: 'none'}} ><button className="btn4">Student Details</button></NavLink>
<NavLink to="/new"style={{ textDecoration: 'none'}} ><button className="btn4">Support And Chat</button></NavLink>


    </div>
  )
}
