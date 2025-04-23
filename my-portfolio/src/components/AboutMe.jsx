"use client"
import React, { useCallback, useEffect, useState } from "react"
import { loadFull } from "tsparticles"
import { motion } from "framer-motion"
import { useTheme } from "../context/ThemeContext"


export default function AboutMe() {
  const [showArrow, setShowArrow] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [menuOpen, setMenuOpen] = useState(false)

  const { darkMode } = useTheme() // Using context for darkMode

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setShowArrow(window.scrollY > 300)

      const sections = ["home", "about", "education", "skills", "projects", "contact"]
      let current = "home"

      sections.forEach((section) => {
        const element = document.getElementById(section)
        if (
          element &&
          window.scrollY >= element.offsetTop - 50 &&
          window.scrollY < element.offsetTop + element.offsetHeight - 50
        ) {
          current = section
        }
      })

      setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (!element) return
    const offset = 80
    const bodyRect = document.body.getBoundingClientRect().top
    const elementRect = element.getBoundingClientRect().top
    const elementPosition = elementRect - bodyRect
    const offsetPosition = elementPosition - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    })
    setMenuOpen(false)
  }

  return (
    <div>
      <section id="about" className="py-20 bg-gray-800 dark:bg-gray-200">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.h2
            className="text-4xl md:text-5xl font-semibold text-blue-400 mb-6 dark:text-blue-600"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-gray-300 mb-6 dark:text-gray-700"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            Hi, I'm Abdul Haseeb, a dedicated MERN Stack Developer with a strong passion for crafting dynamic,
            responsive, and user-friendly web applications. With a solid foundation in modern front-end and back-end
            technologies, I specialize in building scalable solutions that solve real-world problems.
          </motion.p>
          <motion.p
            className="text-lg md:text-xl text-gray-300 mb-6 dark:text-gray-700"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            viewport={{ once: true }}
          >
            My journey in web development started with a curiosity to create interactive websites and has grown into a
            professional commitment to deliver excellence. Whether it's a sleek UI or a robust back-end, I enjoy every
            step of turning ideas into reality through clean and efficient code.
          </motion.p>
        </div>
      </section>
    </div>
  )
}
