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
        <ul className={isNavExpanded ? "m-menu expanded" : "m-menu"}>
          <div className="m-feature">
        <p>CareFinder</p>
          </div>
          <Link to="/" className="home-link" ><li>Home</li></Link>
          <Link to="/AtoZ" className="list-link" ><li>Hospitals A-Z</li></Link>
          <li>BMI Calculator</li>
          <li>About Us</li>
          {/* <Link to="/SignIn" className="signin-link"><li>Sign In</li></Link> */}
        </ul>
      </div>

      <div className="nav-container">
        <div className="logo">
          <p>Carefinder</p>
        </div>
        <ul className="menu">
        <li><Link to={ROUTES.LANDING} className="home-link" >Home</Link></li>
        <Link to={ROUTES.A_TO_Z} className="list-link" ><li>Hospitals A-Z</li></Link>
          <li>BMI Calculator</li>
          <li>About Us</li>
          <Link to={ROUTES.SIGN_IN} className="signin-link"><li>Sign In</li></Link>
          <Link to={ROUTES.SIGN_UP} className="signup-link"><li>Sign Up</li></Link>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
