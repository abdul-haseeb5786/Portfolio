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
        <section id="about" className="py-24 bg-secondary/30">
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
                                <div className="h-48 bg-primary/10 rounded-2xl flex items-center justify-center p-8 text-center border border-primary/20">
                                    <div>
                                        <h3 className="text-4xl font-bold text-primary">2+</h3>
                                        <p className="text-sm font-medium text-foreground">{t.about.stats.experience}</p>
                                    </div>
                                </div>
                                <div className="h-64 bg-background rounded-2xl shadow-sm border border-border" />
                            </div>
                            <div className="space-y-4 pt-12">
                                <div className="h-64 bg-background rounded-2xl shadow-sm border border-border" />
                                <div className="h-48 bg-blue-500/10 rounded-2xl flex items-center justify-center p-8 text-center border border-blue-500/20">
                                    <div>
                                        <h3 className="text-4xl font-bold text-blue-500">100+</h3>
                                        <p className="text-sm font-medium text-foreground">{t.about.stats.projects}</p>
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
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tighter text-foreground">
                            {t.about.title} <span className="text-primary">{t.about.subtitle}</span>
                        </h2>
                        <div className="space-y-6 text-lg text-muted leading-relaxed">
                            {t.about.paragraphs.map((p: string, i: number) => (
                                <p key={i} dangerouslySetInnerHTML={{ __html: p.replace(/\*\*(.*?)\*\*/g, '<span class="text-foreground font-semibold underline decoration-primary decoration-2">$1</span>').replace(/\*(.*?)\*/g, '<span class="text-foreground font-semibold italic">$1</span>') }} />
                            ))}
                        </div>

                        <div className="mt-12">
                            <button
                                onClick={downloadCV}
                                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:brightness-90 transition-all"
                            >
                                <Download size={20} />
                                {t.about.downloadCV}
                            </button>
                        </div>
                    </motion.div>
                </div>

                {/* Education Section */}
                <div className="mt-24">
                    <h3 className="text-3xl font-bold mb-12 text-center tracking-tight text-foreground">
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
                                className="bg-background border border-border p-8 rounded-2xl hover:shadow-lg transition-all hover:border-primary/30 group"
                            >
                                <div className="text-primary text-sm font-semibold mb-4 bg-primary/10 inline-block px-3 py-1 rounded-full">
                                    {edu.date}
                                </div>
                                <h4 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors text-foreground">
                                    {edu.title}
                                </h4>
                                <p className="text-muted text-sm mb-6 leading-relaxed">
                                    {edu.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {edu.points.map((point: any, index: number) => (
                                        <span
                                            key={index}
                                            className="inline-flex items-center gap-2 text-xs font-medium bg-secondary px-3 py-1.5 rounded-full text-muted-foreground"
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
