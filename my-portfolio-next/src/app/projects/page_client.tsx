"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import EditorialShell from "@/components/editorial/EditorialShell";
import Eyebrow from "@/components/editorial/Eyebrow";
import ProjectRow from "@/components/editorial/ProjectRow";

export default function ProjectsPage() {
    const { t, language } = useLanguage();
    const [activeFilter, setActiveFilter] = useState<"all" | "full-stack" | "automation">("all");
    const formatDisplay = (value: string) => (language === "ar" ? value : value.toUpperCase());
    
    const projects = t.projects.items;
    
    const filteredProjects = activeFilter === "all"
        ? projects
        : projects?.filter((project: any) => project.filter === activeFilter);

    return (
        <div className="editorial-page overflow-x-clip pb-24">
            <EditorialShell className="py-12 md:py-16">
                <Link
                    href="/"
                    className="editorial-mono inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.12em] text-muted transition-colors hover:text-primary"
                >
                    <ArrowLeft size={20} /> {t.projects.backToHome}
                </Link>

                <div className="mt-8 sm:mt-10">
                    <Eyebrow num={2}>Index - All Projects</Eyebrow>
                    <h1 className="editorial-display editorial-title-lg mt-3 max-w-full break-words">
                        <span className="text-primary">{formatDisplay(t.projects.subtitle)}</span>-
                        <br />
                        {formatDisplay(t.editorial.archive)}.
                    </h1>
                    <p className="mt-4 max-w-2xl break-words text-base leading-7 text-muted sm:mt-6 sm:text-lg sm:leading-8">
                        {t.projects.description}
                    </p>

                    <div className="mt-6 flex flex-wrap items-center gap-2.5 border-t-4 border-border pt-5 sm:mt-8 sm:pt-6">
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
                                    className={`editorial-tag transition-colors ${
                                        isActive
                                            ? "editorial-tag-active"
                                            : "hover:bg-secondary"
                                    }`}
                                >
                                    {label}
                                </button>
                            );
                        })}
                        <div className="ml-auto w-full editorial-mono text-[10px] uppercase tracking-[0.1em] text-muted sm:w-auto sm:text-[11px]">
                            {filteredProjects.length} / {projects.length}
                        </div>
                    </div>
                </div>
            </EditorialShell>

            <EditorialShell>
                <div className="hidden border-b-2 border-border pb-3 text-[10px] uppercase tracking-[0.14em] text-muted md:grid md:grid-cols-[70px_1fr_120px_100px_70px_40px] md:gap-4">
                    <span>No</span>
                    <span>Title / Description</span>
                    <span>Category</span>
                    <span>Stack</span>
                    <span>Type</span>
                    <span />
                </div>

                <div>
                    {filteredProjects?.map((project: any, index: number) => (
                        <ProjectRow
                            key={project.id}
                            index={String(index + 1).padStart(2, "0")}
                            title={formatDisplay(project.title)}
                            description={project.description}
                            category={project.category}
                            lang={project.tech[0] || "Stack"}
                            year={project.filter === "automation" ? "AI" : "WEB"}
                            href={`/casestudy/${project.id}`}
                        />
                    ))}
                </div>
            </EditorialShell>
        </div>
    );
}
