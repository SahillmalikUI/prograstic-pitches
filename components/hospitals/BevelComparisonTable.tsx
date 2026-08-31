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
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12 bg-white text-slate-900">
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono font-bold text-slate-800">
          <span>THE CLINICAL COMPARISON</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 font-display tracking-tight">
          Why Modern Hospitals Replace Legacy HMS
        </h2>
        <p className="text-sm sm:text-base text-slate-600 font-sans">
          Compare the engineering approach between bespoke clinical software and rigid 10-year-old hospital systems.
        </p>
      </div>

      {/* Clean Light Comparison Table Card */}
      <div className="rounded-[36px] bg-white border border-slate-200 overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="p-5 sm:p-7 font-mono text-slate-500 uppercase text-xs">Operational Dimension</th>
                <th className="p-5 sm:p-7 font-bold text-blue-900 bg-blue-50/60 border-x border-blue-100 text-sm sm:text-base">
                  Prograstic Clinical OS
                </th>
                <th className="p-5 sm:p-7 font-mono text-slate-400 uppercase text-xs">Legacy Hospital Software</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {comparisons.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                  <td className="p-5 sm:p-7 font-bold text-slate-900 font-sans max-w-xs">
                    {row.feature}
                  </td>
                  <td className="p-5 sm:p-7 bg-blue-50/30 border-x border-blue-100 text-slate-800 font-medium">
                    <div className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
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
