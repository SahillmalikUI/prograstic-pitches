"use client";

import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

interface ScrollProgressProps {
  colorFrom?: string;
  colorTo?: string;
}

export function ScrollProgress({
  colorFrom = "#2563EB",
  colorTo = "#38BDF8",
}: ScrollProgressProps) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{
        scaleX,
        background: `linear-gradient(to right, ${colorFrom}, ${colorTo})`,
        transformOrigin: "0%",
      }}
      className="fixed top-0 left-0 right-0 h-1 z-50 shadow-md shadow-blue-500/20 pointer-events-none"
    />
  );
}
