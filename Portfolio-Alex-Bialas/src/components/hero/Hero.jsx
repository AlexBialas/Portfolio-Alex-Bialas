import React, { useEffect, useState, useRef } from "react";
import hi from "../../assets/hi.jpeg";
import CV from "./CV.pdf";

const Hero = ({ darkMode }) => {
  const roleText = "Full Stack Developer";
  const fullName = "Aleksandra Bialas";
  const [displayText, setDisplayText] = useState("");
  const indexRef = useRef(0);
  const typingTimeoutRef = useRef(null);

  useEffect(() => {
    const typingSpeed = 100;

    const typeCharacter = () => {
      if (indexRef.current < fullName.length) {
        setDisplayText((prev) => prev + fullName.charAt(indexRef.current));
        indexRef.current++;
        typingTimeoutRef.current = setTimeout(typeCharacter, typingSpeed);
      } else {
        clearTimeout(typingTimeoutRef.current);
      }
    };

    typeCharacter();

    return () => clearTimeout(typingTimeoutRef.current);
  }, []);

  return (
    <div
      className={`relative overflow-hidden h-screen flex items-center justify-center ${
        darkMode ? "" : ""
      }`}
    >
      <section
        data-aos="fade-up"
        data-aos-delay="250"
        className="text-black body-font z-10"
      >
        <div className="container mx-auto flex flex-col md:flex-row items-center h-full">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center relative">
            <h1
              className={`title-font sm:text-5xl text-5xl mb-1 font-bold ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              {displayText}
            </h1>
            <h2
              className={`title-font sm:text-3xl text-3xl mb-4 font-semibold ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              {roleText}
            </h2>
            <p
              className={`mb-4 leading-relaxed text-lg max-w-4xl mx-auto text-left ${
                darkMode ? "text-gray-300" : "text-black"
              }`}
            >
              As a Full Stack Web Developer, I completed an intensive MERN stack
              training at the Digital Career Institute. With a background in
              project management from Merito University, I excel in planning and
              resource allocation. My experience includes creating responsive
              UIs during my internship at IdoMods and delivering high-quality
              freelance projects that meet client needs.
            </p>
            <p
              className={`mb-8 leading-relaxed text-lg max-w-4xl mx-auto text-left ${
                darkMode ? "text-gray-300" : "text-black"
              }`}
            >
              I am fluent in English and German, and I speak a little Spanish,
              just enough to order tacos! 🌮 Outside of coding, I enjoy
              traveling, cooking, and motorcycle racing. <br /> <br /> Feel free
              to explore my portfolio, and{" "}
              <strong>let’s create something amazing together! 🚀</strong>
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
                  <span className="mr-2">📄</span> Download CV
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
                  <span className="mr-2">📬</span> Contact Me
                </button>
              </a>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mt-10 md:mt-0 flex justify-center">
            <img
              src={hi}
              alt="Portrait of Aleksandra Bialas"
              className="object-cover object-center rounded-full w-96 h-96 shadow-lg transition-transform duration-500 hover:scale-110"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
