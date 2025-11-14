import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#1a0028]/80 backdrop-blur-md border-b border-pink-500/20">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between text-white">
        {/* Logo / Name */}
        <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400">
          Soniya Bhandari
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 text-gray-300">
          <a href="#hero" className="hover:text-pink-400 transition">Home</a>
          <a href="#about" className="hover:text-pink-400 transition">About</a>
          <a href="#skills" className="hover:text-pink-400 transition">Skills</a>
          <a href="#projects" className="hover:text-pink-400 transition">Projects</a>
          <a href="#contact" className="hover:text-pink-400 transition">Contact</a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none text-pink-400"
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#1a0028]/95 text-center py-6 space-y-4 border-t border-pink-500/20">
          <a href="#hero" className="block text-gray-300 hover:text-pink-400 transition">Home</a>
          <a href="#about" className="block text-gray-300 hover:text-pink-400 transition">About</a>
          <a href="#skills" className="block text-gray-300 hover:text-pink-400 transition">Skills</a>
          <a href="#projects" className="block text-gray-300 hover:text-pink-400 transition">Projects</a>
          <a href="#contact" className="block text-gray-300 hover:text-pink-400 transition">Contact</a>
        </div>
      )}
    </header>
  );
}
