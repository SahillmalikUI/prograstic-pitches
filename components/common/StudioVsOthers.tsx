"use client";

import React from "react";
import { Check, X, Shield, Sparkles, AlertTriangle } from "lucide-react";

export function StudioVsOthers() {
  const comparisonItems = [
    {
      dimension: "Software & Data Ownership",
      offTheShelf: "Locked into proprietary SaaS — pay monthly per-user fees forever or lose your data",
      genericAgency: "Outsourced WordPress or low-code template with fragile third-party plugins",
      prograstic: "100% Custom Source Code Ownership. Self-hosted on your private cloud with zero per-user fees."
    },
    {
      dimension: "Point of Contact & Communication",
      offTheShelf: "Generic support tickets and automated email bots",
      genericAgency: "Non-technical account managers and sales middlemen",
      prograstic: "Direct-to-Builder: The senior full-stack engineer who scopes your system is the person who builds it."
    },
    {
      dimension: "Workflow Fit",
      offTheShelf: "Rigid — forces your clinical or operational staff to change their habits",
      genericAgency: "Shallow visual design with little understanding of clinical/factory operations",
      prograstic: "Custom engineered 1-to-1 to match your exact team, intake, and operational throughput."
    },
    {
      dimension: "Delivery Speed",
      offTheShelf: "Instant signup, but months of frustrating workarounds",
      genericAgency: "3-6 months of back-and-forth communication delays",
      prograstic: "Rapid 14-day production sprints with weekly working staging releases."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 bg-slate-50 border-t border-slate-200">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-mono font-medium tracking-wide">
            <Sparkles className="w-3.5 h-3.5" />
            ENGINEERING STUDIO ADVANTAGE
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 font-display">
            Why High-Throughput Leaders Choose Prograstic
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            A small, senior engineering studio delivering bespoke software without agency bloat or recurring SaaS taxes.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full text-left border-collapse min-w-[650px]">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-100/60">
                <th className="p-4 sm:p-5 text-xs font-mono uppercase text-slate-500 font-semibold w-1/4">
                  Dimension
                </th>
                <th className="p-4 sm:p-5 text-xs font-mono uppercase text-slate-500 font-semibold w-1/4">
                  Off-The-Shelf SaaS
                </th>
                <th className="p-4 sm:p-5 text-xs font-mono uppercase text-slate-500 font-semibold w-1/4">
                  Generic Agency
                </th>
                <th className="p-4 sm:p-5 text-xs font-mono uppercase text-indigo-700 font-bold bg-indigo-50/70 border-l border-indigo-100 w-1/4">
                  Prograstic Studio
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-xs">
              {comparisonItems.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                  <td className="p-4 sm:p-5 font-bold text-slate-900 align-top">
                    {row.dimension}
                  </td>
                  <td className="p-4 sm:p-5 text-slate-500 align-top leading-relaxed">
                    <div className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <span>{row.offTheShelf}</span>
                    </div>
                  </td>
                  <td className="p-4 sm:p-5 text-slate-500 align-top leading-relaxed">
                    <div className="flex items-start gap-2">
                      <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                      <span>{row.genericAgency}</span>
                    </div>
                  </td>
                  <td className="p-4 sm:p-5 text-slate-900 bg-indigo-50/30 border-l border-indigo-100 align-top leading-relaxed font-medium">
                    <div className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{row.prograstic}</span>
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
