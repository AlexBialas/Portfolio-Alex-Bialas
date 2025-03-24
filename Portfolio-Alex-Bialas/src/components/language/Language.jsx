import React from "react";
import engImage from "../language/eng.png";

export default function Language({ isDarkMode }) {
  const languages = [
    { code: "En", name: "English", level: "C1", image: engImage },
    { code: "De", name: "German", level: "C1", image: engImage },
    { code: "Sp", name: "Spanish", level: "A1", image: engImage },
    { code: "PL", name: "Polish", level: "C2", image: engImage },
  ];

  return (
    <section
      id="language"
      data-aos="fade-up"
      data-aos-delay="400"
      className={`flex flex-col items-center justify-center mt-11 h-[300px] ${
        isDarkMode ? "text-white" : "text-blue-950"
      }`}
    >
      <h1
        className={`text-4xl text-center font-black ${
          isDarkMode ? "text-white" : "text-gray-900"
        } leading-snug mb-6 hover:text-[#a68f5f] transition-all duration-300 ease-in-out transform hover:scale-105`}
      >
        Languages
      </h1>
      <div className="grid grid-cols-2 gap-10 md:flex md:gap-20">
        {languages.map((language, index) => (
          <div key={index} className="achievement flex flex-col items-center">
            <div className="relative group">
              <div className="circle w-20 h-20 md:w-16 md:h-16 bg-white rounded-full relative flex items-center justify-center text-lg md:text-xl font-bold mb-6 md:mb-8 shadow-lg">
                <span
                  className={`z-10 ${
                    language.code === "En" ? "group-hover:hidden" : ""
                  }`}
                >
                  {language.code}
                </span>
                <div className="absolute top-0 left-0 right-0 bottom-0 rounded-full bg-gradient-to-b from-[#c2b69b] via-[#b09a73] to-[#a68f5f] shadow-XLs z-0"></div>
              </div>

              {language.code === "En" && (
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <img
                    src={language.image}
                    alt="English Language"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              )}
            </div>
            <span
              className={`text-xl md:text-xl ${
                isDarkMode ? "text-white" : "text-black"
              }`}
            >
              {language.name}
            </span>
            <span
              className={`text-[#9a6e3d] text-lg md:text-xl font-bold ${
                isDarkMode ? "text-white" : ""
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
