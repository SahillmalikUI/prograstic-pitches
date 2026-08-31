"use client";

import React from "react";
import Image from "next/image";
import { Zap, Activity, HeartPulse, CheckCircle2, ArrowRight, ShieldCheck, Clock, Users } from "lucide-react";

export function BevelPillarsSection() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16 bg-white text-slate-900">
      {/* Header - Matching Bevel Screenshot 3 */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <h2 className="text-4xl sm:text-6xl font-extrabold text-slate-950 font-display tracking-tight leading-[1.08]">
          Start the day with confidence
        </h2>
        <p className="text-lg sm:text-xl text-slate-600 font-sans leading-relaxed">
          Turn your hospital's signals into clear, actionable metrics.
        </p>
      </div>

      {/* 3 Crisp Light Blue Bevel Pillar Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
        {/* Card 1: Flow (Strain Equivalent) */}
        <div className="p-8 sm:p-10 rounded-[36px] bg-[#F2F6FA] border border-slate-200/80 flex flex-col justify-between space-y-8 shadow-sm hover:shadow-xl transition-all duration-300">
          <div className="space-y-3">
            <h3 className="text-3xl font-extrabold text-slate-950 font-display">
              Flow
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
              Track how smoothly your OPD is running with one number that captures daily patient throughput and queue velocity.
            </p>
          </div>

          {/* Embedded Clean White Mini UI Card */}
          <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-md space-y-4">
            <div className="flex items-center justify-between text-xs font-mono text-slate-500 pb-2 border-b border-slate-100">
              <span className="font-bold text-slate-900">OPD VELOCITY</span>
              <span className="text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded-full">Normal Range</span>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <div className="text-4xl font-extrabold text-slate-950 font-display">94%</div>
                <div className="text-xs text-slate-500 font-mono">Queue Clearance</div>
              </div>
              <div className="w-12 h-12 rounded-full border-4 border-emerald-500 border-t-transparent flex items-center justify-center font-bold text-emerald-600 text-xs">
                ✓
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-600 flex items-center justify-between font-mono">
              <span>Avg Waiting:</span>
              <strong className="text-slate-900">8.4 mins</strong>
            </div>
          </div>
        </div>

        {/* Card 2: Wards (Sleep Equivalent) */}
        <div className="p-8 sm:p-10 rounded-[36px] bg-[#F2F6FA] border border-slate-200/80 flex flex-col justify-between space-y-8 shadow-sm hover:shadow-xl transition-all duration-300">
          <div className="space-y-3">
            <h3 className="text-3xl font-extrabold text-slate-950 font-display">
              Wards
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
              Discover real-time bed availability and zero double-bookings by knowing your exact ward turnover.
            </p>
          </div>

          {/* Embedded Clean White Mini UI Card */}
          <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-md space-y-4">
            <div className="flex items-center justify-between text-xs font-mono text-slate-500 pb-2 border-b border-slate-100">
              <span className="font-bold text-slate-900">ICU BED RADAR</span>
              <span className="text-sky-600 font-bold bg-sky-50 px-2 py-0.5 rounded-full">11 / 12 Active</span>
            </div>

            <div className="grid grid-cols-4 gap-2 text-center text-xs font-mono font-bold">
              <div className="p-2 rounded-lg bg-rose-100 text-rose-800 border border-rose-200">101</div>
              <div className="p-2 rounded-lg bg-rose-100 text-rose-800 border border-rose-200">102</div>
              <div className="p-2 rounded-lg bg-rose-100 text-rose-800 border border-rose-200">103</div>
              <div className="p-2 rounded-lg bg-emerald-100 text-emerald-800 border border-emerald-200">104 ✓</div>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-600 flex items-center justify-between font-mono">
              <span>Next Discharge:</span>
              <strong className="text-slate-900">Bed 102 (2:00 PM)</strong>
            </div>
          </div>
        </div>

        {/* Card 3: Care (Recovery Equivalent) */}
        <div className="p-8 sm:p-10 rounded-[36px] bg-[#F2F6FA] border border-slate-200/80 flex flex-col justify-between space-y-8 shadow-sm hover:shadow-xl transition-all duration-300">
          <div className="space-y-3">
            <h3 className="text-3xl font-extrabold text-slate-950 font-display">
              Care
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
              30-second digital prescriptions, immediate lab dispatch, and longitudinal patient health records.
            </p>
          </div>

          {/* Embedded Clean White Mini UI Card */}
          <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-md space-y-4">
            <div className="flex items-center justify-between text-xs font-mono text-slate-500 pb-2 border-b border-slate-100">
              <span className="font-bold text-slate-900">DOCTOR EMR SPEED</span>
              <span className="text-purple-600 font-bold bg-purple-50 px-2 py-0.5 rounded-full">Instant Sync</span>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <div className="text-4xl font-extrabold text-slate-950 font-display">30s</div>
                <div className="text-xs text-slate-500 font-mono">Rx Completion Time</div>
              </div>
              <div className="text-xs font-mono text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                4x Faster
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-600 flex items-center justify-between font-mono">
              <span>Pharmacy Dispatch:</span>
              <strong className="text-emerald-600">Automated WhatsApp</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
