import React from "react";

export default function Contact() {
  return (
    <section id="contact" data-aos="fade-up" data-aos-delay="400">
      <div className="py-8 lg:py-16 mx-auto max-w-screen-md">
        <h1 className="text-4xl font-black text-center text-gray-900 leading-snug mb-6 hover:text-[#a68f5f] transition-all duration-300 ease-in-out transform hover:scale-105">
          Contact Me
        </h1>
        <form action="#" className="space-y-8">
          <div>
            <label
              for="email"
              className="block mb-2 text-xl font-medium text-black"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm  font-bold border border-black-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              placeholder="name@exemple.com"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              for="message"
              className="block mb-2 text-xl font-medium text-black"
            >
              Message
            </label>
            <textarea
              rows="6"
              id="message"
              className="shadow-sm  font-bold border border-black text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              placeholder="Leave a comment ..."
              required
            />
          </div>
          <button className="inline-flex items-center justify-center text-white bg-gradient-to-r from-[#c2b69b] via-[#b09a73] to-[#a68f5f] border-0 py-2 px-6 focus:outline-none hover:bg-gradient-to-l hover:shadow-lg shadow hover:shadow-xl rounded-lg text-lg transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
