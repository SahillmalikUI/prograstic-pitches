"use client";

import React from "react";
import Image from "next/image";
import { AlertCircle, CheckCircle2, ArrowRight, Zap, Layers, Sparkles } from "lucide-react";
import { IndustryVertical } from "@/data/verticals";

interface MissingLoopSectionProps {
  vertical: IndustryVertical;
}

export function MissingLoopSection({ vertical }: MissingLoopSectionProps) {
  return (
    <section id="missing-loop" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      {/* Section Header */}
      <div className="text-center space-y-4 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-50 border border-rose-100 text-xs sm:text-sm font-mono font-bold text-rose-700">
          <AlertCircle className="w-4 h-4" />
          <span>THE OPERATIONAL FRICTION</span>
        </div>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight font-display">
          The Missing Loops in Your Daily Workflow
        </h2>
        <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Generic SaaS tools force your team into rigid boxes. Here are the exact bottlenecks draining your team's hours — and the custom software systems we engineer to solve them.
        </p>
      </div>

      {/* High-Resolution Operational Feature Image Banner */}
      {vertical.featureImage && (
        <div className="relative rounded-[32px] overflow-hidden border border-slate-200 shadow-xl bg-slate-900 aspect-[21/9] w-full">
          <Image
            src={vertical.featureImage}
            alt={`${vertical.name} Operations Environment`}
            fill
            className="object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent flex items-end p-6 sm:p-10">
            <div className="space-y-2 max-w-2xl text-white">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-mono font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>Engineered For Real-World Scale</span>
              </div>
              <h3 className="text-xl sm:text-3xl font-extrabold font-display">
                Built to match how your team actually operates on the floor.
              </h3>
            </div>
          </div>
        </div>
      )}

      {/* The 3 Missing Loop Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {vertical.missingLoops.map((loop, idx) => (
          <div
            key={idx}
            className="p-8 sm:p-10 rounded-[32px] bg-slate-50 border border-slate-200/90 clean-card-hover flex flex-col justify-between space-y-8 shadow-sm"
          >
            {/* The Leak / Problem */}
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
                  Bottleneck #{idx + 1}
                </span>
                <span className="text-xs font-mono text-slate-400 font-semibold">Daily Loss</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display leading-snug">
                {loop.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {loop.problemDesc}
              </p>
            </div>

            {/* The Prograstic Fix */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3.5 shadow-sm">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                <CheckCircle2
                  className="w-4 h-4 shrink-0"
                  style={{ color: vertical.accentHex }}
                />
                <span>{loop.solutionTitle}</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {loop.solutionDesc}
              </p>

              <div
                className="pt-3 border-t border-slate-100 text-xs sm:text-sm font-bold font-mono flex items-center gap-2"
                style={{ color: vertical.accentHex }}
              >
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
