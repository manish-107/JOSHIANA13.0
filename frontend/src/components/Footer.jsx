import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <footer className="bg-black rounded-lg shadow ">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              Joshiana 13.0
            </span>

            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0">
              <li>
                <Link to="/about" className="hover:underline me-4 md:me-6">
                  About
                </Link>
              </li>
              <li>
                <Link to="/events" className="hover:underline me-4 md:me-6">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/team" className="hover:underline me-4 md:me-6">
                  Team
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center">
            © 2023{" "}
            <a href="#" className="hover:underline">
              Joshiana 13.0
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
