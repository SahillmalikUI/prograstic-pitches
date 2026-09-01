"use client";

import React from "react";
import { motion } from "framer-motion";

interface BorderBeamProps {
  className?: string;
  size?: number;
  duration?: number;
  borderWidth?: number;
  colorFrom?: string;
  colorTo?: string;
  delay?: number;
}

export function BorderBeam({
  className = "",
  size = 250,
  duration = 12,
  borderWidth = 2,
  colorFrom = "#2563eb",
  colorTo = "#38bdf8",
  delay = 0,
}: BorderBeamProps) {
  return (
    <div
      style={
        {
          "--size": size,
          "--duration": duration,
          "--border-width": borderWidth,
          "--color-from": colorFrom,
          "--color-to": colorTo,
          "--delay": `-${delay}s`,
        } as React.CSSProperties
      }
      className={`pointer-events-none absolute inset-0 rounded-[inherit] border-[calc(var(--border-width)*1px)] border-transparent [mask-clip:padding-box,border-box] [mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)] ${className}`}
    >
      <motion.div
        animate={{
          offsetDistance: ["0%", "100%"],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration,
          delay,
        }}
        className="absolute aspect-square w-[calc(var(--size)*1px)] bg-gradient-to-l from-[var(--color-from)] via-[var(--color-to)] to-transparent"
        style={{
          offsetPath: `rect(0 auto auto 0 round calc(var(--size)*1px))`,
        }}
      />
    </div>
  );
}
