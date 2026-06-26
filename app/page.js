"use client";

import ParticleScene from "@/components/ParticleScene";
import MoonPhaseDisplay, { getMoonPhase } from "@/components/MoonPhaseDisplay";
import { calculateJMCOutput } from "@/utils/jmcEngine";
import { motion } from "framer-motion";
import { ArrowUpRight, Loader } from "lucide-react";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";

const seedText =
  "我站在一栋没有楼梯的白色建筑里，电梯一直向下。镜子里的我穿着黑色西装，手里握着一块发热的石头。";

function strictAiToUiResult(payload, localBase, source = "local_fallback") {
  if (!payload?.personality_id || !payload?.matrix_scores || !Array.isArray(payload?.analysis_text)) {
    return {
      ...localBase,
      ai_meta: { source, strict_json: false }
    };
  }

  const radar = Array.isArray(payload.radar_data) ? payload.radar_data : [];

  return {
    ...localBase,
    matrix_scores: {
      ...localBase.matrix_scores,
      jung_shadow: payload.matrix_scores.jung_shadow ?? localBase.matrix_scores.jung_shadow,
      maslow_deficit: payload.matrix_scores.maslow_deprivation ?? localBase.matrix_scores.maslow_deficit,
      dark_tetrad_score: payload.matrix_scores.dark_tetrad ?? localBase.matrix_scores.dark_tetrad_score
    },
    profile: {
      ...localBase.profile,
      template_id: payload.personality_id,
      title: payload.title || localBase.profile.title,
      dark_index: payload.matrix_scores.dark_tetrad ?? localBase.profile.dark_index,
      radar: {
        shadow: radar[0] ?? localBase.profile.radar?.shadow,
        hunger: radar[1] ?? localBase.profile.radar?.hunger,
        cruelty: radar[2] ?? localBase.profile.radar?.cruelty,
        control: radar[3] ?? localBase.profile.radar?.control,
        continuity: radar[4] ?? localBase.profile.radar?.continuity
      },
      analysis_sentences: payload.analysis_text,
      analysis_text: payload.analysis_text.join(""),
      crystal_prescription: payload.crystal_prescription || localBase.profile.crystal_prescription
    },
    ai_meta: {
      source,
      strict_json: true,
      particle_boost: source !== "local_fallback" ? 0.24 : 0.08
    }
  };
}

export default function Home() {
  const router = useRouter();
  const moonData = useMemo(() => getMoonPhase(), []);
  const [dreamText, setDreamText] = useState(seedText);
  const [isDecoding, setIsDecoding] = useState(false);
  const [notice, setNotice] = useState("DREAM BORDER 已待命。输入梦境，启动潜意识解构。");
  const particleIntensity = isDecoding ? 1.18 : 0.58;

  async function initiateDecoding() {
    const text = dreamText.trim() || seedText;
    setIsDecoding(true);
    setNotice("正在调用真 AI 解梦路由；粒子场收束，阴影材料进入矩阵。");

    try {
      const response = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ dreamText: text, moonPhase: moonData.phase, preferRemote: true })
      });

      if (!response.ok) throw new Error("analyze route unavailable");

      const payload = await response.json();
      const source = response.headers.get("x-jmc-source") || "local_fallback";
      const result = strictAiToUiResult(payload, calculateJMCOutput(text, moonData.phase), source);

      window.localStorage.setItem("oneironaut:lastDream", JSON.stringify({ dreamText: text, moonData, result }));
      setNotice(source !== "local_fallback" ? "真 AI 已完成精神切片。正在进入 12 人格卡片。" : "远端不可用，本地 JMC 已完成无缝接管。");
    } catch {
      const result = calculateJMCOutput(text, moonData.phase);
      window.localStorage.setItem("oneironaut:lastDream", JSON.stringify({ dreamText: text, moonData, result }));
      setNotice("接口暂时不可达，本地 JMC 已完成解构。");
    } finally {
      setIsDecoding(false);
      router.push("/analysis");
    }
  }

  return (
    <main className="font-mono relative min-h-screen overflow-hidden bg-[#070708] text-white">
      <div className="grid-field pointer-events-none absolute inset-0 opacity-60" />
      <ParticleScene intensity={particleIntensity} bias={isDecoding ? 0.96 : 0.72} />
      {isDecoding && (
        <motion.div
          className="pointer-events-none absolute left-1/2 top-1/2 z-10 h-64 w-64 -translate-x-1/2 -translate-y-1/2 border border-white/20"
          animate={{ scale: [1.25, 0.35, 1.25], opacity: [0.08, 0.42, 0.08], rotate: 360 }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        />
      )}

      <section className="relative z-20 grid min-h-screen items-center gap-10 border-b border-white/10 px-5 pt-20 md:px-8 lg:grid-cols-[minmax(0,1fr)_380px] xl:grid-cols-[minmax(0,1fr)_430px]">
        <div className="w-full max-w-4xl">
          <div className="mb-7 text-[10px] uppercase tracking-[0.45em] text-white/40">01. DREAM BORDER / 梦境边境</div>
          <div className="space-y-1">
            <h1 className="text-5xl font-normal leading-none tracking-widest text-white md:text-6xl">把梦交出来。</h1>
            <p className="text-5xl font-normal leading-none tracking-widest text-white md:text-6xl">让阴影替你签名。</p>
          </div>

          <div className="mt-10 max-w-3xl">
            <textarea
              value={dreamText}
              onChange={(event) => setDreamText(event.target.value)}
              className="h-56 w-full resize-none border border-white/10 bg-black/35 p-5 text-sm leading-7 tracking-widest text-white/78 outline-none backdrop-blur-md transition placeholder:text-white/25 focus:border-white/35"
              placeholder="记录一个无法对别人说清楚的梦。"
            />
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={initiateDecoding}
                disabled={isDecoding}
                className="group inline-flex min-h-12 items-center justify-center gap-3 border border-white/15 px-5 py-3 text-[10px] uppercase tracking-widest text-white transition hover:border-white/45 hover:bg-white hover:text-black disabled:cursor-wait disabled:opacity-55"
              >
                {isDecoding ? "DECODING" : "[ INITIATE DECODING / 开启潜意识解构 ]"}
                {isDecoding ? <Loader size={14} className="animate-spin" /> : <ArrowUpRight size={14} />}
              </button>
            </div>
            <div className="mt-4 border border-white/5 bg-black/20 px-4 py-3 text-[10px] uppercase leading-5 tracking-widest text-white/42">
              {notice}
            </div>
          </div>
        </div>

        <aside className="w-full pb-10 lg:pb-0">
          <MoonPhaseDisplay moonData={moonData} />
        </aside>
      </section>
    </main>
  );
}
