"use client"; // Ensure this component runs on the client side

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      id: 1,
      title: "TheEagles.io BlockChain project use MetaMask & trutWallet extension in chrome to visit Dashboard",
      description: "A blockchain web application. Users can connect their crypto wallets such as MetaMask and Trust Wallet to securely access and interact with the dashboard. Wallet integration ensures a seamless Web3 experience and allows users to authenticate without traditional login systems.",
      technologies: ["Tailwindcss","React.js","Contract Address"],
      category: "Full Stack",
      image: "/theegeals.jpg",
      link: "https://theeagleio.netlify.app/",
      github: "https://github.com/Jam-Awais-Ishaq/TheEagles",
    },
    {
      id: 2,
      title: "E-commerce Website with Ai Feshion Designer (Final Year project)",
      description: "A full-stack e-commerce platform with React, Node.js, and MongoDB. (we are working on its backend)",
      technologies: ["React", "Node.js", "MongoDB"],
      category: "Full Stack",
      image: "/wearhub.png",
      link: "https://wearhubb.netlify.app/",
      github: "https://github.com/Jam-Awais-Ishaq/wearhub-Final-Year-Project",
    },
     {
      id: 3,
      title: "SchoolFinder Web Application",
      description: "SchoolFinder is a web application that helps users locate nearby schools through an interactive map. It uses the Leaflet.js API to display school locations based on the user’s current or selected area.",
      technologies: ["Tailwindcss","React.js"],
      category: "Frontend",
      image: "/SchoolFinder.jpg",
      link: "https://schoolfinderwebapp.netlify.app/",
      github: "https://github.com/Jam-Awais-Ishaq/SchoolFinder",
    },
    {
      id: 4,
      title: "Admin Penal For E-commerce Website",
      description: "An admin panel for WearHub e-commerce, managing products, orders, users, and analytics with Next.js, Firebase, and Tailwind CSS.",
      technologies: ["React.js", "Tailwind CSS"],
      category: "Frontend",
      image: "/dashboard.png",
      link: "https://wearhubdashboard.netlify.app/",
      github: "https://github.com/Jam-Awais-Ishaq/adminDashboard_AJ_Styles_Frontend",
    },
    {
      id: 5,
      title: "HumTek Solutions",
      description: "A Company website built in html, css, bootstrap & javaScript",
      technologies: ["Html ", "css", "bootstrap","JS"],
      category: "Frontend",
      image: "/humtek.png",
      link: "https://www.humtek.com.pk/humtek.html",
      github: "https://github.com/Jam-Awais-Ishaq/HumTek-Solutions",
    },
    {
      id: 5,
      title: "Deta-Code-Sloutions  {Deployed on versal}",
      description: "Landing page of a software company website currently under development. Built using Tailwindcss and React.js, it showcases the company's services with a clean and responsive design.",
      technologies: ["Html ", "css", "bootstrap","JS"],
      category: "Frontend",
      image: "/DeltaCode.jpg",
      link: "https://deta-code-sloutions.vercel.app/",
      github: "https://github.com/Jam-Awais-Ishaq/Deta-Code-Sloutions",
    },
  ];

  const categories = ["All", ...new Set(projects.map((project) => project.category))];

  const filteredProjects =
    activeFilter === "All" ? projects : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="py-16 bg-gradient-to-br from-blue-50 via-white to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-600">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-white"
        >
          My Projects
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12"
        >
          Here are some of my recent projects. Click on any project to learn more about it.
        </motion.p>

        <div className="flex justify-center mb-12 flex-wrap gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full transition-colors duration-300 ${
                activeFilter === category
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <Link
                    href={project.link}
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors duration-300"
                  >
                    View Details
                  </Link>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors duration-300 flex items-center text-white"
                  >
                    <svg className="w-5 h-5 mr-2 " fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projects;