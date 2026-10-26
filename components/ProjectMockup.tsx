import type { MockupVariant } from "@/lib/data";

/**
 * Representative interface mockups (SVG) — no real data, figures or
 * screenshots. Replace with real screenshots in /public/images/ when ready.
 */

const F = { fontFamily: "var(--font-sans), system-ui, sans-serif" } as const;
const GREEN = "#4CB782";
const AMBER = "#E8A93C";
const RED = "#E5645A";
const BLUE = "#5B8FF9";

function Chrome({ dark = false }: { dark?: boolean }) {
  return (
    <>
      <rect width="620" height="400" fill="#FBFBFC" />
      <rect width="620" height="26" fill="#F3F4F6" />
      {[0, 1, 2].map((i) => (
        <circle key={i} cx={14 + i * 11} cy="13" r="3" fill={dark ? "#C9CDD4" : "#D5D8DE"} />
      ))}
      <rect x="230" y="7" width="160" height="12" rx="6" fill="#E7E9ED" />
    </>
  );
}

function Pill({ x, y, w = 40, color }: { x: number; y: number; w?: number; color: string }) {
  return (
    <>
      <rect x={x} y={y} width={w} height="12" rx="6" fill={color} opacity="0.16" />
      <circle cx={x + 8} cy={y + 6} r="2.5" fill={color} />
      <rect x={x + 14} y={y + 4} width={w - 22} height="4" rx="2" fill={color} opacity="0.55" />
    </>
  );
}

function Websites() {
  const bars = [30, 44, 38, 62, 50, 74, 58, 82, 66, 90, 72, 96];
  return (
    <>
      <Chrome />
      <rect y="26" width="112" height="374" fill="#F6F7F9" />
      <rect x="14" y="40" width="60" height="9" rx="3" fill="#1F2430" />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <g key={i}>
          <rect x="14" y={72 + i * 26} width="84" height="18" rx="5" fill={i === 1 ? "#E6EEFE" : "transparent"} />
          <rect x="22" y={78 + i * 26} width="8" height="6" rx="2" fill={i === 1 ? BLUE : "#C5CAD3"} />
          <rect x="38" y={79 + i * 26} width={46 - (i % 3) * 8} height="4" rx="2" fill={i === 1 ? BLUE : "#C5CAD3"} />
        </g>
      ))}
      <text x="132" y="54" fontSize="13" fontWeight="600" fill="#1F2430" style={F}>Campaigns</text>
      <rect x="132" y="62" width="120" height="4" rx="2" fill="#D5D8DE" />
      <rect x="540" y="42" width="66" height="20" rx="10" fill="#20211F" />

      {[
        ["Delivered", GREEN],
        ["Queued", BLUE],
        ["Retrying", AMBER],
        ["Failed", RED],
      ].map(([label, c], i) => (
        <g key={label}>
          <rect x={132 + i * 119} y="80" width="109" height="54" rx="8" fill="#fff" stroke="#E6E8EC" />
          <circle cx={146 + i * 119} cy="96" r="3" fill={c} />
          <text x={154 + i * 119} y="99" fontSize="8" fill="#8A909C" style={F}>{label}</text>
          <rect x={144 + i * 119} y="110" width="44" height="9" rx="3" fill="#C9CED6" />
          <rect x={144 + i * 119} y="124" width="64" height="3" rx="1.5" fill="#E3E5EA" />
        </g>
      ))}

      <rect x="132" y="148" width="270" height="124" rx="8" fill="#fff" stroke="#E6E8EC" />
      <text x="146" y="166" fontSize="9" fontWeight="500" fill="#4A5160" style={F}>Delivery activity</text>
      {bars.map((h, i) => (
        <rect key={i} x={150 + i * 20} y={256 - h} width="11" height={h} rx="2" fill={i % 3 === 2 ? BLUE : "#CBD9FB"} />
      ))}
      <path d="M150 232 L170 226 L190 230 L210 214 L230 220 L250 202 L270 208 L290 192 L310 198 L330 182 L350 188 L370 172" fill="none" stroke={BLUE} strokeWidth="1.5" />

      <rect x="414" y="148" width="192" height="124" rx="8" fill="#fff" stroke="#E6E8EC" />
      <text x="428" y="166" fontSize="9" fontWeight="500" fill="#4A5160" style={F}>Recent imports</text>
      {[GREEN, GREEN, AMBER, GREEN, RED].map((c, i) => (
        <g key={i}>
          <circle cx="434" cy={184 + i * 17} r="3" fill={c} />
          <rect x="445" y={181 + i * 17} width={80 - (i % 3) * 14} height="5" rx="2" fill="#D5D8DE" />
          <rect x="560" y={181 + i * 17} width="32" height="5" rx="2" fill="#E3E5EA" />
        </g>
      ))}

      <rect x="132" y="286" width="474" height="100" rx="8" fill="#fff" stroke="#E6E8EC" />
      <rect x="132" y="286" width="474" height="20" rx="8" fill="#F6F7F9" />
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x="146" y={320 + i * 22} width="90" height="5" rx="2" fill="#C9CED6" />
          <rect x="290" y={320 + i * 22} width="110" height="5" rx="2" fill="#E0E3E8" />
          <rect x="450" y={320 + i * 22} width="40" height="5" rx="2" fill="#E0E3E8" />
          <Pill x={540} y={316 + i * 22} color={[GREEN, BLUE, AMBER][i]} />
        </g>
      ))}
    </>
  );
}

