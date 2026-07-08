"use client";

import { useEffect, useState } from "react";

// ─── Shared helpers ────────────────────────────────────────────────────────────
function useAnimT() {
  const [t, setT] = useState(0);
  useEffect(() => {
    let raf: number;
    const start = performance.now();
    const loop = (now: number) => { setT((now - start) / 1000); raf = requestAnimationFrame(loop); };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);
  return t;
}

// ─── 01 ShipTag — hub-and-spoke carrier ────────────────────────────────────────
export function ShipTagDiagram() {
  const t = useAnimT();
  const W = 1200, H = 360, hub = { x: 600, y: 180 };
  const carriers = [
    { label: "ARAMEX", x: 180, y: 90 },
    { label: "SMSA",   x: 180, y: 270 },
    { label: "DHL",    x: 1020, y: 90 },
    { label: "FEDEX",  x: 1020, y: 270 },
  ];
  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", height: "100%" }}>
      {carriers.map((c, i) => (
        <line key={i} x1={hub.x} y1={hub.y} x2={c.x} y2={c.y}
          stroke="var(--ink)" strokeWidth="1.5" strokeDasharray="6 5" />
      ))}
      {carriers.map((c, i) => {
        const phase = ((t + i * 0.5) % 2) / 2;
        const cx = hub.x + (c.x - hub.x) * phase;
        const cy = hub.y + (c.y - hub.y) * phase;
        return <rect key={i} x={cx - 5} y={cy - 5} width="10" height="10" fill="var(--accent)"
          transform={`rotate(${(t * 90) % 360} ${cx} ${cy})`} />;
      })}
      {carriers.map((c, i) => (
        <g key={i}>
          <rect x={c.x - 64} y={c.y - 26} width="128" height="52" fill="var(--paper)" stroke="var(--ink)" strokeWidth="2.5" />
          <text x={c.x} y={c.y + 5} textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="15" letterSpacing="0.12em" fill="var(--ink)">{c.label}</text>
        </g>
      ))}
      <g>
        <circle cx={hub.x} cy={hub.y} r="70" fill="var(--ink)" />
        <circle cx={hub.x} cy={hub.y} r="70" fill="none" stroke="var(--accent)" strokeWidth="3"
          strokeDasharray="8 8" transform={`rotate(${(t * 24) % 360} ${hub.x} ${hub.y})`} />
        <text x={hub.x} y={hub.y - 4} textAnchor="middle" fontFamily="Archivo Black, sans-serif" fontSize="22" fill="var(--paper)">SHIP+TAG</text>
        <text x={hub.x} y={hub.y + 18} textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="11" letterSpacing="0.14em" fill="var(--accent)">PORTAL</text>
      </g>
    </svg>
  );
}

// ─── 02 AI Lead Qualification — flow pipeline ──────────────────────────────────
export function LeadAutoDiagram() {
  const t = useAnimT();
  const W = 1200, H = 300;
  const nodes = [
    { label: "FORM\nWEBHOOK", x: 130, y: 150 },
    { label: "GPT-4o\nSCORE", x: 370, y: 150 },
    { label: "HOT\nLEAD", x: 650, y: 70 },
    { label: "WARM\nNURTURE", x: 650, y: 150 },
    { label: "COLD\nREJECT", x: 650, y: 230 },
    { label: "HUBSPOT\nCRM", x: 900, y: 70 },
    { label: "SLACK\nALERT", x: 1070, y: 70 },
  ];
  const edges = [
    [0, 1], [1, 2], [1, 3], [1, 4], [2, 5], [5, 6]
  ];
  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", height: "100%" }}>
      {edges.map(([a, b], i) => {
        const na = nodes[a], nb = nodes[b];
        const phase = ((t * 0.6 + i * 0.3) % 1);
        const px = na.x + (nb.x - na.x) * phase;
        const py = na.y + (nb.y - na.y) * phase;
        return (
          <g key={i}>
            <line x1={na.x} y1={na.y} x2={nb.x} y2={nb.y} stroke="var(--ink)" strokeWidth="1.5" strokeDasharray="5 4" />
            <circle cx={px} cy={py} r="5" fill="var(--accent)" opacity="0.9" />
          </g>
        );
      })}
      {nodes.map((n, i) => (
        <g key={i}>
          <rect x={n.x - 52} y={n.y - 28} width="104" height="52" fill={i === 2 ? "var(--ink)" : "var(--paper)"} stroke="var(--ink)" strokeWidth="2.5" />
          {n.label.split("\n").map((line, li) => (
            <text key={li} x={n.x} y={n.y - 4 + li * 16} textAnchor="middle" fontFamily="JetBrains Mono, monospace"
              fontSize="11" letterSpacing="0.1em" fill={i === 2 ? "var(--paper)" : "var(--ink)"}>{line}</text>
          ))}
        </g>
      ))}
      <text x={360} y={270} textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="10"
        letterSpacing="0.14em" fill="var(--muted)">Fig. 01 — n8n + OpenAI · real-time lead routing pipeline</text>
    </svg>
  );
}

// ─── 03 Order Orchestration — sequential pipeline ──────────────────────────────
export function OrderOrchDiagram() {
  const t = useAnimT();
  const W = 1200, H = 300;
  const steps = [
    { label: "SHOPIFY\nWEBHOOK", x: 100 },
    { label: "INVENTORY\nCHECK", x: 280 },
    { label: "WAREHOUSE\nNOTIFY", x: 460 },
    { label: "SHIPENGINLE\nLABEL", x: 640 },
    { label: "WHATSAPP\nCUSTOMER", x: 820 },
    { label: "REVIEW\nREQUEST", x: 1000 },
  ];
  const Y = 150;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", height: "100%" }}>
      {steps.map((s, i) => i < steps.length - 1 && (
        <g key={i}>
          <line x1={s.x + 70} y1={Y} x2={steps[i + 1].x - 70} y2={Y} stroke="var(--ink)" strokeWidth="2" />
          <polygon points={`${steps[i+1].x-74},${Y-5} ${steps[i+1].x-60},${Y} ${steps[i+1].x-74},${Y+5}`} fill="var(--ink)" />
        </g>
      ))}
      {/* animated packet */}
      {steps.map((s, i) => i < steps.length - 1 && (() => {
        const phase = ((t * 0.4 + i * 0.16) % 1);
        const px = (s.x + 70) + (steps[i + 1].x - 70 - s.x - 70) * phase;
        return <rect key={i} x={px - 6} y={Y - 6} width="12" height="12" fill="var(--accent)" />;
      })())}
      {steps.map((s, i) => (
        <g key={i}>
          <rect x={s.x - 70} y={Y - 32} width="140" height="56" fill={i === 0 ? "var(--ink)" : "var(--paper)"} stroke="var(--ink)" strokeWidth="2.5" />
          {s.label.split("\n").map((line, li) => (
            <text key={li} x={s.x} y={Y - 8 + li * 18} textAnchor="middle" fontFamily="JetBrains Mono, monospace"
              fontSize="11" letterSpacing="0.1em" fill={i === 0 ? "var(--paper)" : "var(--ink)"}>{line}</text>
          ))}
        </g>
      ))}
      <text x={600} y={260} textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="10"
        letterSpacing="0.12em" fill="var(--muted)">Fig. 01 — end-to-end order fulfillment pipeline · n8n automation</text>
    </svg>
  );
}

