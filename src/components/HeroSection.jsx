import React from "react";
import { NavLink } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative h-[500px] w-full">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/images/banner.jpg')", // Replace with your image
        }}
      ></div>

      {/* Dark Green Overlay */}
      <div className="absolute inset-0 bg-primary opacity-70"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between h-full">
            {/* Left Content */}
            <div className="w-full md:w-1/2 text-white mx-5">
              <p className="text-base md:text-lg mb-6">
                Join our community of passionate writers and readers. Create,
                publish, and discover amazing content that inspires and informs.
              </p>
              <div className="flex flex-row gap-4">
                <NavLink to="/write">
                  <button className="bg-secondary hover:bg-green-800 text-black px-6 py-2 rounded-md text-sm">
                    Start Writing
                  </button>
                </NavLink>
                <button className="border border-white text-white bg-transparent hover:bg-green-50 hover:text-primary px-6 py-2 rounded-md text-sm">
                  Explore Posts
                </button>
              </div>
            </div>
            {/* Right side remains empty or used for spacing */}
            <div className="hidden md:block md:w-1/2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
