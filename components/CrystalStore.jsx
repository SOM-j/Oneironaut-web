"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Copy, Gem, RadioTower, Sparkles, X } from "lucide-react";
import { useState } from "react";

const WECHAT_ID = "Oneironaut_Lab";

export const CRYSTAL_PRODUCTS = [
  {
    id: "obsidian-12hz",
    name: "12Hz 频段 · 黑曜石原石",
    price: "¥269",
    frequency: "12Hz / Ground Lock",
    mapping: "安全匮乏 / 镇压阴影",
    prescriptionKeys: ["黑曜石", "黑碧玺", "茶晶"],
    material: "Raw Obsidian",
    signal: "Safety Deprivation"
  },
  {
    id: "amethyst-calm",
    name: "高维静谧 · 巴西天然紫水晶",
    price: "¥329",
    frequency: "Theta Calm / 7.8Hz",
    mapping: "焦虑过载 / 情绪疗愈",
    prescriptionKeys: ["紫水晶", "紫锂辉", "萤石", "白水晶"],
    material: "Brazil Amethyst",
    signal: "Affective Repair"
  },
  {
    id: "labradorite-fullmoon",
    name: "宇宙潮汐 · 满月全频拉长石",
    price: "¥399",
    frequency: "Lunar Full-Spectrum",
    mapping: "满月应激 / 潜意识暴走",
    prescriptionKeys: ["拉长石", "黑月光", "月光石"],
    material: "Full Moon Labradorite",
    signal: "Lunar Stress"
  },
  {
    id: "rutilated-quartz-power",
    name: "意识觉醒 · 莫桑比克金发晶",
    price: "¥459",
    frequency: "Solar Will / 21Hz",
    mapping: "自恋补偿 / 权力匮乏",
    prescriptionKeys: ["金发晶", "黄铁矿", "太阳石", "石榴石"],
    material: "Mozambique Rutilated Quartz",
    signal: "Power Deficit"
  }
];

export function findPrescribedCrystal(prescription = "") {
  const normalized = `${prescription}`;
  const ranked = CRYSTAL_PRODUCTS.map((product) => {
    const indexes = product.prescriptionKeys
      .map((key) => normalized.toLowerCase().indexOf(key.toLowerCase()))
      .filter((index) => index >= 0);

    return {
      product,
      index: indexes.length ? Math.min(...indexes) : Infinity
    };
  }).sort((a, b) => a.index - b.index);

  return ranked[0]?.index !== Infinity ? ranked[0].product : CRYSTAL_PRODUCTS[0];
}

