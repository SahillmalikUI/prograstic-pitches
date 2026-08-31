"use client";

import React from "react";
import { Check, X, ShieldCheck, Zap } from "lucide-react";

export function BevelComparisonTable() {
  const comparisons = [
    {
      feature: "OPD Patient Queue & Token Routing",
      prograstic: "Dynamic live WhatsApp radar & 1-tap doctor calling",
      legacy: "Manual paper slips and shouting in crowded waiting rooms",
    },
    {
      feature: "Doctor Consultation & Prescription Speed",
      prograstic: "30-second digital voice/touch templates with 1-tap lab orders",
      legacy: "Clunky 20-minute form filling with 40 mandatory input fields",
    },
    {
      feature: "Ward & Bed Occupancy Synchronization",
      prograstic: "Real-time color-coded bed map across reception & nursing tabs",
      legacy: "Phone calls between floors to verify if a bed is cleaned",
    },
    {
      feature: "Data Ownership & Security",
      prograstic: "100% private hospital cloud with ABDM & HIPAA compliance",
      legacy: "Third-party vendor lock-in with periodic data license fees",
    },
    {
      feature: "Deployment & Customization Timeline",
      prograstic: "Live custom software deployed in 14-day agile sprints",
      legacy: "6 to 12 months of expensive vendor consultants and training",
    },
  ];

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono font-bold text-cyan-300">
          <span>THE CLINICAL COMPARISON</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight">
          Why Modern Hospitals Replace Legacy HMS
        </h2>
        <p className="text-sm sm:text-base text-slate-400 font-sans">
          Compare the engineering approach between bespoke clinical software and rigid 10-year-old hospital systems.
        </p>
      </div>

      {/* Dark Bevel Comparison Card */}
      <div className="rounded-[36px] bg-white/[0.03] border border-white/10 overflow-hidden shadow-2xl backdrop-blur-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-white/10 bg-white/[0.02]">
                <th className="p-5 sm:p-7 font-mono text-slate-400 uppercase text-xs">Operational Dimension</th>
                <th className="p-5 sm:p-7 font-bold text-[#00F0FF] bg-cyan-950/20 border-x border-cyan-500/20 text-sm sm:text-base">
                  Prograstic Clinical OS
                </th>
                <th className="p-5 sm:p-7 font-mono text-slate-500 uppercase text-xs">Legacy Hospital Software</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {comparisons.map((row, idx) => (
                <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-5 sm:p-7 font-bold text-white font-sans max-w-xs">
                    {row.feature}
                  </td>
                  <td className="p-5 sm:p-7 bg-cyan-950/10 border-x border-cyan-500/10 text-slate-200 font-medium">
                    <div className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-[#00F0FF] shrink-0 mt-0.5" />
                      <span>{row.prograstic}</span>
                    </div>
                  </td>
                  <td className="p-5 sm:p-7 text-slate-500">
                    <div className="flex items-start gap-2.5">
                      <X className="w-4 h-4 text-rose-500/80 shrink-0 mt-0.5" />
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
