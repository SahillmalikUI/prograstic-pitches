"use client";

import React from "react";
import { Layers, ArrowRight, CheckCircle2, Cpu, Sparkles, Terminal, Wrench } from "lucide-react";
import { IndustryVertical } from "@/data/verticals";

interface IndustrialCapabilitiesSectionProps {
  vertical: IndustryVertical;
  onOpenScopeModal: () => void;
}

export function IndustrialCapabilitiesSection({ vertical, onOpenScopeModal }: IndustrialCapabilitiesSectionProps) {
  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#090A0E] border-y border-slate-800 text-white font-industrial">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF5500]/10 border border-[#FF5500]/30 text-xs sm:text-sm font-mono font-bold text-[#FF8540]">
            <Cpu className="w-4 h-4 text-[#FF5500]" />
            <span>CUSTOM INDUSTRIAL PLANT MODULES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            Modular Systems We Build For Modern Manufacturing Plants
          </h2>
          <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-sans">
            Built for heavy industrial duty. Integrates directly with PLC machinery, barcode scanners, and internal ERP databases.
          </p>
        </div>

        {/* 4 Custom Capabilities Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {vertical.customCapabilities.map((cap, idx) => (
            <div
              key={idx}
              className="p-8 sm:p-10 rounded-[32px] bg-slate-900 border border-slate-800 shadow-xl industrial-card-hover space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#FF5500]/10 text-[#FF8540] border border-[#FF5500]/30">
                    {cap.tag}
                  </span>
                  <span className="text-xs font-mono text-slate-500">Module 0{idx + 1}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {cap.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
                  {cap.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-[#FF5500] shrink-0" />
                <span>Restricted-role operator permissions & audit logs</span>
              </div>
            </div>
          ))}
        </div>

        {/* Industrial Discovery Banner */}
        <div className="p-10 sm:p-14 rounded-[36px] bg-slate-900 border border-slate-800 text-white flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-3 text-center lg:text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-mono text-[#FF8540]">
              <Terminal className="w-3.5 h-3.5" />
              <span>Plant Engineering Discovery</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
              Need custom barcode hardware or PLC machine integration?
            </h3>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-sans">
              Talk directly with our lead industrial software developers. We engineer systems that survive the physical plant floor.
            </p>
          </div>

          <button
            onClick={onOpenScopeModal}
            className="px-9 py-4 rounded-full bg-[#FF5500] hover:bg-[#FF6A1A] text-white font-black text-sm sm:text-base uppercase tracking-wider transition-all hover:scale-105 shadow-xl shrink-0 flex items-center gap-2.5"
          >
            <span>Discuss Architecture</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}
