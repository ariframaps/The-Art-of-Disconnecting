"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const ITEMS = [
  { num: "01", en: "THE AGE OF NOISE", id: "Dunia yang bising" },
  {
    num: "02",
    en: "THE FOMO TRAP",
    id: "Jebakan rasa takut tertinggal",
  },
  {
    num: "03",
    en: "THE JOMO REBELLION",
    id: "Kedaulatan penuh atas perhatian",
  },
];

function WordReveal({
  text,
  delay = 0,
  className = "",
}: {
  text: string;
  delay?: number;
  className?: string;
}) {
  return (
    <span className={`inline ${className}`}>
      {text.split(" ").map((word, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            initial={{ y: "110%" }}
            whileInView={{ y: "0%" }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{
              duration: 0.85,
              ease: EASE,
              delay: delay + i * 0.07,
            }}
          >
            {word}
            {i < text.split(" ").length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export function Slide01Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setCurrent((p) => (p + 1) % ITEMS.length),
      3000
    );
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative w-full h-full bg-neutral-950 flex flex-col px-4 sm:px-6 md:px-10 lg:px-16 py-6 sm:py-8 md:py-10 select-none">
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Header bar */}
      <motion.div
        className="relative z-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-4"
        initial={{ opacity: 0, y: -16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        <span className="font-mono text-[8px] sm:text-[9px] md:text-[10px] text-neutral-600 tracking-[0.2em] sm:tracking-[0.25em] uppercase">
          01 / 07 - The Manifesto
        </span>
        <span className="font-mono text-[8px] sm:text-[9px] md:text-[10px] text-neutral-700 tracking-[0.15em] sm:tracking-[0.2em]">
          ILLIYIN SHARING SESSION
        </span>
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center py-6 sm:py-8">
        {/* Massive anchor text */}
        <div
          className="font-display text-white leading-[0.88] tracking-tight uppercase"
          style={{ fontSize: "clamp(2rem, 8vw, 16rem)" }}
        >
          <div>
            <WordReveal text="THE ART OF" delay={0.15} />
          </div>
          <div>
            <WordReveal text="DISCONNECTING." delay={0.35} />
          </div>
        </div>

        <motion.p
          className="mt-4 sm:mt-6 md:mt-7 font-sans text-xs sm:text-sm text-neutral-500 max-w-sm leading-relaxed"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.9, delay: 0.75, ease: EASE }}
        >
          Memilih menghilang sejenak di era interkoneksi massal adalah bentuk
          kemewahan mental.
        </motion.p>
      </div>

      {/* Rolling items panel - hidden on mobile, positioned on desktop */}
      <motion.aside
        className="hidden lg:block absolute right-4 sm:right-6 lg:right-10 xl:right-16 top-1/2 -translate-y-1/2 w-56 sm:w-64 lg:w-72 border-l border-neutral-800/70 pl-4 sm:pl-6 lg:pl-8 z-10"
        initial={{ opacity: 0, x: 32 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.9, delay: 0.95, ease: EASE }}
      >
        <p className="font-mono text-[8px] sm:text-[9px] text-neutral-600 tracking-[0.25em] sm:tracking-[0.3em] uppercase mb-6">
          Session Overview
        </p>

        {/* Rolling area */}
        <div className="overflow-hidden" style={{ height: 88 }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ y: 56, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -56, opacity: 0 }}
              transition={{ duration: 0.55, ease: EASE }}
            >
              <p className="font-mono text-[8px] sm:text-[9px] lg:text-[10px] text-neutral-600 mb-2">
                [{ITEMS[current].num}]
              </p>
              <p className="font-display text-[1.2rem] sm:text-[1.4rem] lg:text-[1.6rem] text-white leading-none tracking-wide">
                {ITEMS[current].en}
              </p>
              <p className="font-sans text-[10px] sm:text-xs text-neutral-500 mt-2">
                {ITEMS[current].id}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress track */}
        <div className="flex gap-2 mt-5">
          {ITEMS.map((_, i) => (
            <motion.div
              key={i}
              className="h-px flex-1"
              animate={{ backgroundColor: i === current ? "#ffffff" : "#262626" }}
              transition={{ duration: 0.4 }}
            />
          ))}
        </div>
      </motion.aside>

      {/* Footer */}
      <motion.div
        className="relative z-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, delay: 1.2, ease: EASE }}
      >
        <div className="flex items-center gap-3 font-mono text-[8px] sm:text-[9px] md:text-[10px] text-neutral-700 tracking-[0.2em] sm:tracking-[0.25em] uppercase">
          <motion.span
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            ↓
          </motion.span>
          Scroll to explore
        </div>
        <span className="font-mono text-[8px] sm:text-[9px] md:text-[10px] text-neutral-800 tracking-widest">
          JOMO × 2026
        </span>
      </motion.div>
    </div>
  );
}
