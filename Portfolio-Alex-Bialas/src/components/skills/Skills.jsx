import React from "react";
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

const skills = [
  { src: HTML, name: "HTML" },
  { src: CSS, name: "CSS" },
  { src: JS, name: "JAVASCRIPT" },
  { src: REACT, name: "REACT" },
  { src: TAILWIND, name: "TAILWIND CSS" },
  { src: BOOTSTRAP, name: "BOOTSTRAP" },
  { src: ANGULAR, name: "ANGULAR" },
  { src: REDUX, name: "REDUX" },
  { src: NODE, name: "NODE.JS" },
  { src: MONGODB, name: "MONGODB" },
  { src: MYSQL, name: "MYSQL" },
  { src: NEXT, name: "NEXT" },
  { src: GITHUB, name: "GITHUB" },
  { src: FIGMA, name: "FIGMA" },
  { src: CANVA, name: "CANVA" },
  { src: SHOPIFY, name: "SHOPIFY" },
  { src: VITE, name: "VITE" },
  { src: VUE, name: "VUE" },
  { src: WORDPRESS, name: "WORDPRESS" },
  { src: TS, name: "TYPESCRIPT" },
];

const Skills = () => {
  return (
    <section
      data-aos="fade-left"
      data-aos-delay="400"
      id="skills"
      className="relative overflow-hidden flex flex-col text-black body-font"
    >
      <div className="container flex flex-col items-center px-5 py-24 mx-auto">
        <div className="mb-10 text-center">
          <h1 className="sm:text-4xl text-2xl font-bold title-font mb-2">
            Skills
          </h1>
          <p className="leading-relaxed text-base mb-4">
            My experience encompasses both frontend and backend development,
            allowing me to seamlessly navigate between different layers of an
            application.
            <br />
            <br />
            In terms of frontend development, I utilize technologies such as
            HTML, CSS, and JavaScript, along with popular frameworks like React
            and Vue, which enable me to build interactive and responsive user
            interfaces. I also employ tools like Tailwind CSS and Bootstrap to
            ensure an aesthetically pleasing and functional design.
            <br />
            <br />
            On the backend, I have experience working with Node.js and databases
            such as MongoDB and MySQL, which allows me to create robust and
            scalable server-side solutions. I am also skilled in using version
            control tools like GitHub, facilitating collaboration within project
            teams.
            <br />
            <br />
            Additionally, I am familiar with design tools like Figma and Canva,
            which help me communicate effectively with the design team and
            create cohesive and visually appealing projects. My skill set also
            includes working with platforms such as WordPress and Shopify,
            expanding my capabilities in content creation and management on the
            web.
          </p>
        </div>
      </div>

      <div className="overflow-hidden w-full">
        <div className="whitespace-nowrap animate-scroll">
          {skills.map((skill, index) => (
            <div key={index} className="inline-block p-4 mx-2">
              <img
                src={skill.src}
                alt={skill.name}
                className="rounded-full w-15 h-15 object-cover transition-transform transform hover:scale-110 shadow-lg"
              />
            </div>
          ))}
        </div>
      </div>

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
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Skills;
