import React, { useEffect } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, createUserDocumentFromAuth } from "../../firebase";
import "./SignUp.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../../utils/constants";
import Button from "../../components/button";
import { Helmet } from "react-helmet-async";
// import {signUpValidation} from '../../components/Validation'
// import AuthDetails from './AuthDetails'

import { Validation } from "../../utils/Validation";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const signUp = (e) => {
    setLoading(true);
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((data) => {
        const { user, operationType } = data;
        console.log(operationType, "this is a OPERATION TYPE");
        console.log(user, "this is a user object");
        createUserDocumentFromAuth(user, { username });
        // setErrors({});
        navigate(ROUTES.SIGN_IN);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };
  // const handleValidation = (e) => {
  //   e.preventDefault();
  //   const validationErrors = Validation(email, password, "", username);
  //   if (validationErrors) {
  //     setErrors(validationErrors);
  //   } else {
  //     signUp();
  //   }
  // };

  useEffect(() => {
    if (email || password || username) setErrors({});
  }, [email, password, username]);

  return (
    <div className="signup-container">
      <Helmet>
        <title>Carefinder Sign Up Page</title>
        <meta name="description" content="Welcome to Carefinder sign up page" />
        <link rel="canonical" href={ROUTES.SIGN_UP} />
      </Helmet>
      <div className="signup-content">
        <div className="carefinder-image">
          <div className="signup-desc">
            <div className="signup-context">
              <h1 className="carefinder-title">
                Hospital <span className="search">search</span> made easy.
              </h1>
              <p className="carefinder-details">
                Discover the nearest hospital to you.<br></br>Share your
                experience and explore a catalog of reviews.
              </p>
            </div>
          </div>
        </div>
        <div className="signup-form">
          <form onSubmit={signUp}>
            <h1 className="carefinder-logo">
              <Link className="carefinder-link" to={ROUTES.LANDING}>
                Carefinder
              </Link>
            </h1>
            <h1 className="signup-title">Create an account</h1>

            <label htmlFor="username">Username</label>
            <input
              id="username"
              className="auth-username"
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            ></input>
            <div className="username-error-message">
              {errors.username && (
                <p style={{ color: "red" }}>{errors.username}</p>
              )}
            </div>

            <label htmlFor="email">Email</label>
            <input
              className="auth-email"
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <div className="input-error-message">
              {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
            </div>

            <label htmlFor="password">Password</label>

            <input
              className="auth-password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="password-extra">
              <p className="show-password" onClick={togglePasswordVisibility}>
                {showPassword ? "Hide Password" : "Show Password"}
              </p>

              <p className="password-error-message">
                {errors.password && (
                  <span style={{ color: "red" }}>{errors.password}</span>
                )}
              </p>
            </div>

            <Button
              loading={loading}
              className="signup-btn"
              text="Sign Up"
              type="submit"
            />
          </form>
          <p className="signin-text">
            Already have an account?{" "}
            <Link to={ROUTES.SIGN_IN} className="signin-page">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
