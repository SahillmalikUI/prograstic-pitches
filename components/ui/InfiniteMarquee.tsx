"use client";

import React from "react";
import { motion } from "framer-motion";

interface InfiniteMarqueeProps {
  items: { text: string; tag?: string; icon?: React.ReactNode }[];
  direction?: "left" | "right";
  speed?: number;
  className?: string;
}

export function InfiniteMarquee({
  items,
  direction = "left",
  speed = 25,
  className = "",
}: InfiniteMarqueeProps) {
  return (
    <div className={`overflow-hidden flex whitespace-nowrap mask-radial-fade ${className}`}>
      <motion.div
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed,
        }}
        className="flex gap-4 items-center shrink-0"
      >
        {/* Render items twice for seamless infinite loop */}
        {[...items, ...items].map((item, idx) => (
          <div
            key={idx}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-50 border border-slate-200/90 text-xs font-mono font-bold text-slate-800 shadow-sm hover:border-slate-400 transition-colors shrink-0"
          >
            {item.icon}
            <span>{item.text}</span>
            {item.tag && (
              <span className="text-[10px] text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-200 font-sans">
                {item.tag}
              </span>
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
