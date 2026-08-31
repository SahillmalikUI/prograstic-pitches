"use client";

import React from "react";
import Image from "next/image";
import { AlertCircle, CheckCircle2, Sparkles, Activity, ShieldCheck } from "lucide-react";
import { IndustryVertical } from "@/data/verticals";

interface BevelMissingLoopSectionProps {
  vertical: IndustryVertical;
}

export function BevelMissingLoopSection({ vertical }: BevelMissingLoopSectionProps) {
  return (
    <section id="missing-loop" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-20 bg-[#080C15] text-white">
      {/* Header */}
      <div className="text-center space-y-4 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-xs sm:text-sm font-mono font-bold text-rose-400">
          <AlertCircle className="w-4 h-4 text-rose-400" />
          <span>HOSPITAL OPERATIONAL LEAKS</span>
        </div>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white font-display tracking-tight">
          The Missing Loops in High-Throughput Clinical Workflows
        </h2>
        <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-sans">
          Generic legacy hospital software forces senior doctors back to writing paper notes. Here are the bottlenecks paralyzing patient throughput — and the high-speed software engines we engineer to solve them.
        </p>
      </div>

      {/* Hospital Command Center High-Res Banner */}
      <div className="relative rounded-[36px] overflow-hidden border border-slate-800 shadow-2xl bg-slate-950 aspect-[21/9] w-full">
        <Image
          src="/mockups/hospital_feature.jpg"
          alt="Hospital Command Center & Surgical Floor"
          fill
          className="object-cover opacity-85 hover:opacity-100 transition-opacity duration-700"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080C15]/90 via-[#080C15]/30 to-transparent flex items-end p-6 sm:p-12">
          <div className="space-y-3 max-w-2xl text-white">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-mono font-semibold text-cyan-300">
              <Sparkles className="w-3.5 h-3.5 text-[#00F0FF]" />
              <span>Real-Time Biometric Clinical Telemetry</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-black font-display text-white">
              Single-Entry Data Pipeline & Live Ward Bed Matrices
            </h3>
          </div>
        </div>
      </div>

      {/* 3 Dark Biometric Missing Loop Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {vertical.missingLoops.map((loop, idx) => (
          <div
            key={idx}
            className="p-8 sm:p-10 rounded-[32px] bg-slate-900/80 border border-slate-800 dark-card-hover flex flex-col justify-between space-y-8 shadow-xl"
          >
            {/* The Problem */}
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-rose-400 bg-rose-500/10 px-3 py-1 rounded-full border border-rose-500/20">
                  Bottleneck 0{idx + 1}
                </span>
                <span className="text-xs font-mono text-slate-500">Critical Leak</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-display leading-snug">
                {loop.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
                {loop.problemDesc}
              </p>
            </div>

            {/* The Fix */}
            <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3.5">
              <div className="flex items-center gap-2 text-sm sm:text-base font-bold text-cyan-300 font-sans">
                <CheckCircle2 className="w-4 h-4 text-[#00F0FF] shrink-0" />
                <span>{loop.solutionTitle}</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
                {loop.solutionDesc}
              </p>

              <div className="pt-3 border-t border-slate-800 text-xs sm:text-sm font-bold font-mono text-[#00F0FF] flex items-center gap-2">
                <span>⚡ Impact:</span>
                <span>{loop.impact}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
