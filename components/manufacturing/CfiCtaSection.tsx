"use client";

import React from "react";
import { ArrowRight, Terminal, CheckCircle2, ShieldCheck, Zap, Factory, Sparkles } from "lucide-react";

interface CfiCtaSectionProps {
  onOpenScopeModal: () => void;
}

export function CfiCtaSection({ onOpenScopeModal }: CfiCtaSectionProps) {
  return (
    <section className="py-24 sm:py-36 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white text-slate-900">
      <div className="relative rounded-[40px] sm:rounded-[48px] bg-gradient-to-b from-[#FFF7ED] via-[#FFEDD5]/40 to-slate-50 border border-slate-200/90 p-8 sm:p-16 text-center space-y-8 shadow-xl overflow-hidden">
        {/* Soft Warm Aurora Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-gradient-to-r from-orange-200/40 via-amber-200/40 to-yellow-100/40 rounded-full blur-[80px] pointer-events-none" />

        <div className="space-y-4 max-w-3xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-mono font-bold text-slate-800 shadow-sm">
            <Factory className="w-3.5 h-3.5 text-orange-600" />
            <span>15-MINUTE FACTORY ARCHITECTURAL DISCOVERY</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 font-display tracking-tight uppercase leading-tight">
            Build Your Plant’s Custom Operating Engine In 14 Days.
          </h2>

          <p className="text-base sm:text-xl text-slate-600 font-sans leading-relaxed">
            Direct access to senior software architects. We scope your machines, assembly lines, and warehouse dispatch on day 1.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10 pt-2">
          <button
            onClick={onOpenScopeModal}
            className="w-full sm:w-auto px-10 py-4 rounded-full bg-slate-950 hover:bg-slate-800 text-white font-bold text-sm sm:text-base uppercase tracking-wider transition-all hover:scale-105 shadow-xl shadow-slate-950/15 flex items-center justify-center gap-3"
          >
            <span>Schedule 15-Min Plant Scope</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs sm:text-sm font-mono text-slate-600 relative z-10">
          <span className="flex items-center gap-2 text-slate-900 font-bold">
            <CheckCircle2 className="w-4 h-4 text-orange-600" />
            Zero Per-User Monthly Tax
          </span>
          <span className="text-slate-300">•</span>
          <span className="flex items-center gap-2 text-slate-900 font-bold">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            100% On-Premise / Private Cloud
          </span>
          <span className="text-slate-300">•</span>
          <span>14-Day Delivery Sprints</span>
        </div>
      </div>
    </section>
  );
}
