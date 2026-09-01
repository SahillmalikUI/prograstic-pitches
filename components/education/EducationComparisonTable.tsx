"use client";

import React from "react";
import { Check, X, ShieldCheck, Zap } from "lucide-react";

export function EducationComparisonTable() {
  const comparisons = [
    {
      feature: "University Admissions Lodgement",
      prograstic: "1-click batch lodgement across 500+ global universities via direct API",
      legacy: "Manual copy-pasting student data across 20 separate university portals",
    },
    {
      feature: "Test Score & Document Verification",
      prograstic: "Direct IELTS / PTE TRF verification with anti-fraud financial vault",
      legacy: "Unverified PDF attachments sent over email prone to visa rejections",
    },
    {
      feature: "Sub-Agent Commission Ledger",
      prograstic: "Automated multi-tier payout splits triggered upon university fee clearance",
      legacy: "Messy Excel sheets with ongoing commission reconciliation disputes",
    },
    {
      feature: "Student WhatsApp Milestones",
      prograstic: "Automated live milestone cards sent to students & parents on WhatsApp",
      legacy: "Students frantically calling counselors repeatedly for offer status",
    },
    {
      feature: "Deployment & Code Ownership",
      prograstic: "Live custom software deployed in 14-day agile sprints on private agency cloud",
      legacy: "Expensive per-counselor monthly SaaS fees with zero customization",
    },
  ];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12 bg-white text-slate-900">
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono font-bold text-slate-800">
          <span>THE ADMISSIONS COMPARISON</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 font-display tracking-tight">
          Why Modern Agencies Replace Generic CRMs
        </h2>
        <p className="text-base sm:text-lg text-slate-600 font-sans">
          Compare bespoke study abroad software with generic retail sales tools.
        </p>
      </div>

      <div className="rounded-[36px] bg-white border border-slate-200 overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="p-5 sm:p-7 font-mono text-slate-500 uppercase text-xs">Admissions Dimension</th>
                <th className="p-5 sm:p-7 font-bold text-amber-950 bg-amber-50/60 border-x border-amber-100 text-sm sm:text-base">
                  Prograstic Education OS
                </th>
                <th className="p-5 sm:p-7 font-mono text-slate-400 uppercase text-xs">Generic Sales CRM / Excel</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {comparisons.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                  <td className="p-5 sm:p-7 font-bold text-slate-900 font-sans max-w-xs">
                    {row.feature}
                  </td>
                  <td className="p-5 sm:p-7 bg-amber-50/30 border-x border-amber-100 text-slate-800 font-medium">
                    <div className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
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
