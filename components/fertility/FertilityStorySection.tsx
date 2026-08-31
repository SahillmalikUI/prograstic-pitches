"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2, TrendingUp, HeartPulse, Activity, ArrowRight, ShieldCheck, Zap, Lock } from "lucide-react";

export function FertilityStorySection() {
  return (
    <section id="missing-loop" className="py-24 sm:py-36 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white text-slate-900">
      <div className="space-y-16">
        {/* Top Header Scramble Tags */}
        <div className="flex items-center justify-between border-b border-slate-200 pb-4 text-xs font-mono text-slate-500">
          <div className="flex items-center gap-2">
            <span className="text-rose-600 font-bold">01.</span>
            <span className="uppercase tracking-widest font-bold text-slate-900">THE EMBRYOLOGY BOTTLENECK</span>
          </div>
          <div className="uppercase tracking-widest text-slate-400 hidden sm:block">
            DIRECT-TO-BUILDER CLINICAL OS
          </div>
        </div>

        {/* Dual Image Grid & Sticky Story Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-start">
          {/* Left Column: 2 Real IVF Laboratory Daylight Photographs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Image 1: Cryo Nitrogen Tank RFID Audit */}
            <div className="relative rounded-[32px] overflow-hidden border border-slate-200 bg-slate-50 shadow-xl">
              <div className="relative w-full aspect-[4/3] min-h-[320px]">
                <Image
                  src="/mockups/fertility_cryo_tank.jpg"
                  alt="Embryologist Auditing Liquid Nitrogen Cryo Tank"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                
                {/* Overlay Stat */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 border border-slate-200 backdrop-blur-md flex items-center justify-between text-xs font-mono shadow-lg">
                  <div className="flex items-center gap-2 text-slate-900 font-bold">
                    <Activity className="w-4 h-4 text-rose-600" />
                    <span>TANK 04: LN2 CRYO-TELEMETRY</span>
                  </div>
                  <span className="text-blue-700 font-bold bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                    -196.3°C STABLE (LEVEL 82%)
                  </span>
                </div>
              </div>
            </div>

            {/* Metric KPI Banner */}
            <div className="grid grid-cols-3 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1 text-center sm:text-left">
                <div className="text-3xl sm:text-4xl font-extrabold font-display text-rose-600">100%</div>
                <div className="text-xs font-mono font-bold text-slate-600">RFID Double Witness</div>
              </div>
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1 text-center sm:text-left">
                <div className="text-3xl sm:text-4xl font-extrabold font-display text-emerald-600">0 min</div>
                <div className="text-xs font-mono font-bold text-slate-600">Trigger Shot Drift</div>
              </div>
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1 text-center sm:text-left">
                <div className="text-3xl sm:text-4xl font-extrabold font-display text-blue-600">0</div>
                <div className="text-xs font-mono font-bold text-slate-600">Specimen Mix-ups</div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative */}
          <div className="lg:col-span-5 space-y-8 sticky top-28">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-slate-950 uppercase leading-[1.05]">
                Why Generic Hospital Software Fails In Embryology.
              </h2>
              <p className="text-base sm:text-xl text-slate-600 font-sans leading-relaxed">
                Fertility clinics have the highest emotional and biological stakes in medicine. Generic Hospital Information Systems don’t understand oocyte maturity, blastocyst grading, or liquid nitrogen cryo-canister mapping.
              </p>
            </div>

            <div className="space-y-4 text-base sm:text-lg font-sans text-slate-700">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-rose-600 shrink-0 mt-0.5" />
                <span><strong>Automated Electronic Double-Witnessing:</strong> Two-factor RFID barcode verification on every petri dish and straw transfer.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-rose-600 shrink-0 mt-0.5" />
                <span><strong>Stimulation Protocol Radar:</strong> Real-time follicular diameter graphs & hormone curves with automated trigger shot timing.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-rose-600 shrink-0 mt-0.5" />
                <span><strong>Compassionate Patient WhatsApp:</strong> Clear, sensitive updates sent to couples at every milestone (Retrieval, Fertilization, Day-5 Blastocyst).</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
