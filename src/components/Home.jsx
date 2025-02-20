import React from "react";
import resume from "../assets/Yibeltal_Aseffa_Resume.pdf"; // Import your resume file

const Home = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen text-center bg-gray-900 text-white p-6">
      <h1 className="text-4xl md:text-6xl font-bold">Yibeltal N. Aseffa</h1>
      <p className="text-lg md:text-2xl mt-4">
        Full-Stack Web Developer | MERN Stack Enthusiast
      </p>

      {/* Buttons */}
      <div className="mt-6 space-x-4">
  

        {/* Download Resume Button */}
        <a
          href={resume}
          download="Yibeltal_Aseffa_Resume.pdf"
          className="px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition"
        >
          View Resume
        </a>

        {/* Contact Button */}
        <a
          href="#contact"
          className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Home;
