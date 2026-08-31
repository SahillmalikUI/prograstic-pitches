"use client";

import React from "react";
import Image from "next/image";
import { Zap, HeartPulse, Activity, CheckCircle2, ArrowRight, ShieldCheck } from "lucide-react";

export function BevelPillarsSection() {
  const pillars = [
    {
      title: "Flow: Zero-Wait OPD Queue Velocity",
      tag: "PATIENT FLOW ENGINE",
      icon: Zap,
      accent: "#00F0FF",
      description: "Patients scan a dynamic QR token at the hospital entrance and receive a live WhatsApp queue radar. Doctors call patients with 1 tap, eliminating lobby crowding.",
      stat: "85% reduction",
      statLabel: "in reception congestion",
    },
    {
      title: "Care: 30-Second Doctor EMR Console",
      tag: "DOCTOR EMPOWERMENT",
      icon: HeartPulse,
      accent: "#10B981",
      description: "Designed alongside senior clinicians. Click-to-prescribe templates, immediate vitals graphing, and automatic lab request dispatch so doctors focus on patients.",
      stat: "4x faster",
      statLabel: "EMR documentation speed",
    },
    {
      title: "Speed: Departmental Real-Time Sync",
      tag: "INTER-WARD TELEMETRY",
      icon: Activity,
      accent: "#38BDF8",
      description: "Pharmacy, Billing, Pathology Labs, and Nursing Stations operate from a single synchronized database. No lost slips, no double billing, no diagnostic delay.",
      stat: "100% synced",
      statLabel: "zero missed departmental charges",
    },
  ];

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <div className="text-center space-y-4 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs sm:text-sm font-mono font-bold text-cyan-300">
          <span>THE 3 CLINICAL PILLARS</span>
        </div>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white font-display tracking-tight">
          Engineered For Clinical Velocity & Operational Clarity.
        </h2>
        <p className="text-base sm:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-sans">
          Every hospital department is a link in a chain. Prograstic Clinical OS synchronizes your patient flow, medical records, and diagnostic operations.
        </p>
      </div>

      {/* 3 Dark Bevel Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pillars.map((p, idx) => (
          <div
            key={idx}
            className="p-8 sm:p-10 rounded-[36px] bg-white/[0.03] border border-white/10 hover:border-white/20 hover:bg-white/[0.05] transition-all duration-300 flex flex-col justify-between space-y-8 shadow-xl"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span
                  className="text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full"
                  style={{
                    backgroundColor: `${p.accent}15`,
                    color: p.accent,
                    border: `1px solid ${p.accent}30`,
                  }}
                >
                  {p.tag}
                </span>
                <span className="text-xs font-mono text-slate-500">0{idx + 1}</span>
              </div>

              <h3 className="text-2xl font-bold text-white font-display leading-snug">
                {p.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-sans">
                {p.description}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-black/60 border border-white/10 space-y-1">
              <div className="text-2xl font-black text-white font-display" style={{ color: p.accent }}>
                {p.stat}
              </div>
              <div className="text-xs font-mono text-slate-400 uppercase">{p.statLabel}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
