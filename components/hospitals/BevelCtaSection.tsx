"use client";

import React from "react";
import { ArrowRight, Terminal, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";

interface BevelCtaSectionProps {
  onOpenScopeModal: () => void;
}

export function BevelCtaSection({ onOpenScopeModal }: BevelCtaSectionProps) {
  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="relative rounded-[40px] sm:rounded-[48px] bg-gradient-to-b from-white/[0.08] via-white/[0.03] to-black/80 border border-white/15 p-8 sm:p-16 text-center space-y-8 backdrop-blur-2xl shadow-[0_30px_100px_rgba(0,240,255,0.1)] overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#00F0FF]/15 rounded-full blur-[100px] pointer-events-none" />

        <div className="space-y-4 max-w-3xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono font-bold text-cyan-300">
            <Sparkles className="w-3.5 h-3.5 text-[#00F0FF]" />
            <span>15-MINUTE ARCHITECTURAL SCOPE CALL</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white font-display tracking-tight leading-tight">
            Build Your Hospital's Custom Operating System In 14 Days.
          </h2>

          <p className="text-base sm:text-xl text-slate-400 font-sans leading-relaxed">
            Direct access to senior software architects. We scope your wards, doctors, and diagnostic workflows on day 1.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10 pt-2">
          <button
            onClick={onOpenScopeModal}
            className="w-full sm:w-auto px-10 py-4 rounded-full bg-white hover:bg-slate-100 text-slate-950 font-black text-sm sm:text-base uppercase tracking-wider transition-all hover:scale-105 shadow-2xl shadow-white/20 flex items-center justify-center gap-3"
          >
            <span>Schedule 15-Min Scope Call</span>
            <ArrowRight className="w-5 h-5 text-slate-950" />
          </button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs sm:text-sm font-mono text-slate-400 relative z-10">
          <span className="flex items-center gap-2 text-cyan-300">
            <CheckCircle2 className="w-4 h-4 text-[#00F0FF]" />
            Zero-Lockin Private Cloud
          </span>
          <span className="text-slate-700">•</span>
          <span className="flex items-center gap-2 text-emerald-400">
            <ShieldCheck className="w-4 h-4 text-[#10B981]" />
            ABDM & HIPAA Level-3
          </span>
          <span className="text-slate-700">•</span>
          <span>14-Day Delivery Sprints</span>
        </div>
      </div>
    </section>
  );
}
