import React from "react";
import Nav from "../components/Nav";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const LabelInputContainer = ({ children, className }) => (
  <div className={`flex flex-col space-y-2 w-full ${className}`}>
    {children}
  </div>
);

const SignIn = () => {
  return (
    <div className="bg-gradient-to-b from-[#4b2954] via-black to-black min-h-screen flex flex-col items-center justify-center">
      <Nav />
      <div className="max-w-md w-full rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-black mt-20 md:mt-32">
        <h2 className="font-bold text-xl text-neutral-200">
          Sign In to JOSHIANA 13.0
        </h2>
        <p className="text-neutral-400 text-sm max-w-sm mt-2">
          Please enter your email and password to continue.
        </p>

        <form className="my-8 grid grid-cols-1 gap-4">
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

          <div className="col-span-1 grid grid-cols-1 gap-4 mt-4">
            <button
              className="bg-gradient-to-br from-teal-500 to-cyan-600 text-white rounded-md h-10 font-medium shadow-lg"
              type="submit"
            >
              Sign In &rarr;
            </button>
          </div>

          <p className="text-neutral-400 text-sm text-center mt-4">
            Not Yet Registered?{" "}
            <Link to="/register" className="text-teal-400 hover:underline">
              Register Now!
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
