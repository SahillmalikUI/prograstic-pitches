"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, ShieldCheck, CheckCircle2, Star, Sparkles, Activity, Heart, Zap, Clock } from "lucide-react";
import { IndustryVertical } from "@/data/verticals";

interface BevelHospitalHeroProps {
  vertical: IndustryVertical;
  onOpenScopeModal: () => void;
}

export function BevelHospitalHero({ vertical, onOpenScopeModal }: BevelHospitalHeroProps) {
  return (
    <section className="relative pt-16 sm:pt-24 pb-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F0F6FF] via-[#EBF3FE] to-white text-slate-900 overflow-hidden selection:bg-slate-900 selection:text-white">
      {/* Bevel-Style Iridescent Rainbow & Cyan Aurora Ribbon in Background */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] sm:w-[1200px] h-[350px] bg-gradient-to-r from-[#A7F3D0]/40 via-[#93C5FD]/50 to-[#FBCFE8]/40 rounded-full blur-[90px] pointer-events-none transform -rotate-3" />
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#38BDF8]/20 rounded-full blur-[100px] pointer-events-none" />

      {/* Subtle Grid */}
      <div className="absolute inset-0 bg-grid-prograstic opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16 relative z-10">
        {/* Top Header Group */}
        <div className="text-center space-y-5 max-w-4xl mx-auto">
          {/* Main Headline - Exact Bevel Scale */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-950 tracking-tight font-display leading-[1.08]">
            Your Connected Hospital Operating System
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-2xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
            Make sense of your hospital data, from OPD queues to ward beds, and everything in between.
          </p>

          {/* Bevel-Style Solid Black Pill CTA */}
          <div className="flex flex-col items-center justify-center gap-3 pt-2">
            <button
              onClick={onOpenScopeModal}
              className="px-9 py-4 rounded-full bg-slate-950 hover:bg-slate-800 text-white font-bold text-sm sm:text-base transition-all hover:scale-105 shadow-xl shadow-slate-950/15 flex items-center gap-2.5"
            >
              <span>Schedule 15-Min Scope Call</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>

            {/* Star Rating Badge */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-600 pt-1">
              <div className="flex items-center text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <span className="font-bold text-slate-900">4.9</span>
              <span className="text-slate-400">•</span>
              <span>ABDM & HIPAA Level-3 Verified</span>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* BEVEL-STYLE LIGHT DEVICE SHOWCASE (iPhone + Smart Watch + Floating Pills) */}
        {/* ========================================================================= */}
        <div className="relative pt-6 flex items-center justify-center">
          {/* The Devices Cluster */}
          <div className="relative flex items-center justify-center max-w-2xl mx-auto">
            {/* Floating Pill Left: VO2 Max / Triage Velocity */}
            <div className="absolute -left-4 sm:-left-20 top-1/3 z-20 hidden sm:flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200/90 shadow-xl animate-in fade-in slide-in-from-left-6 duration-700">
              <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                🫁
              </div>
              <div>
                <div className="text-[10px] uppercase font-mono text-slate-400 font-bold">Ward Clearance</div>
                <div className="text-sm font-extrabold text-slate-900 flex items-center gap-1">
                  <span>98.4%</span>
                  <span className="text-emerald-500 text-xs">↑</span>
                </div>
              </div>
            </div>

            {/* Floating Pill Right: Age / Prescription Speed */}
            <div className="absolute -right-4 sm:-right-20 top-1/4 z-20 hidden sm:flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200/90 shadow-xl animate-in fade-in slide-in-from-right-6 duration-700">
              <div className="w-8 h-8 rounded-full bg-sky-50 text-sky-600 flex items-center justify-center font-bold text-xs font-mono">
                ⚡
              </div>
              <div>
                <div className="text-[10px] uppercase font-mono text-slate-400 font-bold">Avg EMR Speed</div>
                <div className="text-sm font-extrabold text-sky-600">30s Dispatch</div>
              </div>
            </div>

            {/* Center Light iPhone Mockup */}
            <div className="relative w-[280px] sm:w-[320px] aspect-[3/4] rounded-[36px] overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.18)] border-4 border-slate-200/80 bg-white z-10">
              <Image
                src="/mockups/bevel_light_phone.jpg"
                alt="Prograstic Clinical OS Light Mobile Interface"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Overlapping Titanium Smart Watch Mockup */}
            <div className="absolute -bottom-6 -right-6 sm:-right-12 w-[160px] sm:w-[190px] aspect-square rounded-[32px] overflow-hidden shadow-2xl border-4 border-white z-20 hidden xs:block">
              <Image
                src="/mockups/bevel_light_watch.jpg"
                alt="Prograstic Clinical Wearable Telemetry"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Trust Logos / Laurel Wreath Section */}
        <div className="pt-12 text-center space-y-4 border-t border-slate-200/60 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-8 text-xs sm:text-sm font-mono text-slate-600">
            <div className="flex items-center gap-2">
              <span>🏆</span>
              <span className="font-bold text-slate-900">ABDM Level-3 Certified</span>
            </div>
            <span className="text-slate-300">•</span>
            <div className="flex items-center gap-2">
              <span>🔒</span>
              <span className="font-bold text-slate-900">100% Private Cloud</span>
            </div>
            <span className="text-slate-300">•</span>
            <div className="flex items-center gap-2">
              <span>⚡</span>
              <span className="font-bold text-slate-900">14-Day Sprints</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
