"use client";

import React from "react";
import { motion } from "framer-motion";

interface LiveEcgWaveProps {
  color?: string;
  height?: number;
  className?: string;
}

export function LiveEcgWave({ color = "#2563EB", height = 40, className = "" }: LiveEcgWaveProps) {
  // SVG path for a rhythmic ECG QRS complex heartbeat wave
  const pathD = "M0,20 L40,20 L50,8 L58,34 L66,2 L74,26 L80,20 L130,20 L140,8 L148,34 L156,2 L164,26 L170,20 L240,20";

  return (
    <div className={`relative overflow-hidden flex items-center ${className}`} style={{ height }}>
      <svg
        viewBox="0 0 240 40"
        className="w-full h-full preserve-3d"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background Faint Guide Line */}
        <path
          d={pathD}
          stroke={color}
          strokeWidth="1.5"
          strokeOpacity="0.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Animated Bright Flowing Wave */}
        <motion.path
          d={pathD}
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, pathOffset: 0 }}
          animate={{
            pathLength: [0.2, 0.4, 0.2],
            pathOffset: [0, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 2.2,
            ease: "linear",
          }}
        />
      </svg>
    </div>
  );
}
