"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2, TrendingUp, Cpu, Activity, ArrowRight, ShieldCheck, Zap } from "lucide-react";

export function CfiPlantStorySection() {
  return (
    <section id="missing-loop" className="py-24 sm:py-36 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-[#0D0F14] text-white">
      <div className="space-y-16">
        {/* Top Header Scramble Tags - Inspired by Corporate Fashion Industries */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <span className="text-amber-500 font-bold">01.</span>
            <span className="uppercase tracking-widest text-slate-300">THE SHOPFLOOR BOTTLENECK</span>
          </div>
          <div className="uppercase tracking-widest text-slate-500 hidden sm:block">
            DIRECT-TO-BUILDER ENGINEERING
          </div>
        </div>

        {/* Grid & Sticky Story Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-start">
          {/* Left Column: Industrial Photography & Telemetry Showcase */}
          <div className="lg:col-span-7 space-y-6">
            <div className="relative rounded-[36px] overflow-hidden border border-white/15 bg-slate-900 shadow-2xl">
              <div className="relative w-full aspect-[4/3] min-h-[350px]">
                <Image
                  src="/mockups/manufacturing_telemetry_board.jpg"
                  alt="Industrial Machine Telemetry Tablet"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                {/* Bottom Tablet Overlay Stat */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/85 border border-white/20 backdrop-blur-md flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2 text-amber-400 font-bold">
                    <Activity className="w-4 h-4" />
                    <span>STATION CNC-04: LIVE TELEMETRY</span>
                  </div>
                  <span className="text-emerald-400 font-bold">OEE 81% (TARGET MET)</span>
                </div>
              </div>
            </div>

            {/* Metric KPI Banner */}
            <div className="grid grid-cols-3 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-1">
                <div className="text-3xl sm:text-4xl font-black font-display text-amber-400">38%</div>
                <div className="text-xs font-mono text-slate-400">Faster Cycle Times</div>
              </div>
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-1">
                <div className="text-3xl sm:text-4xl font-black font-display text-emerald-400">99.9%</div>
                <div className="text-xs font-mono text-slate-400">Lot Traceability</div>
              </div>
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-1">
                <div className="text-3xl sm:text-4xl font-black font-display text-cyan-400">0</div>
                <div className="text-xs font-mono text-slate-400">Lost Paper Slips</div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative (CFI Style) */}
          <div className="lg:col-span-5 space-y-8 sticky top-28">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white uppercase leading-[1.05]">
                Why Generic ERPs Fail On The Shopfloor.
              </h2>
              <p className="text-base sm:text-lg text-slate-400 font-sans leading-relaxed">
                Most manufacturing plants are trapped between clunky 10-year-old ERPs that operators hate using and handwritten paper logbooks that cause stock discrepancies.
              </p>
            </div>

            <div className="space-y-4 text-sm sm:text-base font-sans text-slate-300">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span><strong>No Clunky 40-Field Forms:</strong> Big, touch-friendly tablet interfaces engineered for operators wearing shopfloor gloves.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span><strong>Real-time Sensor Integration:</strong> Automatic cycle counting from PLCs and micro-switches without manual operator tallying.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span><strong>Instant WhatsApp Shift Alerts:</strong> Supervisors receive immediate machine breakdown notifications with photo attachments.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
