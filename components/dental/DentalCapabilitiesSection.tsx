"use client";

import React from "react";
import { ArrowRight, Smile, Sparkles, CheckCircle2, ShieldCheck, Zap, Layers, RefreshCw, BarChart3, Database } from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";

export function DentalCapabilitiesSection() {
  const capabilities = [
    {
      num: "01",
      title: "1-Tap 32-Tooth Odontogram & Treatment Phases",
      tag: "ODONTOGRAM ENGINE",
      stat: "30s Chairside Charting",
      desc: "Interactive adult (32-tooth) and pediatric (20-tooth) odontogram. Mark composite restorations and crowns with 1 touch.",
      points: [
        "Color-coded clinical tooth charting",
        "Automated phased treatment pricing",
        "Periodontal pocket depth mapping",
      ],
    },
    {
      num: "02",
      title: "Prosthetics & CAD/CAM Lab Job Card Gateway",
      tag: "DENTAL LAB MATRIX",
      stat: "100% Case Traceability",
      desc: "Digital laboratory tracking for Zirconia crowns, bridges, and clear aligners with direct STL mesh attachment.",
      points: [
        "Automated digital lab slip generation",
        "CAD Milling ➔ Sintering ➔ Delivery countdown",
        "WhatsApp patient delivery alerts",
      ],
    },
    {
      num: "03",
      title: "Multi-Chair Operatory Velocity & Specialist Radar",
      tag: "OPERATORY FLOW",
      stat: "Zero Idle Chair Time",
      desc: "Live visual map of all operatory chairs (Chair 1, Chair 2, Ortho Bay). Smart scheduling for visiting specialists.",
      points: [
        "Live chair turnover sanitization timer",
        "Visiting specialist batch-booking",
        "Consumables auto-deduction on checkout",
      ],
    },
    {
      num: "04",
      title: "Visual WhatsApp Estimates & Patient EMI Approval",
      tag: "PATIENT CONVERSION",
      stat: "40% Higher Acceptance",
      desc: "Replace confusing paper quotes with visual tooth diagrams and 1-tap 0% interest EMI options on WhatsApp.",
      points: [
        "Interactive tooth diagrams on WhatsApp",
        "Instant 0% healthcare EMI financing",
        "Automated post-op care instructions",
      ],
    },
  ];

  return (
    <section id="capabilities" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white text-slate-900">
      <div className="space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono text-teal-700 font-bold uppercase tracking-widest">
              <span>02.</span>
              <span>DENTAL CLINIC CAPABILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-slate-950 uppercase leading-[0.95]">
              Details That Accelerate Chairside Yield.
            </h2>
          </div>

          <p className="text-sm sm:text-base text-slate-600 font-sans max-w-sm">
            Modular software units deployed on your existing dental clinic iPads and PCs in 14-day agile sprints.
          </p>
        </div>

        {/* 4 Cards Grid with 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {capabilities.map((cap, idx) => (
            <TiltCard
              key={idx}
              className="p-8 sm:p-10 rounded-[32px] bg-[#F4FBFA] border border-teal-100 hover:border-teal-400 transition-all duration-300 flex flex-col justify-between space-y-6 group shadow-lg hover:shadow-xl"
            >
              <div className="space-y-5">
                {/* Top Number & Tag */}
                <div className="flex items-center justify-between">
                  <span className="text-4xl font-black font-display text-teal-200 group-hover:text-teal-700 transition-colors">
                    {cap.num}
                  </span>
                  <span className="px-3.5 py-1 rounded-full bg-white border border-teal-200 text-xs font-mono font-bold text-teal-800 shadow-sm">
                    {cap.tag}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-display tracking-tight leading-snug">
                    {cap.title}
                  </h3>
                  <div className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md inline-block border border-emerald-200">
                    BENCHMARK: {cap.stat}
                  </div>
                  <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
              </div>

              {/* Checklist Points */}
              <div className="space-y-2 pt-4 border-t border-teal-200/60 text-xs sm:text-sm font-bold text-slate-700 font-sans">
                {cap.points.map((pt, pIdx) => (
                  <div key={pIdx} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
