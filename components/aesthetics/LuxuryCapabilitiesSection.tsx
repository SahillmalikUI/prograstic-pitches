"use client";

import React from "react";
import { Layers, ArrowRight, CheckCircle2, Cpu, Sparkles, Terminal, Heart } from "lucide-react";
import { IndustryVertical } from "@/data/verticals";

interface LuxuryCapabilitiesSectionProps {
  vertical: IndustryVertical;
  onOpenScopeModal: () => void;
}

export function LuxuryCapabilitiesSection({ vertical, onOpenScopeModal }: LuxuryCapabilitiesSectionProps) {
  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#F5EFEB] border-y border-[#EAE3D9]">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EFE7DC] border border-[#DFCFC0] text-xs sm:text-sm font-mono font-bold text-[#8C6B41]">
            <Sparkles className="w-4 h-4 text-[#C8A97E]" />
            <span>BESPOKE MEDICAL AESTHETICS CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-normal text-[#1C1917] font-serif-luxury tracking-tight">
            Custom Software Modules For Dermatology & MedSpa Centers
          </h2>
          <p className="text-base sm:text-xl text-[#57534E] max-w-3xl mx-auto leading-relaxed font-sans">
            Crafted for premium clinical experiences. Every module is tailored to your practitioner protocols, treatment packages, and patient photo privacy standards.
          </p>
        </div>

        {/* 4 Luxury Capabilities Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {vertical.customCapabilities.map((cap, idx) => (
            <div
              key={idx}
              className="p-8 sm:p-10 rounded-[32px] bg-white border border-[#EAE3D9] shadow-sm luxury-card-hover space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#F3ECE0] text-[#8C6B41] border border-[#E2D5C3]">
                    {cap.tag}
                  </span>
                  <span className="text-xs font-mono text-[#A8A29E]">Module 0{idx + 1}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-normal text-[#1C1917] font-serif-luxury">
                  {cap.title}
                </h3>
                <p className="text-sm sm:text-base text-[#57534E] leading-relaxed font-sans">
                  {cap.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#F0E8DC] flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#78716C]">
                <CheckCircle2 className="w-4 h-4 text-[#8C6B41] shrink-0" />
                <span>Encrypted private cloud database & iPad compatible</span>
              </div>
            </div>
          ))}
        </div>

        {/* Luxury Scope Call Banner */}
        <div className="p-10 sm:p-14 rounded-[36px] bg-[#1C1917] text-[#FAF7F2] flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl shadow-[#1C1917]/20">
          <div className="space-y-3 text-center lg:text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-mono text-[#C8A97E]">
              <Terminal className="w-3.5 h-3.5" />
              <span>Direct Engineering Scope Discovery</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-normal font-serif-luxury text-[#FAF7F2]">
              Ready to modernize your clinic's patient consultation roadmap?
            </h3>
            <p className="text-sm sm:text-base text-[#A8A29E] leading-relaxed font-sans">
              Talk directly with our lead software architects. No account managers or high-pressure sales reps.
            </p>
          </div>

          <button
            onClick={onOpenScopeModal}
            className="px-9 py-4 rounded-full bg-[#C8A97E] hover:bg-[#B89668] text-[#1C1917] font-bold text-sm sm:text-base uppercase tracking-wider transition-all hover:scale-105 shadow-xl shrink-0 flex items-center gap-2.5"
          >
            <span>Schedule Scope Call</span>
            <ArrowRight className="w-4 h-4 text-[#1C1917]" />
          </button>
        </div>
      </div>
    </section>
  );
}
