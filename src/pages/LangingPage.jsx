import React from "react";
import "../App.css";
import StarField from "../components/StarField.jsx";
import Nav from "../components/Nav.jsx";
import HeroSec from "../components/HeroSec.jsx";
import Rocker from "../components/Rocker.jsx";

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

      <Nav />

      <div>
        <HeroSec />
      </div>
    </div>
  );
}

export default LandingPage;
