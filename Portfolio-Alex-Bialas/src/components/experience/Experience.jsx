import React from "react";
import JS from "../skills/JS.png";

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative overflow-hidden flex flex-col text-black body-font"
    >
      <div className="absolute top-[100px] left-64 inset-x-0 flex items-start justify-center">
        <div className="h-96 w-96 bg-gradient-to-br from-[#ff910a] blur-2xl invisible opacity-40 rounded-full"></div>
        <div className="h-96 w-96 bg-gradient-to-r from-[#ff910a] blur-2xl opacity-40 rounded-full"></div>
      </div>
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div
          data-aos="fade-right"
          data-aos-delay="400"
          className="relative lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0"
        >
          <div className="md:h-[450px] h-[400px] md:w-[300px] w-[300px] md:right-36 bg-gradient-to-r from-orange-600 via-yellow-500 to-red-400 absolute rounded-md transform rotate-3 -top-8 shadow-[0_0_40px_rgba(225,165,0,0.7)] z-0"></div>
        </div>

        <div
          data-aos="fade-left"
          data-aos-delay="400"
          className="lg:flex-grow md:w-1/2 lg:pl-8 md:pl-8 flex flex-col md:items-start md:text-left items-center text-center"
        >
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-orange-500">
            Experience
          </h1>

          <h2 className="title-font font-bold text-black sm:text-2xl">
            Frontend Web Developer Practice
          </h2>
          <p className="mb-8 text-black leading-relaxed">
            IdoMods | 09/2024 - 12/2024, Remote
            <br />
            • Gained hands-on experience in developing user-friendly web
            applications using modern JavaScript frameworks and libraries.
            <br />• Collaborated with designers to create responsive UI
            components and ensure a seamless user experience.
            <br />• Implemented RESTful APIs to connect front-end applications
            with back-end services.
          </p>

          <h2 className="title-font font-bold text-black sm:text-2xl">
            Freelance Web Developer
          </h2>
          <p className="mb-8 text-black leading-relaxed">
            01/2023 - 03/2024, Remote
            <br />
            • Developed responsive frontend websites using the MERN stack, HTML,
            CSS, JavaScript, and Tailwind CSS.
            <br />• Worked closely with clients to understand their requirements
            and deliver high-quality projects.
            <br />• Focused on building user-friendly interfaces and optimizing
            web performance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
