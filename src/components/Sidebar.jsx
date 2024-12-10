import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 min-h-screen bg-gray-800 text-white flex flex-col items-center shadow-md p-5 md:w-40 transition-all">
      {/* Logo/Username */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-blue-400 tracking-wider">iDan</h1>
      </div>

      {/* Sidebar Navigation */}
      <div className="flex flex-col items-center w-full space-y-8">
        {/* Form Table Link */}
        <NavLink
          to="/FormTable"
          className="flex flex-col items-center p-3 text-gray-300 hover:text-blue-400 transition-all"
          activeClassName="text-blue-400"
          aria-label="Go to Form Table"
        >
          <i className="fas fa-table text-2xl mb-2"></i>
          {/* <span className="text-sm hidden md:block">Form Table</span> */}
        </NavLink>

        {/* Request Form Link */}
        <NavLink
          to="/RequestFrom"
          className="flex flex-col items-center p-3 text-gray-300 hover:text-blue-400 transition-all"
          activeClassName="text-blue-400"
          aria-label="Go to Request Form"
        >
          <i className="fas fa-user-plus text-2xl mb-2"></i>
          {/* <span className="text-sm hidden md:block">Request Form</span> */}
        </NavLink>

        {/* Worker Notification Link */}
        <NavLink
          to="/WorkerNotification"
          className="flex flex-col items-center p-3 text-gray-300 hover:text-blue-400 transition-all"
          activeClassName="text-blue-400"
          aria-label="Go to Worker Notifications"
        >
          <i className="fas fa-bell text-2xl mb-2"></i>
          {/* <span className="text-sm hidden md:block">Notifications</span> */}
        </NavLink>

        {/* Log Out */}
        <NavLink
          to="/"
          className="flex flex-col items-center p-3 text-gray-300 hover:text-blue-400 transition-all"
          activeClassName="text-blue-400"
          aria-label="Log Out"
        >
          <i className="fas fa-power-off text-2xl mb-2"></i>
          {/* <span className="text-sm hidden md:block">Log Out</span> */}
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
