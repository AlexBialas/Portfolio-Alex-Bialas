import React, { useEffect, useState } from "react";
import Hero from "./components/hero/Hero";
import Skills from "./components/skills/Skills";
import Experience from "./components/experience/Experience";
import Language from "./components/language/Language";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import translations from "../src/components/translations/Translations";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const toggleLanguage = () => {
    setLanguage((prevLang) => {
      if (prevLang === "en") return "de";
      if (prevLang === "de") return "en";
      return "en";
    });
  };

  const currentTranslations = translations[language];

  return (
    <main
      className={`min-h-screen ${
        darkMode
          ? "bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 text-white p-4"
          : "bg-gradient-to-r from-[#f5f0e1] to-[#d9c9a2]"
      }`}
    >
      <Navbar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        toggleLanguage={toggleLanguage}
        translations={currentTranslations}
      />
      <Hero darkMode={darkMode} translations={currentTranslations} />
      <Skills darkMode={darkMode} translations={currentTranslations} />
      <Experience darkMode={darkMode} translations={currentTranslations} />
      <Language darkMode={darkMode} translations={currentTranslations} />
      <Projects darkMode={darkMode} translations={currentTranslations} />
      <Contact darkMode={darkMode} translations={currentTranslations} />
      <Footer darkMode={darkMode} translations={currentTranslations} />{" "}
    </main>
  );
};

export default App;
