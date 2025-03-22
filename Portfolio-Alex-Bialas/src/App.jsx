import React, { useEffect, useState } from "react";
import Hero from "./components/hero/Hero";
import Skills from "./components/skills/Skills";
import Education from "./components/Education/Education";
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
          ? "bg-gray-800 text-white"
          : "bg-gradient-to-r from-[#f5f0e1] to-[#d9c9a2]"
      }`}
    >
      <Navbar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        toggleLanguage={toggleLanguage}
      />
      <Hero />
      <Skills />
      <Education />
      <Experience />
      <Language />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