function Systems() {
  return (
    <>
      <Chrome dark />
      <rect y="26" width="96" height="374" fill="#1B1E25" />
      <rect x="14" y="42" width="52" height="8" rx="3" fill="#F2F3F5" />
      {[0, 1, 2, 3, 4].map((i) => (
        <g key={i}>
          <rect x="10" y={72 + i * 26} width="76" height="18" rx="5" fill={i === 1 ? "#2E333D" : "transparent"} />
          <rect x="18" y={78 + i * 26} width="8" height="6" rx="2" fill={i === 1 ? BLUE : "#5A6170"} />
          <rect x="34" y={79 + i * 26} width={38 - (i % 2) * 8} height="4" rx="2" fill={i === 1 ? "#E6E8EC" : "#5A6170"} />
        </g>
      ))}
      <text x="116" y="54" fontSize="13" fontWeight="600" fill="#1F2430" style={F}>Payments</text>
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x={116 + i * 46} y="64" width="40" height="14" rx="7" fill={i === 0 ? "#20211F" : "#EEF0F3"} />
      ))}
      <rect x="520" y="62" width="86" height="18" rx="9" fill={BLUE} />

      <rect x="116" y="92" width="330" height="190" rx="8" fill="#fff" stroke="#E6E8EC" />
      <rect x="116" y="92" width="330" height="22" rx="8" fill="#F6F7F9" />
      {[0, 1, 2, 3, 4, 5].map((i) => {
        const c = [GREEN, GREEN, AMBER, RED, GREEN, AMBER][i];
        return (
          <g key={i}>
            <circle cx="132" cy={134 + i * 24} r="7" fill="#EEF0F3" />
            <rect x="146" y={130 + i * 24} width={78 - (i % 3) * 10} height="5" rx="2" fill="#C9CED6" />
            <rect x="146" y={139 + i * 24} width="44" height="3" rx="1.5" fill="#E3E5EA" />
            <rect x="300" y={132 + i * 24} width="40" height="5" rx="2" fill="#D5D8DE" />
            <Pill x={372} y={128 + i * 24} w={58} color={c} />
          </g>
        );
      })}

      <rect x="458" y="92" width="148" height="190" rx="8" fill="#fff" stroke="#E6E8EC" />
      <text x="472" y="110" fontSize="9" fontWeight="500" fill="#4A5160" style={F}>Payment states</text>
      {[GREEN, AMBER, RED].map((c, i) => (
        <g key={i}>
          <circle cx="478" cy={134 + i * 28} r="4" fill={c} />
          <rect x="490" y={130 + i * 28} width="54" height="5" rx="2" fill="#C9CED6" />
          <rect x="490" y={140 + i * 28} width="86" height="3" rx="1.5" fill="#E3E5EA" />
        </g>
      ))}
      <path d="M472 250 L494 242 L516 246 L538 232 L560 238 L582 224" fill="none" stroke={BLUE} strokeWidth="1.5" />

      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x={116 + i * 164} y="296" width="154" height="90" rx="8" fill="#fff" stroke="#E6E8EC" />
          <circle cx={132 + i * 164} cy="314" r="3.5" fill={[GREEN, AMBER, RED][i]} />
          <rect x={142 + i * 164} y="311" width="48" height="5" rx="2" fill="#C9CED6" />
          <rect x={130 + i * 164} y="332" width="70" height="10" rx="3" fill="#D5D8DE" />
          <rect x={130 + i * 164} y="352" width="120" height="3" rx="1.5" fill="#E3E5EA" />
          <rect x={130 + i * 164} y="362" width="90" height="3" rx="1.5" fill="#E3E5EA" />
        </g>
      ))}
    </>
  );
}

