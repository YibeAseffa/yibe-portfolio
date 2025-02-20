import React, { useState } from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import profileImage from "./assets/logo.jpg"; // Import your image

const App = () => {
  const [isOpen, setIsOpen] = useState(false); // State to track if image is enlarged

  return (
    <div>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-lg py-4 z-50">
        <div className="container mx-auto flex justify-between items-center px-6">
          {/* Logo with Animated Name */}
          <div className="flex items-center space-x-3">
            {/* Profile Image with Click to Expand */}
            <motion.img
              src={profileImage}
              alt="Profile"
              className="w-10 h-10 rounded-full border-2 border-white cursor-pointer"
              whileHover={{ scale: 1.2 }} // Slight zoom on hover
              onClick={() => setIsOpen(true)} // Open full image on click
            />
            <motion.h1
              className="text-2xl font-bold cursor-pointer"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              Yibeltal Aseffa
            </motion.h1>
          </div>

          <div className="space-x-6">
            <a href="#about" className="hover:text-blue-400">
              About
            </a>
            <a href="#experience" className="hover:text-blue-400">
              Experience
            </a>
            <a href="#projects" className="hover:text-blue-400">
              Projects
            </a>
            <a href="#contact" className="hover:text-blue-400">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Full-Screen Profile Image Popup */}
      {isOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)} // Close when clicked outside
        >
          <motion.img
            src={profileImage}
            alt="Profile Full"
            className="w-80 h-80 rounded-lg border-4 border-white"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      )}

      {/* Sections */}
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-4 mt-8">
        <p>
          © {new Date().getFullYear()} Yibeltal Aseffa. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default App;
