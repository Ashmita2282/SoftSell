// src/components/Testimonials.jsx
import React, { useState } from "react";
import { testimonials } from "../data/testimonials";

const Testimonials = () => {
  const defaultImg =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE08cgq_TMlmkwQgOwElaub96ah-_WHjBT2w&s";
  const perPage = 3;
  const pages = Math.ceil(testimonials.length / perPage);

  const [page, setPage] = useState(0);

  // Compute the testimonials to display on this page
  const visible = testimonials.slice(
    page * perPage,
    page * perPage + perPage
  );

  return (
    <section className="py-20 px-4 bg-purple-50">
      <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
        What Our Customers Say
      </h2>
      <div className="max-w-5xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((t, i) => (
          <div
            key={i}
            className="bg-white p-8 rounded-xl shadow-md transform transition 
                       hover:shadow-lg hover:scale-105 flex flex-col items-center text-center"
          >
            <img
              src={t.image || defaultImg}
              alt={t.name}
              className="w-24 h-24 rounded-full mb-4 object-cover"
            />
            <p className="italic text-gray-700 mb-6">“{t.message}”</p>
            <p className="font-semibold text-gray-800">{t.name}</p>
            <p className="text-sm text-gray-600">
              {t.role}, {t.company}
            </p>
          </div>
        ))}
      </div>

      {/* Dot Navigation */}
      <div className="flex justify-center mt-8 space-x-2">
        {Array.from({ length: pages }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setPage(idx)}
            className={`
              w-3 h-3 rounded-full transition-colors 
              ${page === idx ? "bg-purple-700" : "bg-purple-300 hover:bg-purple-400"}
            `}
            aria-label={`Go to testimonials page ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
