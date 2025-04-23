"use client"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import NavBar from "./components/NavBar"
import HeroSection from "./components/HeroSection"
import AboutMe from "./components/AboutMe"
import Education from "./components/Education"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"



export default function Home() {
  const [showArrow, setShowArrow] = useState(false)
  

  useEffect(() => {
    const handleScroll = () => {
      setShowArrow(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="bg-gradient-to-b from-gray-900 to-blue-900 text-white font-sans dark:bg-gray-100 dark:text-gray-900">
   
      <NavBar />
      <HeroSection />
      <AboutMe />
      <Education />
      <Skills />
      <Projects />
      <Contact />

      {/* Scroll-to-top Button */}
      {showArrow && (
        <motion.div
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 bg-blue-500 text-white p-4 rounded-full shadow-lg cursor-pointer hover:bg-blue-600 transition-colors duration-300 dark:bg-blue-600 dark:hover:bg-blue-700"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          ↑
        </motion.div>
      )}

      <footer className="py-4 bg-gray-800 text-center text-gray-400 dark:bg-gray-200 dark:text-gray-700">
        <p>© 2025 Abdul Haseeb. All Rights Reserved.</p>
      </footer>
    </div>
  )
}
