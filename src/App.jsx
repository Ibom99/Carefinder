// import React, { useState } from "react";
import { Routes, Route, } from "react-router-dom"

import "./App.css";
import Home from "./routes/Home";
import Az from "./routes/Az";
import SignIn from "./components/User Authentication/SignIn";
import SignUp from "./components/User Authentication/SignUp";
import Dashboard from "./components/User Authentication/Dashboard";


function App() {
// const [results, setResults] = useState([])

  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/AtoZ" element={<Az />} />
      <Route path="/SignIn" element={ <SignIn />} />
      <Route path="/SignUp" element={ <SignUp />} />
      <Route path="/Dashboard" element={<Dashboard/> } />
      </Routes>
    </div>
  );
}

export default App;
