// src/components/Footer.jsx
import React from "react";
import logo from "../assets/logo.png";

const Footer = () => (
  <footer className="bg-gray-800 text-gray-200 pt-12 pb-6 px-4">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

      {/* 1. Logo & Tagline */}
      <div className="flex flex-col items-start space-y-4">
        <img src={logo} alt="SoftSell Logo" className="w-32 filter drop-shadow-lg" />
        <p className="text-sm">
          Turn your unused software licenses into instant value—fast, secure, and reliable.
        </p>
      </div>

      {/* 2. Quick Links */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
        <ul className="space-y-2 text-sm">
          {["Home", "How It Works", "Why Us", "Testimonials", "Contact"].map((label) => (
            <li key={label}>
              <a
                href={`#${label.toLowerCase().replace(/ /g, "-")}`}
                className="
                  relative hover:text-white transition-colors duration-300
                  before:absolute before:-bottom-0.5 before:left-0 before:w-0 before:h-0.5
                  before:bg-pink-400 before:transition-[width] before:duration-500
                  hover:before:w-full
                "
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* 3. Contact Info */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
        <ul className="text-sm space-y-2">
          <li>📧 support@softsell.com</li>
          <li>📞 +1 (555) 123-4567</li>
          <li>📍 123 Software Ave, Suite 100</li>
        </ul>
      </div>

      {/* 4. Newsletter */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
        <p className="text-sm mb-3">
          Get the latest updates and offers.
        </p>
        <form className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-2">
          <input
            type="email"
            placeholder="Your email"
            required
            className="
              w-full sm:flex-1 px-4 py-2 rounded-lg border border-gray-600 
              bg-gray-700 placeholder-gray-400 text-gray-200 
              focus:outline-none focus:ring-2 focus:ring-pink-400 transition
            "
          />
          <button
            type="submit"
            className="
              px-4 py-2 bg-pink-500 hover:bg-pink-400 text-white 
              rounded-lg transition-colors duration-300
            "
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>

    {/* Divider */}
    <div className="border-t border-gray-700 mt-8 pt-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
        {/* Social Icons */}
        <div className="flex space-x-4 mb-4 md:mb-0">
          {[
            { label: "Twitter", emoji: "🐦" },
            { label: "Facebook", emoji: "💙" },
            { label: "Instagram", emoji: "📸" },
          ].map(({ label, emoji }) => (
            <a
              key={label}
              href="#"
              className="
                flex items-center space-x-1 hover:text-white transition-colors duration-300
                relative before:absolute before:-bottom-0.5 before:left-0 before:w-0 before:h-0.5
                before:bg-pink-400 before:transition-[width] before:duration-500
                hover:before:w-full
              "
            >
              <span>{emoji}</span>
              <span className="text-xs">{label}</span>
            </a>
          ))}
        </div>
        {/* Copyright */}
        <p>© 2025 SoftSell. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
