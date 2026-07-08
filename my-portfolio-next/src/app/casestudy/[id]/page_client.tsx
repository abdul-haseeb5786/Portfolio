"use client";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Github } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import EditorialShell from "@/components/editorial/EditorialShell";
import Eyebrow from "@/components/editorial/Eyebrow";
import CaseBlock from "@/components/editorial/CaseBlock";
import SectionHeader from "@/components/editorial/SectionHeader";
import EditorialButton from "@/components/editorial/EditorialButton";
import { DIAGRAMS } from "@/components/diagrams";

// Quantitative metrics grid matching design
function MetricsGrid({ metrics = [] }: { metrics: { label: string; value: string }[] }) {
  const split = (v: string) => {
    const m = String(v).match(/^([\d.,–\-+<>]+)(.*)$/);
    return m ? [m[1], m[2]] : [v, ""];
  };
  return (
    <div className="metrics-grid">
      {metrics.map((m, i) => {
        const [num, unit] = split(m.value);
        return (
          <div className="metric" key={i}>
            <span className="metric-idx">{String(i + 1).padStart(2, "0")}</span>
            <div className="metric-value">
              {num}
              <span className="u">{unit}</span>
            </div>
            <div className="metric-label">{m.label}</div>
          </div>
        );
      })}
    </div>
  );
}

