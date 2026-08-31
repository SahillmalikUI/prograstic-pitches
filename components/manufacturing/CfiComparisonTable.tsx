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
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12 bg-white text-slate-900">
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono font-bold text-slate-800">
          <span>THE FACTORY COMPARISON</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 font-display tracking-tight uppercase">
          Why Modern Plants Replace Legacy MES
        </h2>
        <p className="text-base sm:text-lg text-slate-600 font-sans">
          Compare bespoke engineering-led plant software with rigid generic ERP packages.
        </p>
      </div>

      <div className="rounded-[36px] bg-white border border-slate-200 overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="p-5 sm:p-7 font-mono text-slate-500 uppercase text-xs">Plant Operational Dimension</th>
                <th className="p-5 sm:p-7 font-bold text-orange-950 bg-orange-50/60 border-x border-orange-100 text-sm sm:text-base">
                  Prograstic Industrial OS
                </th>
                <th className="p-5 sm:p-7 font-mono text-slate-400 uppercase text-xs">Legacy MES / Generic ERP</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {comparisons.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                  <td className="p-5 sm:p-7 font-bold text-slate-900 font-sans max-w-xs">
                    {row.feature}
                  </td>
                  <td className="p-5 sm:p-7 bg-orange-50/30 border-x border-orange-100 text-slate-800 font-medium">
                    <div className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
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
