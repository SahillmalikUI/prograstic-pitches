"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Terminal, Activity, ShieldCheck, Zap, Gauge, Cpu, CheckCircle2, Factory } from "lucide-react";
import { IndustryVertical } from "@/data/verticals";

interface CfiManufacturingHeroProps {
  vertical: IndustryVertical;
  onOpenScopeModal: () => void;
}

export function CfiManufacturingHero({ vertical, onOpenScopeModal }: CfiManufacturingHeroProps) {
  return (
    <section className="relative pt-10 pb-20 sm:pb-32 px-4 sm:px-6 lg:px-8 bg-white text-slate-900 overflow-hidden">
      {/* Soft Blueprint Grid Lines & Subtle Ambient Glow */}
      <div className="absolute inset-0 bg-grid-prograstic opacity-70 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[600px] h-[350px] bg-orange-100/60 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[300px] bg-blue-50/80 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16 relative z-10">
        {/* Top Scramble & Telemetry Badges - Clean Light Version */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-5 text-xs font-mono">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse" />
            <span className="tracking-widest uppercase font-bold text-slate-900">PROGRASTIC INDUSTRIAL OS</span>
            <span className="text-slate-300">•</span>
            <span className="text-orange-600 font-bold bg-orange-50 px-2 py-0.5 rounded border border-orange-200">
              SHOPFLOOR TELEMETRY: LIVE
            </span>
          </div>

          <div className="flex items-center gap-6 text-xs font-mono text-slate-600">
            <div>
              <span className="text-slate-400">OEE BENCHMARK: </span>
              <strong className="text-slate-900 font-bold">94.8%</strong>
            </div>
            <div className="hidden sm:block">
              <span className="text-slate-400">BATCH ACCURACY: </span>
              <strong className="text-emerald-600 font-bold">99.98%</strong>
            </div>
          </div>
        </div>

        {/* Giant Brutalist Hero Heading - 100% Light High-Contrast */}
        <div className="space-y-6">
          <div className="text-sm sm:text-base font-mono text-orange-600 font-bold uppercase tracking-widest flex items-center gap-2">
            <Factory className="w-4 h-4 text-orange-500" />
            <span>Automate Your Shopfloor & Machine Fleet</span>
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-9xl font-extrabold font-display tracking-tight text-slate-950 uppercase leading-[0.90] select-none">
            MANUFACTURING<br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-950 via-slate-800 to-orange-600">
              OPERATIONS.
            </span>
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4 items-end">
            <p className="lg:col-span-8 text-xl sm:text-2xl text-slate-600 font-sans leading-relaxed">
              From raw material lot intake to live PLC machine telemetry and dispatch. We architect custom operating platforms built directly for industrial plant owners.
            </p>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <button
                onClick={onOpenScopeModal}
                className="w-full px-8 py-4 rounded-full bg-slate-950 hover:bg-slate-800 text-white font-bold text-sm uppercase tracking-wider transition-all hover:scale-105 shadow-xl shadow-slate-950/15 flex items-center justify-center gap-3"
              >
                <span>Schedule 15-Min Plant Scope</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>

              <a
                href="#capabilities"
                className="w-full px-8 py-3.5 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-800 font-mono text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 font-bold"
              >
                <Activity className="w-3.5 h-3.5 text-orange-600" />
                <span>Explore Plant Capabilities</span>
              </a>
            </div>
          </div>
        </div>

        {/* Daylight Factory Floor Visual Display with Floating Live Telemetry Cards */}
        <div className="relative rounded-[36px] sm:rounded-[48px] overflow-hidden border border-slate-200 bg-slate-50 shadow-2xl">
          <div className="relative w-full aspect-[16/9] min-h-[380px] sm:min-h-[520px]">
            <Image
              src="/mockups/manufacturing_light_hero.jpg"
              alt="Bright Smart Manufacturing Plant Floor"
              fill
              className="object-cover"
              priority
            />

            {/* Subtle Gradient Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

            {/* Floating Live Telemetry Cards */}
            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-stretch sm:items-end justify-between gap-4">
              {/* Telemetry Card 1 */}
              <div className="p-5 rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-200 text-slate-900 space-y-1.5 max-w-sm shadow-xl">
                <div className="flex items-center justify-between text-xs font-mono text-orange-600 font-bold">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                    ASSEMBLY LINE 04
                  </span>
                  <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    OEE: 98.7%
                  </span>
                </div>
                <div className="text-sm font-bold font-sans text-slate-900">
                  Continuous automated stamping feed operating at optimal 245 units/hr.
                </div>
              </div>

              {/* Telemetry Card 2 */}
              <div className="p-5 rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-200 text-slate-900 space-y-1.5 max-w-sm shadow-xl">
                <div className="flex items-center justify-between text-xs font-mono text-slate-600 font-bold">
                  <span className="text-blue-600">BATCH LOT #A238-456</span>
                  <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    QA PASSED ✓
                  </span>
                </div>
                <div className="text-sm font-bold font-sans text-slate-900">
                  Barcode automated verification complete. Ready for dispatch bay.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
