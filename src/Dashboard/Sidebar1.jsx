import React from "react";
import { Link } from "react-router-dom";

const Sidebar1 = () => {
  return (
    <aside className="w-1/6 h-screen bg-white shadow-lg flex flex-col items-center py-6">
      {/* Logo or Name */}
      <h2 className="text-2xl font-bold text-[#6a6458] mb-10">iDan</h2>

      {/* Navigation Icons */}
      <nav className="flex flex-col space-y-10">
        {/* Dashboard Icon */}
        <Link
          to="/Dashboard"
          className="flex flex-col items-center text-gray-700 hover:text-blue-600 transition-all"
        >
          <i className="fas fa-home text-2xl mb-2"></i>
          <span className="text-sm font-medium">Dashboard</span>
        </Link>

        {/* Add User Icon */}
        <Link
          to="/Add"
          className="flex flex-col items-center text-gray-700 hover:text-blue-600 transition-all"
        >
          <i className="fas fa-user-plus text-2xl mb-2"></i>
          <span className="text-sm font-medium">Add User</span>
        </Link>

        {/* Settings Icon */}
        <Link
          to="/View2"
          className="flex flex-col items-center text-gray-700 hover:text-blue-600 transition-all"
        >
          <i className="fas fa-cog text-2xl mb-2"></i>
          <span className="text-sm font-medium">View2</span>
        </Link>
        <Link
          to="/Pending"
          className="flex flex-col items-center text-gray-700 hover:text-blue-600 transition-all"
        >
          <i className="fas fa-cog text-2xl mb-2"></i>
          <span className="text-sm font-medium">Pending</span>
        </Link>
        {/* Settings Icon */}
      
      </nav>
    </aside>
  );
};

export default Sidebar1;
