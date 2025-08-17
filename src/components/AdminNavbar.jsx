import React from "react";
import { FiMenu, FiSearch, FiUser } from "react-icons/fi";

const AdminNavbar = ({ toggleSidebar }) => {
  return (
    <header className="w-full h-16 bg-white shadow flex items-center justify-between px-4 z-50">
      {/* Left */}
      <div className="flex items-center gap-4">
        <button onClick={toggleSidebar} className="lg:hidden text-2xl">
          <FiMenu />
        </button>

        <div className="relative">
          <FiSearch className="absolute left-3 top-2.5 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-green-700"
          />
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        <div className="relative">
          <img src="/assets/icons/notification-vector.png" alt="" />
          {/* <FiBell className="text-xl" /> */}
          <span className="absolute -top-4 -right-4 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
            3
          </span>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-green-300 rounded-full flex items-center justify-center">
            <FiUser className="text-[#2E5A2E]" />
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-semibold">Admin User</p>
            <p className="text-xs text-gray-500">Administrator</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminNavbar;
