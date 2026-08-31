"use client";

import React from "react";
import { ArrowRight, Smile, Sparkles, CheckCircle2, ShieldCheck, Zap, Layers, RefreshCw, BarChart3, Database } from "lucide-react";

export function DentalCapabilitiesSection() {
  const capabilities = [
    {
      num: "01",
      title: "1-Tap 32-Tooth Odontogram & Treatment Phases",
      tag: "ODONTOGRAM ENGINE",
      stat: "30s Chairside Charting",
      desc: "Interactive adult (32-tooth) and pediatric (20-tooth) odontogram. Mark composite restorations, crowns, implants, and extractions with 1 touch, instantly generating priced treatment phases.",
      points: [
        "Color-coded clinical tooth charting (Existing, Planned, Completed)",
        "Automated phased treatment plans (Phase 1: Pain Relief ➔ Phase 2: Restorative)",
        "Longitudinal periodontal pocket depth charting (1mm to 9mm probe scores)",
      ],
    },
    {
      num: "02",
      title: "Prosthetics & CAD/CAM Lab Job Card Gateway",
      tag: "DENTAL LAB MATRIX",
      stat: "100% Case Traceability",
      desc: "Digital laboratory tracking for Zirconia crowns, bridges, veneers, clear aligners, and cast partial dentures. Direct STL mesh file attachment with automated pickup notifications.",
      points: [
        "Automated lab slip generation with shade selection (VITA A1-D4) and margin specs",
        "Real-time stage tracking: CAD Milling ➔ Sintering ➔ Trial ➔ Chairside Delivery",
        "SMS and WhatsApp alerts to patients when their custom crown arrives at clinic",
      ],
    },
    {
      num: "03",
      title: "Multi-Chair Operatory Velocity & Specialist Radar",
      tag: "OPERATORY FLOW",
      stat: "Zero Idle Chair Time",
      desc: "Live visual map of all operatory chairs (Chair 1, Chair 2, Ortho Bay, Surgical Suite). Smart scheduling for visiting Endodontists and Oral Surgeons based on chair readiness.",
      points: [
        "Live chair turnover timer and automated cleaning/sanitization status",
        "Visiting specialist batch-booking with automated patient arrival sequencing",
        "Consumables and implant kit inventory auto-deduction upon procedure completion",
      ],
    },
    {
      num: "04",
      title: "Visual WhatsApp Estimates & Patient EMI Approval",
      tag: "PATIENT CONVERSION",
      stat: "40% Higher Case Acceptance",
      desc: "Replace confusing handwritten paper quotes with crystal-clear visual treatment plans sent straight to the patient's WhatsApp with 1-tap 0% interest EMI options.",
      points: [
        "Interactive tooth diagrams showing patients why a crown or RCT is recommended",
        "Direct integration with healthcare EMI financing partners (0% interest)",
        "Automated pre-op instructions and post-extraction care tips on WhatsApp",
      ],
    },
  ];

  return (
    <section id="capabilities" className="py-24 sm:py-36 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white text-slate-900">
      <div className="space-y-16">
        {/* Header - Clean Light Theme */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-8">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono text-teal-700 font-bold uppercase tracking-widest">
              <span>02.</span>
              <span>DENTAL CLINIC CAPABILITIES</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-extrabold font-display tracking-tight text-slate-950 uppercase leading-[0.95]">
              Details That Accelerate Chairside Yield.
            </h2>
          </div>

          <p className="text-base sm:text-lg text-slate-600 font-sans max-w-md">
            Modular software units deployed on your existing dental clinic iPads and PCs in 14-day agile development sprints.
          </p>
        </div>

        {/* 4 Large Clean Light Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {capabilities.map((cap, idx) => (
            <div
              key={idx}
              className="p-8 sm:p-12 rounded-[36px] bg-[#F4FBFA] border border-teal-100 hover:border-teal-400 transition-all duration-300 flex flex-col justify-between space-y-8 group shadow-lg hover:shadow-xl"
            >
              <div className="space-y-6">
                {/* Top Number & Tag */}
                <div className="flex items-center justify-between">
                  <span className="text-4xl font-black font-display text-teal-200 group-hover:text-teal-700 transition-colors">
                    {cap.num}
                  </span>
                  <span className="px-3.5 py-1 rounded-full bg-white border border-teal-200 text-xs font-mono font-bold text-teal-800 shadow-sm">
                    {cap.tag}
                  </span>
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-display tracking-tight leading-snug">
                    {cap.title}
                  </h3>
                  <div className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md inline-block border border-emerald-200">
                    BENCHMARK: {cap.stat}
                  </div>
                  <p className="text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
              </div>

              {/* Checklist Points */}
              <div className="space-y-2.5 pt-5 border-t border-teal-200/60 text-sm font-sans text-slate-700">
                {cap.points.map((pt, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
