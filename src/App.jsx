// src/App.jsx
import React from "react";
import "./App.css";
import StarField from "./components/StarField";
import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <div className="starfield-container">
        <StarField />
      </div>
      <Nav />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
}

export default App;
