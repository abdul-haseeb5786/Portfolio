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
        <section id="projects" className="py-24 bg-slate-50 dark:bg-zinc-900/50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 text-slate-900 dark:text-white">
                            {t.projects.title} <span className="text-[#599692]">{t.projects.subtitle}</span>
                        </h2>
                        <p className="text-slate-600 dark:text-zinc-400 max-w-xl text-lg">
                            {t.projects.description}
                        </p>
                    </div>
                    {limit && (
                        <Link
                            href="/projects"
                            className="flex items-center gap-2 font-semibold text-[#599692] hover:underline"
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
                            className="group relative bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden border border-slate-100 dark:border-zinc-800 hover:shadow-2xl transition-all h-full flex flex-col"
                        >
                            <div className="relative h-64 w-full overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                                    <div className="flex gap-3">
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 bg-white text-black rounded-full hover:bg-[#599692] hover:text-white transition-colors"
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
                                            className="text-[10px] uppercase tracking-widest font-bold px-2 py-1 bg-slate-50 dark:bg-zinc-800 rounded-md text-slate-500 dark:text-zinc-400"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-2xl font-bold mb-3 group-hover:text-[#599692] transition-colors text-slate-900 dark:text-white">
                                    {project.title}
                                </h3>
                                <p className="text-slate-600 dark:text-zinc-400 mb-6 flex-grow">
                                    {project.description}
                                </p>
                                <Link
                                    href={`/projects/${project.id}`}
                                    className="inline-flex items-center gap-2 font-bold text-sm tracking-widest uppercase hover:gap-3 transition-all underline decoration-[#599692] decoration-2 underline-offset-4 text-slate-900 dark:text-white"
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
