"use client";

import { Download } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import EditorialShell from "@/components/editorial/EditorialShell";
import Eyebrow from "@/components/editorial/Eyebrow";
import SectionHeader from "@/components/editorial/SectionHeader";
import SkillBar from "@/components/editorial/SkillBar";
import Portrait from "@/components/editorial/Portrait";

interface AboutProps {
    summary?: boolean;
}

export default function About({ summary = false }: AboutProps) {
    const { t } = useLanguage();

    const downloadCV = () => {
        const url = `https://drive.google.com/uc?export=download&id=1FjJxMQu_gHo1MurLQnyjD2TZ0o5z_re1`;
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `${t.siteConfig.name.replace(" ", "_")}_CV.pdf`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="editorial-page pb-24" id="about">
            <EditorialShell className="py-12 md:py-16">
                <Eyebrow num={4}>About - Skills - Education</Eyebrow>
                <div className="mt-6 grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-start">
                    <h1 id="about-heading" className="editorial-display editorial-title-lg">
                        HI<span className="text-primary">-</span><br />
                        I BUILD<br />
                        SYSTEMS.
                    </h1>
                    <div>
                        <div className="space-y-5 text-lg leading-8 text-muted">
                            {(summary ? t.about.paragraphs.slice(0, 1) : t.about.paragraphs).map((p: string, i: number) => (
                                <p
                                    key={i}
                                    dangerouslySetInnerHTML={{
                                        __html: p
                                            .replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>')
                                            .replace(/\*(.*?)\*/g, '<span class="editorial-serif text-foreground">$1</span>'),
                                    }}
                                />
                            ))}
                        </div>

                        <div className="mt-8 flex flex-wrap gap-2">
                            <span className="editorial-tag">English</span>
                            <span className="editorial-tag">Arabic</span>
                            <span className="editorial-tag">Spanish</span>
                        </div>

                        {!summary ? (
                            <div className="mt-8">
                                <button onClick={downloadCV} className="editorial-button editorial-button-invert">
                                    <Download size={16} />
                                    <span>{t.about.downloadCV}</span>
                                </button>
                            </div>
                        ) : null}
                    </div>
                </div>
            </EditorialShell>

            {!summary ? (
                <>
                    <section className="border-y-4 border-border bg-secondary py-10">
                        <EditorialShell className="grid gap-8 md:grid-cols-[300px_1fr] md:items-center">
                            <Portrait
                                name={t.siteConfig.name.split(" ").map((w: string) => w[0]).join(".")+"."}
                                location={t.siteConfig.location}
                            />
                            <div className="grid gap-8 md:grid-cols-2">
                                <div>
                                    <Eyebrow>Focus</Eyebrow>
                                    <ul className="mt-3 space-y-3 text-lg leading-7">
                                        <li>Agentic AI systems with production reliability.</li>
                                        <li>Low-latency automation pipelines and voice agents.</li>
                                        <li>Full-stack delivery from UX to backend orchestration.</li>
                                    </ul>
                                </div>
                                <div>
                                    <Eyebrow>Base</Eyebrow>
                                    <ul className="mt-3 space-y-3 text-lg leading-7">
                                        <li>{t.siteConfig.location}</li>
                                        <li>{t.siteConfig.email}</li>
                                        <li>{t.siteConfig.phone}</li>
                                    </ul>
                                </div>
                            </div>
                        </EditorialShell>
                    </section>

                    <EditorialShell className="pt-20" id="skills">
                        <SectionHeader
                            num="."
                            kicker={t.skills.title}
                            title={`${t.skills.subtitle}.`}
                            right={<div className="editorial-mono text-[11px] uppercase tracking-[0.1em] text-muted">Core stack map</div>}
                        />
                        <div className="mt-8 grid gap-10 md:grid-cols-2 xl:grid-cols-3">
                            {t.skills.categories.map((category: any) => (
                                <div key={category.title}>
                                    <div className="editorial-display mb-4 text-[28px] text-primary">
                                        {category.title}
                                    </div>
                                    {category.skills.map((skill: string, index: number) => (
                                        <SkillBar
                                            key={skill}
                                            name={skill}
                                            pct={Math.max(55, 92 - index * 7)}
                                            note={index === 0 ? "Primary focus area" : undefined}
                                        />
                                    ))}
                                </div>
                            ))}
                        </div>
                    </EditorialShell>

                    <EditorialShell className="pt-20">
                        <SectionHeader num="." kicker={t.about.education.title} title="On Paper." />
                        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                            {t.about.education.history.map((edu: any) => (
                                <div key={edu.id} className="editorial-frame p-5">
                                    <div className="editorial-mono text-[11px] tracking-[0.12em] text-primary">{edu.date}</div>
                                    <div className="editorial-display mt-3 text-[28px] leading-none">{edu.title}</div>
                                    <p className="mt-4 text-sm leading-6 text-muted">{edu.description}</p>
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {edu.points.map((point: any, index: number) => (
                                            <span key={index} className="editorial-tag">
                                                {point.icon} {point.text}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </EditorialShell>
                </>
            ) : null}
        </div>
    );
}
