"use client";

import { motion } from "framer-motion";
import { RadioTower } from "lucide-react";

export const moonPhases = [
  "New Moon",
  "Waxing Crescent",
  "First Quarter",
  "Waxing Gibbous",
  "Full Moon",
  "Waning Gibbous",
  "Last Quarter",
  "Waning Crescent"
];

const phaseLabels = {
  "New Moon": "新月",
  "Waxing Crescent": "蛾眉月",
  "First Quarter": "上弦月",
  "Waxing Gibbous": "盈凸月",
  "Full Moon": "满月",
  "Waning Gibbous": "亏凸月",
  "Last Quarter": "下弦月",
  "Waning Crescent": "残月",
  Eclipse: "月食"
};

export function getMoonPhase(date = new Date()) {
  const knownNewMoon = new Date("2000-01-06T18:14:00Z").getTime();
  const lunarCycle = 29.530588853;
  const days = (date.getTime() - knownNewMoon) / 86400000;
  const age = ((days % lunarCycle) + lunarCycle) % lunarCycle;
  const index = Math.floor((age / lunarCycle) * 8 + 0.5) % 8;

  return {
    phase: moonPhases[index],
    age,
    illumination: Math.round((1 - Math.cos((2 * Math.PI * age) / lunarCycle)) * 50)
  };
}

export function getLunarCoefficient(moonData = getMoonPhase()) {
  const phaseBoost = {
    "New Moon": 1.2,
    "Waxing Crescent": 0.82,
    "First Quarter": 0.92,
    "Waxing Gibbous": 1.08,
    "Full Moon": 1.3,
    "Waning Gibbous": 1.04,
    "Last Quarter": 0.88,
    "Waning Crescent": 0.78,
    Eclipse: 1.25
  };

  const base = Math.max(18, Number(moonData.illumination) || 44);
  return Math.min(99, Math.round(base * (phaseBoost[moonData.phase] || 1)));
}

export function LunarPhaseGlyph({ moonData = getMoonPhase(), size = "large" }) {
  const illumination = Math.max(0, Math.min(100, Number(moonData.illumination) || 0));
  const phaseIndex = moonPhases.indexOf(moonData.phase);
  const waxing = phaseIndex > 0 && phaseIndex < 5;
  const full = moonData.phase === "Full Moon";
  const newMoon = moonData.phase === "New Moon";
  const maskOffset = full ? 86 : newMoon ? 0 : 86 * (illumination / 100);
  const overlayCx = waxing ? 110 - maskOffset : 110 + maskOffset;
  const dimension = size === "small" ? "h-28 w-28" : "h-40 w-40 md:h-48 md:w-48";

  return (
    <svg viewBox="0 0 220 220" className={`${dimension} lunar-breathe`} aria-hidden="true">
      <defs>
        <radialGradient id="lunar-silver-core" cx="48%" cy="42%" r="55%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.52)" />
          <stop offset="54%" stopColor="rgba(255,255,255,0.13)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.025)" />
        </radialGradient>
        <filter id="lunar-glow">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <mask id="lunar-phase-mask">
          <rect width="220" height="220" fill="black" />
          <circle cx="110" cy="110" r="48" fill="white" />
          {!full && <circle cx={overlayCx} cy="110" r="49" fill="black" />}
          {newMoon && <circle cx="110" cy="110" r="42" fill="rgba(255,255,255,0.18)" />}
        </mask>
      </defs>
      <motion.g animate={{ rotate: 360 }} transition={{ duration: 56, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "110px 110px" }}>
        <circle cx="110" cy="110" r="86" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="0.5" strokeDasharray="2 9" />
        <ellipse cx="110" cy="110" rx="94" ry="32" fill="none" stroke="rgba(255,255,255,0.16)" strokeWidth="0.5" transform="rotate(-18 110 110)" />
        <ellipse cx="110" cy="110" rx="72" ry="24" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" transform="rotate(28 110 110)" />
      </motion.g>
      <circle cx="110" cy="110" r="55" fill="rgba(255,255,255,0.025)" stroke="rgba(255,255,255,0.18)" strokeWidth="0.5" />
      <circle cx="110" cy="110" r="48" fill="url(#lunar-silver-core)" mask="url(#lunar-phase-mask)" filter="url(#lunar-glow)" />
      <circle cx="110" cy="110" r="48" fill="none" stroke="rgba(255,255,255,0.62)" strokeWidth="0.5" />
      <path d="M110 36 L110 184 M36 110 L184 110" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
    </svg>
  );
}

export default function MoonPhaseDisplay({ moonData = getMoonPhase(), compact = false }) {
  const coefficient = getLunarCoefficient(moonData);
  const phaseZh = phaseLabels[moonData.phase] || "未知月相";

  return (
    <div className={`border border-white/10 bg-black/25 backdrop-blur-md ${compact ? "w-full p-5 md:p-6" : "w-full p-5 md:p-6"}`}>
      <div className="mb-4 flex items-center justify-between text-[9px] uppercase tracking-widest text-white/45">
        <span>[ LUNAR TRACKING: ACTIVE / 月相追踪：激活 ]</span>
        <RadioTower size={13} />
      </div>
      <div className={`grid gap-5 ${compact ? "md:grid-cols-[auto_1fr]" : "md:grid-cols-1"} md:items-center`}>
        <div className="flex justify-center">
          <LunarPhaseGlyph moonData={moonData} size={compact ? "small" : "large"} />
        </div>
        <div className={`${compact ? "md:border-l md:border-t-0 md:pl-5 md:pt-0" : ""} border-t border-white/10 pt-4`}>
          <div className="text-xl uppercase tracking-widest text-white">{moonData.phase}</div>
          <div className="mt-2 text-sm tracking-widest text-white/55">{phaseZh}</div>
          <div className="mt-4 grid grid-cols-2 gap-px border border-white/10 bg-white/10">
            <div className="bg-[#070708] p-3">
              <div className="text-[8px] uppercase tracking-widest text-white/30">Illumination / 照明度</div>
              <div className="mt-2 text-sm tracking-widest text-white/70">{moonData.illumination}%</div>
            </div>
            <div className="bg-[#070708] p-3">
              <div className="text-[8px] uppercase tracking-widest text-white/30">Tide Coef / 潮汐系数</div>
              <div className="mt-2 text-sm tracking-widest text-white/70">{coefficient}</div>
            </div>
          </div>
          <div className="mt-4 text-[10px] uppercase leading-5 tracking-widest text-white/35">
            Lunar coefficient injected into JMC shadow scoring. / 月相系数已写入 JMC 阴影评分。
          </div>
        </div>
      </div>
    </div>
  );
}
