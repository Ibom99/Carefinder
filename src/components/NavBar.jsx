import React from "react";
import "./NavBar.css";
import { FaHamburger } from "react-icons/fa";
import { FaRegWindowClose } from "react-icons/fa";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { useState } from "react";

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
          <li>Home</li>
          <li>Hospitals A-Z</li>
          <li>BMI Calculator</li>
          <li>About Us</li>
        </ul>
      </div>

      <div className="nav-container">
        <div className="logo">
          <p>Carefinder</p>
        </div>
        <ul className="menu">
          <li>Home</li>
          <li>Hospitals A-Z</li>
          <li>BMI Calculator</li>
          <li>About Us</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
