"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import EditorialShell from "@/components/editorial/EditorialShell";
import SectionHeader from "@/components/editorial/SectionHeader";
import Stars from "@/components/editorial/Stars";

function initials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function Reviews() {
  const { t } = useLanguage();
  const reviews = t.reviews?.items;

  if (!reviews || reviews.length === 0) return null;

  return (
    <EditorialShell className="pt-20" id="reviews">
      <SectionHeader
        num="·"
        kicker={t.reviews.title}
        title={`${t.reviews.subtitle}.`}
        right={
          <div className="editorial-mono text-[11px] uppercase tracking-[0.1em] text-muted">
            {reviews.length} of many
          </div>
        }
      />
      <div className="editorial-reviews-grid">
        {reviews.map((r: any, i: number) => (
          <article className="editorial-review" key={i}>
            <div className="editorial-quote-mark">&ldquo;</div>
            <Stars rating={r.rating ?? 5} />
            <p className="editorial-review-text">{r.review ?? r.text}</p>
            <div className="editorial-review-person">
              <div className="editorial-avatar">
                {r.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={r.image} alt={r.name} />
                ) : (
                  initials(r.name)
                )}
              </div>
              <div className="editorial-review-meta">
                <div className="editorial-rp-name">{r.name}</div>
                <div className="editorial-rp-role">
                  {r.role} · <b>{r.company}</b>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </EditorialShell>
  );
}
