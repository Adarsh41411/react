
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa';
import '../Css/Navbar.css';
import Logo from '../Images/Logo.png';
// import Home from './Home';
// import About from './About';
// import Contact from './Contact';
// import Error from './Error';
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";

// import NavigateNextIcon from '@mui/icons-material/NavigateNext';




function Navbar() {
  return (
    <>
      <header className="header">

        <nav id="main" className="main-nav">

          <div className="logo grow">
            <img src={Logo} alt="logo" />

          </div>

          <div className="menu grow">

            <NavLink className="menu-list" to="/">Home</NavLink>
            <NavLink className="menu-list" to="/about">About Us</NavLink>
            <NavLink className="menu-list" to="/contact">Contact</NavLink>

          </div>

          {/* <div className="social-media grow">
            <ul className="social-media-desktop grow">
              <li><a href="https://www.facebook.com/" target="_blank" ><FaFacebookSquare /></a></li>
              <li><a href="https://www.instagram.com/" target="_blank" ><FaInstagramSquare /></a></li>
              <li><a href="https://twitter.com/" target="_blank"><FaTwitterSquare /></a></li>
            </ul>

          </div> */}
        </nav>
      </header>

      



    </>

  )

}

export default Navbar;