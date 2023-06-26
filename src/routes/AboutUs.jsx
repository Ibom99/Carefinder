import React from "react";
import NavBar from "../components/NavBar";
import "./AboutUs.css";

import { IoMdPeople } from "react-icons/io";
import { VscNotebook } from "react-icons/vsc";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";
import { ROUTES } from "../utils/constants";

const AboutUs = () => {
  return (
    <div className="about-container">
      <Helmet>
        <title>Carefinder About Us Page</title>
        <meta
          name="description"
          content="Welcome to Carefinder About Us page"
        />
        <link rel="canonical" href={ROUTES.ABOUT} />
      </Helmet>
      <div className="about-nav">
        <NavBar />
      </div>
      <div className="about-content">
        <div className="about-banner">
          <div className="about-title">
            <h1>About Us</h1>
            <p>Empowering Your Health Journey, One Review at a Time.</p>
          </div>
          <img
            className="hospital-img"
            src="https://res.cloudinary.com/dzzohccd8/image/upload/v1687259614/DEV%20Images/istockphoto-1312706413-612x612_ggj1ez.jpg"
          />
        </div>

        <div className="about-desc">
          <div className="about-text">
            <p>
              <div className="welcome">Welcome to Carefinder!</div>
              <div className="text-one">
                We're here to simplify your search for hospitals near you. Our
                platform allows you to easily locate hospitals based on your
                location.
              </div>
              <div className="text-two">
                In addition to helping you find hospitals, we provide valuable
                reviews to guide your decision-making process. Our review system
                allows users to share their experiences and insights about
                different hospitals, ensuring transparency and empowering you to
                make informed choices. By combining accurate information and
                real-life feedback, we strive to assist you in finding the best
                possible care closest to you. Trust us to help you navigate the
                healthcare landscape and make confident hospital visit
                decisions.
              </div>
            </p>
          </div>
          <div className="about-details">
            <div className="about-vision">
              <i className="vision-icon">
                <IoMdPeople />
              </i>
              <div className="vision-text">
                <h2 className="vision-title">Vision</h2>
                <p className="vision-description">
                  Our vision is to ease your navigation and hospital selection
                  with confidence.
                </p>
              </div>
            </div>

            <div className="about-mission">
              <i className="mission-icon">
                <VscNotebook />
              </i>
              <div className="mission-text">
                <h2 className="mission-title">Mission</h2>
                <p className="mission-description">
                  Our mission is to empower individuals and promote informed
                  hospital selection decisions by providing a reliable and
                  user-friendly platform for accessing and sharing hospital
                  reviews. We aim to enhance transparency, facilitate meaningful
                  patient experiences, and contribute to the improvement of
                  hospital visit experiences in Nigeria.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default AboutUs;
