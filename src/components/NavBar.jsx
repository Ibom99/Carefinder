import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { FaHamburger } from "react-icons/fa";
import { FaRegWindowClose } from "react-icons/fa";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { useState } from "react";
import { ROUTES } from "../utils/constants";

const NavBar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  

  return (
    <div className="container">
      <div className="m-content">
        <i
          className="icon"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          {isNavExpanded ? <FaRegWindowClose /> : <FaHamburger />}
        </i>
        <p className="m-logo">Carefinder</p>
        <ul className={isNavExpanded ? "m-menu expanded" : "m-menu"}>
          <div className="m-feature">
        <Link className="home" to={ROUTES.LANDING}><p>CareFinder</p></Link>
          </div>
          <Link to={ROUTES.BMI} className="BMI-link" ><li>BMI Calculator</li></Link>
          <Link to={ROUTES.REVIEWS} className="list-link" ><li>Reviews</li></Link>
          <li>About Us</li>
          <li>FAQ</li>
            <Link to={ROUTES.SIGN_IN} className="signin-m"><li>Sign In</li></Link>
          <Link to={ROUTES.SIGN_UP} className="signup-m"><li>Sign Up</li></Link>
      
          
        
        </ul>
      </div>

      <div className="nav-container">
        <div className="logo">
          <Link to={ROUTES.LANDING} className="home-link" ><p>Carefinder</p></Link>
        </div>
        <ul className="menu">
        <li><Link to={ROUTES.BMI} className="home-link" >BMI Calculator</Link></li>
        <li><Link to={ROUTES.REVIEWS} className="atoz-link" >Reviews</Link></li>
          
          <li>About Us</li>
          <li><Link to={ROUTES.SIGN_IN} className="signin-link">Sign In</Link></li>
          <li><Link to={ROUTES.SIGN_UP} className="signup-link">Sign Up</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
