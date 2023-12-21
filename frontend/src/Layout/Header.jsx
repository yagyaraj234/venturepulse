import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="text-slate-700 container relative mx-auto flex flex-col overflow-hidden px-4 py-4 lg:flex-row lg:items-center justify-center">
      <Link
        to="/"
        className="flex items-center whitespace-nowrap text-2xl font-black"
      >
        Venture Pulse ❤️
      </Link>
      <input type="checkbox" className="peer hidden" id="navbar-open" />
      <label
        className="absolute top-5 right-5 cursor-pointer lg:hidden"
        htmlFor="navbar-open"
      >
        <svg
          className="h-7 w-7"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </label>
      <nav
        aria-label="Header Navigation"
        className="peer-checked:pt-8 peer-checked:max-h-60 flex max-h-0 w-full flex-col items-center overflow-hidden transition-all lg:ml-24 lg:max-h-full lg:flex-row"
      >
        <ul className="flex w-full flex-col items-center space-y-2 lg:flex-row lg:justify-center lg:space-y-0 items-center">
          <li className="lg:mr-12">
            <Link
              className="rounded text-gray-700  font-semibold "
              to="/startups"
            >
              Startups
            </Link>
          </li>
          <li className="lg:mr-12">
            <Link
              className="rounded text-gray-700  font-semibold "
              to="/add-new-startup"
            >
              Add New Startup
            </Link>
          </li>
          <li className="lg:mr-12">
            <a className="rounded text-gray-700  font-semibold " href="#">
              Contact
            </a>
          </li>
          <li className="lg:mr-12">
            <Link className="rounded text-gray-700 font-semibold" href="#">
              FAQ
            </Link>
          </li>
        </ul>
        <hr className="mt-4 w-full lg:hidden" />
        <div className="my-4 flex items-center space-x-6 space-y-2 lg:my-0 lg:ml-auto lg:space-x-8 lg:space-y-0">
          <Link
            to="/login"
            title="login"
            className="whitespace-nowrap rounded font-medium transition-all duration-200  hover:text-opacity-50"
          >
            Log in
          </Link>
          <Link
            to="/signup"
            className="whitespace-nowrap rounded-xl bg-blue-700 px-5 py-3 font-medium text-white transition-all duration-200  hover:bg-blue-600"
          >
            Signup
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
