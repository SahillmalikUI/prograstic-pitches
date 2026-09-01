"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, HeartPulse, Activity, ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { RadialGauge } from "@/components/ui/RadialGauge";

export function FertilityStorySection() {
  const points = [
    "Two-factor RFID barcode double-witnessing on every dish",
    "Real-time follicular diameter graphs & trigger shot timing",
    "Automated compassionate couple milestone updates on WhatsApp",
  ];

  return (
    <section id="missing-loop" className="py-16 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white text-slate-900">
      <div className="space-y-12">
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

        {/* Dual Content Grid & Sticky Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 items-start">
          {/* Left Column: Real Cryo Lab Photography with 3D Tilt & Radial Gauges */}
          <div className="lg:col-span-7 space-y-6">
            <TiltCard className="rounded-[32px] overflow-hidden border border-slate-200 bg-slate-50 shadow-xl">
              <div className="relative w-full aspect-[16/10] min-h-[300px]">
                <Image
                  src="/mockups/fertility_cryo_tank.jpg"
                  alt="Embryologist Auditing Liquid Nitrogen Cryo Tank"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                
                {/* Overlay Stat */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-white/95 border border-slate-200 backdrop-blur-md flex items-center justify-between text-xs font-mono shadow-lg">
                  <div className="flex items-center gap-2 text-slate-900 font-bold">
                    <Activity className="w-4 h-4 text-rose-600" />
                    <span>TANK 04: LN2 CRYO-TELEMETRY</span>
                  </div>
                  <span className="text-blue-700 font-bold bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                    -196.3°C STABLE
                  </span>
                </div>
              </div>
            </TiltCard>

            {/* Metric KPI Banner with Radial Gauges */}
            <div className="grid grid-cols-3 gap-3 pt-1">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between items-center text-center shadow-sm space-y-2">
                <RadialGauge value={100} size={64} strokeWidth={6} color="#E11D48" bgColor="#FFE4E6" label="" suffix="%" />
                <div className="text-xs font-mono font-bold text-slate-700">RFID Witness</div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between items-center text-center shadow-sm space-y-2">
                <RadialGauge value={100} size={64} strokeWidth={6} color="#059669" bgColor="#A7F3D0" label="" suffix="%" />
                <div className="text-xs font-mono font-bold text-slate-700">Trigger Acc.</div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between items-center text-center shadow-sm space-y-2">
                <RadialGauge value={100} size={64} strokeWidth={6} color="#2563EB" bgColor="#DBEAFE" label="" suffix="%" />
                <div className="text-xs font-mono font-bold text-slate-700">Zero Error</div>
              </div>
            </div>
          </div>

          {/* Right Column: Minimal Editorial Narrative */}
          <div className="lg:col-span-5 space-y-6 sticky top-28">
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-slate-950 uppercase leading-[1.05]">
                Why Generic Software Fails In Embryology.
              </h2>
              <p className="text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
                Generic hospital systems don't understand oocyte maturity, blastocyst grading, or liquid nitrogen cryo-tank mapping.
              </p>
            </div>

            <div className="space-y-2.5 pt-2 font-sans text-sm sm:text-base text-slate-700">
              {points.map((pt, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-200/80 font-bold text-slate-800 shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-rose-600 shrink-0" />
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
