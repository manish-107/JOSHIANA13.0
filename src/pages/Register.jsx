import React from "react";
import Nav from "../components/Nav";
import { Link } from "react-router-dom";

const LabelInputContainer = ({ children, className }) => (
  <div className={`flex flex-col space-y-2 w-full ${className}`}>
    {children}
  </div>
);

const Register = () => {
  return (
    <div className="bg-gradient-to-b from-[#2e2954] via-black to-black min-h-screen flex flex-col items-center">
      <Nav />
      <div className="max-w-4xl w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-black mt-20 md:mt-32">
        <h2 className="font-bold text-xl text-neutral-200">
          Welcome to JOSHIANA 13.0
        </h2>
        <p className="text-neutral-400 text-sm max-w-sm mt-2">
          Register for the college fest.
        </p>

        <form className="my-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <LabelInputContainer>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-neutral-300"
            >
              Representative Name
            </label>
            <input
              id="name"
              placeholder="John Doe"
              type="text"
              className="block w-full p-2 border border-neutral-600 rounded-md shadow-sm bg-neutral-800 text-neutral-200"
            />
          </LabelInputContainer>

          <LabelInputContainer>
            <label
              htmlFor="college"
              className="block text-sm font-medium text-neutral-300"
            >
              College Name
            </label>
            <input
              id="college"
              placeholder="XYZ University"
              type="text"
              className="block w-full p-2 border border-neutral-600 rounded-md shadow-sm bg-neutral-800 text-neutral-200"
            />
          </LabelInputContainer>

          <LabelInputContainer>
            <label
              htmlFor="department"
              className="block text-sm font-medium text-neutral-300"
            >
              Department
            </label>
            <select
              id="department"
              className="block w-full p-2 border border-neutral-600 rounded-md shadow-sm bg-neutral-800 text-neutral-200"
            >
              <option value="mca">MCA</option>
              <option value="mba">MBA</option>
              <option value="mtech">M.Tech</option>
            </select>
          </LabelInputContainer>

          <LabelInputContainer>
            <label
              htmlFor="accommodation"
              className="block text-sm font-medium text-neutral-300"
            >
              Accommodation Required?
            </label>
            <select
              id="accommodation"
              className="block w-full p-2 border border-neutral-600 rounded-md shadow-sm bg-neutral-800 text-neutral-200"
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </LabelInputContainer>

          <LabelInputContainer>
            <label
              htmlFor="contact"
              className="block text-sm font-medium text-neutral-300"
            >
              Contact Number (10 Digits)
            </label>
            <input
              id="contact"
              placeholder="1234567890"
              type="tel"
              pattern="[0-9]{10}"
              className="block w-full p-2 border border-neutral-600 rounded-md shadow-sm bg-neutral-800 text-neutral-200"
            />
          </LabelInputContainer>

          <LabelInputContainer>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-neutral-300"
            >
              Email Address
            </label>
            <input
              id="email"
              placeholder="john.doe@example.com"
              type="email"
              className="block w-full p-2 border border-neutral-600 rounded-md shadow-sm bg-neutral-800 text-neutral-200"
            />
          </LabelInputContainer>

          <LabelInputContainer>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-neutral-300"
            >
              Password
            </label>
            <input
              id="password"
              placeholder="••••••••"
              type="password"
              className="block w-full p-2 border border-neutral-600 rounded-md shadow-sm bg-neutral-800 text-neutral-200"
            />
          </LabelInputContainer>

          <LabelInputContainer>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-neutral-300"
            >
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              placeholder="••••••••"
              type="password"
              className="block w-full p-2 border border-neutral-600 rounded-md shadow-sm bg-neutral-800 text-neutral-200"
            />
          </LabelInputContainer>

          <div className="col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
            <button
              className="bg-gradient-to-br from-teal-500 to-cyan-600 text-white rounded-md h-10 font-medium shadow-lg"
              type="submit"
            >
              Register &rarr;
            </button>
            <p className="text-neutral-400 text-sm pt-2 pl-4">
              Already Registered?{" "}
              <Link to="/signin" className="text-teal-400 hover:underline">
                Login!
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
