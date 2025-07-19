"use client"
import { useState, useEffect, useCallback } from "react"
import { FaLinkedin, FaWhatsapp, FaEnvelope, FaGithub } from "react-icons/fa"
import { loadFull } from "tsparticles"
import { motion } from "framer-motion"
import ContactForm from "./ContactForm"

export default function Contact() {
  const [showArrow, setShowArrow] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [menuOpen, setMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false) // Added dark mode state

  // Toggle dark/light mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

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
             <section id="contact" className="py-20 bg-gray-800 dark:bg-gray-100">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.h2
            className="text-4xl md:text-5xl font-semibold mb-10 text-blue-400 dark:text-blue-600"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Contact Me
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-gray-300 mb-8 dark:text-gray-700"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </motion.p>
          <div className="flex flex-col gap-16">

          <ContactForm />
          <div className="flex justify-center gap-6">
            <motion.a
              href="mailto:abdulhaseebsohail115@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 p-4 rounded-full hover:bg-blue-600 transition-colors duration-300 dark:bg-blue-600 dark:hover:bg-blue-700"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Email"
              >
              <FaEnvelope size={24} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/abdul-haseeb-0646a526a"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 p-4 rounded-full hover:bg-blue-600 transition-colors duration-300 dark:bg-blue-600 dark:hover:bg-blue-700"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </motion.a>
            <motion.a
              href="https://wa.me/923228606129"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 p-4 rounded-full hover:bg-blue-600 transition-colors duration-300 dark:bg-blue-600 dark:hover:bg-blue-700"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={24} />
            </motion.a>
            <motion.a
              href="https://github.com/abdul-haseeb2057"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 p-4 rounded-full hover:bg-blue-600 transition-colors duration-300 dark:bg-blue-600 dark:hover:bg-blue-700"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="GitHub"
              >
              <FaGithub size={24} />
            </motion.a>
          </div>
              </div>
        </div>
      </section>
        </div>
    );
  }


