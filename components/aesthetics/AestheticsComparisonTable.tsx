"use client";

import React from "react";
import { Check, X, ShieldCheck, Zap } from "lucide-react";

export function AestheticsComparisonTable() {
  const comparisons = [
    {
      feature: "3D Injection Vector & Depth Charting",
      prograstic: "0.1mm 3D facial grid mapping for Botox & dermal filler cannula vectors",
      legacy: "Drawing circles on paper charts or flat 2D non-anatomical diagrams",
    },
    {
      feature: "Standardized Photo Vault & Lighting",
      prograstic: "0°, 45°, 90° polarized cross-lighting with automated before/after alignment",
      legacy: "Random iPhone camera photos with inconsistent lighting and angles",
    },
    {
      feature: "Vial Anti-Counterfeit Traceability",
      prograstic: "1-scan RFID & barcode verification with automated expiry lockouts",
      legacy: "Manual paper binder logging prone to counterfeit and inventory drift",
    },
    {
      feature: "VIP WhatsApp Healing & Retention",
      prograstic: "Automated 24h recovery guidance and 90-day maintenance booster invites",
      legacy: "Manual receptionist calls that get ignored or forgotten",
    },
    {
      feature: "Deployment & Code Sovereignty",
      prograstic: "Custom private cloud deployment in 14-day agile sprints with 100% data ownership",
      legacy: "Expensive per-injector monthly SaaS fees with locked patient databases",
    },
  ];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12 bg-white text-slate-900">
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono font-bold text-slate-800">
          <span>THE MEDSPA COMPARISON</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 font-display tracking-tight">
          Why Luxury MedSpas Choose Prograstic
        </h2>
        <p className="text-base sm:text-lg text-slate-600 font-sans">
          Compare bespoke aesthetic clinical software with generic salon booking tools.
        </p>
      </div>

      <div className="rounded-[36px] bg-white border border-slate-200 overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="p-5 sm:p-7 font-mono text-slate-500 uppercase text-xs">Clinical Dimension</th>
                <th className="p-5 sm:p-7 font-bold text-amber-950 bg-amber-50/60 border-x border-amber-100 text-sm sm:text-base">
                  Prograstic Aesthetics OS
                </th>
                <th className="p-5 sm:p-7 font-mono text-slate-400 uppercase text-xs">Generic Salon App / Paper</th>
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
                      <Check className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
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
