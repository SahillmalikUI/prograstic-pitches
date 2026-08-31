"use client";

import React from "react";
import { ArrowRight, HeartPulse, Sparkles, CheckCircle2, ShieldCheck, Zap, Layers, RefreshCw, BarChart3, Database, Lock } from "lucide-react";

export function FertilityCapabilitiesSection() {
  const capabilities = [
    {
      num: "01",
      title: "Embryo Morphokinetics & Time-Lapse Grading",
      tag: "EMBRYOLOGY ENGINE",
      stat: "Day-1 to Day-6 Grading",
      desc: "Connect directly to time-lapse incubators (EmbryoScope, MIRI, Esco). Track cleavage stages, pronuclei checks, and Gardner blastocyst grading (4AA/5AA) with digital photo archives.",
      points: [
        "Automated Day-1 fertilization check (2PN validation) with high-res optical capture",
        "Cleavage timing and fragmentation percentage recording at 24h intervals",
        "Standardized Gardner blastocyst expansion and inner cell mass (ICM) score",
      ],
    },
    {
      num: "02",
      title: "Cryo-Storage & -196°C Nitrogen Tank Telemetry",
      tag: "CRYO MATRIX",
      stat: "-196°C Active Radar",
      desc: "Interactive 3D visual inventory of all liquid nitrogen tanks. Map exact canister, cane, goblet, and straw coordinates for vitrified embryos, oocytes, and sperm vials.",
      points: [
        "Live temperature sensor telemetry with automated SMS/call alerts on thermal drift",
        "1-scan straw location lookup during frozen embryo transfer (FET) preparation",
        "Annual consent renewal tracking and automated storage fee billing reminders",
      ],
    },
    {
      num: "03",
      title: "Stimulation Protocol & Follicular Radar",
      tag: "CYCLE TRACKING",
      stat: "Zero Trigger Drift",
      desc: "Track daily gonadotropin dosages alongside ultrasound follicular measurements and serum Estradiol (E2), LH, and Progesterone blood levels.",
      points: [
        "Dynamic left/right ovary follicular diameter heatmap with growth velocity curves",
        "Automated hCG / Lupron trigger shot calculator with exact countdown timer",
        "Endometrial lining trilaminar pattern verification before transfer",
      ],
    },
    {
      num: "04",
      title: "Electronic Double-Witnessing Security",
      tag: "SPECIMEN AUDIT",
      stat: "100% RFID Verified",
      desc: "Strict clinical double-witnessing protocols on every dish movement, sperm wash, ICSI injection, and embryo transfer catheter to ensure zero human specimen error.",
      points: [
        "Dual-biometric/RFID sign-off required before moving dishes between stations",
        "Permanent tamper-proof audit trail for regulatory compliance (ART Act / ICMR / ESHRE)",
        "Instant specimen mismatch lockout with auditory and visual emergency sirens",
      ],
    },
  ];

  return (
    <section id="capabilities" className="py-24 sm:py-36 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white text-slate-900">
      <div className="space-y-16">
        {/* Header - Clean Light Theme */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-8">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono text-rose-600 font-bold uppercase tracking-widest">
              <span>02.</span>
              <span>IVF CLINICAL CAPABILITIES</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-extrabold font-display tracking-tight text-slate-950 uppercase leading-[0.95]">
              Precision Software For Embryologists.
            </h2>
          </div>

          <p className="text-base sm:text-lg text-slate-600 font-sans max-w-md">
            Modular software units deployed on your existing IVF clinic workstations in 14-day agile development sprints.
          </p>
        </div>

        {/* 4 Large Clean Light Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {capabilities.map((cap, idx) => (
            <div
              key={idx}
              className="p-8 sm:p-12 rounded-[36px] bg-[#FFF8F8] border border-rose-100 hover:border-rose-400 transition-all duration-300 flex flex-col justify-between space-y-8 group shadow-lg hover:shadow-xl"
            >
              <div className="space-y-6">
                {/* Top Number & Tag */}
                <div className="flex items-center justify-between">
                  <span className="text-4xl font-black font-display text-rose-200 group-hover:text-rose-600 transition-colors">
                    {cap.num}
                  </span>
                  <span className="px-3.5 py-1 rounded-full bg-white border border-rose-200 text-xs font-mono font-bold text-rose-700 shadow-sm">
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
              <div className="space-y-2.5 pt-5 border-t border-rose-200/60 text-sm font-sans text-slate-700">
                {cap.points.map((pt, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
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
