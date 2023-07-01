import React, { useEffect, useState } from "react";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { signInWithGoogle } from "../../firebase";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES, STORAGE_KEYS } from "../../utils/constants";
import Button from "../../components/button";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineWavingHand } from "react-icons/md";
import { createUserDocumentFromAuth } from "../../firebase";
import "./SignIn.css";
import { Helmet } from "react-helmet-async";
import { Validation } from "../../utils/Validation";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const navigate = useNavigate();

  const signIn = (e) => {
    e.preventDefault();
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((data) => {
        getDataFromFirebase(data);
        // setErrors({});
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };
  // const handleValidation = (e) => {
  //   e.preventDefault();
  //   const validationErrors = Validation(email, password);
  //   if (validationErrors) {
  //     setErrors(validationErrors);
  //   } else {
  //     signIn();
  //   }
  // };

  const signInWithGooglePopup = () => {
    signInWithGoogle()
      .then((data) => {
        const { user } = data;
        // console.log(data, 'first call');
        const res = createUserDocumentFromAuth(user);
        // console.log(res, 'second call');
        if (res) {
          getDataFromFirebase(data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getDataFromFirebase = (data) => {
    const { _tokenResponse: userToken, user } = data;
    const { idToken } = userToken;
    localStorage.setItem(STORAGE_KEYS.TOKEN, idToken);
    localStorage.setItem(STORAGE_KEYS.EMAIL, email);
    navigate(ROUTES.DASHBOARD);
  };
  useEffect(() => {
    if (email || password) setErrors({});
  }, [email, password]);

  return (
    <div className="signin-container">
      <Helmet>
        <title>Carefinder Sign In Page</title>
        <meta name="description" content="Welcome to Carefinder sign in page" />
        <link rel="canonical" href={ROUTES.SIGN_IN} />
      </Helmet>
      <div className="signin-content">
        <div className="carefinder-image">
          <div className="signin-desc">
            <div className="signin-context">
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
        <div className="signin-form">
          <form onSubmit={signIn}>
            <h1 className="carefinder-logo">
              <Link className="carefinder-link" to={ROUTES.LANDING}>
                Carefinder
              </Link>
            </h1>
            <h1 className="login-title">
              Hey, hello{" "}
              <i className="waving-icon">
                <MdOutlineWavingHand />{" "}
              </i>
            </h1>
            <p className="login-description">
              Enter the information you entered while registering.
            </p>

            <label htmlFor="email">Email</label>
            <input
              id="email"
              className="auth-email"
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="input-error-message">
              {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
            </div>

            <label htmlFor="password">Password</label>
            <input
              id="password"
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
              className="login-btn"
              text="Login"
              type="submit"
            />
          </form>
          <p className="or-text">OR</p>

          <button className="google-signin" onClick={signInWithGooglePopup}>
            <FcGoogle /> <p className="google-text">Sign In with Google</p>
          </button>
          <p className="signup-text">
            Don't have an account?{" "}
            <Link to={ROUTES.SIGN_UP} className="signup-page">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
