import React, { useState, useEffect } from "react";
import ANGULAR from "../skills/ANGULAR.png";
import BOOTSTRAP from "../skills/BOOTSTRAP.png";
import CANVA from "../skills/CANVA.png";
import CSS from "../skills/CSS.png";
import FIGMA from "../skills/FIGMA.png";
import GITHUB from "../skills/GITHUB.png";
import HTML from "../skills/HTML.png";
import JS from "../skills/JS.png";
import MONGODB from "../skills/MONGODB.png";
import MYSQL from "../skills/MYSQL.png";
import NEXT from "../skills/NEXT.png";
import NODE from "../skills/NODE.png";
import REACT from "../skills/REACT.png";
import REDUX from "../skills/REDUX.png";
import SHOPIFY from "../skills/SHOPIFY.png";
import TAILWIND from "../skills/TAILWIND.png";
import TS from "../skills/TS.png";
import VITE from "../skills/VITE.png";
import VUE from "../skills/VUE.png";
import WORDPRESS from "../skills/WORDPRESS.png";
import EXPRESS from "../skills/EXPRESS.png";
import DOCKER from "../skills/docker.png";
import Lern from "../skills/lern.jpg";
import Openmind from "../skills/openmind.jpg";
import Communication from "../skills/communication.jpg";

const skillsData = {
  frontend: [
    { src: HTML, name: "HTML" },
    { src: CSS, name: "CSS" },
    { src: JS, name: "JavaScript" },
    { src: REACT, name: "React" },
    { src: REDUX, name: "Redux" },
    { src: VUE, name: "Vue" },
    { src: ANGULAR, name: "Angular" },
    { src: TS, name: "TypeScript" },
    { src: TAILWIND, name: "Tailwind CSS" },
    { src: BOOTSTRAP, name: "Bootstrap" },
  ],
  backend: [
    { src: NODE, name: "Node.js" },
    { src: NEXT, name: "Next.js" },
    { src: EXPRESS, name: "Express.js" },
  ],
  database: [
    { src: MONGODB, name: "MongoDB" },
    { src: MYSQL, name: "MySQL" },
  ],
  ops: [
    { src: GITHUB, name: "GitHub" },
    { src: FIGMA, name: "Figma" },
    { src: CANVA, name: "Canva" },
    { src: SHOPIFY, name: "Shopify" },
    { src: WORDPRESS, name: "WordPress" },
    { src: VITE, name: "Vite" },
    { src: DOCKER, name: "Docker" },
  ],
};

const SkillCard = ({ skill, darkMode }) => (
  <div
    className={`flex flex-col items-center justify-center w-40 h-40 mb-1 mx-0.5 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-110 hover:shadow-xl ${
      darkMode ? "bg-gray-700" : "bg-[#eaeaea]/20"
    }`}
  >
    <div
      className={`flex items-center justify-center w-24 h-24 mb-2  overflow-hidden ${
        darkMode ? "border-gray-600" : "border-gray-300"
      }`}
    >
      <img
        src={skill.src}
        alt={skill.name}
        className="w-full h-full object-cover"
      />
    </div>
    <p
      className={`font-semibold text-center text-lg ${
        darkMode ? "text-white" : "text-black"
      }`}
    >
      {skill.name}
    </p>
  </div>
);

const SoftSkillCard = ({ title, description, imgSrc, darkMode }) => (
  <div
    className={`rounded-lg shadow-lg m-6 flex flex-col items-center transition-shadow duration-300 hover:shadow-xl h-150 w-250 ${
      darkMode ? "bg-gray-800" : "bg-white/20"
    }`}
  >
    <img
      src={imgSrc}
      alt={title}
      className={`w-120 h-120 mb-9 p-9 rounded-[50px] transition-transform duration-300 transform hover:scale-105 ${
        darkMode ? "" : ""
      }`}
    />
    <h3
      className={`text-lg font-semibold hover:text-[#a68f5f] ${
        darkMode ? "text-white" : "text-black"
      }`}
    >
      {title}
    </h3>
    <p
      className={`text-center ${darkMode ? "text-gray-400" : "text-gray-600"}`}
    >
      {description}
    </p>
  </div>
);

const SoftSkills = ({ darkMode }) => {
  const softSkills = [
    {
      id: 1,
      title: "Non-stop learning",
      description:
        "Technology never stops updating, so those who work with technology must continuously update themselves.",
      imgSrc: Lern,
    },
    {
      id: 2,
      title: "Communicative",
      description:
        "No matter your profession, communication is always essential in any field.",
      imgSrc: Communication,
    },
    {
      id: 3,
      title: "Open-minded",
      description:
        "When working for others, it's important to accept new ideas from clients or team members.",
      imgSrc: Openmind,
    },
  ];

  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkillIndex((prevIndex) => (prevIndex + 1) % softSkills.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const currentSkill = softSkills[currentSkillIndex];

  return (
    <div className="flex justify-center items-center mb-6">
      <SoftSkillCard
        title={currentSkill.title}
        description={currentSkill.description}
        imgSrc={currentSkill.imgSrc}
        darkMode={darkMode}
      />
    </div>
  );
};

const Skills = ({ darkMode }) => {
  return (
    <section
      data-aos="fade-up"
      data-aos-delay="400"
      id="skills"
      className={`relative overflow-hidden flex flex-col ${
        darkMode ? "text-white" : "text-black"
      } body-font`}
    >
      <div className="container flex flex-col items-center px-5 py-24 mx-auto">
        <div className="mb-10 text-center">
          <h1
            className={`text-4xl font-bold leading-snug mb-6 hover:text-[#a68f5f] transition-all duration-300 ease-in-out transform hover:scale-105 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Skills
          </h1>
        </div>

        <div className="mb-10 text-center">
          <h2
            className={`text-2xl font-bold leading-snug mb-6 hover:text-[#a68f5f] transition-all duration-300 ease-in-out transform hover:scale-105 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            My Soft Skills
          </h2>
          <SoftSkills darkMode={darkMode} />
        </div>

        {Object.entries(skillsData).map(([category, skills]) => (
          <div key={category} className="mb-12 w-full">
            <h2
              className={`text-2xl font-bold mb-4 text-center capitalize hover:text-[#a68f5f] ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              {category}
            </h2>
            <div className="overflow-hidden relative w-full max-w-[1000px] mx-auto">
              <div className="whitespace-nowrap flex animate-scroll gap-6 ">
                {skills.map((skill) => (
                  <SkillCard
                    key={skill.name}
                    skill={skill}
                    darkMode={darkMode}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}

        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(-100%);
            }
          }
          .animate-scroll {
            animation: scroll 15s linear infinite;
          }
        `}</style>
      </div>
    </section>
  );
};

export default Skills;
