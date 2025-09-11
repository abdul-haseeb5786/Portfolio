"use client"
import React, { useState, useEffect } from "react"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import { motion } from "framer-motion"
import { useTheme } from "../context/ThemeContext"

const NavBar = () => {
  const { darkMode, setDarkMode } = useTheme();
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "education", "skills", "projects", "reviews", "contact"];
      let current = "home";

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (
          element &&
          window.scrollY >= element.offsetTop - 50 &&
          window.scrollY < element.offsetTop + element.offsetHeight - 50
        ) {
          current = section;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (!element) return;
    const offset = 80;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
    setMenuOpen(false);
  };

  return (
    <nav
      className="fixed top-0 w-full z-50 shadow-lg transition-all duration-300"
      style={{ backgroundColor: "#11172a" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a
            href="#"
            className="text-xl font-bold"
            style={{ color: "#dfe5ec" }}
          >
            Abdul Haseeb
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {["Home", "About", "Education", "Skills", "Projects", "Reviews", "Contact"].map((item) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  style={{
                    backgroundColor: activeSection === item.toLowerCase() ? "#599692" : "transparent",
                    color: activeSection === item.toLowerCase() ? "#dfe5ec" : "#626c7d",
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-md transition-colors"
              style={{ color: "#626c7d" }}
              aria-label="Toggle Menu"
            >
              {menuOpen ? <AiOutlineClose className="h-6 w-6" /> : <AiOutlineMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            className="md:hidden absolute top-16 left-0 right-0 py-2 px-4 space-y-2"
            style={{ backgroundColor: "#11172a" }}
          >
            {["Home", "About", "Education", "Skills", "Projects", "Contact"].map((item) => (
              <motion.button
                key={item}
                onClick={() => {
                  scrollToSection(item.toLowerCase());
                  setMenuOpen(false);
                }}
                className="w-full text-left px-4 py-3 rounded-lg transition-colors"
                style={{
                  backgroundColor: activeSection === item.toLowerCase() ? "#599692" : "transparent",
                  color: activeSection === item.toLowerCase() ? "#dfe5ec" : "#626c7d",
                }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;