"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, ShieldCheck, CheckCircle2, Sparkles, TrendingUp, Activity, Terminal } from "lucide-react";
import { IndustryVertical } from "@/data/verticals";

interface CleanHeroProps {
  vertical: IndustryVertical;
  onOpenScopeModal: () => void;
  children?: React.ReactNode;
}

export function CleanHero({ vertical, onOpenScopeModal, children }: CleanHeroProps) {
  return (
    <section className="relative pt-8 pb-16 px-4 sm:px-6 bg-white overflow-visible">
      {/* Soft Ambient Radial Blur (Zero Box Grid) */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full blur-[90px] pointer-events-none opacity-40"
        style={{
          background: `radial-gradient(circle, ${vertical.accentHex}40 0%, transparent 70%)`,
        }}
      />

      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        {/* Top Scramble & Telemetry Badges */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-4 text-xs font-mono">
          <div className="flex items-center gap-2">
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ backgroundColor: vertical.accentHex }}
            />
            <span className="tracking-widest uppercase font-bold text-slate-900">
              PROGRASTIC // {vertical.industryTag}
            </span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-500">BESPOKE OPERATING PLATFORM</span>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono text-slate-500">
            <span className="hidden sm:inline">ARCHITECTURE: DIRECT-TO-BUILDER</span>
            <span className="text-slate-300">•</span>
            <span className="text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
              14-DAY SPRINTS
            </span>
          </div>
        </div>

        {/* Hero Headline & Subtitle */}
        <div className="space-y-6 max-w-4xl">
          <div className="space-y-3">
            <div
              className="text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full inline-block border"
              style={{
                backgroundColor: `${vertical.accentHex}10`,
                color: vertical.accentHex,
                borderColor: `${vertical.accentHex}30`,
              }}
            >
              {vertical.name}
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-950 tracking-tight font-display leading-[1.05]">
              {vertical.headline}
            </h1>
          </div>

          <p className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-3xl">
            {vertical.heroDescription}
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
            <button
              onClick={onOpenScopeModal}
              className="px-8 py-4 rounded-full bg-slate-950 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all hover:scale-105 shadow-xl shadow-slate-950/15 flex items-center justify-center gap-2"
            >
              <span>Schedule 15-Min Scope Call</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#missing-loop"
              className="px-6 py-3.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs transition-colors flex items-center justify-center"
            >
              <span>Explore The Missing Loop</span>
            </a>
          </div>
        </div>

        {/* Dynamic Embedded Component or Window Frame */}
        {children && <div className="pt-4">{children}</div>}

        {/* Social Proof & Metrics */}
        <div className="pt-6 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs font-mono text-slate-600">
          <div className="space-y-0.5">
            <div className="text-slate-400">DEPLOYMENT SPEED</div>
            <div className="text-slate-900 font-bold text-sm">14-Day Sprints</div>
          </div>
          <div className="space-y-0.5">
            <div className="text-slate-400">DATA PRIVACY</div>
            <div className="text-slate-900 font-bold text-sm">100% Private Cloud</div>
          </div>
          <div className="space-y-0.5">
            <div className="text-slate-400">TEAM STRUCTURE</div>
            <div className="text-slate-900 font-bold text-sm">Zero Middlemen</div>
          </div>
          <div className="space-y-0.5">
            <div className="text-slate-400">LICENSING MODEL</div>
            <div className="text-slate-900 font-bold text-sm">Zero Monthly Tax</div>
          </div>
        </div>
      </div>
    </section>
  );
}
