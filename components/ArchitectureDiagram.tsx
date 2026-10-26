import { ArrowDown } from "lucide-react";

const nodes = [
  { name: "Client", tech: "Next.js" },
  { name: "API", tech: "FastAPI" },
  { name: "Database", tech: "PostgreSQL" },
  { name: "Background Worker", tech: "Queue + Retry" },
];

const T = { fontFamily: "var(--font-sans), system-ui, sans-serif" } as const;

function Node({ x, y, w, h, name, tech }: { x: number; y: number; w: number; h: number; name: string; tech: string }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="8" fill="rgb(var(--card))" stroke="rgb(var(--mute))" strokeOpacity="0.45" />
      <text x={x + w / 2} y={y + h / 2 - 2} textAnchor="middle" fontSize="11" fontWeight="500" fill="rgb(var(--ink))" style={T}>
        {name}
      </text>
      <text x={x + w / 2} y={y + h / 2 + 12} textAnchor="middle" fontSize="10" fill="rgb(var(--mute))" style={T}>
        ({tech})
      </text>
    </g>
  );
}

/** Wide screens: flow drawn as SVG. Narrow screens: vertical list. */
export function ArchitectureDiagram() {
  return (
    <figure aria-label="Architecture: client calls API, API reads and writes the database and hands work to a background worker with queue and retry">
      {/* ≥ sm */}
      <svg viewBox="0 0 370 236" className="hidden h-auto w-full max-w-[420px] sm:block" role="img" aria-hidden>
        <defs>
          <marker id="arrow" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M1 1 L7 4 L1 7" fill="none" stroke="rgb(var(--mute))" strokeWidth="1" />
          </marker>
        </defs>
        <g stroke="rgb(var(--mute))" strokeOpacity="0.6" fill="none" strokeWidth="1">
          <path d="M100 36 H134" markerEnd="url(#arrow)" />
          <path d="M236 36 H270" markerEnd="url(#arrow)" />
          <path d="M185 64 V168" markerStart="url(#arrow)" markerEnd="url(#arrow)" strokeDasharray="3 3" />
          <path d="M50 64 V204 H116" strokeDasharray="3 3" markerEnd="url(#arrow)" />
          <path d="M320 64 V204 H254" strokeDasharray="3 3" markerEnd="url(#arrow)" />
        </g>
        <Node x={0} y={8} w={100} h={56} name="Client" tech="Next.js" />
        <Node x={135} y={8} w={100} h={56} name="API" tech="FastAPI" />
        <Node x={270} y={8} w={100} h={56} name="Database" tech="PostgreSQL" />
        <Node x={116} y={172} w={138} h={64} name="Background Worker" tech="Queue + Retry" />
      </svg>

      {/* < sm */}
      <ol className="flex flex-col items-stretch gap-1 sm:hidden">
        {nodes.map((n, i) => (
          <li key={n.name} className="flex flex-col items-center gap-1">
            <div className="w-full rounded-lg border border-mute/40 bg-card px-4 py-3 text-center">
              <p className="text-[13px] font-medium">{n.name}</p>
              <p className="text-[12px] text-mute">({n.tech})</p>
            </div>
            {i < nodes.length - 1 && <ArrowDown aria-hidden className="h-4 w-4 text-mute" />}
          </li>
        ))}
      </ol>
    </figure>
  );
}
