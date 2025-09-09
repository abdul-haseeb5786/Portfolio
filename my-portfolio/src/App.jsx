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
import Reviews from "./components/Reviews"
import Devider from "./components/Devider"



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
    <div className=" text-white font-sans dark:text-gray-900" style={{ backgroundColor: "#11172a" }}>
   
      <NavBar />
      <HeroSection />
      <AboutMe />
      <Education />
      <Skills />
      <Projects />
      <Reviews />
      <Contact />

      {/* Scroll-to-top Button */}
      {showArrow && (
        <motion.div
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 bg-[#599692] text-[#11172a] p-4 rounded-full shadow-lg cursor-pointer 
hover:bg-[#4d827f] hover:text-white transition-colors duration-300"
initial={{ opacity: 0, y: 50 }}

          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          ↑
        </motion.div>
      )}
<Devider />
      <footer className="py-4 bg-[#11172a] text-center text-[#599692]">
  <p>© 2025 Abdul Haseeb. All Rights Reserved.</p>
</footer>

    </div>
  )
}
