"use client";

import React from "react";
import { AlertCircle, CheckCircle2, ArrowRight, Zap, Layers } from "lucide-react";
import { IndustryVertical } from "@/data/verticals";

interface MissingLoopSectionProps {
  vertical: IndustryVertical;
}

export function MissingLoopSection({ vertical }: MissingLoopSectionProps) {
  return (
    <section id="missing-loop" className="py-20 px-4 sm:px-6 bg-slate-50 border-y border-slate-200">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-mono font-medium tracking-wide">
            <AlertCircle className="w-3.5 h-3.5" />
            OPERATIONAL BOTTLENECKS & CUSTOM SOFTWARE FIXES
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 font-display">
            The Missing Loops in Your Current Operational Stack
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Off-the-shelf templates and manual spreadsheets force your staff into repetitive busywork. We build custom systems that eliminate operational friction.
          </p>
        </div>

        {/* Missing Loop Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {vertical.missingLoops.map((item, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-white border border-slate-200 p-6 flex flex-col justify-between space-y-6 clean-card-hover"
            >
              {/* Problem */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-red-600 text-xs font-bold uppercase tracking-wider font-mono">
                  <span className="w-2 h-2 rounded-full bg-red-500" />
                  <span>The Operational Leak</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.problemDesc}
                </p>
              </div>

              {/* Solution */}
              <div
                className="p-4 rounded-2xl border space-y-2"
                style={{
                  backgroundColor: `${vertical.accentHex}08`,
                  borderColor: `${vertical.accentHex}25`,
                }}
              >
                <div
                  className="flex items-center gap-1.5 text-xs font-bold font-mono uppercase tracking-wider"
                  style={{ color: vertical.accentHex }}
                >
                  <Zap className="w-3.5 h-3.5 shrink-0" />
                  <span>What We Custom Build</span>
                </div>
                <h4 className="text-xs font-bold text-slate-900 leading-tight">
                  {item.solutionTitle}
                </h4>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  {item.solutionDesc}
                </p>
                <div className="pt-2 border-t border-slate-200/60 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700 font-mono">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>{item.impact}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
