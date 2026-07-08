interface StatBlockProps {
  value: string;
  label: string;
  compact?: boolean;
}

export default function StatBlock({ value, label, compact = false }: StatBlockProps) {
  return (
    <div>
      <div className={`editorial-stat-number ${compact ? "text-[clamp(38px,4vw,56px)]" : ""}`}>
        {value}
      </div>
      <div className="editorial-stat-label mt-1">{label}</div>
    </div>
  );
}
