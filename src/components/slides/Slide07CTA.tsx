"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const PROTOCOLS = [
  {
    num: "01",
    title: "Amputasi Notifikasi",
    desc: "Amputasi total seluruh notifikasi aplikasi non-esensial selama jam produktif.",
  },
  {
    num: "02",
    title: "Sembunyikan Ikon",
    desc: "Sembunyikan ikon aplikasi adiktif ke folder.",
  },
  {
    num: "03",
    title: "Digital Rawr",
    desc: "Coba mulai 24 jam penuh tanpa media sosial di weeknd ini.",
  },
];

export function Slide07CTA() {
  return (
    <div className="relative w-full h-full bg-neutral-950 flex flex-col px-4 sm:px-6 md:px-10 lg:px-16 py-6 sm:py-8 md:py-10 overflow-hidden select-none gap-6 md:gap-8">
      {/* Top sweep line */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px bg-white/10 z-20"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: false }}
        style={{ transformOrigin: "left" }}
        transition={{ duration: 1.6, ease: EASE }}
      />

      {/* Faint center glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(255,255,255,0.015),transparent_65%)] pointer-events-none" />

      {/* Header */}
      <motion.div
        className="relative z-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        <span className="font-mono text-[8px] sm:text-[9px] md:text-[10px] text-neutral-600 tracking-[0.2em] sm:tracking-[0.25em] uppercase">
          07 / 07 - The Architecture of Contrarian
        </span>
        <span className="font-mono text-[8px] sm:text-[9px] md:text-[10px] text-white/20 tracking-widest uppercase">
          Final Protocol
        </span>
      </motion.div>

      {/* Main */}
      <div className="relative z-10 flex-1 flex flex-col lg:flex-row items-start lg:items-center gap-6 md:gap-8 lg:gap-12">
        {/* Left anchor */}
        <div className="w-full lg:w-1/3 flex flex-col justify-start lg:justify-center">
          <div className="overflow-hidden">
            <motion.div
              className="font-display text-white leading-none tracking-tight"
              style={{ fontSize: "clamp(3rem, 10vw, 15rem)" }}
              initial={{ y: "110%" }}
              whileInView={{ y: "0%" }}
              viewport={{ once: false }}
              transition={{ duration: 1.05, delay: 0.1, ease: EASE }}
            >
              TAKE
            </motion.div>
          </div>
          <div className="overflow-hidden">
            <motion.div
              className="font-display text-white leading-none tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 8vw, 14rem)" }}
              initial={{ y: "110%" }}
              whileInView={{ y: "0%" }}
              viewport={{ once: false }}
              transition={{ duration: 1.05, delay: 0.2, ease: EASE }}
            >
              CONTROL.
            </motion.div>
          </div>

          <motion.p
            className="mt-4 sm:mt-6 md:mt-6 font-sans text-xs sm:text-sm text-neutral-500 max-w-xs leading-relaxed"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.85, delay: 0.6, ease: EASE }}
          >
            Tiga protokol fundamental untuk mengambil kembali kedaulatan waktu LAGI!!.
          </motion.p>

          <motion.div
            className="mt-6 sm:mt-8 md:mt-10 flex items-center gap-2 font-mono text-[8px] sm:text-[9px] md:text-[10px] text-neutral-700 tracking-widest uppercase group"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 1.2, ease: EASE }}
          >
            <span>Start Today</span>
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              →
            </motion.span>
          </motion.div>
        </div>

        {/* Right: Protocol list */}
        <div className="w-full lg:w-2/3 flex flex-col">
          {PROTOCOLS.map((p, i) => (
            <motion.div
              key={p.num}
              className="group border-t border-neutral-900 py-4 sm:py-5 md:py-5 flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4 md:gap-6 lg:gap-7 hover:border-neutral-700/60 transition-colors duration-300"
              initial={{ x: 52, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.75, delay: 0.28 + i * 0.14, ease: EASE }}
              whileHover={{ x: 6 }}
            >
              {/* Protocol number - huge, faded */}
              <motion.span
                className="font-display leading-none text-neutral-900 group-hover:text-neutral-800 transition-colors duration-400 shrink-0"
                style={{ fontSize: "clamp(2rem, 5vw, 5rem)" }}
              >
                {p.num}
              </motion.span>

              <div className="pt-0 sm:pt-1 min-w-0 flex-1">
                <h3 className="font-display text-base sm:text-lg md:text-xl lg:text-2xl text-white tracking-wide mb-1 sm:mb-1.5">
                  PROTOKOL {p.num}: {p.title.toUpperCase()}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-sm">
                  {p.desc}
                </p>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-neutral-900" />
        </div>
      </div>

      {/* Footer */}
      <motion.div
        className="relative z-10 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-6"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.85, delay: 1, ease: EASE }}
      >
        <span
          className="font-display text-neutral-900 leading-none"
          style={{ fontSize: "clamp(2rem, 8vw, 6rem)" }}
        >
          JOMO
        </span>
        <div className="font-mono text-[7px] sm:text-[8px] md:text-[9px] text-right text-neutral-700 tracking-widest">
          <div>THE ART OF DISCONNECTING</div>
          <div className="text-neutral-800 mt-0.5">ILLIYIN SHARING SESSION × JUNE 2026</div>
        </div>
      </motion.div>
    </div>
  );
}
