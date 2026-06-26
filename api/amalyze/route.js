import { calculateJMCOutput } from "@/utils/jmcEngine";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const PERSONA_CATALOG = [
  ["01", "重建师", "废墟重建师"],
  ["02", "独行客", "边境独行客"],
  ["03", "守望者", "边界守望者"],
  ["04", "织幕者", "梦幕织幕者"],
  ["05", "解构学者", "冷光解构学者"],
  ["06", "引路人", "暗河引路人"],
  ["07", "暴君", "焦虑的完美主义暴君"],
  ["08", "自虐狂", "深夜的灵魂自虐狂"],
  ["09", "观察者", "披着羊皮的冷血观察者"],
  ["10", "造物主", "坠落神坛的造物主"],
  ["11", "捕食者", "穿丝绒手套的捕食者"],
  ["12", "囚徒", "无窗房间里的囚徒"]
];

const TEMPLATE_TO_PERSONA_ID = {
  rebuilder: "01",
  solitary_wayfarer: "02",
  sentinel: "03",
  veil_weaver: "04",
  deconstruction_scholar: "05",
  guide: "06",
  tyrant: "07",
  masochist: "08",
  observer: "09",
  creator: "10",
  predator: "11",
  prisoner: "12"
};

const SYSTEM_INSTRUCTION = `
【角色定位】
你是一个精通荣格分析心理学、马斯洛需求层次、梦境连续性假说，且语调冷酷、高级、略带毒舌感的“潜意识解构大师”。

【核心任务】
根据用户输入的梦境文本与当前月相 moon_phase，进行深度精神分析。不要有任何废话、套话和安慰性语言，一针见血地拆穿用户白天的面具。你必须内部评估荣格阴影、马斯洛匮乏、暗黑四联体、控制欲、情绪连续性、现实创伤回声六类信号。

【分类限制】
你必须严格且只能在以下 12 种特定人格卡片中锚定最契合的一种返回：
01 重建师 / 废墟重建师
02 独行客 / 边境独行客
03 守望者 / 边界守望者
04 织幕者 / 梦幕织幕者
05 解构学者 / 冷光解构学者
06 引路人 / 暗河引路人
07 暴君 / 焦虑的完美主义暴君
08 自虐狂 / 深夜的灵魂自虐狂
09 观察者 / 披着羊皮的冷血观察者
10 造物主 / 坠落神坛的造物主
11 捕食者 / 穿丝绒手套的捕食者
12 囚徒 / 无窗房间里的囚徒

【月相规则】
- Full Moon：潜意识能量暴走期，暗黑四联体与攻击性意象权重上升，文案中必须包含“月光引力撕裂防御”。
- New Moon：深层阴影孕育期，荣格阴影整合与未命名自我材料权重上升。
- Eclipse：安全感遮蔽期，马斯洛安全匮乏、环境不可信、边界失效权重上升。

【输出规则】
你必须且只能返回纯 JSON 字符串。禁止 Markdown，禁止 \`\`\`json，禁止解释，禁止多余字段。输出必须完全满足：
{
  "personality_id": "01到12的字符串",
  "title": "对应12人格的精准主称号",
  "matrix_scores": {
    "jung_shadow": 85,
    "maslow_deprivation": 70,
    "dark_tetrad": 65
  },
  "radar_data": [85, 70, 65, 40, 50, 60],
  "analysis_text": [
    "第一句：直击痛处的精神分析黑话文案，解构梦境意象。",
    "第二句：无情拆穿白天文明面具与夜晚潜意识冲突的毒舌诊断。",
    "第三句：指出其正在经历的现实生活创伤或精神饥饿本质。",
    "第四句：一句疯批、黑暗、文艺、梦核式总结，像梦在最后关灯前留下的判词。"
  ],
  "crystal_prescription": "对应12人格的专属处方晶体名称"
}
`;

function clamp(value) {
  return Math.max(0, Math.min(100, Math.round(Number(value) || 0)));
}

