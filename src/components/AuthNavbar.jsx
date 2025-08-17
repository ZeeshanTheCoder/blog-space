import React from "react";
import { Link, useLocation } from "react-router-dom";
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
        <div className="text-[#2E5A2E] text-[24px] leading-8 font-[pacifico]">
          BlogSpace
        </div>

        {/* Back to Home link */}
        <Link
          to="/"
          className="flex items-center text-[#2E5A2E] text-sm hover:underline"
        >
          <FaArrowLeft className="mr-2" />
          Back to Home
        </Link>
      </div>
    </nav>
  );
};

export default AuthNavbar;
