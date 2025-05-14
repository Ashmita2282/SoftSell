// src/components/HowItWorks.jsx
import React from "react";
import { steps } from "../data/steps";

const HowItWorks = () => (
  <section className="py-20 px-4 bg-pink-50">
    <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
      How It Works
    </h2>
    <div className="max-w-5xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-3">
      {steps.map((step, i) => (
        <div
          key={i}
          className="bg-white p-8 rounded-xl shadow-md transform transition 
                     hover:shadow-lg hover:scale-105"
        >
          {/* Icon in pastel circle */}
          <div className="w-16 h-16 flex items-center justify-center 
                          bg-purple-100 rounded-full mb-4 mx-auto">
            <span className="text-2xl">{step.icon}</span>
          </div>
          {/* Step Title */}
          <h3 className="text-xl font-semibold text-gray-700 mb-2 text-center">
            {step.title}
          </h3>
          {/* Step Description */}
          <p className="text-gray-600 text-center">{step.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default HowItWorks;
