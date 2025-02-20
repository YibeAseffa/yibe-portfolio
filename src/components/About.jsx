import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FaCode, FaDatabase, FaGit, FaCloud, FaCogs } from "react-icons/fa"; // Add icons for better visual appeal

const About = () => {
  useEffect(() => {
    // Adding Google Fonts to the head dynamically if not already included.
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&family=Lora:wght@400;600&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  return (
    <section className="py-16 bg-gray-100 text-gray-800 px-6">
      {/* About Me Section */}

      {/* Description Card */}
      <motion.div
        className="max-w-3xl mx-auto mt-8 bg-white shadow-xl rounded-lg p-8 space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <motion.h3 className="text-xl font-semibold font-poppins text-purple-500">
          Professional Summary
        </motion.h3>
        <motion.p className="text-justify font-poppins text-lg leading-relaxed text-gray-700">
          A dedicated and skilled Full-Stack Web Developer with a degree in
          Computer Engineering and hands-on experience in both front-end and
          back-end development. Proficient in JavaScript and its modern
          frameworks, particularly the MERN Stack (MongoDB, Express.js, React,
          Node.js), I have successfully implemented a variety of web
          applications, delivering efficient, scalable, and responsive
          solutions. Adept at working collaboratively in team environments, I
          excel at communication, problem-solving, project management, and
          adapting to new technologies quickly. Passionate about clean code,
          best practices, and continuous learning, I am eager to contribute to
          dynamic development teams and impactful projects. Looking for an
          entry-level role to apply my skills, solve problems, and begin a
          successful career in web development.
        </motion.p>
      </motion.div>

      {/* Education and Certificates Cards */}
      <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto mt-8">
        {/* Education Card */}
        <motion.div
          className="flex-1 bg-white shadow-xl rounded-lg p-8 space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.7 }}
        >
          <motion.h3 className="text-xl font-semibold font-poppins text-purple-500">
            Education
          </motion.h3>
          <motion.p
            className="text-lg font-poppins text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.7 }}
          >
            Bachelor’s in Computer Engineering - Bahir Dar University, Ethiopia
          </motion.p>
        </motion.div>

        {/* Certificates Card */}
        <motion.div
          className="flex-1 bg-white shadow-xl rounded-lg p-8 space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.7 }}
        >
          <motion.h3 className="text-xl font-semibold font-poppins text-purple-500">
            Certificates
          </motion.h3>
          <motion.p
            className="text-lg font-poppins text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.7 }}
          >
            Boot Camp, Full Stack Web Development (MERN Stack) - BusyQA, Canada
          </motion.p>
        </motion.div>
      </div>

      {/* Skills Section (Unchanged) */}
      <motion.h3
        className="text-xl font-semibold mt-6 font-poppins text-purple-500 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.7, duration: 0.7 }}
      >
        Skills
      </motion.h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {/* Skills Cards */}
        <motion.div
          className="bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg rounded-xl p-6 transform hover:scale-105 hover:shadow-xl transition-all duration-300 font-poppins"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          <div className="flex items-center gap-4 mb-4">
            <FaCode size={24} />
            <h4 className="text-lg font-semibold">Languages</h4>
          </div>
          <ul className="list-disc pl-4">
            <li>C++</li>
            <li>Java</li>
            <li>Python</li>
            <li>HTML-CSS</li>
            <li>JavaScript</li>
            <li>C#</li>
            <li>PHP</li>
          </ul>
        </motion.div>

        {/* Additional Skills (Unchanged) */}
        <motion.div
          className="bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg rounded-xl p-6 transform hover:scale-105 hover:shadow-xl transition-all duration-300 font-poppins"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.7 }}
        >
          <div className="flex items-center gap-4 mb-4">
            <FaCode size={24} />
            <h4 className="text-lg font-semibold">Frameworks</h4>
          </div>
          <ul className="list-disc pl-4">
            <li>NodeJS</li>
            <li>ExpressJS</li>
            <li>AngularJS</li>
            <li>React</li>
            <li>YII2</li>
            <li>ASP.Net</li>
            <li>Tailwind CSS</li>
            <li>Bootstrap</li>
          </ul>
        </motion.div>

        <motion.div
          className="bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg rounded-xl p-6 transform hover:scale-105 hover:shadow-xl transition-all duration-300 font-poppins"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.7 }}
        >
          <div className="flex items-center gap-4 mb-4">
            <FaDatabase size={24} />
            <h4 className="text-lg font-semibold">Database Management</h4>
          </div>
          <ul className="list-disc pl-4">
            <li>SQL</li>
            <li>MySQL</li>
            <li>MongoDB</li>
            <li>Query optimization and data modeling</li>
          </ul>
        </motion.div>

        <motion.div
          className="bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg rounded-xl p-6 transform hover:scale-105 hover:shadow-xl transition-all duration-300 font-poppins"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.7 }}
        >
          <div className="flex items-center gap-4 mb-4">
            <FaGit size={24} />
            <h4 className="text-lg font-semibold">Version Control</h4>
          </div>
          <ul className="list-disc pl-4">
            <li>GitHub</li>
            <li>Git</li>
          </ul>
        </motion.div>

        <motion.div
          className="bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg rounded-xl p-6 transform hover:scale-105 hover:shadow-xl transition-all duration-300 font-poppins"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.7 }}
        >
          <div className="flex items-center gap-4 mb-4">
            <FaCloud size={24} />
            <h4 className="text-lg font-semibold">Technologies</h4>
          </div>
          <ul className="list-disc pl-4">
            <li>IIS Server</li>
            <li>AWS</li>
            <li>Figma Design</li>
            <li>AI (Machine Learning, Computer Vision, NLP, Generative AI)</li>
          </ul>
        </motion.div>

        <motion.div
          className="bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg rounded-xl p-6 transform hover:scale-105 hover:shadow-xl transition-all duration-300 font-poppins"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.7 }}
        >
          <div className="flex items-center gap-4 mb-4">
            <FaCogs size={24} />
            <h4 className="text-lg font-semibold">Soft Skills</h4>
          </div>
          <ul className="list-disc pl-4">
            <li>Innovative</li>
            <li>Communication</li>
            <li>Critical thinking</li>
            <li>Problem-solving</li>
            <li>Teamwork</li>
            <li>Multi-tasking</li>
            <li>Work in a tight deadline</li>
            <li>Adaptability to new technologies</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
