import React from "react";
import { CSVLink, CSVDownload } from "react-csv";
import PropTypes from "prop-types";
import "./Download.css";

const Download = ({ results }) => {
  return (
    <div className="btn-container">
      <CSVLink data={results} filename={"carefinder-hospital-list.csv"}>
        <button className="download-btn">Download Hospital list</button>
      </CSVLink>
    </div>
  );
};

Download.propTypes = {};

export default Download;
