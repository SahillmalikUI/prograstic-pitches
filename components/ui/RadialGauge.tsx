"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

interface RadialGaugeProps {
  value: number; // 0 to 100
  size?: number;
  strokeWidth?: number;
  color?: string;
  bgColor?: string;
  label?: string;
  suffix?: string;
  className?: string;
}

export function RadialGauge({
  value,
  size = 120,
  strokeWidth = 10,
  color = "#2563EB",
  bgColor = "#E2E8F0",
  label = "Clearance",
  suffix = "%",
  className = "",
}: RadialGaugeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (value / 100) * circumference;

  return (
    <div ref={ref} className={`relative flex flex-col items-center justify-center ${className}`} style={{ width: size, height: size }}>
      <svg width={size} height={size} className="rotate-[-90deg] origin-center">
        {/* Background Track Circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={bgColor}
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
        />

        {/* Animated Progress Circle */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={isInView ? { strokeDashoffset } : { strokeDashoffset: circumference }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          strokeLinecap="round"
        />
      </svg>

      {/* Center Value */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <div className="text-xl sm:text-2xl font-black font-display text-slate-950 tracking-tight">
          <AnimatedCounter value={value} suffix={suffix} decimals={value % 1 !== 0 ? 1 : 0} />
        </div>
        {label && <div className="text-[9px] font-mono text-slate-400 font-bold uppercase">{label}</div>}
      </div>
    </div>
  );
}
