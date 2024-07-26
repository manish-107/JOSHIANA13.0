import React, { useState } from "react";
import Nav from "../components/Nav.jsx";
import Footer from "../components/Footer.jsx";

const Contact = () => {
  // State to manage the loading state of the map
  const [isLoading, setIsLoading] = useState(true);

  // Function to handle when the map finishes loading
  const handleMapLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="bg-black min-h-screen text-gray-100">
      <Nav />
      <main className="pt-16">
        {" "}
        {/* Ensure the content starts below the fixed Nav */}
        <section className="py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-100">
                Contact Us
              </h2>
              <p className="mt-4 text-lg text-gray-400">
                HAVE ANY QUERY? PLEASE CONTACT US!
              </p>
            </div>

            <div className="mt-16 lg:mt-20 grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Map Section */}
              <div className="relative overflow-hidden rounded-2xl border-neutral-700 bg-neutral-900 bg-opacity-95">
                {isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75">
                    <svg
                      className="w-12 h-12 text-gray-400 animate-spin"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 4v1m0 14v1m8-8h1M4 12H3m14.36-6.36l.7.7M4.64 17.36l.7-.7M18.36 17.36l.7-.7M5.64 5.64l.7.7"
                      />
                    </svg>
                  </div>
                )}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.9521174925303!2d74.89610237469192!3d12.910799087399024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba359dfac132663%3A0xa7bf228838232d32!2sSt%20Joseph%20Engineering%20College!5e0!3m2!1sen!2sus!4v1721550451603!5m2!1sen!2sus"
                  width="100%"
                  height="480"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Map"
                  onLoad={handleMapLoad} // Set loading to false when map loads
                />
              </div>

              {/* Contact Details Section */}
              <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8">
                {/* Column 1 */}
                <div className="rounded-2xl border-neutral-700 bg-neutral-900 bg-opacity-95 shadow-lg p-6 flex-1">
                  <h3 className="text-xl font-semibold text-gray-100 mb-4">
                    Faculty Coordinators
                  </h3>
                  <p className="text-gray-400 mb-2">
                    <strong>Mr Gururaja S</strong>
                    <br />
                    +91 99860 48444
                  </p>
                  <p className="text-gray-400 mb-4">
                    <strong>Mr Sathyendra Bhat</strong>
                    <br />
                    +91 98448 21865
                  </p>
                  <h3 className="text-xl font-semibold text-gray-100 mb-4">
                    Student Coordinators
                  </h3>
                  <p className="text-gray-400 mb-2">
                    <strong>Nikhil B</strong>
                    <br />
                    +91 96635 38869
                  </p>
                  <p className="text-gray-400 mb-4">
                    <strong>Jeevitha Pai</strong>
                    <br />
                    +91 99451 05148
                  </p>
                </div>

                {/* Column 2 */}
                <div className="rounded-2xl border-neutral-700 bg-neutral-900 bg-opacity-95 shadow-lg p-6 flex-1">
                  <h3 className="text-xl font-semibold text-gray-100 mb-4">
                    For Any Technical Issues
                  </h3>
                  <p className="text-gray-400 mb-4">
                    <strong>Deepak Cardoza</strong>
                    <br />
                    Website and Design Head
                    <br />
                    +91 84949 64695
                  </p>
                  <h3 className="text-xl font-semibold text-gray-100 mb-4">
                    Email
                  </h3>
                  <p className="text-gray-400 mb-4">
                    Email us at:{" "}
                    <a
                      href="mailto:joshiana@sjec.ac.in"
                      className="text-blue-400"
                    >
                      joshiana@sjec.ac.in
                    </a>
                  </p>
                  <h3 className="text-xl font-semibold text-gray-100 mb-4">
                    Follow Us
                  </h3>
                  <p className="text-gray-400 mb-2">
                    Instagram:{" "}
                    <a
                      href="https://instagram.com/joshiana_11.0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400"
                    >
                      joshiana_11.0
                    </a>
                  </p>
                  <p className="text-gray-400">
                    YouTube:{" "}
                    <a
                      href="https://youtube.com/channel/Joshiana11.0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400"
                    >
                      Joshiana 11.0
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
