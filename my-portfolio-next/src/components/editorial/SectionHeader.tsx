import type { ReactNode } from "react";
import Eyebrow from "./Eyebrow";

interface SectionHeaderProps {
  num?: string | number;
  kicker: string;
  title: string;
  right?: ReactNode;
  className?: string;
}

export default function SectionHeader({
  num,
  kicker,
  title,
  right,
  className = "",
}: SectionHeaderProps) {
  return (
    <div
      className={`grid gap-6 md:grid-cols-[1fr_auto] md:items-end ${className}`.trim()}
    >
      <div>
        <Eyebrow num={num}>{kicker}</Eyebrow>
        <h2 className="editorial-display editorial-title-md mt-2">{title}</h2>
      </div>
      {right ? <div>{right}</div> : null}
    </div>
  );
}
