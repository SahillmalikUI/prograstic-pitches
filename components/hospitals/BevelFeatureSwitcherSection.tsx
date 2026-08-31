"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2, ChevronRight, Activity, Zap, HeartPulse, ShieldCheck, Database, Layers } from "lucide-react";

export function BevelFeatureSwitcherSection() {
  const [activeFeature, setActiveFeature] = useState<number>(0);

  const features = [
    {
      title: "OPD Queue Velocity & WhatsApp Radar",
      subtext: "Live queue tokens and automated doctor calling to clear crowded waiting rooms.",
      stat: "85% faster triage",
      badge: "PATIENT FLOW",
      details: [
        "Dynamic QR token kiosk at hospital reception",
        "Patients monitor real-time queue position on WhatsApp",
        "1-tap next patient call on doctor's screen",
      ],
      previewTitle: "Live OPD Token Dispatcher",
      previewScore: "94% Clearance",
    },
    {
      title: "Ward & ICU Bed Occupancy Radar",
      subtext: "Color-coded bed statuses and automated post-op transfer coordination.",
      stat: "Zero double-bookings",
      badge: "BED MATRIX",
      details: [
        "Real-time synchronized floor plan across nursing stations",
        "Automatic 'Sanitizing' status upon patient discharge",
        "Emergency trauma bed reservation in 1 click",
      ],
      previewTitle: "ICU & Ward Bed Matrix",
      previewScore: "11 / 12 Occupied",
    },
    {
      title: "30-Second Doctor EMR & Voice Prescriptions",
      subtext: "Click-to-prescribe templates with immediate digital pharmacy dispatch.",
      stat: "4x faster documentation",
      badge: "EMR VELOCITY",
      details: [
        "Specialty-specific prescription templates (Cardio, Ortho, Paediatrics)",
        "Instant digital handoff to hospital in-house pharmacy",
        "Longitudinal vitals graphing and past visit history",
      ],
      previewTitle: "Doctor Clinical Console",
      previewScore: "30s Avg Rx",
    },
    {
      title: "Diagnostic Lab & Radiology Sync",
      subtext: "ABDM-compliant diagnostic reporting with zero lost paper slips.",
      stat: "100% digital sync",
      badge: "DIAGNOSTICS",
      details: [
        "Direct pathology analyzer machine data capture",
        "Encrypted DICOM radiology scans with instant doctor preview",
        "Zero-leak patient reports dispatched via WhatsApp",
      ],
      previewTitle: "Diagnostic Telemetry Hub",
      previewScore: "100% Synced",
    },
  ];

  const current = features[activeFeature];

  return (
    <section className="py-24 sm:py-36 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      {/* Header - Matching Bevel Screenshot 2 */}
      <div className="space-y-4 max-w-3xl">
        <h2 className="text-4xl sm:text-6xl font-extrabold text-slate-950 font-display tracking-tight leading-[1.08]">
          And that’s not all
        </h2>
        <p className="text-lg sm:text-2xl text-slate-600 font-sans leading-relaxed">
          Prograstic Clinical OS also includes the following modular capabilities:
        </p>
      </div>

      {/* Feature Switcher Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left: Vertical Stack of Large Interactive Selector Pills (Matching Screenshot 2) */}
        <div className="lg:col-span-6 space-y-3.5">
          {features.map((f, idx) => (
            <button
              key={idx}
              onClick={() => setActiveFeature(idx)}
              className={`w-full p-6 sm:p-7 rounded-[28px] text-left transition-all duration-300 flex items-center justify-between border ${
                activeFeature === idx
                  ? "bg-white border-slate-300 shadow-xl shadow-slate-900/5 ring-2 ring-slate-900/5"
                  : "bg-[#F3F6FA]/80 border-transparent hover:bg-slate-100 text-slate-600"
              }`}
            >
              <div className="space-y-1.5 pr-4">
                <div className="text-lg sm:text-2xl font-extrabold text-slate-950 font-display">
                  {f.title}
                </div>
                <div className="text-sm sm:text-base text-slate-500 font-sans leading-relaxed">
                  {f.subtext}
                </div>
              </div>

              <div
                className={`w-10 h-10 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                  activeFeature === idx
                    ? "bg-slate-950 text-white border-slate-950"
                    : "border-slate-300 text-slate-400 bg-white"
                }`}
              >
                <ChevronRight className="w-5 h-5" />
              </div>
            </button>
          ))}
        </div>

        {/* Right: Active Feature Interactive Display Showcase */}
        <div className="lg:col-span-6 flex justify-center">
          <div className="w-full max-w-lg rounded-[40px] bg-[#F2F6FA] border border-slate-200/90 p-8 sm:p-10 shadow-2xl space-y-6 animate-in fade-in duration-300">
            {/* Header Badge */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
              <span className="px-3.5 py-1.5 rounded-full bg-slate-900 text-white text-xs font-mono font-bold uppercase tracking-wider">
                {current.badge}
              </span>
              <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                {current.stat}
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-display">
                {current.previewTitle}
              </h3>
              <div className="text-4xl sm:text-5xl font-black text-slate-900 font-display text-blue-600">
                {current.previewScore}
              </div>
            </div>

            {/* Checklist items */}
            <div className="space-y-3 pt-2">
              {current.details.map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-sm sm:text-base text-slate-700 font-sans">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-white border border-slate-200 text-xs font-mono text-slate-500 flex items-center justify-between">
              <span>Delivery Timeline:</span>
              <strong className="text-slate-900">14-Day Agile Sprint</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
