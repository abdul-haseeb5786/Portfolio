"use client";
import { motion } from "framer-motion";
import Devider from "./Devider";

const projectsData = [
  {
    title: "Furniro Clone",
    description:
      "Responsive e-commerce site built with React, Firebase, and Tailwind CSS. Features user auth, dynamic routing, and product pages. Images are lazy-loaded for performance optimization.",
    link: "https://furniro-ecommerce-ten.vercel.app/",
  },
  {
    title: "Shrinkly",
    description:
      "Modern URL shortener with support for custom slugs, link expiration, and user authentication. Built for reliability, security, and a clean user experience using MERN stack.",
    link: "https://shrinkly-beta.vercel.app/",
  },
  {
    title: "EMS (Employee Management System)",
    description:
      "A feature-rich employee management system built with the MERN stack. Includes task assignment, role-based login (admin/user), performance tracking, and a responsive dashboard interface.",
    link: "https://ems-orcin-pi.vercel.app/",
  },
  {
    title: "VScode Inspired Portfolio",
    description:
      "A VS Code-inspired portfolio website built with React, TypeScript, and Tailwind CSS. Features a code editor layout, interactive navigation, customizable sections, and a fully responsive design optimized for all devices.",
    link: "https://vscode-inspired-portfolio.vercel.app/",
  },
  {
    title: "Beneficiary Management System",
    description:
      "Web app for organizations to manage and track beneficiaries using CNIC-based identification. Role-based access ensures security and streamlined data control for efficient operations.",
    link: "https://cute-crostata-9e00ad.netlify.app/",
    
  },
  {
    title: "Project Tracker",
    description:
      "Full-stack task manager using React, Express, MongoDB, and Tailwind CSS. Create, organize, and filter tasks in real time with a clean UI designed for better team productivity.",
    link: "https://project-tracker-ten-tawny.vercel.app/",
  },
];

export default function Projects() {
  return (
    <div>
      <Devider />
      <section id="projects" className="py-20 bg-[#11172a]">
        <div className="max-w-6xl mx-auto text-center px-4">
          {/* Section Title */}
          <motion.h2
            className="text-4xl md:text-5xl font-semibold mb-10 text-[#599692]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Projects
          </motion.h2>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectsData.map((project, index) => (
              <motion.div
                key={index}
                className={`bg-[#1a2238] p-6 rounded-lg shadow-xl ${
                  project.colSpan ? "md:col-span-2 mx-auto" : ""
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-[#dfe5ec]">
                  {project.title}
                </h3>
                <p className="text-[#626c7d] mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#599692] text-[#11172a] px-6 py-2 rounded-full font-semibold hover:opacity-90 transition-colors duration-300"
                >
                  View Project
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
