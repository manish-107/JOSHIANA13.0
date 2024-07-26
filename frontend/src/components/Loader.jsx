// src/components/Loader.jsx
import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#212121]">
      <div className="spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
