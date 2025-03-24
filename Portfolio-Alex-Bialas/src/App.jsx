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
    setLanguage((prevLang) => (prevLang === "en" ? "pl" : "en"));
  };

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
      />
      <Hero darkMode={darkMode} />
      <Skills darkMode={darkMode} />
      <Experience darkMode={darkMode} />
      <Language darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <Contact darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </main>
  );
};

export default App;
