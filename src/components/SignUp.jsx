import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-100 via-green-50 to-teal-100 px-4">
      <div className="w-full max-w-md bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-8">
        {/* Logo / Title */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-green-700">MindSpace</h1>
          <p className="text-gray-500">Create your account and start your journey 🌱</p>
        </div>

        {/* Form */}
        <form className="space-y-5">
          <div>
            <label className="block text-left text-gray-700 font-medium mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg 
              focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400"
            />
          </div>

          <div>
            <label className="block text-left text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg 
              focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400"
            />
          </div>

          <div>
            <label className="block text-left text-gray-700 font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg 
              focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg 
            hover:bg-green-700 transition duration-200 font-semibold shadow-md"
          >
            Sign Up
          </button>
        </form>

        {/* Links */}
        <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
          <Link to="/login" className="hover:text-green-600">
            Already have an account? Log In
          </Link>
        </div>

        {/* Back to App */}
        <div className="mt-6 text-center">
          <Link
            to="/"
            className="inline-block px-5 py-2 border border-green-600 
            text-green-600 rounded-lg hover:bg-green-50 transition"
          >
            ⬅ Back to App
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
