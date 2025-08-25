import React, { useState } from "react";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo + Links */}
          <div className="flex items-center">
            <NavLink to="/">
              <span className="text-white text-[24px] leading-8 font-[pacifico]">
                BlogSpace
              </span>
            </NavLink>
            <div className="hidden lg:flex space-x-6 ml-10 text-white font-sans text-sm">
              <NavLink to="/" className="hover:underline">
                Home
              </NavLink>
              <NavLink to="/categories" className="hover:underline">
                Categories
              </NavLink>
              <NavLink to="/authors" className="hover:underline">
                Authors
              </NavLink>
              <NavLink to="/about" className="hover:underline">
                About
              </NavLink>
            </div>
          </div>

          {/* Search + Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="relative bg-white rounded">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                placeholder="Search posts..."
                className="pl-10 pr-4 py-1.5 rounded-md text-sm text-black focus:outline-none"
              />
            </div>
            <NavLink to="/login">
              <button className="bg-secondary hover:bg-green-700 text-black px-4 py-1.5 rounded-md text-sm">
                Sign In
              </button>
            </NavLink>

            <NavLink to="/write">
              <button className="bg-white text-green-700 border border-green-700 px-4 py-1.5 rounded-md text-sm hover:bg-green-100">
                Write
              </button>
            </NavLink>
          </div>

          {/* Mobile menu toggle */}
          <div className="lg:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white focus:outline-none"
            >
              {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden px-4 pb-4 space-y-2 text-sm">
          <NavLink to="/" className="block text-white hover:underline">
            Home
          </NavLink>
          <NavLink
            to="/categories"
            className="block text-white hover:underline"
          >
            Categories
          </NavLink>
          <NavLink to="/authors" className="block text-white hover:underline">
            Authors
          </NavLink>
          <NavLink to="/about" className="block text-white hover:underline">
            About
          </NavLink>
          <div className="relative mt-2">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Search posts..."
              className="pl-10 pr-4 py-1.5 rounded-md w-full text-sm text-black focus:outline-none"
            />
          </div>

          <NavLink to="/login">
            <button className="bg-green-600 mt-2 mr-5 text-white px-4 py-2 rounded-md text-sm">
              Sign In
            </button>
          </NavLink>
          <NavLink to="/write">
            <button className="bg-white mt-2 mr-5 text-green-700 border border-green-700 px-4 py-2 rounded-md text-sm">
              Write
            </button>
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
