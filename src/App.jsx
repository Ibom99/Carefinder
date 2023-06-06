// import React, { useState } from "react";
import { Routes, Route, } from "react-router-dom"

import "./App.css";
import Home from "./routes/Home";


function App() {
// const [results, setResults] = useState([])

  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
