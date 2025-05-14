// src/components/WhyChooseUs.jsx
import React from "react";
import { reasons } from "../data/whyChoose";

const WhyChooseUs = () => (
  <section className="py-20 px-4 bg-green-50">
    <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
      Why Choose Us
    </h2>
    <div className="max-w-6xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {reasons.map((reason, i) => (
        <div
          key={i}
          className="bg-white p-8 rounded-xl shadow-md transform transition 
                     hover:shadow-lg hover:scale-105 flex flex-col items-center text-center"
        >
          {/* Icon in pastel circle */}
          <div className="w-16 h-16 flex items-center justify-center 
                          bg-green-100 rounded-full mb-4">
            <span className="text-2xl">{reason.icon}</span>
          </div>
          {/* Title */}
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            {reason.title}
          </h3>
          {/* Description */}
          <p className="text-gray-600 text-sm">
            {reason.description}
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default WhyChooseUs;
