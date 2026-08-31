"use client";

import React from "react";
import { ArrowRight, Gauge, Cpu, CheckCircle2, ShieldCheck, Zap, Layers, RefreshCw, BarChart3, Database } from "lucide-react";

export function CfiPlantCapabilitiesSection() {
  const capabilities = [
    {
      num: "01",
      title: "Machine OEE & Downtime Telemetry",
      tag: "REAL-TIME PLC ENGINE",
      stat: "98.7% OEE Target",
      desc: "Connect directly to machine PLCs, CNCs, and electrical transducers. Track live speed, micro-stoppages, and automated scrap tallying without manual operator clipboards.",
      points: [
        "Sub-second cycle time recording directly from machine sensors",
        "Automated breakdown root-cause tagging on shopfloor tablets",
        "Preventive maintenance alerts triggered by runtime hours",
      ],
    },
    {
      num: "02",
      title: "Raw Material Batch & Lot Lineage",
      tag: "TRACEABILITY MATRIX",
      stat: "100% Lot Lineage",
      desc: "1-scan QR lot tracking from raw material delivery at the gate to finished goods packaging. Meet ISO 9001 and IATF automotive traceability audits with zero panic.",
      points: [
        "Inward raw material gate receipt with supplier lot barcode generation",
        "Multi-stage work-in-progress (WIP) tracking across cutting, bending, and assembly",
        "Instant reverse-genealogy lookup in case of customer quality claim",
      ],
    },
    {
      num: "03",
      title: "Operator Digital Touch Logbooks",
      tag: "SHOPFLOOR TABLET UI",
      stat: "Zero Paper Slips",
      desc: "Rugged, glove-friendly tablet interfaces engineered specifically for shopfloor operators. Digital SOP work instructions and mandatory first-piece QA verification.",
      points: [
        "Visual 3D assembly instructions and critical tolerance checkpoints",
        "Mandatory supervisor digital sign-off before production run starts",
        "Hourly production target vs actual comparison with color-coded alerts",
      ],
    },
    {
      num: "04",
      title: "Dispatch & ERP Integration Gateway",
      tag: "AUTOMATED LOGISTICS",
      stat: "Instant ERP Sync",
      desc: "Direct integration with weighbridges, barcode scanners, and your existing accounting/ERP software (SAP, Tally, Zoho, Oracle) with zero duplicate data entry.",
      points: [
        "Automated gross and tare weighbridge capture via serial RS232/IP protocol",
        "1-click electronic delivery challan (e-Way Bill) generation and tax invoice",
        "Automated WhatsApp dispatch notification with GPS tracking link to buyers",
      ],
    },
  ];

  return (
    <section id="capabilities" className="py-24 sm:py-36 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white text-slate-900">
      <div className="space-y-16">
        {/* Header - Clean Light Theme */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-8">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono text-orange-600 font-bold uppercase tracking-widest">
              <span>02.</span>
              <span>PLANT CAPABILITIES</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-extrabold font-display tracking-tight text-slate-950 uppercase leading-[0.95]">
              Details That Drive Factory Yield.
            </h2>
          </div>

          <p className="text-base sm:text-lg text-slate-600 font-sans max-w-md">
            Modular software units deployed on your existing factory hardware in 14-day agile development sprints.
          </p>
        </div>

        {/* 4 Large Clean Light Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {capabilities.map((cap, idx) => (
            <div
              key={idx}
              className="p-8 sm:p-12 rounded-[36px] bg-[#F8FAFC] border border-slate-200/90 hover:border-orange-500 transition-all duration-300 flex flex-col justify-between space-y-8 group shadow-lg hover:shadow-xl"
            >
              <div className="space-y-6">
                {/* Top Number & Tag */}
                <div className="flex items-center justify-between">
                  <span className="text-4xl font-black font-display text-slate-300 group-hover:text-orange-600 transition-colors">
                    {cap.num}
                  </span>
                  <span className="px-3.5 py-1 rounded-full bg-white border border-slate-200 text-xs font-mono font-bold text-orange-600 shadow-sm">
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
              <div className="space-y-2.5 pt-5 border-t border-slate-200 text-sm font-sans text-slate-700">
                {cap.points.map((pt, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
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
