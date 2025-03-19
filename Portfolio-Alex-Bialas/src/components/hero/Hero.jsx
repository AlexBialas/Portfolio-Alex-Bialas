import React from "react";
import Navbar from "../navbar/Navbar";
import hi from "../../assets/hi.jpeg";
import CV from "./CV.pdf";

const Hero = () => {
  const displayText = "Hello, I'm Aleksandra Bialas";

  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[660px] flex flex-col">
      <div className="md:h-[720px] h-[960px] md:w-[640px] w-[880px] right-0 bg-gradient-to-r from-orange-600 via-yellow-500 to-red-400 absolute rounded-full transform rotate-12 -top-20 shadow-[0_0_40px_rgb(255, 165, 0, 0.7)]"></div>
      <Navbar />
      <section
        data-aos="fade-up"
        data-aos-delay="250"
        className="text-white body-font z-10"
      >
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center relative">
            <img
              src={hi}
              data-aos="fade-up"
              data-aos-delay="400"
              alt="Greeting"
              className="absolute top-[350px] left-44 md:top-[-30px] md:left-[450px] transform -translate-x-1/2 -translate-y-1/2 w-20 h-20"
            />
            <h1 className="title-font sm:text-4xl text-4xl mb-4 font-bold text-white">
              {displayText}
            </h1>
            <p className="mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
              distinctio pariatur quis itaque, ipsam incidunt saepe, ex nobis
              perferendis facere corporis, reiciendis modi architecto illum
              harum iusto! Ea, incidunt voluptate.
            </p>
            <div className="flex justify-center">
              <a href={CV} download>
                <button className="inline-flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-700 hover:shadow-[0_0_40px_rgb(255, 165, 0, 0.7)] rounded-full text-lg">
                  Download CV
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
