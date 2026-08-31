"use client";

import React from "react";
import Image from "next/image";
import { AlertCircle, CheckCircle2, Sparkles, Cpu, Wrench } from "lucide-react";
import { IndustryVertical } from "@/data/verticals";

interface IndustrialMissingLoopSectionProps {
  vertical: IndustryVertical;
}

export function IndustrialMissingLoopSection({ vertical }: IndustrialMissingLoopSectionProps) {
  return (
    <section id="missing-loop" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-20 bg-[#0F1117] text-white font-industrial">
      {/* Header */}
      <div className="text-center space-y-4 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF5500]/10 border border-[#FF5500]/30 text-xs sm:text-sm font-mono font-bold text-[#FF8540]">
          <AlertCircle className="w-4 h-4 text-[#FF5500]" />
          <span>PLANT OPERATIONAL INEFFICIENCIES</span>
        </div>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
          The Missing Loops in Factory Floor Operations
        </h2>
        <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-sans">
          Delayed paper job cards mean plant managers only discover scrap spikes 24 hours later. Here are the friction points slowing your plant — and the rugged software systems we build to resolve them.
        </p>
      </div>

      {/* Industrial Plant Floor Banner */}
      <div className="relative rounded-[36px] overflow-hidden border border-slate-800 shadow-2xl bg-slate-950 aspect-[21/9] w-full">
        <Image
          src="/mockups/manufacturing_feature.jpg"
          alt="Automated Smart Factory Assembly Floor"
          fill
          className="object-cover opacity-85 hover:opacity-100 transition-opacity duration-700"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F1117]/90 via-[#0F1117]/30 to-transparent flex items-end p-6 sm:p-12">
          <div className="space-y-3 max-w-2xl text-white">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-mono font-semibold text-[#FF8540]">
              <Cpu className="w-3.5 h-3.5 text-[#FF5500]" />
              <span>Real-Time OEE & Scrap Radar</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-black text-white">
              Rugged Shop Floor Touch Entry & Live Machine Status Tracking
            </h3>
          </div>
        </div>
      </div>

      {/* 3 Industrial Missing Loop Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {vertical.missingLoops.map((loop, idx) => (
          <div
            key={idx}
            className="p-8 sm:p-10 rounded-[32px] bg-slate-900 border border-slate-800 industrial-card-hover flex flex-col justify-between space-y-8 shadow-xl"
          >
            {/* The Problem */}
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#FF5500] bg-[#FF5500]/10 px-3 py-1 rounded-full border border-[#FF5500]/30">
                  Bottleneck 0{idx + 1}
                </span>
                <span className="text-xs font-mono text-slate-500">Downtime Risk</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                {loop.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
                {loop.problemDesc}
              </p>
            </div>

            {/* The Fix */}
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-3.5">
              <div className="flex items-center gap-2 text-sm sm:text-base font-bold text-[#FF8540] font-sans">
                <CheckCircle2 className="w-4 h-4 text-[#FF5500] shrink-0" />
                <span>{loop.solutionTitle}</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
                {loop.solutionDesc}
              </p>

              <div className="pt-3 border-t border-slate-800 text-xs sm:text-sm font-bold font-mono text-[#FF5500] flex items-center gap-2">
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
