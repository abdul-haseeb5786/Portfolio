import Link from "next/link";
import type { ReactNode } from "react";

interface EditorialButtonProps {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  invert?: boolean;
  className?: string;
}

export default function EditorialButton({
  href,
  onClick,
  children,
  invert = false,
  className = "",
}: EditorialButtonProps) {
  const classes = `editorial-button ${invert ? "editorial-button-invert" : ""} ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
