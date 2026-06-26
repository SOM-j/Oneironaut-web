"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/", label: "01. DREAM BORDER / 梦境边境" },
  { href: "/analysis", label: "02. 12 PERSONALITY CARDS / 12人格卡片" },
  { href: "/archive", label: "03. SHADOW ARCHIVE / 阴影档案馆" },
  { href: "/store", label: "04. FREQUENCY CRYSTALS / 频段晶体" },
  { href: "/about", label: "05. ABOUT / 关于我们" }
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <button
        type="button"
        aria-label="Open navigation"
        onClick={() => setOpen(true)}
        className="fixed left-4 top-4 z-50 flex h-11 w-11 flex-col items-center justify-center gap-1 border border-white/10 bg-black/45 backdrop-blur-md transition hover:border-white/35"
      >
        <span className="h-px w-5 bg-white/70" />
        <span className="h-px w-5 bg-white/45" />
        <span className="h-px w-5 bg-white/70" />
      </button>

      <div className="fixed left-0 right-0 top-0 z-40 hidden h-16 items-center justify-end border-b border-white/10 bg-[#070708]/72 px-8 backdrop-blur-md xl:flex">
        <nav className="flex items-center gap-5 text-[9px] uppercase tracking-widest text-white/42">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.button
              aria-label="Close navigation"
              className="fixed inset-0 z-50 bg-black/55 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.aside
              className="fixed left-0 top-0 z-50 flex h-screen w-full max-w-md flex-col border-r border-white/10 bg-[#070708] p-6 pt-24 md:p-8 md:pt-28"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="absolute right-5 top-5 h-11 w-11 border border-white/10 text-xl leading-none text-white/55 transition hover:border-white/35 hover:text-white"
              >
                ×
              </button>
              <div className="mb-16 text-[10px] uppercase tracking-[0.45em] text-white/40">Oneironaut Navigation</div>
              <nav className="space-y-px border-y border-white/10">
                {navItems.map((item) => {
                  const active = pathname === item.href;

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="group flex min-h-20 items-center justify-between border-b border-white/10 px-1 text-xs uppercase tracking-widest text-white/50 transition last:border-b-0 hover:text-white"
                    >
                      <span>{item.label}</span>
                      <span className={active ? "text-white" : "text-white/20 group-hover:text-white/70"}>↗</span>
                    </Link>
                  );
                })}
              </nav>
              <div className="mt-auto border-t border-white/10 pt-6 text-[10px] uppercase leading-6 tracking-widest text-white/35">
                Blue-black interface for dream recording, psychic quantification and crystal commerce.
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
