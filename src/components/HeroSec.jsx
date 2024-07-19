import React from "react";
import { motion } from "framer-motion";

const HeroSec = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-56">
      <motion.h2
        className="text-slate-300 mb-5 mx-0 max-w-[43.5rem] pt-5 text-left tracking-tighter md:text-center md:font-semibold md:text-7xl sm:text-6xl text-5xl font-extralight"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        JOSHIANA 13.0
      </motion.h2>
      <motion.p
        className="max-w-xl text-center text-base tracking-tight font-extrabold bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text md:text-lg text-transparent"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        50+ free and open-source animated components built with <b>React</b>,{" "}
        <b>Typescript</b>, <b>Tailwind CSS</b>
      </motion.p>
    </div>
  );
};

export default HeroSec;
