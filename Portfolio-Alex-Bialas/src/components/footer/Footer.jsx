import React from "react";

const Footer = ({ darkMode, translations }) => {
  const listNavbar = [
    { name: translations.footer.home, link: "#" },
    { name: translations.footer.skills, link: "#skills" },
    { name: translations.footer.experience, link: "#experience" },
    { name: translations.footer.language, link: "#language" },
    { name: translations.footer.projects, link: "#projects" },
  ];

  return (
    <footer
      className={`${
        darkMode
          ? "bg-gray-800 text-white"
          : "bg-gradient-to-r from-[#c2b69b] via-[#b09a73] to-[#a68f5f] text-black"
      } shadow`}
    >
      <div className="w-full mx-auto max-w-screen-xl p-4 flex flex-col md:flex-row items-center justify-between">
        <span className="text-sm sm:text-center mb-4 md:mb-0">
          {translations.footer.copyright}{" "}
          <a href="#" className="hover:underline">
            20255
          </a>
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium sm:mt-0">
          {listNavbar.map((item, index) => (
            <li key={index} className="me-4 md:me-6">
              <a
                href={item.link}
                className={`hover:underline transition-colors duration-300 ease-in-out px-2 py-1 rounded ${
                  darkMode ? "hover:text-[#ffffff]" : "hover:text-[#000000]"
                }`}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
