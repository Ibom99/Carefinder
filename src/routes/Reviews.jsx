import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import TextAreaWithFormatting from "../components/TextAreaWithFormatting";
import "./Reviews.css";
// import { convertToRaw } from "draft-js";
// import * as draftToHtml from "draftjs-to-html";
import Button from "../components/button";
import { v4 as uuidv4 } from "uuid";
import { createReviewDocument } from "../firebase";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import ReviewsSearchBar from "../components/ReviewsSearchBar";
import Footer from "../components/Footer";
import { ROUTES } from "../utils/constants";
import { Helmet } from "react-helmet-async";
import { BsStarFill } from "react-icons/bs";
// import { EditorState } from "draft-js";

// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"

// import sanitizeHtml from 'sanitize-html';

const Reviews = () => {
  const emptyForm = {
    review: "",
    hospitalName: "",
    rating: "",
    email: "",
    number: "",
  };
  // const [markdownValue, setMarkdownValue] = useState("");

  const [editorState, setEditorState] = useState("");
  const [formData, setFormData] = useState(emptyForm);
  const [allReviews, setAllReviews] = useState([]);
  const [filteredReviews, setFilteredReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  
  

  useEffect(() => {
    getReviews();
  }, []);

  const getReviews = async () => {
    try {
      const reviewsRef = collection(db, "reviews");
      const snapshots = await getDocs(reviewsRef);
      const docs = snapshots.docs.map((doc) => doc.data());
      setAllReviews(docs);
      setLoading(false);
      console.log(docs);
    } catch (error) {
      console.log("Error getting reviews:", error);
    }
  };

  const getMarkDown = (value) => {


    // setMarkdownValue(value);
    setFormData({
      ...formData,
      review: value,
    });
    console.log(value);
    console.log('its working')
  };
  

  const postReview = async () => {
    const payload = {
      ...formData,
      id: uuidv4(),
      createdAt: new Date(),
    };
    try {
      const res = await createReviewDocument(payload);
      if (res) {
        setFormData(emptyForm);
        // setEditorState(EditorState.createEmpty()); Clear the editor state
        // setMarkdownValue("");
        setEditorState("")
        getReviews();

        // window.location.reload()
      }
    } catch (error) {
      console.log("error");
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const isAnyInputEmpty = formData.hospitalName === "" && formData.review === "";

  return (
    <div className="review-container">
      <Helmet>
        <title>Hospital Reviews Page</title>
        <meta
          name="description"
          content="Welcome to Carefinder hospital reviews page"
        />
        <link rel="canonical" href={ROUTES.REVIEWS} />
      </Helmet>
      <div className="navigation">
        <NavBar />
      </div>
      <div className="review-content">
        {/* <ReviewsSearchBar allReviews={allReviews} /> */}

        <h1 className="review-title">Hospital Reviews</h1>
        <ReviewsSearchBar
          allReviews={allReviews}
          setFilteredReviews={setFilteredReviews}
        />

        <div className="reviews-list">
          {loading ? (
            <div className="review-loader">Loading...</div>
          ) : (
            (filteredReviews.length > 0 ? filteredReviews : allReviews).map(
              (review) => (
                <div className="review-card" key={review.id}>
                  <div className="name-date">
                    <p className="hospital-name">
                      <b> {review.hospitalName}</b>
                    </p>
                    <p>{review.createdAt.toDate().toLocaleDateString()}</p>
                  </div>

                  <p >
                  {Array.from({ length: review.rating }, (_, i) => (
            <span className="star" key={i}><BsStarFill /></span>
          ))}
                  </p>

                  <p dangerouslySetInnerHTML={{ __html: review.review }}></p>
              
                  <p>
                    <a href={`mailto:${review.email}`}>
                      <b>{review.email}</b>
                    </a>
                  </p>

                  <p>
                    <a href={`tel:${review.number}`}>
                      <b>{review.number}</b>
                    </a>
                  </p>

                  {/* <hr /> */}
                </div>
              )
            )
          )}
        </div>

        <h1 className="enter-review-title">Drop your review down below!</h1>
        <div className="review-inputs">
          <div className="set-one">
            <label htmlFor="hospitalName">Hospital Name</label>

            <input
              type="text"
              name="hospitalName"
              value={formData.hospitalName}
              onChange={handleChange}
              placeholder="Enter hospital name..."
              className="hospital-input"
            />

            <label>Review</label>
            
            <TextAreaWithFormatting
              name="review"
              value={formData.review}
              onChange={getMarkDown}
              placeholder="Enter your review..."
            />
          </div>

          <div className="set-two">
            <label>Hospital Rating</label>
            <input
              type="number"
              name="rating"
              min="1"
              max="5"
              placeholder="Enter rating range 1-5..."
              value={formData.rating}
              onChange={handleChange}
              className="link-input"
            />

            <label>Email(if any):</label>
            <input
              type="email"
              name="email"
              placeholder="Enter hospital contact email..."
              value={formData.email}
              onChange={handleChange}
              className="contact-input"
            />

            <label>Phone number(if any):</label>
            <input
              type="tel"
              name="number"
              placeholder="Enter hospital contact number..."
              value={formData.number}
              onChange={handleChange}
              className="contact-input"
            />

            <div className="post-btn-container">
              <Button
                onClick={postReview}
                className="post-btn"
                disabled={isAnyInputEmpty}
                text="Post Review"
              />
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

export default Reviews;



