import React from "react";
import "./BMICalculator.css";
import { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";
import { ROUTES } from "../utils/constants";

const BMICalculator = () => {
  const [height, setHeight] = useState("");
  const [mass, setMass] = useState("");
  const [bmi, setBmi] = useState("");
  const [bmiRange, setBMIRange] = useState("");

  const calculate = (e) => {
    e.preventDefault();
    const formValid = +height > 0 && +mass > 0;
    if (!formValid) {
      return;
    }
    const bmi = +mass / (+height) ** 2;

    let calculatedRange = "";
    if (bmi < 18.5) {
      calculatedRange = "This is considered to be underweight.";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      calculatedRange = "This is considered to be normal weight.";
    } else if (bmi >= 25 && bmi <= 29.9) {
      calculatedRange = "This is considered to be overweight.";
    } else {
      calculatedRange = "This is considered obese.";
    }
    setBmi(Math.floor(bmi));
    setBMIRange(calculatedRange);
  };

  return (
    <div className="bmi-container">
      <Helmet>
        <title>BMI Calculator Page</title>
        <meta
          name="description"
          content="Welcome to Carefinder BMI Calculator page"
        />
        <link rel="canonical" href={ROUTES.BMI} />
      </Helmet>
      <div className="bmi-navigation">
        <NavBar />
      </div>
      <div className="bmi-display">
        <h1 className="bmi-title">What is the body mass index (BMI)?</h1>
        <div className="bmi-content">
          <div className="bmi-text">
            <p className="par-one">
              The body mass index (BMI) is a measurement of a person's weight
              with respect to their height. It is more of an indicator than a
              direct measurement of a person's total body fat.(BMI applies to
              most adults 18-65 years.)
            </p>
            <h2 className="clinical-title">Clinical Relevance of BMI</h2>
            <p className="par-two">
              BMI is used by healthcare professionals to screen for overweight
              and obese indiviuals. The BMI is used to assess a person's health
              risks, prepare treatment plans, monitor changes and aide
              population health studies.
            </p>
          </div>
          <div className="calculator">
            <h1 className="calc-title">Calculate your Body Mass Index</h1>
            <form onSubmit={calculate}>
              <label>Height(m):</label>
              <input
                className="height-input"
                placeholder="Enter height in meters"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />

              <label>Mass/Weight(kg):</label>
              <input
                className="mass-input"
                placeholder="Enter weight in kilograms"
                value={mass}
                onChange={(e) => setMass(e.target.value)}
              />

              <button className="calculate-btn" type="submit">
                Calculate BMI
              </button>
            </form>
            <p className="bmi">
              Your Body Mass Index is: <b>{bmi}</b> kg/m2<br></br>
              <b> {bmiRange} </b>
            </p>
          </div>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default BMICalculator;
