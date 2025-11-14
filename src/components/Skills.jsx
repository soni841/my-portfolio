import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaDatabase } from "react-icons/fa";

const Skills = () => {
  const skills = [
    { icon: <FaHtml5 className="text-orange-500 text-5xl" />, name: "HTML" },
    { icon: <FaCss3Alt className="text-blue-500 text-5xl" />, name: "CSS" },
    { icon: <FaJs className="text-yellow-400 text-5xl" />, name: "JavaScript" },
    { icon: <FaReact className="text-cyan-400 text-5xl" />, name: "React.js" },
    { icon: <FaPython className="text-blue-400 text-5xl" />, name: "Python" },
    { icon: <FaDatabase className="text-purple-400 text-5xl" />, name: "SQL" },
  ];

  return (
    <section className="bg-gradient-to-b from-black via-purple-900 to-pink-800 text-white py-20" id="skills">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12 text-pink-400">My Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-10">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-4 bg-black/30 rounded-xl shadow-lg hover:scale-110 hover:bg-purple-700/40 transition-transform duration-300"
            >
              {skill.icon}
              <p className="mt-3 text-lg font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
