import React, { useEffect } from "react";
import Hero from "./components/hero/Hero";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <main className="bg-[#0d182e]">
      <Hero />
    </main>
  );
};

export default App;
