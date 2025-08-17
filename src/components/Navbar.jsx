import React, { useState } from 'react';
import { FiSearch, FiMenu, FiX } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#2E5A2E] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo + Links */}
          <div className="flex items-center">
            <span className="text-white text-[24px] leading-8 font-[pacifico]">
              BlogSpace
            </span>
            <div className="hidden md:flex space-x-6 ml-10 text-white font-sans text-sm">
              <NavLink to="/" className="hover:underline">Home</NavLink>
              <NavLink to="/categories" className="hover:underline">Categories</NavLink>
              <NavLink to="/authors" className="hover:underline">Authors</NavLink>
              <NavLink to="/about" className="hover:underline">About</NavLink>
            </div>
          </div>

          {/* Search + Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative bg-white rounded">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                placeholder="Search posts..."
                className="pl-10 pr-4 py-1.5 rounded-md text-sm text-black focus:outline-none"
              />
            </div>
            <button className="bg-[#98CF98] hover:bg-green-700 text-black px-4 py-1.5 rounded-md text-sm">
              Sign In
            </button>
            <button className="bg-white text-green-700 border border-green-700 px-4 py-1.5 rounded-md text-sm hover:bg-green-100">
              Write
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-white focus:outline-none">
              {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 text-sm">
          <a href="#" className="block text-white">Home</a>
          <a href="#" className="block text-white">Categories</a>
          <a href="#" className="block text-white">Authors</a>
          <a href="#" className="block text-white">About</a>
          <div className="relative mt-2">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Search posts..."
              className="pl-10 pr-4 py-1.5 rounded-md w-full text-sm text-black focus:outline-none"
            />
          </div>
          <button className="bg-green-600 text-white px-4 py-2 w-full rounded-md text-sm">
            Sign In
          </button>
          <button className="bg-white text-green-700 border border-green-700 px-4 py-2 w-full rounded-md text-sm">
            Write
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
