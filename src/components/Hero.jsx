// src/components/Hero.jsx
import React, { useState } from "react";

const Hero = () => {
  const bgUrl =
    "https://www.berlinsbi.com/uploads/sites/2/2021/12/7-very-good-reasons-to-do-master-s-in-finance.jpg";
  const [form, setForm] = useState({ name: "", email: "", type: "" });

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Quote request received!");
  };

  return (
    <section
      className="relative h-screen flex items-center px-4"
      style={{
        backgroundImage: `url(${bgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Two-column layout */}
      <div className="relative z-10 max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 py-20">
        {/* Left: Headline & CTA */}
        <div className="flex flex-col justify-center text-white space-y-6 px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Turn Unused Software into Instant Cash
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-md">
            Upload your spare licenses, get a fair valuation, and receive
            payment within 24 hours.
          </p>
          <button
            className="w-max bg-gradient-to-r from-pink-500 to-purple-500 
                             hover:from-pink-600 hover:to-purple-600 text-white 
                             uppercase font-semibold tracking-wide px-8 py-3 rounded-lg shadow-lg 
                             transition-all duration-200"
          >
            Learn More
          </button>
        </div>

        {/* Right: Transparent Form */}
        <form
          onSubmit={handleSubmit}
          className="p-8 rounded-lg bg-transparent border border-white/50 backdrop-blur-sm"
        >
          <h2 className="text-2xl font-semibold mb-4 text-white">
            Request a Free Quote
          </h2>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            onChange={handleChange}
            className="w-full mb-4 p-3 border border-white placeholder-white text-white bg-white/10 rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            onChange={handleChange}
            className="w-full mb-4 p-3 border border-white placeholder-white text-white bg-white/10 rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <select
            name="type"
            required
            onChange={handleChange}
            className="w-full mb-4 p-3 border border-white placeholder-white text-white bg-white/10 rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
          >
            <option value="" disabled className="text-gray-300">
              Select License Type
            </option>
            <option>Office Suite</option>
            <option>Antivirus</option>
            <option>Design Software</option>
          </select>
          <button
            type="submit"
            className="w-full mt-2 bg-gradient-to-r from-pink-500 to-purple-500 
                       hover:from-pink-600 hover:to-purple-600 text-white 
                       uppercase font-semibold tracking-wide px-4 py-3 rounded-lg 
                       transition-all duration-200"
          >
            Get My Quote
          </button>
        </form>
      </div>
    </section>
  );
};

export default Hero;
