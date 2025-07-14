"use client"
import { useState } from "react"
import { motion } from "framer-motion"

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })

  const [buttonText, setButtonText] = useState("Send Message")
  const [isLoading, setIsLoading] = useState(false)
  const [isSend, setIsSend] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { name, email, subject, message } = form
    setIsLoading(true)
    setButtonText("Sending...")

    try {
      const res = await fetch("https://email-sender-one-dun.vercel.app/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
          receiver_email: "abdulhaseebsohail115@gmail.com",
        }),
      })

      if (res.ok) {
        setForm({ name: "", email: "", subject: "", message: "" })
        setButtonText("Message Sent Successfully ✅")
        setIsSend(true)
        setTimeout(() => {
          setButtonText("Send Message")
          setIsSend(false)
        }, 2000)
      } else {
        const data = await res.json()
        console.error("Error:", data.message)
        setButtonText("Failed to Send ❌")
        setTimeout(() => {
          setButtonText("Send Message")
        }, 5000)
      }
    } catch (err) {
      console.error(err)
      setButtonText("Error Sending ❌")
      setTimeout(() => {
        setButtonText("Send Message")
      }, 5000)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="w-full max-w-lg mx-auto px-6 py-8 rounded-xl shadow-md bg-gray-900 border border-gray-700"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h3 className="text-2xl font-semibold text-white mb-6 text-center">
        Let's Connect
      </h3>

      <div className="grid grid-cols-1 gap-4">
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
          required
          className="px-4 py-2 rounded-md bg-gray-800 border border-gray-600 text-sm text-white"
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          required
          className="px-4 py-2 rounded-md bg-gray-800 border border-gray-600 text-sm text-white"
        />
        <input
          type="text"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          placeholder="Subject"
          required
          className="px-4 py-2 rounded-md bg-gray-800 border border-gray-600 text-sm text-white"
        />
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Message"
          rows={4}
          required
          className="px-4 py-2 rounded-md bg-gray-800 border border-gray-600 text-sm text-white resize-none"
        />
      </div>

      <motion.button
        whileHover={{ scale: !isLoading && !isSend ? 1.03 : 1 }}
        whileTap={{ scale: !isLoading && !isSend ? 0.97 : 1 }}
        type="submit"
        disabled={isLoading || isSend}
        className={`mt-6 w-full text-sm py-2 rounded-md transition-all duration-300 text-white
          ${
            isLoading
              ? "bg-gray-400 cursor-not-allowed"
              : isSend
              ? "bg-green-600 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          }
        `}
      >
        {buttonText}
      </motion.button>
    </motion.form>
  )
}
