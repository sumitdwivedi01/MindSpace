import React, { useState } from "react";
import {Link} from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/70 backdrop-blur-md shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <div className="flex-shrink-0 text-2xl font-bold text-indigo-600 !no-underline">
            <Link to="/"  className="!no-underline text-gray-700  hover:text-indigo-600 transition">
            MindSpace
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
               className="!no-underline !text-gray-700  hover:!text-indigo-600  !transition"
            >
              Home
            </Link>
            <Link
              to="/about"
               className="!no-underline !text-gray-700  hover:!text-indigo-600  !transition"
            >
              About
            </Link>
            <div className="flex space-x-4">
              <button className="!px-4 !py-2 !rounded-lg border border-indigo-600 text-indigo-600 hover:bg-indigo-50 transition">
                Login
              </button>
              <button className="!px-4 !py-2 !rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition">
                Sign Up
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700  hover:text-indigo-600 focus:outline-none"
            >
              {/* Hamburger Icon */}
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white  px-4 pt-2 pb-4 space-y-2 shadow-lg">
          <Link
            to="/"
            className=" !no-underline block text-gray-700  hover:text-indigo-600  transition"
          >
            Home
          </Link>
          <Link
            to="/about"
            className=" !no-underline block text-gray-700  hover:text-indigo-600  transition"
          >
            About
          </Link>
          <div className="flex space-x-4">
            <button className="flex-1 px-4 py-2 rounded-lg border border-indigo-600 text-indigo-600 hover:bg-indigo-50 transition">
              Login
            </button>
            <button className="flex-1 px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
