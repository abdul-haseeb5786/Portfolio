
"use client"
import { motion } from "framer-motion"
import Devider from "./Devider"

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
      <Devider />
      <section id="skills" className="py-20 bg-[#11172a]">
        <div className="max-w-6xl mx-auto text-center px-4">
          {/* Section Title */}
          <motion.h2
            className="text-4xl md:text-5xl font-semibold mb-10 text-[#599692]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Skills
          </motion.h2>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="bg-[#1a2238] p-4 rounded-lg shadow-lg"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5,}}
                whileHover={{ scale: 1.05, rotate: 5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg md:text-xl font-semibold text-[#dfe5ec]">
                  {skill.name}
                </h3>
                <div className="w-full bg-[#626c7d] rounded-full h-2 mt-2">
                  <div
                    className="bg-[#599692] h-2 rounded-full"
                    style={{ width: `${skill.proficiency}%` }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
