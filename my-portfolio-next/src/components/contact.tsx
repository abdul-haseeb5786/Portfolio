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
        <section id="contact" className="py-24 bg-secondary/30">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8 text-foreground">
                            {t.contact.title} <span className="text-primary">{t.contact.subtitle}</span>
                        </h2>
                        <p className="text-lg text-muted mb-12 max-w-md">
                            {t.contact.description}
                        </p>

                        <div className="space-y-8">
                            {contactItems.map((item, idx) => (
                                <div key={idx} className="flex gap-6 items-start group">
                                    <div className="w-14 h-14 rounded-2xl bg-secondary border border-border flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all shadow-sm text-muted">
                                        {Object.values(iconMap)[idx] || <Mail size={24} />}
                                    </div>
                                    <div>
                                        <h4 className="text-sm uppercase tracking-widest text-primary font-bold mb-1">{item.label}</h4>
                                        <p className="text-xl font-medium text-foreground">{item.value}</p>
                                    </div>
                                </div>
                            ))}

                            {/* Social Links */}
                            <div className="pt-8 border-t border-border">
                                <h4 className="text-sm uppercase tracking-widest text-primary font-bold mb-6">Social Profiles</h4>
                                <div className="flex gap-4">
                                    {t.siteConfig.socials?.github && (
                                        <a
                                            href={t.siteConfig.socials.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-14 h-14 rounded-2xl bg-secondary border border-border flex items-center justify-center text-muted hover:bg-primary hover:text-primary-foreground transition-all shadow-sm"
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
                                            className="w-14 h-14 rounded-2xl bg-secondary border border-border flex items-center justify-center text-muted hover:bg-primary hover:text-primary-foreground transition-all shadow-sm"
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
                        className="bg-card p-8 md:p-12 rounded-3xl border border-border shadow-xl"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground">{t.contact.form.name}</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder={t.contact.form.namePlaceholder}
                                        required
                                        className="w-full px-6 py-4 bg-secondary rounded-xl border-none focus:ring-2 focus:ring-primary transition-all text-foreground placeholder:text-muted"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground">{t.contact.form.email}</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder={t.contact.form.emailPlaceholder}
                                        required
                                        className="w-full px-6 py-4 bg-secondary rounded-xl border-none focus:ring-2 focus:ring-primary transition-all text-foreground placeholder:text-muted"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground">{t.contact.form.subject}</label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder={t.contact.form.subjectPlaceholder}
                                    required
                                    className="w-full px-6 py-4 bg-secondary rounded-xl border-none focus:ring-2 focus:ring-primary transition-all text-foreground placeholder:text-muted"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground">{t.contact.form.message}</label>
                                <textarea
                                    name="message"
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder={t.contact.form.messagePlaceholder}
                                    required
                                    className="w-full px-6 py-4 bg-secondary rounded-xl border-none focus:ring-2 focus:ring-primary transition-all resize-none text-foreground placeholder:text-muted"
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
                                className="w-full py-4 bg-primary text-primary-foreground rounded-xl font-bold tracking-widest uppercase flex items-center justify-center gap-2 hover:brightness-90 transition-all shadow-lg shadow-primary/20 disabled:opacity-70 disabled:cursor-not-allowed"
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