export default function CaseStudyDetails() {
  const { id } = useParams();
  const router = useRouter();
  const { t, language } = useLanguage();
  const projects = t.projects.items;

  const project = projects?.find((p: any) => p.id === id);
  const currentIdx = projects?.findIndex((p: any) => p.id === id) ?? -1;
  const nextProject = projects && currentIdx !== -1 ? projects[(currentIdx + 1) % projects.length] : null;

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

  const formatDisplay = (value: string) => (language === "ar" ? value : value.toUpperCase());
  const cs = project.caseStudy || {};
  const metrics = project.metrics || [];
  const Diagram = DIAGRAMS[project.id];

  // Default timeline data structure based on the project information
  const timelineData = [
    ["START", "Onboarding & architecture design"],
    ["BUILD", "UI component library & layout styling"],
    ["INTEGRATE", "Core API / flow automation setup"],
    ["OPTIMIZE", "Testing, performance, & responsive pass"],
    ["RELEASE", "Shipped to production environments"],
  ];

  return (
    <div className="editorial-page pb-24">
      {/* HEADER SECTION */}
      <EditorialShell className="py-12 md:py-16">
        <div className="grid gap-5 grid-cols-[auto_1fr] items-baseline mb-6">
          <Eyebrow num={currentIdx + 1}>Case Study № {String(currentIdx + 1).padStart(2, "0")}</Eyebrow>
          <Link
            href="/casestudy"
            className="editorial-mono justify-self-end text-[11px] uppercase tracking-[0.1em] text-muted hover:text-primary decoration-none"
            style={{ textDecoration: "none" }}
          >
            <span className="inline-flex items-center gap-2">
              <ArrowLeft size={16} /> {t.editorial.allCaseStudies || "All Work"}
            </span>
          </Link>
        </div>

        <h1 className="editorial-display editorial-title-xl mt-4">
          {formatDisplay(project.title)}
          <span className="text-primary">.</span>
        </h1>

        {/* META ROW */}
        <div className="mt-6 grid gap-4 border-y-2 border-border py-4 grid-cols-2 md:grid-cols-5 editorial-mono text-[11px] uppercase tracking-[0.08em]">
          <div>
            <div className="text-[9px] uppercase tracking-[0.1em] text-muted">Category</div>
            <div className="mt-1 font-bold">{project.category}</div>
          </div>
          <div>
            <div className="text-[9px] uppercase tracking-[0.1em] text-muted">Stack</div>
            <div className="mt-1 font-bold">{project.tech.slice(0, 3).join(", ")}</div>
          </div>
          <div>
            <div className="text-[9px] uppercase tracking-[0.1em] text-muted">Type</div>
            <div className="mt-1 font-bold">{project.filter === "automation" ? "Automation" : "Full Stack"}</div>
          </div>
          <div>
            <div className="text-[9px] uppercase tracking-[0.1em] text-muted">Status</div>
            <div className="mt-1 font-bold">{t.editorial.shipped || "SHIPPED"}</div>
          </div>
          <div>
            <div className="text-[9px] uppercase tracking-[0.1em] text-muted">Focus</div>
            <div className="mt-1 font-bold">{t.siteConfig.role || "DEVELOPER"}</div>
          </div>
        </div>
      </EditorialShell>

      {/* HERO DIAGRAM */}
      <EditorialShell>
        <div className="editorial-frame relative h-[320px] overflow-hidden md:h-[420px] bg-paper">
          {Diagram ? (
            <div className="w-full h-full flex items-center justify-center p-4">
              <Diagram />
            </div>
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="editorial-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                Architecture Diagram Not Found for {project.id}
              </span>
            </div>
          )}
        </div>
        <div className="editorial-mono mt-2 flex justify-between text-[10px] uppercase tracking-[0.12em] text-muted">
          <span>Fig. 01 — {project.title} · Unified flow / architecture diagram</span>
          <span>Animated</span>
        </div>
      </EditorialShell>

      {/* OVERVIEW CALLOUT */}
      <EditorialShell className="mt-14 grid gap-10 md:grid-cols-[1fr_2fr]">
        <Eyebrow num="01">Overview</Eyebrow>
        <p className="editorial-serif text-[clamp(22px,3.4vw,42px)] leading-[1.25] italic text-foreground">
          {cs.overview || project.description}
        </p>
      </EditorialShell>

      {/* CORE CAPABILITIES GRID */}
      {project.tech && project.tech.length > 0 && (
        <EditorialShell className="mt-10">
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-3">
            {project.tech.slice(0, 3).map((techName: string, idx: number) => (
              <div className="editorial-frame editorial-frame-thick p-5" key={idx}>
                <div className="editorial-display text-2xl tracking-tight">{techName}</div>
                <div className="editorial-mono text-[10px] text-muted uppercase tracking-[0.1em] mt-2">
                  {idx === 0 ? "Primary Driver" : idx === 1 ? "Integration Layer" : "Infrastructure"}
                </div>
              </div>
            ))}
          </div>
        </EditorialShell>
      )}

      {/* CASE STUDY BLOCKS */}
      <EditorialShell className="mt-14 grid gap-12 md:grid-cols-2">
        <CaseBlock num="02" kicker={t.projects.objective || "Objective"}>
          <p>{cs.objective || project.longDescription || project.description}</p>
        </CaseBlock>

        <CaseBlock num="03" kicker={t.projects.solution || "Solution"}>
          <p>{cs.solution || project.longDescription || project.description}</p>
        </CaseBlock>

        <CaseBlock num="04" kicker={t.projects.challenges || "Challenges"}>
          <p>{cs.challenges || project.description}</p>
        </CaseBlock>

        <CaseBlock num="05" kicker={t.projects.results || "Results"}>
          <p>{cs.results || project.longDescription || project.description}</p>
        </CaseBlock>
      </EditorialShell>

      {/* METRICS SECTION */}
      {metrics.length > 0 && (
        <EditorialShell className="mt-20">
          <SectionHeader num="06" kicker="Impact" title="By the numbers." />
          <MetricsGrid metrics={metrics} />
        </EditorialShell>
      )}

      {/* TIMELINE */}
      <EditorialShell className="mt-20">
        <Eyebrow num="07">Timeline</Eyebrow>
        <div className="border-t-2 border-b-2 border-border mt-4 py-6">
          <div className="grid gap-6 grid-cols-2 md:grid-cols-5">
            {timelineData.map(([phase, desc], i) => (
              <div key={i} className="relative">
                <div className={`editorial-display text-2xl leading-none ${i === timelineData.length - 1 ? "text-primary" : "text-foreground"}`}>
                  {phase}
                </div>
                <div className="editorial-mono text-[11px] mt-2 text-muted tracking-[0.04em]">
                  {desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </EditorialShell>

      {/* LINKS SECTION */}
      <EditorialShell className="mt-16">
        <div className="flex flex-wrap gap-4 items-center">
          {project.github && (
            <EditorialButton href={project.github}>
              <span>{t.editorial.codebase || "CODEBASE"}</span>
              <Github size={16} />
            </EditorialButton>
          )}
          {project.link && (
            <EditorialButton invert href={project.link}>
              <span>{t.projects.liveDemo || "LIVE DEMO"}</span>
              <span className="editorial-display text-lg">↗</span>
            </EditorialButton>
          )}
        </div>
      </EditorialShell>

      {/* NEXT PROJECT LINK */}
      {nextProject && (
        <EditorialShell className="mt-20">
          <div className="editorial-frame editorial-frame-thick grid gap-6 p-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <Eyebrow>Next Case Study</Eyebrow>
              <div className="editorial-display mt-3 text-[clamp(32px,5vw,64px)]">
                {formatDisplay(nextProject.title)}
                <span className="text-primary">.</span>
              </div>
              <div className="editorial-mono mt-2 text-[11px] uppercase tracking-[0.1em] text-muted">
                {nextProject.category} — {nextProject.tech?.[0] || "Stack"}
              </div>
            </div>
            <EditorialButton invert href={`/casestudy/${nextProject.id}`}>
              <span>Read Case Study</span>
              <span className="editorial-display text-lg">→</span>
            </EditorialButton>
          </div>
        </EditorialShell>
      )}
    </div>
  );
}
