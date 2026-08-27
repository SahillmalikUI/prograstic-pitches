"use client";

import React from "react";
import { Layers, ArrowRight, CheckCircle2, Cpu, Sparkles, Terminal } from "lucide-react";
import { IndustryVertical } from "@/data/verticals";

interface CapabilitiesSectionProps {
  vertical: IndustryVertical;
  onOpenScopeModal: () => void;
}

export function CapabilitiesSection({ vertical, onOpenScopeModal }: CapabilitiesSectionProps) {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-xs sm:text-sm font-mono font-bold text-indigo-700">
            <Cpu className="w-4 h-4" />
            <span>CUSTOM SOFTWARE CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight font-display">
            Modular Systems We Build For {vertical.name.split("&")[0].trim()}
          </h2>
          <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            No cookie-cutter templates. Every engine is designed around your specific team protocols, hardware, and data security requirements.
          </p>
        </div>

        {/* 4 Custom Capabilities Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {vertical.customCapabilities.map((cap, idx) => (
            <div
              key={idx}
              className="p-8 sm:p-10 rounded-[32px] bg-white border border-slate-200/90 shadow-sm clean-card-hover space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span
                    className="text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full"
                    style={{
                      backgroundColor: `${vertical.accentHex}15`,
                      color: vertical.accentHex,
                    }}
                  >
                    {cap.tag}
                  </span>
                  <span className="text-xs font-mono text-slate-400 font-semibold">Module #{idx + 1}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
                  {cap.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {cap.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-500">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Custom API endpoints & database schemas included</span>
              </div>
            </div>
          ))}
        </div>

        {/* Discuss Custom Architecture Banner */}
        <div className="p-10 sm:p-14 rounded-[36px] bg-slate-900 text-white flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl shadow-slate-900/10">
          <div className="space-y-3 text-center lg:text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-mono text-indigo-300">
              <Terminal className="w-3.5 h-3.5" />
              <span>Direct Architecture Discovery</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold font-display">
              Have a unique workflow or legacy hardware to integrate?
            </h3>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              We connect with your existing scanners, accounting software, databases, or IoT sensors without breaking your daily operations.
            </p>
          </div>

          <button
            onClick={onOpenScopeModal}
            className="px-9 py-4 rounded-full bg-white hover:bg-slate-100 text-slate-900 font-bold text-sm sm:text-base uppercase tracking-wider transition-all hover:scale-105 shadow-xl shrink-0 flex items-center gap-2.5"
          >
            <span>Discuss Architecture</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
