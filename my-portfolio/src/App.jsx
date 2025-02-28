"use client"
import { useState, useEffect, useCallback } from "react"
import { FaLinkedin, FaWhatsapp, FaEnvelope, FaGithub } from "react-icons/fa"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"
import { motion } from "framer-motion"
import Typewriter from "typewriter-effect"

export default function Home() {
  const [showArrow, setShowArrow] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [menuOpen, setMenuOpen] = useState(false)

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setShowArrow(window.scrollY > 300)

      const sections = ["home", "about", "skills", "projects", "contact"]
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
    if (!element) return;
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
    "HTML5", "CSS3", "JavaScript", "React", "Node.js", "MongoDB", "Express.js", "Next.js", "TypeScript", "Firebase", "Git", "RESTful APIs"
  ]

  return (
    <div className="bg-gradient-to-b from-gray-900 to-blue-900 text-white font-sans">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-opacity-90 bg-gray-900 shadow-lg z-20 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a href="#" className="text-xl font-bold text-white">
                Abdul Haseeb
              </a>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
                  <motion.button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`${
                      activeSection === item.toLowerCase()
                        ? "bg-blue-500 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white"
                    } px-3 py-2 rounded-md text-sm font-medium`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item}
                  </motion.button>
                ))}
              </div>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
              >
                {menuOpen ? <AiOutlineClose className="h-6 w-6" /> : <AiOutlineMenu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-gray-900 bg-opacity-95 fixed inset-0 flex flex-col items-center justify-center z-30">
            <div className="space-y-6">
              {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`${
                    activeSection === item.toLowerCase()
                      ? "bg-blue-500 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  } block px-6 py-3 rounded-md text-lg font-medium`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </div>
        )}
      </nav>
{/* Hero Section with Particles */}
<section id="home" className="h-screen flex items-center justify-center relative overflow-hidden">
  {/* Particles Background */}
  <Particles
    id="tsparticles"
    init={particlesInit}
    options={{
      fullScreen: { enable: false },
      background: { color: { value: "transparent" } },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: { enable: true, mode: "push" },
          onHover: { enable: true, mode: "repulse" },
          resize: true,
        },
        modes: {
          push: { quantity: 4 },
          repulse: { distance: 200, duration: 0.4 },
        },
      },
      particles: {
        color: { value: "#ffffff" },
        links: { color: "#ffffff", distance: 150, enable: true, opacity: 0.5, width: 1 },
        collisions: { enable: true },
        move: {
          direction: "none",
          enable: true,
          outModes: { default: "bounce" },
          random: false,
          speed: 2,
          straight: false,
        },
        number: { density: { enable: true, area: 800 }, value: 80 },
        opacity: { value: 0.5 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 5 } },
      },
      detectRetina: true,
    }}
    className="absolute inset-0"
  />

  {/* Content Wrapper */}
  <div className="flex flex-col items-center justify-center h-full text-center relative z-10 px-4 w-full">
    <motion.h1
      className="text-5xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      Hi, I'm Abdul Haseeb
    </motion.h1>

    <motion.div
      className="text-3xl md:text-4xl mb-6 text-blue-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
    >
      <Typewriter
        options={{
          strings: ["MERN Stack Developer", "Frontend Specialist", "Backend Enthusiast"],
          autoStart: true,
          loop: true,
        }}
      />
    </motion.div>

    <motion.p
      className="text-xl md:text-2xl mb-8 max-w-2xl text-gray-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 1 }}
    >
      Creating dynamic, responsive, and user-friendly web experiences.
    </motion.p>

    <motion.button
      onClick={() => scrollToSection("projects")}
      className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      Explore My Work
    </motion.button>
  </div>
</section>



      {/* About Me Section */}
      <section id="about" className="py-20 bg-gray-800">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.h2
            className="text-4xl md:text-5xl font-semibold text-blue-400 mb-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-gray-300 mb-6"
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
            className="text-lg md:text-xl text-gray-300 mb-6"
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

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto text-center px-4">
          <motion.h2
            className="text-4xl md:text-5xl font-semibold mb-10 text-blue-400"
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
                key={skill}
                className="bg-gray-800 p-4 rounded-lg shadow-lg"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5,  }}
                whileHover={{ scale: 1.05, rotate: 5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg md:text-xl font-semibold text-blue-300">{skill}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto text-center px-4">
          <motion.h2
            className="text-4xl md:text-5xl font-semibold mb-10 text-blue-400"
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
              className="bg-gray-700 p-6 rounded-lg shadow-xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-blue-300">Furniro Clone</h3>
              <p className="text-gray-300 mb-4">
                Developed a responsive e-commerce website clone using React and Firebase. Implemented authentication,
                dynamic routing, and product page structure.
              </p>
              <a
                href="https://cheery-centaur-d47200.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-600 transition-colors duration-300"
              >
                View Project
              </a>
            </motion.div>

            {/* Project 2 */}
            <motion.div
              className="bg-gray-700 p-6 rounded-lg shadow-xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-blue-300">Beneficiary Management System</h3>
              <p className="text-gray-300 mb-4">
                Designed an app to help organizations efficiently manage and track beneficiaries. Implemented CNIC-based
                system with role-based access.
              </p>
              <a
                href="https://cute-crostata-9e00ad.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-600 transition-colors duration-300"
              >
                View Project
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.h2
            className="text-4xl md:text-5xl font-semibold mb-10 text-blue-400"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Contact Me
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-gray-300 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </motion.p>
          <div className="flex justify-center gap-6">
            <motion.a
              href="mailto:abdulhaseebsohail115@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 p-4 rounded-full hover:bg-blue-600 transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaEnvelope size={24} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/abdul-haseeb-0646a526a"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 p-4 rounded-full hover:bg-blue-600 transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin size={24} />
            </motion.a>
            <motion.a
              href="https://wa.me/923228606129"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 p-4 rounded-full hover:bg-blue-600 transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaWhatsapp size={24} />
            </motion.a>
            <motion.a
              href="https://github.com/abdulhaseeb200"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 p-4 rounded-full hover:bg-blue-600 transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub size={24} />
            </motion.a>
          </div>
        </div>
      </section>

      {/* Scroll-to-top Button */}
      {showArrow && (
        <motion.div
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 bg-blue-500 text-white p-4 rounded-full shadow-lg cursor-pointer hover:bg-blue-600 transition-colors duration-300"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          ↑
        </motion.div>
      )}

      {/* Footer */}
      <footer className="py-4 bg-gray-800 text-center text-gray-400">
        <p>© 2024 Abdul Haseeb. All Rights Reserved.</p>
      </footer>
    </div>
  )
}

