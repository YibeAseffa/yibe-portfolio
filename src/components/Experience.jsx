import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Assistant Lecturer and Software Developer",
    company: "Bahir Dar University, Ethiopia",
    date: "Jul. 2019 – Aug. 2023",
    description:
      "Delivered instruction across various programming and embedded systems courses, sharing knowledge and guiding students in both theoretical and practical aspects. Contributed to research initiatives and collaborated on several projects focusing on software development, hardware engineering, and ICT solutions.",
    keyAchievements: [
      "Designed and developed a Driving License and Vehicle Registration System for the regional government transport office.",
      "Collaborated on the development of a Project and Research Management System for Bahir Dar Institute of Technology.",
    ],
    impact:
      "The successful deployment of these systems modernized regional transport services, serving over a million citizens annually, and significantly improved research and project tracking at the Institute of Technology, including AI-enabled redundancy and plagiarism checking for student projects.",
  },
  {
    role: "Full Stack Web Development (Boot Camp)",
    company: "BusyQA, Canada",
    date: "Jul. 2024 – Nov. 2024",
    description:
      "Built dynamic and responsive web applications using the MERN stack. Developed front-end technologies such as HTML, CSS, and JavaScript, ensuring optimal user experiences. Participated in hands-on projects, applying full-stack development skills in real-world scenarios.",
    keyProjects: [
      "Todo App: Developed a task management application with features such as task creation, editing, and status tracking.",
      "Social Media Feed: Created a platform where users can post, like, and comment. Integrated MongoDB for data storage and Redux for state management.",
      "Crypto Coin Tracker: Built a cryptocurrency tracking app with live updates and data visualization.",
    ],
  },
  {
    role: "Full Stack Web Development Intern",
    company: "Tempolabs, Canada",
    date: "Nov. 2024 – Feb. 2025",
    description:
      "Collaborated on frontend development to design and build responsive and visually appealing React components. Used Tailwind CSS, Radix Icons, and Framer Motion to create reusable UI components based on Figma designs and self-inspired ideas, which were published on ReactComponents.com.",
    keyProjects: [
      "Airbnb UI Kit: A complete set of responsive components for an Airbnb-style site.",
      "Chat UI Kit: An interactive chat interface with real-time features for a Chat-GPT style site.",
      "Standalone Components: Weather card, crypto tracker, dashboards, and responsive menus.",
    ],
    impact:
      "Developed highly customizable UI kits and components, improving developer efficiency, ensuring smooth animations, and creating user-friendly, responsive interfaces used in real-world applications.",
  },
];

const Experience = () => {
  return (
    <section className="py-16 bg-gray-100 text-gray-800 px-6">
      <motion.h2
        className="text-3xl font-bold text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Professional Experience
      </motion.h2>
      <div className="mt-8 space-y-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white shadow-lg rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 * index, duration: 0.7 }}
          >
            <h3 className="text-xl font-semibold">{exp.role}</h3>
            <p className="text-gray-600">{exp.company}</p>
            <p className="mt-2">{exp.date}</p>
            <p className="mt-4">{exp.description}</p>
            {exp.keyAchievements && (
              <div className="mt-4">
                <h4 className="font-semibold">Key Achievements:</h4>
                <ul className="list-disc pl-6">
                  {exp.keyAchievements.map((achievement, idx) => (
                    <li  key={idx}>{achievement}</li>
                  ))}
                </ul>
              </div>
            )}
            {exp.impact && (
              <div className="mt-4">
                <h4 className="font-semibold">Impact:</h4>
                <p>{exp.impact}</p>
              </div>
            )}
            {exp.keyProjects && (
              <div className="mt-4">
                <h4 className="font-semibold">Key Projects:</h4>
                <ul className="list-disc pl-6">
                  {exp.keyProjects.map((project, idx) => (
                    <li  key={idx}>{project}</li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
