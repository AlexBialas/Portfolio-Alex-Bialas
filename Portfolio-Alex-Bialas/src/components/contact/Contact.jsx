import React from "react";

export default function Contact({ darkMode, translations }) {
  return (
    <section id="contact" data-aos="fade-up" data-aos-delay="400">
      <div
        className={`p-8 lg:py-16 mx-auto max-w-screen-md ${
          darkMode
            ? "text-white hover:text-gray-400"
            : "text-gray-900 hover:text-[#a68f5f]"
        }`}
      >
        <h1
          className={`text-3xl md:text-4xl font-black text-center leading-snug mb-6 ${
            darkMode
              ? "text-white hover:text-gray-400"
              : "text-gray-900 hover:text-[#a68f5f]"
          } transition-all duration-300 ease-in-out transform hover:scale-105`}
        >
          {translations.contact.title}
        </h1>
        <form
          action="https://formsubmit.io/send/aleksandrabialas94@gmail.com"
          method="POST"
          className="space-y-8"
        >
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-lg md:text-xl font-medium"
            >
              {translations.contact.email}
            </label>
            <input
              type="email"
              id="email"
              className={`shadow-sm font-bold border ${
                darkMode ? "border-white text-white" : "border-black text-black"
              } text-sm md:text-base rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 placeholder:text-gray-400`}
              placeholder={translations.contact.emailPlaceholder}
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-lg md:text-xl font-medium"
            >
              {translations.contact.message}
            </label>
            <textarea
              rows="6"
              id="message"
              className={`shadow-sm font-bold border ${
                darkMode ? "border-white text-white" : "border-black text-black"
              } text-sm md:text-base rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 placeholder:text-gray-400`}
              placeholder={translations.contact.messagePlaceholder}
              required
            />
          </div>
          <button
            className={`inline-flex items-center justify-center ${
              darkMode
                ? "bg-gradient-to-r from-gray-800 to-gray-600 shadow-lg text-white p-4"
                : "bg-gradient-to-r from-[#c2b69b] via-[#b09a73] to-[#a68f5f] text-black"
            } border-0 py-2 px-6 focus:outline-none hover:bg-gradient-to-l hover:shadow-lg shadow hover:shadow-xl rounded-lg text-lg md:text-xl transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer`}
          >
            {translations.contact.sendButton}
          </button>
        </form>
      </div>
    </section>
  );
}
