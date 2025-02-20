import React from "react";

const projects = [
  {
    title: "Driving License and Vehicle Information Management System",
    date: "Sep. 2021 – Jul. 2024",
    description:
      "Designed, developed, and deployed a comprehensive Driving License and Vehicle Information Management System for a local transport office, alongside a team of 3 members. My role encompassed gathering and compiling requirement specifications, designing the database using MySQL, and implementing the backend using the YII2 PHP framework. For the frontend, I utilized HTML, CSS, Bootstrap, and jQuery for dynamic interactions, and deployed the project using the APACHE24 web server.",
  },
  {
    title: "Research and Project Management System",
    date: "Oct. 2022 – Dec. 2022",
    description:
      "Developed the frontend of a research and project management system using AngularJS and ASP.NET for backend functionality. The project was built on MSSQL as the database and deployed on an IIS web server. This system helps track and manage research projects and related deliverables effectively.",
  },
  {
    title: "Crypto Coin Tracker",
    date: "Jul. 2024 – Oct. 2024",
    description:
      "As part of my Full Stack Web Development Bootcamp at BusyQA Inc., I developed a crypto coin tracker application using the MERN stack. I utilized React for the frontend, Node.js for the backend, Express.js for the server, and MongoDB for database management. The app integrates real-time cryptocurrency data and provides portfolio tracking features.",
    links: [
      {
        url: "https://github.com/YibeAseffa/BusyQA_FullStacRepo/tree/master/crypto-coin-tracker-app", // Replace with your actual link
        label: "GitHub Repo",
      },
    ],
  },
  {
    title: "Airbnb UI Kit",
    date: "Nov. 2024 – Dec. 2024",
    description:
      "Built a comprehensive UI kit for an Airbnb-style website, offering a set of responsive, pixel-perfect React components designed for developers to create seamless rental platform experiences. Tailwind CSS was used for styling, while Framer Motion added smooth animations to key components.",
    keyComponents: [
      "Property Cards: Display listings with images, prices, and ratings.",
      "Booking Forms: Responsive forms for selecting dates and finalizing reservations.",
      "Search & Filter Menus: Intuitive search bars and filtering options for users.",
      "User Profiles & Reviews: Profile components for hosts and guests, including reviews and ratings.",
    ],
    links: [
      {
        url: "https://reactcomponents.com/?type=components&sortBy=created_at&collections=4", // Replace with your actual link
        label: "View on ReactComponents",
      },
      {
        url: "https://github.com/YibeAseffa/Airbnb_Homepage", // Replace with your actual link
        label: "GitHub Repo",
      },
      {
        url: "https://app.tempolabs.ai/?project_id=c28a69de-b493-434a-9eec-bb6e7d00f83e", // Replace with your actual link
        label: "Tempolabs project Link",
      },
    ],
  },
  {
    title: "AI Chat UI Kit",
    date: "Nov. 2024 – Dec. 2024",
    description:
      "Developed a modern, interactive Chat UI Kit, featuring sleek design and real-time responsiveness. The kit includes key features such as message bubbles with smooth animations, menu bars, sidebars, and token authentication components. Tailwind CSS and Framer Motion were used to ensure an attractive, dynamic, and adaptable interface.",
    keyFeatures: [
      "Message Bubbles: Stylish messages with smooth animation effects.",
      "Menu Bar and Sidebar: Essential UI components for chat navigation.",
      "Token Authentication: A secure method for user verification.",
      "Model Selection: Toggle between GPT 3.0 and GPT 4.0 chat models.",
      "Dark Mode & Theme Support: Customizable themes for different user preferences.",
    ],
    links: [
      {
        url: "https://reactcomponents.com/?type=components&sortBy=created_at&collections=5", // Replace with your actual link
        label: "View on ReactComponents",
      },
      {
        url: "https://github.com/YibeAseffa/Tempo-Horizon-Testing/tree/main",
        label: "GitHub Repo",
      },
      {
        url: "https://app.tempolabs.ai/?project_id=4be0d7a8-baf7-4bfd-8829-9926cf49b5f7", // Replace with your actual link
        label: "Tempolabs project Link",
      },
    ],
  },
  {
    title: "Standalone Responsive React Components",
    date: "Jan. 2025 – Feb. 2025",
    description:
      "Created a collection of versatile, standalone UI components designed for seamless integration into any web application. These components include a weather card, crypto tracker, dashboards, and responsive menus, all built with React and styled using Tailwind CSS. The goal was to provide reusable, modular components for developers to use in their own projects.",
    keyComponents: [
      "Weather Card: A visually appealing component that displays current weather conditions including temperature, humidity, and weather icon.",
      "Crypto Tracker: Displays real-time cryptocurrency data, allowing users to track and monitor different cryptocurrencies with the latest market stats.",
      "Dashboards: Interactive and customizable dashboard components with data visualizations, charts, and performance metrics.",
      "Responsive Menus: Adaptive navigation menus for both desktop and mobile views, with smooth transitions and animations.",
    ],
    links: [
      {
        url: "https://github.com/YibeAseffa/Respomsive-react-components", // Replace with your actual link
        label: "GitHub Repo",
      },
      {
        url: "https://app.tempolabs.ai/?project_id=042d8b68-94d3-41c8-8e0b-2bf91fef206d", // Replace with your actual link
        label: "Tempolabs project Link",
      },
    ],
  },
];

const Projects = () => {
  return (
    <section className="py-16 bg-gray-900 text-white px-6">
      <h2 className="text-3xl font-bold text-center">Projects</h2>
      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-6 bg-gray-800 rounded-lg shadow-lg transition-transform transform hover:scale-105"
          >
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="mt-2 text-gray-400">{project.date}</p>
            <p className="mt-4">{project.description}</p>
            {project.keyComponents && (
              <div className="mt-4">
                <h4 className="font-semibold text-lg">Key Components:</h4>
                <ul className="list-disc pl-6 space-y-2">
                  {project.keyComponents.map((component, idx) => (
                    <li key={idx} className="text-gray-300">
                      {component}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {project.links && (
              <div className="mt-6 space-y-2">
                {project.links.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-600 font-medium transition-colors duration-300 block"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
