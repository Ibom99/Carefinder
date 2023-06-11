import React from "react";
import { useState } from "react";

import SearchBar from "../components/SearchBar";
import SearchResultsList from "../components/SearchResultsList";
import Download from "../components/Download";
import NavBar from "../components/NavBar";

import "./Home.css";

const Home = () => {
  const [results, setResults] = useState([]);

  return (
    <div className="home-container">
      <div className="navigation">
        <NavBar />
      </div>
      <div className="landing-content">
        <div className="search-bar-container">
          <div className="website-title">
            <h1>Search Hospital</h1>
            <p className="search-description">
              Locate the hospitals in the city nearest to you.
            </p>
          </div>
          <div className="list">
            <SearchBar setResults={setResults} />
            <Download results={results} />
          </div>

          <SearchResultsList results={results} />

          <div className="faq">
            <h2 className="faq-title">FAQ</h2>
            <p className="question">
              <b>Q.</b> Are the addresses of the hospitals available?
            </p>
            <p className="answer">
              <b>A.</b> <em>Yes, they are under the hospital name.</em>
            </p>
            <p className="question">
              <b>Q.</b> Are doctors contacts in the hospitals available?
            </p>
            <p className="answer">
              <b>A.</b> <em>No, just the hospital location.</em>{" "}
            </p>
            <p className="question">
              <b>Q.</b> Can I find hospitals outside Nigeria?
            </p>
            <p className="answer">
              <b>A.</b> <em>No, just hospitals in Nigeria.</em>
            </p>
          </div>
        </div>

        <img
          className="doctor"
          src="https://res.cloudinary.com/dzzohccd8/image/upload/v1686134277/DEV%20Images/4D3CA5CB-34FA-4140-85B2-CAE3704F1A07_lzkouq.png"
        />
      </div>
      <footer className="footer">
        <h1>Footer</h1>
      </footer>
    </div>
  );
};

export default Home;
