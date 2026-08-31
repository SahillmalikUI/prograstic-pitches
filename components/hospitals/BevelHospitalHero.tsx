"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, ShieldCheck, CheckCircle2, Activity, Cpu, Sparkles, Zap, HeartPulse, Play, Layers, ChevronRight, BarChart2, Radio, Bell } from "lucide-react";
import { IndustryVertical } from "@/data/verticals";

interface BevelHospitalHeroProps {
  vertical: IndustryVertical;
  onOpenScopeModal: () => void;
}

export function BevelHospitalHero({ vertical, onOpenScopeModal }: BevelHospitalHeroProps) {
  const [activeTab, setActiveTab] = useState<"overview" | "queue" | "icu">("overview");

  return (
    <section className="relative pt-12 sm:pt-20 pb-28 px-4 sm:px-6 lg:px-8 bg-[#07080A] text-white overflow-hidden selection:bg-[#00F0FF] selection:text-black">
      {/* Bevel-Style Ambient Glow Auras */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[1000px] h-[500px] bg-gradient-to-b from-[#00F0FF]/15 via-[#10B981]/10 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Subtle Precision Grid */}
      <div className="absolute inset-0 bg-grid-dark opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 sm:space-y-20 relative z-10">
        {/* Top Header Group */}
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          {/* Bevel Pill Badge */}
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white/[0.04] border border-white/10 text-xs sm:text-sm font-mono font-medium text-slate-300 tracking-wide backdrop-blur-xl shadow-2xl">
            <span className="w-2 h-2 rounded-full bg-[#00F0FF] shadow-[0_0_8px_#00F0FF] animate-pulse" />
            <span className="text-[#00F0FF] font-bold">PROGRASTIC CLINICAL OS 3.0</span>
            <span className="text-slate-600">•</span>
            <span>The Connected Hospital Operating System</span>
          </div>

          {/* Headline - Exact Bevel-Grade Typography Scale */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight font-display leading-[1.08]">
            The Connected Hospital OS Built For{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00F0FF] via-[#38BDF8] to-[#10B981]">
              High-Throughput Clinical Teams.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-normal">
            Turns fragmented wards, chaotic OPD queues, and scattered EMRs into effortless, single-entry hospital workflows. Zero repetitive data entry. 100% private cloud.
          </p>

          {/* Apple / Bevel Style Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3">
            <button
              onClick={onOpenScopeModal}
              className="w-full sm:w-auto px-9 py-4 rounded-full bg-white hover:bg-slate-100 text-slate-950 font-bold text-sm sm:text-base uppercase tracking-wider transition-all hover:scale-105 shadow-2xl shadow-white/20 flex items-center justify-center gap-3"
            >
              <span>Schedule 15-Min Scope Call</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </button>

            <a
              href="#pillars"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-white font-medium text-sm sm:text-base border border-white/10 backdrop-blur-md transition-colors flex items-center justify-center"
            >
              <span>Explore Clinical Pillars</span>
            </a>
          </div>

          {/* Trust Verification Bar */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-2 text-xs sm:text-sm font-mono text-slate-400">
            <span className="flex items-center gap-2 text-cyan-300">
              <CheckCircle2 className="w-4 h-4 text-[#00F0FF]" />
              ABDM & HIPAA Level-3 Verified
            </span>
            <span className="text-slate-700">•</span>
            <span className="flex items-center gap-2 text-emerald-400">
              <ShieldCheck className="w-4 h-4 text-[#10B981]" />
              Zero-Lockin Private Cloud
            </span>
            <span className="text-slate-700">•</span>
            <span>14-Day Delivery Sprints</span>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* BEVEL-STYLE CENTERPIECE HERO DEVICE SHOWCASE */}
        {/* ========================================================================= */}
        <div className="relative pt-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Bevel Phone Mockup (Recovery & Clearance Gauge) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[360px] aspect-[3/4] rounded-[40px] overflow-hidden border border-white/15 shadow-[0_20px_70px_rgba(0,240,255,0.15)] bg-slate-950 group">
                <Image
                  src="/mockups/bevel_hospital_phone.jpg"
                  alt="Prograstic Clinical OS Mobile Telemetry"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-center justify-between text-xs font-mono">
                  <span className="text-cyan-300 flex items-center gap-1.5">
                    <Radio className="w-3.5 h-3.5 text-[#00F0FF] animate-pulse" />
                    <span>Live Biometric Sync</span>
                  </span>
                  <span className="text-slate-400">OPD Token #42</span>
                </div>
              </div>
            </div>

            {/* Right: Bevel Widescreen Command Center Display */}
            <div className="lg:col-span-7">
              <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-[36px] overflow-hidden border border-white/15 shadow-[0_25px_80px_rgba(0,0,0,0.8)] bg-slate-950 group">
                <Image
                  src="/mockups/bevel_hospital_dashboard.jpg"
                  alt="Prograstic Clinical OS Hospital Command Center"
                  fill
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6 sm:p-8">
                  <div className="space-y-1.5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 border border-white/20 backdrop-blur-md text-[11px] font-mono text-cyan-300">
                      <Activity className="w-3.5 h-3.5 text-[#00F0FF]" />
                      <span>ICU Vital Waves & Floor Telemetry</span>
                    </div>
                    <div className="text-lg sm:text-xl font-bold text-white font-display">
                      Multi-Departmental Real-Time Synchronized Ward Matrix
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* BEVEL-STYLE 4 INTERACTIVE METRIC TELEMETRY CARDS */}
        {/* ========================================================================= */}
        <div id="pillars" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 pt-6">
          {/* Card 1: OPD Velocity */}
          <div className="p-7 rounded-[32px] bg-white/[0.03] border border-white/10 backdrop-blur-xl hover:border-cyan-500/40 hover:bg-white/[0.05] transition-all duration-300 space-y-4 shadow-xl">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400 uppercase">OPD Throughput</span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#00F0FF] shadow-[0_0_8px_#00F0FF]" />
            </div>
            <div className="space-y-1">
              <div className="text-4xl sm:text-5xl font-black text-white font-display tracking-tight">
                94%
              </div>
              <div className="text-base font-bold text-cyan-300">Queue Clearance Rate</div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Automated token routing dispenses real-time WhatsApp queue alerts to eliminate crowded lobby waiting.
            </p>
          </div>

          {/* Card 2: Bed Occupancy */}
          <div className="p-7 rounded-[32px] bg-white/[0.03] border border-white/10 backdrop-blur-xl hover:border-emerald-500/40 hover:bg-white/[0.05] transition-all duration-300 space-y-4 shadow-xl">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400 uppercase">Ward & Bed Matrix</span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] shadow-[0_0_8px_#10B981]" />
            </div>
            <div className="space-y-1">
              <div className="text-4xl sm:text-5xl font-black text-white font-display tracking-tight">
                11 / 12
              </div>
              <div className="text-base font-bold text-emerald-300">ICU Beds Utilized</div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Live automated bed status radar prevents double-booking and accelerates post-op transfers.
            </p>
          </div>

          {/* Card 3: EMR Speed */}
          <div className="p-7 rounded-[32px] bg-white/[0.03] border border-white/10 backdrop-blur-xl hover:border-sky-500/40 hover:bg-white/[0.05] transition-all duration-300 space-y-4 shadow-xl">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400 uppercase">Doctor EMR Speed</span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#38BDF8] shadow-[0_0_8px_#38BDF8]" />
            </div>
            <div className="space-y-1">
              <div className="text-4xl sm:text-5xl font-black text-white font-display tracking-tight">
                30s
              </div>
              <div className="text-base font-bold text-sky-300">Prescription Dispatch</div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              1-tap diagnostic templates with instant digital pharmacy & laboratory dispatch without paper routing.
            </p>
          </div>

          {/* Card 4: Compliance */}
          <div className="p-7 rounded-[32px] bg-white/[0.03] border border-white/10 backdrop-blur-xl hover:border-purple-500/40 hover:bg-white/[0.05] transition-all duration-300 space-y-4 shadow-xl">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400 uppercase">Data Sovereignty</span>
              <span className="w-2.5 h-2.5 rounded-full bg-purple-400 shadow-[0_0_8px_#c084fc]" />
            </div>
            <div className="space-y-1">
              <div className="text-4xl sm:text-5xl font-black text-white font-display tracking-tight">
                100%
              </div>
              <div className="text-base font-bold text-purple-300">Private Cloud Ownership</div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Zero vendor lock-in. Full source code and encrypted local databases belong entirely to your hospital.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
