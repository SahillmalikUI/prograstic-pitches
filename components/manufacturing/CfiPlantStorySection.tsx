"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2, TrendingUp, Cpu, Activity, ArrowRight, ShieldCheck, Zap, Factory } from "lucide-react";

export function CfiPlantStorySection() {
  return (
    <section id="missing-loop" className="py-24 sm:py-36 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white text-slate-900">
      <div className="space-y-16">
        {/* Top Header Scramble Tags - Clean Light */}
        <div className="flex items-center justify-between border-b border-slate-200 pb-4 text-xs font-mono text-slate-500">
          <div className="flex items-center gap-2">
            <span className="text-orange-600 font-bold">01.</span>
            <span className="uppercase tracking-widest font-bold text-slate-900">THE SHOPFLOOR BOTTLENECK</span>
          </div>
          <div className="uppercase tracking-widest text-slate-400 hidden sm:block">
            DIRECT-TO-BUILDER ENGINEERING
          </div>
        </div>

        {/* Dual Industrial Image Grid & Sticky Story Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-start">
          {/* Left Column: 2 Real Industrial Daylight Photographs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Image 1: Real Engineer at CNC Station */}
            <div className="relative rounded-[32px] overflow-hidden border border-slate-200 bg-slate-50 shadow-xl">
              <div className="relative w-full aspect-[4/3] min-h-[320px]">
                <Image
                  src="/mockups/manufacturing_light_operator.jpg"
                  alt="Industrial Engineer Operating CNC Tablet Terminal"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                
                {/* Overlay Stat */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 border border-slate-200 backdrop-blur-md flex items-center justify-between text-xs font-mono shadow-lg">
                  <div className="flex items-center gap-2 text-slate-900 font-bold">
                    <Activity className="w-4 h-4 text-orange-600" />
                    <span>STATION CNC-04: LIVE TELEMETRY</span>
                  </div>
                  <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    OEE 98.7% (TARGET MET)
                  </span>
                </div>
              </div>
            </div>

            {/* Image 2: Automated AGV Logistics Warehouse */}
            <div className="relative rounded-[32px] overflow-hidden border border-slate-200 bg-slate-50 shadow-xl">
              <div className="relative w-full aspect-[16/9] min-h-[260px]">
                <Image
                  src="/mockups/manufacturing_light_warehouse.jpg"
                  alt="Automated Warehouse Dispatch Bay"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                
                {/* Overlay Stat */}
                <div className="absolute bottom-5 left-5 right-5 p-3.5 rounded-2xl bg-white/95 border border-slate-200 backdrop-blur-md flex items-center justify-between text-xs font-mono shadow-lg">
                  <span className="font-bold text-slate-900">DISPATCH BAY AGV-02: SYNCED</span>
                  <span className="text-blue-700 font-bold bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                    ERP GATEWAY ACTIVE
                  </span>
                </div>
              </div>
            </div>

            {/* Metric KPI Banner */}
            <div className="grid grid-cols-3 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1 text-center sm:text-left">
                <div className="text-3xl sm:text-4xl font-extrabold font-display text-orange-600">38%</div>
                <div className="text-xs font-mono font-bold text-slate-600">Faster Cycle Times</div>
              </div>
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1 text-center sm:text-left">
                <div className="text-3xl sm:text-4xl font-extrabold font-display text-emerald-600">99.9%</div>
                <div className="text-xs font-mono font-bold text-slate-600">Lot Traceability</div>
              </div>
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1 text-center sm:text-left">
                <div className="text-3xl sm:text-4xl font-extrabold font-display text-blue-600">0</div>
                <div className="text-xs font-mono font-bold text-slate-600">Lost Paper Slips</div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative (Light & Clean) */}
          <div className="lg:col-span-5 space-y-8 sticky top-28">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-slate-950 uppercase leading-[1.05]">
                Why Generic ERPs Fail On The Shopfloor.
              </h2>
              <p className="text-base sm:text-xl text-slate-600 font-sans leading-relaxed">
                Most manufacturing plants are trapped between clunky 10-year-old ERPs that operators hate using and handwritten paper logbooks that cause stock discrepancies.
              </p>
            </div>

            <div className="space-y-4 text-base sm:text-lg font-sans text-slate-700">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-orange-600 shrink-0 mt-0.5" />
                <span><strong>No Clunky 40-Field Forms:</strong> Big, touch-friendly tablet interfaces engineered for operators wearing shopfloor gloves.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-orange-600 shrink-0 mt-0.5" />
                <span><strong>Real-time Sensor Integration:</strong> Automatic cycle counting from PLCs and micro-switches without manual operator tallying.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-orange-600 shrink-0 mt-0.5" />
                <span><strong>Instant WhatsApp Shift Alerts:</strong> Supervisors receive immediate machine breakdown notifications with photo attachments.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
