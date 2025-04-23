"use client";
import React from 'react';
import { useCallback } from "react";

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { useTheme } from '../context/ThemeContext';


// Import useTheme from your context
// import { useTheme } from "./context/ThemeContext"; // Adjust path if needed

const HeroSection = () => {
  const { darkMode } = useTheme(); // Get darkMode from context

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
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
  };

  return (
    <div>
      <section id="home" className="h-screen flex items-center justify-center relative overflow-hidden">
       
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
              number: { density: { enable: true, area: 800 }, value: 40 },
              opacity: { value: 0.5 },
              shape: { type: "circle" },
              size: { value: { min: 1, max: 5 } },
            },
            detectRetina: true,
          }}
          className="absolute inset-0"
        />

        {/* Content */}
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
            className="text-3xl md:text-4xl mb-6 text-blue-300 dark:text-blue-600"
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
            className="text-xl md:text-2xl mb-8 max-w-2xl text-gray-300 dark:text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
          >
            Creating dynamic, responsive, and user-friendly web experiences.
          </motion.p>

          <motion.button
            onClick={() => scrollToSection("projects")}
            className="bg-sky-800 hover:bg-sky-950 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg dark:bg-blue-600 dark:hover:bg-blue-700"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore My Work
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
