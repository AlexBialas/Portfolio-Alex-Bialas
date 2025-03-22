import React from "react";
import { FaLinkedin, FaGithub, FaMoon, FaGlobe } from "react-icons/fa";

export default function Navbar({ darkMode, toggleDarkMode, toggleLanguage }) {
  const listNavbar = [
    { name: "Home", link: "#home" },
    { name: "Skills", link: "#skills" },
    { name: "Experience", link: "#experience" },
    { name: "Language", link: "#language" },
    { name: "Projects", link: "#projects" },
  ];

  return (
    <header data-aos="fade-up" className="body-font z-10">
      <div
        className={`container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ${
          darkMode ? "text-white" : "text-black"
        }`}
      >
        <a className="flex title-font font-medium items-center mb-4 md:mb-0">
          <span className="ml-3 text-3xl font-bold">Portfolio</span>
        </a>
        <nav className="md:ml-auto text-base md:mr-auto flex flex-wrap items-center justify-center">
          {listNavbar.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="mr-5 text-xl hover:bg-gray-200 hover:bg-gradient-to-r from-[#c2b69b] via-[#b09a73] to-[#a68f5f] transition duration-300 p-2 rounded-lg shadow hover:shadow-xl"
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <a
            href="https://www.linkedin.com/in/aleksandra-bialas-4a1037135/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition-transform transform hover:scale-110"
          >
            <FaLinkedin size={30} className="text-black" />
          </a>
          <a
            href="https://github.com/AlexBialas"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-transform transform hover:scale-110"
          >
            <FaGithub size={30} className="text-black" />
          </a>
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-full transition duration-300 ${
              darkMode ? "bg-gray-700" : "bg-gray-300"
            }`}
            aria-label="Toggle Dark Mode"
          >
            <FaMoon
              size={20}
              className={darkMode ? "text-white" : "text-black"}
            />
          </button>
          <button
            onClick={toggleLanguage}
            className={`p-2 rounded-full transition duration-300 ${
              darkMode ? "bg-gray-700" : "bg-gray-300"
            }`}
            aria-label="Toggle Language"
          >
            <FaGlobe
              size={20}
              className={darkMode ? "text-white" : "text-black"}
            />
          </button>
        </div>
      </div>
    </header>
  );
}
