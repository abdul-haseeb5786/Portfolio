"use client";

import { useEffect, useRef } from "react";

interface MagneticProps {
  text: string;
  strength?: number;
  radius?: number;
  className?: string;
}

export default function Magnetic({
  text,
  strength = 18,
  radius = 180,
  className = "",
}: MagneticProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const letters = el.querySelectorAll<HTMLElement>(".ml");
    let raf = 0;
    let mouseX = -9999;
    let mouseY = -9999;

    const tick = () => {
      raf = 0;

      letters.forEach((letter) => {
        const rect = letter.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = mouseX - cx;
        const dy = mouseY - cy;
        const distance = Math.hypot(dx, dy);

        if (distance > 0 && distance < radius) {
          const force = 1 - distance / radius;
          const tx = (dx / distance) * strength * force;
          const ty = (dy / distance) * strength * force;

          letter.style.transform = `translate(${tx}px, ${ty}px)`;
          letter.style.color = "var(--accent)";
        } else {
          letter.style.transform = "";
          letter.style.color = "";
        }
      });
    };

    const onMove = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;

      if (!raf) {
        raf = requestAnimationFrame(tick);
      }
    };

    const onLeave = () => {
      mouseX = -9999;
      mouseY = -9999;

      if (!raf) {
        raf = requestAnimationFrame(tick);
      }
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);

      if (raf) cancelAnimationFrame(raf);
    };
  }, [radius, strength, text]);

  return (
    <span ref={ref} className={`magnetic ${className}`.trim()}>
      {text.split("").map((char, index) =>
        char === " " ? (
          <span key={index} className="ml space">
            {" "}
          </span>
        ) : (
          <span key={index} className="ml">
            {char}
          </span>
        ),
      )}
    </span>
  );
}
