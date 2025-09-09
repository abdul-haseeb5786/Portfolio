"use client"
import { useState, useEffect, useCallback } from "react"
import { FaLinkedin, FaWhatsapp, FaEnvelope, FaGithub } from "react-icons/fa"
import { loadFull } from "tsparticles"
import { motion } from "framer-motion"
import ContactForm from "./ContactForm"
import Devider from "./Devider"

export default function Contact() {
  const [showArrow, setShowArrow] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [menuOpen, setMenuOpen] = useState(false)

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
      <Devider />
    <section id="contact" className="py-20 bg-[#11172a] text-[#626c7d]">
      <div className="max-w-4xl mx-auto text-center px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-semibold mb-10 text-[#599692]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Contact Me
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-[#dfe5ec] mb-8"
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
            {[
              { href: "mailto:abdulhaseebsohail115@gmail.com", icon: <FaEnvelope size={24} />, label: "Email" },
              { href: "https://www.linkedin.com/in/abdul-haseeb-0646a526a", icon: <FaLinkedin size={24} />, label: "LinkedIn" },
              { href: "https://wa.me/923228606129", icon: <FaWhatsapp size={24} />, label: "WhatsApp" },
              { href: "https://github.com/abdul-haseeb5786", icon: <FaGithub size={24} />, label: "GitHub" },
            ].map(({ href, icon, label }) => (
              <motion.a
              key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#599692] text-[#11172a] p-4 rounded-full hover:bg-[#4d827f] transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label={label}
              >
                {icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
                </div>
  )
}
