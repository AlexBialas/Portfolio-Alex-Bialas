import React from "react";
import ExperienceImage from "../experience/experience.jpg";

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative overflow-hidden flex flex-col text-white body-font" // Zmiana na text-white
    >
      <div className="absolute top-[100px] left-64 inset-x-0 flex items-start justify-center"></div>
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div
          data-aos="fade-right"
          data-aos-delay="400"
          className="relative lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 shadow-lg transition-transform duration-500 transform hover:scale-105"
        >
          <img src={ExperienceImage} alt="Experience" className="rounded-lg" />
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="400"
          className="lg:flex-grow md:w-1/2 lg:pl-8 md:pl-8 flex flex-col md:items-start md:text-left items-center text-center"
        >
          <h1 className="text-4xl font-black leading-snug mb-6 hover:text-[#a68f5f] transition-colors duration-300 ease-in-out transform hover:scale-105">
            Experience
          </h1>

          <h2 className="title-font font-bold text-white sm:text-2xl mb-2">
            {" "}
            {/* Zmiana na text-white */}
            Frontend Web Developer Practice
          </h2>
          <p className="mb-8 text-white leading-relaxed p-4 shadow-md rounded-lg">
            {" "}
            {/* Zmiana na text-white */}
            IdoMods | 09/2024 - 12/2024, Remote
            <br />
            • Gained hands-on experience in developing user-friendly web
            applications using modern JavaScript frameworks and libraries.
            <br />
            • Collaborated with designers to create responsive UI components and
            ensure a seamless user experience.
            <br />• Implemented RESTful APIs to connect front-end applications
            with back-end services.
          </p>

          <h2 className="title-font font-bold text-white sm:text-2xl mb-2">
            {" "}
            {/* Zmiana na text-white */}
            Freelance Web Developer
          </h2>
          <p className="mb-8 text-white leading-relaxed p-4 shadow-md rounded-lg">
            {" "}
            {/* Zmiana na text-white */}
            01/2023 - 03/2024, Remote
            <br />
            • Developed responsive frontend websites using the MERN stack, HTML,
            CSS, JavaScript, and Tailwind CSS.
            <br />
            • Worked closely with clients to understand their requirements and
            deliver high-quality projects.
            <br />• Focused on building user-friendly interfaces and optimizing
            web performance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
