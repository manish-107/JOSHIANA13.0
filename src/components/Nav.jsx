import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  IconHome,
  IconMessage,
  IconUser,
  IconMenu2,
  IconX,
  IconInfoCircle,
  IconCalendarEvent,
  IconFileText,
  IconClock,
  IconUsers,
} from "@tabler/icons-react";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Close the menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      {/* Top Navigation Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 mt-5 p-4">
        <button
          onClick={toggleMenu}
          className="sm:hidden bg-gray-900 text-gray-200 p-2 rounded"
        >
          <IconMenu2 className="h-6 w-6 text-neutral-500 dark:text-white" />
        </button>
        <div className="flex justify-center items-center">
          <div className="hidden sm:flex">
            <div className="border-2 w-fit pl-6 pr-6 p-3 rounded-2xl border-neutral-700 bg-neutral-900 bg-opacity-95 text-sm text-neutral-100">
              <div className="flex justify-center w-full sm:w-auto space-x-11">
                <Link to="/" className="block overflow-hidden">
                  <div
                    className="h-[40px] flex flex-col items-center"
                    style={{ transform: "none" }}
                  >
                    <IconHome className="h-6 w-6 text-white" />
                    <span className="flex h-[20px] items-center text-neutral-100">
                      Home
                    </span>
                  </div>
                </Link>
                <Link to="/about" className="block overflow-hidden">
                  <div
                    className="h-[40px] flex flex-col items-center"
                    style={{ transform: "none" }}
                  >
                    <IconInfoCircle className="h-6 w-6 text-white" />
                    <span className="flex h-[20px] items-center text-neutral-100">
                      About
                    </span>
                  </div>
                </Link>

                <Link to="/events" className="block overflow-hidden">
                  <div
                    className="h-[40px] flex flex-col items-center"
                    style={{ transform: "none" }}
                  >
                    <IconCalendarEvent className="h-6 w-6 text-white" />
                    <span className="flex h-[20px] items-center text-neutral-100">
                      Events
                    </span>
                  </div>
                </Link>
                <a href="#" className="block overflow-hidden">
                  <div
                    className="h-[40px] flex flex-col items-center"
                    style={{ transform: "none" }}
                  >
                    <IconFileText className="h-6 w-6 text-white" />
                    <span className="flex h-[20px] items-center text-neutral-100">
                      Brochure
                    </span>
                  </div>
                </a>

                <Link to="/team" className="block overflow-hidden">
                  <div
                    className="h-[40px] flex flex-col items-center"
                    style={{ transform: "none" }}
                  >
                    <IconUsers className="h-6 w-6 text-white" />
                    <span className="flex h-[20px] items-center text-neutral-100">
                      Team
                    </span>
                  </div>
                </Link>
                <Link to="/eventschedule" className="block overflow-hidden">
                  <div
                    className="h-[40px] flex flex-col items-center"
                    style={{ transform: "none" }}
                  >
                    <IconClock className="h-6 w-6 text-white" />
                    <span className="text-xs text-neutral-100">Schedule</span>
                  </div>
                </Link>

                <Link to="/contact" className="block overflow-hidden">
                  <div
                    className="h-[40px] flex flex-col items-center"
                    style={{ transform: "none" }}
                  >
                    <IconMessage className="h-6 w-6 text-white" />
                    <span className="flex h-[20px] items-center text-neutral-100">
                      Contact
                    </span>
                  </div>
                </Link>

                <Link
                  to="/register"
                  className="
                  relative z-0 flex items-center gap-2 overflow-hidden whitespace-nowrap rounded-lg border-[1px] 
                  border-sky-600 px-4 py-1.5 font-medium
                  text-neutral-300 transition-all duration-300
                  before:absolute before:inset-0
                  before:-z-10 before:translate-y-[200%]
                  before:scale-[2.5]
                  before:rounded-[100%] before:bg-neutral-100
                  before:transition-transform before:duration-1000
                  before:content-['']
                  hover:scale-105 hover:border-neutral-100 hover:text-neutral-900
                  hover:before:translate-y-[0%]
                  active:scale-100
                "
                >
                  Register Now
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Dropdown Menu for Mobile */}
        <div
          ref={menuRef}
          className={`fixed top-0 left-0 bg-black border-2 border-slate-800 text-gray-200 mt-5 rounded-lg p-6 transform transition-transform duration-300 ease-in-out ${
            menuOpen ? "translate-x-0 ml-3" : "-translate-x-full"
          } sm:hidden z-99`}
        >
          <div className="flex justify-end">
            <button onClick={closeMenu} className="text-gray-200 p-2 rounded">
              <IconX className="h-6 w-6 text-neutral-500 dark:text-white" />
            </button>
          </div>
          <nav className="flex flex-col space-y-10 sm:space-y-5 md:space-y-9 pt-6">
            <Link
              to="/"
              className="flex flex-col items-center space-y-1"
              onClick={closeMenu}
            >
              <IconHome className="h-6 w-6 text-neutral-500 dark:text-white" />
              <span className="text-xs">Home</span>
            </Link>
            <Link
              to="/about"
              className="flex flex-col items-center space-y-1"
              onClick={closeMenu}
            >
              <IconInfoCircle className="h-6 w-6 text-neutral-500 dark:text-white" />
              <span className="text-xs">About</span>
            </Link>
            <Link
              to="/events"
              className="flex flex-col items-center space-y-1"
              onClick={closeMenu}
            >
              <IconCalendarEvent className="h-6 w-6 text-neutral-500 dark:text-white" />
              <span className="text-xs">Events</span>
            </Link>
            <a
              className="flex flex-col items-center space-y-1"
              onClick={closeMenu}
            >
              <IconFileText className="h-6 w-6 text-neutral-500 dark:text-white" />
              <span className="text-xs">Brochure</span>
            </a>
            <Link
              to="/eventschedule"
              className="flex flex-col items-center space-y-1"
              onClick={closeMenu}
            >
              <IconClock className="h-6 w-6 text-neutral-500 dark:text-white" />
              <span className="text-xs">Event</span>
              <span className="text-xs">Schedule</span>
            </Link>
            <Link
              to="/team"
              className="flex flex-col items-center space-y-1"
              onClick={closeMenu}
            >
              <IconUsers className="h-6 w-6 text-neutral-500 dark:text-white" />
              <span className="text-xs">Team</span>
            </Link>
            <Link
              to="/contact"
              className="flex flex-col items-center space-y-1"
              onClick={closeMenu}
            >
              <IconMessage className="h-6 w-6 text-neutral-500 dark:text-white" />
              <span className="text-xs">Contact</span>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Nav;
