import React from "react";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-b from-[#1a0028] via-[#4b006e] to-[#a0006f] text-white flex flex-col items-center justify-center px-6 py-16"
    >
      {/* Section Title */}
      <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400">
        Contact Me
      </h2>

      {/* Contact Container */}
      <div className="max-w-4xl w-full bg-[#1f0035]/50 backdrop-blur-sm border border-pink-500/40 shadow-lg shadow-pink-500/10 rounded-2xl p-10 text-center space-y-8">
        <p className="text-lg text-gray-300 leading-relaxed">
          I’d love to connect and discuss new opportunities, collaborations, or ideas!  
          Feel free to reach out through any of the following ways 👇
        </p>

        {/* Contact Details */}
        <div className="grid sm:grid-cols-3 gap-8 text-gray-200 mt-8">
          <div className="flex flex-col items-center">
            <Mail className="text-pink-400 w-8 h-8 mb-3" />
            <h4 className="font-semibold text-pink-400">Email</h4>
            <a
              href="mailto:example@email.com"
              className="hover:text-pink-300 transition"
            >
              bhandarisoniya349@gmail.com
            </a>
          </div>

          <div className="flex flex-col items-center">
            <Phone className="text-pink-400 w-8 h-8 mb-3" />
            <h4 className="font-semibold text-pink-400">Phone</h4>
            <a
              href="tel:+6398149627"
              className="hover:text-pink-300 transition"
            >
              +91 6398149627
            </a>
          </div>

          <div className="flex flex-col items-center">
            <MapPin className="text-pink-400 w-8 h-8 mb-3" />
            <h4 className="font-semibold text-pink-400">Location</h4>
            <p>Noida, India</p>
          </div>
        </div>

        {/* Social Media Icons
        <div className="flex justify-center gap-6 mt-10">
          <a
            href="https://linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-pink-400 transition"
          >
            <Linkedin className="w-7 h-7" />
          </a>
          <a
            href="https://github.com/your-github"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-pink-400 transition"
          >
            <Github className="w-7 h-7" />
          </a>
        </div> */}
      </div>
    </section>
  );
}
