"use client";

import React, { useState } from "react";
import { Sparkles, Eye, ShieldCheck, CheckCircle2, Sliders, Camera, FileCheck } from "lucide-react";

export function AestheticWorkflowDemo() {
  const [selectedConcerns, setSelectedConcerns] = useState<string[]>(["Fine Lines & Forehead", "Acne Texture"]);
  const [timelineDay, setTimelineDay] = useState<number>(30);
  const [patientConsent, setPatientConsent] = useState(true);

  const concerns = [
    { id: "Fine Lines & Forehead", label: "Fine Lines & Wrinkles" },
    { id: "Acne Texture", label: "Acne Scars & Texture" },
    { id: "Pigmentation", label: "Melasma & Pigmentation" },
    { id: "Volume Loss", label: "Contour & Volume Loss" },
  ];

  const protocols = [
    { name: "Full-Face Anti-Wrinkle Micro-Injections", category: "Injectable", sessions: "Every 4-6 Months" },
    { name: "Profhilo® Hyaluronic Bio-Remodelling", category: "Skin Quality", sessions: "2-Session Protocol" },
    { name: "Pico-Genesis Laser Glow", category: "Laser Device", sessions: "3 Sessions" },
  ];

  const toggleConcern = (c: string) => {
    setSelectedConcerns((prev) =>
      prev.includes(c) ? prev.filter((i) => i !== c) : [...prev, c]
    );
  };

  return (
    <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-slate-200">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 border border-rose-100 text-rose-700 text-xs font-mono font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            CONSULTATION & PHOTO VAULT SIMULATOR
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display mt-1">
            Clinical Consultation Roadmap & Standardized Photo Alignment
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Test how aesthetic practitioners record facial protocols and maintain encrypted, standardized before/after patient case records.
          </p>
        </div>

        <div className="flex items-center gap-1.5 text-xs text-slate-600 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-full font-mono">
          <ShieldCheck className="w-4 h-4 text-rose-600" />
          <span>HIPAA Encrypted Photo Vault</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Clinical Protocol Selection */}
        <div className="lg:col-span-7 space-y-5">
          <div>
            <label className="text-xs font-bold text-slate-700 uppercase font-mono tracking-wider block mb-2">
              1. Patient Aesthetic Objectives
            </label>
            <div className="grid grid-cols-2 gap-2">
              {concerns.map((c) => {
                const active = selectedConcerns.includes(c.id);
                return (
                  <button
                    key={c.id}
                    onClick={() => toggleConcern(c.id)}
                    className={`p-3 rounded-2xl text-left border text-xs transition-all ${
                      active
                        ? "bg-rose-50 border-rose-500 text-slate-900 font-semibold"
                        : "bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300"
                    }`}
                  >
                    <span>{active ? "✓ " : "+ "}</span>
                    {c.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <label className="text-xs font-bold text-slate-700 uppercase font-mono tracking-wider block mb-2">
              2. Recommended Clinical Protocols
            </label>
            <div className="space-y-2">
              {protocols.map((p) => (
                <div
                  key={p.name}
                  className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs"
                >
                  <div>
                    <div className="font-bold text-slate-900">{p.name}</div>
                    <div className="text-[11px] text-slate-500 mt-0.5 font-mono">
                      Category: <span className="text-rose-700 font-medium">{p.category}</span> • {p.sessions}
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    Active Plan
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Photo Progression Slider */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-5 rounded-3xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="flex items-center justify-between text-xs font-bold text-slate-900">
              <span className="flex items-center gap-1.5 font-mono">
                <Camera className="w-3.5 h-3.5 text-rose-600" />
                Case Progression Radar
              </span>
              <span className="font-mono text-rose-700">Day {timelineDay}</span>
            </div>

            <input
              type="range"
              min="0"
              max="90"
              step="30"
              value={timelineDay}
              onChange={(e) => setTimelineDay(Number(e.target.value))}
              className="w-full accent-rose-600 cursor-pointer"
            />

            <div className="flex justify-between text-[10px] text-slate-500 font-mono">
              <span>Day 0 (Baseline)</span>
              <span>Day 30 (Collagen Peak)</span>
              <span>Day 90 (Final Result)</span>
            </div>

            <div className="p-3 rounded-2xl bg-white border border-slate-200 text-xs text-slate-700 leading-relaxed">
              {timelineDay === 0 && "📌 Baseline: Standardized 3D skin analysis, moisture metrics, and micro-injection placement mapping."}
              {timelineDay === 30 && "✨ Day 30: Neocollagenesis active. Noticeable 42% reduction in fine lines and luminous skin hydration."}
              {timelineDay === 90 && "👑 Day 90: Maximum structural firmness, refined pore architecture, and long-lasting contour retention."}
            </div>

            <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600">
              <span className="flex items-center gap-1">
                <FileCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Patient Anonymized Consent:</span>
              </span>
              <span className="font-mono text-slate-900 font-semibold">Verified ✓</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
