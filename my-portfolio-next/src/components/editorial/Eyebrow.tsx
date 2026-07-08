import type { ReactNode } from "react";

interface EyebrowProps {
  children: ReactNode;
  num?: string | number;
  className?: string;
}

export default function Eyebrow({ children, num, className = "" }: EyebrowProps) {
  return (
    <div className={`editorial-eyebrow ${className}`.trim()}>
      {num != null && <span className="dot">[{String(num).padStart(2, "0")}] </span>}
      <span>{children}</span>
    </div>
  );
}
