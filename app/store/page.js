"use client";

import CrystalStore from "@/components/CrystalStore";
import { useEffect, useState } from "react";

export default function StorePage() {
  const [prescription, setPrescription] = useState("拉长石 / 紫水晶 / 月光石");

  useEffect(() => {
    const stored = window.localStorage.getItem("oneironaut:lastDream");
    if (!stored) return;

    try {
      const parsed = JSON.parse(stored);
      setPrescription(parsed?.result?.profile?.crystal_prescription || prescription);
    } catch {
      setPrescription("拉长石 / 紫水晶 / 月光石");
    }
  }, []);

  return (
    <main className="font-mono min-h-screen bg-[#070708] pt-16 text-white">
      <CrystalStore
        prescription={prescription}
        onSelectProduct={(product) => document.getElementById(product.id)?.scrollIntoView({ behavior: "smooth", block: "center" })}
      />
    </main>
  );
}
