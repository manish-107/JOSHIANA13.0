// src/App.jsx
import React from "react";
import "../App.css";
import StarField from "../components/StarField.jsx";
import Nav from "../components/Nav.jsx";

function LangingPage() {
  return (
    <div>
      <div className="starfield-container">
        <StarField />
      </div>
      <Nav />
      <div></div>
    </div>
  );
}

export default LangingPage;
