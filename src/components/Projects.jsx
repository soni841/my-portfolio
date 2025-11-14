import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Real Estate Website",
    link: "https://yourrealtorswati.com/",
    description:
      "A modern property listing platform with inquiry forms and image galleries, optimized for speed and SEO.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
  },
  {
    title: "Bhoomi Education NGO Website",
    link: "https://bhoomieducation.org/",
    description:
      "Dynamic website for an NGO featuring service pages, donation gateway, and volunteer registration modules.",
    tech: ["HTML", "CSS", "WordPress"],
  },
  {
    title: "Divyansh Global RO Services",
    link: "https://divyanshglobalro.com/",
    description:
      "Clean, service-oriented website highlighting RO products, services, and customer support sections.",
    tech: ["React.js", "Tailwind CSS", "SEO"],
  },
  {
    title: "Divyansh Global Education",
    link: "https://divyanshglobaleducation.com/",
    description:
      "Professional education service platform with course listings, admission forms, and contact modules.",
    tech: ["React.js", "Tailwind CSS"],
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-gradient-to-b from-black via-purple-900 to-pink-900 text-white py-20"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12 text-pink-400">
          My Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-black/40 backdrop-blur-md rounded-xl p-6 shadow-lg border border-pink-700 hover:scale-105 hover:shadow-pink-500/50 transition-transform duration-300"
            >
              <h3 className="text-2xl font-semibold text-pink-300 mb-3">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex justify-center gap-2 flex-wrap mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-purple-700/30 text-pink-300 text-sm px-3 py-1 rounded-full border border-pink-500"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-pink-400 hover:text-white font-medium transition-colors"
              >
                View Project <FaExternalLinkAlt className="ml-2" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
