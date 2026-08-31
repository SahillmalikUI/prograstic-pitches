"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Sparkles, ShieldCheck, HeartPulse, Activity, CheckCircle2 } from "lucide-react";
import { IndustryVertical } from "@/data/verticals";

interface BevelHospitalHeroProps {
  vertical: IndustryVertical;
  onOpenScopeModal: () => void;
}

export function BevelHospitalHero({ vertical, onOpenScopeModal }: BevelHospitalHeroProps) {
  return (
    <section className="relative pt-10 pb-20 sm:pb-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F0F6FF] via-[#EBF3FE] to-white text-slate-900 overflow-hidden">
      {/* Soft Luminous Aurora Mesh (Zero Box Grid) */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] sm:w-[1100px] h-[350px] sm:h-[450px] bg-gradient-to-r from-[#A7F3D0]/30 via-[#93C5FD]/40 to-[#FBCFE8]/30 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16 relative z-10">
        {/* Top Scramble & Telemetry Badges */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200/80 pb-5 text-xs font-mono">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse" />
            <span className="tracking-widest uppercase font-bold text-slate-900">PROGRASTIC CLINICAL OS</span>
            <span className="text-slate-300">•</span>
            <span className="text-blue-700 font-bold bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
              HOSPITAL OPERATING ENGINE
            </span>
          </div>

          <div className="flex items-center gap-6 text-xs font-mono text-slate-600">
            <div>
              <span className="text-slate-400">BED CLEARANCE: </span>
              <strong className="text-emerald-700 font-bold">98.4%</strong>
            </div>
            <div className="hidden sm:block">
              <span className="text-slate-400">EMR DISPATCH: </span>
              <strong className="text-blue-700 font-bold">30 SEC AVG</strong>
            </div>
          </div>
        </div>

        {/* Giant Brutalist-Clean Heading */}
        <div className="space-y-6">
          <div className="text-sm sm:text-base font-mono text-blue-700 font-bold uppercase tracking-widest flex items-center gap-2">
            <Activity className="w-4 h-4 text-blue-600" />
            <span>Modern Hospital Operating Software</span>
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-9xl font-extrabold font-display tracking-tight text-slate-950 uppercase leading-[0.90] select-none">
            YOUR CONNECTED<br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-950 via-slate-800 to-blue-600">
              HOSPITAL OS.
            </span>
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4 items-end">
            <p className="lg:col-span-8 text-xl sm:text-2xl text-slate-600 font-sans leading-relaxed">
              Real-time OPD queue velocity, dynamic ward bed synchronization, and 30-second doctor consultation flows. Custom clinical software engineered for hospital leaders.
            </p>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <button
                onClick={onOpenScopeModal}
                className="w-full px-8 py-4 rounded-full bg-slate-950 hover:bg-slate-800 text-white font-bold text-sm uppercase tracking-wider transition-all hover:scale-105 shadow-xl shadow-slate-950/15 flex items-center justify-center gap-3"
              >
                <span>Schedule 15-Min Scope Call</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>

              <a
                href="#capabilities"
                className="w-full px-8 py-3.5 rounded-full bg-white hover:bg-slate-100 border border-slate-200 text-slate-800 font-mono text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 font-bold shadow-sm"
              >
                <Activity className="w-3.5 h-3.5 text-blue-600" />
                <span>Explore Clinical Modules</span>
              </a>
            </div>
          </div>
        </div>

        {/* Centerpiece Device Showcase with Floating Frosted Telemetry Pills */}
        <div className="relative flex justify-center items-center py-6 sm:py-12">
          {/* Floating Frosted Pill 1 (Left) */}
          <div className="hidden lg:flex absolute left-8 top-1/3 z-20 items-center gap-3 px-5 py-3.5 rounded-2xl bg-white/90 backdrop-blur-xl border border-slate-200/90 shadow-xl shadow-slate-900/5 animate-in fade-in slide-in-from-left duration-700">
            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
              <HeartPulse className="w-5 h-5" />
            </div>
            <div className="space-y-0.5 text-left">
              <div className="text-[11px] font-mono text-slate-400 uppercase">Ward Clearance</div>
              <div className="text-base font-bold text-slate-900">98.4% On-Time</div>
            </div>
          </div>

          {/* Center Devices Container (iPhone + Watch) */}
          <div className="relative flex items-center justify-center gap-4 sm:gap-8 w-full max-w-2xl">
            {/* iPhone Mockup (94% OPD Clearance Circular Gauge) */}
            <div className="relative w-[240px] sm:w-[320px] aspect-[9/18] rounded-[44px] overflow-hidden shadow-[0_30px_70px_-15px_rgba(0,0,0,0.18)] border-[6px] border-white bg-slate-900">
              <Image
                src="/mockups/bevel_light_phone.jpg"
                alt="Hospital OS iPhone Interface"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Apple Watch Mockup (Telemetry / ECG) */}
            <div className="relative w-[140px] sm:w-[190px] aspect-[4/5] rounded-[36px] overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.15)] border-4 border-white bg-slate-900 self-end -mb-4">
              <Image
                src="/mockups/bevel_light_watch.jpg"
                alt="Clinical Telemetry Smart Watch"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Floating Frosted Pill 2 (Right) */}
          <div className="hidden lg:flex absolute right-8 bottom-1/3 z-20 items-center gap-3 px-5 py-3.5 rounded-2xl bg-white/90 backdrop-blur-xl border border-slate-200/90 shadow-xl shadow-slate-900/5 animate-in fade-in slide-in-from-right duration-700">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="space-y-0.5 text-left">
              <div className="text-[11px] font-mono text-slate-400 uppercase">Prescription Speed</div>
              <div className="text-base font-bold text-slate-900">30s Touch Handoff</div>
            </div>
          </div>
        </div>

        {/* Bottom Social Proof Bar */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200/80 text-xs sm:text-sm font-sans text-slate-600">
          <div className="flex items-center gap-2">
            <div className="flex text-amber-500">★★★★★</div>
            <span className="font-bold text-slate-900">4.9 / 5.0</span>
            <span className="text-slate-400">• ABDM & HIPAA Level-3 Verified Architecture</span>
          </div>

          <div className="flex items-center gap-6 font-mono text-xs">
            <span className="flex items-center gap-1.5 text-emerald-700 font-bold">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              Zero Monthly SaaS Tax
            </span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-900 font-bold">14-Day Delivery Sprints</span>
          </div>
        </div>
      </div>
    </section>
  );
}
