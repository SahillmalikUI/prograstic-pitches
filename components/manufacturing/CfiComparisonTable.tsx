"use client";

import React from "react";
import { Check, X, ShieldCheck, Zap } from "lucide-react";

export function CfiComparisonTable() {
  const comparisons = [
    {
      feature: "Shopfloor Operator Tablet Experience",
      prograstic: "Big, glove-friendly touch screens designed for plant workers",
      legacy: "Tiny 1990s desktop dropdowns requiring keyboard and mouse",
    },
    {
      feature: "Machine Sensor & PLC Telemetry",
      prograstic: "Direct connection to PLCs with sub-second live cycle polling",
      legacy: "Manual end-of-shift paper data entry by supervisors",
    },
    {
      feature: "Raw Material Traceability & Batch Lineage",
      prograstic: "Instant 1-scan QR lineage across cutting, WIP, and dispatch",
      legacy: "Searching through physical binder files during customer audits",
    },
    {
      feature: "Deployment Speed & Cost",
      prograstic: "Live custom software deployed in 14-day agile sprints",
      legacy: "6 to 12 months implementation with expensive consultant fees",
    },
    {
      feature: "Software Code Ownership",
      prograstic: "100% private factory cloud with zero monthly user licensing tax",
      legacy: "Perpetual recurring SaaS license fees per connected machine",
    },
  ];

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12 bg-[#0D0F14] text-white">
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono font-bold text-amber-400">
          <span>THE FACTORY COMPARISON</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight uppercase">
          Why Modern Plants Replace Legacy MES
        </h2>
        <p className="text-sm sm:text-base text-slate-400 font-sans">
          Compare bespoke engineering-led plant software with rigid generic ERP packages.
        </p>
      </div>

      <div className="rounded-[36px] bg-[#12161F] border border-white/15 overflow-hidden shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-white/10 bg-black/40">
                <th className="p-5 sm:p-7 font-mono text-slate-400 uppercase text-xs">Plant Operational Dimension</th>
                <th className="p-5 sm:p-7 font-bold text-amber-400 bg-amber-500/10 border-x border-amber-500/20 text-sm sm:text-base">
                  Prograstic Industrial OS
                </th>
                <th className="p-5 sm:p-7 font-mono text-slate-500 uppercase text-xs">Legacy MES / Generic ERP</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {comparisons.map((row, idx) => (
                <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-5 sm:p-7 font-bold text-white font-sans max-w-xs">
                    {row.feature}
                  </td>
                  <td className="p-5 sm:p-7 bg-amber-500/[0.04] border-x border-amber-500/20 text-slate-200 font-medium">
                    <div className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{row.prograstic}</span>
                    </div>
                  </td>
                  <td className="p-5 sm:p-7 text-slate-500">
                    <div className="flex items-start gap-2.5">
                      <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                      <span>{row.legacy}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
