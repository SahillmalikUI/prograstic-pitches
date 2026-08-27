"use client";

import React from "react";
import { ArrowRight, ShieldCheck, Terminal, Cpu } from "lucide-react";
import { IndustryVertical } from "@/data/verticals";

interface CleanHeroProps {
  vertical: IndustryVertical;
  onOpenScopeModal: () => void;
}

export function CleanHero({ vertical, onOpenScopeModal }: CleanHeroProps) {
  return (
    <section className={`relative pt-12 pb-16 px-4 sm:px-6 overflow-hidden bg-white ${vertical.heroGlowClass}`}>
      {/* Subtle Prograstic Grid Background */}
      <div className="absolute inset-0 bg-grid-prograstic opacity-70 pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-10 relative z-10">
        {/* Top Pill Badge */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-[11px] font-mono font-medium text-slate-700 tracking-wider shadow-sm">
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ backgroundColor: vertical.accentHex }}
            />
            <span>{vertical.badge}</span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-500">Prograstic Software Studio</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight font-display leading-[1.08]">
            {vertical.headline}{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(135deg, ${vertical.accentHex}, #4F46E5, #0D9488)`,
              }}
            >
              {vertical.heroHighlight}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {vertical.heroDescription}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
            <button
              onClick={onOpenScopeModal}
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs uppercase tracking-wider transition-all hover:scale-105 shadow-lg shadow-slate-900/10 flex items-center justify-center gap-2"
            >
              <span>Schedule 15-Min Scope Call</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#missing-loop"
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs transition-colors flex items-center justify-center"
            >
              <span>Explore The Missing Loop</span>
            </a>
          </div>

          <div className="flex items-center justify-center gap-6 pt-2 text-xs font-mono text-slate-500">
            <span>Direct Access to Senior Engineers</span>
            <span className="text-slate-300">•</span>
            <span>Zero Account Manager Bloat</span>
            <span className="text-slate-300">•</span>
            <span>14-Day Delivery Sprints</span>
          </div>
        </div>

        {/* 4-Metric Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-slate-200">
          {vertical.statMetrics.map((m, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
              <div
                className="text-2xl sm:text-3xl font-extrabold font-display"
                style={{ color: vertical.accentHex }}
              >
                {m.value}
              </div>
              <div className="text-xs font-bold text-slate-900">{m.label}</div>
              <div className="text-[11px] text-slate-500">{m.sublabel}</div>
            </div>
          ))}
        </div>

        {/* Tech Stack Marquee Pill Bar */}
        <div className="pt-2 border-t border-slate-200/60 flex items-center justify-center gap-2 flex-wrap text-xs font-mono text-slate-500">
          <span className="text-slate-400 font-semibold uppercase tracking-wider text-[10px] mr-2">Built With:</span>
          {vertical.techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 text-[11px] shadow-sm flex items-center gap-1.5"
            >
              <span className="w-1 h-1 rounded-full bg-indigo-500" />
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