function CrystalGlyph({ active, productId }) {
  const stroke = active ? "rgba(255,255,255,0.92)" : "rgba(255,255,255,0.52)";
  const faint = active ? "rgba(255,255,255,0.22)" : "rgba(255,255,255,0.1)";

  const glyphs = {
    "obsidian-12hz": (
      <svg viewBox="0 0 220 220" className="h-44 w-44 spin-slow" aria-hidden="true">
        <defs>
          <radialGradient id="obsidian-breathe" cx="50%" cy="50%" r="55%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.14)" />
            <stop offset="100%" stopColor="rgba(22,22,24,0.02)" />
          </radialGradient>
        </defs>
        <polygon points="110,22 176,110 110,198 44,110" fill="url(#obsidian-breathe)" stroke={stroke} strokeWidth="0.7" />
        <polyline points="110,22 110,198" fill="none" stroke={faint} strokeWidth="0.5" />
        <polyline points="44,110 176,110" fill="none" stroke={stroke} strokeWidth="0.5" />
        <polyline points="110,22 44,110 110,198 176,110 110,22" fill="none" stroke={stroke} strokeWidth="0.5" />
        <polyline points="110,22 176,110 44,110 110,22" fill="none" stroke={faint} strokeWidth="0.5" />
        <polyline points="110,198 176,110 44,110 110,198" fill="none" stroke={faint} strokeWidth="0.5" />
      </svg>
    ),
    "amethyst-calm": (
      <svg viewBox="0 0 220 220" className="h-44 w-44 spin-slower" aria-hidden="true">
        {[
          "108,20 142,92 100,182 68,92",
          "55,54 101,108 70,196 30,126",
          "158,48 190,128 148,196 118,104",
          "96,74 126,122 110,202 76,132",
          "126,36 164,100 130,172 102,102"
        ].map((points) => (
          <polygon key={points} points={points} fill="rgba(255,255,255,0.025)" stroke={stroke} strokeWidth="0.55" />
        ))}
        <path d="M38 132 L190 128 M70 196 L148 196 M55 54 L164 100 M108 20 L110 202" fill="none" stroke={faint} strokeWidth="0.5" />
      </svg>
    ),
    "labradorite-fullmoon": (
      <svg viewBox="0 0 220 220" className="h-44 w-44" aria-hidden="true">
        <circle cx="110" cy="110" r="50" fill="rgba(255,255,255,0.035)" stroke={stroke} strokeWidth="0.65" />
        <g className="spin-slow">
          <ellipse cx="110" cy="110" rx="86" ry="28" fill="none" stroke={stroke} strokeWidth="0.5" transform="rotate(-22 110 110)" />
          <ellipse cx="110" cy="110" rx="86" ry="28" fill="none" stroke={faint} strokeWidth="0.5" transform="rotate(24 110 110)" />
          <ellipse cx="110" cy="110" rx="72" ry="18" fill="none" stroke={stroke} strokeWidth="0.5" transform="rotate(68 110 110)" />
        </g>
        <circle cx="110" cy="110" r="2" fill="rgba(255,255,255,0.8)" />
      </svg>
    ),
    "rutilated-quartz-power": (
      <svg viewBox="0 0 220 220" className="h-44 w-44 spin-slow" aria-hidden="true">
        <polygon points="70,68 140,40 178,82 108,112" fill="rgba(255,255,255,0.02)" stroke={stroke} strokeWidth="0.55" />
        <polygon points="70,68 108,112 108,178 70,132" fill="rgba(255,255,255,0.015)" stroke={stroke} strokeWidth="0.55" />
        <polygon points="108,112 178,82 178,148 108,178" fill="rgba(255,255,255,0.025)" stroke={stroke} strokeWidth="0.55" />
        <path d="M82 80 L162 144 M98 62 L122 170 M132 50 L86 142 M154 76 L112 178 M72 118 L178 100" fill="none" stroke="#d4af37" strokeWidth="0.55" />
        <path d="M70 68 L178 148 M140 40 L108 178" fill="none" stroke={faint} strokeWidth="0.5" />
      </svg>
    )
  };

  return (
    <div className="relative flex aspect-square w-full items-center justify-center border-b border-white/10 bg-black">
      <div className={active ? "breathe-line" : ""}>{glyphs[productId]}</div>
      {active &&
        Array.from({ length: 9 }).map((_, index) => (
          <motion.span
            key={index}
            className="absolute h-1 w-1 bg-white"
            style={{
              left: `${20 + ((index * 17) % 60)}%`,
              top: `${16 + ((index * 23) % 66)}%`
            }}
            animate={{ opacity: [0.1, 0.8, 0.1], y: [-5, 5, -5] }}
            transition={{ duration: 1.8 + index * 0.18, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
    </div>
  );
}

export default function CrystalStore({ prescription, onSelectProduct }) {
  const [channelProduct, setChannelProduct] = useState(null);
  const [toast, setToast] = useState("");
  const recommended = findPrescribedCrystal(prescription);
  const products = [...CRYSTAL_PRODUCTS].sort((a, b) => Number(b.id === recommended.id) - Number(a.id === recommended.id));

  async function copyWechat() {
    try {
      await navigator.clipboard.writeText(WECHAT_ID);
      setToast("微信号已复制");
    } catch {
      setToast(`请手动复制：${WECHAT_ID}`);
    }

    window.setTimeout(() => setToast(""), 1800);
  }

  return (
    <section id="crystal" className="relative z-10 border-b border-white/10 bg-[#070708]">
      <div className="border-b border-white/10 px-5 py-16 md:px-8 md:py-24">
        <div className="mb-5 flex items-center gap-3 text-[10px] uppercase tracking-widest text-white/40">
          <RadioTower size={15} />
          Frequency Crystal Store / Prescription Commerce
        </div>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <h2 className="max-w-4xl text-3xl font-normal leading-tight tracking-widest text-white md:text-5xl">
            FREQUENCY CRYSTALS / 频段晶体
          </h2>
          <p className="max-w-2xl text-sm leading-7 tracking-widest text-white/48">
            每一块晶体都被映射到 JMC 矩阵的匮乏区间、阴影强度与月相应激。当前推荐会自动置顶并进入边框呼吸状态。
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 border-white/10 md:grid-cols-2 xl:grid-cols-4">
        {products.map((product) => {
          const active = product.id === recommended.id;

          return (
            <motion.article
              id={product.id}
              key={product.id}
              className="relative min-h-[620px] border-b border-white/10 bg-black md:border-r xl:border-b-0"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.6 }}
            >
              {active && (
                <motion.div
                  className="pointer-events-none absolute inset-0 border border-white/55"
                  animate={{ opacity: [0.25, 0.9, 0.25] }}
                  transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
                />
              )}
              <CrystalGlyph active={active} productId={product.id} />
              <div className="flex min-h-[330px] flex-col justify-between p-6">
                <div>
                  <div className="mb-5 flex items-center justify-between text-[9px] uppercase tracking-widest text-white/35">
                    <span>{product.frequency}</span>
                    <Gem size={14} className={active ? "text-white" : "text-white/35"} />
                  </div>
                  {active && (
                    <motion.div
                      className="mb-5 border border-white/20 px-3 py-2 text-[9px] uppercase leading-5 tracking-widest text-white/75"
                      animate={{ opacity: [0.55, 1, 0.55] }}
                      transition={{ duration: 2.4, repeat: Infinity }}
                    >
                      这是最契合你当前潜意识频段的能量锚定物
                    </motion.div>
                  )}
                  <h3 className="whitespace-nowrap text-[15px] font-normal leading-7 tracking-[0.08em] text-white md:text-base xl:text-[15px]">
                    {product.name}
                  </h3>
                  <div className="mt-6 border-y border-white/10 py-4">
                    <div className="text-[9px] uppercase tracking-widest text-white/35">Mapped Symptom</div>
                    <div className="mt-2 text-xs tracking-widest text-white/65">{product.mapping}</div>
                  </div>
                  <div className="mt-5 text-[10px] uppercase tracking-widest text-white/35">{product.material}</div>
                  <div className="mt-2 text-[10px] uppercase tracking-widest text-white/55">{product.signal}</div>
                </div>

                <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-5">
                  <div className="text-lg tracking-widest text-white md:text-xl">{product.price}</div>
                  <button
                    type="button"
                    onClick={() => {
                      onSelectProduct?.(product);
                      setChannelProduct(product);
                    }}
                    className="group inline-flex h-11 items-center justify-center gap-3 border border-white/15 px-4 text-[10px] uppercase tracking-widest text-white transition hover:border-white/45 hover:bg-white hover:text-black"
                  >
                    [ 锚定能量 · 联系我们 ]
                  </button>
                </div>
              </div>
              {active && <Sparkles className="absolute right-5 top-5 text-white/65" size={18} />}
            </motion.article>
          );
        })}
      </div>

      <AnimatePresence>
        {channelProduct && (
          <motion.div
            className="fixed inset-0 z-[70] flex items-center justify-center bg-black/72 p-5 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-full max-w-xl border border-white/15 bg-[#070708] p-6 md:p-8"
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.98 }}
            >
              <button
                type="button"
                onClick={() => setChannelProduct(null)}
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center border border-white/10 text-white/55 transition hover:border-white/35 hover:text-white"
              >
                <X size={16} />
              </button>
              <div className="mb-4 text-[10px] uppercase tracking-widest text-white/40">THE ENCRYPTED CHANNEL / 加密通道</div>
              <h3 className="max-w-md text-2xl font-normal leading-9 tracking-widest text-white">{channelProduct.name}</h3>
              <p className="mt-6 text-sm leading-7 tracking-widest text-white/55">
                处方晶体不走开放货架。复制微信号，发送你的梦境编号与人格卡片，我们会给出对应频段、净化方式与数字孪生解锁路径。
              </p>
              <div className="mt-8 border border-white/10 p-4">
                <div className="text-[9px] uppercase tracking-widest text-white/35">WeChat Signal</div>
                <div className="mt-3 text-lg tracking-widest text-white">{WECHAT_ID}</div>
              </div>
              <button
                type="button"
                onClick={copyWechat}
                className="mt-5 inline-flex h-12 w-full items-center justify-center gap-3 border border-white/15 text-[10px] uppercase tracking-widest text-white transition hover:border-white/45 hover:bg-white hover:text-black"
              >
                <Copy size={14} />
                Copy WeChat / 复制微信号
              </button>
              <AnimatePresence>
                {toast && (
                  <motion.div
                    className="absolute -bottom-12 left-1/2 -translate-x-1/2 border border-white/15 bg-black px-4 py-2 text-[10px] uppercase tracking-widest text-white/75"
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                  >
                    {toast}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
