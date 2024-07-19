import React from "react";
import Nav from "../components/Nav";

const LabelInputContainer = ({ children, className }) => (
  <div className={`flex flex-col space-y-2 w-full ${className}`}>
    {children}
  </div>
);

const Register = () => {
  return (
    <div className="bg-[#000000] min-h-screen flex flex-col items-center">
      <Nav />
      <div className="max-w-4xl w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 mt-32 shadow-input bg-white dark:bg-black ">
        <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
          Welcome to JOSHIANA 13.0
        </h2>
        <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
          Register for the college fest.
        </p>

        <form className="my-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <LabelInputContainer>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-neutral-700 dark:text-neutral-300"
            >
              Name
            </label>
            <input
              id="name"
              placeholder="John Doe"
              type="text"
              className="block w-full p-2 border border-neutral-300 rounded-md shadow-sm dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-200"
            />
          </LabelInputContainer>

          <LabelInputContainer>
            <label
              htmlFor="course"
              className="block text-sm font-medium text-neutral-700 dark:text-neutral-300"
            >
              Course
            </label>
            <select
              id="course"
              className="block w-full p-2 border border-neutral-300 rounded-md shadow-sm dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-200"
            >
              <option value="mca">MCA</option>
              <option value="mba">MBA</option>
              <option value="mtech">M.Tech</option>
            </select>
          </LabelInputContainer>
          <LabelInputContainer>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-neutral-700 dark:text-neutral-300"
            >
              Email Address
            </label>
            <input
              id="email"
              placeholder="john.doe@example.com"
              type="email"
              className="block w-full p-2 border border-neutral-300 rounded-md shadow-sm dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-200"
            />
          </LabelInputContainer>

          <LabelInputContainer>
            <label
              htmlFor="contact"
              className="block text-sm font-medium text-neutral-700 dark:text-neutral-300"
            >
              Contact Number
            </label>
            <input
              id="contact"
              placeholder="123-456-7890"
              type="tel"
              className="block w-full p-2 border border-neutral-300 rounded-md shadow-sm dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-200"
            />
          </LabelInputContainer>

          <LabelInputContainer>
            <label
              htmlFor="college"
              className="block text-sm font-medium text-neutral-700 dark:text-neutral-300"
            >
              College Name
            </label>
            <input
              id="college"
              placeholder="XYZ University"
              type="text"
              className="block w-full p-2 border border-neutral-300 rounded-md shadow-sm dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-200"
            />
          </LabelInputContainer>
          <LabelInputContainer className="col-span-1 md:col-span-2">
            <label
              htmlFor="address"
              className="block text-sm font-medium text-neutral-700 dark:text-neutral-300"
            >
              Address
            </label>
            <input
              id="address"
              placeholder="123 Main St, City, State, ZIP"
              type="text"
              className="block w-full p-2 border border-neutral-300 rounded-md shadow-sm dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-200"
            />
          </LabelInputContainer>

          <div className="col-span-1 md:col-span-2">
            <button
              className="bg-gradient-to-br from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
              type="submit"
            >
              Register &rarr;
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
