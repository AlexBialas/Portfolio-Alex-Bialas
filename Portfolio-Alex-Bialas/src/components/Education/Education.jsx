import React from "react";

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
          <div className="mb-6">
            <h2 className="title-font font-bold text-black sm:text-2xl">
              Full Stack Web Developer
            </h2>
            <h3 className="text-sm text-gray-600">Digital Career Institute</h3>
            <p className="mb-2 text-gray-700">
              03/2024 - 06/2025, Berlin, Germany
            </p>
            <p className="mb-2 text-black leading-relaxed">
              Full-time training with a focus on MERN stack technologies.
              <br />
              Development of several small and large final projects.
            </p>
            <p className="mb-8 text-black leading-relaxed">
              This program emphasizes hands-on experience and real-world
              applications. I have gained skills in both front-end and back-end
              development, preparing me for a career in web development.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="title-font font-bold text-black sm:text-2xl">
              Project Manager (Master's Degree)
            </h2>
            <h3 className="text-sm text-gray-600">Merito University</h3>
            <p className="mb-2 text-gray-700">
              09/2023 - 06/2025, Poznan, Poland
            </p>
            <p className="mb-2 text-black leading-relaxed">
              Focused on advanced project management techniques and
              methodologies.
            </p>
            <p className="mb-8 text-black leading-relaxed">
              The coursework covers strategic planning, risk management, and
              resource allocation. I am also engaging in case studies to apply
              theoretical knowledge in practical scenarios.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="title-font font-bold text-black sm:text-2xl">
              Project Management with Scrum & Agile (Postgraduate Studies)
            </h2>
            <h3 className="text-sm text-gray-600">Merito University</h3>
            <p className="mb-2 text-gray-700">
              09/2023 - 06/2025, Poznan, Poland
            </p>
            <p className="mb-2 text-black leading-relaxed">
              Specializing in agile methodologies and project management
              frameworks.
            </p>
            <p className="mb-8 text-black leading-relaxed">
              This program provides a deep understanding of Scrum practices and
              their implementation. I am working on collaborative projects that
              enhance my skills in team dynamics and agile transformations.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="title-font font-bold text-black sm:text-2xl">
              Bachelor in HR Management
            </h2>
            <h3 className="text-sm text-gray-600">Merito University</h3>
            <p className="mb-2 text-gray-700">
              03/2019 - 03/2021, Poznan, Poland
            </p>
            <p className="mb-2 text-black leading-relaxed">
              Studied human resource strategies and practices.
            </p>
            <p className="mb-8 text-black leading-relaxed">
              The program included topics such as talent acquisition, employee
              engagement, and organizational behavior. I also participated in
              internships that provided practical experience in HR roles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
