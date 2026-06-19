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
    title: "Digital Sabbath",
    desc: "Coba mulai 24 jam penuh tanpa media sosial (Digital Sabbath) di weeknd ini.",
  },
];

export function Slide07CTA() {
  return (
    <div className="relative w-full h-full bg-neutral-950 flex flex-col px-10 md:px-16 py-10 overflow-hidden select-none">
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
        className="relative z-10 flex justify-between items-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        <span className="font-mono text-[10px] text-neutral-600 tracking-[0.25em] uppercase">
          07 / 07 - The Architecture of Contrarian
        </span>
        <span className="font-mono text-[10px] text-white/20 tracking-widest uppercase">
          Final Protocol
        </span>
      </motion.div>

      {/* Main */}
      <div className="relative z-10 flex-1 flex items-center gap-16">
        {/* Left anchor */}
        <div className="w-[36%] shrink-0">
          <div className="overflow-hidden">
            <motion.div
              className="font-display text-white leading-none tracking-tight"
              style={{ fontSize: "clamp(4.5rem, 13vw, 15rem)" }}
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
              style={{ fontSize: "clamp(4rem, 12vw, 14rem)" }}
              initial={{ y: "110%" }}
              whileInView={{ y: "0%" }}
              viewport={{ once: false }}
              transition={{ duration: 1.05, delay: 0.2, ease: EASE }}
            >
              CONTROL.
            </motion.div>
          </div>

          <motion.p
            className="mt-6 font-sans text-sm text-neutral-500 max-w-xs leading-relaxed"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.85, delay: 0.6, ease: EASE }}
          >
            Tiga protokol fundamental untuk mengambil kembali kedaulatan waktu LAGI!!.
          </motion.p>

          <motion.div
            className="mt-10 flex items-center gap-2 font-mono text-[10px] text-neutral-700 tracking-widest uppercase group"
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
        <div className="flex-1 flex flex-col">
          {PROTOCOLS.map((p, i) => (
            <motion.div
              key={p.num}
              className="group border-t border-neutral-900 py-5 flex items-start gap-7 hover:border-neutral-700/60 transition-colors duration-300"
              initial={{ x: 52, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.75, delay: 0.28 + i * 0.14, ease: EASE }}
              whileHover={{ x: 6 }}
            >
              {/* Protocol number - huge, faded */}
              <motion.span
                className="font-display leading-none text-neutral-900 group-hover:text-neutral-800 transition-colors duration-400 shrink-0 w-16"
                style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
              >
                {p.num}
              </motion.span>

              <div className="pt-1">
                <h3 className="font-display text-2xl text-white tracking-wide mb-1.5">
                  PROTOKOL {p.num}: {p.title.toUpperCase()}
                </h3>
                <p className="font-sans text-sm text-neutral-400 leading-relaxed max-w-sm">
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
        className="relative z-10 flex justify-between items-end"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.85, delay: 1, ease: EASE }}
      >
        <span
          className="font-display text-neutral-900 leading-none"
          style={{ fontSize: "clamp(2.5rem, 6vw, 6rem)" }}
        >
          JOMO
        </span>
        <div className="font-mono text-[9px] text-right text-neutral-700 tracking-widest">
          <div>THE ART OF DISCONNECTING</div>
          <div className="text-neutral-800 mt-0.5">ILLIYIN SESSION × 2026</div>
        </div>
      </motion.div>
    </div>
  );
}
