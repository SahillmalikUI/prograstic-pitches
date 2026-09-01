"use client";

import React from "react";
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Zap, Layers, RefreshCw, BarChart3, Database, Eye, Heart, Lock } from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";

export function AestheticsCapabilitiesSection() {
  const capabilities = [
    {
      num: "01",
      title: "3D Facial Anatomy & Cannula Depth Mapping",
      tag: "INJECTOR ENGINE",
      stat: "0.1mm Precision",
      desc: "Interactive 3D facial grid mapping for neurotoxins and dermal fillers. Mark exact injection units, cannula entry points, and millimeter depth vectors.",
      points: [
        "Interactive 3D facial anatomical quadrant mesh",
        "Vascular danger zone visual safety overlays",
        "1-tap botox / filler unit presets & cannula depth logging",
      ],
    },
    {
      num: "02",
      title: "Standardized Polarized Photo Vault & Consents",
      tag: "CLINICAL PACS",
      stat: "100% Normalized Lighting",
      desc: "Standardized 0°, 45°, and 90° clinical photography with automated lighting normalization and digital before/after smile/jawline simulations.",
      points: [
        "Cross-polarized & daylight standardized photo alignment",
        "High-conversion before/after side-by-side morphing",
        "Digital biometric procedure consent sign-offs",
      ],
    },
    {
      num: "03",
      title: "Vial & Consumable Batch RFID Telemetry",
      tag: "ANTI-COUNTERFEIT",
      stat: "100% Verified Vials",
      desc: "1-scan barcode/RFID verification on every vial of Botox, Juvederm, and PDO threads. Track lot numbers and supplier authentication in real time.",
      points: [
        "Direct batch & lot barcode scan validation",
        "Automatic expiration date lockouts & alerts",
        "Per-treatment consumable cost & profit margin analytics",
      ],
    },
    {
      num: "04",
      title: "VIP WhatsApp Membership & Healing Journey",
      tag: "PATIENT RETENTION",
      stat: "96.8% VIP Retention",
      desc: "Automated post-treatment recovery checklists on WhatsApp (bruising care, ice intervals) paired with luxury membership package renewals.",
      points: [
        "Automated 24h & 7-day post-procedure recovery check-ins",
        "90-day neurotoxin booster automated WhatsApp invites",
        "Tiered MedSpa membership wallets & package tracking",
      ],
    },
  ];

  return (
    <section id="capabilities" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white text-slate-900">
      <div className="space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono text-amber-800 font-bold uppercase tracking-widest">
              <span>02.</span>
              <span>MEDSPA CAPABILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-slate-950 uppercase leading-[0.95]">
              Details That Elevate Clinical Luxury.
            </h2>
          </div>

          <p className="text-sm sm:text-base text-slate-600 font-sans max-w-sm">
            Modular software units deployed on your existing clinic iPad workstations in 14-day agile development sprints.
          </p>
        </div>

        {/* 4 Cards Grid with 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {capabilities.map((cap, idx) => (
            <TiltCard
              key={idx}
              className="p-8 sm:p-10 rounded-[32px] bg-[#FFFDF7] border border-amber-100 hover:border-amber-400 transition-all duration-300 flex flex-col justify-between space-y-6 group shadow-lg hover:shadow-xl"
            >
              <div className="space-y-5">
                {/* Top Number & Tag */}
                <div className="flex items-center justify-between">
                  <span className="text-4xl font-black font-display text-amber-200 group-hover:text-amber-700 transition-colors">
                    {cap.num}
                  </span>
                  <span className="px-3.5 py-1 rounded-full bg-white border border-amber-200 text-xs font-mono font-bold text-amber-800 shadow-sm">
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
              <div className="space-y-2 pt-4 border-t border-amber-200/60 text-xs sm:text-sm font-bold text-slate-700 font-sans">
                {cap.points.map((pt, pIdx) => (
                  <div key={pIdx} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0" />
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
