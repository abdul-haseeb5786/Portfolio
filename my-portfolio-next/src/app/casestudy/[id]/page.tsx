"use client";

import { useParams, useRouter } from "next/navigation";
import Navbar from "@/components/navbar";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github, CheckCircle2, TrendingUp, Target, Lightbulb, AlertCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function CaseStudyDetails() {
    const { id } = useParams();
    const router = useRouter();
    const { t } = useLanguage();
    const projects = t.projects.items;

    const project = projects?.find((p: any) => p.id === id);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
                    <button
                        onClick={() => router.push("/casestudy")}
                        className="text-primary hover:underline"
                    >
                        Back to Case Studies
                    </button>
                </div>
            </div>
        );
    }

    return (
        <main className="min-h-screen pb-24 bg-background">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[70vh] min-h-[500px] w-full overflow-hidden">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover brightness-[0.3] scale-105"
                    priority
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="max-w-5xl mx-auto px-6 text-center text-white">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="inline-block px-4 py-1.5 bg-primary/20 backdrop-blur-md rounded-full text-xs font-bold tracking-widest uppercase border border-primary/30 mb-6">
                                Case Study
                            </span>
                            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
                                {project.title}
                            </h1>
                            <div className="flex flex-wrap justify-center gap-4">
                                {project.tech.map((tech: string) => (
                                    <span
                                        key={tech}
                                        className="px-5 py-2 bg-white/5 backdrop-blur-xl rounded-full text-sm font-medium border border-white/10 hover:bg-white/10 transition-colors"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
            </section>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-12">
                <Link
                    href="/casestudy"
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-16 transition-colors font-medium group"
                >
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Back to All Case Studies
                </Link>

                <div className="grid lg:grid-cols-12 gap-20">
                    <div className="lg:col-span-8 space-y-24">
                        {/* Summary / Overview */}
                        <section className="relative">
                            <div className="absolute -left-8 top-0 bottom-0 w-1 bg-primary/20 rounded-full hidden md:block" />
                            <h2 className="text-4xl font-bold mb-8 tracking-tight flex items-center gap-4">
                                <AlertCircle className="text-primary" size={32} />
                                {t.projects.overview}
                            </h2>
                            <p className="text-2xl text-muted-foreground leading-relaxed font-light">
                                {project.caseStudy?.overview || project.longDescription}
                            </p>
                        </section>

                        {project.caseStudy && (
                            <>
                                {/* Objective */}
                                <section>
                                    <h2 className="text-3xl font-bold mb-8 tracking-tight flex items-center gap-4">
                                        <Target className="text-primary" size={28} />
                                        {t.projects.objective}
                                    </h2>
                                    <div className="bg-secondary/20 p-8 md:p-12 rounded-[2.5rem] border border-border">
                                        <p className="text-xl text-muted-foreground leading-relaxed">
                                            {project.caseStudy.objective}
                                        </p>
                                    </div>
                                </section>

                                {/* Metrics */}
                                {project.metrics && project.metrics.length > 0 && (
                                    <section className="grid sm:grid-cols-3 gap-8">
                                        {project.metrics.map((metric: any, idx: number) => (
                                            <motion.div
                                                key={idx}
                                                whileHover={{ y: -5 }}
                                                className="p-10 bg-gradient-to-br from-primary/10 to-transparent rounded-[2rem] border border-primary/20 text-center"
                                            >
                                                <div className="text-5xl font-extrabold text-primary mb-3">{metric.value}</div>
                                                <div className="text-xs text-muted-foreground uppercase tracking-[0.2em] font-bold">{metric.label}</div>
                                            </motion.div>
                                        ))}
                                    </section>
                                )}

                                {/* Solution */}
                                <section>
                                    <h2 className="text-3xl font-bold mb-8 tracking-tight flex items-center gap-4">
                                        <Lightbulb className="text-primary" size={28} />
                                        {t.projects.solution}
                                    </h2>
                                    <p className="text-xl text-muted-foreground leading-relaxed">
                                        {project.caseStudy.solution}
                                    </p>
                                </section>

                                {/* Challenges */}
                                <section>
                                    <h2 className="text-3xl font-bold mb-8 tracking-tight flex items-center gap-4">
                                        <AlertCircle className="text-primary" size={28} />
                                        {t.projects.challenges}
                                    </h2>
                                    <div className="border-l-4 border-primary pl-8 py-2">
                                        <p className="text-xl text-muted-foreground leading-relaxed italic">
                                            {project.caseStudy.challenges}
                                        </p>
                                    </div>
                                </section>

                                {/* Results */}
                                <section>
                                    <h2 className="text-3xl font-bold mb-8 tracking-tight flex items-center gap-4">
                                        <TrendingUp className="text-primary" size={28} />
                                        {t.projects.results}
                                    </h2>
                                    <p className="text-xl text-muted-foreground leading-relaxed mb-12">
                                        {project.caseStudy.results}
                                    </p>

                                    {project.extraImages && project.extraImages.length > 0 && (
                                        <div className="grid sm:grid-cols-2 gap-8">
                                            {project.extraImages.map((img: string, index: number) => (
                                                <motion.div
                                                    key={index}
                                                    whileHover={{ scale: 1.02 }}
                                                    className="relative aspect-video rounded-[2rem] overflow-hidden border border-border shadow-2xl"
                                                >
                                                    <Image
                                                        src={img}
                                                        alt={`${project.title} screenshot ${index + 2}`}
                                                        fill
                                                        className="object-contain bg-secondary/10"
                                                    />
                                                </motion.div>
                                            ))}
                                        </div>
                                    )}
                                </section>
                            </>
                        )}
                    </div>

                    <aside className="lg:col-span-4 space-y-8">
                        <div className="p-10 bg-card rounded-[2.5rem] border border-border sticky top-32 shadow-xl">
                            <h3 className="text-2xl font-bold mb-8">Project Info</h3>
                            <div className="space-y-6 mb-12">
                                <div className="space-y-1">
                                    <span className="text-xs uppercase tracking-widest text-muted-foreground font-bold">Category</span>
                                    <div className="text-lg font-medium">{project.category}</div>
                                </div>
                                <div className="space-y-1">
                                    <span className="text-xs uppercase tracking-widest text-muted-foreground font-bold">Client</span>
                                    <div className="text-lg font-medium">Internal Project</div>
                                </div>
                                <div className="space-y-1">
                                    <span className="text-xs uppercase tracking-widest text-muted-foreground font-bold">Year</span>
                                    <div className="text-lg font-medium">2024</div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    className="w-full py-5 border-2 border-border rounded-2xl font-bold tracking-widest uppercase flex items-center justify-center gap-3 hover:bg-secondary transition-all"
                                >
                                    Codebase <Github size={20} />
                                </a>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </main>
    );
}
