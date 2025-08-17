import React, { useState } from "react";
import AuthNavbar from "../components/AuthNavbar";
import { FaEye, FaEyeSlash, FaGoogle, FaFacebook } from "react-icons/fa";

const Login = () => {
      const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <AuthNavbar />

      <div className="bg-[#E6F4EC] min-h-screen flex items-center justify-center px-4">
        <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md">
          {/* Email Field */}
          <div className="mb-4">
            <label className="block text-sm text-[#374151] font-normal mb-1" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email address"
              className="w-full px-4 py-2 border border-[#D1D5DB] rounded-md focus:outline-none focus:ring focus:ring-green-300"
            />
          </div>

          {/* Password Field */}
          <div className="mb-4 relative">
            <label
              className="block text-sm text-[#374151] font-normal mb-1"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-[#D1D5DB] rounded-md pr-10 focus:outline-none focus:ring focus:ring-green-300"
            />
            <div
              className="absolute top-9 right-3 text-gray-500 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>

          {/* Options Row */}
          <div className="flex items-center justify-between mb-4 text-sm">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
            <a href="#" className="text-[#98CF98] hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Sign In Button */}
          <button className="w-full bg-[#2E5A2E] text-white py-2 rounded-md hover:bg-green-800 transition">
            Sign In
          </button>

          {/* Divider */}
          <div className="flex items-center my-6">
            <hr className="flex-grow border-t" />
            <span className="mx-3 text-gray-400 text-sm">or continue with</span>
            <hr className="flex-grow border-t" />
          </div>

          {/* Social Buttons */}
          <div className="flex space-x-3 mb-4">
            <button className="flex items-center justify-center w-1/2 border border-[#D1D5DB] py-2 rounded-md hover:bg-gray-100 transition">
              <FaGoogle className="mr-2 text-red-500" />
              Google
            </button>
            <button className="flex items-center justify-center w-1/2 border border-[#D1D5DB] py-2 rounded-md hover:bg-gray-100 transition">
              <FaFacebook className="mr-2 text-blue-600" />
              Facebook
            </button>
          </div>

          {/* Create Account Link */}
          <p className="text-center text-[#4B5563] text-sm">
            Don’t have an account?{" "}
            <a href="#" className="text-[#98CF98] hover:underline">
              Create Account
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
