import React from "react";
// import Sidebar from "./Sidebar";

const RequestFrom = () => {
  return (
    <div>
        {/* <Sidebar /> */}
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f0f4f8]">
      {/* Header */}
      <header className="w-full bg-[#4a3c31] py-2 mb-10 shadow-lg">
        <h1 className="text-center text-4xl font-bold text-white uppercase tracking-widest">
          iDan
        </h1>
      </header>

      {/* Form */}
      <div className="bg-white p-5 rounded-lg shadow-lg  sm:w-[600px] mt-4 border border-[#dcdcdc]">
        <form>
          {/* ID Field */}
          <div className="mb-3">
            <label htmlFor="id" className="block text-sm font-medium text-[#4a3c31]">
              ID
            </label>
            <input
              type="text"
              id="id"
              name="id"
              className="mt-2 block w-full rounded-md border border-[#b5a18d] shadow-sm focus:border-[#4a3c31] focus:ring-[#4a3c31] p-3"
              placeholder="Enter your ID"
            />
          </div>

          {/* Name Field */}
          <div className="mb-5">
            <label htmlFor="name" className="block text-sm font-medium text-[#4a3c31]">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-2 block w-full rounded-md border border-[#b5a18d] shadow-sm focus:border-[#4a3c31] focus:ring-[#4a3c31] p-3"
              placeholder="Enter your name"
            />
          </div>

          {/* Place Field */}
          <div className="mb-5">
            <label htmlFor="place" className="block text-sm font-medium text-[#4a3c31]">
              Place
            </label>
            <input
              type="text"
              id="place"
              name="place"
              className="mt-2 block w-full rounded-md border border-[#b5a18d] shadow-sm focus:border-[#4a3c31] focus:ring-[#4a3c31] p-3"
              placeholder="Enter your place"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="place" className="block text-sm font-medium text-[#4a3c31]">
            codsi
            </label>
            <input
              type="text"
              id="place"
              name="place"
              className="mt-2 block w-full rounded-md border border-[#b5a18d] shadow-sm focus:border-[#4a3c31] focus:ring-[#4a3c31] p-3"
              placeholder="Enter your place"
            />
          </div>


          {/* Permission Reason Field */}
          <div className="mb-5">
            <label htmlFor="reason" className="block text-sm font-medium text-[#4a3c31]">
              Permission Reason
            </label>
            <textarea
              id="reason"
              name="reason"
              rows="4"
              className="mt-2 block w-full rounded-md border border-[#b5a18d] shadow-sm focus:border-[#4a3c31] focus:ring-[#4a3c31] p-3"
              placeholder="Enter reason for permission"
            ></textarea>
          </div>

          {/* Date Fields */}
          <div className="mb-5 grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="start-date" className="block text-sm font-medium text-[#4a3c31]">
                Start Date
              </label>
              <input
                type="date"
                id="start-date"
                name="start-date"
                className="mt-2 block w-full rounded-md border border-[#b5a18d] shadow-sm focus:border-[#4a3c31] focus:ring-[#4a3c31] p-3"
              />
            </div>
            <div>
              <label htmlFor="end-date" className="block text-sm font-medium text-[#4a3c31]">
                End Date
              </label>
              <input
                type="date"
                id="end-date"
                name="end-date"
                className="mt-2 block w-full rounded-md border border-[#b5a18d] shadow-sm focus:border-[#4a3c31] focus:ring-[#4a3c31] p-3"
              />
            </div>
          </div>

          {/* Vocation Type */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-[#4a3c31]">
              Vocation Type
            </label>
            <div className="flex items-center space-x-6 mt-2">
              <div>
                <input
                  type="radio"
                  id="in"
                  name="vocation-type"
                  value="In"
                  className="mr-2 focus:ring-[#4a3c31]"
                />
                <label htmlFor="in" className="text-sm text-[#4a3c31]">
                  In
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="out"
                  name="vocation-type"
                  value="Out"
                  className="mr-2 focus:ring-[#4a3c31]"
                />
                <label htmlFor="out" className="text-sm text-[#4a3c31]">
                  Out
                </label>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#4a3c31] text-white py-3 px-6 rounded-lg hover:bg-[#3b2c22] transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default RequestFrom;
