import React from "react";
import { useState } from "react";
import "./SearchBar.css";

import { FaSearch } from "react-icons/fa";

const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch("https://api.reliancehmo.com/v3/providers")
      .then((response) => response.json())
      .then((json) => {
        const results = json.data.filter((data) => {
          return (
            value &&
            data &&
            data.name &&
            data.name.toLowerCase().includes(value)
          );
        });
        setResults(results);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        className="hospital-search-input"
        placeholder="Search by name, state or location..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