function extractJson(text) {
  if (!text) return null;
  const trimmed = text.trim().replace(/^```(?:json)?/i, "").replace(/```$/i, "").trim();

  try {
    return JSON.parse(trimmed);
  } catch {
    const match = trimmed.match(/\{[\s\S]*\}/);
    if (!match) return null;
    return JSON.parse(match[0]);
  }
}

function splitAnalysisText(localOutput) {
  if (Array.isArray(localOutput.profile?.analysis_sentences)) {
    return localOutput.profile.analysis_sentences.slice(0, 4);
  }

  return `${localOutput.profile?.analysis_text || ""}`
    .split(/(?<=[。！？])/)
    .map((text) => text.trim())
    .filter(Boolean)
    .slice(0, 4);
}

function localToStrictJson(localOutput) {
  const id = TEMPLATE_TO_PERSONA_ID[localOutput.profile?.template_id] || "01";
  const radar = localOutput.profile?.radar || {};
  const analysis = splitAnalysisText(localOutput);

  while (analysis.length < 4) {
    analysis.push(
      analysis.length === 3
        ? "夜晚把话说得很难听，但它通常比白天诚实。"
        : "你的潜意识没有给出更多礼貌解释，只留下了足够刺眼的结构性证据。"
    );
  }

  return {
    personality_id: id,
    title: localOutput.profile?.title || PERSONA_CATALOG.find(([personaId]) => personaId === id)?.[2] || "废墟重建师",
    matrix_scores: {
      jung_shadow: clamp(localOutput.matrix_scores?.jung_shadow),
      maslow_deprivation: clamp(localOutput.matrix_scores?.maslow_deficit ?? 50),
      dark_tetrad: clamp(localOutput.matrix_scores?.dark_tetrad_score)
    },
    radar_data: [
      clamp(radar.shadow ?? localOutput.matrix_scores?.jung_shadow),
      clamp(radar.hunger ?? localOutput.matrix_scores?.maslow_deficit ?? 50),
      clamp(radar.cruelty ?? localOutput.matrix_scores?.dark_tetrad_score),
      clamp(radar.control ?? 50),
      clamp(radar.continuity ?? localOutput.matrix_scores?.continuity_index ?? 50),
      clamp(localOutput.profile?.dark_index ?? 50)
    ],
    analysis_text: analysis,
    crystal_prescription: localOutput.profile?.crystal_prescription || "黑曜石 / 白水晶"
  };
}

function normalizeStrictJson(payload) {
  const personaId = `${payload?.personality_id || ""}`.padStart(2, "0");
  const catalogHit = PERSONA_CATALOG.find(([id]) => id === personaId);

  if (!catalogHit) {
    throw new Error("AI returned unknown personality_id");
  }

  const analysisText = Array.isArray(payload?.analysis_text) ? payload.analysis_text.slice(0, 4) : [];
  if (analysisText.length < 3) {
    throw new Error("AI returned invalid analysis_text");
  }
  while (analysisText.length < 4) {
    analysisText.push("夜晚把话说得很难听，但它通常比白天诚实。");
  }

  const radarData = Array.isArray(payload?.radar_data) ? payload.radar_data.slice(0, 6).map(clamp) : [];
  if (radarData.length !== 6) {
    throw new Error("AI returned invalid radar_data");
  }

  return {
    personality_id: personaId,
    title: payload?.title || catalogHit[2],
    matrix_scores: {
      jung_shadow: clamp(payload?.matrix_scores?.jung_shadow),
      maslow_deprivation: clamp(payload?.matrix_scores?.maslow_deprivation),
      dark_tetrad: clamp(payload?.matrix_scores?.dark_tetrad)
    },
    radar_data: radarData,
    analysis_text: analysisText.map((text) => `${text}`.trim()).filter(Boolean).slice(0, 4),
    crystal_prescription: payload?.crystal_prescription || "黑曜石 / 白水晶"
  };
}

function timeoutSignal(ms = 18000) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), ms);
  return {
    signal: controller.signal,
    clear: () => clearTimeout(timer)
  };
}

