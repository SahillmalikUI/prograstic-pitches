"use client";

import React from "react";
import { FertilityWorkflowDemo } from "@/components/widgets/FertilityWorkflowDemo";
import { HeartPulse, Sparkles, Activity } from "lucide-react";

export function FertilityInteractiveDemoSection() {
  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12 bg-white text-slate-900">
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-xs font-mono font-bold text-rose-800">
          <HeartPulse className="w-3.5 h-3.5 text-rose-600" />
          <span>INTERACTIVE EMBRYO & CRYO SIMULATOR</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 font-display tracking-tight uppercase leading-tight">
          Test The Live Embryology Lab Simulator
        </h2>
        <p className="text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
          Simulate a real IVF case: switch between Day-3 to Day-5 blastocyst grading, search liquid nitrogen cryo-tank straws, and verify patient witnessing in real time.
        </p>
      </div>

      <div className="rounded-[40px] bg-[#FFF8F8] border border-rose-200/90 p-4 sm:p-8 shadow-xl">
        <FertilityWorkflowDemo />
      </div>
    </section>
  );
}
