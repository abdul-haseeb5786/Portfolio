"use client"
import { useCallback } from "react"
import { loadFull } from "tsparticles"
import { motion } from "framer-motion"
import Devider from "./Devider"

export default function Education() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine)
  }, [])

  const educationData = [
    {
      id: 1,
      title: "Madrasa-tul-Madina",
      date: "Jun 2015 - Jan 2018",
      description: "Hifz-e-Quran Certification with Tajweed and Islamic Studies",
      points: [
        { icon: "📖", text: "Complete Quran Memorization" },
        { icon: "🕌", text: "Islamic Jurisprudence" },
      ],
    },
    {
      id: 2,
      title: "DAR-UL-MADINAH",
      date: "Jun 2022 - May 2023",
      description:
        "Matriculation in Computer Science with focus on fundamental concepts.",
      points: [{ icon: "📘", text: "Core CS Subjects" }],
    },
    {
      id: 3,
      title: "Saylani Mass IT Training",
      date: "Dec 2023 - Jan 2025",
      description:
        "Professional certification in MERN Stack Development with hands-on project experience.",
      points: [{ icon: "🏆", text: "3 Hackathon Wins" }],
    },
  ]

  return (
    <div>
    <Devider />
      <section id="education" className="py-20 bg-[#11172a]">
        <div className="max-w-6xl mx-auto px-4 relative">
          {/* Section Title */}
          <motion.h2
            className="text-4xl md:text-5xl font-semibold mb-16 text-center text-[#599692]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Education Timeline
          </motion.h2>

          {/* Timeline Container */}
          <div className="relative">
            {/* Vertical Line */}
            <motion.div
              className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-[#626c7d] transform -translate-x-1/2"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            />

            {/* Timeline Items */}
            <div className="space-y-12 md:space-y-20">
              {educationData.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="flex flex-col md:flex-row items-center gap-8"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ scale: 1.02 }}
                  transition={{
                    duration: 0.6,
                    type: "spring",
                    delay: index * 0.2,
                  }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  {/* Side Dot (Desktop) */}
                  <div
                    className={`hidden md:block w-1/2 ${
                      index % 2 === 0 ? "pr-8" : "pl-8 order-2"
                    }`}
                  >
                    <motion.div
                      className="relative h-full"
                      whileHover={{ scale: 1.1 }}
                    >
                      <div
                        className={`absolute ${
                          index % 2 === 0 ? "right-0 -mr-4" : "left-0 -ml-4"
                        } top-1/2 w-8 h-8 bg-[#599692] rounded-full transform -translate-y-1/2 shadow-lg hover:shadow-[#599692]/30 transition-shadow`}
                      />
                    </motion.div>
                  </div>

                  {/* Mobile Dot */}
                  <motion.div
                    className="md:hidden w-full flex justify-center"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.2 * index }}
                  >
                    <div className="w-6 h-6 bg-[#599692] rounded-full shadow-lg" />
                  </motion.div>

                  {/* Content Card */}
                  <motion.div
                    className={`w-full md:w-1/2 bg-[#1a2238] p-6 rounded-xl shadow-xl relative ${
                      index % 2 !== 0 ? "order-1" : ""
                    } hover:shadow-2xl transition-shadow duration-300`}
                    whileHover={{ rotate: index % 2 === 0 ? -1 : 1 }}
                  >
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 md:hidden w-8 h-8 bg-[#1a2238] rotate-45" />

                    <motion.h3
                      className="text-2xl font-bold mb-2 text-[#dfe5ec]"
                      whileHover={{ x: 10 }}
                    >
                      {item.title}
                    </motion.h3>
                    <motion.p
                      className="text-[#626c7d] text-sm mb-2"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      {item.date}
                    </motion.p>
                    <motion.div
                      className="space-y-4"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      <p className="text-[#dfe5ec]">{item.description}</p>
                      {item.points.map((point, idx) => (
                        <motion.div
                          key={idx}
                          className="flex items-center gap-2 text-sm text-[#599692]"
                          whileHover={{ scale: 1.05 }}
                        >
                          <span>{point.icon}</span>
                          <span>{point.text}</span>
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
