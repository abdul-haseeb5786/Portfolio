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
      className="grid gap-4 border-b border-border py-5 transition-all hover:bg-secondary hover:px-2 sm:py-6 md:grid-cols-[70px_1fr_120px_100px_70px_40px] md:hover:px-4"
    >
      <div className="editorial-mono text-xs tracking-[0.1em] text-muted">No {index}</div>
      <div>
        <div className="editorial-display max-w-full break-words text-[clamp(24px,3.4vw,60px)]">{title}</div>
        <p className="mt-2 max-w-[70ch] break-words text-sm leading-6 text-muted">{description}</p>
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
