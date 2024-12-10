import React from "react";
import Sidebar from "./Sidebar";
import { NavLink } from "react-router-dom";

const FormTable = () => {
  return (
    <div className="flex">
      {/* Sidebar on the left side */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-grow bg-gray-100 p-6">
        {/* Notification Icon */}
        <div className="flex justify-end mb-6">
          <i className="fa fa-bell text-4xl text-gray-500 hover:text-gray-700 transition duration-200"></i>
        </div>

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-xl font-bold text-gray-800">Axmed Maclin Fiqi</h1>
          <button className="px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600 transition duration-200">
            Sort
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse bg-white rounded-lg shadow-md overflow-hidden">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-6 py-4 text-left text-sm font-medium text-gray-700">
                  Place
                </th>
                <th className="border border-gray-300 px-6 py-4 text-left text-sm font-medium text-gray-700">
                  Status
                </th>
                <th className="border border-gray-300 px-6 py-4 text-left text-sm font-medium text-gray-700">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Row 1 */}
              <tr className="hover:bg-gray-50">
                <td className="border border-gray-300 px-6 py-4 text-sm text-gray-800">
                  UN Conference
                </td>
                <td className="border border-gray-300 px-6 py-4 text-sm">
                  <span className="text-red-600 font-semibold bg-red-100 rounded-full px-3 py-1">
                    Reject
                  </span>
                </td>
                <td className="border border-gray-300 px-6 py-4 text-sm">
                  <NavLink
                    to="/Reject"
                    className="bg-blue-100 text-blue-800 font-semibold rounded-full px-3 py-1 hover:bg-blue-200 transition duration-200"
                  >
                    View more
                  </NavLink>
                </td>
              </tr>
              {/* Row 2 */}
              <tr className="hover:bg-gray-50">
                <td className="border border-gray-300 px-6 py-4 text-sm text-gray-800">
                  UN Conference
                </td>
                <td className="border border-gray-300 px-6 py-4 text-sm">
                  <span className="text-green-600 font-semibold bg-green-100 rounded-full px-3 py-1">
                    Accepted
                  </span>
                </td>
                <td className="border border-gray-300 px-6 py-4 text-sm">
                  <NavLink
                    to="/View"
                    className="bg-blue-100 text-blue-800 font-semibold rounded-full px-3 py-1 hover:bg-blue-200 transition duration-200"
                  >
                    View more
                  </NavLink>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FormTable;
