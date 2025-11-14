import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-black via-purple-900 to-pink-700 text-white px-6">
      {/* Animated Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl font-extrabold text-center mb-4"
      >
        Hi, I’m <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">Soniya Bhandari</span>
      </motion.h1>

      {/* Animated Subheading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-2xl md:text-3xl font-semibold text-center text-gray-200 mb-6"
      >
        Full Stack Developer | AI & ML Enthusiast
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="text-center max-w-2xl text-gray-300 leading-relaxed mb-8"
      >
        Passionate about building scalable web applications and intelligent systems. I blend creativity with technology to design digital solutions that are fast, functional, and user-friendly.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="flex flex-col sm:flex-row gap-4"
      >
        <a
          href="#projects"
          className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full text-lg font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
        >
          View My Projects
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border-2 border-pink-400 rounded-full text-lg font-semibold hover:bg-pink-500 hover:text-white transition duration-300"
        >
          Contact Me
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
