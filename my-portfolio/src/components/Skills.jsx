"use client"
import { motion } from "framer-motion"
import { 
  SiJavascript, SiTypescript, SiPython, SiDart,
  SiReact, SiNextdotjs, SiHtml5, SiCss3, SiBootstrap, SiTailwindcss,
  SiRedux, SiChakraui, 
  SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, SiFirebase, SiMongoose,
  SiFlutter, 
  SiDocker,
  SiAmazon,
  SiAmazonwebservices
} from "react-icons/si"
import { FaReact, FaGitAlt, FaGithub, FaServer, FaCogs } from "react-icons/fa"
import { TbApi, TbBrandAzure } from "react-icons/tb"


import Devider from "./Devider"

export default function Skills() {
const categories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Python", icon: <SiPython /> },
      { name: "Dart", icon: <SiDart /> },
    ],
  },
  {
    title: "Frontend Development",
    skills: [
      { name: "React", icon: <SiReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "HTML5", icon: <SiHtml5 /> },
      { name: "CSS3", icon: <SiCss3 /> },
      { name: "Bootstrap", icon: <SiBootstrap /> },
      { name: "Tailwind", icon: <SiTailwindcss /> },
      { name: "Hero UI", icon: <FaCogs /> }, // placeholder
      { name: "Chakra UI", icon: <SiChakraui /> },
      { name: "Redux Toolkit", icon: <SiRedux /> },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Mongoose", icon: <SiMongoose /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "Firebase", icon: <SiFirebase /> },
    ],
  },
  {
    title: "DevOps",
    skills: [
      { name: "AWS", icon: <SiAmazonwebservices /> },
      { name: "Azure", icon: <TbBrandAzure /> },
      { name: "Docker", icon: <SiDocker /> },
      { name: "CI/CD Pipeline", icon: <FaServer /> }, // placeholder
      { name: "GitHub Actions", icon: <FaGithub /> },
    ],
  },
  {
    title: "Mobile Development",
    skills: [
      { name: "Flutter", icon: <SiFlutter /> },
      { name: "React Native", icon: <FaReact /> },
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "RESTful APIs", icon: <TbApi /> },
    ],
  },
]



  return (
    <div>
      <Devider />
      <section id="skills" className="py-20 bg-[#11172a]">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            className="text-4xl md:text-5xl font-semibold mb-12 text-center text-[#599692]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Skills
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-10">
            {categories.map((category, idx) => (
              <motion.div
  key={idx}
  className="bg-[#1a2238] p-6 rounded-xl shadow-lg h-[300px] flex flex-col"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: idx * 0.2 }}
  viewport={{ once: true }}
>
  <h3 className="text-2xl font-bold text-[#dfe5ec] mb-4 text-center shrink-0">
    {category.title}
  </h3>
  <div className="space-y-4 overflow-y-auto pr-2 custom-scrollbar">
    {category.skills.map((skill, index) => (
      <div key={index}>
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2 text-[#dfe5ec] text-lg">
            {skill.icon && <span className="text-[#599692]">{skill.icon}</span>}
            {skill.name}
          </span>
         
        </div>
        <div className="w-full bg-[#626c7d] rounded-full h-2 mt-1">
          <div
            className="bg-[#599692] h-2 rounded-full"
            style={{ width: `${skill.proficiency}%` }}
          ></div>
        </div>
      </div>
    ))}
  </div>
</motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
