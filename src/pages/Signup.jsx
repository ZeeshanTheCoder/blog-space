import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import AuthNavbar from "../components/AuthNavbar";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <>
    <AuthNavbar />
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Left Column - Form */}
        <div className="w-full lg:w-1/2 bg-white px-6 py-10 lg:px-20 flex items-center justify-center">
          <div className="w-full max-w-md">
            <h2 className="text-2xl font-normal mb-6">Create Your Account</h2>

            {/* Username */}
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-sm font-normal mb-1"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                placeholder="Choose a unique username"
                className="w-full px-4 py-2 border border-[#D1D5DB] rounded-md focus:outline-none focus:ring focus:ring-green-300"
              />
              <p className="text-xs text-gray-500 mt-1">
                This will be your public display name
              </p>
            </div>

            {/* Email */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-normal mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email address"
                className="w-full px-4 py-2 border border-[#D1D5DB] rounded-md focus:outline-none focus:ring focus:ring-green-300"
              />
            </div>

            {/* Password */}
            <div className="mb-4 relative">
              <label
                htmlFor="password"
                className="block text-sm font-normal mb-1"
              >
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Create a strong password"
                className="w-full px-4 py-2 border border-[#D1D5DB] rounded-md pr-10 focus:outline-none focus:ring focus:ring-green-300"
              />
              <div
                className="absolute top-9 right-3 text-gray-500 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>

            {/* Confirm Password */}
            <div className="mb-4 relative">
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-normal mb-1"
              >
                Confirm Password
              </label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                placeholder="Confirm your password"
                className="w-full px-4 py-2 border border-[#D1D5DB] rounded-md pr-10 focus:outline-none focus:ring focus:ring-green-300"
              />
              <div
                className="absolute top-9 right-3 text-gray-500 cursor-pointer"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>

            {/* Terms Checkbox */}
            <div className="mb-6 text-sm">
              <label className="flex items-start space-x-2">
                <input type="checkbox" className="mt-1" />
                <span>
                  I agree to the{" "}
                  <a href="#" className="text-[#2E7D32] hover:underline">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-[#2E7D32] hover:underline">
                    Privacy Policy
                  </a>
                </span>
              </label>
            </div>

            {/* Signup Button */}
            <button className="w-full bg-[#2E5A2E] text-white py-2 rounded-md hover:bg-green-800 transition">
              Signup
            </button>
          </div>
        </div>

        {/* Right Column - Aesthetic Background */}
        <div className="w-full lg:w-1/2 bg-[#E6F4EC] hidden lg:block"></div>
      </div>
    </>
  );
};

export default Signup;
