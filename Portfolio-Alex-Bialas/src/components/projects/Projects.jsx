import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image from "../../assets/image.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";

export default function Projects({ darkMode }) {
  const frontendProjects = [
    {
      id: 1,
      image: image,
      title: "Frontend Project 1",
      description: "Description for frontend project 1",
    },
    {
      id: 2,
      image: image2,
      title: "Frontend Project 2",
      description: "Description for frontend project 2",
    },
    {
      id: 3,
      image: image3,
      title: "Frontend Project 3",
      description: "Description for frontend project 3",
    },
    {
      id: 4,
      image: image4,
      title: "Frontend Project 4",
      description: "Description for frontend project 4",
    },
  ];

  const fullstackProjects = [
    {
      id: 1,
      image: image,
      title: "Full-stack Project 1",
      description: "Description for full-stack project 1",
    },
    {
      id: 2,
      image: image2,
      title: "Full-stack Project 2",
      description: "Description for full-stack project 2",
    },
    {
      id: 3,
      image: image3,
      title: "Full-stack Project 3",
      description: "Description for full-stack project 3",
    },
    {
      id: 4,
      image: image4,
      title: "Full-stack Project 4",
      description: "Description for full-stack project 4",
    },
  ];

  const customArrowStyle = {
    width: "40px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "black",
    fontSize: "24px",
    zIndex: 1,
    cursor: "pointer",
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: (
      <div style={{ ...customArrowStyle }} className="custom-arrow right-arrow">
        ➡️
      </div>
    ),
    prevArrow: (
      <div style={{ ...customArrowStyle }} className="custom-arrow left-arrow">
        ⬅️
      </div>
    ),
    responsive: [
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const renderSlider = (projects, category, aosDirection) => (
    <div className="relative">
      <h2
        className={`text-3xl text-center font-black leading-snug mb-6 transition-all duration-300 ease-in-out transform hover:scale-105 ${
          darkMode
            ? "text-white hover:text-gray-400"
            : "text-gray-900 hover:text-[#a68f5f]"
        }`}
      >
        {category}
      </h2>
      <Slider {...settings}>
        {projects.map((project) => (
          <div key={project.id} className="p-4" data-aos={aosDirection}>
            <div
              className={`h-full border-2 ${
                darkMode ? "border-white" : "border-black"
              } shadow-2xl rounded-lg overflow-hidden transition-transform transform hover:scale-105`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto lg:h-48 md:h-36 sm:h-24 object-cover object-center"
              />
              <div className={`p-4 ${darkMode ? "bg-gray-700" : "bg-white"}`}>
                <h2
                  className={`tracking-widest text-xl title-font font-medium mb-1 ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {project.title}
                </h2>
                <p
                  className={`leading-relaxed mb-3 ${
                    darkMode ? "text-gray-300" : "text-black"
                  }`}
                >
                  {project.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );

  return (
    <section
      data-aos="fade-up"
      data-aos-delay="400"
      id="projects"
      className={`relative overflow-hidden flex flex-col body-font ${
        darkMode ? " text-white" : " text-black"
      }`}
    >
      <div className="container px-5 py-24 mx-auto">
        <h1
          className={`text-4xl text-center font-black leading-snug mb-6 transition-all duration-300 ease-in-out transform hover:scale-105 ${
            darkMode
              ? "text-white hover:text-gray-400"
              : "text-gray-900 hover:text-[#a68f5f]"
          }`}
        >
          My Projects
        </h1>
        {renderSlider(frontendProjects, "Frontend Projects", "fade-left")}
        <div className="pt-12">
          {renderSlider(fullstackProjects, "Full-stack Projects", "fade-right")}
        </div>
      </div>
    </section>
  );
}
