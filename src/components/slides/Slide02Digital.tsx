"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const METRICS = [
  {
    stat: "3.5",
    unit: "Jam / Hari",
    desc: "Rata-rata waktu harian orang Indonesia habis di media sosial",
    accent: true,
  },
  {
    stat: "1,200+",
    unit: "Jam / Tahun",
    desc: "Total waktu terbuang, setara 50 hari penuh tanpa tidur",
    accent: true,
  },
  {
    stat: "∞",
    unit: "Opportunity Cost",
    desc: "Cukup untuk menguasai 2 bahasa baru atau menyelesaikan puluhan proyek sampingan",
    accent: false,
  },
];

export function Slide02Digital() {
  return (
    <div className="relative w-full h-full bg-neutral-950 flex flex-col lg:flex-row px-4 sm:px-6 md:px-10 lg:px-16 py-6 sm:py-8 md:py-10 overflow-hidden select-none gap-6 md:gap-8 lg:gap-10">
      {/* Amber atmosphere */}
      <div className="absolute -left-40 top-1/2 -translate-y-1/2 w-[560px] h-[560px] bg-amber-500/[0.04] rounded-full blur-[120px] pointer-events-none" />

      {/* Left: Anchor text */}
      <div className="relative z-10 flex flex-col justify-center w-full lg:w-1/2">
        <motion.span
          className="font-mono text-[8px] sm:text-[9px] md:text-[10px] text-neutral-600 tracking-[0.2em] sm:tracking-[0.25em] uppercase mb-4 md:mb-6"
          initial={{ opacity: 0, y: -14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          02 / 07 - The Digital Drift
        </motion.span>

        <div>
          <div className="overflow-hidden">
            <motion.div
              className="font-display text-white leading-none tracking-tight"
              style={{ fontSize: "clamp(3rem, 10vw, 17rem)" }}
              initial={{ y: "110%" }}
              whileInView={{ y: "0%" }}
              viewport={{ once: false }}
              transition={{ duration: 1.05, delay: 0.1, ease: EASE }}
            >
              50 DAYS
            </motion.div>
          </div>
          <div className="overflow-hidden">
            <motion.div
              className="font-display text-amber-400 leading-none tracking-tight"
              style={{ fontSize: "clamp(2rem, 7vw, 11rem)" }}
              initial={{ y: "110%" }}
              whileInView={{ y: "0%" }}
              viewport={{ once: false }}
              transition={{ duration: 1.05, delay: 0.22, ease: EASE }}
            >
              / YEAR.
            </motion.div>
          </div>

          <motion.p
            className="mt-4 sm:mt-6 md:mt-6 font-sans text-xs sm:text-sm text-neutral-500 max-w-xs leading-relaxed"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.85, delay: 0.55, ease: EASE }}
          >
            Data konsumsi digital yang menguap tanpa kita sadari.
          </motion.p>
        </div>

        <motion.a
          href="https://datareportal.com/reports/digital-2025-indonesia"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-[8px] sm:text-[9px] text-neutral-700 tracking-wider hover:text-neutral-500 transition-colors mt-4 sm:mt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1, delay: 1.1, ease: EASE }}
        >
          ↗ DATAREPORTAL.COM / DIGITAL-2025-INDONESIA
        </motion.a>
        <motion.a
            href="https://indd.adobe.com/view/5355fd83-5476-4a1e-a611-80d786a600d7?allowFullscreen=true"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[8px] sm:text-[9px] text-neutral-700 tracking-wider hover:text-neutral-500 transition-colors mt-1.5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1, delay: 1.1, ease: EASE }}
        >
          ↗ WE ARE SOCIAL
        </motion.a>
      </div>

      {/* Right: Metric cards */}
      <div className="relative z-10 flex-1 flex flex-col justify-center gap-3 sm:gap-4 w-full lg:w-1/2">
        {METRICS.map((m, i) => (
          <motion.div
            key={i}
            className={`group border p-4 sm:p-5 md:p-6 transition-all duration-500 ${
              m.accent
                ? "border-amber-400/15 hover:border-amber-400/35 hover:bg-amber-400/[0.04]"
                : "border-neutral-800/60 hover:border-neutral-600 hover:bg-white/[0.02]"
            }`}
            initial={{ x: 56, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.75, delay: 0.28 + i * 0.14, ease: EASE }}
            whileHover={{ x: -3 }}
          >
            <div className="flex items-baseline gap-2 sm:gap-3 mb-2">
              <span
                className={`font-display leading-none text-3xl sm:text-4xl md:text-5xl ${
                  m.accent ? "text-amber-400" : "text-white"
                }`}
              >
                {m.stat}
              </span>
              <span
                className={`font-mono text-[8px] sm:text-[9px] md:text-[10px] tracking-widest uppercase ${
                  m.accent ? "text-amber-700" : "text-neutral-500"
                }`}
              >
                {m.unit}
              </span>
            </div>
            <p className="font-sans text-xs sm:text-sm text-neutral-400 leading-relaxed">
              {m.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
