import React from "react";
import myphoto from "../images/myphoto.jpg"; // ✅ make sure this path is correct

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-gradient-to-b from-[#1a0028] via-[#4b006e] to-[#a0006f] text-white flex flex-col items-center justify-center px-6 py-16"
    >
      {/* Title */}
      <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400">
        About Me
      </h2>

      <div className="max-w-6xl grid md:grid-cols-2 gap-12 items-center">
        {/* Left Image Section */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-3xl blur-2xl opacity-40 animate-pulse"></div>
            <img
              src={myphoto}
              alt="Soniya Bhandari"
              className="relative w-72 md:w-96 rounded-2xl object-cover shadow-[0_0_30px_rgba(236,72,153,0.5)] border-4 border-pink-500"
            />
          </div>
        </div>

        {/* Right Text Section */}
        <div className="flex flex-col justify-center space-y-4">
          <h3 className="text-2xl font-semibold text-pink-400">
            Hi, I'm Soniya Bhandari 👋
          </h3>

          <p className="text-gray-300 leading-relaxed">
            I'm a passionate and detail-oriented web developer who loves turning
            ideas into interactive, user-friendly, and visually appealing digital
            experiences. I focus on creating clean, efficient code and responsive
            designs that work beautifully across devices.
          </p>

          <p className="text-gray-300 leading-relaxed">
            My journey in web development started with curiosity and has grown
            into a strong desire to continuously learn and improve. I enjoy
            working with modern technologies like{" "}
            <span className="text-pink-400 font-medium">React, Tailwind CSS</span>, 
            and JavaScript to craft engaging and dynamic web applications.
          </p>

          <p className="text-gray-300 leading-relaxed">
            When I’m not coding, I enjoy exploring design trends, learning new
            tools, and collaborating with creative minds to build something
            impactful.
          </p>

          {/* Skills Badges */}
          <div className="mt-6 flex flex-wrap gap-3">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "Tailwind CSS",
              "Git",
              "Python",
            ].map((skill) => (
              <span
                key={skill}
                className="bg-pink-600/20 border border-pink-400/30 text-pink-300 px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
