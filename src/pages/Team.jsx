import React from "react";
import Nav from "../components/Nav";
import { BentoGridDemo } from "../components/BentoGridDemo.jsx"; // Verify this import

const Team = () => {
  return (
    <div className="bg-gradient-to-b from-black via-black to-black text-white min-h-screen flex flex-col">
      <Nav />
      <main className="flex-grow pt-32 mb-0">
        {/* Adjust spacing if needed */}
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-gray-100 mb-8 text-center">
            Team
          </h2>
          <BentoGridDemo />
        </div>
      </main>
    </div>
  );
};

export default Team;
