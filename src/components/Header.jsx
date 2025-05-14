// src/components/Header.jsx
import React, { useState } from "react";
import logo from "../assets/logo.png";
import ContactForm from "./ContactForm";

export default function Header() {
  const [open, setOpen] = useState(false);
const [showModal, setShowModal] = useState(false);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // You could send data here...
    setShowModal(true);
  };
  const links = [
    { id: "home", label: "Home" },
    { id: "how-it-works", label: "How It Works" },
    { id: "why-us", label: "Why Us" },
    { id: "testimonials", label: "Testimonials" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <>
      <header className="fixed w-full top-0 bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <img src={logo} alt="SoftSell Logo" className="w-32 h-auto" />

          <nav className="hidden lg:flex space-x-8">
            {links.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className="text-gray-800 font-medium uppercase tracking-wide text-sm
                           pb-1 border-b-2 border-transparent
                           hover:text-pink-500 hover:border-pink-500
                           transition-colors duration-300"
              >
                {label}
              </a>
            ))}
          </nav>

          <button
            onClick={() => setShowFormModal(true)}
            className="hidden lg:inline-block bg-gradient-to-r from-pink-500 to-purple-500
                       hover:from-pink-600 hover:to-purple-600 text-white uppercase text-sm
                       font-semibold px-5 py-2 rounded-lg shadow-lg transition-all duration-200"
          >
            Get a Quote
          </button>

          <button
            className="lg:hidden p-2 text-gray-800"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>

        {open && (
          <div className="lg:hidden bg-white shadow-inner">
            <nav className="flex flex-col space-y-4 px-6 py-6">
              {links.map(({ id, label }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  className="text-gray-800 font-medium uppercase tracking-wide text-base
                             pb-1 border-b-2 border-transparent
                             hover:text-pink-500 hover:border-pink-500
                             transition-colors duration-300"
                >
                  {label}
                </a>
              ))}
              <button
                onClick={() => {
                  setShowFormModal(true);
                  setOpen(false);
                }}
                className="mt-4 bg-gradient-to-r from-pink-500 to-purple-500
                           hover:from-pink-600 hover:to-purple-600 text-white uppercase text-sm
                           font-semibold px-5 py-2 rounded-lg shadow-lg transition-all duration-200"
              >
                Get a Quote
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Modal Overlay */}
      {showModal && (
        <div className="fixed inset-0 bg-white/30 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-8 max-w-sm text-center">
            <h3 className="text-2xl font-bold mb-4 text-green-600">
              Thank You!
            </h3>
            <p className="text-gray-600 mb-6">
              Your message has been successfully submitted.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="bg-gradient-to-r from-pink-500 to-purple-500
                   hover:from-pink-600 hover:to-purple-600 text-white
                   uppercase text-sm font-semibold px-6 py-2 rounded-lg
                   shadow transition-all duration-200"
            >
              Back
            </button>
          </div>
        </div>
      )}
    </>
  );
}
