"use client";

import React from "react";
import { Check, X, ShieldCheck, Zap } from "lucide-react";

export function FertilityComparisonTable() {
  const comparisons = [
    {
      feature: "Embryo Grading & Time-Lapse Capture",
      prograstic: "Built-in Gardner 4AA grading with live optical dish photos",
      legacy: "Generic text notes in hospital EMR with no visual photo records",
    },
    {
      feature: "Specimen Security & Electronic Witnessing",
      prograstic: "Mandatory dual-biometric/RFID scan on every dish transfer",
      legacy: "Paper stickers on petri dishes with manual initials by embryologists",
    },
    {
      feature: "Cryo-Storage Tank & Straw Inventory",
      prograstic: "Interactive 3D canister maps with -196°C live temperature alarms",
      legacy: "Manual Excel sheets or physical binder books prone to misplaced straws",
    },
    {
      feature: "Patient WhatsApp Journey & Cycle Transparency",
      prograstic: "Automated compassionate milestone cards sent directly to couples",
      legacy: "Anxious couples calling clinic front desk repeatedly for updates",
    },
    {
      feature: "Deployment & Code Ownership",
      prograstic: "Live custom software deployed in 14-day agile sprints on private cloud",
      legacy: "6 to 12 months rigid implementation with perpetual user license fees",
    },
  ];

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12 bg-white text-slate-900">
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono font-bold text-slate-800">
          <span>THE CLINICAL COMPARISON</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 font-display tracking-tight">
          Why Modern IVF Clinics Replace Generic HMS
        </h2>
        <p className="text-base sm:text-lg text-slate-600 font-sans">
          Compare bespoke embryology-led clinical software with rigid general hospital systems.
        </p>
      </div>

      <div className="rounded-[36px] bg-white border border-slate-200 overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="p-5 sm:p-7 font-mono text-slate-500 uppercase text-xs">IVF Operational Dimension</th>
                <th className="p-5 sm:p-7 font-bold text-rose-950 bg-rose-50/60 border-x border-rose-100 text-sm sm:text-base">
                  Prograstic Fertility OS
                </th>
                <th className="p-5 sm:p-7 font-mono text-slate-400 uppercase text-xs">Generic Hospital Software</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {comparisons.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                  <td className="p-5 sm:p-7 font-bold text-slate-900 font-sans max-w-xs">
                    {row.feature}
                  </td>
                  <td className="p-5 sm:p-7 bg-rose-50/30 border-x border-rose-100 text-slate-800 font-medium">
                    <div className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
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
