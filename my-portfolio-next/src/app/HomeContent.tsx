"use client";

import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Reviews from "@/components/reviews";
import EditorialShell from "@/components/editorial/EditorialShell";
import Eyebrow from "@/components/editorial/Eyebrow";
import Magnetic from "@/components/editorial/Magnetic";
import EditorialButton from "@/components/editorial/EditorialButton";
import SectionHeader from "@/components/editorial/SectionHeader";
import FeatureTile from "@/components/editorial/FeatureTile";
import StatBlock from "@/components/editorial/StatBlock";

export default function HomeContent() {
  const { t, language } = useLanguage();
  const featuredProjects = t.projects.items.slice(0, 5);
  const experienceYears = "2+";
  const projectCount = `${t.projects.items.length}+`;
  const formatDisplay = (value: string) => (language === "ar" ? value : value.toUpperCase());
  const marqueeItems = [
    ...t.hero.typewriterStrings.slice(0, 5),
    t.siteConfig.location,
    t.siteConfig.role,
  ];

  return (
    <div className="editorial-page pb-20">
      <EditorialShell className="py-12 md:py-16">
        <div className="mb-8 grid gap-6 md:grid-cols-[1fr_220px]">
          <Eyebrow num={1}>
            Index - {t.siteConfig.role} - {t.siteConfig.location}
          </Eyebrow>
          <div className="editorial-mono text-right text-[11px] uppercase tracking-[0.12em] text-muted">
            <span className="editorial-serif">{t.hero.welcome}</span>
          </div>
        </div>

        <h1 className="editorial-display editorial-title-xl mb-8">
          <Magnetic text={formatDisplay(t.hero.name)} />
          <span className="text-primary">.</span>
          <br />
          <span className="border-b-[8px] border-foreground pb-0">
            <Magnetic text={formatDisplay(t.hero.typewriterStrings[0] || t.siteConfig.role)} />
          </span>
        </h1>

        <div className="grid gap-8 border-t-4 border-border pt-8 md:grid-cols-[1.4fr_1fr] md:items-start">
          <p className="editorial-serif text-[clamp(22px,2.7vw,34px)] leading-[1.25]">
            {t.hero.description}
          </p>
          <div className="flex flex-col gap-3">
            <EditorialButton invert href="/projects">
              <span>{t.hero.primaryAction}</span>
              <ArrowRight size={16} />
            </EditorialButton>
            <EditorialButton href="/contact">
              <span>{t.hero.secondaryAction}</span>
              <span className="editorial-display text-lg">↗</span>
            </EditorialButton>
          </div>
        </div>
      </EditorialShell>

      <div className="editorial-marquee">
        <div className="editorial-marquee-track" aria-hidden="true">
          {Array.from({ length: 2 }).map((_, groupIndex) => (
            <span key={groupIndex}>
              {marqueeItems.map((item, index) => (
                <span key={`${item}-${index}`}>
                  {item}
                  <span className="editorial-marquee-sep">✦</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      <EditorialShell className="pt-16">
        <SectionHeader
          num={2}
          kicker={t.projects.title}
          title={`${t.projects.subtitle}.`}
          right={
            <EditorialButton href="/projects">
              <span>{t.projects.allProjects}</span>
              <ArrowRight size={16} />
            </EditorialButton>
          }
        />

        <div className="mt-6 grid gap-4 md:grid-cols-12">
          {featuredProjects.map((project: any, index: number) => (
            <FeatureTile
              key={project.id}
              href={`/casestudy/${project.id}`}
              num={String(index + 1).padStart(2, "0")}
              category={project.category}
              title={project.title.toUpperCase()}
              description={project.description}
              big={index === 0}
              accent={index === 0}
            />
          ))}
        </div>
      </EditorialShell>

      <EditorialShell className="pt-16">
        <div className="grid gap-6 border-y-4 border-border py-8 md:grid-cols-4">
          <StatBlock value={experienceYears} label={t.about.stats.experience} />
          <StatBlock value={projectCount} label={t.about.stats.projects} />
          <StatBlock value="3" label={t.editorial.languages} />
          <StatBlock value="24/7" label={t.editorial.creativeExecution} />
        </div>
      </EditorialShell>

      <Reviews />

      <EditorialShell className="pt-16">
        <div className="editorial-frame editorial-frame-thick grid gap-6 p-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <Eyebrow>{t.contact.title}</Eyebrow>
            <h2 className="editorial-display mt-3 text-[clamp(38px,6vw,76px)]">
              {t.contact.subtitle}
              <span className="text-primary">.</span>
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
              {t.contact.description}
            </p>
          </div>
          <EditorialButton invert href="/contact">
            <span>{t.contact.form.send}</span>
            <ArrowRight size={16} />
          </EditorialButton>
        </div>
      </EditorialShell>
    </div>
  );
}
