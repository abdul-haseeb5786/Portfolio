
"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function Home() {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowArrow(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-gray-900 text-white font-sans">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-gray-800 shadow-lg z-20">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center p-5">
          <div className="text-xl font-semibold">Abdul Haseeb</div>
          <div className="space-x-4 text-lg">
            {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="hover:text-blue-400 transition-colors duration-300"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="h-screen flex items-center justify-center bg-cover bg-center relative p-5"
        style={{ backgroundImage: 'url("/bg-image.jpg")' }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="text-center relative z-10">
          <h1 className="text-5xl font-bold mb-4">
            Hi, I’m Abdul Haseeb, a MERN Stack Developer
          </h1>
          <p className="text-lg mb-6">
            Creating dynamic, responsive, and user-friendly web experiences.
          </p>
          <button
            onClick={() => scrollToSection("about")}
            className="bg-blue-500 px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300"
          >
            Learn More
          </button>
        </div>
      </section>

      {/* About Me Section */}
        {/* About Me Section */}
        <section id="about" className="py-20 bg-gray-800">
  <div className="max-w-screen-xl mx-auto text-center">
    <h2 className="text-4xl font-semibold text-white mb-6">About Me</h2>
    <p className="text-lg text-gray-300 mb-6">
    Hi, I&apos;m Abdul Haseeb, a dedicated MERN Stack Developer with a strong passion for crafting dynamic, responsive, and user-friendly web applications. With a solid foundation in modern front-end and back-end technologies, I specialize in building scalable solutions that solve real-world problems.
    </p>
    <p className="text-lg text-gray-300 mb-6">
    My journey in web development started with a curiosity to create interactive websites and has grown into a professional commitment to deliver excellence. Whether it&apos;s a sleek UI or a robust back-end, I enjoy every step of turning ideas into reality through clean and efficient code.
    </p>
    <p className="text-lg text-gray-300 mb-6">
      Besides coding, I actively participate in learning communities, hackathons, and open-source projects to stay updated with the latest trends and tools in the tech world. My goal is to continually enhance my skills and contribute to impactful projects that make a difference.
    </p>

    {/* Education Section */}
    <div className="mt-10">
      <h3 className="text-3xl font-semibold text-white mb-4">Education</h3>
      <div className="text-lg text-gray-300 space-y-4">
        <p>
          <strong>Matriculation:</strong> Dar ul Madinah School, specialized in Computer Science.
        </p>
        <p className="text-lg text-gray-300">
              <strong>Certifications:</strong> Advanced Web Development (MERN Stack) - Saylani Institute
            </p>
      </div>
    </div>

    <p className="text-lg text-gray-300 mt-10">
      Technologies I work with: React, Next.js, Node.js, Express, MongoDB, PostgreSQL, Firebase, Tailwind CSS, and GitHub.
    </p>
  </div>
</section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-900">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-10">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white">
            {[
              "HTML5",
              "CSS3",
              "JavaScript",
              "TypeScript",
              "React",
              "Next.js",
              "Node.js",
              "MongoDB",
              "PostgreSQL",
              "Firebase",
              "Bootstrap",
              "Git & GitHub",
            ].map((skill) => (
              <div key={skill} className="skill-card">
                <h3 className="text-lg font-semibold">{skill}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-800">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-10">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-4">Project 1</h3>
              <p className="text-gray-300 mb-4">
                A web app built with React and Firebase that does amazing things.
              </p>
              <a href="#" className="text-blue-400 hover:underline">
                View Project
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-10">Contact</h2>
          <div className="flex justify-center gap-6">
            <a
              href="mailto:abdulhaseebsohail115@gmail.com"
              target="_blank"
              className="bg-blue-500 p-4 rounded-full hover:bg-blue-600 transition-colors duration-300"
            >
              <FaEnvelope size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/abdul-haseeb-0646a526a"
              target="_blank"
              className="bg-blue-500 p-4 rounded-full hover:bg-blue-600 transition-colors duration-300"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://wa.me/923228606129"
              target="_blank"
              className="bg-green-500 p-4 rounded-full hover:bg-green-600 transition-colors duration-300"
            >
              <FaWhatsapp size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Scroll-to-top Button */}
      {showArrow && (
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 bg-blue-500 text-white p-4 rounded-full shadow-lg cursor-pointer hover:bg-blue-600 transition-colors duration-300"
        >
          ↑
        </div>
      )}

      {/* Footer */}
      <footer className="py-4 bg-gray-800 text-center text-gray-400">
        <p>© 2024 Abdul Haseeb. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
