"use client"
import { useState, useEffect, useCallback } from "react"

import { loadFull } from "tsparticles"
import { motion } from "framer-motion"


export default function Skills() {
  
  const skills = [
    { name: "HTML5", proficiency: 90 },
    { name: "CSS3", proficiency: 85 },
    { name: "JavaScript", proficiency: 80 },
    { name: "React", proficiency: 85 },
    { name: "Node.js", proficiency: 75 },
    { name: "MongoDB", proficiency: 70 },
    { name: "Express.js", proficiency: 75 },
    { name: "Next.js", proficiency: 80 },
    { name: "TypeScript", proficiency: 70 },
    { name: "Firebase", proficiency: 65 },
    { name: "Git", proficiency: 85 },
    { name: "RESTful APIs", proficiency: 80 },
  ]

    return (
        <div>
               <section id="skills" className="py-20 bg-gray-900 dark:bg-gray-100">
        <div className="max-w-6xl mx-auto text-center px-4">
          <motion.h2
            className="text-4xl md:text-5xl font-semibold mb-10 text-blue-400 dark:text-blue-600"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Skills
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="bg-gray-800 p-4 rounded-lg shadow-lg dark:bg-gray-200"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05, rotate: 5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg md:text-xl font-semibold text-blue-300 dark:text-blue-600">{skill.name}</h3>
                <div className="w-full bg-gray-700 rounded-full h-2 mt-2 dark:bg-gray-300">
                  <div
                    className="bg-blue-500 h-2 rounded-full dark:bg-blue-600"
                    style={{ width: `${skill.proficiency}%` }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
        </div>
    );
}
