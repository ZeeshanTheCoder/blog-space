import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const AuthNavbar = () => {
  const location = useLocation();
  const isAuthPage =
    location.pathname === "/login" || location.pathname === "/signup";

  if (!isAuthPage) return null;

  return (
    <nav className="w-full bg-white py-3 px-4 border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/">
          <div className="text-primary text-[24px] leading-8 font-[pacifico]">
            BlogSpace
          </div>
        </NavLink>
        {/* Back to Home link */}
        <Link
          to="/"
          className="flex items-center text-primary text-sm hover:underline"
        >
          <FaArrowLeft className="mr-2" />
          Back to Home
        </Link>
      </div>
    </nav>
  );
};

export default AuthNavbar;
