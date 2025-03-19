import React, { useEffect } from "react";
import Hero from "./components/hero/Hero";
import Skills from "./components/skills/Skills";
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
    </main>
  );
};

export default App;
