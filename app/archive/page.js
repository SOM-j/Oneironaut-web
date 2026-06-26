const archiveItems = [
  {
    date: "2026.06.22",
    phase: "Full Moon",
    title: "镜中电梯与发热石头",
    summary: "黑影、下降结构与晶体意象共同出现，阴影融合指数显著升高。"
  },
  {
    date: "2026.06.18",
    phase: "Waxing Gibbous",
    title: "迟到考场与无脸观众",
    summary: "尊重匮乏与评价焦虑叠加，舞台人格进入高压自检。"
  },
  {
    date: "2026.06.09",
    phase: "New Moon",
    title: "黑海、蛇与地下河",
    summary: "新月阴影孕育期，深层无意识材料开始靠近意识边界。"
  }
];

export default function ArchivePage() {
  return (
    <main className="font-mono min-h-screen bg-[#070708] pt-16 text-white">
      <section className="border-b border-white/10 p-5 md:p-8">
        <div className="mb-5 text-[10px] uppercase tracking-widest text-white/40">Shadow Archive / Dream Timeline</div>
        <h1 className="text-4xl font-normal tracking-widest md:text-6xl">SHADOW ARCHIVE / 阴影档案馆</h1>
      </section>
      <section className="p-5 md:p-8">
        <div className="mx-auto max-w-5xl border-l border-white/10">
          {archiveItems.map((item) => (
            <article key={item.date} className="relative border-b border-white/10 px-6 py-10 md:px-10">
              <span className="absolute -left-[5px] top-12 h-2 w-2 bg-white" />
              <div className="mb-4 flex flex-wrap gap-4 text-[10px] uppercase tracking-widest text-white/35">
                <span>{item.date}</span>
                <span>{item.phase}</span>
              </div>
              <h2 className="text-2xl font-normal tracking-widest">{item.title}</h2>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/55">{item.summary}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
