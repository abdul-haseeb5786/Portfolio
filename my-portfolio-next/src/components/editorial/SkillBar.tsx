"use client";

import { useEffect, useRef, useState } from "react";

interface SkillBarProps {
  name: string;
  note?: string;
  pct: number;
}

export default function SkillBar({ name, note, pct }: SkillBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
        }
      },
      { threshold: 0.25 },
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="border-t border-border py-4 last:border-b">
      <div className="mb-2 flex items-baseline justify-between gap-4">
        <div className="min-w-0">
          <div className="editorial-display text-base leading-none">{name}</div>
          {note ? <div className="editorial-mono mt-1 text-[10px] text-muted">{note}</div> : null}
        </div>
        <div className="editorial-mono text-[11px] font-bold">{pct}</div>
      </div>
      <div className="h-2 border border-border bg-secondary">
        <div
          className="h-full bg-primary transition-[width] duration-1000 ease-out"
          style={{ width: shown ? `${pct}%` : "0%" }}
        />
      </div>
    </div>
  );
}
