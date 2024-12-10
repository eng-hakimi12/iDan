import React from "react";
import Sidebar1 from "./Sidebar1";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar */}
      <Sidebar1 />

      {/* Main Content */}
      <main className="w-5/6 bg-white p-10">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-[#6a6458]">Admin Dashboard</h1>
          {/* Bell Icon */}
          <span className="text-3xl text-[#6a6458] cursor-pointer">
            <i className="fa fa-bell"></i>
          </span>
        </div>

        {/* Top Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-[#6a6458] text-white p-6 rounded-lg shadow-md text-center">
            <Link
          to="/Pending"
          className="flex flex-col items-center text-white hover:text-blue-600 transition-all"
        >
          <h3 className="text-2xl font-semibold">20+ Ministers</h3>

        </Link>
          </div>
          <div className="bg-[#d6a659] text-white p-6 rounded-lg shadow-md text-center">
            <Link
          to="/Pending"
          className="flex flex-col items-center text-white hover:text-blue-600 transition-all"
        >
            <h3 className="text-2xl font-semibold">5 Pending Requests</h3>
            </Link>
          </div>
          <div className="bg-[#d8bb78] text-white p-6 rounded-lg shadow-md text-center">
            <Link
          to="/Pending"
          className="flex flex-col items-center text-white hover:text-blue-600 transition-all"
        >
            <h3 className="text-2xl font-semibold">15 Approved Requests</h3>

        </Link>
          </div>
        </div>

        {/* Waiting List */}
        <section>
          <h2 className="text-xl font-semibold text-[#6a6458] mb-4">
            Pending Requests
          </h2>
          <ul>
            {[
              {
                name: "Axmed Macalin Fiqi",
                message: "I am writing to request permission...",
                avatar: "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?t=st=1733297713~exp=1733301313~hmac=5945b98aa484e0d8271b6023e9293b2c4c3fc5424c352c2fb1b49da8689e2f2d&w=740",
              },
              {
                name: "Khadija Al-Makhzoumi",
                message: "I am writing to request permission...",
                avatar: "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?t=st=1733297713~exp=1733301313~hmac=5945b98aa484e0d8271b6023e9293b2c4c3fc5424c352c2fb1b49da8689e2f2d&w=740",
              },
              {
                name: "Farah Sheikh Abdulqadir",
                message: "I am writing to request permission...",
                avatar: "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?t=st=1733297713~exp=1733301313~hmac=5945b98aa484e0d8271b6023e9293b2c4c3fc5424c352c2fb1b49da8689e2f2d&w=740",
              },
              {
                name: "Elmi Mohamoud Noor",
                message: "I am writing to request permission...",
                avatar: "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?t=st=1733297713~exp=1733301313~hmac=5945b98aa484e0d8271b6023e9293b2c4c3fc5424c352c2fb1b49da8689e2f2d&w=740",
              },
            ].map((request, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md mb-4"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={request.avatar}
                    alt="User Avatar"
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold text-[#6a6458]">
                      {request.name}
                    </h3>
                    <p className="text-gray-500 text-sm">{request.message}</p>
                  </div>
                </div>
                <Link
                  to="/ApendngView"
                  className="bg-[#6a6458] text-white px-4 py-2 rounded-lg hover:bg-[#594f44] transition"
                >
                  View
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
