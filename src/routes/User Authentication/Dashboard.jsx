import React from "react";

import "./Dashboard.css";
import DashNav from "../../components/DashNav";
import DashBio from "../../components/DashBio";
import DashMarkup from "../../components/DashMarkup";
import DashHeader from "../../components/DashHeader";
import { Helmet } from "react-helmet-async";
import { ROUTES } from "../../utils/constants";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Helmet>
        <title>Carefinder Admin Dashboard Page</title>
        <meta
          name="description"
          content="Welcome to Carefinder admin dashboard page"
        />
        <link rel="canonical" href={ROUTES.DASHBOARD} />
      </Helmet>

      <DashNav />

      <DashBio />
      
      {/* <DashMarkup /> */}
      <div className="header-position">
        <DashHeader />
      </div>
    </div>
  );
};

export default Dashboard;
