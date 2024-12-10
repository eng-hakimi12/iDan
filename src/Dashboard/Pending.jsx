import Sidebar1 from "./Sidebar1";
import { NavLink } from "react-router-dom";


function Pending() {
    return (
        <div className="flex gap-10">
            <Sidebar1 />
      <div className="w-full h-screen bg-lightBlue p-8">
        <h1 className="text-center text-4xl font-bold text-deepBlue pt-2 pb-10">
          Pending Requests
        </h1>
  
        {/* Waiting List */}
        <section>
          <h2 className="text-2xl font-semibold text-[#6a6458] mb-2">
            Pending Requests
          </h2>
          <ul>
            {[
              {
                name: "Axmed Macalin Fiqi",
                message: "I am writing to request permission...",
                avatar: "https://via.placeholder.com/40",
              },
              {
                name: "Khadija Al-Makhzoumi",
                message: "I am writing to request permission...",
                avatar: "https://via.placeholder.com/40",
              },
              {
                name: "Farah Sheikh Abdulqadir",
                message: "I am writing to request permission...",
                avatar: "https://via.placeholder.com/40",
              },
              {
                name: "Elmi Mohamoud Noor",
                message: "I am writing to request permission...",
                avatar: "https://via.placeholder.com/40",
              },
            ].map((request, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-white p-6 rounded-lg shadow-lg mb-6 hover:bg-gray-100 transition-all"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={request.avatar}
                    alt="User Avatar"
                    className="w-14 h-14 rounded-full border-2 border-[#6a6458]"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-[#6a6458]">
                      {request.name}
                    </h3>
                    <p className="text-gray-500 text-sm">{request.message}</p>
                  </div>
                </div>
  
                <NavLink
                    to="/ApendngView"
                    className="bg-blue-100 text-blue-800 font-semibold rounded-full px-3 py-1 hover:bg-blue-200 transition duration-200"
                  >
                    View more
                  </NavLink>
              </li>
            ))}
          </ul>
        </section>
      </div>
      </div>
    );
  }
  
  export default Pending;
  