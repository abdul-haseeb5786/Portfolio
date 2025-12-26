"use client";

import Navbar from "@/components/navbar";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, ArrowLeft } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ProjectsPage() {
    const { t } = useLanguage();
    const projects = t.projects.items;

    return (
        <main className="min-h-screen pt-32 pb-24">
            <Navbar />
            <div className="max-w-7xl mx-auto px-6">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-zinc-500 hover:text-[#599692] mb-12 transition-colors"
                >
                    <ArrowLeft size={20} /> {t.projects.backToHome}
                </Link>

                <div className="mb-16">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
                        {t.projects.allProjects.split(' ')[0]} <span className="text-[#599692]">{t.projects.allProjects.split(' ').slice(1).join(' ')}</span>
                    </h1>
                    <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl">
                        {t.projects.description}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects?.map((project: any, idx: number) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="group relative bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 hover:shadow-2xl transition-all flex flex-col"
                        >
                            <div className="relative h-64 w-full overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>

                            <div className="p-8 flex flex-col flex-grow">
                                <div className="flex gap-2 mb-4 flex-wrap">
                                    {project.tech.map((t: string) => (
                                        <span
                                            key={t}
                                            className="text-[10px] uppercase tracking-widest font-bold px-2 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-md text-zinc-500"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-2xl font-bold mb-3 group-hover:text-[#599692] transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-zinc-600 dark:text-zinc-400 mb-6 flex-grow">
                                    {project.description}
                                </p>
                                <div className="flex justify-between items-center">
                                    <Link
                                        href={`/projects/${project.id}`}
                                        className="font-bold text-sm tracking-widest uppercase underline decoration-[#599692] decoration-2 underline-offset-4"
                                    >
                                        {t.projects.details}
                                    </Link>
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        className="text-zinc-400 hover:text-[#599692]"
                                    >
                                        <ExternalLink size={20} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    );
}
