"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, ShieldCheck, CheckCircle2, Wrench, Cpu, Sparkles, Activity, AlertTriangle, Terminal } from "lucide-react";
import { IndustryVertical } from "@/data/verticals";

interface IndustrialPlantHeroProps {
  vertical: IndustryVertical;
  onOpenScopeModal: () => void;
  children?: React.ReactNode;
}

export function IndustrialPlantHero({ vertical, onOpenScopeModal, children }: IndustrialPlantHeroProps) {
  return (
    <section className="relative pt-20 pb-28 px-4 sm:px-6 lg:px-8 bg-[#0F1117] text-white hero-glow-industrial overflow-hidden font-industrial">
      {/* Industrial Grid Lines Pattern */}
      <div className="absolute inset-0 bg-grid-industrial opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        {/* Top Architectural Header */}
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          {/* Cadmium Safety Badge */}
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-[#FF5500]/10 border border-[#FF5500]/30 text-xs sm:text-sm font-mono font-bold text-[#FF8540] tracking-wider shadow-lg shadow-[#FF5500]/10">
            <Cpu className="w-4 h-4 text-[#FF5500]" />
            <span>INDUSTRIAL TELEMETRY & SHOP-FLOOR OS</span>
            <span className="text-[#FF5500]/50">•</span>
            <span className="text-slate-400 font-medium">Rugged Plant Suite</span>
          </div>

          {/* Headline with Heavy Industrial Sans */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.04]">
            Custom Shop Floor Data Entry & Machine Telemetry For{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF5500] via-[#FFA040] to-[#EAB308]">
              High-Precision Industrial Plants.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-sans font-normal">
            Replace clipboards, paper job cards, and delayed Excel sheets with rugged shop-floor tablet entry, real-time machine downtime alerts, and automated raw material tracking.
          </p>

          {/* Industrial CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={onOpenScopeModal}
              className="w-full sm:w-auto px-10 py-4 rounded-full bg-[#FF5500] hover:bg-[#FF6A1A] text-white font-black text-sm sm:text-base uppercase tracking-wider transition-all hover:scale-105 shadow-2xl shadow-[#FF5500]/30 flex items-center justify-center gap-3"
            >
              <span>Schedule 15-Min Scope Call</span>
              <ArrowRight className="w-5 h-5 text-white" />
            </button>

            <a
              href="#missing-loop"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm sm:text-base border border-slate-700 transition-colors flex items-center justify-center"
            >
              <span>Explore The Missing Loop</span>
            </a>
          </div>

          {/* Technical Telemetry Markers */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-3 text-xs sm:text-sm font-mono text-slate-400">
            <span className="flex items-center gap-2 text-[#FF8540]">
              <CheckCircle2 className="w-4 h-4 text-[#FF5500]" />
              Rugged IP65 Tablet Ready
            </span>
            <span className="text-slate-700">•</span>
            <span className="flex items-center gap-2 text-emerald-400">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              100% On-Prem / Cloud Sovereignty
            </span>
            <span className="text-slate-700">•</span>
            <span>14-Day Rapid Deployment</span>
          </div>
        </div>

        {/* 4 Industrial OEE Metric Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {vertical.statMetrics.map((m, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-[28px] bg-slate-900/90 border border-slate-800 shadow-xl industrial-card-hover space-y-2"
            >
              <div className="text-4xl sm:text-5xl font-black text-[#FF5500] tracking-tight">
                {m.value}
              </div>
              <div className="text-base sm:text-lg font-bold text-white font-sans">{m.label}</div>
              <div className="text-xs sm:text-sm text-slate-400 font-mono">{m.sublabel}</div>
            </div>
          ))}
        </div>

        {/* Embedded Interactive Rugged Terminal */}
        {children && (
          <div className="pt-4">
            <div className="rounded-[36px] bg-slate-900 border border-slate-800 p-2 sm:p-4 shadow-2xl shadow-[#FF5500]/10">
              {children}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
