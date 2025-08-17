import React, { useState } from "react";

const AuthorNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#2E5A2E] px-6 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left side */}
        <div className="flex items-center space-x-10">
          <h1
            className="text-white text-2xl font-pacifico cursor-pointer select-none"
            style={{ fontFamily: "'Pacifico', cursive" }}
          >
            BlogSpace
          </h1>

          {/* Desktop nav links */}
          <ul className="hidden md:flex space-x-8 text-white text-sm font-medium">
            {["Dashboard", "Posts", "Categories", "Analytics"].map((item) => (
              <li
                key={item}
                className="cursor-pointer hover:text-green-300 transition-colors duration-200"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-4">
          <button className="flex bg-[#98CF98] text-[#2E5A2E] rounded px-5 gap-5 py-2 hover:bg-green-400 transition-colors duration-200">
            <img src="assets/icons/add-vector.png" className="object-contain" alt="" />
            <span> New Post</span>
          </button>
          <div className="p-3 bg-[#98CF98] rounded-full text-green-800 text-xl">
            <img
              src="/assets/icons/users-vector.png"
              className="filter invert"
              alt=""
            />
          </div>

          {/* Hamburger menu toggle */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile nav links */}
      {menuOpen && (
        <ul className="md:hidden mt-4 space-y-2 text-white text-sm font-medium">
          {["Dashboard", "Posts", "Categories", "Analytics"].map((item) => (
            <li
              key={item}
              className="cursor-pointer hover:text-green-300 transition-colors duration-200"
            >
              {item}
            </li>
          ))}
          <li>
            <button className="w-full mt-2 bg-green-300 text-[#2E5A2E] rounded-full px-4 py-2 font-semibold hover:bg-green-400 transition-colors duration-200">
              + New Post
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default AuthorNavbar;
