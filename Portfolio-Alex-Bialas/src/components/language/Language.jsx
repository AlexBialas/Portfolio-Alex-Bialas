import React from "react";
import engImage from "../language/eng.png";
import deImage from "../language/de.png";
import spImage from "../language/spain.png";
import plImage from "../language/pl.png";

export default function Language({ darkMode }) {
  const languages = [
    { code: "En", name: "English", level: "C1", image: engImage },
    { code: "De", name: "German", level: "C1", image: deImage },
    { code: "Sp", name: "Spanish", level: "A1", image: spImage },
    { code: "PL", name: "Polish", level: "C2", image: plImage },
  ];

  return (
    <section
      id="language"
      data-aos="fade-up"
      data-aos-delay="400"
      className={`flex flex-col items-center justify-center mt-11 h-[300px] ${
        darkMode ? "text-white" : "text-blue-950"
      }`}
    >
      <h1
        className={`text-4xl text-center font-black ${
          darkMode
            ? "text-white hover:text-gray-400"
            : "text-gray-900 hover:text-[#a68f5f]"
        } leading-snug mb-6 transition-all duration-300 ease-in-out transform hover:scale-105`}
      >
        Languages
      </h1>
      <div className="grid grid-cols-2 gap-10 md:flex md:gap-20">
        {languages.map((language, index) => (
          <div key={index} className="achievement flex flex-col items-center">
            <div className="relative group">
              <div
                className={`w-20 h-20 md:w-16 md:h-16 rounded-full flex items-center justify-center text-lg md:text-xl font-bold mb-6 md:mb-8 shadow-lg ${
                  darkMode
                    ? "bg-gray-700"
                    : "bg-gradient-to-b from-[#c2b69b] via-[#b09a73] to-[#a68f5f]"
                }`}
              >
                <span
                  className={`z-10 transition-opacity duration-300 ${
                    darkMode ? "text-gray-300" : "text-black"
                  } group-hover:opacity-0`}
                >
                  {language.code}
                </span>
                <div
                  className={`absolute rounded-full ${
                    darkMode
                      ? "bg-gradient-to-b from-gray-600 via-gray-500 to-gray-400"
                      : "bg-gradient-to-b from-[#c2b69b] via-[#b09a73] to-[#a68f5f]"
                  } shadow-2xl z-0`}
                ></div>
              </div>

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-[-16%]">
                <img
                  src={language.image}
                  alt={`${language.name} Language`}
                  className="w-20 h-16 rounded-full"
                />
              </div>
            </div>
            <span
              className={`text-xl md:text-xl ${
                darkMode ? "text-gray-300" : "text-black"
              }`}
            >
              {language.name}
            </span>
            <span
              className={`text-[#9a6e3d] text-lg md:text-xl font-bold ${
                darkMode ? "text-gray-400" : ""
              }`}
            >
              {language.level}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
