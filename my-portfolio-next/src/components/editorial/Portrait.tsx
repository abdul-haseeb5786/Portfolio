"use client";

interface PortraitProps {
  name?: string;
  location?: string;
}

export default function Portrait({ name = "A.H.", location = "Pakistan" }: PortraitProps) {
  return (
    <div className="editorial-frame editorial-frame-thick editorial-portrait">
      <svg viewBox="0 0 200 200" style={{ width: "100%", height: "100%" }}>
        {/* hatched background */}
        <defs>
          <pattern
            id="hatch"
            patternUnits="userSpaceOnUse"
            width="6"
            height="6"
            patternTransform="rotate(45)"
          >
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="6"
              stroke="var(--ink)"
              strokeWidth="0.4"
            />
          </pattern>
        </defs>
        <rect width="200" height="200" fill="url(#hatch)" opacity="0.5" />
        {/* face */}
        <ellipse
          cx="100"
          cy="90"
          rx="38"
          ry="48"
          fill="var(--paper)"
          stroke="var(--ink)"
          strokeWidth="2.2"
        />
        {/* hair */}
        <path
          d="M62 80 Q70 35 100 38 Q130 35 138 80 L132 70 Q126 60 100 60 Q74 60 68 70 Z"
          fill="var(--ink)"
        />
        {/* eyes */}
        <circle cx="86" cy="92" r="2.2" fill="var(--ink)" />
        <circle cx="114" cy="92" r="2.2" fill="var(--ink)" />
        {/* nose */}
        <path
          d="M100 95 Q98 110 96 116 Q100 119 104 116"
          fill="none"
          stroke="var(--ink)"
          strokeWidth="1.5"
        />
        {/* mouth */}
        <path
          d="M88 130 Q100 135 112 130"
          fill="none"
          stroke="var(--ink)"
          strokeWidth="2"
        />
        {/* shoulders */}
        <path
          d="M40 200 Q60 160 100 156 Q140 160 160 200 Z"
          fill="var(--ink)"
        />
        {/* accent dot */}
        <circle cx="160" cy="40" r="14" fill="var(--accent)" />
      </svg>
      <div className="editorial-portrait-label">
        <span>{name}</span>
        <span>{location}</span>
      </div>
    </div>
  );
}
