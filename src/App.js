import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";        // Skills component
import Projects from "./components/Projects";    // Projects component
import Contact from "./components/Contact";  
import Footer from "./components/Footer";  

 // ✅ correct import

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer /> {/* ✅ correct component name */}
    </div>
  );
}

export default App;
