"use client";

import React from "react";
import { HospitalWorkflowDemo } from "@/components/widgets/HospitalWorkflowDemo";
import { Sparkles, Terminal, Activity } from "lucide-react";

export function BevelInteractiveDemoSection() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12 text-slate-900">
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono font-bold text-slate-800">
          <Activity className="w-3.5 h-3.5 text-blue-600" />
          <span>INTERACTIVE OPD & WARD SIMULATOR</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 font-display tracking-tight leading-tight">
          Test The Live Hospital Workflow Simulator
        </h2>
        <p className="text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
          Simulate a real patient check-in at reception, doctor consultation dispatch, and diagnostic handoff in real time.
        </p>
      </div>

      <div className="rounded-[40px] bg-[#F8FAFC] border border-slate-200/90 p-4 sm:p-8 shadow-xl">
        <HospitalWorkflowDemo />
      </div>
    </section>
  );
}
