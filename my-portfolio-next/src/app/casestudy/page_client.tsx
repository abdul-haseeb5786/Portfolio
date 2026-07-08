"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import EditorialShell from "@/components/editorial/EditorialShell";
import Eyebrow from "@/components/editorial/Eyebrow";
import ProjectRow from "@/components/editorial/ProjectRow";

export default function CaseStudyListPage() {
    const { t, language } = useLanguage();
    const [activeFilter, setActiveFilter] = useState<"all" | "full-stack" | "automation">("all");
    const formatDisplay = (value: string) => (language === "ar" ? value : value.toUpperCase());
    
    const projects = t.projects.items;
    
    const filteredProjects = activeFilter === "all"
        ? projects
        : projects?.filter((project: any) => project.filter === activeFilter);

    return (
        <div className="editorial-page pb-24">
            <EditorialShell className="py-12 md:py-16">
                <Link
                    href="/"
                    className="editorial-mono inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.12em] text-muted hover:text-primary"
                >
                    <ArrowLeft size={20} /> {t.projects.backToHome}
                </Link>

                <div className="mt-10">
                    <Eyebrow num={3}>{t.editorial.deepDives} - {t.editorial.selectedWork}</Eyebrow>
                    <h1 className="editorial-display editorial-title-lg mt-3 text-foreground">
                        {formatDisplay(t.nav.casestudies || "Case Studies")}<span className="text-primary">-</span>
                        <br />
                        {formatDisplay(t.editorial.selectedWork)}.
                    </h1>
                    <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
                        A detailed look into the challenges, solutions, and results of my most impactful work.
                    </p>

                    <div className="mt-8 flex flex-wrap items-center gap-3 border-t-4 border-border pt-6">
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
                        <div className="ml-auto editorial-mono text-[11px] uppercase tracking-[0.1em] text-muted">
                            {filteredProjects.length} / {projects.length}
                        </div>
                    </div>
                </div>
            </EditorialShell>

            <EditorialShell>
                <div>
                    {filteredProjects?.map((project: any, index: number) => (
                        <ProjectRow
                            key={project.id}
                            index={String(index + 1).padStart(2, "0")}
                            title={formatDisplay(project.title)}
                            description={project.caseStudy?.overview || project.description}
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
