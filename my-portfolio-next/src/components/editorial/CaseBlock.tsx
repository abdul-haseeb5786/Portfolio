import type { ReactNode } from "react";
import Eyebrow from "./Eyebrow";

interface CaseBlockProps {
  num: string | number;
  kicker: string;
  children: ReactNode;
}

export default function CaseBlock({ num, kicker, children }: CaseBlockProps) {
  return (
    <div>
      <Eyebrow num={num}>{kicker}</Eyebrow>
      <div className="editorial-prose mt-3">{children}</div>
    </div>
  );
}
