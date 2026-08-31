"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, ShieldCheck, CheckCircle2, Activity, Cpu, Sparkles, Zap, HeartPulse } from "lucide-react";
import { IndustryVertical } from "@/data/verticals";

interface BevelHospitalHeroProps {
  vertical: IndustryVertical;
  onOpenScopeModal: () => void;
  children?: React.ReactNode;
}

export function BevelHospitalHero({ vertical, onOpenScopeModal, children }: BevelHospitalHeroProps) {
  return (
    <section className="relative pt-20 pb-28 px-4 sm:px-6 lg:px-8 bg-[#080C15] text-white hero-glow-bevel overflow-hidden">
      {/* Dark Biometric Grid Pattern */}
      <div className="absolute inset-0 bg-grid-dark opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        {/* Top Header Group */}
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          {/* Biometric Telemetry Badge */}
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-xs sm:text-sm font-mono font-bold text-cyan-300 tracking-wider shadow-lg shadow-cyan-950/50">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00F0FF] animate-ping" />
            <span>HOSPITAL OPERATING SYSTEM (H-OS v3.4)</span>
            <span className="text-cyan-600">•</span>
            <span className="text-slate-400 font-medium">Bevel-Grade Clinical Tech</span>
          </div>

          {/* Headline - Cinematic Biometric Precision */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight font-display leading-[1.06]">
            Custom Clinical Platforms & Queue Engines Built For{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00F0FF] via-[#38BDF8] to-[#10B981]">
              High-Throughput Hospitals.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-sans font-normal">
            Eliminate repetitive manual data entry, crowded OPD lobbies, and fragmented departmental handoffs. We build high-speed, bespoke hospital software mapped 1-to-1 to your doctors, wards, and diagnostic labs.
          </p>

          {/* Dark Precision CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={onOpenScopeModal}
              className="w-full sm:w-auto px-10 py-4 rounded-full bg-[#00F0FF] hover:bg-[#38BDF8] text-slate-950 font-black text-sm sm:text-base uppercase tracking-wider transition-all hover:scale-105 shadow-2xl shadow-cyan-500/25 flex items-center justify-center gap-3"
            >
              <span>Schedule 15-Min Scope Call</span>
              <ArrowRight className="w-5 h-5 text-slate-950" />
            </button>

            <a
              href="#missing-loop"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white font-semibold text-sm sm:text-base border border-slate-700 transition-colors flex items-center justify-center"
            >
              <span>Explore The Missing Loop</span>
            </a>
          </div>

          {/* Trust Markers */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-3 text-xs sm:text-sm font-mono text-slate-400">
            <span className="flex items-center gap-2 text-cyan-300">
              <CheckCircle2 className="w-4 h-4 text-[#00F0FF]" />
              ABDM & HIPAA Level-3 Verified
            </span>
            <span className="text-slate-700">•</span>
            <span className="flex items-center gap-2 text-emerald-300">
              <ShieldCheck className="w-4 h-4 text-[#10B981]" />
              Zero-Lockin Private Cloud
            </span>
            <span className="text-slate-700">•</span>
            <span>14-Day Delivery Sprints</span>
          </div>
        </div>

        {/* 4 Biometric Stat Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {vertical.statMetrics.map((m, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-[28px] bg-slate-900/70 border border-slate-800 backdrop-blur-md shadow-xl dark-card-hover space-y-2"
            >
              <div className="text-4xl sm:text-5xl font-black font-display text-[#00F0FF] tracking-tight">
                {m.value}
              </div>
              <div className="text-base sm:text-lg font-bold text-white font-sans">{m.label}</div>
              <div className="text-xs sm:text-sm text-slate-400 font-mono">{m.sublabel}</div>
            </div>
          ))}
        </div>

        {/* Embedded Interactive EMR / Hospital Workflow Simulator */}
        {children && (
          <div className="pt-4">
            <div className="rounded-[36px] bg-slate-900/90 border border-slate-800 p-2 sm:p-4 shadow-2xl shadow-cyan-950/30">
              {children}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
