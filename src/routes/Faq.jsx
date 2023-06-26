import React, { useState } from "react";
import "./Faq.css";
import NavBar from "../components/NavBar";
import { BsPlusSquareDotted } from "react-icons/bs";
import { BsXSquare } from "react-icons/bs";
import Footer from "../components/Footer";
import { ROUTES } from "../utils/constants";
import { Helmet } from "react-helmet-async";

const Faq = () => {
  const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const dropDown = () => {
    setIsOpen(!isOpen);
  };

  const [isActiveTwo, setIsActiveTwo] = useState(false);
  const [isOpenTwo, setIsOpenTwo] = useState(false);

  const dropDownTwo = () => {
    setIsOpenTwo(!isOpenTwo);
  };

  const [isActiveThree, setIsActiveThree] = useState(false);
  const [isOpenThree, setIsOpenThree] = useState(false);

  const dropDownThree = () => {
    setIsOpenThree(!isOpenThree);
  };

  const [isActiveFour, setIsActiveFour] = useState(false);
  const [isOpenFour, setIsOpenFour] = useState(false);

  const dropDownFour = () => {
    setIsOpenFour(!isOpenFour);
  };

  const [isActiveFive, setIsActiveFive] = useState(false);
  const [isOpenFive, setIsOpenFive] = useState(false);

  const dropDownFive = () => {
    setIsOpenFive(!isOpenFive);
  };

  const [isActiveSix, setIsActiveSix] = useState(false);
  const [isOpenSix, setIsOpenSix] = useState(false);

  const dropDownSix = () => {
    setIsOpenSix(!isOpenSix);
  };

  const [isActiveSeven, setIsActiveSeven] = useState(false);
  const [isOpenSeven, setIsOpenSeven] = useState(false);

  const dropDownSeven = () => {
    setIsOpenSeven(!isOpenSeven);
  };

  return (
    <div className="faq-container">
      <Helmet>
        <title>FAQs Page</title>
        <meta
          name="description"
          content="Welcome to Carefinder frequently asked questions page"
        />
        <link rel="canonical" href={ROUTES.FAQ} />
      </Helmet>
      <div className="faq-content">
        <div className="faq-nav">
          <NavBar />
        </div>
        <div className="faq-questions">
          <h1 className="faq-title">
            Frequently Asked<br></br> Questions
          </h1>

          <div className="first-faq">
            <div className="q-one">
              <h4>Can we search hospitals all over the world?</h4>
              <button
                className="dropdown-btn"
                onClick={() => {
                  setIsActive(!isActive);
                  dropDown();
                }}
              >
                {" "}
                <span className="plus-icon">
                  {isActive ? <BsXSquare /> : <BsPlusSquareDotted />}
                </span>
              </button>
            </div>

            {isOpen && (
              <div className="ans-one">
                <p>No, just Nigeria for now.</p>
              </div>
            )}
          </div>

          <div className="second-faq">
            <div className="q-two">
              <h4>Are the hospital addresses available?</h4>
              <button
                className="dropdown-btn"
                onClick={() => {
                  setIsActiveTwo(!isActiveTwo);
                  dropDownTwo();
                }}
              >
                {" "}
                <span className="plus-icon">
                  {isActiveTwo ? <BsXSquare /> : <BsPlusSquareDotted />}
                </span>
              </button>
            </div>

            {isOpenTwo && (
              <div className="ans-two">
                <p>Yes, each hospital searched for has an address. </p>
              </div>
            )}
          </div>

          <div className="third-faq">
            <div className="q-three">
              <h4>
                Are the contact details of the doctors available per hospital?
              </h4>
              <button
                className="dropdown-btn"
                onClick={() => {
                  setIsActiveThree(!isActiveThree);
                  dropDownThree();
                }}
              >
                {" "}
                <span className="plus-icon">
                  {isActiveThree ? <BsXSquare /> : <BsPlusSquareDotted />}
                </span>
              </button>
            </div>

            {isOpenThree && (
              <div className="ans-three">
                <p>
                  No, that information is not availble but check the reviews
                  someone may have added it.{" "}
                </p>
              </div>
            )}
          </div>

          <div className="fourth-faq">
            <div className="q-four">
              <h4>
                Can I search for hospitals based on specific medical
                specialities or services?
              </h4>
              <button
                className="dropdown-btn"
                onClick={() => {
                  setIsActiveFour(!isActiveFour);
                  dropDownFour();
                }}
              >
                {" "}
                <span className="plus-icon">
                  {isActiveFour ? <BsXSquare /> : <BsPlusSquareDotted />}
                </span>
              </button>
            </div>

            {isOpenFour && (
              <div className="ans-four">
                <p>
                  No, hospitals are searched based on name, address or
                  state.(Nigeria).{" "}
                </p>
              </div>
            )}
          </div>

          <div className="fifth-faq">
            <div className="q-five">
              <h4>How do I read and contribute reviews for a hospital?</h4>
              <button
                className="dropdown-btn"
                onClick={() => {
                  setIsActiveFive(!isActiveFive);
                  dropDownFive();
                }}
              >
                {" "}
                <span className="plus-icon">
                  {isActiveFive ? <BsXSquare /> : <BsPlusSquareDotted />}
                </span>
              </button>
            </div>

            {isOpenFive && (
              <div className="ans-five">
                <p>
                  Firstly to read reviews you can click on "Reviews" in the
                  navigation bar. Then to contribute you sign in and in your
                  dashboard enter your review, save and it gets added to the
                  reviews page.{" "}
                </p>
              </div>
            )}
          </div>

          <div className="sixth-faq">
            <div className="q-six">
              <h4>
                How can I report incorrect information or outdated details about
                a hospital?
              </h4>
              <button
                className="dropdown-btn"
                onClick={() => {
                  setIsActiveSix(!isActiveSix);
                  dropDownSix();
                }}
              >
                {" "}
                <span className="plus-icon">
                  {isActiveSix ? <BsXSquare /> : <BsPlusSquareDotted />}
                </span>
              </button>
            </div>

            {isOpenSix && (
              <div className="ans-six">
                <p>
                  To report incorrect information, contact us via email and it
                  will be resolved immediately.{" "}
                </p>
              </div>
            )}
          </div>

          <div className="seventh-faq">
            <div className="q-seven">
              <h4>
                Is the website free to use for searching hospitals and reading
                reviews?
              </h4>
              <button
                className="dropdown-btn"
                onClick={() => {
                  setIsActiveSeven(!isActiveSeven);
                  dropDownSeven();
                }}
              >
                {" "}
                <span className="plus-icon">
                  {isActiveSeven ? <BsXSquare /> : <BsPlusSquareDotted />}
                </span>
              </button>
            </div>

            {isOpenSeven && (
              <div className="ans-seven">
                <p>
                  Yes, the website is free to use and read reviews. Drop yours
                  as well!{" "}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Faq;