// ─── 04 Competitor Price Monitor — scrape → analyze → alert ───────────────────
export function PriceMonitorDiagram() {
  const t = useAnimT();
  const W = 1200, H = 320;
  const sites = [
    { label: "SITE A", x: 130, y: 80 },
    { label: "SITE B", x: 130, y: 160 },
    { label: "SITE C", x: 130, y: 240 },
  ];
  const hub = { x: 450, y: 160, label: "N8N\nSCRAPER" };
  const gpt = { x: 730, y: 160, label: "GPT-4\nANALYZE" };
  const out1 = { x: 1000, y: 100, label: "SLACK\nALERT" };
  const out2 = { x: 1000, y: 220, label: "STORE\nREPRICE" };

  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", height: "100%" }}>
      {/* Scraper connections */}
      {sites.map((s, i) => {
        const phase = ((t * 0.5 + i * 0.2) % 1);
        const px = s.x + 60 + (hub.x - 60 - s.x - 60) * phase;
        const py = s.y + (hub.y - s.y) * phase;
        return (
          <g key={i}>
            <line x1={s.x + 55} y1={s.y} x2={hub.x - 55} y2={hub.y} stroke="var(--ink)" strokeWidth="1" strokeDasharray="4 4" />
            <circle cx={px} cy={py} r="4" fill="var(--accent)" />
          </g>
        );
      })}
      {/* gpt → outputs */}
      {[out1, out2].map((o, i) => {
        const phase = ((t * 0.5 + i * 0.25) % 1);
        const px = gpt.x + 55 + (o.x - 55 - gpt.x - 55) * phase;
        const py = gpt.y + (o.y - gpt.y) * phase;
        return (
          <g key={i}>
            <line x1={gpt.x + 55} y1={gpt.y} x2={o.x - 55} y2={o.y} stroke="var(--ink)" strokeWidth="1.5" />
            <circle cx={px} cy={py} r="5" fill="var(--accent)" />
          </g>
        );
      })}
      <line x1={hub.x + 55} y1={hub.y} x2={gpt.x - 55} y2={gpt.y} stroke="var(--ink)" strokeWidth="2.5" />
      {/* nodes */}
      {sites.map((s, i) => (
        <g key={i}>
          <rect x={s.x - 55} y={s.y - 20} width="110" height="40" fill="var(--paper)" stroke="var(--ink)" strokeWidth="2" />
          <text x={s.x} y={s.y + 5} textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="12" letterSpacing="0.1em" fill="var(--muted)">{s.label}</text>
        </g>
      ))}
      {[hub, gpt].map((n, i) => (
        <g key={i}>
          <rect x={n.x - 55} y={n.y - 32} width="110" height="64" fill="var(--ink)" stroke="var(--accent)" strokeWidth="3" />
          {n.label.split("\n").map((line, li) => (
            <text key={li} x={n.x} y={n.y - 6 + li * 18} textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="12" letterSpacing="0.12em" fill="var(--paper)">{line}</text>
          ))}
        </g>
      ))}
      {[out1, out2].map((n, i) => (
        <g key={i}>
          <rect x={n.x - 55} y={n.y - 26} width="110" height="52" fill={i === 0 ? "var(--accent)" : "var(--paper)"} stroke="var(--ink)" strokeWidth="2.5" />
          {n.label.split("\n").map((line, li) => (
            <text key={li} x={n.x} y={n.y - 4 + li * 16} textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="11" letterSpacing="0.1em" fill={i === 0 ? "var(--paper)" : "var(--ink)"}>{line}</text>
          ))}
        </g>
      ))}
    </svg>
  );
}

// ─── 05 Luxury Studio — e-commerce cart flow ──────────────────────────────────
export function LuxuryStudioDiagram() {
  const t = useAnimT();
  const W = 1200, H = 300;
  const steps = [
    { label: "BROWSE", icon: "🛍" },
    { label: "PRODUCT", icon: "👗" },
    { label: "CART", icon: "🛒" },
    { label: "PAYMENT", icon: "💳" },
    { label: "CONFIRM", icon: "✓" },
  ];
  const Y = 150, W_STEP = 220, X0 = 100;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", height: "100%" }}>
      {steps.map((s, i) => i < steps.length - 1 && (
        <g key={i}>
          <line x1={X0 + i * W_STEP + 65} y1={Y} x2={X0 + (i + 1) * W_STEP - 65} y2={Y}
            stroke="var(--ink)" strokeWidth="2.5" />
          {(() => {
            const phase = ((t * 0.35 + i * 0.2) % 1);
            const px = (X0 + i * W_STEP + 65) + (X0 + (i+1)*W_STEP - 65 - X0 - i*W_STEP - 65) * phase;
            return <rect x={px - 6} y={Y - 6} width="12" height="12" fill="var(--accent)" />;
          })()}
        </g>
      ))}
      {steps.map((s, i) => (
        <g key={i}>
          <circle cx={X0 + i * W_STEP} cy={Y} r="60" fill={i === steps.length - 1 ? "var(--ink)" : "var(--paper)"}
            stroke={i === steps.length - 1 ? "var(--accent)" : "var(--ink)"} strokeWidth="3" />
          <text x={X0 + i * W_STEP} y={Y - 8} textAnchor="middle" fontSize="24" fill={i === steps.length - 1 ? "var(--paper)" : "var(--ink)"}>{s.icon}</text>
          <text x={X0 + i * W_STEP} y={Y + 22} textAnchor="middle" fontFamily="JetBrains Mono, monospace"
            fontSize="10" letterSpacing="0.14em" fill={i === steps.length - 1 ? "var(--accent)" : "var(--muted)"}>{s.label}</text>
        </g>
      ))}
      <text x={600} y={260} textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="10"
        letterSpacing="0.12em" fill="var(--muted)">Fig. 01 — storefront purchase flow · React + Stripe integration</text>
    </svg>
  );
}

