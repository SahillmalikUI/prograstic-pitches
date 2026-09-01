"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Sparkles, Activity, ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { RadialGauge } from "@/components/ui/RadialGauge";

export function AestheticsStorySection() {
  const points = [
    "3D facial millimeter depth vectors across glabella, tear trough & jawline",
    "Standardized 0°, 45°, 90° polarized clinical photo vault",
    "1-scan RFID anti-counterfeit vial verification and automated WhatsApp post-care",
  ];

  return (
    <section id="missing-loop" className="py-16 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white text-slate-900">
      <div className="space-y-12">
        {/* Top Header Scramble Tags */}
        <div className="flex items-center justify-between border-b border-slate-200 pb-4 text-xs font-mono text-slate-500">
          <div className="flex items-center gap-2">
            <span className="text-amber-800 font-bold">01.</span>
            <span className="uppercase tracking-widest font-bold text-slate-900">THE INJECTOR BOTTLENECK</span>
          </div>
          <div className="uppercase tracking-widest text-slate-400 hidden sm:block">
            DIRECT-TO-BUILDER MEDSPA OS
          </div>
        </div>

        {/* Dual Content Grid & Sticky Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 items-start">
          {/* Left Column: Visual Showcase with 3D Tilt & Radial Gauges */}
          <div className="lg:col-span-7 space-y-6">
            <TiltCard className="rounded-[32px] overflow-hidden border border-amber-200/80 bg-[#FFFDF7] p-6 sm:p-8 shadow-xl space-y-5">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-white border border-amber-200 text-xs font-mono font-bold text-amber-800 shadow-sm">
                  LIVE INJECTION RADAR
                </span>
                <span className="text-xs font-mono text-emerald-700 font-bold bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                  SUITE 01: ACTIVE SESSION
                </span>
              </div>

              <div className="space-y-1.5">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-display">
                  3D Anatomical Vector & Depth Charting
                </h3>
                <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
                  Injectors tap any facial quadrant to record precise neurotoxin units and dermal filler volume across Forehead Frontalis, Glabella, and Cheeks with zero guesswork.
                </p>
              </div>

              {/* Simulated Treatment Preview */}
              <div className="p-3.5 rounded-2xl bg-white border border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                <div className="space-y-0.5">
                  <div className="text-slate-400">PATIENT:</div>
                  <div className="font-bold text-slate-900">Elena Rostova (VIP #1042)</div>
                </div>
                <div className="space-y-0.5">
                  <div className="text-slate-400">PROCEDURE:</div>
                  <div className="font-bold text-amber-800">Mid-Face Juvederm Voluma</div>
                </div>
                <div className="space-y-0.5">
                  <div className="text-slate-400">VIAL RFID:</div>
                  <div className="font-bold text-emerald-600">LOT #AL-8924 (Verified ✓)</div>
                </div>
              </div>
            </TiltCard>

            {/* Metric KPI Banner with Radial Gauges */}
            <div className="grid grid-cols-3 gap-3 pt-1">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between items-center text-center shadow-sm space-y-2">
                <RadialGauge value={100} size={64} strokeWidth={6} color="#D97706" bgColor="#FDE68A" label="" suffix="%" />
                <div className="text-xs font-mono font-bold text-slate-700">Vector Accuracy</div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between items-center text-center shadow-sm space-y-2">
                <RadialGauge value={96.8} size={64} strokeWidth={6} color="#059669" bgColor="#A7F3D0" label="" suffix="%" />
                <div className="text-xs font-mono font-bold text-slate-700">VIP Retention</div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between items-center text-center shadow-sm space-y-2">
                <RadialGauge value={100} size={64} strokeWidth={6} color="#2563EB" bgColor="#DBEAFE" label="" suffix="%" />
                <div className="text-xs font-mono font-bold text-slate-700">Vial Lineage</div>
              </div>
            </div>
          </div>

          {/* Right Column: Minimal Editorial Narrative */}
          <div className="lg:col-span-5 space-y-6 sticky top-28">
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-slate-950 uppercase leading-[1.05]">
                Why Generic Salon Apps Fail In MedSpas.
              </h2>
              <p className="text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
                Generic salon booking tools don't understand vascular danger zones, cannula depth vectors, or standardized clinical photography.
              </p>
            </div>

            <div className="space-y-2.5 pt-2 font-sans text-sm sm:text-base text-slate-700">
              {points.map((pt, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-200/80 font-bold text-slate-800 shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-amber-700 shrink-0" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
