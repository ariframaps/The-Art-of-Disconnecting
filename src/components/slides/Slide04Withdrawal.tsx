"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const CARDS = [
  {
    id: "01",
    title: "The Anxiety Peak",
    desc: "Studi UPenn membuktikan 7 hari pertama kita 'log-out' memicu lonjakan kecemasan akut yang signifikan.",
    source: "Univ. of Pennsylvania",
  },
  {
    id: "02",
    title: "Neurological Hallucination",
    desc: "80% pekerja usia muda mengalami sensasi HP bergetar palsu akibat otak yang over-antisipatif terhadap notifikasi.",
    source: "BBC Research",
  },
  {
    id: "03",
    title: "Digital Boredom",
    desc: "Ketidakmampuan otak untuk menerima keheningan tanpa distraksi instan akibat rekalibrasi ambang toleransi.",
    source: "Guilford Journals 2018",
  },
];

// Simulated anxiety bar heights for days 1–7 (peaks early, then subsides)
const ANXIETY = [36, 52, 48, 38, 26, 16, 8];

export function Slide04Withdrawal() {
  return (
    <div className="relative w-full h-full bg-neutral-950 flex flex-col px-10 md:px-16 py-10 overflow-hidden select-none">
      {/* Blue atmosphere */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[320px] bg-blue-900/[0.08] rounded-full blur-[120px] pointer-events-none" />

      {/* Header */}
      <motion.div
        className="relative z-10 flex justify-between items-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        <span className="font-mono text-[10px] text-neutral-600 tracking-[0.25em] uppercase">
          04 / 07 - The Withdrawal
        </span>
        <span className="font-mono text-[10px] text-blue-900/70 tracking-widest uppercase">
          Recovery Phase
        </span>
      </motion.div>

      {/* Main */}
      <div className="relative z-10 flex-1 flex items-center gap-14">
        {/* Left anchor */}
        <div className="w-[40%] shrink-0">
          <div className="overflow-hidden">
            <motion.div
              className="font-display text-white leading-none tracking-tight"
              style={{ fontSize: "clamp(3rem, 9vw, 11rem)" }}
              initial={{ y: "110%" }}
              whileInView={{ y: "0%" }}
              viewport={{ once: false }}
              transition={{ duration: 1.05, delay: 0.1, ease: EASE }}
            >
              PHANTOM
            </motion.div>
          </div>
          <div className="overflow-hidden">
            <motion.div
              className="font-display text-blue-400 leading-none tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 8vw, 10rem)" }}
              initial={{ y: "110%" }}
              whileInView={{ y: "0%" }}
              viewport={{ once: false }}
              transition={{ duration: 1.05, delay: 0.22, ease: EASE }}
            >
              VIBRATION.
            </motion.div>
          </div>

          <motion.p
            className="mt-6 font-sans text-sm text-neutral-500 max-w-xs leading-relaxed"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.85, delay: 0.6, ease: EASE }}
          >
            Resistensi biologis dan mental yang muncul di fase awal pemutusan
            digital.
          </motion.p>

          {/* 7-day anxiety bar chart */}
          <motion.div
            className="mt-9"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7, delay: 0.9, ease: EASE }}
          >
            <p className="font-mono text-[8px] text-neutral-700 tracking-widest uppercase mb-3">
              Anxiety Level · Day 1–7
            </p>
            <div className="flex items-end gap-1.5">
              {ANXIETY.map((h, i) => (
                <div key={i} className="flex flex-col items-center gap-1.5">
                  <div
                    className="w-6 bg-neutral-900 overflow-hidden flex flex-col justify-end"
                    style={{ height: 56 }}
                  >
                    <motion.div
                      className="w-full bg-blue-500/40"
                      initial={{ height: 0 }}
                      whileInView={{ height: h }}
                      viewport={{ once: false }}
                      transition={{
                        duration: 0.7,
                        delay: 1 + i * 0.09,
                        ease: EASE,
                      }}
                    />
                  </div>
                  <span className="font-mono text-[8px] text-neutral-700">
                    D{i + 1}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right: Glass cards */}
        <div className="flex-1 flex flex-col gap-3">
          {CARDS.map((c, i) => (
            <motion.div
              key={c.id}
              className="relative border border-white/[0.05] p-5 overflow-hidden group transition-all duration-500 hover:border-blue-400/20"
              style={{
                background: "rgba(255,255,255,0.018)",
                backdropFilter: "blur(6px)",
              }}
              initial={{ x: 52, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.75, delay: 0.28 + i * 0.14, ease: EASE }}
              whileHover={{ backdropFilter: "blur(12px)" }}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/[0.04] transition-colors duration-500 pointer-events-none" />

              <div className="relative flex items-start gap-4">
                <span className="font-mono text-[9px] text-neutral-700 shrink-0 mt-[3px]">
                  [{c.id}]
                </span>
                <div>
                  <h3 className="font-display text-xl text-white tracking-wide mb-1.5">
                    {c.title}
                  </h3>
                  <p className="font-sans text-sm text-neutral-400 leading-relaxed">
                    {c.desc}
                  </p>
                  <p className="font-mono text-[9px] text-neutral-700 mt-2 tracking-wider">
                    {c.source}
                  </p>
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
          href="https://guilfordjournals.com/doi/10.1521/jscp.2018.37.10.751"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-[9px] text-neutral-800 tracking-wider hover:text-neutral-600 transition-colors"
        >
          ↗ GUILFORDJOURNALS.COM - JSCP.2018.37.10.751
        </a>
      </motion.div>
    </div>
  );
}
