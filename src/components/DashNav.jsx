import React from "react";
import "./DashNav.css";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import Button from "./button";
import { ROUTES } from "../utils/constants";
import { Link } from "react-router-dom";
// import { ImExit } from "react-icons/im";
import { FaRegWindowClose } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import DashHeader from "./DashHeader";

const DashNav = () => {
  const [isDashExpanded, setIsDashExpanded] = useState(false);

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const userSignOut = () => {
    setLoading(true);
    signOut(auth)
      .then(() => {
        localStorage.clear();
        navigate(ROUTES.LANDING); //Redirect to sign in page on sign out
      })
      .catch((error) => console.log(error));
    setLoading(false);
  };

  return (
    <div className="dash-nav-container">
      <div className="m-content-dash">
        <div className="dash-navicon">
          <i
            className="dash-icon"
            onClick={() => {
              setIsDashExpanded(!isDashExpanded);
            }}
          >
            {isDashExpanded ? <FaRegWindowClose /> : <IoMdMenu />}
          </i>
          {/* <p className="dash-logo">Carefinder</p> */}
        </div>

        <ul className={isDashExpanded ? "dash-menu expanded" : "dash-menu"}>
          <div className="m-dash-feature">
            <DashHeader />
          </div>
          <Link to={ROUTES.MARKDOWN} className="content-link">
            <li>Review Management</li>
          </Link>
          <Link to={ROUTES.ANALYSIS} className="analysis-link">
            <li>Review Analysis</li>
          </Link>

          <Link to={ROUTES.SUPPORT} className="support-link">
            <li>Feedback Support</li>
          </Link>

          <div className="btn-signoutm">
            <Button
              loading={loading}
              className="btn-signout-mble"
              text="Log Out"
              onClick={userSignOut}
            ></Button>
          </div>
        </ul>
      </div>
      <div className="dash-nav-content">
        <h1 className="dash-title">Carefinder</h1>
        <ul className="dash-nav">
          {/* <li>
        <Link to={ROUTES.LANDING}>Home</Link>

    </li> */}
          <li>
            <Link to={ROUTES.MARKDOWN} className="management-route">
              Review Management
            </Link>
          </li>
          <li>
            <Link to={ROUTES.ANALYSIS} className="analysis-route">
              Review Analysis
            </Link>
          </li>
          {/* <li></li> */}
          <li>
            <Link to={ROUTES.SUPPORT} className="support-route">
              Feedback Support
            </Link>
          </li>
        </ul>
        <div className="signout-btn">
          <Button
            loading={loading}
            className="btn-signout"
            text="Log Out"
            onClick={userSignOut}
          ></Button>
        </div>
      </div>
    </div>
  );
};

export default DashNav;
