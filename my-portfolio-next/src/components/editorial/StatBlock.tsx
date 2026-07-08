interface StatBlockProps {
  value: string;
  label: string;
  compact?: boolean;
}

export default function StatBlock({ value, label, compact = false }: StatBlockProps) {
  return (
    <div className="rounded-sm border border-border/70 p-3 sm:p-4">
      <div className={`editorial-stat-number text-[clamp(32px,4vw,56px)] ${compact ? "text-[clamp(32px,4vw,46px)]" : ""}`}>
        {value}
      </div>
      <div className="editorial-stat-label mt-1 text-[11px] uppercase tracking-[0.12em] text-muted sm:text-[12px]">{label}</div>
    </div>
  );
}