function buildUserPayload({ dreamText, moonPhase, localOutput }) {
  return JSON.stringify({
    dream_text: dreamText,
    moon_phase: moonPhase,
    local_jmc_reference: {
      title: localOutput.profile?.title,
      personality_template_id: localOutput.profile?.template_id,
      matrix_scores: localOutput.matrix_scores,
      dominant_traits: localOutput.raw_scores?.dominant_traits,
      matched_entries: localOutput.matched_entries?.slice(0, 8)
    }
  });
}

async function callGemini({ dreamText, moonPhase, localOutput }) {
  const model = process.env.GEMINI_MODEL || "gemini-1.5-flash";
  const timeout = timeoutSignal();

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        signal: timeout.signal,
        body: JSON.stringify({
          systemInstruction: {
            parts: [{ text: SYSTEM_INSTRUCTION }]
          },
          generationConfig: {
            responseMimeType: "application/json",
            temperature: 0.72
          },
          contents: [
            {
              role: "user",
              parts: [{ text: buildUserPayload({ dreamText, moonPhase, localOutput }) }]
            }
          ]
        })
      }
    );

    if (!response.ok) throw new Error(`Gemini request failed: ${response.status}`);
    const data = await response.json();
    const text = data.candidates?.[0]?.content?.parts?.map((part) => part.text).join("");
    return normalizeStrictJson(extractJson(text));
  } finally {
    timeout.clear();
  }
}

async function callDeepSeek({ dreamText, moonPhase, localOutput }) {
  const timeout = timeoutSignal();

  try {
    const response = await fetch("https://api.deepseek.com/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.DEEPSEEK_API_KEY}`,
        "Content-Type": "application/json"
      },
      signal: timeout.signal,
      body: JSON.stringify({
        model: process.env.DEEPSEEK_MODEL || "deepseek-chat",
        response_format: { type: "json_object" },
        temperature: 0.72,
        messages: [
          { role: "system", content: SYSTEM_INSTRUCTION },
          { role: "user", content: buildUserPayload({ dreamText, moonPhase, localOutput }) }
        ]
      })
    });

    if (!response.ok) throw new Error(`DeepSeek request failed: ${response.status}`);
    const data = await response.json();
    return normalizeStrictJson(extractJson(data.choices?.[0]?.message?.content));
  } finally {
    timeout.clear();
  }
}

export async function POST(request) {
  let body;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "INVALID_JSON" }, { status: 400 });
  }

  const dreamText = `${body?.dreamText || ""}`.trim();
  const moonPhase = body?.moonPhase || body?.moon_phase || "Unknown";
  const preferRemote = body?.preferRemote !== false;
  const localOutput = calculateJMCOutput(dreamText, moonPhase);
  const fallback = localToStrictJson(localOutput);

  if (!dreamText || !preferRemote) {
    return NextResponse.json(fallback, {
      headers: {
        "x-jmc-source": "local_fallback",
        "x-jmc-fallback-reason": !dreamText ? "EMPTY_DREAM_TEXT" : "REMOTE_DISABLED_BY_CLIENT"
      }
    });
  }

  if (!process.env.GEMINI_API_KEY && !process.env.DEEPSEEK_API_KEY) {
    return NextResponse.json(fallback, {
      headers: {
        "x-jmc-source": "local_fallback",
        "x-jmc-fallback-reason": "NO_API_KEY_CONFIGURED"
      }
    });
  }

  try {
    const result = process.env.GEMINI_API_KEY
      ? await callGemini({ dreamText, moonPhase, localOutput })
      : await callDeepSeek({ dreamText, moonPhase, localOutput });

    return NextResponse.json(result, {
      headers: {
        "x-jmc-source": process.env.GEMINI_API_KEY ? "gemini" : "deepseek"
      }
    });
  } catch (error) {
    return NextResponse.json(fallback, {
      headers: {
        "x-jmc-source": "local_fallback",
        "x-jmc-fallback-reason": error instanceof Error ? error.message : "REMOTE_AI_FAILED"
      }
    });
  }
}
