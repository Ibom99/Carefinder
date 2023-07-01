import React, { useEffect } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { ROUTES } from "../utils/constants";
import { v4 as uuidv4 } from "uuid";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { useState } from "react";
import { Validation } from "../utils/Validation";


const Footer = () => {
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [feedbackSent, setFeedbackSent] = useState(false);
  const [errors, setErrors] = useState({});

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
    // console.log(e.target.value)
  };

  // const handleChange = (e)=> {
  //   const {name, value}= e
  //   setFormData({...formData, [name]: value})
  // }

  const handleSend = async () => {
    // e.preventDefault();
    try {
      const payload = {
        email,
        feedback,
        id: uuidv4(),
        createdAt: new Date(),
      };

      await addDoc(collection(db, "supports"), payload);
      setEmail("");
      setFeedback("");
  
      console.log("Feedback sent successfully!");
      setFeedbackSent(true);
    } catch (error) {
      console.error("Error sending feedback: ", error);
    }
  };

  const handleValidation = (e) => {
    e.preventDefault();
    
    const validationErrors = Validation(email, "", feedback);
    if (!validationErrors) {  //the exclamtion mark affects the code and document creation it sets
      setErrors(validationErrors);
    } else {
      handleSend();
      
    }
  };

  
  const handleInputFocus = () => {
    setFeedbackSent(false);
  };

  useEffect(() => {
    if (email || feedback) setErrors({});
  }, [email, feedback]);

  return (
    <div className="footer-container">
      <h1 className="footer-title">Carefinder</h1>
      <div className="footer-content">
        <div className="footer-contact">
          <h1>Contact Us</h1>
          <p>
            <a href="mailto:ibom.esther@gmail.com">ibom.esther@gmail.com</a>
          </p>
          <p>
            <a href="tel:+2348140390964">+234 8140390964</a>
          </p>
        </div>
        <div className="footer-navigation">
          <h1>Company</h1>
          <p>
            <Link className="footer-link" to={ROUTES.REVIEWS}>
              Hospital Reviews
            </Link>
          </p>
          <p>
            <Link className="footer-link" to={ROUTES.BMI}>
             
              BMI Calculator
            </Link>
          </p>
          <p>
            <Link className="footer-link" to={ROUTES.ABOUT}>
              
              About Us
            </Link>
          </p>
          <p>
            <Link className="footer-link" to={ROUTES.FAQ}>
             
              FAQs
            </Link>
          </p>
          <p>
            <Link className="footer-link" to={ROUTES.SIGN_IN}>
              
              Sign in
            </Link>
          </p>
          <p>
            <Link className="footer-link" to={ROUTES.SIGN_UP}>
            
              Sign up
            </Link>
          </p>
        </div>

        <div className="footer-features">
          <h1>Features</h1>
          <p>Content Management</p>
          <p>User Support</p>
          <p>Review Analysis</p>
        </div>

        <div className="footer-support">
          <h2 className="support-title">Need assitance or have a complaint?</h2>
          <p className="support-desc">
            <em>Drop your feedback down below!</em>
          </p>

          <form className="validation-form" onSubmit={handleValidation}>
            <label className="support-label">Email:</label>
            <input
              type="email"
              placeholder="Enter email..."
              className="support-input"
              value={email}
              onChange={handleEmailChange}
              onFocus={handleInputFocus}
            />
            <div className="error-message">
              {errors.email && (
                <p className="error-message-input" style={{ color: "red" }}>
                  {errors.email}
                </p>
              )}
            </div>

            <label className="support-label">Feedback/Report:</label>
            <textarea
              rows="5"
              type="text"
              placeholder="Enter feedback..."
              className="support-input"
              value={feedback}
              onChange={handleFeedbackChange}
              onFocus={handleInputFocus}
            />
            <div className="error-message">
              {errors.feedback && (
                <p style={{ color: "red" }}>{errors.feedback}</p>
              )}
            </div>

            <button type="submit" className="support-btn">
              Send
            </button>
          </form>

          {feedbackSent && (
            <p className="feedback-success">
              Thank you for your feedback! <br></br>It'll be responded to as
              soon as possible.
            </p>
          )}
        </div>
      </div>

      <p className="copyright-text">
        &copy; 2023 Developed by iBom Esther<br></br>All-rights reserved.
      </p>
    </div>
  );
};

export default Footer;
