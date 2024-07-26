import React from "react";
import { motion } from "framer-motion";

const cardVariants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const Card = ({ emoji, image }) => {
  return (
    <motion.div
      className="relative flex justify-center items-center m-4"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <div
        className="absolute inset-0 z-[-1] rounded-lg"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <motion.div
        className="text-6xl p-8 rounded-lg bg-white bg-opacity-10 shadow-lg"
        variants={cardVariants}
      >
        {emoji}
      </motion.div>
    </motion.div>
  );
};

export default Card;
