"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const iconMap: Record<string, any> = {
    Email: <Mail size={24} />,
    Phone: <Phone size={24} />,
    Location: <MapPin size={24} />,
};

export default function Contact() {
    const { t } = useLanguage();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setStatus("idle");

        try {
            const res = await fetch("https://email-sender-one-dun.vercel.app/send", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...formData,
                    receiver_email: "abdulhaseebsohail115@gmail.com",
                }),
            });

            if (res.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", subject: "", message: "" });
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        } finally {
            setLoading(false);
        }
    };

    const contactItems = [
        { label: t.contact.email, value: t.siteConfig.email },
        { label: t.contact.phone, value: t.siteConfig.phone },
        { label: t.contact.location, value: t.siteConfig.location },
    ];

    return (
        <section id="contact" className="py-24 bg-slate-50 dark:bg-zinc-900/50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8 text-slate-900 dark:text-white">
                            {t.contact.title} <span className="text-[#599692]">{t.contact.subtitle}</span>
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-zinc-400 mb-12 max-w-md">
                            {t.contact.description}
                        </p>

                        <div className="space-y-8">
                            {contactItems.map((item, idx) => (
                                <div key={idx} className="flex gap-6 items-start group">
                                    <div className="w-14 h-14 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 flex items-center justify-center group-hover:bg-[#599692] group-hover:text-white transition-all shadow-sm text-slate-600 dark:text-zinc-400">
                                        {Object.values(iconMap)[idx] || <Mail size={24} />}
                                    </div>
                                    <div>
                                        <h4 className="text-sm uppercase tracking-widest text-[#599692] font-bold mb-1">{item.label}</h4>
                                        <p className="text-xl font-medium text-slate-900 dark:text-white">{item.value}</p>
                                    </div>
                                </div>
                            ))}

                            {/* Social Links */}
                            <div className="pt-8 border-t border-slate-200 dark:border-zinc-800">
                                <h4 className="text-sm uppercase tracking-widest text-[#599692] font-bold mb-6">Social Profiles</h4>
                                <div className="flex gap-4">
                                    {t.siteConfig.socials?.github && (
                                        <a
                                            href={t.siteConfig.socials.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-14 h-14 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 flex items-center justify-center text-slate-600 dark:text-zinc-400 hover:bg-[#599692] hover:text-white transition-all shadow-sm"
                                            title="GitHub"
                                        >
                                            <Github size={24} />
                                        </a>
                                    )}
                                    {t.siteConfig.socials?.linkedin && (
                                        <a
                                            href={t.siteConfig.socials.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-14 h-14 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 flex items-center justify-center text-slate-600 dark:text-zinc-400 hover:bg-[#599692] hover:text-white transition-all shadow-sm"
                                            title="LinkedIn"
                                        >
                                            <Linkedin size={24} />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="bg-white dark:bg-zinc-900 p-8 md:p-12 rounded-3xl border border-slate-100 dark:border-zinc-800 shadow-xl"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold uppercase tracking-widest text-slate-500 dark:text-zinc-500">{t.contact.form.name}</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder={t.contact.form.namePlaceholder}
                                        required
                                        className="w-full px-6 py-4 bg-slate-50 dark:bg-zinc-800 rounded-xl border-none focus:ring-2 focus:ring-[#599692] transition-all text-slate-900 dark:text-white placeholder:text-slate-400"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold uppercase tracking-widest text-slate-500 dark:text-zinc-500">{t.contact.form.email}</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder={t.contact.form.emailPlaceholder}
                                        required
                                        className="w-full px-6 py-4 bg-slate-50 dark:bg-zinc-800 rounded-xl border-none focus:ring-2 focus:ring-[#599692] transition-all text-slate-900 dark:text-white placeholder:text-slate-400"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold uppercase tracking-widest text-slate-500 dark:text-zinc-500">{t.contact.form.subject}</label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder={t.contact.form.subjectPlaceholder}
                                    required
                                    className="w-full px-6 py-4 bg-slate-50 dark:bg-zinc-800 rounded-xl border-none focus:ring-2 focus:ring-[#599692] transition-all text-slate-900 dark:text-white placeholder:text-slate-400"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold uppercase tracking-widest text-slate-500 dark:text-zinc-500">{t.contact.form.message}</label>
                                <textarea
                                    name="message"
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder={t.contact.form.messagePlaceholder}
                                    required
                                    className="w-full px-6 py-4 bg-slate-50 dark:bg-zinc-800 rounded-xl border-none focus:ring-2 focus:ring-[#599692] transition-all resize-none text-slate-900 dark:text-white placeholder:text-slate-400"
                                />
                            </div>

                            {status === "success" && (
                                <p className="text-green-500 text-sm font-medium bg-green-500/10 p-3 rounded-lg">
                                    {t.common?.success || "Message sent successfully!"}
                                </p>
                            )}
                            {status === "error" && (
                                <p className="text-red-500 text-sm font-medium bg-red-500/10 p-3 rounded-lg">
                                    {t.common?.error || "Failed to send message. Please try again."}
                                </p>
                            )}

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full py-4 bg-[#599692] text-white rounded-xl font-bold tracking-widest uppercase flex items-center justify-center gap-2 hover:bg-[#4a7d7a] transition-all shadow-lg shadow-[#599692]/20 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {loading ? (t.common?.loading || "Sending...") : t.contact.form.send} <Send size={18} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
