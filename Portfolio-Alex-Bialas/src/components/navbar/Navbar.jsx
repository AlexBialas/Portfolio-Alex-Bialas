import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Navbar() {
  const listNavbar = [
    { name: "Home", link: "#home" },
    { name: "Skills", link: "#skills" },
    { name: "Experience", link: "#experience" },
    { name: "Language", link: "#language" },
    { name: "Projects", link: "#projects" },
  ];

  return (
    <header data-aos="fade-up" className="text-black body-font z-10 bg-beige">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-black mb-4 md:mb-0">
          <span className="ml-3 text-3xl font-bold">Portfolio</span>
        </a>
        <nav className="md:ml-auto text-black text-base md:mr-auto flex flex-wrap items-center justify-center">
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

        <div className="flex space-x-4">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition-transform transform hover:scale-110"
          >
            <FaLinkedin size={30} className="text-black" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-transform transform hover:scale-110"
          >
            <FaGithub size={30} className="text-black" />
          </a>
        </div>
      </div>
    </header>
  );
}
