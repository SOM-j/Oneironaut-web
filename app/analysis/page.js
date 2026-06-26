"use client";

import ParticleScene from "@/components/ParticleScene";
import { getLunarCoefficient, getMoonPhase, LunarPhaseGlyph } from "@/components/MoonPhaseDisplay";
import RadarChart from "@/components/RadarChart";
import { ARCHETYPE_GROUPS } from "@/utils/archetypeCards";
import { calculateJMCOutput } from "@/utils/jmcEngine";
import { motion } from "framer-motion";
import { ArrowUpRight, CircleDotDashed, Sparkles } from "lucide-react";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

const fallbackDream = "我被黑影追杀，电梯一直向下，满月很大。";
const REPORT_TITLES = [
  {
    en: "Dream Symbol Autopsy",
    zh: "梦境意象剖检"
  },
  {
    en: "Persona Mask Rupture",
    zh: "白昼人格破裂"
  },
  {
    en: "Reality Hunger Trace",
    zh: "现实匮乏追踪"
  },
  {
    en: "Dreamcore Verdict",
    zh: "梦核判词"
  }
];

function normalizeStoredResult(result, fallback) {
  if (result?.profile?.radar && result?.matrix_scores?.dark_tetrad_score !== undefined) {
    return result;
  }

  if (result?.personality_id && result?.matrix_scores && Array.isArray(result?.analysis_text)) {
    const radar = Array.isArray(result.radar_data) ? result.radar_data : [];

    return {
      ...fallback,
      matrix_scores: {
        ...fallback.matrix_scores,
        jung_shadow: result.matrix_scores.jung_shadow ?? fallback.matrix_scores.jung_shadow,
        maslow_deficit: result.matrix_scores.maslow_deprivation ?? fallback.matrix_scores.maslow_deficit,
        dark_tetrad_score: result.matrix_scores.dark_tetrad ?? fallback.matrix_scores.dark_tetrad_score
      },
      profile: {
        ...fallback.profile,
        template_id: result.personality_id,
        title: result.title || fallback.profile.title,
        dark_index: result.matrix_scores.dark_tetrad ?? fallback.profile.dark_index,
        radar: {
          shadow: radar[0] ?? fallback.profile.radar?.shadow,
          hunger: radar[1] ?? fallback.profile.radar?.hunger,
          cruelty: radar[2] ?? fallback.profile.radar?.cruelty,
          control: radar[3] ?? fallback.profile.radar?.control,
          continuity: radar[4] ?? fallback.profile.radar?.continuity
        },
        analysis_text: result.analysis_text.join(""),
        crystal_prescription: result.crystal_prescription || fallback.profile.crystal_prescription
      },
      ai_meta: {
        source: "strict_json",
        particle_boost: 0.16
      }
    };
  }

  return fallback;
}

function ScoreLine({ label, value }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-[10px] uppercase tracking-widest text-white/45">
        <span>{label}</span>
        <span>{value}</span>
      </div>
      <div className="h-px bg-white/10">
        <motion.div className="h-px bg-white" initial={{ width: 0 }} animate={{ width: `${value}%` }} transition={{ duration: 0.7 }} />
      </div>
    </div>
  );
}

function extractQuotedText(text, fallback = "") {
  return `${text || ""}`.match(/“([^”]+)”/)?.[1] || fallback;
}

function translateDefinition(definition = "") {
  const cleaned = `${definition}`
    .replace(/^荣格层：/, "Jung layer: ")
    .replace(/^马斯洛层：/, "Maslow layer: ")
    .replace(/^连续性假说层：/, "Continuity hypothesis layer: ")
    .replace(/^弗洛伊德层：/, "Freudian layer: ")
    .replace(/^暗黑扩展层：/, "Dark tetrad extension: ")
    .replace(/不是装饰，它把被人格面具压低的材料送回意识边界/g, "is not decoration; it sends material flattened by the persona mask back to the edge of consciousness")
    .replace(/刺中体面、资格与被评价焦虑，你害怕的不是欲望，而是欲望被看见/g, "pierces dignity, qualification, and evaluation anxiety; what you fear is not desire itself, but desire being seen")
    .replace(/把白天未闭合的现实残影带进夜里，制造重复、断片与叙事漏帧/g, "carries unresolved waking residue into the night, producing repetition, fragments, and missing narrative frames")
    .replace(/是置换后的欲望容器，真正危险的情感被转移到更小、更安全的符号上/g, "is a displaced container of desire; the truly dangerous feeling has been moved into a smaller, safer symbol")
    .replace(/暴露关系里的预判、控制与被控制感，温柔也可能携带权力结构/g, "exposes prediction, control, and the sensation of being controlled inside intimacy; tenderness may also carry a power structure")
    .replace(/；/g, "; ")
    .replace(/，/g, ", ")
    .replace(/。/g, ".");

  return cleaned || "the unconscious is compressing waking pressure into symbolic evidence";
}

