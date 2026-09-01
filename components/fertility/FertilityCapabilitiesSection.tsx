"use client";

import React from "react";
import { ArrowRight, HeartPulse, Sparkles, CheckCircle2, ShieldCheck, Zap, Layers, RefreshCw, BarChart3, Database, Lock } from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";

export function FertilityCapabilitiesSection() {
  const capabilities = [
    {
      num: "01",
      title: "Embryo Morphokinetics & Time-Lapse Grading",
      tag: "EMBRYOLOGY ENGINE",
      stat: "Day-1 to Day-6 Grading",
      desc: "Connect directly to incubators (EmbryoScope, MIRI, Esco). Track cleavage stages and Gardner blastocyst grading (4AA/5AA).",
      points: [
        "Day-1 2PN fertilization validation",
        "Cleavage timing and fragmentation rate",
        "Gardner blastocyst expansion scoring",
      ],
    },
    {
      num: "02",
      title: "Cryo-Storage & -196°C Nitrogen Tank Telemetry",
      tag: "CRYO MATRIX",
      stat: "-196°C Active Radar",
      desc: "Interactive visual inventory of liquid nitrogen tanks. Map exact canister, cane, and straw coordinates with temperature alarms.",
      points: [
        "Live sensor alarms on thermal drift",
        "1-scan straw location lookup for FET",
        "Annual cryo-storage consent tracking",
      ],
    },
    {
      num: "03",
      title: "Stimulation Protocol & Follicular Radar",
      tag: "CYCLE TRACKING",
      stat: "Zero Trigger Drift",
      desc: "Track daily gonadotropin dosages alongside ultrasound follicular measurements and serum E2, LH, and Progesterone blood curves.",
      points: [
        "Ovary follicular diameter growth curves",
        "Automated hCG / Lupron trigger countdown",
        "Endometrial trilaminar pattern logs",
      ],
    },
    {
      num: "04",
      title: "Electronic Double-Witnessing Security",
      tag: "SPECIMEN AUDIT",
      stat: "100% RFID Verified",
      desc: "Strict clinical double-witnessing on every dish movement and ICSI injection to ensure zero human specimen error.",
      points: [
        "Dual-biometric sign-off on dish transfers",
        "Permanent tamper-proof audit trail",
        "Instant specimen mismatch lockout",
      ],
    },
  ];

  return (
    <section id="capabilities" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white text-slate-900">
      <div className="space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono text-rose-600 font-bold uppercase tracking-widest">
              <span>02.</span>
              <span>IVF CLINICAL CAPABILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-slate-950 uppercase leading-[0.95]">
              Precision Software For Embryologists.
            </h2>
          </div>

          <p className="text-sm sm:text-base text-slate-600 font-sans max-w-sm">
            Modular software units deployed on your existing IVF clinic workstations in 14-day agile sprints.
          </p>
        </div>

        {/* 4 Cards Grid with 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {capabilities.map((cap, idx) => (
            <TiltCard
              key={idx}
              className="p-8 sm:p-10 rounded-[32px] bg-[#FFF8F8] border border-rose-100 hover:border-rose-400 transition-all duration-300 flex flex-col justify-between space-y-6 group shadow-lg hover:shadow-xl"
            >
              <div className="space-y-5">
                {/* Top Number & Tag */}
                <div className="flex items-center justify-between">
                  <span className="text-4xl font-black font-display text-rose-200 group-hover:text-rose-600 transition-colors">
                    {cap.num}
                  </span>
                  <span className="px-3.5 py-1 rounded-full bg-white border border-rose-200 text-xs font-mono font-bold text-rose-700 shadow-sm">
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
              <div className="space-y-2 pt-4 border-t border-rose-200/60 text-xs sm:text-sm font-bold text-slate-700 font-sans">
                {cap.points.map((pt, pIdx) => (
                  <div key={pIdx} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-rose-600 shrink-0" />
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
