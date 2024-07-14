import React from "react";

const Nav = () => {
  return (
    <div className="flex  ">
      <div className="fixed top-0 left-0 m-2 rounded-lg  mb-3 w-25 bg-[#211f21] text-gray-200 p-3">
        <nav className="flex flex-col space-y-12 pt-9 pb-3">
          <a href="#home" className="flex flex-col items-center space-y-1">
            <span className="material-icons">home</span>
            <span className="text-xs">Home</span>
          </a>
          <a href="#about" className="flex flex-col items-center space-y-1">
            <span className="material-icons">info</span>
            <span className="text-xs">About</span>
          </a>
          <a href="#events" className="flex flex-col items-center space-y-1">
            <span className="material-icons">event</span>
            <span className="text-xs">Events</span>
          </a>
          <a href="#brochure" className="flex flex-col items-center space-y-1">
            <span className="material-icons">description</span>
            <span className="text-xs">Brochure</span>
          </a>
          <a
            href="#event-schedule"
            className="flex flex-col items-center space-y-1"
          >
            <span className="material-icons">schedule</span>
            <span className="text-xs">Event Schedule</span>
          </a>
          <a href="#team" className="flex flex-col items-center space-y-1">
            <span className="material-icons">group</span>
            <span className="text-xs">Team</span>
          </a>
          <a href="#contact" className="flex flex-col items-center space-y-1">
            <span className="material-icons">contacts</span>
            <span className="text-xs">Contact</span>
          </a>
        </nav>
        <button></button>
      </div>
    </div>
  );
};

export default Nav;
