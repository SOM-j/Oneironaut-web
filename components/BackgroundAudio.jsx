"use client";

import { useEffect, useRef, useState } from "react";

export default function BackgroundAudio() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = new Audio("/audio/oneironaut-ambient.wav?v=dreamcore-light-2");
    audio.loop = true;
    audio.volume = 0.32;
    audio.preload = "auto";
    audioRef.current = audio;

    const syncPlay = () => setIsPlaying(true);
    const syncPause = () => setIsPlaying(false);

    audio.addEventListener("play", syncPlay);
    audio.addEventListener("pause", syncPause);
    audio.addEventListener("ended", syncPause);

    return () => {
      audio.removeEventListener("play", syncPlay);
      audio.removeEventListener("pause", syncPause);
      audio.removeEventListener("ended", syncPause);
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const toggleAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio.play().catch(() => setIsPlaying(false));
      return;
    }

    audio.pause();
  };

  return (
    <button
      type="button"
      onClick={toggleAudio}
      className="fixed bottom-5 right-5 z-[80] flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-[#070708]/85 text-white shadow-[0_0_28px_rgba(255,255,255,0.08)] backdrop-blur-md transition hover:border-white/45 hover:bg-white hover:text-black"
      aria-label={isPlaying ? "Pause ambient music" : "Play ambient music"}
      title={isPlaying ? "PAUSE AMBIENT" : "PLAY AMBIENT"}
    >
      <span className={`relative h-8 w-8 rounded-full border border-current ${isPlaying ? "animate-[spin_4s_linear_infinite]" : ""}`}>
        <span className="absolute inset-1 rounded-full border border-current opacity-35" />
        <span className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-current bg-[#070708]" />
        <span className="absolute left-1/2 top-0 h-1/2 w-px origin-bottom bg-current opacity-55" />
      </span>
    </button>
  );
}
