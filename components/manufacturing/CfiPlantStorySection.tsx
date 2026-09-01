"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Cpu, Activity, ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { RadialGauge } from "@/components/ui/RadialGauge";

export function CfiPlantStorySection() {
  const points = [
    "Direct PLC & SCADA machine data capture in milliseconds",
    "Barcode-driven raw material to dispatch lot lineage",
    "Operator touchscreens built for noisy shopfloor environments",
  ];

  return (
    <section id="missing-loop" className="py-16 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white text-slate-900">
      <div className="space-y-12">
        {/* Top Header Scramble Tags */}
        <div className="flex items-center justify-between border-b border-slate-200 pb-4 text-xs font-mono text-slate-500">
          <div className="flex items-center gap-2">
            <span className="text-orange-600 font-bold">01.</span>
            <span className="uppercase tracking-widest font-bold text-slate-900">THE SHOPFLOOR BOTTLENECK</span>
          </div>
          <div className="uppercase tracking-widest text-slate-400 hidden sm:block">
            DIRECT-TO-BUILDER ENGINEERING
          </div>
        </div>

        {/* Dual Industrial Content Grid & Sticky Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 items-start">
          {/* Left Column: Industrial Photography with 3D Tilt & Radial Gauges */}
          <div className="lg:col-span-7 space-y-6">
            <TiltCard className="rounded-[32px] overflow-hidden border border-slate-200 bg-slate-50 shadow-xl">
              <div className="relative w-full aspect-[16/10] min-h-[300px]">
                <Image
                  src="/mockups/manufacturing_quality_lab.jpg"
                  alt="Industrial QA Engineer Operating Laser CMM Measurement Terminal"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                
                {/* Overlay Stat */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-white/95 border border-slate-200 backdrop-blur-md flex items-center justify-between text-xs font-mono shadow-lg">
                  <div className="flex items-center gap-2 text-slate-900 font-bold">
                    <Activity className="w-4 h-4 text-orange-600" />
                    <span>CMM-02: LASER METROLOGY</span>
                  </div>
                  <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    TOLERANCE ±0.002mm
                  </span>
                </div>
              </div>
            </TiltCard>

            {/* 3 Clean Metric Badges with Visual Radial Progress Arc */}
            <div className="grid grid-cols-3 gap-3 pt-1">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between items-center text-center shadow-sm space-y-2">
                <RadialGauge value={38} size={64} strokeWidth={6} color="#EA580C" bgColor="#FED7AA" label="" suffix="%" />
                <div className="text-xs font-mono font-bold text-slate-700">Faster Cycles</div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between items-center text-center shadow-sm space-y-2">
                <RadialGauge value={99.9} size={64} strokeWidth={6} color="#059669" bgColor="#A7F3D0" label="" suffix="%" />
                <div className="text-xs font-mono font-bold text-slate-700">Lot Accuracy</div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between items-center text-center shadow-sm space-y-2">
                <RadialGauge value={100} size={64} strokeWidth={6} color="#2563EB" bgColor="#DBEAFE" label="" suffix="%" />
                <div className="text-xs font-mono font-bold text-slate-700">Paperless</div>
              </div>
            </div>
          </div>

          {/* Right Column: Minimal Editorial Narrative */}
          <div className="lg:col-span-5 space-y-6 sticky top-28">
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-slate-950 uppercase leading-[1.05]">
                Why Generic ERPs Fail On The Shopfloor.
              </h2>
              <p className="text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
                Generic ERPs require 30 mouse clicks per batch. We replace them with 1-tap touchscreens and live PLC machine telemetry.
              </p>
            </div>

            <div className="space-y-2.5 pt-2 font-sans text-sm sm:text-base text-slate-700">
              {points.map((pt, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-200/80 font-bold text-slate-800 shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-orange-600 shrink-0" />
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
