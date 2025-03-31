import React, { useEffect, useState } from "react";
import hi from "../../assets/hi.jpeg";
import CV from "./CV.pdf";

const Hero = ({ darkMode, translations }) => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 250);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`relative overflow-hidden h-full flex items-center justify-center pt-45 pb-45 ${
        darkMode ? "" : ""
      }`}
    >
      <section data-aos="fade-up" className="text-black body-font z-10 ">
        <div className="container mx-auto flex flex-col md:flex-row items-center h-full">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center relative">
            <h1
              className={`title-font sm:text-5xl text-5xl mb-1 font-bold ${
                darkMode ? "text-white" : "text-black"
              } transition-transform duration-500 ${
                fadeIn ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            >
              {translations.hero.fullName}
            </h1>
            <h2
              className={`title-font sm:text-3xl text-3xl mb-4 font-semibold ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              {translations.hero.roleText}
            </h2>
            <p
              className={`mb-4 leading-relaxed text-lg max-w-4xl mx-auto text-left pl-10 pr-10 ${
                darkMode ? "text-gray-300" : "text-black"
              }`}
            >
              {translations.hero.introduction}
            </p>
            <p
              className={`mb-8 leading-relaxed text-lg max-w-4xl mx-auto text-left pl-10 pr-10 ${
                darkMode ? "text-gray-300" : "text-black"
              }`}
            >
              {translations.hero.hobbies}
            </p>
            <div className="flex justify-center space-x-4">
              <a href={CV} download>
                <button
                  className={`inline-flex items-center justify-center ${
                    darkMode
                      ? "bg-gradient-to-r from-gray-800 to-gray-600 shadow-lg text-white p-4"
                      : "bg-gradient-to-r from-[#c2b69b] via-[#b09a73] to-[#a68f5f] text-black"
                  } border-0 py-2 px-6 focus:outline-none hover:bg-gradient-to-l hover:shadow-lg shadow hover:shadow-xl rounded-lg text-lg transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer`}
                >
                  <span className="mr-2">📄</span>{" "}
                  {translations.hero.downloadCV}
                </button>
              </a>
              <a href="#contact">
                <button
                  className={`inline-flex items-center justify-center ${
                    darkMode
                      ? "bg-gradient-to-r from-gray-800 to-gray-600 shadow-lg text-white p-4"
                      : "bg-gradient-to-r from-[#c2b69b] via-[#b09a73] to-[#a68f5f]"
                  } border-0 py-2 px-6 focus:outline-none hover:bg-gradient-to-l hover:shadow-lg shadow hover:shadow-xl rounded-lg text-lg transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer`}
                >
                  <span className="mr-2">📬</span>
                  {translations.hero.contactMe}
                </button>
              </a>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mt-10 md:mt-0 flex justify-center">
            <div className="relative overflow-hidden rounded-full w-96 h-96 p-1 border-8 animate-border-gradient">
              <style>
                {` 
                  @keyframes border-gradient { 
                    0% { border-color: #d6c6b8; } 
                    50% { border-color: #f5f5f5; } 
                    100% { border-color: #d6c6b8; } 
                  } 
                  .animate-border-gradient { animation: border-gradient 6s ease-in-out infinite; } 
                `}
              </style>
              <img
                src={hi}
                alt="Portrait of Aleksandra Bialas"
                className="object-cover object-center rounded-full w-full h-full shadow-lg"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-4 ml-213">
          <p
            className={`text-lg font-semibold ${
              darkMode ? "text-white" : "text-black"
            } animate-bounce`}
          >
            abialas.fullstack@gmail.com
          </p>
        </div>
      </section>
    </div>
  );
};

export default Hero;
