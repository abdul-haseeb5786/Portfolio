"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Users, Briefcase } from "lucide-react";

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
      icon: <Briefcase className="w-10 h-10 text-blue-500 mb-2" />,
      review: "Successfully delivered over 100 freelance projects globally.",
    },
    {
      name: "International Clients",
      role: "Global Trust",
      icon: <Users className="w-10 h-10 text-blue-500 mb-2" />,
      review: "Worked with clients from UK, US, Saudi Arabia, and more.",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviewsData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const current = reviewsData[index];

  return (
    <section id="reviews" className="py-20 bg-gray-900 text-white overflow-hidden">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl font-bold mb-10 text-blue-500"
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
                  className="w-16 h-16 mx-auto rounded-full mb-4 border-2 border-blue-500 object-cover"
                />
              ) : (
                <div className="flex justify-center">{current.icon}</div>
              )}

              <p className="text-lg italic text-gray-300 mb-6">“{current.review}”</p>
              <h4 className="text-xl font-semibold text-blue-400">{current.name}</h4>
              <p className="text-sm text-gray-500">{current.role}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {reviewsData.map((_, i) => (
            <span
              key={i}
              className={`h-2 w-2 rounded-full ${
                i === index ? "bg-blue-500" : "bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
