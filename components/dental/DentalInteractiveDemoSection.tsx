"use client";

import React from "react";
import { DentalWorkflowDemo } from "@/components/widgets/DentalWorkflowDemo";
import { Smile, Sparkles, Activity } from "lucide-react";

export function DentalInteractiveDemoSection() {
  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12 bg-white text-slate-900">
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-xs font-mono font-bold text-teal-800">
          <Smile className="w-3.5 h-3.5 text-teal-600" />
          <span>INTERACTIVE 32-TOOTH ODONTOGRAM SIMULATOR</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 font-display tracking-tight uppercase leading-tight">
          Test The Live 32-Tooth Dental Simulator
        </h2>
        <p className="text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
          Simulate real chairside charting: tap teeth across Upper and Lower quadrants, mark composite restorations, and generate instant treatment cost estimates below.
        </p>
      </div>

      <div className="rounded-[40px] bg-[#F4FBFA] border border-teal-200/90 p-4 sm:p-8 shadow-xl">
        <DentalWorkflowDemo />
      </div>
    </section>
  );
}
