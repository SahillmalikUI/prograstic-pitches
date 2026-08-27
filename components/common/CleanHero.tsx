"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, ShieldCheck, CheckCircle2, Sparkles, TrendingUp, Activity, Terminal } from "lucide-react";
import { IndustryVertical } from "@/data/verticals";
import { AppWindowFrame } from "@/components/common/AppWindowFrame";

interface CleanHeroProps {
  vertical: IndustryVertical;
  onOpenScopeModal: () => void;
  children?: React.ReactNode;
}

export function CleanHero({ vertical, onOpenScopeModal, children }: CleanHeroProps) {
  return (
    <section className={`relative pt-16 pb-20 px-4 sm:px-6 lg:px-8 bg-white ${vertical.heroGlowClass}`}>
      {/* Subtle Prograstic Grid Background */}
      <div className="absolute inset-0 bg-grid-prograstic opacity-80 pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        {/* Top Header Group */}
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-slate-50 border border-slate-200 text-xs sm:text-sm font-mono font-bold text-slate-800 tracking-wider shadow-sm">
            <span
              className="w-2.5 h-2.5 rounded-full animate-ping"
              style={{ backgroundColor: vertical.accentHex }}
            />
            <span>{vertical.badge}</span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-500 font-medium">Prograstic Software Studio</span>
          </div>

          {/* Headline - Big, Bold, Visible */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight font-display leading-[1.08]">
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

          {/* Subtitle - Large & Readable */}
          <p className="text-lg sm:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-normal">
            {vertical.heroDescription}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={onOpenScopeModal}
              className="w-full sm:w-auto px-10 py-4 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm sm:text-base uppercase tracking-wider transition-all hover:scale-105 shadow-2xl shadow-slate-900/20 flex items-center justify-center gap-3"
            >
              <span>Schedule 15-Min Scope Call</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <a
              href="#missing-loop"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-900 font-semibold text-sm sm:text-base transition-colors flex items-center justify-center"
            >
              <span>Explore The Missing Loop</span>
            </a>
          </div>

          {/* Trust markers */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-3 text-xs sm:text-sm font-mono text-slate-600">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              Direct Senior Builders
            </span>
            <span className="text-slate-300">•</span>
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-indigo-600" />
              Zero-Lockin Private Cloud
            </span>
            <span className="text-slate-300">•</span>
            <span>14-Day Delivery Sprints</span>
          </div>
        </div>

        {/* 4-Metric Bar with Large Numbers & Clean Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {vertical.statMetrics.map((m, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-[28px] bg-slate-50 border border-slate-200/90 shadow-sm clean-card-hover space-y-2"
            >
              <div
                className="text-4xl sm:text-5xl font-extrabold font-display tracking-tight"
                style={{ color: vertical.accentHex }}
              >
                {m.value}
              </div>
              <div className="text-base sm:text-lg font-bold text-slate-900 font-sans">{m.label}</div>
              <div className="text-xs sm:text-sm text-slate-500 font-mono">{m.sublabel}</div>
            </div>
          ))}
        </div>

        {/* The macOS Safari App Window Chrome Frame with Live Interactive / Mockup View */}
        {children && (
          <div className="pt-4">
            <AppWindowFrame title={vertical.name} slug={vertical.slug} mockupImage={vertical.mockupImage}>
              {children}
            </AppWindowFrame>
          </div>
        )}

        {/* Tech Stack Marquee Pill Bar */}
        <div className="pt-6 border-t border-slate-200/80 flex items-center justify-center gap-3 flex-wrap text-sm font-mono text-slate-600">
          <span className="text-slate-400 font-bold uppercase tracking-wider text-xs mr-2">Built With:</span>
          {vertical.techStack.map((tech) => (
            <span
              key={tech}
              className="px-4 py-1.5 rounded-full bg-white border border-slate-200 text-slate-800 text-xs sm:text-sm font-medium shadow-sm flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-indigo-500" />
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
