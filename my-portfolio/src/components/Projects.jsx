"use client";
import { motion } from "framer-motion";

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
    title: "Project Tracker",
    description:
    "Full-stack task manager using React, Express, MongoDB, and Tailwind CSS. Create, organize, and filter tasks in real time with a clean UI designed for better team productivity.",
    link: "https://project-tracker-ten-tawny.vercel.app/",
  },
  {
    title: "Beneficiary Management System",
    description:
      "Web app for organizations to manage and track beneficiaries using CNIC-based identification. Role-based access ensures security and streamlined data control for efficient operations.",
    link: "https://cute-crostata-9e00ad.netlify.app/",
    colSpan: true,
  },
];


export default function Projects() {
  return (
    <div>
      <section id="projects" className="py-20 bg-gray-800 dark:bg-gray-200">
        <div className="max-w-6xl mx-auto text-center px-4">
          <motion.h2
            className="text-4xl md:text-5xl font-semibold mb-10 text-blue-400 dark:text-blue-600"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Projects
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectsData.map((project, index) => (
              <motion.div
                key={index}
                className={`bg-gray-700 p-6 rounded-lg shadow-xl dark:bg-gray-100 ${
                  project.colSpan ? "md:col-span-2 mx-auto" : ""
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-blue-300 dark:text-blue-600">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 dark:text-gray-700">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-600 transition-colors duration-300 dark:bg-blue-600 dark:hover:bg-blue-700"
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
