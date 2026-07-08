import Link from "next/link";

interface FeatureTileProps {
  href: string;
  num: string;
  category: string;
  title: string;
  description: string;
  big?: boolean;
  accent?: boolean;
}

export default function FeatureTile({
  href,
  num,
  category,
  title,
  description,
  big = false,
  accent = false,
}: FeatureTileProps) {
  return (
    <Link
      href={href}
      className={`editorial-frame ${big ? "md:col-span-6 md:row-span-2" : "md:col-span-3"} ${accent ? "bg-foreground text-background" : ""} group block p-4 transition-transform hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0_var(--accent)]`}
    >
      <div className="flex items-baseline justify-between gap-3">
        <span className={`editorial-mono text-[11px] tracking-[0.12em] ${accent ? "text-primary" : "text-muted"}`}>
          # {num}
        </span>
        <span className="editorial-mono text-[10px] uppercase tracking-[0.1em] opacity-70">
          {category}
        </span>
      </div>
      <div className={`editorial-display mt-6 ${big ? "text-[clamp(48px,7vw,100px)]" : "text-[clamp(24px,2.8vw,40px)]"}`}>
        {title}
      </div>
      <p className={`mt-3 max-w-[90%] text-sm leading-6 ${accent ? "text-background/80" : "text-muted"}`}>
        {description}
      </p>
      <div className="mt-6 flex items-center justify-between">
        <span className="editorial-mono text-[10px] uppercase tracking-[0.12em]">
          Case study
        </span>
        <span className="editorial-display text-2xl transition-transform group-hover:translate-x-1">↗</span>
      </div>
    </Link>
  );
}
