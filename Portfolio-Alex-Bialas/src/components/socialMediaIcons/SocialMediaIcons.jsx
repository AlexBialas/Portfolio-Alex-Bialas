import React, { useEffect, useState } from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const SocialMediaIcons = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setPosition({ x: 20, y: window.scrollY + 100 }); // Zmiana pozycji Y w zależności od przewijania
    };

    window.addEventListener("scroll", handleScroll);

    // Usunięcie zdarzenia przy odmontowaniu komponentu
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: position.y,
        left: position.x,
        transition: "transform 0.1s ease",
      }}
    >
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebook size={30} className="text-blue-600" />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <FaTwitter size={30} className="text-blue-400" />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={30} className="text-blue-700" />
      </a>
      <a href="https://github.com" target="_blank" rel="noopener noreferrer">
        <FaGithub size={30} className="text-black" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
