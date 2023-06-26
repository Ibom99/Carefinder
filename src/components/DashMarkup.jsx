import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";

import "./DashMarkup.css";
import DashNav from "./DashNav";
import DashHeader from "./DashHeader";
import { BsTrash3 } from "react-icons/bs";
import { Helmet } from "react-helmet-async";
import { ROUTES } from "../utils/constants";

const DashMarkup = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchReviews = async () => {
    try {
      const reviewsRef = collection(db, "reviews");
      const snapshots = await getDocs(reviewsRef);
      const reviewsData = snapshots.docs.map((doc) => doc.data());
      setReviews(reviewsData);
      setLoading(false); // Set loading to false after fetching data
    } catch (error) {
      console.log("Error fetching reviews:", error);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const deleteReview = async (reviewId) => {
    try {
      await deleteDoc(doc(db, "reviews", reviewId));
      fetchReviews(); // Refresh the reviews after deletion
    } catch (error) {
      console.log("Error deleting review:", error);
    }
  };

  return (
    <div className="dash-markup-container">
      <Helmet>
        <title>Carefinder Admin Review Management Page</title>
        <meta
          name="description"
          content="Welcome to Carefinder Admin review management page"
        />
        <link rel="canonical" href={ROUTES.MARKDOWN} />
      </Helmet>
      <DashNav />
      <div className="dash-markup-content">
        <div className="div-delete">
          {loading ? (
            <div className="loader">Loading...</div>
          ) : (
            <table className="reviews-table">
              <thead>
                <tr>
                  <th>Hospital Name</th>
                  <th>Review</th>
                  <th>Date/Time Added</th>
                </tr>
              </thead>
              <tbody>
                {reviews.map((review) => (
                  <tr key={review.id}>
                    <td>
                      <b>{review.hospitalName}</b>
                    </td>

                    <td
                      dangerouslySetInnerHTML={{ __html: review.review }}
                    ></td>
                    <td>{review.createdAt.toDate().toString()}</td>
                    <td>
                      <button
                        className="delete-btn"
                        onClick={() => deleteReview(review.id)}
                      >
                        <BsTrash3 />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
      <div className="content-management-header">
        <DashHeader />
      </div>
    </div>
  );
};

export default DashMarkup;