function OpenSource() {
  const rows = [GREEN, AMBER, BLUE, GREEN, AMBER];
  return (
    <>
      <Chrome />
      <rect y="26" width="112" height="374" fill="#F6F7F9" />
      <rect x="14" y="40" width="56" height="9" rx="3" fill="#1F2430" />
      {[0, 1, 2, 3, 4].map((i) => (
        <g key={i}>
          <rect x="14" y={72 + i * 26} width="84" height="18" rx="5" fill={i === 2 ? "#E6EEFE" : "transparent"} />
          <rect x="22" y={78 + i * 26} width="8" height="6" rx="2" fill={i === 2 ? BLUE : "#C5CAD3"} />
          <rect x="38" y={79 + i * 26} width={44 - (i % 3) * 7} height="4" rx="2" fill={i === 2 ? BLUE : "#C5CAD3"} />
        </g>
      ))}
      <text x="132" y="54" fontSize="13" fontWeight="600" fill="#1F2430" style={F}>Reports</text>
      <rect x="132" y="62" width="150" height="4" rx="2" fill="#D5D8DE" />

      <rect x="132" y="82" width="300" height="196" rx="8" fill="#fff" stroke="#E6E8EC" />
      <text x="146" y="100" fontSize="9" fontWeight="500" fill="#4A5160" style={F}>Assessment results</text>
      {rows.map((c, i) => (
        <g key={i}>
          <rect x="146" y={112 + i * 32} width="22" height="22" rx="6" fill={c} opacity="0.9" />
          <rect x="178" y={115 + i * 32} width={96 - (i % 3) * 14} height="5" rx="2" fill="#C9CED6" />
          <rect x="178" y={125 + i * 32} width="64" height="3" rx="1.5" fill="#E3E5EA" />
          <rect x="332" y={121 + i * 32} width="84" height="5" rx="2.5" fill="#EEF0F3" />
          <rect x="332" y={121 + i * 32} width={[64, 44, 54, 72, 38][i]} height="5" rx="2.5" fill={c} opacity="0.75" />
        </g>
      ))}

      <rect x="444" y="82" width="162" height="196" rx="8" fill="#fff" stroke="#E6E8EC" />
      <text x="458" y="100" fontSize="9" fontWeight="500" fill="#4A5160" style={F}>Progress</text>
      <circle cx="525" cy="172" r="44" fill="none" stroke="#E3E8F5" strokeWidth="18" />
      <circle
        cx="525"
        cy="172"
        r="44"
        fill="none"
        stroke={BLUE}
        strokeWidth="18"
        strokeDasharray="170 277"
        transform="rotate(-90 525 172)"
      />
      <rect x="470" y="238" width="110" height="4" rx="2" fill="#D5D8DE" />
      <rect x="486" y="250" width="78" height="3" rx="1.5" fill="#E3E5EA" />

      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x={132 + i * 158} y="292" width="148" height="94" rx="8" fill="#fff" stroke="#E6E8EC" />
          <rect x={146 + i * 158} y="308" width="56" height="5" rx="2" fill="#C9CED6" />
          <rect x={146 + i * 158} y="324" width="80" height="10" rx="3" fill="#D5D8DE" />
          <rect x={146 + i * 158} y="346" width="118" height="4" rx="2" fill="#EEF0F3" />
          <rect x={146 + i * 158} y="346" width={[84, 60, 98][i]} height="4" rx="2" fill={[GREEN, BLUE, AMBER][i]} opacity="0.75" />
          <rect x={146 + i * 158} y="362" width="96" height="3" rx="1.5" fill="#E3E5EA" />
        </g>
      ))}
    </>
  );
}

export function ProjectMockup({ variant, label }: { variant: MockupVariant; label: string }) {
  return (
    <svg
      viewBox="0 0 620 400"
      role="img"
      aria-label={label}
      className="h-full w-full"
      preserveAspectRatio="xMidYMin slice"
    >
      {variant === "websites" && <Websites />}
      {variant === "systems" && <Systems />}
      {variant === "opensource" && <OpenSource />}
    </svg>
  );
}
