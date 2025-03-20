import React from "react";

export default function Language() {
  const languages = [
    { code: "En", name: "English", level: "C1" },
    { code: "De", name: "German", level: "C1" },
    { code: "Sp", name: "Spanish", level: "A1" },
    { code: "PL", name: "Polish", level: "C2" },
  ];

  return (
    <section
      id="language"
      data-aos="fade-up"
      data-aos-delay="400"
      className="flex flex-col items-center justify-center mt-11 h-[300px] text-blue-950"
    >
      <h1 className="text-3xl font-bold mb-6">Languages</h1>

      <div className="grid grid-cols-2 gap-10 md:flex md:gap-20">
        {languages.map((language, index) => (
          <div key={index} className="achievement flex flex-col items-center">
            <div className="circle w-20 h-20 md:w-16 md:h-16 bg-white rounded-full relative flex items-center justify-center text-lg md:text-xl font-bold mb-6 md:mb-8 shadow-lg">
              <span className="z-10">{language.code}</span>
              <div className="absolute top-[-6px] left-[-6px] right-[-6px] bottom-[-6px] md:top-[-8px] md:left-[-8px] md:right-[-8px] md:bottom-[-8px] rounded-full bg-gradient-to-b from-[#ff9743] to-[#ffe460] shadow-[0_0_20px_rgba(255,165,0,0.7)] z-0"></div>
            </div>
            <span className="text-xl md:text-xl text-black">
              {language.name}
            </span>
            <span className="text-[#ffa600] text-lg md:text-xl font-bold">
              {language.level}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