function createEnglishReport(paragraph, index, result) {
  const title = result.profile.title_en || result.profile.title || "this archetype";
  const cnTitle = result.profile.title || "这张人格卡";
  const symbols = result.detected_images?.slice(0, 4).join(" / ") || extractQuotedText(paragraph, "unnamed symbols");
  const shadow = result.matrix_scores.jung_shadow;
  const maslow = result.matrix_scores.maslow_deficit ?? 50;
  const continuityBreak = 100 - (result.matrix_scores.continuity_index ?? 50);
  const primaryDefinition = translateDefinition(result.matched_entries?.[0]?.psycho_definition);
  const secondaryDefinition = translateDefinition(result.matched_entries?.[1]?.psycho_definition);

  const lines = [
    `Your dream is not speaking about “${symbols}” as surface objects. It is compressing “${primaryDefinition}” into a heated symbolic nail, then driving it into the place where your daylight self pretends nothing happened.`,
    `Jung shadow ${shadow}, Maslow deprivation ${maslow}, and continuity rupture ${continuityBreak} are rising at the same time: ${secondaryDefinition}. The Freudian displacement is precise: the dangerous desire has put on the smaller costume of an object.`,
    `${cnTitle} is not a label; it is the signature left by this dream. ${title} means the night has named the mechanism your waking persona keeps trying to keep elegant, silent, and deniable.`,
    `Dreamcore verdict: this dream is not here to comfort you. It has calmly announced that what you pressed down has learned another route home, and it has left its signature inside the dark.`
  ];

  return lines[index] || `Translation: ${paragraph}`;
}

