"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2, TrendingUp, Smile, Activity, ArrowRight, ShieldCheck, Zap, Layers } from "lucide-react";

export function DentalStorySection() {
  return (
    <section id="missing-loop" className="py-24 sm:py-36 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white text-slate-900">
      <div className="space-y-16">
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-start">
          {/* Left Column: Visual Showcase & KPIs */}
          <div className="lg:col-span-7 space-y-6">
            <div className="relative rounded-[32px] overflow-hidden border border-slate-200 bg-[#F4FBFA] p-8 sm:p-10 shadow-xl space-y-6">
              <div className="flex items-center justify-between">
                <span className="px-3.5 py-1.5 rounded-full bg-white border border-teal-200 text-xs font-mono font-bold text-teal-800 shadow-sm">
                  LIVE CHAIR TELEMETRY
                </span>
                <span className="text-xs font-mono text-emerald-700 font-bold bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                  CHAIR 01 - 04 ACTIVE
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-display">
                  32-Tooth Digital Odontogram Sync
                </h3>
                <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
                  Dentists tap any tooth on the screen to instantly apply clinical treatments: Composite Restorations, Ceramic Crowns, Root Canal RCTs, or Implants.
                </p>
              </div>

              {/* Simulated Tooth Quadrant Quick Preview */}
              <div className="p-4 rounded-2xl bg-white border border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                <div className="space-y-1">
                  <div className="text-slate-400">PATIENT:</div>
                  <div className="font-bold text-slate-900">Aditya Sharma (Case #4892)</div>
                </div>
                <div className="space-y-1">
                  <div className="text-slate-400">CHAIR TIME:</div>
                  <div className="font-bold text-teal-700">14 min elapsed</div>
                </div>
                <div className="space-y-1">
                  <div className="text-slate-400">TREATMENT:</div>
                  <div className="font-bold text-emerald-600">Tooth #16 RCT + Crown</div>
                </div>
              </div>
            </div>

            {/* Metric KPI Banner */}
            <div className="grid grid-cols-3 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1 text-center sm:text-left">
                <div className="text-3xl sm:text-4xl font-extrabold font-display text-teal-700">30s</div>
                <div className="text-xs font-mono font-bold text-slate-600">Odontogram Charting</div>
              </div>
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1 text-center sm:text-left">
                <div className="text-3xl sm:text-4xl font-extrabold font-display text-emerald-600">100%</div>
                <div className="text-xs font-mono font-bold text-slate-600">Lab Case Tracking</div>
              </div>
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1 text-center sm:text-left">
                <div className="text-3xl sm:text-4xl font-extrabold font-display text-blue-600">0</div>
                <div className="text-xs font-mono font-bold text-slate-600">Lost Paper Slips</div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative */}
          <div className="lg:col-span-5 space-y-8 sticky top-28">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-slate-950 uppercase leading-[1.05]">
                Why Generic Clinic Software Fails At The Dental Chair.
              </h2>
              <p className="text-base sm:text-xl text-slate-600 font-sans leading-relaxed">
                Dentists spend their days wearing sterile gloves. Generic practice software requires mouse clicking through 40 dropdown menus, leading to incomplete patient notes and delayed prosthetic lab deliveries.
              </p>
            </div>

            <div className="space-y-4 text-base sm:text-lg font-sans text-slate-700">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-teal-600 shrink-0 mt-0.5" />
                <span><strong>1-Tap Visual Odontogram:</strong> Tap any tooth on your iPad or chairside screen to mark restorations and generate estimates.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-teal-600 shrink-0 mt-0.5" />
                <span><strong>Digital Lab Job Cards:</strong> Automated STL file dispatch to dental milling labs with real-time delivery countdowns.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-teal-600 shrink-0 mt-0.5" />
                <span><strong>WhatsApp Patient Estimates:</strong> Transparent treatment plans with visual tooth diagrams and 1-tap EMI links sent to patients.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
