"use client";

import React from "react";
import { ManufacturingWorkflowDemo } from "@/components/widgets/ManufacturingWorkflowDemo";
import { Activity, Gauge, Terminal, Factory } from "lucide-react";

export function CfiInteractiveSimulatorSection() {
  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12 bg-white text-slate-900">
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-xs font-mono font-bold text-orange-700">
          <Activity className="w-3.5 h-3.5 text-orange-600" />
          <span>INTERACTIVE SHOPFLOOR SIMULATOR</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 font-display tracking-tight uppercase leading-tight">
          Test The Live Manufacturing Simulator
        </h2>
        <p className="text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
          Simulate a real shopfloor batch run: trigger machine telemetry, track live OEE speed, and dispatch finished inventory in real time below.
        </p>
      </div>

      <div className="rounded-[40px] bg-[#F8FAFC] border border-slate-200/90 p-4 sm:p-8 shadow-xl">
        <ManufacturingWorkflowDemo />
      </div>
    </section>
  );
}
