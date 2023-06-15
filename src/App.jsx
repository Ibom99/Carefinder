// import React, { useState } from "react";
import { Routes, Route, } from "react-router-dom"
import {ROUTES} from './utils/constants'
import "./App.css";
import Home from "./routes/Home";
import Az from "./routes/Az";
import SignIn from "./routes/User Authentication/SignIn";
import SignUp from "./routes/User Authentication/SignUp";
import Dashboard from "./routes/User Authentication/Dashboard";
import AuthRoute from "./router/AuthRoute";
import UnAuthRoute from "./router/UnAuthRoute";
import BMICalculator from "./routes/BMICalculator";


function App() {
// const [results, setResults] = useState([])

  return (
    <div className="App">
      <Routes>
      <Route path={ROUTES.LANDING} element={ <UnAuthRoute> <Home /></UnAuthRoute>} />
      <Route path={ROUTES.A_TO_Z} element={<UnAuthRoute> <Az /></UnAuthRoute>} />
      <Route path={ROUTES.SIGN_IN} element={<UnAuthRoute> <SignIn /></UnAuthRoute>} />
      <Route path={ROUTES.SIGN_UP} element={ <UnAuthRoute> <SignUp /></UnAuthRoute>} />
      
      <Route path={ROUTES.DASHBOARD} element={<AuthRoute><Dashboard/> </AuthRoute>} />
      <Route path={ROUTES.BMI} element={<UnAuthRoute><BMICalculator /></UnAuthRoute>} />
      </Routes>
    </div>
  );
}

export default App;
