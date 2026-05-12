"use client";

import { motion } from "framer-motion";
import { Download, ArrowRight, Briefcase, GraduationCap, Calendar, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";

interface AboutProps {
    summary?: boolean;
}

export default function About({ summary = false }: AboutProps) {
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
        <section id="about" className="py-24 bg-secondary/30" aria-labelledby="about-heading">
            <div className={`max-w-7xl mx-auto px-6`}>
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="hidden md:block"
                        aria-hidden="true"
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
                                <div className="h-48 bg-primary/10 rounded-2xl flex items-center justify-center p-8 text-center border border-primary/20">
                                    <div>
                                        <h3 className="text-4xl font-bold text-primary">100+</h3>
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
                        <h2 id="about-heading" className="text-4xl md:text-5xl font-bold mb-8 tracking-tighter text-foreground">
                            {t.about.title} <span className="text-primary">{t.about.subtitle}</span>
                        </h2>
                        <div className="space-y-6 text-lg text-muted leading-relaxed">
                            {summary ? (
                                <p dangerouslySetInnerHTML={{ __html: t.about.paragraphs[0].replace(/\*\*(.*?)\*\*/g, '<span class="text-foreground font-semibold underline decoration-primary decoration-2">$1</span>').replace(/\*(.*?)\*/g, '<span class="text-foreground font-semibold italic">$1</span>') }} />
                            ) : (
                                t.about.paragraphs.map((p: string, i: number) => (
                                    <p key={i} dangerouslySetInnerHTML={{ __html: p.replace(/\*\*(.*?)\*\*/g, '<span class="text-foreground font-semibold underline decoration-primary decoration-2">$1</span>').replace(/\*(.*?)\*/g, '<span class="text-foreground font-semibold italic">$1</span>') }} />
                                ))
                            )}
                        </div>

                        <div className="mt-12 flex flex-wrap gap-4">
                            {summary ? (
                                <Link
                                    href="/about"
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:brightness-90 transition-all"
                                >
                                    {t.about.readMore || "Read More"} <ArrowRight size={20} />
                                </Link>
                            ) : (
                                <button
                                    onClick={downloadCV}
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:brightness-90 transition-all"
                                >
                                    <Download size={20} />
                                    {t.about.downloadCV}
                                </button>
                            )}
                        </div>
                    </motion.div>
                </div>

                {/* Experience Section - Only show if not summary */}
                {!summary && t.about.experience && (
                    <div className="mt-24">
                        <h3 className="text-3xl font-bold mb-12 text-center tracking-tight text-foreground">
                            {t.about.experience.title}
                        </h3>
                        <div className="space-y-8 max-w-4xl mx-auto relative">
                            {/* Animated Timeline Line */}
                            <div className="absolute left-0 md:left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent hidden md:block" />
                            
                            {t.about.experience.history.map((exp: any, index: number) => (
                                <motion.div
                                    key={exp.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className={`relative flex flex-col md:flex-row gap-6 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                                >
                                    {/* Timeline Dot */}
                                    <div className="absolute left-[-4px] md:left-1/2 md:-translate-x-1/2 top-8 w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(var(--primary),0.8)] z-10 hidden md:block" />

                                    <div className="md:w-1/2 space-y-3">
                                        <div className={`bg-background/40 backdrop-blur-md border border-primary/10 p-6 rounded-3xl hover:shadow-[0_10px_30px_rgba(var(--primary),0.05)] transition-all hover:border-primary/40 group relative overflow-hidden ${index % 2 === 0 ? 'md:ml-2' : 'md:mr-2'}`}>
                                            {/* Subtle Gradient Background */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                            
                                            <div className="relative z-10">
                                                <div className="flex flex-wrap justify-between items-start gap-3 mb-4">
                                                    <div className="flex gap-3">
                                                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500 shadow-inner">
                                                            <Briefcase size={22} className="drop-shadow-[0_0_5px_rgba(var(--primary),0.5)]" />
                                                        </div>
                                                        <div>
                                                            <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors tracking-tight leading-none mb-1.5">
                                                                {exp.title}
                                                            </h4>
                                                            <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 font-bold text-sm">
                                                                <span className="text-primary/90">{exp.company}</span>
                                                                <span className="text-muted-foreground/30 hidden sm:inline">•</span>
                                                                <span className="text-xs text-muted-foreground bg-secondary/80 px-2 py-0.5 rounded-md border border-border/50">{exp.type}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="flex flex-wrap gap-3 mb-4 text-xs font-bold text-muted-foreground">
                                                    <div className="flex items-center gap-1 bg-background/50 px-2.5 py-1 rounded-full border border-border/50">
                                                        <Calendar size={12} className="text-primary" />
                                                        {exp.date}
                                                    </div>
                                                    <div className="flex items-center gap-1 bg-background/50 px-2.5 py-1 rounded-full border border-border/50">
                                                        <MapPin size={12} className="text-primary" />
                                                        {exp.location}
                                                    </div>
                                                </div>

                                                <p className="text-muted-foreground/90 text-sm mb-6 leading-relaxed font-semibold">
                                                    {exp.description}
                                                </p>

                                                <div className="flex flex-wrap gap-2">
                                                    {exp.points.map((point: any, pIndex: number) => (
                                                        <span
                                                            key={pIndex}
                                                            className="inline-flex items-center gap-1.5 text-xs font-bold bg-primary/5 hover:bg-primary/10 px-3 py-1.5 rounded-lg text-foreground transition-all duration-300 border border-primary/10 hover:border-primary/30"
                                                        >
                                                            <span className="text-sm filter drop-shadow-sm">{point.icon}</span>
                                                            <span className="tracking-tight">{point.text}</span>
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="md:w-1/2" /> {/* Spacer for timeline */}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Education Section - Only show if not summary */}
                {!summary && (
                    <div className="mt-24">
                        <div className="flex flex-col items-center mb-12 text-center">
                            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-5 shadow-inner">
                                <GraduationCap size={28} />
                            </div>
                            <h3 className="text-3xl font-bold tracking-tight text-foreground">
                                {t.about.education?.title}
                            </h3>
                            <div className="h-1 w-20 bg-primary/20 rounded-full mt-3 overflow-hidden">
                                <div className="h-full w-1/2 bg-primary rounded-full animate-shimmer" />
                            </div>
                        </div>
                        
                        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                            {t.about.education?.history.map((edu: any, index: number) => (
                                <motion.div
                                    key={edu.id}
                                    initial={{ opacity: 0, scale: 0.98 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.4, delay: index * 0.08 }}
                                    viewport={{ once: true }}
                                    className="bg-background/40 backdrop-blur-md border border-border p-6 rounded-3xl hover:shadow-[0_15px_30px_rgba(0,0,0,0.08)] transition-all duration-500 hover:border-primary/40 group relative flex flex-col h-full"
                                >
                                    <div className="absolute top-6 right-6 text-primary/10 group-hover:text-primary/20 transition-colors">
                                        <GraduationCap size={40} />
                                    </div>
                                    
                                    <div className="text-primary text-xs font-bold mb-4 bg-primary/10 inline-flex items-center gap-1.5 px-3 py-1 rounded-full self-start">
                                        <Calendar size={12} />
                                        {edu.date}
                                    </div>
                                    
                                    <h4 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors text-foreground leading-tight tracking-tight">
                                        {edu.title}
                                    </h4>
                                    
                                    <p className="text-muted-foreground/80 text-sm mb-6 leading-relaxed font-semibold flex-grow">
                                        {edu.description}
                                    </p>
                                    
                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {edu.points.map((point: any, pIndex: number) => (
                                            <div
                                                key={pIndex}
                                                className="inline-flex items-center gap-1.5 text-[10px] font-bold bg-secondary/80 px-2.5 py-1.5 rounded-lg text-foreground border border-border/50 group-hover:border-primary/20 transition-colors"
                                            >
                                                <span>{point.icon}</span>
                                                <span className="tracking-tight">{point.text}</span>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
