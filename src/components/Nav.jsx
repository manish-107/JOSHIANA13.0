import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div>
      {/* Mobile Menu Button */}
      <div className="fixed top-0 left-0 m-3">
        <button
          onClick={toggleMenu}
          className="sm:hidden bg-gray-900 text-gray-200 p-2 rounded"
        >
          <span className="material-icons text-lg">menu</span>
        </button>
      </div>

      {/* Navigation Menu */}
      <div
        className={`fixed top-0 left-0 ml-3 p-6 mt-3 h-auto rounded-lg mb-3 w-auto bg-black border-2 border-slate-800 text-gray-200  transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full border-0 md:border-2 "
        } sm:translate-x-0`}
      >
        {/* Close Button */}
        <div className="flex justify-center sm:hidden">
          <button onClick={closeMenu} className="text-gray-200 p-2 rounded">
            <span className="material-icons text-lg">close</span>
          </button>
        </div>

        <nav className="flex flex-col space-y-5 sm:space-y-5 md:space-y-9 pt-6">
          <Link
            to="/"
            className="flex flex-col items-center space-y-1 "
            onClick={closeMenu}
          >
            <span className="material-icons text-xl  sm:text-2xl">home</span>
            <span className="text-xs">Home</span>
          </Link>
          <Link
            to="about"
            className="flex flex-col items-center space-y-1"
            onClick={closeMenu}
          >
            <span className="material-icons text-xl sm:text-2xl">info</span>
            <span className="text-xs">About</span>
          </Link>
          <Link
            to="event"
            className="flex flex-col items-center space-y-1"
            onClick={closeMenu}
          >
            <span className="material-icons text-xl sm:text-2xl">event</span>
            <span className="text-xs">Events</span>
          </Link>
          <a
            className="flex flex-col items-center space-y-1"
            onClick={closeMenu}
          >
            <span className="material-icons text-xl sm:text-2xl">
              description
            </span>
            <span className="text-xs">Brochure</span>
          </a>
          <Link
            to="/eventschedule"
            className="flex flex-col items-center space-y-1"
            onClick={closeMenu}
          >
            <span className="material-icons text-xl sm:text-2xl">schedule</span>
            <span className="text-xs">Event </span>
            <span className="text-xs"> Schedule</span>
          </Link>
          <Link
            to="/group"
            className="flex flex-col items-center space-y-1"
            onClick={closeMenu}
          >
            <span className="material-icons text-xl sm:text-2xl">group</span>
            <span className="text-xs">Team</span>
          </Link>
          <Link
            to="/contact"
            className="flex flex-col items-center space-y-1"
            onClick={closeMenu}
          >
            <span className="material-icons text-xl sm:text-2xl">contacts</span>
            <span className="text-xs">Contact</span>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
