import React from "react";
import ProjectCard from "./ProjectCard";
import Project1 from "../assets/project1.png";
import Project2 from "../assets/project2.png";
import Project3 from "../assets/project3.png";
import Project4 from "../assets/project4.png";

const ProjectSection = () => {
  const projects = [
    {
      image: Project1,
      title: "Real Estate MERN stack project",
      description:
        "Responsive Real Estate Project using React, Node.js, Express, MongoDB, and Tailwind CSS.",
      Github: "https://github.com/Talal-Mohiuddin/Real-Estate-MERN",
      LivePreview: "https://real-estate-mern-agf1.onrender.com/",
    },
    {
      image: Project2,
      title: "Food Ordering Website",
      description:
        "Responsive Food Ordering Website using React, Node.js, Express, MongoDB, and Tailwind CSS. with Admin panel.",
      Github: "https://github.com/Talal-Mohiuddin/MERN-FOOD-ORDERING",
      LivePreview: "https://mern-food-ordering.onrender.com/",
    },
    {
      image: Project3,
      title: "Basic Hospital Management System",
      description:
        "Responsive Hospital Management System using React, Node.js, Express, MongoDB, and Tailwind CSS.",
      Github: "https://github.com/Talal-Mohiuddin/Hospital-Management",
      LivePreview: "https://hospital-management-5z0r.onrender.com/",
    },
    {
      image: Project4,
      title: "Movie Recommendation System",
      description:
        "Responsive Movie Recommendation System using Python and machine Learning.",
      Github: "https://github.com/Talal-Mohiuddin/Movie-Recommender-System",
      LivePreview:
        "https://movie-recommender-system-avacebnv3n6qvs8eskdyy9.streamlit.app/",
    },
  ];

  return (
    <section id="projects">
      <div className="container m-auto px-4 sm:py-12">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <div className="flex flex-col sm:flex-row gap-10 mt-11">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
