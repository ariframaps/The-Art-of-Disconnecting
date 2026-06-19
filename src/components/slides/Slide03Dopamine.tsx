"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const POINTS = [
  {
    id: "01",
    title: "Variable Reward System",
    desc: "Otak dipicu seperti mesin judi; ketidakpastian konten baru memicu pelepasan dopamin setiap kali kita scroll layar.",
  },
  {
    id: "02",
    title: "Dr. Anna Lembke - Stanford",
    desc: "Otak manusia secara biologis tidak siap menghadapi suplai stimulus tanpa batas di ujung jari.",
    source: "SITN Harvard, 2018",
  },
  {
    id: "03",
    title: "The Infinite Scroll",
    desc: "Fitur tanpa batas bawah yang melumpuhkan rem alami psikologis manusia untuk berhenti dan beristirahat.",
  },
];

export function Slide03Dopamine() {
  return (
    <div className="relative w-full h-full bg-neutral-950 flex flex-col px-10 md:px-16 py-10 overflow-hidden select-none">
      {/* Crimson tint overlay */}
      <div className="absolute inset-0 bg-red-950/[0.18] pointer-events-none" />
      {/* Red radial glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-900/20 rounded-full blur-[110px] pointer-events-none" />

      {/* Header */}
      <motion.div
        className="relative z-10 flex justify-between items-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        <span className="font-mono text-[10px] text-red-950 tracking-[0.25em] uppercase">
          03 / 07 - The Dopamine Engine
        </span>
        <span className="font-mono text-[10px] text-red-900/60 tracking-widest">
          ● DANGER ZONE
        </span>
      </motion.div>

      {/* Main layout */}
      <div className="relative z-10 flex-1 flex items-center gap-14">
        {/* Left anchor */}
        <div className="w-[42%] shrink-0">
          <div className="overflow-hidden">
            <motion.div
              className="font-display text-white leading-none tracking-tight"
              style={{ fontSize: "clamp(4rem, 11vw, 14rem)" }}
              initial={{ y: "110%" }}
              whileInView={{ y: "0%" }}
              viewport={{ once: false }}
              transition={{ duration: 1.05, delay: 0.1, ease: EASE }}
            >
              SLOT
            </motion.div>
          </div>
          <div className="overflow-hidden">
            <motion.div
              className="font-display text-red-500 leading-none tracking-tight"
              style={{ fontSize: "clamp(3.5rem, 10vw, 13rem)" }}
              initial={{ y: "110%" }}
              whileInView={{ y: "0%" }}
              viewport={{ once: false }}
              transition={{ duration: 1.05, delay: 0.22, ease: EASE }}
            >
              MACHINE.
            </motion.div>
          </div>

          <motion.p
            className="mt-7 font-sans text-sm text-neutral-500 max-w-xs leading-relaxed"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.85, delay: 0.6, ease: EASE }}
          >
            Sains di balik adiksi digital yang dirancang secara sengaja oleh
            algoritma.
          </motion.p>
        </div>

        {/* Right: Matrix grid */}
        <div className="flex-1 flex flex-col gap-3">
          {POINTS.map((p, i) => (
            <motion.div
              key={p.id}
              className="group border border-red-900/25 bg-red-950/[0.12] p-5 transition-all duration-500 hover:bg-red-950/25 hover:border-red-800/50"
              initial={{ x: 52, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.75, delay: 0.28 + i * 0.14, ease: EASE }}
            >
              <div className="flex items-start gap-4">
                <span className="font-mono text-[9px] text-red-900/70 shrink-0 mt-[3px]">
                  [{p.id}]
                </span>
                <div>
                  <h3 className="font-display text-xl text-white tracking-wide mb-1.5">
                    {p.title}
                  </h3>
                  <p className="font-sans text-sm text-neutral-400 leading-relaxed">
                    {p.desc}
                  </p>
                  {p.source && (
                    <p className="font-mono text-[9px] text-red-900/50 mt-2 tracking-wider">
                      {p.source}
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
        transition={{ duration: 1, delay: 1, ease: EASE }}
      >
        <a
          href="https://sitn.hms.harvard.edu/flash/2018/dopamine-smartphones-battle-time/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-[9px] text-neutral-800 tracking-wider hover:text-neutral-600 transition-colors"
        >
          ↗ SITN.HMS.HARVARD.EDU - DOPAMINE-SMARTPHONES-BATTLE-TIME
        </a>
      </motion.div>
    </div>
  );
}
