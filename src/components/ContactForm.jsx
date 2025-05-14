// src/components/ContactForm.jsx
import React, { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    type: "",
    message: "",
  });
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // You could send data here...
    setShowModal(true);
  };

  const imgUrl =
    "https://profit.pakistantoday.com.pk/wp-content/uploads/2024/01/housing.png";

  return (
    <section className="py-20 px-4 bg-gray-100 relative">
      <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">
        Get in Touch
      </h2>
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden flex flex-col lg:flex-row">
        {/* Left: Image */}
        <div className="lg:flex-1 h-64 lg:h-auto">
          <img
            src={imgUrl}
            alt="Contact illustration"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right: Form */}
        <div className="lg:flex-1 p-8 lg:p-12 bg-gradient-to-br from-blue-50 to-purple-50">
          <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              onChange={handleChange}
              className="w-full px-5 py-3 border border-gray-200 rounded-lg shadow-sm 
                         focus:outline-none focus:ring-2 focus:ring-blue-300 text-gray-700"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              onChange={handleChange}
              className="w-full px-5 py-3 border border-gray-200 rounded-lg shadow-sm 
                         focus:outline-none focus:ring-2 focus:ring-blue-300 text-gray-700"
            />
            <input
              type="text"
              name="company"
              placeholder="Company"
              required
              onChange={handleChange}
              className="w-full px-5 py-3 border border-gray-200 rounded-lg shadow-sm 
                         focus:outline-none focus:ring-2 focus:ring-blue-300 text-gray-700"
            />
            <select
              name="type"
              required
              onChange={handleChange}
              className="w-full px-5 py-3 border border-gray-200 rounded-lg shadow-sm 
                         focus:outline-none focus:ring-2 focus:ring-blue-300 text-gray-700"
            >
              <option value="" disabled>
                Select License Type
              </option>
              <option>Office Suite</option>
              <option>Antivirus</option>
              <option>Design Software</option>
            </select>
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              required
              onChange={handleChange}
              className="w-full px-5 py-3 border border-gray-200 rounded-lg shadow-sm 
                         focus:outline-none focus:ring-2 focus:ring-blue-300 text-gray-700"
            />
            <button
              type="submit"
              className="w-full mt-4 bg-gradient-to-r from-pink-500 to-purple-500
                         hover:from-pink-600 hover:to-purple-600 text-white
                         uppercase font-semibold tracking-wide px-6 py-3 rounded-lg
                         shadow-lg transition-all duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

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
    </section>
  );
};

export default ContactForm;
