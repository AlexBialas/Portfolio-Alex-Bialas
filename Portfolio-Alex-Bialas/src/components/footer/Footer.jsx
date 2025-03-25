import React from "react";

const Footer = ({ darkMode }) => {
  const listNavbar = [
    { name: "Home", link: "#" },
    { name: "Skills", link: "#skills" },
    { name: "Experience", link: "#experience" },
    { name: "Language", link: "#language" },
    { name: "Projects", link: "#projects" },
  ];

  return (
    <footer
      className={`${
        darkMode
          ? ""
          : "bg-gradient-to-r from-[#c2b69b] via-[#b09a73] to-[#a68f5f] text-black"
      } shadow`}
    >
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-ms sm:text-center">
          Aleksandra Bialas{" "}
          <a href="#" className="hover:underline">
            2025
          </a>
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium sm:mt-0">
          {listNavbar.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className={`hover:underline transition-colors duration-300 ease-in-out me-4 md:me-6 px-2 py-1 rounded ${
                darkMode ? "hover:text-[#ffffff]" : "hover:text-[#000000]"
              }`}
            >
              {item.name}
            </a>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
