import React from "react";
import { useState } from "react";

import SearchBar from "../components/SearchBar";
import SearchResultsList from "../components/SearchResultsList";
import Download from "../components/Download";
import NavBar from "../components/NavBar";

const Home = () => {
  const [results, setResults] = useState([]);

  return (
    <div>
      <div className="navigation">
        <NavBar />
      </div>
      <div className="search-bar-container">
        <SearchBar setResults={setResults} />
        <SearchResultsList results={results} />
        <Download results={results} />
      </div>
    </div>
  );
};

export default Home;
