// import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ROUTES } from "./utils/constants";
import "./App.css";
import Home from "./routes/Home";
import Reviews from "./routes/Reviews";
import SignIn from "./routes/User Authentication/SignIn";
import SignUp from "./routes/User Authentication/SignUp";
import Dashboard from "./routes/User Authentication/Dashboard";
import AuthRoute from "./router/AuthRoute";
import UnAuthRoute from "./router/UnAuthRoute";
import BMICalculator from "./routes/BMICalculator";
import DashMarkup from "./components/DashMarkup";
import { useState } from "react";
// import { ReviewProvider } from "./components/ReviewContext";
import Faq from "./routes/Faq";
import AboutUs from "./routes/AboutUs";
import DashSupport from "./components/DashSupport";
import NotFound from "./routes/NotFound";
import DashAnalysis from "./components/DashAnalysis";

function App() {
  // const [results, setResults] = useState([])

  return (
    <div className="App">
      {/* <ReviewProvider> */}
      <Routes>
        <Route
          path={ROUTES.LANDING}
          element={
            <UnAuthRoute>
              {" "}
              <Home />
            </UnAuthRoute>
          }
        />
        <Route
          path={ROUTES.REVIEWS}
          element={
            <UnAuthRoute>
              {" "}
              <Reviews />
            </UnAuthRoute>
          }
        />
        <Route
          path={ROUTES.SIGN_IN}
          element={
            <UnAuthRoute>
              {" "}
              <SignIn />
            </UnAuthRoute>
          }
        />
        <Route
          path={ROUTES.SIGN_UP}
          element={
            <UnAuthRoute>
              {" "}
              <SignUp />
            </UnAuthRoute>
          }
        />

        <Route
          path={ROUTES.DASHBOARD}
          element={
            <AuthRoute>
              <Dashboard />{" "}
            </AuthRoute>
          }
        />
        <Route
          path={ROUTES.BMI}
          element={
            <UnAuthRoute>
              <BMICalculator />
            </UnAuthRoute>
          }
        />
        <Route
          path={ROUTES.MARKDOWN}
          element={
            <AuthRoute>
              <DashMarkup />
            </AuthRoute>
          }
        />
        <Route
          path={ROUTES.SUPPORT}
          element={
            <AuthRoute>
              <DashSupport />
            </AuthRoute>
          }
        />

        <Route
          path={ROUTES.ANALYSIS}
          element={
            <AuthRoute>
              <DashAnalysis />
            </AuthRoute>
          }
        />

        <Route
          path={ROUTES.FAQ}
          element={
            <UnAuthRoute>
              <Faq />
            </UnAuthRoute>
          }
        />
        <Route
          path={ROUTES.ABOUT}
          element={
            <UnAuthRoute>
              <AboutUs />
            </UnAuthRoute>
          }
        />

        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Navigate to="/404" replace />} />
      </Routes>
    </div>
  );
}

export default App;
