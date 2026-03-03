"use client";

import Navbar from "@/components/navbar";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function CaseStudyListPage() {
    const { t } = useLanguage();
    const projects = t.projects.items;

    return (
        <main className="min-h-screen pt-32 pb-24 bg-background">
            <Navbar />
            <div className="max-w-7xl mx-auto px-6">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-12 transition-colors font-medium"
                >
                    <ArrowLeft size={20} /> {t.projects.backToHome}
                </Link>

                <div className="mb-16">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-foreground">
                        Project <span className="text-primary">Case Studies</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl">
                        A detailed look into the challenges, solutions, and results of my most impactful work.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects?.map((project: any, idx: number) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className="group relative bg-card rounded-[2rem] overflow-hidden border border-border hover:shadow-2xl transition-all h-full flex flex-col"
                        >
                            <div className="relative h-72 w-full overflow-hidden bg-secondary/20">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-contain group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                            </div>

                            <div className="p-10 flex flex-col flex-grow relative -mt-20 bg-card rounded-t-[2.5rem] border-t border-border/50">
                                <div className="flex gap-2 mb-4 flex-wrap">
                                    {project.tech.slice(0, 3).map((tech: string) => (
                                        <span
                                            key={tech}
                                            className="text-[10px] uppercase tracking-widest font-bold px-3 py-1 bg-secondary rounded-full text-secondary-foreground"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors text-foreground">
                                    {project.title}
                                </h3>
                                <p className="text-muted-foreground mb-8 flex-grow line-clamp-3">
                                    {project.description}
                                </p>
                                <div className="flex justify-between items-center mt-auto">
                                    <Link
                                        href={`/casestudy/${project.id}`}
                                        className="inline-flex items-center gap-2 font-bold text-sm tracking-widest uppercase hover:gap-3 transition-all underline decoration-primary decoration-2 underline-offset-8 text-foreground"
                                    >
                                        View Case Study
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    );
}
