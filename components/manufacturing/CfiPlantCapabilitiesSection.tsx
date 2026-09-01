"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Gauge, Cpu, CheckCircle2, ShieldCheck, Zap, Layers, RefreshCw, BarChart3, Database } from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";

export function CfiPlantCapabilitiesSection() {
  const capabilities = [
    {
      num: "01",
      title: "Machine OEE & Downtime Telemetry",
      tag: "REAL-TIME PLC",
      stat: "98.7% OEE Target",
      desc: "Connect directly to PLCs, CNCs, and electrical sensors. Live speed and automated scrap tallying.",
      points: [
        "Sub-second sensor cycle time recording",
        "Automated breakdown root-cause tagging",
        "Preventive runtime maintenance alerts",
      ],
    },
    {
      num: "02",
      title: "Raw Material Batch & Lot Lineage",
      tag: "TRACEABILITY",
      stat: "100% Lot Lineage",
      desc: "1-scan QR lot tracking from raw material intake to finished goods packaging. Audit-ready compliance.",
      points: [
        "Supplier lot barcode generation",
        "Multi-stage WIP tracking across assembly",
        "Instant reverse-genealogy QA lookup",
      ],
    },
    {
      num: "03",
      title: "Operator Digital Touch Logbooks",
      tag: "SHOPFLOOR UI",
      stat: "Zero Paper Slips",
      desc: "Rugged, glove-friendly tablet interfaces for operators with visual digital SOP work instructions.",
      points: [
        "Visual 3D assembly instructions",
        "Supervisor digital first-piece sign-off",
        "Hourly target vs actual alerts",
      ],
    },
    {
      num: "04",
      title: "Dispatch & ERP Integration Gateway",
      tag: "LOGISTICS",
      stat: "Instant ERP Sync",
      desc: "Direct integration with weighbridges, scanners, and your existing ERP (SAP, Tally, Zoho, Oracle).",
      points: [
        "Automated weighbridge gross/tare capture",
        "1-click e-Way Bill and tax invoice sync",
        "WhatsApp buyer dispatch notifications",
      ],
    },
  ];

  return (
    <section id="capabilities" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white text-slate-900">
      <div className="space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono text-orange-600 font-bold uppercase tracking-widest">
              <span>02.</span>
              <span>PLANT CAPABILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-slate-950 uppercase leading-[0.95]">
              Details That Drive Factory Yield.
            </h2>
          </div>

          <p className="text-sm sm:text-base text-slate-600 font-sans max-w-sm">
            Modular software units deployed on your existing factory hardware in 14-day agile sprints.
          </p>
        </div>

        {/* 4 Cards Grid with 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {capabilities.map((cap, idx) => (
            <TiltCard
              key={idx}
              className="p-8 sm:p-10 rounded-[32px] bg-[#F8FAFC] border border-slate-200/90 hover:border-orange-500 transition-all duration-300 flex flex-col justify-between space-y-6 group shadow-lg hover:shadow-xl"
            >
              <div className="space-y-5">
                {/* Top Number & Tag */}
                <div className="flex items-center justify-between">
                  <span className="text-4xl font-black font-display text-slate-300 group-hover:text-orange-600 transition-colors">
                    {cap.num}
                  </span>
                  <span className="px-3.5 py-1 rounded-full bg-white border border-slate-200 text-xs font-mono font-bold text-orange-600 shadow-sm">
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
              <div className="space-y-2 pt-4 border-t border-slate-200 text-xs sm:text-sm font-bold text-slate-700 font-sans">
                {cap.points.map((pt, pIdx) => (
                  <div key={pIdx} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
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
