"use client";

import React, { useState } from "react";
import { Sparkles, ShieldCheck, CheckCircle2, UserCheck, Eye, Sliders, ArrowRight } from "lucide-react";

export function AestheticWorkflowDemo() {
  const [selectedConcern, setSelectedConcern] = useState<string>("Melasma & Pigmentation");
  const [sliderPos, setSliderPos] = useState(50);

  const concerns = [
    { name: "Melasma & Pigmentation", protocol: "Q-Switched Nd:YAG Laser + Glutathione Peel", sessions: "4 Sessions (Bi-weekly)" },
    { name: "Active Acne & Scarring", protocol: "Salicylic Acid Peel + Fractional CO2 Laser", sessions: "6 Sessions (Monthly)" },
    { name: "Jawline Contouring / Anti-Aging", protocol: "HIFU Ultrasound Lift + G-Point Dermal Fillers", sessions: "Single Session Review" },
  ];

  return (
    <div className="rounded-[28px] bg-white border border-slate-200 p-6 sm:p-10 shadow-sm space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-100 text-rose-700 text-xs sm:text-sm font-mono font-bold">
            <Sparkles className="w-4 h-4" />
            AESTHETIC INTAKE & PROTOCOL VISUALIZER
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display mt-2">
            Clinical Consultation Roadmap & Standardized Before/After Photo Vault
          </h3>
          <p className="text-sm sm:text-base text-slate-500 mt-1">
            Test how aesthetic dermatologists guide patients from skin concern selection to structured clinical protocol recommendations.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600 bg-slate-50 border border-slate-200 px-4 py-2 rounded-full font-mono shrink-0">
          <ShieldCheck className="w-4 h-4 text-rose-600" />
          <span>HIPAA Encrypted Photos</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Concern Selector */}
        <div className="lg:col-span-7 space-y-4">
          <label className="text-xs sm:text-sm font-bold text-slate-700 uppercase font-mono tracking-wider block">
            Step 1: Patient Primary Concern Selection
          </label>
          <div className="space-y-3">
            {concerns.map((c) => (
              <div
                key={c.name}
                onClick={() => setSelectedConcern(c.name)}
                className={`p-5 rounded-2xl border-2 cursor-pointer transition-all ${
                  selectedConcern === c.name
                    ? "border-rose-400 bg-rose-50/50 shadow-md"
                    : "border-slate-200 bg-slate-50 hover:border-slate-300"
                }`}
              >
                <div className="font-bold text-base sm:text-lg text-slate-900">{c.name}</div>
                <div className="text-xs sm:text-sm text-slate-600 mt-2 font-mono flex items-center justify-between">
                  <span className="text-rose-700 font-bold">{c.protocol}</span>
                  <span className="text-slate-500">{c.sessions}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Treatment Roadmap Card */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-6 rounded-[24px] bg-slate-50 border border-slate-200 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 text-xs sm:text-sm font-bold text-slate-900">
              <span>Standardized Photo Progression</span>
              <span className="text-xs font-mono text-rose-700">Consent Verified</span>
            </div>

            {/* Slider Mockup */}
            <div className="relative rounded-2xl overflow-hidden bg-slate-900 h-44 flex items-center justify-center text-white border border-slate-700">
              <div className="absolute inset-0 flex items-center justify-between px-6 text-sm font-mono font-bold">
                <span className="bg-slate-950/70 px-3 py-1 rounded-lg">BASELINE (DAY 1)</span>
                <span className="bg-rose-950/70 px-3 py-1 rounded-lg text-rose-300">SESSION 4 (WEEK 8)</span>
              </div>
              <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-ew-resize"
                style={{ left: `${sliderPos}%` }}
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-xs sm:text-sm text-slate-600 font-mono">
                <span>Slide to Compare Progression:</span>
                <span className="font-bold text-slate-900">{sliderPos}% Comparison</span>
              </div>
              <input
                type="range"
                min="10"
                max="90"
                value={sliderPos}
                onChange={(e) => setSliderPos(Number(e.target.value))}
                className="w-full accent-rose-600 cursor-pointer"
              />
            </div>

            <div className="pt-2 text-xs sm:text-sm text-emerald-800 font-mono flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Ghost overlay ensures precise camera focal angle match</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
