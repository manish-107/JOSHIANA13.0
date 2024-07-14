import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="flex">
      <div className="fixed top-0 left-0 m-3 rounded-lg  mb-3 w-25 bg-[#00000000] border-2 border-slate-800 text-gray-200 p-3">
        <nav className="flex flex-col space-y-12 pt-9">
          <Link to="/" className="flex flex-col items-center space-y-1">
            <span className="material-icons">home</span>
            <span className="text-xs">Home</span>
          </Link>
          <Link to="about" className="flex flex-col items-center space-y-1">
            <span className="material-icons">info</span>
            <span className="text-xs">About</span>
          </Link>
          <Link to="event" className="flex flex-col items-center space-y-1">
            <span className="material-icons">event</span>
            <span className="text-xs">Events</span>
          </Link>
          <a className="flex flex-col items-center space-y-1">
            <span className="material-icons">description</span>
            <span className="text-xs">Brochure</span>
          </a>
          <Link
            to="/eventschedule"
            className="flex flex-col items-center space-y-1"
          >
            <span className="material-icons">schedule</span>
            <span className="text-xs">Event Schedule</span>
          </Link>
          <Link to="/group" className="flex flex-col items-center space-y-1">
            <span className="material-icons">group</span>
            <span className="text-xs">Team</span>
          </Link>
          <Link to="/contact" className="flex flex-col items-center space-y-1">
            <span className="material-icons">contacts</span>
            <span className="text-xs">Contact</span>
          </Link>
        </nav>
        <button></button>
      </div>
    </div>
  );
};

export default Nav;