// ─── 06 Luxury Studio Admin — 4 module dashboard ──────────────────────────────
export function LuxuryAdminDiagram() {
  const t = useAnimT();
  const W = 1200, H = 340;
  const modules = [
    { label: "INVENTORY", x: 300, y: 120 },
    { label: "ORDERS",    x: 550, y: 80 },
    { label: "SALES",     x: 800, y: 120 },
    { label: "USERS",     x: 550, y: 240 },
  ];
  const hub = { x: 550, y: 160 };
  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", height: "100%" }}>
      {modules.map((m, i) => {
        const phase = ((t * 0.5 + i * 0.25) % 2) / 2;
        const px = hub.x + (m.x - hub.x) * phase;
        const py = hub.y + (m.y - hub.y) * phase;
        return (
          <g key={i}>
            <line x1={hub.x} y1={hub.y} x2={m.x} y2={m.y} stroke="var(--ink)" strokeWidth="1.5" strokeDasharray="6 4" />
            <circle cx={px} cy={py} r="5" fill="var(--accent)" />
          </g>
        );
      })}
      {modules.map((m, i) => (
        <g key={i}>
          <rect x={m.x - 72} y={m.y - 26} width="144" height="52" fill="var(--paper)" stroke="var(--ink)" strokeWidth="2.5" />
          <text x={m.x} y={m.y + 6} textAnchor="middle" fontFamily="JetBrains Mono, monospace"
            fontSize="13" letterSpacing="0.12em" fill="var(--ink)">{m.label}</text>
        </g>
      ))}
      {/* Admin hub */}
      <rect x={hub.x - 80} y={hub.y - 35} width="160" height="70" fill="var(--ink)" />
      <text x={hub.x} y={hub.y - 6} textAnchor="middle" fontFamily="Archivo Black, sans-serif" fontSize="18" fill="var(--paper)">ADMIN</text>
      <text x={hub.x} y={hub.y + 14} textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="10" letterSpacing="0.14em" fill="var(--accent)">DASHBOARD</text>
      <text x={600} y={310} textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="10"
        letterSpacing="0.12em" fill="var(--muted)">Fig. 01 — 4-module admin control system · React + Node.js</text>
    </svg>
  );
}

// ─── 07 ADM — ads analytics radar ─────────────────────────────────────────────
export function ADMDiagram() {
  const t = useAnimT();
  const W = 1200, H = 340;
  const cx = 300, cy = 170, r = 130;
  const metrics = ["CLICKS", "IMPRESSIONS", "CTR", "ROAS", "CPC", "CONV"];
  const vals = [0.85, 0.72, 0.9, 0.65, 0.78, 0.88];
  const pulse = 0.05 * Math.sin(t * 1.5);
  const pts = metrics.map((_, i) => {
    const angle = (i / metrics.length) * Math.PI * 2 - Math.PI / 2;
    const v = vals[i] + pulse;
    return [cx + Math.cos(angle) * r * v, cy + Math.sin(angle) * r * v];
  });
  const polyline = pts.map(p => p.join(",")).join(" ");
  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", height: "100%" }}>
      {/* Grid circles */}
      {[0.33, 0.66, 1].map((v, i) => (
        <circle key={i} cx={cx} cy={cy} r={r * v} fill="none" stroke="var(--ink)" strokeWidth="1" opacity={0.2 + i * 0.1} />
      ))}
      {/* Axes */}
      {metrics.map((m, i) => {
        const angle = (i / metrics.length) * Math.PI * 2 - Math.PI / 2;
        return (
          <g key={i}>
            <line x1={cx} y1={cy} x2={cx + Math.cos(angle) * r} y2={cy + Math.sin(angle) * r}
              stroke="var(--ink)" strokeWidth="1" opacity="0.3" />
            <text x={cx + Math.cos(angle) * (r + 20)} y={cy + Math.sin(angle) * (r + 20) + 4}
              textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="10" letterSpacing="0.1em" fill="var(--muted)">{m}</text>
          </g>
        );
      })}
      {/* Data polygon */}
      <polygon points={polyline} fill="var(--accent)" fillOpacity="0.15" stroke="var(--accent)" strokeWidth="2.5" />
      {pts.map((p, i) => <circle key={i} cx={p[0]} cy={p[1]} r="5" fill="var(--accent)" />)}
      {/* Right: live bars */}
      {metrics.map((m, i) => {
        const bx = 680, by = 50 + i * 44, bw = 400 * (vals[i] + 0.02 * Math.sin(t + i));
        return (
          <g key={i}>
            <text x={bx} y={by + 14} fontFamily="JetBrains Mono, monospace" fontSize="11" letterSpacing="0.08em" fill="var(--muted)">{m}</text>
            <rect x={bx} y={by + 20} width="400" height="12" fill="var(--paper-2)" stroke="var(--ink)" strokeWidth="1.5" />
            <rect x={bx} y={by + 20} width={Math.min(bw, 400)} height="12" fill="var(--accent)" />
            <text x={bx + 408} y={by + 31} fontFamily="JetBrains Mono, monospace" fontSize="10" fill="var(--ink)">{Math.round((vals[i]) * 100)}%</text>
          </g>
        );
      })}
    </svg>
  );
}

// ─── 08 AdPulse — microservices architecture ──────────────────────────────────
export function AdPulseDiagram() {
  const t = useAnimT();
  const W = 1200, H = 340;
  const gateway = { x: 600, y: 60, label: "API GATEWAY" };
  const services = [
    { x: 200, y: 200, label: "CAMPAIGN\nSERVICE" },
    { x: 450, y: 200, label: "AI\nSERVICE" },
    { x: 700, y: 200, label: "ALERT\nSERVICE" },
    { x: 950, y: 200, label: "ANALYTICS\nSERVICE" },
  ];
  const dbs = [
    { x: 200, y: 310, label: "POSTGRES" },
    { x: 700, y: 310, label: "SOCKET.IO" },
    { x: 950, y: 310, label: "DOCKER" },
  ];
  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", height: "100%" }}>
      {/* Gateway → services */}
      {services.map((s, i) => {
        const phase = ((t * 0.5 + i * 0.25) % 1);
        const px = gateway.x + (s.x - gateway.x) * phase;
        const py = gateway.y + (s.y - gateway.y) * phase;
        return (
          <g key={i}>
            <line x1={gateway.x} y1={gateway.y + 22} x2={s.x} y2={s.y - 26}
              stroke="var(--ink)" strokeWidth="1.5" strokeDasharray="5 3" />
            <circle cx={px} cy={py} r="5" fill="var(--accent)" />
          </g>
        );
      })}
      {/* Services → dbs */}
      {[[0, 0], [2, 1], [3, 2]].map(([si, di], k) => (
        <line key={k} x1={services[si].x} y1={services[si].y + 26} x2={dbs[di].x} y2={dbs[di].y - 18}
          stroke="var(--muted)" strokeWidth="1" strokeDasharray="3 3" />
      ))}
      {/* Gateway */}
      <rect x={gateway.x - 100} y={gateway.y - 22} width="200" height="44" fill="var(--ink)" />
      <text x={gateway.x} y={gateway.y + 6} textAnchor="middle" fontFamily="JetBrains Mono, monospace"
        fontSize="12" letterSpacing="0.12em" fill="var(--accent)">{gateway.label}</text>
      {/* Services */}
      {services.map((s, i) => (
        <g key={i}>
          <rect x={s.x - 72} y={s.y - 26} width="144" height="52" fill="var(--paper)" stroke="var(--ink)" strokeWidth="2.5" />
          {s.label.split("\n").map((line, li) => (
            <text key={li} x={s.x} y={s.y - 4 + li * 16} textAnchor="middle" fontFamily="JetBrains Mono, monospace"
              fontSize="11" letterSpacing="0.1em" fill="var(--ink)">{line}</text>
          ))}
        </g>
      ))}
      {/* DBs */}
      {dbs.map((d, i) => (
        <g key={i}>
          <rect x={d.x - 58} y={d.y - 18} width="116" height="36" fill="var(--paper-2)" stroke="var(--muted)" strokeWidth="1.5" strokeDasharray="3 3" />
          <text x={d.x} y={d.y + 6} textAnchor="middle" fontFamily="JetBrains Mono, monospace"
            fontSize="10" letterSpacing="0.1em" fill="var(--muted)">{d.label}</text>
        </g>
      ))}
    </svg>
  );
}

