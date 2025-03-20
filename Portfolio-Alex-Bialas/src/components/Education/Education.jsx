import React from "react";
import JS from "../skills/JS.png";

const Education = () => {
  return (
    <section
      id="education"
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
            Education
          </h1>
          <h2 className="title-font font-bold text-black sm:text-2xl">2025</h2>
          <p className="mb-8 text-black leading-relaxed">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
            eveniet praesentium tenetur, culpa vel excepturi? Id nulla omnis
            dolor praesentium nisi. Mollitia laboriosam, quis eligendi
            perspiciatis nemo est officia maiores.
          </p>
          <h2 className="title-font font-bold text-black sm:text-2xl">2025</h2>
          <p className="mb-8 text-black leading-relaxed">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
            eveniet praesentium tenetur, culpa vel excepturi? Id nulla omnis
            dolor praesentium nisi. Mollitia laboriosam, quis eligendi
            perspiciatis nemo est officia maiores.
          </p>
          <h2 className="title-font font-bold text-black sm:text-2xl">2025</h2>
          <p className="mb-8 text-black leading-relaxed">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
            eveniet praesentium tenetur, culpa vel excepturi? Id nulla omnis
            dolor praesentium nisi. Mollitia laboriosam, quis eligendi
            perspiciatis nemo est officia maiores.
          </p>
          <h2 className="title-font font-bold text-black sm:text-2xl">2025</h2>
          <p className="mb-8 text-black leading-relaxed">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
            eveniet praesentium tenetur, culpa vel excepturi? Id nulla omnis
            dolor praesentium nisi. Mollitia laboriosam, quis eligendi
            perspiciatis nemo est officia maiores.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
