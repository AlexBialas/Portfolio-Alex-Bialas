import React, { useEffect } from "react";
import Hero from "./components/hero/Hero";
import Skills from "./components/skills/Skills";
import Education from "./components/Education/Education";
import Experience from "./components/experience/Experience";
import Language from "./components/language/Language";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <main className="bg-gradient-to-r from-[#f5f0e1] to-[#d9c9a2] min-h-screen">
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