// ─── 09 CareSync — patient → AI → doctor flow ─────────────────────────────────
export function CareSyncDiagram() {
  const t = useAnimT();
  const W = 1200, H = 320;
  const flow = [
    { label: "PATIENT\nINTAKE",  x: 120, color: "var(--paper)" },
    { label: "AI\nASSESSMENT",  x: 360, color: "var(--ink)" },
    { label: "APPT\nSCHEDULE",  x: 600, color: "var(--paper)" },
    { label: "DOCTOR\nASSIGN",  x: 840, color: "var(--paper)" },
    { label: "FOLLOW\nUP",       x: 1080, color: "var(--accent)" },
  ];
  const Y = 150;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", height: "100%" }}>
      {flow.map((s, i) => i < flow.length - 1 && (
        <g key={i}>
          <line x1={s.x + 68} y1={Y} x2={flow[i + 1].x - 68} y2={Y} stroke="var(--ink)" strokeWidth="2" />
          {(() => {
            const phase = ((t * 0.4 + i * 0.2) % 1);
            const px = (s.x + 68) + (flow[i + 1].x - 68 - s.x - 68) * phase;
            return <circle cx={px} cy={Y} r="6" fill="var(--accent)" />;
          })()}
        </g>
      ))}
      {flow.map((s, i) => (
        <g key={i}>
          <rect x={s.x - 68} y={Y - 34} width="136" height="68" fill={s.color}
            stroke={s.color === "var(--accent)" ? "var(--accent)" : "var(--ink)"} strokeWidth="2.5" />
          {s.label.split("\n").map((line, li) => (
            <text key={li} x={s.x} y={Y - 6 + li * 18} textAnchor="middle" fontFamily="JetBrains Mono, monospace"
              fontSize="11" letterSpacing="0.1em" fill={s.color === "var(--paper)" ? "var(--ink)" : "var(--paper)"}>{line}</text>
          ))}
        </g>
      ))}
      <text x={600} y={268} textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="10"
        letterSpacing="0.12em" fill="var(--muted)">Fig. 01 — AI-powered patient journey · Flutter + Firebase + Node.js</text>
    </svg>
  );
}

// ─── 10 AI Collab Chat — WebRTC + Socket mesh ─────────────────────────────────
export function CollabChatDiagram() {
  const t = useAnimT();
  const W = 1200, H = 340;
  const users = [
    { x: 120, y: 100 }, { x: 120, y: 220 },
    { x: 1080, y: 100 }, { x: 1080, y: 220 },
  ];
  const hub = { x: 600, y: 160 };
  const ai = { x: 600, y: 290 };
  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", height: "100%" }}>
      {users.map((u, i) => {
        const phase = ((t * 0.5 + i * 0.25) % 2) / 2;
        const px = u.x + (hub.x - u.x) * phase;
        const py = u.y + (hub.y - u.y) * phase;
        return (
          <g key={i}>
            <line x1={u.x} y1={u.y} x2={hub.x} y2={hub.y} stroke="var(--ink)" strokeWidth="1.5" strokeDasharray="6 4" />
            <circle cx={px} cy={py} r="5" fill="var(--accent)" />
          </g>
        );
      })}
      <line x1={hub.x} y1={hub.y + 38} x2={ai.x} y2={ai.y - 20} stroke="var(--accent)" strokeWidth="2" strokeDasharray="4 3" />
      {users.map((u, i) => (
        <g key={i}>
          <circle cx={u.x} cy={u.y} r="36" fill="var(--paper)" stroke="var(--ink)" strokeWidth="2.5" />
          <text x={u.x} y={u.y + 5} textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="11" letterSpacing="0.08em" fill="var(--muted)">USER {i + 1}</text>
        </g>
      ))}
      {/* Socket hub */}
      <circle cx={hub.x} cy={hub.y} r="52" fill="var(--ink)" />
      <text x={hub.x} y={hub.y - 6} textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="12" letterSpacing="0.1em" fill="var(--paper)">SOCKET.IO</text>
      <text x={hub.x} y={hub.y + 12} textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="10" letterSpacing="0.1em" fill="var(--accent)">WEBRTC</text>
      {/* AI node */}
      <rect x={ai.x - 64} y={ai.y - 20} width="128" height="40" fill="var(--accent)" />
      <text x={ai.x} y={ai.y + 6} textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="12" letterSpacing="0.12em" fill="var(--paper)">AI ASSIST</text>
    </svg>
  );
}

// ─── 11 CryptoPulse — data → portfolio → AI ───────────────────────────────────
export function CryptoPulseDiagram() {
  const t = useAnimT();
  const W = 1200, H = 320;
  // Animated price chart on left
  const points = Array.from({ length: 20 }, (_, i) => {
    const x = 80 + i * 28;
    const y = 200 - 80 * (0.5 + 0.4 * Math.sin(i * 0.8 + t * 0.5)) - 20 * Math.sin(i * 2.1 + t);
    return `${x},${y}`;
  }).join(" ");
  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", height: "100%" }}>
      {/* Chart area */}
      <rect x="60" y="60" width="580" height="200" fill="var(--paper)" stroke="var(--ink)" strokeWidth="2" />
      <text x="350" y="40" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="12" letterSpacing="0.12em" fill="var(--muted)">LIVE MARKET DATA</text>
      <polyline points={points} fill="none" stroke="var(--accent)" strokeWidth="2.5" />
      {/* Flow right */}
      {[
        { label: "COINGECKO\nAPI", x: 760, y: 100 },
        { label: "TENSORFLOW\nANALYSIS", x: 760, y: 200 },
        { label: "AI\nINSIGHTS", x: 1060, y: 150 },
      ].map((n, i) => (
        <g key={i}>
          <rect x={n.x - 64} y={n.y - 28} width="128" height="56" fill={i === 2 ? "var(--ink)" : "var(--paper)"} stroke="var(--ink)" strokeWidth="2.5" />
          {n.label.split("\n").map((line, li) => (
            <text key={li} x={n.x} y={n.y - 4 + li * 18} textAnchor="middle" fontFamily="JetBrains Mono, monospace"
              fontSize="11" letterSpacing="0.1em" fill={i === 2 ? "var(--paper)" : "var(--ink)"}>{line}</text>
          ))}
        </g>
      ))}
      <line x1={660} y1={160} x2={694} y2={100} stroke="var(--ink)" strokeWidth="1.5" />
      <line x1={660} y1={160} x2={694} y2={200} stroke="var(--ink)" strokeWidth="1.5" />
      <line x1={824} y1={100} x2={970} y2={150} stroke="var(--ink)" strokeWidth="1.5" />
      <line x1={824} y1={200} x2={970} y2={150} stroke="var(--ink)" strokeWidth="1.5" />
    </svg>
  );
}

