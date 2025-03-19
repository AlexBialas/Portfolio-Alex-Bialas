import React from "react";

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
              className="mr-5 hover:text-yellow-300 hover:bg-beige transition duration-300"
            >
              {item.name}
            </a>
          ))}
        </nav>
        <button className="inline-flex items-center py-1 px-7 focus:outline-none text-base text-black mt-4 md:mt-0 border border-black hover:border-yellow-300 hover:bg-beige transition duration-300">
          <a href="#contact">Contact Me</a>
        </button>
      </div>
    </header>
  );
}
