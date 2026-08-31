"use client";

import React from "react";
import { Layers, ArrowRight, CheckCircle2, Cpu, Sparkles, Terminal, ShieldCheck } from "lucide-react";
import { IndustryVertical } from "@/data/verticals";

interface BevelCapabilitiesSectionProps {
  vertical: IndustryVertical;
  onOpenScopeModal: () => void;
}

export function BevelCapabilitiesSection({ vertical, onOpenScopeModal }: BevelCapabilitiesSectionProps) {
  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#050810] border-y border-slate-800 text-white">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs sm:text-sm font-mono font-bold text-cyan-300">
            <Cpu className="w-4 h-4 text-[#00F0FF]" />
            <span>CUSTOM CLINICAL OS CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white font-display tracking-tight">
            Modular Systems We Build For Multi-Specialty Hospitals
          </h2>
          <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-sans">
            Engineered around your specialty protocols, diagnostic equipment interfaces, and zero-downtime private cloud servers.
          </p>
        </div>

        {/* 4 Custom Capabilities Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {vertical.customCapabilities.map((cap, idx) => (
            <div
              key={idx}
              className="p-8 sm:p-10 rounded-[32px] bg-slate-900/80 border border-slate-800 shadow-xl dark-card-hover space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                    {cap.tag}
                  </span>
                  <span className="text-xs font-mono text-slate-500">Module 0{idx + 1}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                  {cap.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
                  {cap.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>HL7 / FHIR & ABDM Compliant Architecture</span>
              </div>
            </div>
          ))}
        </div>

        {/* Scope Discovery Banner */}
        <div className="p-10 sm:p-14 rounded-[36px] bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 text-white flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-3 text-center lg:text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-mono text-cyan-300">
              <Terminal className="w-3.5 h-3.5" />
              <span>Direct Systems Architect Discovery</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-black font-display text-white">
              Ready to eliminate OPD waiting chaos and EMR friction?
            </h3>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-sans">
              Speak directly with our senior software engineers. The person scoping your system is the engineer who builds it.
            </p>
          </div>

          <button
            onClick={onOpenScopeModal}
            className="px-9 py-4 rounded-full bg-[#00F0FF] hover:bg-[#38BDF8] text-slate-950 font-black text-sm sm:text-base uppercase tracking-wider transition-all hover:scale-105 shadow-xl shrink-0 flex items-center gap-2.5"
          >
            <span>Schedule Scope Call</span>
            <ArrowRight className="w-4 h-4 text-slate-950" />
          </button>
        </div>
      </div>
    </section>
  );
}