// ─── 12 Finance Assistant — expense funnel ────────────────────────────────────
export function FinanceAssistantDiagram() {
  const t = useAnimT();
  const W = 1200, H = 320;
  const stages = [
    { label: "PLAID\nBANK LINK", w: 960, y: 50, fill: "var(--paper)" },
    { label: "TRANSACTIONS\nINGEST", w: 720, y: 130, fill: "var(--paper-2)" },
    { label: "BUDGET\nANALYSIS", w: 480, y: 210, fill: "var(--ink)" },
    { label: "SMART\nALERTS", w: 240, y: 275, fill: "var(--accent)" },
  ];
  const CX = 600;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", height: "100%" }}>
      {stages.map((s, i) => (
        <g key={i}>
          <rect x={CX - s.w / 2} y={s.y} width={s.w} height={50} fill={s.fill}
            stroke={s.fill === "var(--accent)" ? "var(--accent)" : "var(--ink)"} strokeWidth="2.5" />
          {s.label.split("\n").map((line, li) => (
            <text key={li} x={CX} y={s.y + 18 + li * 16} textAnchor="middle" fontFamily="JetBrains Mono, monospace"
              fontSize="11" letterSpacing="0.1em" fill={s.fill === "var(--paper)" || s.fill === "var(--paper-2)" ? "var(--ink)" : "var(--paper)"}>{line}</text>
          ))}
        </g>
      ))}
      {/* Animated particle falling through funnel */}
      {(() => {
        const phase = (t * 0.3) % 1;
        const y = 50 + phase * 275;
        return <circle cx={CX} cy={y} r="6" fill="var(--accent)" opacity="0.7" />;
      })()}
    </svg>
  );
}

// ─── 13 Helply — support triage ────────────────────────────────────────────────
export function HelplyDiagram() {
  const t = useAnimT();
  const W = 1200, H = 320;
  const flow = [
    { label: "CUSTOMER\nQUERY", x: 120, fill: "var(--paper)" },
    { label: "LIVE\nCHAT", x: 360, fill: "var(--paper)" },
    { label: "AI\nTRIAGE", x: 600, fill: "var(--ink)" },
    { label: "AGENT\nHANDOFF", x: 840, fill: "var(--paper)" },
    { label: "RESOLVED\n✓", x: 1080, fill: "var(--accent)" },
  ];
  const Y = 160;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", height: "100%" }}>
      {flow.map((s, i) => i < flow.length - 1 && (
        <g key={i}>
          <line x1={s.x + 68} y1={Y} x2={flow[i + 1].x - 68} y2={Y} stroke="var(--ink)" strokeWidth="2.5" />
          {(() => {
            const phase = ((t * 0.4 + i * 0.2) % 1);
            const px = s.x + 68 + (flow[i + 1].x - 68 - s.x - 68) * phase;
            return <circle cx={px} cy={Y} r="6" fill="var(--accent)" />;
          })()}
        </g>
      ))}
      {flow.map((s, i) => (
        <g key={i}>
          <rect x={s.x - 68} y={Y - 36} width="136" height="72" fill={s.fill}
            stroke="var(--ink)" strokeWidth="2.5" />
          {s.label.split("\n").map((line, li) => (
            <text key={li} x={s.x} y={Y - 8 + li * 20} textAnchor="middle" fontFamily="JetBrains Mono, monospace"
              fontSize="11" letterSpacing="0.1em" fill={s.fill === "var(--paper)" ? "var(--ink)" : "var(--paper)"}>{line}</text>
          ))}
        </g>
      ))}
    </svg>
  );
}

// ─── 14 Hireflow — recruitment pipeline ───────────────────────────────────────
export function HireflowDiagram() {
  const t = useAnimT();
  const W = 1200, H = 320;
  const stages = [
    { label: "JOB POST",    x: 120, count: 120 },
    { label: "APPLY",       x: 320, count: 86 },
    { label: "AI SCREEN",   x: 520, count: 42 },
    { label: "INTERVIEW",   x: 720, count: 18 },
    { label: "OFFER",       x: 920, count: 6 },
    { label: "HIRED",       x: 1100, count: 3 },
  ];
  const Y = 200;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", height: "100%" }}>
      {stages.map((s, i) => {
        const barH = (s.count / 120) * 130;
        return (
          <g key={i}>
            <rect x={s.x - 50} y={Y - barH} width="100" height={barH}
              fill={i === stages.length - 1 ? "var(--accent)" : i === 5 ? "var(--ink)" : "var(--paper)"}
              stroke="var(--ink)" strokeWidth="2.5" />
            <text x={s.x} y={Y - barH - 8} textAnchor="middle" fontFamily="JetBrains Mono, monospace"
              fontSize="13" fontWeight="700" fill="var(--ink)">{s.count}</text>
            <text x={s.x} y={Y + 18} textAnchor="middle" fontFamily="JetBrains Mono, monospace"
              fontSize="9" letterSpacing="0.1em" fill="var(--muted)">{s.label}</text>
          </g>
        );
      })}
      {/* Animated applicant moving through */}
      {(() => {
        const phase = (t * 0.3) % 1;
        const idx = Math.floor(phase * stages.length);
        const subphase = (phase * stages.length) % 1;
        if (idx >= stages.length - 1) return null;
        const px = stages[idx].x + (stages[idx + 1].x - stages[idx].x) * subphase;
        return <circle cx={px} cy={Y - 20} r="8" fill="var(--accent)" opacity="0.8" />;
      })()}
    </svg>
  );
}

