"use client";

import { useParams, useRouter } from "next/navigation";
import Navbar from "@/components/navbar";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ProjectDetails() {
    const { id } = useParams();
    const router = useRouter();
    const { t } = useLanguage();
    const projects = t.projects.items;

    const project = projects?.find((p: any) => p.id === id);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
                    <button
                        onClick={() => router.push("/projects")}
                        className="text-[#599692] hover:underline"
                    >
                        {t.projects.backToProjects}
                    </button>
                </div>
            </div>
        );
    }

    const featuresList = [
        t.projects.features.responsive,
        t.projects.features.performance,
        t.projects.features.security,
        t.projects.features.modernUI,
    ];

    return (
        <main className="min-h-screen pb-24">
            <Navbar />

            {/* Hero Section for Project */}
            <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover brightness-50"
                    priority
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="max-w-4xl mx-auto px-6 text-center text-white">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
                                {project.title}
                            </h1>
                            <div className="flex flex-wrap justify-center gap-3">
                                {project.tech.map((t: string) => (
                                    <span
                                        key={t}
                                        className="px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium border border-white/20"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-6 mt-12">
                <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 text-zinc-500 hover:text-[#599692] mb-12 transition-colors font-medium"
                >
                    <ArrowLeft size={20} /> {t.projects.backToProjects}
                </Link>

                <div className="grid lg:grid-cols-3 gap-16">
                    <div className="lg:col-span-2 space-y-12">
                        <section>
                            <h2 className="text-3xl font-bold mb-6 tracking-tight">{t.projects.overview}</h2>
                            <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                {project.longDescription}
                            </p>
                        </section>

                        <section>
                            <h2 className="text-3xl font-bold mb-6 tracking-tight">{t.projects.keyFeatures}</h2>
                            <div className="grid sm:grid-cols-2 gap-6">
                                {featuresList.map((feature: string) => (
                                    <div key={feature} className="flex gap-3 items-start p-6 bg-zinc-50 dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                                        <CheckCircle2 className="text-[#599692] shrink-0" size={24} />
                                        <span className="font-medium text-lg">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {project.extraImages && project.extraImages.length > 0 && (
                            <section>
                                <h2 className="text-3xl font-bold mb-8 tracking-tight">{t.projects.gallery}</h2>
                                <div className="grid sm:grid-cols-2 gap-8">
                                    {project.extraImages.map((img: string, index: number) => (
                                        <div key={index} className="relative aspect-video rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 group">
                                            <Image
                                                src={img}
                                                alt={`${project.title} screenshot ${index + 2}`}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}
                    </div>

                    <aside className="space-y-8">
                        <div className="p-8 bg-zinc-50 dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 sticky top-32">
                            <h3 className="text-xl font-bold mb-6">{t.projects.projectInfo}</h3>
                            <div className="space-y-4 mb-8">
                                <div className="flex justify-between py-2 border-b dark:border-zinc-800">
                                    <span className="text-zinc-500">{t.projects.category}</span>
                                    <span className="font-medium">{project.category}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b dark:border-zinc-800">
                                    <span className="text-zinc-500">{t.projects.completionDate}</span>
                                    <span className="font-medium">2024</span>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <a
                                    href={project.link}
                                    target="_blank"
                                    className="w-full py-4 bg-[#599692] text-white rounded-xl font-bold tracking-widest uppercase flex items-center justify-center gap-2 hover:bg-[#4a7d7a] transition-all shadow-lg shadow-[#599692]/20"
                                >
                                    {t.projects.liveDemo} <ExternalLink size={18} />
                                </a>
                                <a
                                    href={project.github}
                                    target="_blank"
                                    className="w-full py-4 border-2 border-zinc-200 dark:border-zinc-800 rounded-xl font-bold tracking-widest uppercase flex items-center justify-center gap-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all font-medium"
                                >
                                    {t.projects.githubRepo} <Github size={18} />
                                </a>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </main>
    );
}
