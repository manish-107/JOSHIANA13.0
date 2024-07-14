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
      <div>
        <h1 className="text-3xl pl-40 font-bold underline text-white">
          Hello world!
        </h1>
      </div>
    </div>
  );
}

export default App;
