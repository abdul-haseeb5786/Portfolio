"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function About() {
    const { t } = useLanguage();

    const downloadCV = () => {
        const url = `https://drive.google.com/uc?export=download&id=1FjJxMQu_gHo1MurLQnyjD2TZ0o5z_re1`;
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `${t.siteConfig.name.replace(" ", "_")}_CV.pdf`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section id="about" className="py-24 bg-slate-50 dark:bg-zinc-900/50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="hidden md:block"
                    >
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4">
                                <div className="h-48 bg-[#599692]/10 rounded-2xl flex items-center justify-center p-8 text-center border border-[#599692]/20">
                                    <div>
                                        <h3 className="text-4xl font-bold text-[#599692]">2+</h3>
                                        <p className="text-sm font-medium">{t.about.stats.experience}</p>
                                    </div>
                                </div>
                                <div className="h-64 bg-white dark:bg-zinc-800 rounded-2xl shadow-sm border border-slate-100 dark:border-zinc-800" />
                            </div>
                            <div className="space-y-4 pt-12">
                                <div className="h-64 bg-white dark:bg-zinc-800 rounded-2xl shadow-sm border border-slate-100 dark:border-zinc-800" />
                                <div className="h-48 bg-blue-500/10 rounded-2xl flex items-center justify-center p-8 text-center border border-blue-500/20">
                                    <div>
                                        <h3 className="text-4xl font-bold text-blue-500">100+</h3>
                                        <p className="text-sm font-medium">{t.about.stats.projects}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tighter">
                            {t.about.title} <span className="text-[#599692]">{t.about.subtitle}</span>
                        </h2>
                        <div className="space-y-6 text-lg text-slate-600 dark:text-zinc-400 leading-relaxed">
                            {t.about.paragraphs.map((p: string, i: number) => (
                                <p key={i} dangerouslySetInnerHTML={{ __html: p.replace(/\*\*(.*?)\*\*/g, '<span class="text-slate-900 dark:text-white font-semibold underline decoration-[#599692] decoration-2">$1</span>').replace(/\*(.*?)\*/g, '<span class="text-slate-900 dark:text-white font-semibold italic">$1</span>') }} />
                            ))}
                        </div>

                        <div className="mt-12">
                            <button
                                onClick={downloadCV}
                                className="inline-flex items-center gap-2 px-8 py-4 bg-[#599692] text-white rounded-full font-semibold hover:bg-[#4a7d7a] transition-all"
                            >
                                <Download size={20} />
                                {t.about.downloadCV}
                            </button>
                        </div>
                    </motion.div>
                </div>

                {/* Education Section */}
                <div className="mt-24">
                    <h3 className="text-3xl font-bold mb-12 text-center tracking-tight text-slate-900 dark:text-white">
                        {t.about.education?.title}
                    </h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        {t.about.education?.history.map((edu: any) => (
                            <motion.div
                                key={edu.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: edu.id * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 p-8 rounded-2xl hover:shadow-lg transition-all hover:border-[#599692]/30 group"
                            >
                                <div className="text-[#599692] text-sm font-semibold mb-4 bg-[#599692]/10 inline-block px-3 py-1 rounded-full">
                                    {edu.date}
                                </div>
                                <h4 className="text-xl font-bold mb-3 group-hover:text-[#599692] transition-colors text-slate-900 dark:text-white">
                                    {edu.title}
                                </h4>
                                <p className="text-slate-600 dark:text-zinc-400 text-sm mb-6 leading-relaxed">
                                    {edu.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {edu.points.map((point: any, index: number) => (
                                        <span
                                            key={index}
                                            className="inline-flex items-center gap-2 text-xs font-medium bg-slate-50 dark:bg-zinc-800 px-3 py-1.5 rounded-full text-slate-700 dark:text-zinc-300"
                                        >
                                            <span>{point.icon}</span>
                                            <span>{point.text}</span>
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
