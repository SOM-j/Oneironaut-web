"use client";

const AXES = [
  { key: "shadow", en: "SHADOW", zh: "荣格阴影", className: "left-1/2 top-0 -translate-x-1/2 text-center" },
  { key: "hunger", en: "HUNGER", zh: "匮乏压力", className: "right-0 top-[34%] text-right" },
  { key: "cruelty", en: "CRUELTY", zh: "攻击冷感", className: "bottom-[8%] right-[6%] text-right" },
  { key: "control", en: "CONTROL", zh: "控制补偿", className: "bottom-[8%] left-[6%] text-left" },
  { key: "continuity", en: "CONTINUITY", zh: "连续性", className: "left-0 top-[34%] text-left" }
];

function pointFor(index, value, radius = 86) {
  const angle = -Math.PI / 2 + (Math.PI * 2 * index) / AXES.length;
  const scaled = (value / 100) * radius;
  return [100 + Math.cos(angle) * scaled, 100 + Math.sin(angle) * scaled];
}

export default function RadarChart({ radar = {} }) {
  const points = AXES.map((axis, index) => pointFor(index, radar[axis.key] ?? 40).join(",")).join(" ");

  return (
    <div className="mx-auto max-w-[320px] border border-white/10 bg-black/30 p-4 md:max-w-[360px]">
      <div className="relative aspect-square w-full">
        {AXES.map((axis) => (
          <div key={axis.key} className={`absolute z-10 w-24 text-[9px] uppercase leading-4 tracking-widest text-white/45 ${axis.className}`}>
            <div>{axis.en}</div>
            <div className="text-white/35">{axis.zh}</div>
          </div>
        ))}
        <svg viewBox="0 0 200 200" className="absolute left-1/2 top-1/2 h-[62%] w-[62%] -translate-x-1/2 -translate-y-1/2">
        {[28, 56, 84].map((radius) => (
          <polygon
            key={radius}
            points={AXES.map((_, index) => pointFor(index, (radius / 86) * 100).join(",")).join(" ")}
            fill="none"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="1"
          />
        ))}
        {AXES.map((axis, index) => {
          const [x, y] = pointFor(index, 100);

          return (
            <g key={axis.key}>
              <line x1="100" y1="100" x2={x} y2={y} stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
            </g>
          );
        })}
        <polygon points={points} fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.85)" strokeWidth="1" />
      </svg>
      </div>
    </div>
  );
}
