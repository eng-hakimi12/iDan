import React from "react";
import Sidebar1 from "./Sidebar1";

const Add = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar1 />

      {/* Main Section */}
      <div className="w-full h-full mb-2">

        {/* Form Section */}
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
          <div className="bg-white shadow-lg rounded-lg p-8 w-[600px] h-[600px]">
            <h1 className="text-3xl font-semibold text-gray-800 text-center mb-8">
              Create New Account
            </h1>
            <form>
              {/* Name Field */}
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-xl font-semibold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="shadow-sm appearance-none border border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                />
              </div>

              {/* ID Field */}
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-xl font-semibold mb-2"
                  htmlFor="id"
                >
                  ID
                </label>
                <input
                  className="shadow-sm appearance-none border border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                  id="id"
                  type="text"
                  placeholder="Enter your ID"
                />
              </div>

              {/* Password Field */}
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-xl font-semibold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="shadow-sm appearance-none border border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                  id="password"
                  type="password"
                  placeholder="Create your password"
                />
              </div>

              {/* Submit Button */}
              <div className="flex items-center justify-center">
                <button
                  className="bg-[#6a6458] hover:bg-[#594f44] text-white font-semibold py-3 px-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all"
                  type="button"
                >
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
