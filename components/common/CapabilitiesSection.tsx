"use client";

import React from "react";
import { CheckCircle2, Terminal, ArrowRight } from "lucide-react";
import { IndustryVertical } from "@/data/verticals";

interface CapabilitiesSectionProps {
  vertical: IndustryVertical;
  onOpenScopeModal: () => void;
}

export function CapabilitiesSection({ vertical, onOpenScopeModal }: CapabilitiesSectionProps) {
  return (
    <section id="capabilities" className="py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-mono font-medium tracking-wide">
            <Terminal className="w-3.5 h-3.5 text-indigo-600" />
            CUSTOM SOFTWARE CAPABILITIES
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 font-display">
            Modular Systems We Architect & Build For Your Practice
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Every module is engineered specifically for your team, deployed to your private infrastructure, with zero recurring per-user software licensing fees.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {vertical.customCapabilities.map((cap, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 clean-card-hover flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2.5">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 border border-indigo-100 px-2 py-0.5 rounded-full">
                  {cap.tag}
                </span>
                <h3 className="text-base font-bold text-slate-900 leading-snug">
                  {cap.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {cap.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200 flex items-center gap-1.5 text-xs font-semibold text-slate-800">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Production Engineered</span>
              </div>
            </div>
          ))}
        </div>

        {/* Integration Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1.5 text-center sm:text-left">
            <div className="text-xs font-mono text-indigo-400 font-semibold uppercase tracking-wider">
              Bespoke Architecture
            </div>
            <h4 className="text-lg sm:text-xl font-bold font-display">
              Need a custom workflow or existing database migration?
            </h4>
            <p className="text-xs text-slate-400 max-w-xl">
              We audit your existing Excel sheets, paper cards, or third-party databases and engineer a clean, unified migration plan.
            </p>
          </div>

          <button
            onClick={onOpenScopeModal}
            className="px-6 py-3 rounded-full bg-white hover:bg-slate-100 text-slate-900 font-bold text-xs uppercase tracking-wider transition-all shrink-0 flex items-center gap-2"
          >
            <span>Discuss Custom Architecture</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
