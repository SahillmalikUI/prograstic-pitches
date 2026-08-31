"use client";

import React from "react";
import { ManufacturingWorkflowDemo } from "@/components/widgets/ManufacturingWorkflowDemo";
import { Activity, Gauge, Terminal } from "lucide-react";

export function CfiInteractiveSimulatorSection() {
  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12 bg-[#0D0F14] text-white">
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-mono font-bold text-amber-400">
          <Activity className="w-3.5 h-3.5" />
          <span>INTERACTIVE SHOPFLOOR SIMULATOR</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight uppercase leading-tight">
          Test The Live Manufacturing Simulator
        </h2>
        <p className="text-base sm:text-lg text-slate-400 font-sans leading-relaxed">
          Simulate a real shopfloor batch run: trigger machine telemetry, track live OEE speed, and dispatch finished inventory below.
        </p>
      </div>

      <div className="rounded-[40px] bg-[#12161F] border border-white/15 p-4 sm:p-8 shadow-2xl">
        <ManufacturingWorkflowDemo />
      </div>
    </section>
  );
}
