"use client"
import {  useCallback } from "react"
import { loadFull } from "tsparticles"
import { motion } from "framer-motion"
// import { useTheme } from "../context/ThemeContext"


export default function Education() {

  // Instead of local darkMode state, we use the one provided by context
//   const { darkMode } = useTheme()

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine)
  }, [])

  


 

  

  return (
    <div>
      <section id="education" className="py-20 bg-gray-800 dark:bg-gray-200">
        <div className="max-w-6xl mx-auto px-4 relative">
          {/* Section Title */}
          <motion.h2
            className="text-4xl md:text-5xl font-semibold mb-16 text-center text-blue-400 dark:text-blue-600"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Education Timeline
          </motion.h2>

          {/* Timeline Container */}
          <div className="relative">
            {/* Vertical Line (Desktop Only) */}
            <motion.div
              className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gray-600 dark:bg-gray-400 transform -translate-x-1/2"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            />

            {/* Timeline Items */}
            <div className="space-y-12 md:space-y-20">
              {/* Madrasa-tul-Madina Item */}
              <motion.div
                className="flex flex-col md:flex-row items-center gap-8"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.6, type: "spring" }}
                viewport={{ once: true, margin: "-100px" }}
              >
                {/* Left Side (Desktop) */}
                <div className="hidden md:block w-1/2 pr-8">
                  <motion.div
                    className="relative h-full"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="absolute right-0 top-1/2 -mr-4 w-8 h-8 bg-blue-400 rounded-full transform -translate-y-1/2 dark:bg-blue-600 shadow-lg hover:shadow-blue-400/30 transition-shadow" />
                  </motion.div>
                </div>

                {/* Mobile Dot */}
                <motion.div
                  className="md:hidden w-full flex justify-center"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="w-6 h-6 bg-blue-400 rounded-full dark:bg-blue-600 shadow-lg" />
                </motion.div>

                {/* Content Card */}
                <motion.div
                  className="w-full md:w-1/2 bg-gray-700 p-6 rounded-xl shadow-xl dark:bg-gray-100 relative hover:shadow-2xl transition-shadow duration-300"
                  whileHover={{ rotate: -1 }}
                >
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 md:hidden w-8 h-8 bg-gray-700 rotate-45 dark:bg-gray-100" />
                  <motion.h3
                    className="text-2xl font-bold mb-2 text-blue-300 dark:text-blue-600"
                    whileHover={{ x: 10 }}
                  >
                    Madrasa-tul-Madina
                  </motion.h3>
                  <motion.p
                    className="text-gray-400 dark:text-gray-600 text-sm mb-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    Jun 2015 - Jan 2018
                  </motion.p>
                  <motion.div
                    className="space-y-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <p className="text-gray-300 dark:text-gray-700">
                      Hifz-e-Quran Certification with Tajweed and Islamic Studies
                    </p>
                    <motion.div
                      className="flex items-center gap-2 text-sm text-blue-300 dark:text-blue-600"
                      whileHover={{ scale: 1.05 }}
                    >
                      <span>📖</span>
                      <span>Complete Quran Memorization</span>
                    </motion.div>
                    <motion.div
                      className="flex items-center gap-2 text-sm text-blue-300 dark:text-blue-600"
                      whileHover={{ scale: 1.05 }}
                    >
                      <span>🕌</span>
                      <span>Islamic Jurisprudence</span>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* DAR-UL-MADINAH Item */}
              <motion.div
                className="flex flex-col md:flex-row items-center gap-8"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.6, type: "spring", delay: 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                {/* Right Side (Desktop) */}
                <div className="hidden md:block w-1/2 pl-8 order-2">
                  <motion.div
                    className="relative h-full"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="absolute left-0 top-1/2 -ml-4 w-8 h-8 bg-blue-400 rounded-full transform -translate-y-1/2 dark:bg-blue-600 shadow-lg hover:shadow-blue-400/30 transition-shadow" />
                  </motion.div>
                </div>

                {/* Mobile Dot */}
                <motion.div
                  className="md:hidden w-full flex justify-center"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="w-6 h-6 bg-blue-400 rounded-full dark:bg-blue-600 shadow-lg" />
                </motion.div>

                {/* Content Card */}
                <motion.div
                  className="w-full md:w-1/2 bg-gray-700 p-6 rounded-xl shadow-xl dark:bg-gray-100 relative order-1 hover:shadow-2xl transition-shadow duration-300"
                  whileHover={{ rotate: 1 }}
                >
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 md:hidden w-8 h-8 bg-gray-700 rotate-45 dark:bg-gray-100" />
                  <motion.h3
                    className="text-2xl font-bold mb-2 text-blue-300 dark:text-blue-600"
                    whileHover={{ x: 10 }}
                  >
                    DAR-UL-MADINAH
                  </motion.h3>
                  <motion.p
                    className="text-gray-400 dark:text-gray-600 text-sm mb-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    Jun 2022 - May 2023
                  </motion.p>
                  <motion.div
                    className="space-y-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    <p className="text-gray-300 dark:text-gray-700">
                      Matriculation in Computer Science with focus on fundamental concepts.
                    </p>
                    <motion.div
                      className="flex items-center gap-2 text-sm text-blue-300 dark:text-blue-600"
                      whileHover={{ scale: 1.05 }}
                    >
                      <span>📘</span>
                      <span>Core CS Subjects</span>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Saylani Item */}
              <motion.div
                className="flex flex-col md:flex-row items-center gap-8"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.6, type: "spring", delay: 0.4 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                {/* Left Side (Desktop) */}
                <div className="hidden md:block w-1/2 pr-8">
                  <motion.div
                    className="relative h-full"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="absolute right-0 top-1/2 -mr-4 w-8 h-8 bg-blue-400 rounded-full transform -translate-y-1/2 dark:bg-blue-600 shadow-lg hover:shadow-blue-400/30 transition-shadow" />
                  </motion.div>
                </div>

                {/* Mobile Dot */}
                <motion.div
                  className="md:hidden w-full flex justify-center"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="w-6 h-6 bg-blue-400 rounded-full dark:bg-blue-600 shadow-lg" />
                </motion.div>

                {/* Content Card */}
                <motion.div
                  className="w-full md:w-1/2 bg-gray-700 p-6 rounded-xl shadow-xl dark:bg-gray-100 relative hover:shadow-2xl transition-shadow duration-300"
                  whileHover={{ rotate: -1 }}
                >
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 md:hidden w-8 h-8 bg-gray-700 rotate-45 dark:bg-gray-100" />
                  <motion.h3
                    className="text-2xl font-bold mb-2 text-blue-300 dark:text-blue-600"
                    whileHover={{ x: 10 }}
                  >
                    Saylani Mass IT Training
                  </motion.h3>
                  <motion.p
                    className="text-gray-400 dark:text-gray-600 text-sm mb-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                  >
                    Dec 2023 - Jan 2025
                  </motion.p>
                  <motion.div
                    className="space-y-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    <p className="text-gray-300 dark:text-gray-700">
                      Professional certification in MERN Stack Development with hands-on project experience.
                    </p>
                    <motion.div
                      className="flex items-center gap-2 text-sm text-blue-300 dark:text-blue-600"
                      whileHover={{ scale: 1.05 }}
                    >
                      <span>🏆</span>
                      <span>3 Hackathon Wins</span>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
