export default function AboutPage() {
  return (
    <main className="font-mono min-h-screen bg-[#070708] pt-16 text-white">
      <section className="grid min-h-[calc(100vh-4rem)] grid-cols-1 border-b border-white/10 lg:grid-cols-[0.8fr_1.2fr]">
        <aside className="border-b border-white/10 p-5 md:p-8 lg:border-b-0 lg:border-r">
          <div className="mb-6 text-[10px] uppercase tracking-widest text-white/40">Oneironaut.</div>
          <h1 className="text-4xl font-normal leading-tight tracking-widest md:text-6xl">ONEIRONAUT / 关于我们</h1>
        </aside>
        <article className="flex items-center p-5 md:p-12">
          <div className="max-w-4xl space-y-10">
            <p className="text-sm leading-8 tracking-widest text-white/52">
              以荣格阴影为地下河，以马斯洛匮乏为地形图，以连续性假说校准现实残影，再以暗黑四联体识别那些被文明礼貌压平的冲动。我们不把梦解释成糖水故事，也不把痛苦包装成廉价治愈。
            </p>
            <p className="text-sm leading-8 tracking-widest text-white/52">
              我们相信每一个梦境都携带频段：焦虑有频段，欲望有频段，羞耻有频段，未被命名的野心也有频段。分析不是终点，处方晶体也不是神迹。它们只是一个锚点，提醒你在白天继续面对夜里已经说出口的东西。
            </p>
            <div className="border-t border-white/10 pt-8 text-[10px] uppercase leading-6 tracking-widest text-white/35">
              Jungian shadow / Need deprivation / Continuity hypothesis / Dark tetrad telemetry / Crystal commerce.
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}
