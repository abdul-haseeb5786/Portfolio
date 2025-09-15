"use client";
import { motion } from "framer-motion";
import Devider from "./Devider";

const projectsData = [
  {
    title: "Furniro Clone",
    description:
      "Responsive e-commerce site built with React, Firebase, and Tailwind CSS. Features user auth, dynamic routing, and product pages. Images are lazy-loaded for performance optimization.",
    link: "https://furniro-ecommerce-ten.vercel.app/",
    image: "furniro.PNG",
  },
  {
    title: "Shrinkly",
    description:
      "Modern URL shortener with support for custom slugs, link expiration, and user authentication. Built for reliability, security, and a clean user experience using MERN stack.",
    link: "https://shrinkly-beta.vercel.app/",
    image: "shrinklyPNG.PNG",
  },
  {
    title: "EMS (Employee Management System)",
    description:
      "A feature-rich employee management system built with the MERN stack. Includes task assignment, role-based login (admin/user), performance tracking, and a responsive dashboard interface.",
    link: "https://ems-orcin-pi.vercel.app/",
    image: "ems.PNG",
  },
  {
    title: "VScode Inspired Portfolio",
    description:
      "A VS Code-inspired portfolio website built with React, TypeScript, and Tailwind CSS. Features a code editor layout, interactive navigation, customizable sections, and a fully responsive design optimized for all devices.",
    link: "https://vscode-inspired-portfolio.vercel.app/",
    image: "vscode.PNG",
  },
  {
    title: "Beneficiary Management System",
    description:
      "Web app for organizations to manage and track beneficiaries using CNIC-based identification. Role-based access ensures security and streamlined data control for efficient operations.",
    link: "https://cute-crostata-9e00ad.netlify.app/",
    image: "bene.PNG",
  },
  {
    title: "Project Tracker",
    description:
      "Full-stack task manager using React, Express, MongoDB, and Tailwind CSS. Create, organize, and filter tasks in real time with a clean UI designed for better team productivity.",
    link: "https://project-tracker-ten-tawny.vercel.app/",
    image: "projecttracker.PNG",
  },
];

export default function Projects() {
  return (
    <div>
      <Devider />
      <section id="projects" className="py-20 px-20 bg-[#11172a]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              className="relative h-60 rounded-xl overflow-hidden shadow-lg group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              {/* Background Image (hover only) */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 group-hover:blur-[1px] transition duration-500"
                style={{ backgroundImage: `url(/${project.image})` }}
              ></div>

              {/* Content */}
              <div
  className="relative z-10 h-full flex flex-col items-center justify-center text-center 
             bg-[#1a2238] group-hover:bg-transparent p-4 transition-colors duration-500"
>
  <h3 className="text-xl font-semibold text-[#dfe5ec] mb-2 group-hover:opacity-0 transition">
    {project.title}
  </h3>
  <p className="text-sm text-[#9aa5b1] mb-3 group-hover:opacity-0 transition">
    {project.description}
  </p>

  <motion.a
    href={project.link}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-[#599692] text-[#11172a] px-4 py-1.5 rounded-full"
    whileTap={{ scale: 0.95 }}
    transition={{ duration: 0.4 }}
  >
    View Project
  </motion.a>
</div>

            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
