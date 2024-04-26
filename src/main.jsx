import React from "react";
import ReactDOM from "react-dom";
import App from "../src/App.jsx";
import "../src/index.css";
import NavBar from "../src/NavBar.jsx";
import Games from "./Games.jsx";
import Instructions from "./Instructions.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NavBar />
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/game" element={<Games />} />
        <Route path="/instructions" element={<Instructions />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
