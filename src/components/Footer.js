export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#4b006e] to-[#1a0028] text-gray-300 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        {/* Logo / Name */}
        <h2 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400">
          Soniya Bhandari
        </h2>

        {/* Navigation Links */}
        <div className="flex space-x-6 text-sm">
          <a href="#about" className="hover:text-pink-400 transition">About</a>
          <a href="#skills" className="hover:text-pink-400 transition">Skills</a>
          <a href="#projects" className="hover:text-pink-400 transition">Projects</a>
          <a href="#contact" className="hover:text-pink-400 transition">Contact</a>
        </div>

        {/* Social Links */}
        <div className="flex space-x-5">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition">
            <i className="fab fa-github text-lg"></i>
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition">
            <i className="fab fa-linkedin text-lg"></i>
          </a>
          <a href="mailto:example@email.com" className="hover:text-pink-400 transition">
            <i className="fas fa-envelope text-lg"></i>
          </a>
        </div>
      </div>

      {/* Divider Line */}
      <div className="border-t border-pink-500/30 mt-6 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Soniya Bhandari— All Rights Reserved.
      </div>
    </footer>
  );
}
