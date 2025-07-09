"use client"
import { motion } from "framer-motion"


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
            {/* Project 1 */}
            <motion.div
              className="bg-gray-700 p-6 rounded-lg shadow-xl dark:bg-gray-100"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-blue-300 dark:text-blue-600">Furniro Clone</h3>
              <p className="text-gray-300 mb-4 dark:text-gray-700">
                Developed a responsive e-commerce website clone using React, Firebase, and Tailwind CSS. Implemented
                features like user authentication, dynamic routing, and a product page structure. Optimized performance
                by lazy loading images and reducing bundle size.
              </p>
              <a
                href="https://furniro-ecommerce-ten.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-600 transition-colors duration-300 dark:bg-blue-600 dark:hover:bg-blue-700"
              >
                View Project
              </a>
            </motion.div>

            {/* Project 2 */}
            <motion.div
              className="bg-gray-700 p-6 rounded-lg shadow-xl dark:bg-gray-100"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-blue-300 dark:text-blue-600">
                Beneficiary Management System
              </h3>
              <p className="text-gray-300 mb-4 dark:text-gray-700">
                Designed an app to help organizations efficiently manage and track beneficiaries. Implemented CNIC-based
                system with role-based access.
              </p>
              <a
                href="https://cute-crostata-9e00ad.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-600 transition-colors duration-300 dark:bg-blue-600 dark:hover:bg-blue-700"
              >
                View Project
              </a>
            </motion.div>
            <motion.div
  className="bg-gray-700 p-6 rounded-lg shadow-xl dark:bg-gray-100 md:col-span-2 mx-auto"
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.5 }}
  whileHover={{ scale: 1.05 }}
  viewport={{ once: true }}
>
  <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-blue-300 dark:text-blue-600">
    Project Tracker
  </h3>
  <p className="text-gray-300 mb-4 dark:text-gray-700">
    Full-stack task management app using React, Express.js, MongoDB & Tailwind CSS. Create, categorize, and filter tasks with real-time updates. Clean, scalable code with modern UI. Built for productivity and efficient project tracking.
  </p>
  <a
    href="https://project-tracker-ten-tawny.vercel.app/"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block bg-blue-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-600 transition-colors duration-300 dark:bg-blue-600 dark:hover:bg-blue-700"
  >
    View Project
  </a>
</motion.div>

          </div>
        </div>
      </section>
        </div>
    );
}


