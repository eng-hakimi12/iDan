import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className="bg-[#6b6252] h-[90px] w-full">
      <h1 className="text-4xl font-bold text-white pt-8 text-center mb-8">iDan</h1>

      </div>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white shadow-lg  rounded-lg p-8 w-[500px] h-[500px] ">
          <h1 className="text-3xl font-bold text-gray-800 text-center mb-14">iDan</h1>
          <form>
            <div className="mb-14">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="id"
              >
                ID
              </label>
              <input
                className="shadow-sm appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                id="id"
                type="text"
                placeholder="Enter your ID"
              />
            </div>
            <div className="mb-14">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow-sm appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                id="password"
                type="password"
                placeholder="Enter your password"
              />
            </div>
            <div className="flex items-center justify-center">
              
                <Link
          to="/FormTable"
          className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
            Login
        </Link>
            </div>
        <Link
          to="/Dashboard"
          className="flex flex-col items-center text-gray-700 hover:text-blue-600 transition-all"
        >
          <i className="fas fa-home text-2xl mb-2"></i>
        </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
