import React from "react";
import "./DashHeader.css";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { ROUTES } from "../utils/constants";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";

const DashHeader = () => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
        // // redirect to dashboard on successful login
        // navigate('/Dashboard')
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);
  return (
    <div className="dash-header-container">
      <div className="dash-header-content">
        <Link className="header-title" to={ROUTES.DASHBOARD}>
          {" "}
          <p>Admin</p>
        </Link>
        <div className="user-profile">
          <FaUserAlt />
        </div>
        <div className="auth-state">
          {authUser ? (
            <>
              {" "}
              <span>{`Welcome Back!  ${authUser.email}`}</span>{" "}
            </>
          ) : (
            <p>Signed Out</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashHeader;
