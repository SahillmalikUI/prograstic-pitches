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
    <section className="relative pt-12 pb-24 sm:pb-36 px-4 sm:px-6 lg:px-8 bg-[#0D0F14] text-white overflow-hidden">
      {/* Industrial Grid Lines & Ambient Glow */}
      <div className="absolute inset-0 bg-grid-dark opacity-30 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-orange-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[350px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        {/* Top Scramble & Telemetry Badges - Inspired by CFI */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6 text-xs font-mono">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
            <span className="tracking-widest uppercase text-slate-400">PROGRASTIC INDUSTRIAL OS</span>
            <span className="text-white/20">|</span>
            <span className="text-amber-400 font-bold">PLANT TELEMETRY: LIVE</span>
          </div>

          <div className="flex items-center gap-6 text-slate-400">
            <div>
              <span className="text-slate-500">OEE BENCHMARK: </span>
              <strong className="text-white">94.8%</strong>
            </div>
            <div className="hidden sm:block">
              <span className="text-slate-500">BATCH ACCURACY: </span>
              <strong className="text-emerald-400">99.98%</strong>
            </div>
          </div>
        </div>

        {/* Giant Brutalist Hero Heading - Exact CFI "BOOST YOUR CORPORATE IDENTITY" Scale */}
        <div className="space-y-6">
          <div className="text-lg sm:text-2xl font-mono text-amber-500 font-bold uppercase tracking-widest">
            Automate Your Shopfloor & Machine Fleet
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-9xl font-black font-display tracking-tight text-white uppercase leading-[0.88] select-none">
            MANUFACTURING<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-amber-500">
              OPERATIONS.
            </span>
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4 items-end">
            <p className="lg:col-span-8 text-lg sm:text-2xl text-slate-400 font-sans leading-relaxed">
              From raw material lot intake to live PLC machine telemetry and dispatch. We architect custom operating platforms built directly for industrial plant owners.
            </p>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3.5">
              <button
                onClick={onOpenScopeModal}
                className="w-full px-8 py-4 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm uppercase tracking-wider transition-all hover:scale-105 shadow-xl shadow-amber-500/20 flex items-center justify-center gap-3"
              >
                <span>Schedule 15-Min Plant Scope</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </button>

              <a
                href="#capabilities"
                className="w-full px-8 py-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-mono text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
              >
                <Activity className="w-3.5 h-3.5 text-amber-400" />
                <span>Explore Plant Capabilities</span>
              </a>
            </div>
          </div>
        </div>

        {/* Industrial Visual Showcase Display */}
        <div className="relative rounded-[36px] sm:rounded-[48px] overflow-hidden border border-white/15 bg-slate-900 shadow-2xl">
          {/* Main Cinematic Factory Image */}
          <div className="relative w-full aspect-[16/9] min-h-[380px] sm:min-h-[500px]">
            <Image
              src="/mockups/manufacturing_plant_hero.jpg"
              alt="Automated Smart Manufacturing Plant Floor"
              fill
              className="object-cover"
              priority
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F14] via-transparent to-black/30" />

            {/* Floating Live Telemetry Cards over the Factory Floor */}
            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-stretch sm:items-end justify-between gap-4">
              {/* Telemetry Card 1 */}
              <div className="p-5 rounded-2xl bg-black/80 backdrop-blur-xl border border-white/20 text-white space-y-2 max-w-sm">
                <div className="flex items-center justify-between text-xs font-mono text-amber-400">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                    ASSEMBLY LINE 04
                  </span>
                  <span>OEE: 96.1%</span>
                </div>
                <div className="text-sm font-bold font-sans">
                  Continuous stamping feed operating at optimal 120 cycles/min.
                </div>
              </div>

              {/* Telemetry Card 2 */}
              <div className="p-5 rounded-2xl bg-black/80 backdrop-blur-xl border border-white/20 text-white space-y-2 max-w-sm">
                <div className="flex items-center justify-between text-xs font-mono text-cyan-400">
                  <span>BATCH LOT #A238-456</span>
                  <span className="text-emerald-400">QA PASSED ✓</span>
                </div>
                <div className="text-sm font-bold font-sans">
                  Automated barcode verification complete. Ready for dispatch.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
