import React from "react";
import "./DashBio.css";

const DashBio = () => {
  return (
    <div className="dash-user-container">
      <div className="dash-user-content">
        <h1 className="user-title">Admin Features</h1>
        <div className="username-tile"> As admin, you have access to a range of powerful functionalities to manage the Carefinder platform efficiently.</div>
        <div className="features-grid">
          <div className="reviews-tile"><h3>Reviews Content Management</h3></div>
          <div className="support-tile"><h3>User Feedback Support</h3></div>
          <div className="analysis-tile"><h3>Reviews Data Visualization</h3></div>
        </div>
      </div>
    </div>
  );
};

export default DashBio;
