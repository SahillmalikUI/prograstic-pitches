"use client";

import React from "react";
import Image from "next/image";
import { AlertCircle, CheckCircle2, Sparkles, Heart } from "lucide-react";
import { IndustryVertical } from "@/data/verticals";

interface LuxuryMissingLoopSectionProps {
  vertical: IndustryVertical;
}

export function LuxuryMissingLoopSection({ vertical }: LuxuryMissingLoopSectionProps) {
  return (
    <section id="missing-loop" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-20 bg-[#FAF7F2]">
      {/* Section Header */}
      <div className="text-center space-y-4 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F3ECE0] border border-[#E2D5C3] text-xs sm:text-sm font-mono font-bold text-[#8C6B41]">
          <AlertCircle className="w-4 h-4 text-[#C8A97E]" />
          <span>CLINICAL OPERATIONAL FRICTION</span>
        </div>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-normal text-[#1C1917] font-serif-luxury tracking-tight">
          The Missing Loops in Aesthetic Practice Workflows
        </h2>
        <p className="text-base sm:text-xl text-[#57534E] max-w-3xl mx-auto leading-relaxed font-sans">
          Off-the-shelf salon software treats medical injectables like haircuts. Here are the real bottlenecks draining your clinic's revenue — and the bespoke software engines we engineer to fix them.
        </p>
      </div>

      {/* High-Resolution Aesthetics Clinical Suite Banner */}
      <div className="relative rounded-[36px] overflow-hidden border border-[#EAE3D9] shadow-2xl bg-[#1C1917] aspect-[21/9] w-full">
        <Image
          src="/mockups/aesthetics_ui.jpg"
          alt="Aesthetic Clinic Software Suite"
          fill
          className="object-cover opacity-90 hover:opacity-100 transition-opacity duration-700"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/85 via-[#1C1917]/25 to-transparent flex items-end p-6 sm:p-12">
          <div className="space-y-3 max-w-2xl text-[#FAF7F2]">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-mono font-semibold text-[#F0E8DC]">
              <Sparkles className="w-3.5 h-3.5 text-[#C8A97E]" />
              <span>Bespoke Luxury Software Architecture</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-normal font-serif-luxury text-[#FAF7F2]">
              Standardized Before/After Photo Timelines & Patient Consent Vaults
            </h3>
          </div>
        </div>
      </div>

      {/* 3 Luxury Missing Loop Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {vertical.missingLoops.map((loop, idx) => (
          <div
            key={idx}
            className="p-8 sm:p-10 rounded-[32px] bg-white border border-[#EAE3D9] luxury-card-hover flex flex-col justify-between space-y-8 shadow-sm"
          >
            {/* The Problem */}
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-4 border-b border-[#F0E8DC]">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#8C6B41] bg-[#F3ECE0] px-3 py-1 rounded-full border border-[#E2D5C3]">
                  Bottleneck 0{idx + 1}
                </span>
                <span className="text-xs font-mono text-[#A8A29E]">Revenue Leak</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-normal text-[#1C1917] font-serif-luxury leading-snug">
                {loop.title}
              </h3>
              <p className="text-sm sm:text-base text-[#57534E] leading-relaxed font-sans">
                {loop.problemDesc}
              </p>
            </div>

            {/* The Prograstic Fix */}
            <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#EAE3D9] space-y-3.5">
              <div className="flex items-center gap-2 text-sm sm:text-base font-bold text-[#1C1917] font-sans">
                <CheckCircle2 className="w-4 h-4 text-[#8C6B41] shrink-0" />
                <span>{loop.solutionTitle}</span>
              </div>
              <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed font-sans">
                {loop.solutionDesc}
              </p>

              <div className="pt-3 border-t border-[#EAE3D9] text-xs sm:text-sm font-bold font-mono text-[#8C6B41] flex items-center gap-2">
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
