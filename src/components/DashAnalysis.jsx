import React, { useEffect, useState } from "react";
import DashNav from "./DashNav";
import DashHeader from "./DashHeader";
import { Helmet } from "react-helmet-async";
import { ROUTES } from "../utils/constants";
import "./DashAnalysis.css";
import { collection, doc, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import moment from "moment";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale, //x axis
  LinearScale, //y axis
  PointElement,
  Legend,
  Tooltip,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale, //x axis
  LinearScale, //y axis
  PointElement,
  Legend,
  Tooltip
);

const DashAnalysis = () => {
  // const chartRef = useRef(null);
  const [formattedDocsData, setFormattedDocsData] = useState(null);

  const getReviews = async () => {
    try {
      const reviewsRef = collection(db, "reviews");
      const snapshots = await getDocs(reviewsRef);
      const docs = snapshots.docs.map((doc) => ({
        ...doc.data(),
        createdAt: moment(doc.data().createdAt.toDate().toISOString()).format(
          "DD MMM YYYY"
        ),
      }));

      const formattedDocs = docs.reduce((obj, doc) => {
        const date = doc.createdAt;
        if (!obj[date]) {
          obj[date] = [];
        }
        obj[date].push(doc);
        return obj;
      }, {});
      // formattedDocsData = formattedDocs; // Assign the value to the variable
      setFormattedDocsData(formattedDocs); // Assign the value using useState
      // console.log(formattedDocs); // Log the value
      // console.log(formattedDocs)
      // check if key exists, else add date as a key
      // Process the data and create the chart
      // createLineChart(formattedDocs);
    } catch (error) {
      console.log("Error gettin reviews:", error);
    }
  };

  useEffect(() => {
    getReviews();
  }, []);

  const data = {
    labels: formattedDocsData ? Object.keys(formattedDocsData) : [],
    datasets: [
      {
        label: "Number of Reviews",
        data: formattedDocsData
          ? Object.values(formattedDocsData).map((arr) => arr.length)
          : [],
        backgroundColor: "aqua",
        borderColor: "#a7d4fa",
        pointBorderColor: "#0D47A1",
        // fill: true,
        tension: 0.5,
      },
    ],
  };

  const options = {
    plugins: {
      legend: true,
    },
    scales: {
      y: {
        // min: 3,
        // max: 6,
      },
    },
  };

  // const keys = Object.keys(formattedDocsData);
  // console.log(keys); // L
  // console.log(data.datasets[0].data);

  return (
    <div className="analysis-container">
      <Helmet>
        <title>Carefinder Review analysis Page</title>
        <meta
          name="description"
          content="Welcome to Carefinder review analysis page"
        />
        <link rel="canonical" href={ROUTES.ANALYSIS} />
      </Helmet>
      <div>
        <DashNav />
      </div>
      <div className="analysis-content">
        <h1 className="analysis-title">
          Line Chart Showing the Number of Reviews per Day
        </h1>
        <div className="line-graph">
          <Line data={data} options={options}></Line>
        </div>
      </div>
      <div className="analysis-header">
        <DashHeader />
      </div>
    </div>
  );
};

export default DashAnalysis;
