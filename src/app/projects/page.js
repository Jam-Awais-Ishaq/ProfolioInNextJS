"use client"; // Ensure this component runs on the client side

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
  id: 1,
  title: "Elevate Bright Tech CRM – Enterprise Workforce Management System",
  description: "Elevate Bright Tech is a multi-role enterprise CRM system designed to manage company operations across Admin, HR, Team Lead, and Employee panels. It includes real-time task tracking, productivity monitoring, attendance system, shift management, and internal communication tools. The system ensures transparency in workflow and provides complete visibility of employee performance through automated tracking features.",
  technologies: [
    "React.js",
    "Electron.js",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "Vite",
    "CSS3"
  ],
  category: "Full Stack",
  image: "/crm.png",
  link: "https://elevatebrighttech.netlify.app/",
  github: "https://github.com/Jam-Awais-Ishaq/crm-frontend"
},
{
  id: 2,
  title: "GHM – Local Deals & Community Marketplace (Australia)",
  description: "GHM is a location-based community and deals discovery platform designed for users in Australia. The application allows users to explore nearby affordable food options, hot deals, and promotions using an interactive map system. It also includes a community-driven social feed where users can post updates, share recommendations, and interact with others in a Facebook-like experience. The platform combines geolocation services with social networking and deal discovery to enhance local engagement and user experience.",
 
  technologies: [
    "React.js",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "Map Integration (Google Maps / Mapbox)",
    "CSS3",
    "Vite"
  ],
  category: "Full Stack",
  image: "/ghm.png",
  link: "https://ghm-resteurants.netlify.app/",
  github: "https://github.com/Jam-Awais-Ishaq/GHM"
},
    {
      id: 3,
      title: "E-commerce Website with Ai Feshion Designer (Final Year project)",
      description: "A full-stack e-commerce platform with React, Node.js, and MongoDB. (we are working on its backend)",
      technologies: ["React", "Node.js", "MongoDB"],
      category: "Full Stack",
      image: "/wearhub.png",
      link: "https://wearhubb.netlify.app/",
      github: "https://github.com/Jam-Awais-Ishaq/wearhub-Final-Year-Project",
    },
     {
      id: 4,
      title: "SchoolFinder Web Application",
      description: "SchoolFinder is a web application that helps users locate nearby schools through an interactive map. It uses the Leaflet.js API to display school locations based on the user’s current or selected area.",
      technologies: ["Tailwindcss","React.js"],
      category: "Frontend",
      image: "/SchoolFinder.jpg",
      link: "https://schoolfinderwebapp.netlify.app/",
      github: "https://github.com/Jam-Awais-Ishaq/SchoolFinder",
    },
    {
      id: 5,
      title: "Admin Penal For E-commerce Website",
      description: "An admin panel for WearHub e-commerce, managing products, orders, users, and analytics with Next.js, Firebase, and Tailwind CSS.",
      technologies: ["React.js", "Tailwind CSS"],
      category: "Frontend",
      image: "/dashboard.png",
      link: "https://wearhubdashboard.netlify.app/",
      github: "https://github.com/Jam-Awais-Ishaq/adminDashboard_AJ_Styles_Frontend",
    },
    {
      id: 6,
      title: "HumTek Solutions",
      description: "A Company website built in html, css, bootstrap & javaScript",
      technologies: ["Html ", "css", "bootstrap","JS"],
      category: "Frontend",
      image: "/humtek.png",
      link: "https://www.humtek.com.pk/humtek.html",
      github: "https://github.com/Jam-Awais-Ishaq/HumTek-Solutions",
    },
    {
      id: 7,
      title: "Deta-Code-Sloutions  {Deployed on versal}",
      description: "Landing page of a software company website currently under development. Built using Tailwindcss and React.js, it showcases the company's services with a clean and responsive design.",
      technologies: ["Html ", "css", "bootstrap","JS"],
      category: "Frontend",
      image: "/DeltaCode.jpg",
      link: "https://deta-code-sloutions.vercel.app/",
      github: "https://github.com/Jam-Awais-Ishaq/Deta-Code-Sloutions",
    },
     {
      id: 8,
      title: "TheEagles.io BlockChain project use MetaMask & trutWallet extension in chrome to visit Dashboard",
      description: "A blockchain web application. Users can connect their crypto wallets such as MetaMask and Trust Wallet to securely access and interact with the dashboard. Wallet integration ensures a seamless Web3 experience and allows users to authenticate without traditional login systems.",
      technologies: ["Tailwindcss","React.js","Contract Address"],
      category: "Full Stack",
      image: "/theegeals.jpg",
      link: "https://theeagleio.netlify.app/",
      github: "https://github.com/Jam-Awais-Ishaq/TheEagles",
    },
  ];

  const categories = ["All", ...new Set(projects.map((project) => project.category))];

  const filteredProjects =
    activeFilter === "All" ? projects : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="relative isolate overflow-hidden bg-[var(--page-bg)] pb-16 pt-32 text-[var(--text)] sm:pt-36">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_15%,var(--glow-a),transparent_28%),radial-gradient(circle_at_85%_25%,var(--glow-b),transparent_26%),linear-gradient(135deg,var(--hero-start)_0%,var(--hero-mid)_52%,var(--hero-end)_100%)]" />
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-6 text-center text-3xl font-bold text-[var(--text)]"
        >
          My Projects
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="mx-auto mb-12 max-w-2xl text-center text-[var(--muted)]"
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
                  ? "bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] text-white shadow-[0_12px_28px_var(--accent-shadow)]"
                  : "border border-[var(--border)] bg-[var(--surface)] text-[var(--text-soft)] hover:bg-[var(--accent-soft)] hover:text-[var(--text)]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[0_20px_70px_var(--shadow)] ring-1 ring-[var(--border)] backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:bg-[var(--surface-soft)] hover:shadow-[0_26px_90px_var(--accent-shadow)]"
            >
              <div className="relative h-56 w-full overflow-hidden border-b border-[var(--border)] bg-[var(--surface-soft)]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,var(--page-bg),transparent_70%)]" />
                <span className="absolute left-4 top-4 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[var(--accent-text)] backdrop-blur">
                  {project.category}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-3 text-lg font-bold leading-snug text-[var(--text)] transition-colors group-hover:text-[var(--accent-text)]">
                  {project.title}
                </h3>
                <p className="mb-5 line-clamp-4 text-sm leading-7 text-[var(--muted)]">
                  {project.description}
                </p>

                <div className="mb-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="rounded-full border border-[var(--border)] bg-[var(--accent-soft)] px-3 py-1 text-xs font-medium text-[var(--accent-text)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto grid grid-cols-2 gap-3">
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] px-4 py-3 text-sm font-bold text-white shadow-[0_12px_28px_var(--accent-shadow)] transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    Live
                    <FiExternalLink size={16} />
                  </Link>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--accent)] px-4 py-3 text-sm font-bold text-[var(--accent-text)] transition-colors duration-300 hover:bg-[var(--accent-soft)] hover:text-[var(--text)]"
                  >    
                    <FiGithub size={16} />
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
