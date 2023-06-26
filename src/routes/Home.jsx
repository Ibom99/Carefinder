import React from "react";
import { useState } from "react";

import SearchBar from "../components/SearchBar";
import SearchResultsList from "../components/SearchResultsList";
import Download from "../components/Download";
import NavBar from "../components/NavBar";

import "./Home.css";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";
import { ROUTES } from "../utils/constants";

const Home = () => {
  const [results, setResults] = useState([]);

  return (
    <div className="home-container">
      <div className="navigation">
        <Helmet>
          <title>Home Page</title>
          <meta name="description" content="Welcome to Carefinder homepage" />
          <link rel="canonical" href={ROUTES.LANDING} />
        </Helmet>
        <NavBar />
      </div>
      <div className="landing-content">
        <div className="search-bar-container">
          <div className="website-title">
            <h1>
              Find Care. Share Reviews.{" "}
              <span className="colored-title">Carefinder.</span>
            </h1>
            <h2>Search Hospital</h2>
            <p className="search-description">
              Locate the hospitals in the city nearest to you.
            </p>
          </div>
          <div className="list">
            <SearchBar setResults={setResults} />
            <Download results={results} />
          </div>

          <SearchResultsList results={results} />
        </div>

        <img
          className="doctor"
          src="https://res.cloudinary.com/dzzohccd8/image/upload/v1686134277/DEV%20Images/4D3CA5CB-34FA-4140-85B2-CAE3704F1A07_lzkouq.png"
          alt="female doctor"
        />
      </div>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
