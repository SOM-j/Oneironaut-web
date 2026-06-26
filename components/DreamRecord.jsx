"use client";

import { calculateJMCOutput } from "@/utils/jmcEngine";
import { motion } from "framer-motion";
import { ArrowUpRight, Loader, Orbit } from "lucide-react";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import MoonPhaseDisplay, { getMoonPhase } from "./MoonPhaseDisplay";

const seedText =
  "我站在一栋没有楼梯的白色建筑里，电梯一直向下。镜子里的我穿着黑色西装，手里握着一块发热的石头。";

function strictAiToUiResult(payload, localBase, source = "local_fallback") {
  if (!payload?.personality_id || !payload?.matrix_scores || !Array.isArray(payload?.analysis_text)) {
    return {
      ...localBase,
      ai_meta: {
        source,
        strict_json: false
      }
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
      title_en: localBase.profile.title_en,
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
      particle_boost: source !== "local_fallback" ? 0.22 : 0
    }
  };
}

export default function DreamRecord({ embedded = false }) {
  const router = useRouter();
  const moonData = useMemo(() => getMoonPhase(), []);
  const [dreamText, setDreamText] = useState(seedText);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [notice, setNotice] = useState("Auto 模式优先请求真 AI；无密钥时自动降级本地 JMC。");

  async function submitDream() {
    const text = dreamText.trim() || seedText;
    setIsAnalyzing(true);
    setNotice("正在穿过 /api/analyze；如果远端不可用，会使用本地 12 人格矩阵。");

    try {
      const response = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ dreamText: text, moonPhase: moonData.phase, preferRemote: true })
      });

      if (!response.ok) throw new Error("route unavailable");
      const payload = await response.json();
      const source = response.headers.get("x-jmc-source") || "local_fallback";
      const fallbackReason = response.headers.get("x-jmc-fallback-reason");
      const result = strictAiToUiResult(payload, calculateJMCOutput(text, moonData.phase), source);
      window.localStorage.setItem("oneironaut:lastDream", JSON.stringify({ dreamText: text, moonData, result }));
      setNotice(source !== "local_fallback" ? "真 AI 解析完成，即将进入矩阵。" : `已降级本地 JMC，结果仍可用。${fallbackReason || ""}`);
    } catch {
      const result = calculateJMCOutput(text, moonData.phase);
      window.localStorage.setItem("oneironaut:lastDream", JSON.stringify({ dreamText: text, moonData, result }));
      setNotice("接口不可达，已使用浏览器本地 JMC 计算。");
    } finally {
      setIsAnalyzing(false);
      router.push("/analysis");
    }
  }

  return (
    <section className={`relative z-10 grid min-h-screen grid-cols-1 border-b border-white/10 lg:grid-cols-[1fr_0.55fr] ${embedded ? "pt-0" : "pt-16"}`}>
      <div className="flex min-h-[680px] flex-col justify-between border-b border-white/10 p-5 md:p-8 lg:border-b-0 lg:border-r">
        <div>
          <div className="mb-7 flex items-center gap-3 text-[10px] uppercase tracking-widest text-white/45">
            <Orbit size={15} />
            Dream Border / Lunar Input Console
          </div>
          <motion.h1
            className="max-w-4xl text-5xl font-normal leading-tight tracking-widest text-white md:text-6xl"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            把梦交出来。
          </motion.h1>
          <p className="mt-5 max-w-4xl text-5xl font-normal leading-tight tracking-widest text-white md:text-6xl">
            让阴影替你签名。
          </p>
          <p className="mt-7 max-w-xl text-sm leading-7 tracking-widest text-white/42">
            梦境文本会叠加当前月相，进入 JMC 本地引擎与远端 AI 路由。
          </p>
        </div>

        <div className="mt-12 max-w-2xl">
          <textarea
            value={dreamText}
            onChange={(event) => setDreamText(event.target.value)}
            className="h-56 w-full resize-none border border-white/10 bg-black/30 p-5 text-sm leading-7 text-white/78 outline-none backdrop-blur-md transition placeholder:text-white/25 focus:border-white/30"
            placeholder="记录一个无法对别人说清楚的梦。"
          />
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <button
              onClick={submitDream}
              disabled={isAnalyzing}
              className="group inline-flex h-12 items-center justify-center gap-3 border border-white/15 px-5 text-[10px] uppercase tracking-widest text-white transition hover:border-white/45 hover:bg-white hover:text-black disabled:cursor-wait disabled:opacity-50"
            >
              {isAnalyzing ? "Analyzing" : "Submit Analysis"}
              {isAnalyzing ? <Loader size={14} className="animate-spin" /> : <ArrowUpRight size={14} />}
            </button>
          </div>
          <div className="mt-4 border border-white/5 bg-black/20 px-4 py-3 text-[10px] uppercase leading-5 tracking-widest text-white/42">
            {notice}
          </div>
        </div>
      </div>

      <aside className="flex items-center p-5 md:p-8">
        <div className="w-full space-y-5">
          <MoonPhaseDisplay moonData={moonData} compact />
          <div className="border border-white/10 bg-white/[0.025] p-6 text-xs leading-7 tracking-widest text-white/52">
            当前月相将作为潜意识环境系数写入分析。Full Moon 放大暗黑冲动，New Moon 强化阴影孕育，Eclipse 放大安全匮乏。
          </div>
        </div>
      </aside>
    </section>
  );
}
