"use client";

import { useRef, useState, useEffect } from "react";
import { SlideNav } from "@/components/SlideNav";
import { Slide01Hero } from "@/components/slides/Slide01Hero";
import { Slide02Digital } from "@/components/slides/Slide02Digital";
import { Slide03Dopamine } from "@/components/slides/Slide03Dopamine";
import { Slide04Withdrawal } from "@/components/slides/Slide04Withdrawal";
import { Slide05Cognitive } from "@/components/slides/Slide05Cognitive";
import { Slide06Resolution } from "@/components/slides/Slide06Resolution";
import { Slide07CTA } from "@/components/slides/Slide07CTA";

const SLIDES = [
  Slide01Hero,
  Slide02Digital,
  Slide03Dopamine,
  Slide04Withdrawal,
  Slide05Cognitive,
  Slide06Resolution,
  Slide07CTA,
];

export function PresentationClient() {
  const containerRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>(
    Array(SLIDES.length).fill(null)
  );
  const [active, setActive] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            const idx = slideRefs.current.findIndex(
              (el) => el === entry.target
            );
            if (idx !== -1) setActive(idx);
          }
        });
      },
      { root: container, threshold: 0.5 }
    );

    slideRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (index: number) => {
    slideRefs.current[index]?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main>
      <div ref={containerRef} className="scroll-container">
        {SLIDES.map((SlideComponent, i) => (
          <div
            key={i}
            ref={(el) => {
              slideRefs.current[i] = el;
            }}
            className="slide"
          >
            <SlideComponent />
          </div>
        ))}
      </div>
      <SlideNav total={SLIDES.length} active={active} onNavigate={scrollTo} />
    </main>
  );
}
