"use client";

import React from "react";
import { ArrowRight, Terminal, CheckCircle2, ShieldCheck, Zap, Factory } from "lucide-react";

interface CfiCtaSectionProps {
  onOpenScopeModal: () => void;
}

export function CfiCtaSection({ onOpenScopeModal }: CfiCtaSectionProps) {
  return (
    <section className="py-24 sm:py-36 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-[#0D0F14] text-white">
      <div className="relative rounded-[40px] sm:rounded-[48px] bg-gradient-to-b from-[#161B24] to-[#10131A] border border-white/15 p-8 sm:p-16 text-center space-y-8 shadow-2xl overflow-hidden">
        {/* Amber Safety Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="space-y-4 max-w-3xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono font-bold text-amber-400">
            <Factory className="w-3.5 h-3.5" />
            <span>15-MINUTE FACTORY DISCOVERY CALL</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white font-display tracking-tight uppercase leading-tight">
            Build Your Plant’s Custom Operating Engine In 14 Days.
          </h2>

          <p className="text-base sm:text-xl text-slate-400 font-sans leading-relaxed">
            Direct access to senior software architects. We scope your machines, assembly lines, and warehouse dispatch on day 1.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10 pt-2">
          <button
            onClick={onOpenScopeModal}
            className="w-full sm:w-auto px-10 py-4 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm sm:text-base uppercase tracking-wider transition-all hover:scale-105 shadow-xl shadow-amber-500/20 flex items-center justify-center gap-3"
          >
            <span>Schedule 15-Min Plant Scope</span>
            <ArrowRight className="w-4 h-4 text-slate-950" />
          </button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs sm:text-sm font-mono text-slate-400 relative z-10">
          <span className="flex items-center gap-2 text-white">
            <CheckCircle2 className="w-4 h-4 text-amber-400" />
            Zero Per-User Monthly Tax
          </span>
          <span className="text-white/20">•</span>
          <span className="flex items-center gap-2 text-white">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            100% On-Premise / Private Cloud
          </span>
          <span className="text-white/20">•</span>
          <span>14-Day Delivery Sprints</span>
        </div>
      </div>
    </section>
  );
}
