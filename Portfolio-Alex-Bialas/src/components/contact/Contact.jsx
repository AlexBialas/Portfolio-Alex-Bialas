import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact({ darkMode, translations }) {
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xeoklkjo", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="px-4 py-12" data-aos="fade-up">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`max-w-2xl mx-auto ${
          darkMode ? "text-white" : "text-gray-900"
        }`}
      >
        <h1 className="text-4xl font-bold text-center mb-8 hover:scale-105 transition">
          {translations.contact.title}
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-2 font-medium">
              {translations.contact.name}
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className={`w-full p-3 rounded-lg border ${
                darkMode
                  ? "bg-black border-white text-white"
                  : "bg-white border-gray-300 text-black"
              } focus:outline-none focus:ring-2 transition`}
              placeholder={translations.contact.namePlaceholder}
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 font-medium">
              {translations.contact.email}
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className={`w-full p-3 rounded-lg border ${
                darkMode
                  ? "bg-black border-white text-white"
                  : "bg-white border-gray-300 text-black"
              } focus:outline-none focus:ring-2 transition`}
              placeholder={translations.contact.emailPlaceholder}
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 font-medium">
              {translations.contact.message}
            </label>
            <textarea
              name="message"
              id="message"
              rows="5"
              required
              className={`w-full p-3 rounded-lg border ${
                darkMode
                  ? "bg-black border-white text-white"
                  : "bg-white border-gray-300 text-black"
              } focus:outline-none focus:ring-2 transition`}
              placeholder={translations.contact.messagePlaceholder}
            ></textarea>
          </div>

          <button
            className={`inline-flex items-center justify-center ${
              darkMode
                ? "bg-gradient-to-r from-gray-800 to-gray-600 shadow-lg text-white p-4"
                : "bg-gradient-to-r from-[#c2b69b] via-[#b09a73] to-[#a68f5f] text-black"
            } border-0 py-2 px-6 focus:outline-none hover:bg-gradient-to-l hover:shadow-lg shadow hover:shadow-xl rounded-lg text-lg transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer`}
          >
            {loading ? translations.contact.sending : translations.contact.send}
          </button>

          <AnimatePresence>
            {status === "success" && (
              <motion.p
                className="text-green-500 mt-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                {translations.contact.success}
              </motion.p>
            )}
            {status === "error" && (
              <motion.p
                className="text-red-500 mt-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                {translations.contact.error}
              </motion.p>
            )}
          </AnimatePresence>
        </form>
      </motion.div>
    </section>
  );
}
