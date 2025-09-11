"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { Users, Briefcase } from "lucide-react";
import Devider from "./Devider";

export default function Reviews() {
  const reviewsData = [
    {
      name: "James Anderson",
      role: "Startup Founder, UK",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      review:
        "Working with Haseeb was a fantastic experience. He delivered exactly what we needed, on time and with clean code.",
    },
    {
      name: "Emily Stone",
      role: "Project Manager, US",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      review:
        "Very reliable and professional. Haseeb understood our requirements clearly and exceeded expectations.",
    },
    {
      name: "Ahmed Khalid",
      role: "Freelance Client, Saudi Arabia",
      image: "https://randomuser.me/api/portraits/men/50.jpg",
      review:
        "Great communication and impressive React skills. He built a secure and fast web app for us. Highly recommended!",
    },
    {
      name: "100+ Orders Completed",
      role: "Milestone",
      icon: <Briefcase className="w-10 h-10 text-[#599692] mb-2" />,
      review: "Successfully delivered over 100 freelance projects globally.",
    },
    {
      name: "International Clients",
      role: "Global Trust",
      icon: <Users className="w-10 h-10 text-[#599692] mb-2" />,
      review: "Worked with clients from UK, US, Saudi Arabia, and more.",
    },
  ];

  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  const startAutoSlide = () => {
    stopAutoSlide();
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviewsData.length);
    }, 5000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  const current = reviewsData[index];

  return (
    <div>

    <Devider />
    <section
    id="reviews"
    className="py-20 bg-[#11172a] text-[#626c7d] overflow-hidden"
    onMouseEnter={stopAutoSlide}
    onMouseLeave={startAutoSlide}
    >
      <div className="max-w-2xl mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl font-bold mb-10 text-[#599692]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          What Clients Say
        </motion.h2>

        <div className="relative h-64">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              className="absolute inset-0 px-4"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
              >
              {current.image ? (
                <img
                src={current.image}
                  alt={current.name}
                  className="w-16 h-16 mx-auto rounded-full mb-4 border-2 border-[#599692] object-cover"
                  />
              ) : (
                <div className="flex justify-center">{current.icon}</div>
              )}

              <p className="text-lg italic text-[#dfe5ec] mb-6">
                “{current.review}”
              </p>
              <h4 className="text-xl font-semibold text-[#599692]">
                {current.name}
              </h4>
              <p className="text-sm text-[#626c7d]">{current.role}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {reviewsData.map((_, i) => (
            <span
            key={i}
              onClick={() => setIndex(i)}
              className={`h-3 w-3 rounded-full cursor-pointer transition-colors ${
                i === index ? "bg-[#599692]" : "bg-[#626c7d]"
              }`}
              />
          ))}
        </div>
      </div>
    </section>
              </div>
  );
}
