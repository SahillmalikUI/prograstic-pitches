"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Sparkles, ShieldCheck, CheckCircle2, Award, Heart, Scan, Layers } from "lucide-react";
import { IndustryVertical } from "@/data/verticals";

interface LuxuryAestheticHeroProps {
  vertical: IndustryVertical;
  onOpenScopeModal: () => void;
  children?: React.ReactNode;
}

export function LuxuryAestheticHero({ vertical, onOpenScopeModal, children }: LuxuryAestheticHeroProps) {
  return (
    <section className="relative pt-20 pb-28 px-4 sm:px-6 lg:px-8 bg-[#FAF7F2] text-[#1C1917] hero-glow-warm-luxury overflow-hidden">
      {/* Subtle Warm Aesthetic Grid Pattern */}
      <div className="absolute inset-0 bg-grid-prograstic opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        {/* Top Editorial Header */}
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          {/* Champagne Badge */}
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-[#F3ECE0] border border-[#E2D5C3] text-xs sm:text-sm font-mono font-bold text-[#8C6B41] tracking-wider shadow-sm">
            <Sparkles className="w-4 h-4 text-[#C8A97E]" />
            <span>AESTHETIC & DERMATOLOGY STUDIO OS</span>
            <span className="text-[#C5B39E]">•</span>
            <span className="text-[#6E6659] font-medium">Bespoke Clinical Suite</span>
          </div>

          {/* Headline with High-End Serif & Italic Accent */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-normal text-[#1C1917] font-serif-luxury tracking-tight leading-[1.06]">
            Architectural Patient Pipelines & Clinical Portals For{" "}
            <span className="italic font-normal bg-clip-text text-transparent bg-gradient-to-r from-[#B8860B] via-[#C8A97E] to-[#D97D64]">
              High-End Aesthetic Clinics.
            </span>
          </h1>

          {/* Subtitle with Warm Espresso Readability */}
          <p className="text-lg sm:text-2xl text-[#57534E] max-w-3xl mx-auto leading-relaxed font-sans font-normal">
            Elevate your medical aesthetics practice beyond chaotic Instagram DMs and paper chart records. We engineer bespoke intake roadmaps, encrypted before/after progression vaults, and 3D facial injection mapping.
          </p>

          {/* Luxury Editorial CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={onOpenScopeModal}
              className="w-full sm:w-auto px-10 py-4 rounded-full bg-[#1C1917] hover:bg-[#2E2A27] text-[#FAF7F2] font-bold text-sm sm:text-base uppercase tracking-wider transition-all hover:scale-105 shadow-2xl shadow-[#1C1917]/20 flex items-center justify-center gap-3"
            >
              <span>Schedule 15-Min Scope Call</span>
              <ArrowRight className="w-5 h-5 text-[#C8A97E]" />
            </button>

            <a
              href="#missing-loop"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#F0E8DC] hover:bg-[#E8DDCF] text-[#1C1917] font-semibold text-sm sm:text-base transition-colors flex items-center justify-center"
            >
              <span>Explore The Missing Loop</span>
            </a>
          </div>

          {/* Trust Markers */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-3 text-xs sm:text-sm font-mono text-[#78716C]">
            <span className="flex items-center gap-2 text-[#44403C]">
              <CheckCircle2 className="w-4 h-4 text-[#8C6B41]" />
              100% HIPAA Patient Photo Privacy
            </span>
            <span className="text-[#D6CEBE]">•</span>
            <span className="flex items-center gap-2 text-[#44403C]">
              <ShieldCheck className="w-4 h-4 text-[#C8A97E]" />
              Private Cloud Storage
            </span>
            <span className="text-[#D6CEBE]">•</span>
            <span>14-Day Delivery Sprints</span>
          </div>
        </div>

        {/* 4 Luxury Stat Metric Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {vertical.statMetrics.map((m, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-[28px] bg-white border border-[#EAE3D9] shadow-sm luxury-card-hover space-y-2"
            >
              <div className="text-4xl sm:text-5xl font-normal font-serif-luxury text-[#8C6B41] tracking-tight">
                {m.value}
              </div>
              <div className="text-base sm:text-lg font-bold text-[#1C1917] font-sans">{m.label}</div>
              <div className="text-xs sm:text-sm text-[#78716C] font-mono">{m.sublabel}</div>
            </div>
          ))}
        </div>

        {/* Embedded Interactive 3D Face Scrollytelling Scanner */}
        {children && (
          <div className="pt-4">
            <div className="rounded-[36px] bg-white border border-[#EAE3D9] p-2 sm:p-4 shadow-2xl shadow-[#C8A97E]/10">
              {children}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