// ─── 15 Meridian Commerce — analytics dashboard ────────────────────────────────
export function MeridianDiagram() {
  const t = useAnimT();
  const W = 1200, H = 320;
  const bars = [
    { label: "JAN", v: 0.6 }, { label: "FEB", v: 0.75 }, { label: "MAR", v: 0.5 },
    { label: "APR", v: 0.88 }, { label: "MAY", v: 0.72 }, { label: "JUN", v: 0.95 },
  ];
  const BX = 60, BY = 40, BW = 560, BH = 220;
  const barW = BW / bars.length;
  const pulse = 0.03 * Math.sin(t * 1.2);
  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", height: "100%" }}>
      <rect x={BX} y={BY} width={BW} height={BH} fill="var(--paper)" stroke="var(--ink)" strokeWidth="2" />
      {bars.map((b, i) => {
        const bh = (b.v + pulse) * (BH - 20);
        const bx = BX + i * barW + 10;
        return (
          <g key={i}>
            <rect x={bx} y={BY + BH - bh - 10} width={barW - 20} height={bh}
              fill={i === bars.length - 1 ? "var(--accent)" : "var(--ink)"} />
            <text x={bx + (barW - 20) / 2} y={BY + BH + 14} textAnchor="middle" fontFamily="JetBrains Mono, monospace"
              fontSize="10" fill="var(--muted)">{b.label}</text>
          </g>
        );
      })}
      {/* Stats right */}
      {[
        { label: "ORDERS", val: "1,284" },
        { label: "REVENUE", val: "$48K" },
        { label: "INVENTORY", val: "2,100" },
        { label: "RETURNS", val: "2.1%" },
      ].map((s, i) => (
        <g key={i}>
          <rect x={700} y={50 + i * 68} width="420" height="56" fill={i === 1 ? "var(--ink)" : "var(--paper)"} stroke="var(--ink)" strokeWidth="2" />
          <text x={720} y={50 + i * 68 + 20} fontFamily="JetBrains Mono, monospace" fontSize="10" letterSpacing="0.12em" fill={i === 1 ? "var(--paper)" : "var(--muted)"}>{s.label}</text>
          <text x={720} y={50 + i * 68 + 42} fontFamily="Archivo Black, sans-serif" fontSize="20" fill={i === 1 ? "var(--accent)" : "var(--ink)"}>{s.val}</text>
        </g>
      ))}
    </svg>
  );
}

// ─── 16 Software Agency Mgmt — gantt-style ────────────────────────────────────
export function AgencyMgmtDiagram() {
  const t = useAnimT();
  const W = 1200, H = 320;
  const tasks = [
    { label: "DISCOVERY",    x: 80,  w: 160, done: 1 },
    { label: "DESIGN",       x: 80,  w: 220, done: 1 },
    { label: "DEVELOPMENT",  x: 80,  w: 340, done: 0.7 + 0.05 * Math.sin(t) },
    { label: "QA & TESTING", x: 80,  w: 120, done: 0.2 },
    { label: "DEPLOYMENT",   x: 80,  w: 80,  done: 0 },
  ];
  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", height: "100%" }}>
      <text x={120} y={30} fontFamily="JetBrains Mono, monospace" fontSize="10" letterSpacing="0.16em" fill="var(--muted)">PROJECT TIMELINE</text>
      {tasks.map((task, i) => {
        const BY = 50 + i * 52;
        return (
          <g key={i}>
            <text x={70} y={BY + 18} textAnchor="end" fontFamily="JetBrains Mono, monospace"
              fontSize="10" letterSpacing="0.08em" fill="var(--muted)">{task.label}</text>
            <rect x={task.x} y={BY} width={task.w} height="28" fill="var(--paper)" stroke="var(--ink)" strokeWidth="1.5" />
            <rect x={task.x} y={BY} width={task.w * task.done} height="28" fill={i === 2 ? "var(--accent)" : "var(--ink)"} />
          </g>
        );
      })}
      {/* Team nodes */}
      {["DEV", "PM", "QA", "DESIGN"].map((r, i) => (
        <g key={i}>
          <circle cx={800 + (i % 2) * 200} cy={100 + Math.floor(i / 2) * 140} r="52" fill="var(--paper)" stroke="var(--ink)" strokeWidth="2.5" />
          <text x={800 + (i % 2) * 200} y={100 + Math.floor(i / 2) * 140 + 6} textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="14" letterSpacing="0.1em" fill="var(--ink)">{r}</text>
        </g>
      ))}
      <line x1={852} y1={100} x2={948} y2={100} stroke="var(--ink)" strokeWidth="1" strokeDasharray="4 3" />
      <line x1={800} y1={152} x2={800} y2={188} stroke="var(--ink)" strokeWidth="1" strokeDasharray="4 3" />
      <line x1={1000} y1={152} x2={1000} y2={188} stroke="var(--ink)" strokeWidth="1" strokeDasharray="4 3" />
    </svg>
  );
}

// ─── 17 StartupCRM — sales funnel pipeline ────────────────────────────────────
export function StartupCRMDiagram() {
  const t = useAnimT();
  const W = 1200, H = 320;
  const stages = [
    { label: "LEADS",    count: 480, color: "var(--paper)" },
    { label: "PROSPECT", count: 320, color: "var(--paper)" },
    { label: "QUALIFY",  count: 180, color: "var(--paper-2)" },
    { label: "PROPOSAL", count: 80,  color: "var(--ink)" },
    { label: "CLOSE",    count: 28,  color: "var(--accent)" },
  ];
  const CX = 600;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", height: "100%" }}>
      {stages.map((s, i) => {
        const w = (s.count / 480) * 1100;
        const y = 20 + i * 54;
        const h = 44;
        return (
          <g key={i}>
            <rect x={CX - w / 2} y={y} width={w} height={h} fill={s.color}
              stroke={s.color === "var(--accent)" ? "var(--accent)" : "var(--ink)"} strokeWidth="2.5" />
            <text x={CX} y={y + h / 2 + 5} textAnchor="middle" fontFamily="JetBrains Mono, monospace"
              fontSize="11" letterSpacing="0.12em" fill={s.color === "var(--paper)" || s.color === "var(--paper-2)" ? "var(--ink)" : "var(--paper)"}>{s.label} — {s.count}</text>
          </g>
        );
      })}
      {(() => {
        const phase = ((t * 0.25) % 1);
        const y = 20 + phase * (stages.length - 1) * 54 + 22;
        return <circle cx={CX} cy={y} r="7" fill="var(--accent)" opacity="0.8" />;
      })()}
    </svg>
  );
}

// ─── 18 Furniro — product → purchase ──────────────────────────────────────────
export function FurniroDiagram() {
  const t = useAnimT();
  const W = 1200, H = 300;
  const steps = [
    { label: "BROWSE\nCATALOG", x: 120 },
    { label: "PRODUCT\nDETAIL", x: 340 },
    { label: "AUTH\nLOGIN", x: 560 },
    { label: "CART\nADD", x: 780 },
    { label: "ORDER\nCONFIRM", x: 1000 },
  ];
  const Y = 150;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", height: "100%" }}>
      {steps.map((s, i) => i < steps.length - 1 && (
        <g key={i}>
          <line x1={s.x + 80} y1={Y} x2={steps[i + 1].x - 80} y2={Y} stroke="var(--ink)" strokeWidth="2" />
          {(() => {
            const phase = ((t * 0.4 + i * 0.2) % 1);
            const px = s.x + 80 + (steps[i + 1].x - 80 - s.x - 80) * phase;
            return <rect x={px - 6} y={Y - 6} width="12" height="12" fill="var(--accent)" />;
          })()}
        </g>
      ))}
      {steps.map((s, i) => (
        <g key={i}>
          <rect x={s.x - 80} y={Y - 36} width="160" height="72" fill={i === steps.length - 1 ? "var(--ink)" : "var(--paper)"}
            stroke="var(--ink)" strokeWidth="2.5" />
          {s.label.split("\n").map((line, li) => (
            <text key={li} x={s.x} y={Y - 8 + li * 20} textAnchor="middle" fontFamily="JetBrains Mono, monospace"
              fontSize="11" letterSpacing="0.1em" fill={i === steps.length - 1 ? "var(--paper)" : "var(--ink)"}>{line}</text>
          ))}
        </g>
      ))}
    </svg>
  );
}

