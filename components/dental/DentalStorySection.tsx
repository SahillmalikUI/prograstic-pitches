"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Smile, Activity, ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

export function DentalStorySection() {
  const points = [
    "1-tap touch odontogram on chairside iPads",
    "Automated STL CAD/CAM dental lab dispatch",
    "Visual WhatsApp quotes with 0% interest EMI options",
  ];

  return (
    <section id="missing-loop" className="py-16 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white text-slate-900">
      <div className="space-y-12">
        {/* Top Header Scramble Tags */}
        <div className="flex items-center justify-between border-b border-slate-200 pb-4 text-xs font-mono text-slate-500">
          <div className="flex items-center gap-2">
            <span className="text-teal-700 font-bold">01.</span>
            <span className="uppercase tracking-widest font-bold text-slate-900">THE CHAIRSIDE BOTTLENECK</span>
          </div>
          <div className="uppercase tracking-widest text-slate-400 hidden sm:block">
            DIRECT-TO-BUILDER CHAIRSIDE OS
          </div>
        </div>

        {/* Dual Content Grid & Sticky Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 items-start">
          {/* Left Column: Visual Showcase with 3D Tilt */}
          <div className="lg:col-span-7 space-y-6">
            <TiltCard className="rounded-[32px] overflow-hidden border border-slate-200 bg-[#F4FBFA] p-6 sm:p-8 shadow-xl space-y-5">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-white border border-teal-200 text-xs font-mono font-bold text-teal-800 shadow-sm">
                  LIVE CHAIR TELEMETRY
                </span>
                <span className="text-xs font-mono text-emerald-700 font-bold bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                  CHAIR 01 - 04 ACTIVE
                </span>
              </div>

              <div className="space-y-1.5">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-display">
                  32-Tooth Digital Odontogram Sync
                </h3>
                <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
                  Dentists tap any tooth to instantly record Composite Restorations, Ceramic Crowns, RCTs, or Implants.
                </p>
              </div>

              {/* Simulated Tooth Quadrant Quick Preview */}
              <div className="p-3.5 rounded-2xl bg-white border border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                <div className="space-y-0.5">
                  <div className="text-slate-400">PATIENT:</div>
                  <div className="font-bold text-slate-900">Aditya Sharma (Case #4892)</div>
                </div>
                <div className="space-y-0.5">
                  <div className="text-slate-400">CHAIR TIME:</div>
                  <div className="font-bold text-teal-700">14 min elapsed</div>
                </div>
                <div className="space-y-0.5">
                  <div className="text-slate-400">TREATMENT:</div>
                  <div className="font-bold text-emerald-600">Tooth #16 Crown</div>
                </div>
              </div>
            </TiltCard>

            {/* Metric KPI Banner */}
            <div className="grid grid-cols-3 gap-3 pt-1">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-0.5 text-center sm:text-left shadow-sm">
                <div className="text-2xl sm:text-3xl font-extrabold font-display text-teal-700">
                  <AnimatedCounter value={30} suffix="s" />
                </div>
                <div className="text-xs font-mono font-bold text-slate-600">Odontogram</div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-0.5 text-center sm:text-left shadow-sm">
                <div className="text-2xl sm:text-3xl font-extrabold font-display text-emerald-600">
                  <AnimatedCounter value={100} suffix="%" />
                </div>
                <div className="text-xs font-mono font-bold text-slate-600">Lab Traceability</div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-0.5 text-center sm:text-left shadow-sm">
                <div className="text-2xl sm:text-3xl font-extrabold font-display text-blue-600">0</div>
                <div className="text-xs font-mono font-bold text-slate-600">Lost Slips</div>
              </div>
            </div>
          </div>

          {/* Right Column: Minimal Editorial Narrative */}
          <div className="lg:col-span-5 space-y-6 sticky top-28">
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-slate-950 uppercase leading-[1.05]">
                Why Generic Software Fails At The Chair.
              </h2>
              <p className="text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
                Dentists wearing sterile gloves can't navigate 40 dropdown menus. We replace clunky forms with 1-tap touch odontograms.
              </p>
            </div>

            <div className="space-y-2.5 pt-2 font-sans text-sm sm:text-base text-slate-700">
              {points.map((pt, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-200/80 font-bold text-slate-800 shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0" />
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
