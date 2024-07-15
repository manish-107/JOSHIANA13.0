// src/App.jsx
import React from "react";
import "../App.css";
import StarField from "../components/StarField.jsx";
import Nav from "../components/Nav.jsx";

function LangingPage() {
  return (
    <div>
      <div className="starfield-container bg-[#030014]">
        <div
          className="relative flex justify-center flex-row h-full w-full"
          id="about-me"
        >
          <video
            autoPlay
            muted
            loop
            className="rotate-180 absolute  max-w-full max-h-[450px] md:max-h-[350px] z-[-2] object-cover"
          >
            <source src="/blackhole.mp4" type="video/webm" />
          </video>
          <StarField />
        </div>
      </div>

      <Nav />
    </div>
  );
}

export default LangingPage;
