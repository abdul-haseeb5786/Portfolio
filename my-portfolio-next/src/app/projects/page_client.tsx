"use client";

import { useState } from "react";
import Navbar from "@/components/navbar";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, ArrowLeft } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ProjectsPage() {
    const { t } = useLanguage();
    const [activeFilter, setActiveFilter] = useState<"all" | "full-stack" | "automation">("all");
    
    const projects = t.projects.items;
    
    const filteredProjects = activeFilter === "all"
        ? projects
        : projects?.filter((project: any) => project.filter === activeFilter);

    return (
        <main className="min-h-screen pt-32 pb-24">
            <Navbar />
            <div className="max-w-7xl mx-auto px-6">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-muted hover:text-primary mb-12 transition-colors"
                >
                    <ArrowLeft size={20} /> {t.projects.backToHome}
                </Link>

                <div className="mb-16">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
                        {t.projects.allProjects.split(' ')[0]} <span className="text-primary">{t.projects.allProjects.split(' ').slice(1).join(' ')}</span>
                    </h1>
                    <p className="text-xl text-muted max-w-2xl mb-8">
                        {t.projects.description}
                    </p>
                    
                    {/* Glassmorphic Category Filter Bar */}
                    <div className="flex flex-wrap gap-3 p-1.5 bg-secondary/20 dark:bg-zinc-900/30 backdrop-blur-md border border-border/40 rounded-2xl w-fit">
                        {Object.entries({
                            all: t.projects.filters?.all || "All Projects",
                            "full-stack": t.projects.filters?.fullStack || "Full Stack",
                            automation: t.projects.filters?.automation || "Automation"
                        }).map(([key, label]) => {
                            const isActive = activeFilter === key;
                            return (
                                <button
                                    key={key}
                                    onClick={() => setActiveFilter(key as any)}
                                    className={`relative px-5 py-2.5 rounded-xl text-xs md:text-sm font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                                        isActive
                                            ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20 scale-[1.02]"
                                            : "hover:bg-secondary/40 text-muted hover:text-foreground"
                                    }`}
                                >
                                    {label}
                                </button>
                            );
                        })}
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects?.map((project: any, idx: number) => (
                            <motion.div
                                layout
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                                className="group relative bg-card rounded-3xl overflow-hidden border border-border hover:shadow-2xl transition-all flex flex-col"
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
                                                className="text-[10px] uppercase tracking-widest font-bold px-2 py-1 bg-secondary rounded-md text-muted"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-muted mb-6 flex-grow">
                                        {project.description}
                                    </p>
                                    <div className="flex justify-between items-center">
                                        <Link
                                            href={`/projects/${project.id}`}
                                            className="font-bold text-sm tracking-widest uppercase underline decoration-primary decoration-2 underline-offset-4"
                                        >
                                            {t.projects.details}
                                        </Link>
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            className="text-muted hover:text-primary"
                                        >
                                            <ExternalLink size={20} />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </main>
    );
}
