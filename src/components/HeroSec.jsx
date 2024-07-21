import React from "react";
import { motion } from "framer-motion";
import CanvasRevealEffectDemo3 from "./CanvasRevealEffectDemo3";

const HeroSec = () => {
  return (
    <div className=" text-gray-200 rounded-xl transform transition-transform duration-300 ease-in-out bg-black bg-clip-padding   items-center ml-5 mr-5 mt-10">
      <CanvasRevealEffectDemo3 />
    </div>
  );
};

export default HeroSec;
