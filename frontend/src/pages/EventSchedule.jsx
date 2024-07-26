import React from "react";
import Nav from "../components/Nav.jsx";
import Footer from "../components/Footer.jsx";

const EventSchedule = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      <Nav />
      <div className="flex items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="text-center">
          <h1 className="text-xl font-bold mb-4">Test Placeholder</h1>
          <p>
            This is a placeholder for the Event Schedule page. Add your content
            here.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EventSchedule;
