import React from "react";
import "../App.css";
import StarField from "../components/StarField.jsx";
import Nav from "../components/Nav.jsx";
import HeroSec from "../components/HeroSec.jsx";
import GoogleGeminiEffectDemo from "../components/GoogleGeminiEffectDemo.jsx";

function LandingPage() {
  return (
    <div>
      <div className="starfield-container bg-[#030014]">
        {/* <Rocker /> */}
        <div
          className="relative flex justify-center flex-row h-full w-full"
          id="about-me"
        >
          <StarField />
          {/* <Rocker /> */}
        </div>
      </div>

      <div>
        <GoogleGeminiEffectDemo />
      </div>
      <Nav />
      <HeroSec />
      <HeroSec />
    </div>
  );
}

export default LandingPage;
