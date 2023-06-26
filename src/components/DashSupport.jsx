import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
} from "firebase/firestore";
import DashHeader from "./DashHeader";
import DashNav from "./DashNav";
import "./DashSupport.css";
import { BsTrash3 } from "react-icons/bs";

import React, { useEffect, useState } from "react";
import { db, deleteSupport } from "../firebase";
import { Helmet } from "react-helmet-async";
import { ROUTES } from "../utils/constants";

const DashSupport = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [buttonColor, setButtonColor] = useState('#FFCCCB');
  //   const [buttonText, setButtonText] = useState('Pending');

  const fetchSupports = async () => {
    try {
      const supportsRef = collection(db, "supports");
      const snapshots = await getDocs(supportsRef);
      const supportsData = snapshots.docs.map((doc) => ({
        ...doc.data(),
        doc_id: doc.id,
      }));

      setFeedbacks(supportsData);
      setLoading(false); // Set loading to false after fetching data
    } catch (error) {
      console.log("Error fetching feedbacks:", error);
    }
  };

  const handleDelete = async (feedbackId) => {
    const res = deleteSupport(feedbackId);
    if (res) {
      setFeedbacks((prevFeedbacks) =>
        prevFeedbacks.filter((feedback) => feedback.doc_id !== feedbackId)
      );
      console.log("Feedback deleted successfully");
    }
  };

  const handleButtonClick = (feedbackId) => {
    // Find the feedback with the given id
    const updatedFeedbacks = feedbacks.map((feedback) => {
      if (feedback.id === feedbackId) {
        return { ...feedback, resolved: true };
      }
      return feedback;
    });

    setFeedbacks(updatedFeedbacks);
  };

  useEffect(() => {
    fetchSupports();
  }, []);

  return (
    <div className="support-container">
      <Helmet>
        <title>Carefinder User Support Page</title>
        <meta
          name="description"
          content="Welcome to Carefinder user support page"
        />
        <link rel="canonical" href={ROUTES.SUPPORT} />
      </Helmet>
      <DashNav />
      <div className="support-content">
        {/* <h1>User Support</h1> */}
        <div className="support-table">
          {loading ? (
            <div className="loader">Loading...</div>
          ) : (
            <table className="feedback-table">
              <thead>
                <tr>
                  <th>Ticket No.</th>
                  <th>Email</th>
                  <th>Feedback</th>
                  <th>Status</th>
                  <th>Date/Time Added</th>
                </tr>
              </thead>
              <tbody>
                {feedbacks.map((feedback) => (
                  <tr key={feedback.id}>
                    <td>{feedback.id?.toUpperCase()}</td>

                    <td><a href={`mailto:${feedback.email}`}>{feedback.email}</a></td>
                    <td>{feedback.feedback}</td>
                    <td>
                      <button
                        className="status-btn"
                        style={{
                          backgroundColor: feedback.resolved
                            ? "#EDFFCC"
                            : "#fffd8d",
                        }}
                        onClick={() => handleButtonClick(feedback.id)}
                        disabled={feedback.resolved}
                      >
                        {feedback.resolved ? "Resolved" : "Pending"}
                      </button>
                    </td>
                    <td>{feedback.createdAt?.toDate().toString()}</td>

                    <td>
                      {" "}
                      <button
                        className="delete-btn"
                        onClick={() => handleDelete(feedback.doc_id)}
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
      <div className="support-header">
        <DashHeader />
      </div>
    </div>
  );
};

export default DashSupport;
