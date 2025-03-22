import React from "react";
import hi from "../../assets/hi.jpeg";
import CV from "./CV.pdf";

const Hero = () => {
  const displayText = "Hello! I'm Alex – a full-time code magician! 🪄💻";

  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[660px] flex flex-col ">
      <div className="md:h-[720px] h-[960px] md:w-[640px] w-[880px] right-0 bg-gradient-to-r from-[#c2b69b] via-[#b09a73] to-[#a68f5f] absolute rounded-full transform rotate-12 -top-20 shadow-[0_0_40px_rgb(150, 120, 80, 0.7)]"></div>

      <section
        data-aos="fade-up"
        data-aos-delay="250"
        className="text-black body-font z-10"
      >
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center relative">
            <h1 className="title-font sm:text-4xl text-4xl mb-4 font-bold text-black">
              {displayText}
            </h1>
            <p className="mb-4 leading-relaxed text-black text-lg max-w-2xl mx-auto text-left">
              As a Full Stack Web Developer, I completed an intensive MERN stack
              training at the Digital Career Institute. With a background in
              project management from Merito University, I excel in planning and
              resource allocation. My experience includes creating responsive
              UIs during my internship at IdoMods and delivering high-quality
              freelance projects that meet client needs.
            </p>
            <p className="mb-8 leading-relaxed text-black text-lg max-w-2xl mx-auto text-left">
              I am fluent in English and German, and I speak a little Spanish,
              just enough to order tacos! 🌮 Outside of coding, I enjoy
              traveling, cooking, and motorcycle racing. <br />
              <br />
              Feel free to explore my portfolio, and{" "}
              <strong>let’s create something amazing together! 🚀 </strong>
            </p>
            <div className="flex justify-center space-x-4">
              <a href={CV} download>
                <button className="inline-flex items-center justify-center text-white bg-gradient-to-r from-[#c2b69b] via-[#b09a73] to-[#a68f5f] border-0 py-2 px-6 focus:outline-none hover:bg-gradient-to-l hover:shadow-lg shadow hover:shadow-xl rounded-lg text-lg transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
                  <span className="mr-2">📄</span>
                  Download CV
                </button>
              </a>
              <a href="#contact">
                <button className="inline-flex items-center justify-center text-white bg-gradient-to-r from-[#c2b69b] via-[#b09a73] to-[#a68f5f] border-0 py-2 px-6 focus:outline-none hover:bg-gradient-to-l hover:shadow-lg shadow hover:shadow-xl rounded-lg text-lg transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
                  <span className="mr-2">📬</span>
                  Contact Me
                </button>
              </a>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              src={hi}
              alt="hero"
              className="object-cover object-center rounded-full w-80 h-80"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
