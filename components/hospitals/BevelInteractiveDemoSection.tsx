"use client";

import React from "react";
import { HospitalWorkflowDemo } from "@/components/widgets/HospitalWorkflowDemo";
import { Sparkles, Terminal, Activity } from "lucide-react";

export function BevelInteractiveDemoSection() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono font-bold text-cyan-300">
          <Activity className="w-3.5 h-3.5 text-[#00F0FF]" />
          <span>INTERACTIVE OPD & WARD SIMULATOR</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight">
          Test The Live Hospital Workflow Simulator
        </h2>
        <p className="text-sm sm:text-base text-slate-400 font-sans">
          Simulate a real patient check-in at reception, doctor consultation dispatch, and diagnostic handoff below.
        </p>
      </div>

      <div className="rounded-[40px] bg-white/[0.02] border border-white/10 p-4 sm:p-8 backdrop-blur-2xl shadow-2xl">
        <HospitalWorkflowDemo />
      </div>
    </section>
  );
}
