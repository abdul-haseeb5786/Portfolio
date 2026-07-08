import Link from "next/link";

interface ProjectRowProps {
  index: string;
  title: string;
  description: string;
  category: string;
  lang: string;
  year?: string;
  href: string;
}

export default function ProjectRow({
  index,
  title,
  description,
  category,
  lang,
  year,
  href,
}: ProjectRowProps) {
  return (
    <Link
      href={href}
      className="grid gap-4 border-b border-border py-6 transition-all hover:bg-secondary hover:px-4 md:grid-cols-[70px_1fr_120px_100px_70px_40px]"
    >
      <div className="editorial-mono text-xs tracking-[0.1em] text-muted">No {index}</div>
      <div>
        <div className="editorial-display text-[clamp(32px,4.5vw,60px)]">{title}</div>
        <p className="mt-2 max-w-[70ch] text-sm text-muted">{description}</p>
      </div>
      <div className="editorial-mono text-[11px] uppercase tracking-[0.08em] text-muted">
        {category}
      </div>
      <div className="editorial-mono text-[11px] uppercase tracking-[0.08em] text-primary">
        {lang}
      </div>
      <div className="editorial-mono text-[11px] uppercase tracking-[0.08em] text-muted">
        {year}
      </div>
      <div className="editorial-display text-right text-2xl">→</div>
    </Link>
  );
}
