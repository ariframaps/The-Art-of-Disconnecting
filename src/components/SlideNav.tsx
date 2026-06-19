"use client";

import { motion } from "framer-motion";

interface SlideNavProps {
  total: number;
  active: number;
  onNavigate: (index: number) => void;
}

const LABELS = [
  "The Manifesto",
  "The Digital Drift",
  "The Dopamine Engine",
  "The Withdrawal",
  "The Cognitive Toll",
  "The Resolution",
  "Take Control",
];

export function SlideNav({ total, active, onNavigate }: SlideNavProps) {
  return (
    <nav
      className="fixed right-7 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3"
      aria-label="Slide navigation"
    >
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          onClick={() => onNavigate(i)}
          className="group relative flex items-center justify-end gap-3"
          aria-label={`Go to slide: ${LABELS[i]}`}
        >
          <span className="font-mono text-[10px] text-neutral-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap tracking-wider">
            {LABELS[i]}
          </span>
          <motion.div
            className="rounded-full"
            animate={{
              width: i === active ? 20 : 5,
              height: 5,
              backgroundColor: i === active ? "#ffffff" : "#404040",
            }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          />
        </button>
      ))}
    </nav>
  );
}
