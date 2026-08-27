"use client";

import React from "react";
import { CheckCircle2, XCircle, AlertTriangle, ShieldCheck, Zap } from "lucide-react";

export function StudioVsOthers() {
  const comparisonRows = [
    {
      feature: "Who Scopes & Writes Your Software?",
      prograstic: "Senior Engineers & Direct Builders",
      agency: "Sales reps & junior outsourced developers",
      saas: "Locked proprietary support tickets",
    },
    {
      feature: "Code & Database Ownership",
      prograstic: "100% Client Ownership (Full IP Rights)",
      agency: "Often proprietary lock-in",
      saas: "Zero ownership (Rented indefinitely)",
    },
    {
      feature: "Monthly Per-User Subscription Tax",
      prograstic: "$0 Recurring User Tax (Deploy on your cloud)",
      agency: "High monthly maintenance retainers",
      saas: "Expensive monthly fee per doctor/staff",
    },
    {
      feature: "Custom Workflow Alignment",
      prograstic: "100% Tailored to your exact clinical/plant flow",
      agency: "Generic templates with limited changes",
      saas: "Rigid box — you must change your operations",
    },
    {
      feature: "Delivery Turnaround Speed",
      prograstic: "14 to 30 Day Agile Production Sprints",
      agency: "3 to 6 months of scope bloat",
      saas: "Weeks of painful setup & onboarding",
    },
  ];

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <div className="text-center space-y-4 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 text-xs sm:text-sm font-mono font-bold text-slate-700">
          <ShieldCheck className="w-4 h-4 text-indigo-600" />
          <span>DIRECT-TO-BUILDER ADVANTAGE</span>
        </div>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight font-display">
          Why Engineering Studios Beat Generic Agencies & Rigid SaaS
        </h2>
        <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          When you partner with Prograstic, you work directly with the developers building your systems. No salespeople, no account managers, no handoff games.
        </p>
      </div>

      {/* Comparison Table */}
      <div className="rounded-[32px] border border-slate-200 bg-white overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/80 text-xs sm:text-sm font-mono uppercase tracking-wider text-slate-600">
                <th className="py-6 px-6 sm:px-8 font-bold">Operating Model</th>
                <th className="py-6 px-6 sm:px-8 font-extrabold text-indigo-700 bg-indigo-50/50">
                  ⚡ Prograstic Studio
                </th>
                <th className="py-6 px-6 sm:px-8 font-semibold text-slate-500">Generic Agency</th>
                <th className="py-6 px-6 sm:px-8 font-semibold text-slate-500">Off-The-Shelf SaaS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm sm:text-base">
              {comparisonRows.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-6 px-6 sm:px-8 font-bold text-slate-900 font-display">
                    {row.feature}
                  </td>
                  <td className="py-6 px-6 sm:px-8 bg-indigo-50/30 font-semibold text-slate-900">
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{row.prograstic}</span>
                    </div>
                  </td>
                  <td className="py-6 px-6 sm:px-8 text-slate-500">
                    <div className="flex items-start gap-2.5">
                      <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                      <span>{row.agency}</span>
                    </div>
                  </td>
                  <td className="py-6 px-6 sm:px-8 text-slate-500">
                    <div className="flex items-start gap-2.5">
                      <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                      <span>{row.saas}</span>
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