function ArchetypeCardMatrix() {
  const [flipped, setFlipped] = useState({});

  return (
    <section className="mt-8 border border-white/10 bg-white/[0.025] p-5 md:p-6">
      <div className="mb-6 text-[10px] uppercase tracking-widest text-white/40">Archetype Card Analysis / 阴影原型卡</div>
      <div className="space-y-8">
        {ARCHETYPE_GROUPS.map((group) => (
          <div key={group.id} className="border-t border-white/10 pt-6 first:border-t-0 first:pt-0">
            <div className="text-sm uppercase tracking-widest text-white/78">{group.name}</div>
            <div className="mt-3 text-xs leading-7 tracking-widest text-white/42">{group.motto}</div>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {group.cards.map((card) => {
                const isFlipped = Boolean(flipped[card.id]);

                return (
                  <button
                    key={card.id}
                    type="button"
                    onClick={() => setFlipped((current) => ({ ...current, [card.id]: !current[card.id] }))}
                    className="group h-[22rem] [perspective:1200px]"
                    aria-label={`${card.name} card`}
                  >
                    <div
                      className={`relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] ${
                        isFlipped ? "[transform:rotateY(180deg)]" : ""
                      }`}
                    >
                      <div
                        className={`absolute inset-0 flex flex-col justify-center overflow-hidden border border-white/12 bg-[radial-gradient(circle_at_50%_38%,rgba(255,255,255,0.06),rgba(7,7,8,0.98)_62%)] p-6 text-center [backface-visibility:hidden] ${
                          isFlipped ? "opacity-0" : "opacity-100"
                        }`}
                      >
                        <div className="pointer-events-none absolute inset-4 border border-white/[0.07]" />
                        <div className="pointer-events-none absolute left-[18%] top-[26%] h-1 w-1 rounded-full bg-white/70 shadow-[0_0_18px_rgba(255,255,255,0.4)]" />
                        <div className="pointer-events-none absolute right-[20%] top-[42%] h-1 w-1 rounded-full bg-white/50 shadow-[0_0_18px_rgba(255,255,255,0.25)]" />
                        <div className="relative text-2xl tracking-widest text-white/88">{card.name}</div>
                        <div className="relative mt-8 text-xs leading-7 tracking-widest text-white/52">{card.front_motto}</div>
                        <div className="relative mt-10 text-[9px] uppercase tracking-[0.45em] text-white/25">Tap To Decode</div>
                      </div>
                      <div
                        className={`absolute inset-0 overflow-hidden border border-white/12 bg-[#050506] p-6 text-left shadow-[inset_0_0_90px_rgba(255,255,255,0.025)] [backface-visibility:hidden] [transform:rotateY(180deg)] ${
                          isFlipped ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        <div className="text-lg tracking-widest text-white/86">{card.name}</div>
                        <p className="mt-5 text-xs leading-7 tracking-widest text-white/62">{card.back_analysis}</p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function AnalysisPage() {
  const fallback = useMemo(() => calculateJMCOutput(fallbackDream, "Full Moon"), []);
  const fallbackMoonData = useMemo(() => getMoonPhase(), []);
  const [payload, setPayload] = useState({ dreamText: fallbackDream, moonData: fallbackMoonData, result: fallback });

  useEffect(() => {
    const stored = window.localStorage.getItem("oneironaut:lastDream");
    if (!stored) return;

    try {
      const parsed = JSON.parse(stored);
      if (parsed?.result) {
        setPayload({
          ...parsed,
          result: normalizeStoredResult(parsed.result, fallback)
        });
      }
    } catch {
      setPayload({ dreamText: fallbackDream, moonData: fallbackMoonData, result: fallback });
    }
  }, [fallback, fallbackMoonData]);

  const result = payload.result;
  const moonData = payload.moonData || {
    phase: payload.moonPhase || "Full Moon",
    illumination: payload.moonPhase === "New Moon" ? 0 : payload.moonPhase === "Full Moon" ? 100 : 62
  };
  const lunarCoefficient = getLunarCoefficient(moonData);
  const intensity = Math.min(1.35, (result.matrix_scores.jung_shadow + result.matrix_scores.dark_tetrad_score) / 200 + (result.ai_meta?.particle_boost || 0));
  const reportParagraphs = result.profile.analysis_sentences?.length
    ? result.profile.analysis_sentences
    : `${result.profile.analysis_text || ""}`.split(/(?<=[。！？])/).filter(Boolean).slice(0, 4);
  const darkIndex = result.profile.dark_index ?? result.matrix_scores.dark_tetrad_score ?? 50;
  const lightIndex = Math.max(0, Math.min(100, Math.round((result.matrix_scores.continuity_index ?? 50) - darkIndex * 0.22 + 28)));

  return (
    <main className="font-mono relative min-h-screen overflow-hidden bg-[#070708] text-white">
      <div className="grid-field pointer-events-none absolute inset-0 opacity-50" />
      <ParticleScene intensity={intensity} bias={result.matrix_scores.jung_shadow / 100} />
      <section className="relative z-10 grid min-h-screen grid-cols-1 border-b border-white/10 pt-16 lg:grid-cols-[0.85fr_1.15fr]">
        <aside className="border-b border-white/10 p-5 md:p-8 lg:border-b-0 lg:border-r">
          <div className="mb-5 text-[10px] uppercase tracking-widest text-white/40">12 Personality Cards / JMC Radar / 12人格卡片 / 矩阵雷达</div>
          <RadarChart radar={result.profile.radar} />
          <div className="mt-6 space-y-5">
            <ScoreLine label="Jung Shadow / 荣格阴影" value={result.matrix_scores.jung_shadow} />
            <ScoreLine label="Dark Tetrad / 暗黑四联体" value={result.matrix_scores.dark_tetrad_score} />
            <ScoreLine label="Continuity / 连续性指数" value={result.matrix_scores.continuity_index ?? 50} />
            <ScoreLine label="Dark Index / 暗黑指数" value={darkIndex} />
            <ScoreLine label="Light Index / 光明指数" value={lightIndex} />
          </div>
          <div className="mt-8 border border-white/10 p-4 text-[10px] uppercase leading-5 tracking-widest text-white/45">
            {payload.dreamText}
          </div>
        </aside>

        <section className="p-5 md:p-8">
          <motion.div
            className="relative w-full border border-white/10 bg-white/[0.035] p-6 backdrop-blur-md md:p-8"
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="mb-2 flex items-center gap-3 text-[10px] uppercase tracking-widest text-white/40">
              <span>12 Personality Cards / 真 AI 阴影报告</span>
              <span className="border border-white/10 px-2 py-1 text-[8px]">{result.profile.archetype_group || "JMC"}</span>
            </div>
            <div className="mb-8 flex items-start justify-between">
              <div>
                <h1 className="max-w-3xl text-3xl font-normal leading-tight tracking-widest md:text-5xl">{result.profile.title}</h1>
                <div className="mt-3 text-xs uppercase tracking-widest text-white/45">{result.profile.title_en}</div>
              </div>
              <CircleDotDashed className="text-white/50" />
            </div>
            <div className="mb-10 grid grid-cols-2 gap-px border border-white/10 bg-white/10 md:grid-cols-4">
              {result.detected_images.slice(0, 8).map((image) => (
                <div key={image} className="bg-[#070708]/95 px-3 py-4 text-center text-[10px] tracking-widest text-white/55">
                  {image}
                </div>
              ))}
            </div>
            <div className="grid gap-px border border-white/10 bg-white/10">
              {reportParagraphs.map((paragraph, index) => (
                <section key={`${paragraph}-${index}`} className="bg-[#070708]/95 p-5 md:p-6">
                  <div className="mb-4 text-[10px] uppercase tracking-widest text-white/30">
                    0{index + 1}. {REPORT_TITLES[index]?.en || "Psychic Reading"} / {REPORT_TITLES[index]?.zh || "精神切片"}
                  </div>
                  <div className="space-y-4 border border-white/10 bg-black/20 p-5">
                    <div className="text-[9px] uppercase tracking-widest text-white/28">CN + EN / 中英同框</div>
                    <p className="text-sm leading-8 tracking-widest text-white/68">{paragraph}</p>
                    <div className="h-px bg-white/10" />
                    <p className="text-xs leading-7 tracking-widest text-white/46">{createEnglishReport(paragraph, index, result)}</p>
                  </div>
                </section>
              ))}
            </div>
            <ArchetypeCardMatrix />
            <div className="mt-8 grid gap-px border border-white/10 bg-white/10 md:grid-cols-[0.45fr_0.55fr]">
              <div className="flex items-center justify-center bg-[#070708]/95 p-6">
                <LunarPhaseGlyph moonData={moonData} />
              </div>
              <div className="bg-[#070708]/95 p-6 md:p-8">
                <div className="mb-5 text-[10px] uppercase tracking-widest text-white/35">Lunar Tide Coefficient / 月相潮汐系数</div>
                <div className="text-3xl uppercase tracking-widest text-white md:text-5xl">{moonData.phase}</div>
                <div className="mt-6 grid grid-cols-2 gap-px border border-white/10 bg-white/10">
                  <div className="bg-[#070708] p-4">
                    <div className="text-[8px] uppercase tracking-widest text-white/30">Illumination</div>
                    <div className="mt-3 text-xl tracking-widest text-white/70">{moonData.illumination}%</div>
                  </div>
                  <div className="bg-[#070708] p-4">
                    <div className="text-[8px] uppercase tracking-widest text-white/30">Tidal Pull</div>
                    <div className="mt-3 text-xl tracking-widest text-white/70">{lunarCoefficient}</div>
                  </div>
                </div>
                <p className="mt-6 text-xs leading-7 tracking-widest text-white/48">
                  该月相系数已写入 JMC 矩阵：满月放大暗黑冲动，新月强化阴影孕育，月食加重安全匮乏。这里不是装饰图，是你这次梦境的环境噪声签名。
                </p>
              </div>
            </div>
            <div className="mt-8 border-t border-white/10 pt-5">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <div className="text-[9px] uppercase tracking-widest text-white/35">Crystal Prescription</div>
                  <div className="mt-2 text-sm tracking-widest text-white/75">{result.profile.crystal_prescription}</div>
                </div>
                <Sparkles size={18} className="text-white/50" />
              </div>
              <Link
                href="/store"
                className="group inline-flex min-h-12 w-full items-center justify-center gap-3 border border-white/15 px-4 text-[10px] uppercase tracking-widest transition hover:border-white/45 hover:bg-white hover:text-black"
              >
                Unlock prescribed crystal
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </motion.div>
        </section>
      </section>
    </main>
  );
}
