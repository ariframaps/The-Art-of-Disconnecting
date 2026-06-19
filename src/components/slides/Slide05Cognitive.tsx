"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const ITEMS = [
  {
    id: "01",
    stat: "30 sec",
    title: "The 30-Second Glance",
    desc: "Membuka notifikasi sebentar harganya ndak pernah murah! efeknya sangat besar.",
    fillPct: 22,
    color: "violet" as const,
  },
  {
    id: "02",
    stat: "23 min",
    title: "23 Minutes Penalty",
    desc: "Riset Harvard Business Review membuktikan attention residue tertinggal di otak selama 23 menit setelah satu interupsi.",
    fillPct: 75,
    color: "violet" as const,
    source: "Harvard Business Review, 2006",
  },
  {
    id: "03",
    stat: "∞",
    title: "The Shallow Work Trap",
    desc: "Kehilangan kemampuan berpikir mendalam (Deep Work) akibat otak yang terus-menerus terfragmentasi.",
    fillPct: 100,
    color: "red" as const,
  },
];

const BAR_H = 60; // px, total bar column height

export function Slide05Cognitive() {
  return (
    <div className="relative w-full h-full bg-neutral-950 flex flex-col px-10 md:px-16 py-10 overflow-hidden select-none">
      {/* Violet glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[360px] bg-violet-900/[0.08] rounded-full blur-[120px] pointer-events-none" />

      {/* Header */}
      <motion.div
        className="relative z-10 flex justify-between items-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        <span className="font-mono text-[10px] text-neutral-600 tracking-[0.25em] uppercase">
          05 / 07 - The Cognitive Toll
        </span>
        <span className="font-mono text-[10px] text-violet-900/70 tracking-widest uppercase">
          Performance Audit
        </span>
      </motion.div>

      {/* Main */}
      <div className="relative z-10 flex-1 flex items-center gap-14">
        {/* Left anchor */}
        <div className="w-[38%] shrink-0">
          <div className="overflow-hidden">
            <motion.div
              className="font-display text-white leading-none tracking-tight"
              style={{ fontSize: "clamp(3rem, 9.5vw, 11rem)" }}
              initial={{ y: "110%" }}
              whileInView={{ y: "0%" }}
              viewport={{ once: false }}
              transition={{ duration: 1.05, delay: 0.1, ease: EASE }}
            >
              ATTENTION
            </motion.div>
          </div>
          <div className="overflow-hidden">
            <motion.div
              className="font-display text-violet-400 leading-none tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 7.5vw, 9rem)" }}
              initial={{ y: "110%" }}
              whileInView={{ y: "0%" }}
              viewport={{ once: false }}
              transition={{ duration: 1.05, delay: 0.22, ease: EASE }}
            >
              RESIDUE.
            </motion.div>
          </div>

          <motion.p
            className="mt-6 font-sans text-sm text-neutral-500 max-w-xs leading-relaxed"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.85, delay: 0.6, ease: EASE }}
          >
            Satu lirikan kecil yang menghancurkan efisiensi kerja berjam-jam.
          </motion.p>
        </div>

        {/* Right: Timeline performance */}
        <div className="flex-1 flex flex-col gap-0">
          {/* Section label */}
          <motion.div
            className="flex items-center gap-4 mb-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.28, ease: EASE }}
          >
            <span className="font-mono text-[9px] text-neutral-600 tracking-widest uppercase whitespace-nowrap">
              Cognitive Impact Timeline
            </span>
            <div className="flex-1 h-px bg-neutral-800" />
          </motion.div>

          {ITEMS.map((item, i) => (
            <motion.div
              key={item.id}
              className={`flex gap-5 py-5 group ${
                i < ITEMS.length - 1 ? "border-b border-neutral-900" : ""
              }`}
              initial={{ x: 48, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.75, delay: 0.32 + i * 0.18, ease: EASE }}
            >
              {/* Bar column */}
              <div className="flex flex-col items-center gap-2 shrink-0">
                <div
                  className="w-10 bg-neutral-900/80 flex flex-col justify-end overflow-hidden"
                  style={{ height: BAR_H }}
                >
                  <motion.div
                    className={`w-full ${
                      item.color === "violet"
                        ? "bg-violet-500/50"
                        : "bg-red-500/50"
                    }`}
                    initial={{ height: 0 }}
                    whileInView={{
                      height: Math.round((item.fillPct / 100) * BAR_H),
                    }}
                    viewport={{ once: false }}
                    transition={{
                      duration: 1,
                      delay: 0.55 + i * 0.18,
                      ease: EASE,
                    }}
                  />
                </div>
                <span
                  className={`font-display text-sm leading-none ${
                    item.color === "violet" ? "text-violet-400" : "text-red-400"
                  }`}
                >
                  {item.stat}
                </span>
              </div>

              {/* Text */}
              <div className="pt-1">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="font-mono text-[9px] text-neutral-700">
                    [{item.id}]
                  </span>
                  <h3 className="font-display text-lg text-white tracking-wide">
                    {item.title}
                  </h3>
                </div>
                <p className="font-sans text-sm text-neutral-400 leading-relaxed">
                  {item.desc}
                </p>
                {item.source && (
                  <p className="font-mono text-[9px] text-neutral-700 mt-1.5 tracking-wider">
                    {item.source}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1, delay: 1.1, ease: EASE }}
      >
        <a
          href="https://hbr.org/2006/03/the-cost-of-not-paying-attention"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-[9px] text-neutral-800 tracking-wider hover:text-neutral-600 transition-colors"
        >
          ↗ HBR.ORG - THE-COST-OF-NOT-PAYING-ATTENTION
        </a>
      </motion.div>
    </div>
  );
}
