import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "../components/ui/canvas-reveal-effect";
import postimg from "../assets/imghead.jpg";
import CardGrid from "./LandingCard";

export default function CanvasRevealEffectDemo3() {
  const [hovered, setHovered] = React.useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  // Update the isDesktop state based on window width
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative p-5 border-8 border-black bg-black w-full gap-4 mx-auto px-8 rounded-3xl"
    >
      {/* Animation Effect */}
      <AnimatePresence>
        {hovered && isDesktop && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 rounded-xl z-10"
          >
            <CanvasRevealEffect
              animationSpeed={5}
              containerClassName="bg-transparent rounded-xl"
              colors={[
                [59, 130, 246],
                [139, 92, 246],
              ]}
              opacities={[0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.4, 0.4, 0.4, 1]}
              dotSize={2}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center">
        <div className="flex flex-col lg:flex-row w-full z-20 mt-10 m-5 md:m-32 md:mt-0 gap-4 pt-0 md:pt-32 lg:gap-8">
          {/* Image Section */}
          <div
            className="flex justify-center items-center wow fadeIn"
            data-wow-delay="0.1s"
            style={{
              visibility: "visible",
              animationDelay: "0.1s",
              animationName: "fadeIn",
            }}
          >
            <img
              className="w-56 h-auto object-cover rounded-lg shadow-md"
              src={postimg}
              alt="Joshiana Event"
            />
          </div>

          {/* Text Section */}
          <div
            className="flex-1 flex flex-col lg:text-left wow fadeIn"
            data-wow-delay="0.5s"
            style={{
              visibility: "visible",
              animationDelay: "0.5s",
              animationName: "fadeIn",
            }}
          >
            <h1 className="text-uppercase mb-4 text-3xl pt-5 font-bold text-white">
              Joshiana 13.0 | 2022
            </h1>
            <p className="text-white text-justify">
              Joshiana 13.0 is a National level IT fest organized by the
              Department of Computer Applications in association with
              TECHNOCRATS, the student Association of MCA of St. Joseph
              Engineering College, Mangaluru. As the developers in a world of
              fast-growing technology, the productivities and energies embodied
              in the urban culture are also changing. So, we welcome you to the
              theme of Joshiana 11.0 - THE URBAN MATRIX which means - ‘a
              simulation in our urban environment’. So come take a walk through
              our URBAN MATRIX and experience the simulation on the 6th and 7th
              of September 2022 at{" "}
              <a
                href="https://www.sjec.ac.in/"
                className="text-blue-400 hover:underline"
              >
                St. Joseph Engineering College
              </a>
              .
            </p>
          </div>
        </div>
      </div>

      {/* Card Grid Section */}
      <div className="absolute inset-0 rounded-xl [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
      <div className="relative flex flex-col items-center w-full z-20 mt-10 mb-5 md:mb-32">
        <h2 className="text-3xl md:text-5xl text-center font-bold text-white z-50 pb-16">
          Events
        </h2>
        <CardGrid />
      </div>
    </div>
  );
}
