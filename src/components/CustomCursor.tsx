"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  const dotX = useSpring(mouseX, { damping: 35, stiffness: 600, mass: 0.1 });
  const dotY = useSpring(mouseY, { damping: 35, stiffness: 600, mass: 0.1 });

  const ringX = useSpring(mouseX, { damping: 18, stiffness: 120, mass: 0.6 });
  const ringY = useSpring(mouseY, { damping: 18, stiffness: 120, mass: 0.6 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Dot - snappy, mix-blend creates color inversion on light elements */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference rounded-full bg-white"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          width: 10,
          height: 10,
        }}
      />
      {/* Ring - lagged, subtle */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full border border-white/20"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          width: 44,
          height: 44,
        }}
      />
    </>
  );
}
