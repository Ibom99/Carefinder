import React, { useState } from "react";
import "./ReviewsSearchBar.css";

const ReviewsSearchBar = ({ allReviews, setFilteredReviews }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (value.trim() === "") {
      setFilteredReviews([]);
    } else {
      const filteredReviews = allReviews.filter((review) =>
        review.hospitalName.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredReviews(filteredReviews);
    }
  };
  return (
    <div className="searchbar-container">
      <input
        type="text"
        placeholder="Enter hospital name..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <label>
        <em>(Search by Name)</em>
      </label>
      {/* <button onClick={handleSearch}>Search</button> */}
    </div>
  );
};

export default ReviewsSearchBar;
