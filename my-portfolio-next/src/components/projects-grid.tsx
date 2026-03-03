"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { ExternalLink, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface ProjectsProps {
    limit?: number;
}

export default function Projects({ limit }: ProjectsProps) {
    const { t } = useLanguage();
    const projects = t.projects.items;

    const displayedProjects = limit ? projects?.slice(0, limit) : projects;

    return (
        <section id="projects" className="py-24 bg-secondary/30">
            <div className={`max-w-7xl mx-auto px-6`}>
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 text-foreground">
                            {t.projects.title} <span className="text-primary">{t.projects.subtitle}</span>
                        </h2>
                        <p className="text-muted max-w-xl text-lg">
                            {t.projects.description}
                        </p>
                    </div>
                    {limit && (
                        <Link
                            href="/projects"
                            className="flex items-center gap-2 font-semibold text-primary hover:underline"
                        >
                            {t.projects.allProjects} <ArrowRight size={18} />
                        </Link>
                    )}
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {displayedProjects?.map((project: any, idx: number) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative bg-background rounded-3xl overflow-hidden border border-border hover:shadow-2xl transition-all h-full flex flex-col"
                        >
                            <div className="relative h-64 w-full overflow-hidden bg-secondary/30">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-contain group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                                    <div className="flex gap-3">
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 bg-secondary text-foreground rounded-full hover:bg-primary hover:text-white transition-colors"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <ExternalLink size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="p-8 flex flex-col flex-grow">
                                <div className="flex gap-2 mb-4 flex-wrap">
                                    {project.tech.map((t: string) => (
                                        <span
                                            key={t}
                                            className="text-[10px] uppercase tracking-widest font-bold px-2 py-1 bg-secondary rounded-md text-muted-foreground"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors text-foreground">
                                    {project.title}
                                </h3>
                                <p className="text-muted mb-6 flex-grow">
                                    {project.description}
                                </p>
                                <Link
                                    href={`/casestudy/${project.id}`}
                                    className="inline-flex items-center gap-2 font-bold text-sm tracking-widest uppercase hover:gap-3 transition-all underline decoration-primary decoration-2 underline-offset-4 text-foreground"
                                >
                                    {t.projects.viewCaseStudy}
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
