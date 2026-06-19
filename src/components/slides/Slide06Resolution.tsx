"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const CARDS = [
  {
    id: "01",
    glyph: "◈",
    title: "Cognitive Reclamation",
    desc: "Mengembalikan fokus tajam dan kapasitas memori maksimal yang tergerus oleh fragmentasi digital.",
  },
  {
    id: "02",
    glyph: "◉",
    title: "Deep Connection",
    desc: "Hadir 100% secara personal dan berkualitas tanpa interupsi layar dan notifikasi.",
  },
  {
    id: "03",
    glyph: "◌",
    title: "Mental Freedom",
    desc: "Kebebasan dari keharusan memvalidasi hidup berdasarkan standar dan ekspektasi orang lain.",
    source: "Psychology Today",
  },
];

export function Slide06Resolution() {
  return (
    <div className="relative w-full h-full bg-neutral-950 flex flex-col px-10 md:px-16 py-10 overflow-hidden select-none">
      {/* Emerald glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[560px] h-[560px] bg-emerald-900/[0.1] rounded-full blur-[130px] pointer-events-none" />

      {/* Header */}
      <motion.div
        className="relative z-10 flex justify-between items-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        <span className="font-mono text-[10px] text-neutral-600 tracking-[0.25em] uppercase">
          06 / 07 - The Resolution
        </span>
        <span className="font-mono text-[10px] text-emerald-900/70 tracking-widest uppercase">
          ◆ JOMO Protocol
        </span>
      </motion.div>

      {/* Main */}
      <div className="relative z-10 flex-1 flex items-center gap-14">
        {/* Left anchor */}
        <div className="w-[42%] shrink-0">
          <div className="overflow-hidden">
            <motion.div
              className="font-display text-white leading-none tracking-tight"
              style={{ fontSize: "clamp(4rem, 12vw, 14rem)" }}
              initial={{ y: "110%" }}
              whileInView={{ y: "0%" }}
              viewport={{ once: false }}
              transition={{ duration: 1.05, delay: 0.1, ease: EASE }}
            >
              RADICAL
            </motion.div>
          </div>
          <div className="overflow-hidden">
            <motion.div
              className="font-display text-emerald-400 leading-none tracking-tight"
              style={{ fontSize: "clamp(3.5rem, 10vw, 12rem)" }}
              initial={{ y: "110%" }}
              whileInView={{ y: "0%" }}
              viewport={{ once: false }}
              transition={{ duration: 1.05, delay: 0.22, ease: EASE }}
            >
              PEACE.
            </motion.div>
          </div>

          <motion.p
            className="mt-6 font-sans text-sm text-neutral-500 max-w-xs leading-relaxed"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.85, delay: 0.6, ease: EASE }}
          >
            Mengubah rasa takut tertinggal menjadi kebahagiaan atas
            ketidaktahuan.
          </motion.p>

          {/* JOMO badge */}
          <motion.div
            className="mt-9 inline-flex items-center gap-3 border border-emerald-800/30 px-4 py-2"
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.65, delay: 1, ease: EASE }}
          >
            <span className="font-display text-sm text-emerald-400 tracking-widest">
              JOMO
            </span>
            <span className="h-3 w-px bg-emerald-800/50" />
            <span className="font-sans text-xs text-neutral-500">
              Joy Of Missing Out
            </span>
          </motion.div>
        </div>

        {/* Right: Emerald cards */}
        <div className="flex-1 flex flex-col gap-3">
          {CARDS.map((c, i) => (
            <motion.div
              key={c.id}
              className="group border border-emerald-900/25 bg-emerald-950/[0.1] p-5 transition-all duration-500 hover:bg-emerald-950/25 hover:border-emerald-800/40"
              initial={{ x: 52, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.75, delay: 0.28 + i * 0.14, ease: EASE }}
            >
              <div className="flex items-start gap-4">
                <span className="text-emerald-800/80 text-lg shrink-0 mt-0.5 group-hover:text-emerald-600 transition-colors duration-500">
                  {c.glyph}
                </span>
                <div>
                  <h3 className="font-display text-xl text-white tracking-wide mb-1.5">
                    {c.title}
                  </h3>
                  <p className="font-sans text-sm text-neutral-400 leading-relaxed">
                    {c.desc}
                  </p>
                  {c.source && (
                    <p className="font-mono text-[9px] text-emerald-900/50 mt-2 tracking-wider">
                      {c.source}
                    </p>
                  )}
                </div>
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
          href="https://www.psychologytoday.com/us/blog/happiness-is-state-mind/201807/jomo-the-joy-missing-out"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-[9px] text-neutral-800 tracking-wider hover:text-neutral-600 transition-colors"
        >
          ↗ PSYCHOLOGYTODAY.COM - THE-JOY-MISSING-OUT
        </a>
      </motion.div>
    </div>
  );
}
