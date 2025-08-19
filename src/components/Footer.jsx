import React from "react";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary text-[#D1D5DB]">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h2 className="text-white text-[24px] leading-8 font-[pacifico] mb-2">
              BlogSpace
            </h2>
            <p className="text-sm mb-4">
              A platform where stories and ideas find their voice.
            </p>
            <div className="flex space-x-4 text-white mt-4">
              <a href="#" aria-label="Twitter">
                <FaTwitter className="hover:text-gray-300" />
              </a>
              <a href="#" aria-label="Facebook">
                <FaFacebookF className="hover:text-gray-300" />
              </a>
              <a href="#" aria-label="Instagram">
                <FaInstagram className="hover:text-gray-300" />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-white font-semibold mb-4">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  Latest Posts
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Popular Posts
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Categories
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Authors
                </a>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-white font-semibold mb-4">Community</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  Write for Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Guidelines
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Newsletter
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-white/20 mt-10 pt-6 text-center text-sm text-[#F3F4F6]">
          © BlogSpace. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