// ─── 19 Shrinkly — URL shortener ──────────────────────────────────────────────
export function ShrinklyDiagram() {
  const t = useAnimT();
  const W = 1200, H = 320;
  const longURL = "https://example.com/very/long/path/to/page?q=123";
  const shortURL = "shr.ly/x9K2m";
  const clicks = Math.floor(1240 + 30 * Math.sin(t * 0.3));
  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", height: "100%" }}>
      {/* Long URL box */}
      <rect x={40} y={60} width="480" height="60" fill="var(--paper)" stroke="var(--ink)" strokeWidth="2.5" />
      <text x={60} y={82} fontFamily="JetBrains Mono, monospace" fontSize="9" fill="var(--muted)" letterSpacing="0.06em">LONG URL</text>
      <text x={60} y={104} fontFamily="JetBrains Mono, monospace" fontSize="12" fill="var(--ink)">{longURL}</text>
      {/* Arrow + engine */}
      <rect x={570} y={70} width="160" height="50" fill="var(--ink)" />
      <rect x={570} y={70} width="160" height="50" fill="var(--ink)" />
      <text x={650} y={100} textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="12" letterSpacing="0.1em" fill="var(--accent)">SHRINKLY</text>
      {/* Animated shrink */}
      {(() => {
        const phase = ((t * 0.5) % 1);
        const px = 40 + phase * 570;
        return <rect x={px} y={82} width="16" height="16" fill="var(--accent)" opacity="0.8" />;
      })()}
      {/* Short URL */}
      <rect x={790} y={60} width="360" height="60" fill="var(--accent)" />
      <text x={810} y={82} fontFamily="JetBrains Mono, monospace" fontSize="9" fill="var(--paper)" letterSpacing="0.1em">SHORT URL</text>
      <text x={810} y={105} fontFamily="Archivo Black, sans-serif" fontSize="22" fill="var(--paper)">{shortURL}</text>
      {/* Analytics counter */}
      <rect x={40} y={180} width="1120" height="90" fill="var(--paper)" stroke="var(--ink)" strokeWidth="2" />
      {[
        { label: "TOTAL CLICKS", val: clicks.toLocaleString() },
        { label: "UNIQUE VISITORS", val: Math.floor(clicks * 0.76).toLocaleString() },
        { label: "CTR", val: "18.4%" },
        { label: "TOP COUNTRY", val: "Pakistan" },
      ].map((s, i) => (
        <g key={i}>
          <text x={100 + i * 280} y={210} textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="9" letterSpacing="0.12em" fill="var(--muted)">{s.label}</text>
          <text x={100 + i * 280} y={250} textAnchor="middle" fontFamily="Archivo Black, sans-serif" fontSize="24" fill="var(--ink)">{s.val}</text>
        </g>
      ))}
    </svg>
  );
}

// ─── 20 EMS — org hierarchy ────────────────────────────────────────────────────
export function EMSDiagram() {

  const W = 1200, H = 320;
  const root = { label: "ORGANIZATION", x: 600, y: 50 };
  const depts = [
    { label: "ENGINEERING", x: 200, y: 150 },
    { label: "HR", x: 500, y: 150 },
    { label: "SALES", x: 750, y: 150 },
    { label: "FINANCE", x: 1000, y: 150 },
  ];
  const emps = [
    { label: "DEV ×8", x: 120, y: 270, parent: 0 },
    { label: "QA ×3", x: 280, y: 270, parent: 0 },
    { label: "HR ×4", x: 500, y: 270, parent: 1 },
    { label: "SDR ×6", x: 680, y: 270, parent: 2 },
    { label: "AE ×4", x: 820, y: 270, parent: 2 },
    { label: "FIN ×3", x: 1000, y: 270, parent: 3 },
  ];
  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", height: "100%" }}>
      {depts.map((d, i) => (
        <line key={i} x1={root.x} y1={root.y + 20} x2={d.x} y2={d.y - 20} stroke="var(--ink)" strokeWidth="2" />
      ))}
      {emps.map((e, i) => (
        <line key={i} x1={depts[e.parent].x} y1={depts[e.parent].y + 20} x2={e.x} y2={e.y - 16}
          stroke="var(--ink)" strokeWidth="1" strokeDasharray="4 3" />
      ))}
      <rect x={root.x - 100} y={root.y - 20} width="200" height="40" fill="var(--ink)" />
      <text x={root.x} y={root.y + 6} textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="12" letterSpacing="0.1em" fill="var(--accent)">{root.label}</text>
      {depts.map((d, i) => (
        <g key={i}>
          <rect x={d.x - 72} y={d.y - 20} width="144" height="40" fill="var(--paper)" stroke="var(--ink)" strokeWidth="2.5" />
          <text x={d.x} y={d.y + 6} textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="11" letterSpacing="0.08em" fill="var(--ink)">{d.label}</text>
        </g>
      ))}
      {emps.map((e, i) => (
        <g key={i}>
          <rect x={e.x - 44} y={e.y - 16} width="88" height="32" fill="var(--paper-2)" stroke="var(--muted)" strokeWidth="1.5" />
          <text x={e.x} y={e.y + 5} textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="10" letterSpacing="0.06em" fill="var(--muted)">{e.label}</text>
        </g>
      ))}
    </svg>
  );
}

