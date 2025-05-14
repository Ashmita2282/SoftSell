// src/components/ChatWidget.jsx
import React, { useState, useEffect, useRef } from "react";

const mockQnA = {
  "How do I sell my license?":
    "Simply upload your unused license, get valuation, and we’ll pay you instantly.",
  "What types of licenses can I sell?":
    "We accept office suites, antivirus, design software, and more. Just pick from the dropdown in the form.",
  "How long does payment take?":
    "Payment is processed within 24 hours of approval.",
};

const ChatWidget = ({ realMode = false }) => {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi there! How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async (text) => {
    setMessages((prev) => [...prev, { from: "user", text }]);
    if (!realMode) {
      const reply = mockQnA[text] || "Sorry, I don’t have an answer for that.";
      setTimeout(() => {
        setMessages((prev) => [...prev, { from: "bot", text: reply }]);
      }, 400);
      return;
    }
    // real-mode omitted for brevity…
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      sendMessage(input.trim());
      setInput("");
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open && (
        <div className="w-80 h-[420px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-2 bg-gradient-to-r from-pink-400 to-purple-500">
            <h4 className="text-white font-semibold">Chat with us</h4>
            <button
              onClick={() => setOpen(false)}
              className="text-white text-lg"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 overflow-auto bg-gray-50">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[75%] mb-2 p-2 rounded-xl break-words ${
                  m.from === "user"
                    ? "self-end bg-pink-100 text-gray-800 rounded-br-none"
                    : "self-start bg-white text-gray-700 rounded-bl-none shadow"
                }`}
              >
                {m.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="px-3 py-2 bg-white flex items-center"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-300"
            />
            <button
              type="submit"
              className="ml-2 text-pink-500 hover:text-pink-600 text-xl"
            >
              ➤
            </button>
          </form>

          {/* Quick Questions */}
          <div className="px-3 py-2 bg-gray-100 flex flex-wrap gap-2">
            {Object.keys(mockQnA).map((q) => (
              <button
                key={q}
                onClick={() => sendMessage(q)}
                className="text-xs bg-pink-200 hover:bg-pink-300 text-gray-800 px-2 py-1 rounded-full transition"
                type="button"
              >
                {q}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Toggle */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="bg-gradient-to-r animate-bounce from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 
                   text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition"
        aria-label="Toggle chat"
      >
        💬
      </button>
    </div>
  );
};

export default ChatWidget;