// ─── 21 VS Code Portfolio — editor UI ─────────────────────────────────────────
export function VSCodePortfolioDiagram() {
  const t = useAnimT();
  const W = 1200, H = 320;
  const blink = Math.floor(t * 2) % 2 === 0;
  const files = ["portfolio.tsx", "about.tsx", "projects.tsx", "contact.tsx"];
  const lines = [
    "import React from 'react';",
    "import { Portfolio } from './types';",
    "",
    "export default function App() {",
    "  return <Portfolio />;",
    "}",
  ];
  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", height: "100%" }}>
      {/* Editor chrome */}
      <rect x={20} y={20} width="1160" height="280" fill="#1e1e1e" stroke="var(--ink)" strokeWidth="2.5" />
      {/* Title bar */}
      <rect x={20} y={20} width="1160" height="28" fill="#323233" />
      <text x={600} y={39} textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="11" fill="#9d9d9d">PORTFOLIO.TSX — VISUAL STUDIO CODE</text>
      {/* Sidebar */}
      <rect x={20} y={48} width="180" height="252" fill="#252526" />
      {files.map((f, i) => (
        <g key={i}>
          <rect x={20} y={68 + i * 32} width="180" height="30" fill={i === 0 ? "var(--accent)" : "transparent"} />
          <text x={38} y={88 + i * 32} fontFamily="JetBrains Mono, monospace" fontSize="11" fill={i === 0 ? "white" : "#9d9d9d"}>{f}</text>
        </g>
      ))}
      {/* Code area */}
      <rect x={200} y={48} width="980" height="252" fill="#1e1e1e" />
      {lines.map((line, i) => (
        <g key={i}>
          <text x={220} y={76 + i * 30} fontFamily="JetBrains Mono, monospace" fontSize="12"
            fill={line.startsWith("import") ? "#9cdcfe" : line.includes("return") ? "#dcdcaa" : "#d4d4d4"}>{line}</text>
        </g>
      ))}
      {/* Cursor blink */}
      {blink && <rect x={340} y={224} width="8" height="18" fill="white" opacity="0.8" />}
    </svg>
  );
}

// ─── 22 Beneficiary Mgmt — CNIC verification flow ─────────────────────────────
export function BeneficiaryDiagram() {
  const t = useAnimT();
  const W = 1200, H = 320;
  const flow = [
    { label: "CNIC\nINPUT", x: 130 },
    { label: "FIREBASE\nVERIFY", x: 370 },
    { label: "PROFILE\nCREATE", x: 610 },
    { label: "BENEFIT\nASSIGN", x: 850 },
    { label: "STATUS\nTRACK", x: 1070 },
  ];
  const Y = 160;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", height: "100%" }}>
      {flow.map((s, i) => i < flow.length - 1 && (
        <g key={i}>
          <line x1={s.x + 72} y1={Y} x2={flow[i + 1].x - 72} y2={Y} stroke="var(--ink)" strokeWidth="2.5" />
          {(() => {
            const phase = ((t * 0.4 + i * 0.2) % 1);
            const px = s.x + 72 + (flow[i + 1].x - 72 - s.x - 72) * phase;
            return <rect x={px - 7} y={Y - 7} width="14" height="14" fill="var(--accent)" />;
          })()}
        </g>
      ))}
      {flow.map((s, i) => (
        <g key={i}>
          <rect x={s.x - 72} y={Y - 36} width="144" height="72" fill={i === 1 ? "var(--ink)" : i === flow.length - 1 ? "var(--accent)" : "var(--paper)"}
            stroke="var(--ink)" strokeWidth="2.5" />
          {s.label.split("\n").map((line, li) => (
            <text key={li} x={s.x} y={Y - 8 + li * 20} textAnchor="middle" fontFamily="JetBrains Mono, monospace"
              fontSize="11" letterSpacing="0.1em" fill={i === 1 || i === flow.length - 1 ? "var(--paper)" : "var(--ink)"}>{line}</text>
          ))}
        </g>
      ))}
      <text x={600} y={268} textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="10"
        letterSpacing="0.12em" fill="var(--muted)">Fig. 01 — CNIC-based beneficiary tracking system · React + Firebase</text>
    </svg>
  );
}

// ─── 23 Project Tracker — kanban board ────────────────────────────────────────
export function ProjectTrackerDiagram() {
  const t = useAnimT();
  const W = 1200, H = 320;
  const columns = [
    { label: "TODO", x: 80, cards: ["Feature A", "Bug Fix #12", "Docs update"] },
    { label: "IN PROGRESS", x: 400, cards: ["Feature B", "API refactor"], accent: true },
    { label: "REVIEW", x: 720, cards: ["Feature C", "Unit tests"] },
    { label: "DONE", x: 1000, cards: ["v1.0 release", "Setup CI/CD", "Wireframes"] },
  ];
  const pulse = 0.03 * Math.sin(t * 1.5);
  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", height: "100%" }}>
      {columns.map((col, ci) => (
        <g key={ci}>
          {/* Column header */}
          <rect x={col.x - 80} y={20} width="260" height="38" fill={col.accent ? "var(--ink)" : "var(--paper-2)"} stroke="var(--ink)" strokeWidth="2" />
          <text x={col.x + 50} y={45} textAnchor="middle" fontFamily="JetBrains Mono, monospace"
            fontSize="11" letterSpacing="0.12em" fill={col.accent ? "var(--accent)" : "var(--muted)"}>{col.label}</text>
          {/* Cards */}
          {col.cards.map((card, ki) => {
            const isActive = col.accent && ki === 0;
            const bumpY = isActive ? pulse * 10 : 0;
            return (
              <g key={ki}>
                <rect x={col.x - 80} y={70 + ki * 76 + bumpY} width="260" height="60"
                  fill={isActive ? "var(--paper)" : "var(--paper)"}
                  stroke={isActive ? "var(--accent)" : "var(--ink)"}
                  strokeWidth={isActive ? "3" : "1.5"} />
                <text x={col.x - 68} y={94 + ki * 76 + bumpY} fontFamily="JetBrains Mono, monospace"
                  fontSize="11" fill="var(--ink)">{card}</text>
                <text x={col.x - 68} y={114 + ki * 76 + bumpY} fontFamily="JetBrains Mono, monospace"
                  fontSize="9" fill="var(--muted)">{isActive ? "● IN PROGRESS" : ci === 3 ? "✓ DONE" : "○ QUEUED"}</text>
              </g>
            );
          })}
        </g>
      ))}
    </svg>
  );
}

// ─── Lookup map ────────────────────────────────────────────────────────────────
export const DIAGRAMS: Record<string, React.ComponentType> = {
  "shiptag":                     ShipTagDiagram,
  "ai-lead-qualification":        LeadAutoDiagram,
  "ecommerce-order-orchestration":OrderOrchDiagram,
  "competitor-price-monitor":     PriceMonitorDiagram,
  "luxury-studio":                LuxuryStudioDiagram,
  "luxury-studio-admin":          LuxuryAdminDiagram,
  "ads-management-system":        ADMDiagram,
  "adpulse":                      AdPulseDiagram,
  "caresync":                     CareSyncDiagram,
  "collab-chat":                  CollabChatDiagram,
  "cryptopulse":                  CryptoPulseDiagram,
  "finance-assistant":            FinanceAssistantDiagram,
  "helply":                       HelplyDiagram,
  "hireflow":                     HireflowDiagram,
  "meridian-commerce":            MeridianDiagram,
  "software-agency-management":   AgencyMgmtDiagram,
  "startup-crm":                  StartupCRMDiagram,
  "furniro":                      FurniroDiagram,
  "shrinkly":                     ShrinklyDiagram,
  "ems":                          EMSDiagram,
  "vscode-portfolio":             VSCodePortfolioDiagram,
  "beneficiary-management":       BeneficiaryDiagram,
  "project-tracker":              ProjectTrackerDiagram,
};
