"use client";

import React, { useState } from "react";
import { Activity, ShieldCheck, CheckCircle2, MessageSquare, Calendar, Stethoscope, ArrowRight } from "lucide-react";

export function ClinicsWorkflowDemo() {
  const [selectedCase, setSelectedCase] = useState("Total Knee Arthroplasty (Dr. Vineet Sharma)");
  const [activeDay, setActiveDay] = useState<number>(3);

  const cases = [
    { name: "Total Knee Arthroplasty (Dr. Vineet Sharma)", ot: "OT Suite 2", pac: "Cleared", implants: "Stryker Triathlon Ready" },
    { name: "Functional Endoscopic Sinus Surgery (Dr. Raman Abrol)", ot: "Daycare Suite", pac: "Cleared", implants: "Microdebrider Ready" },
    { name: "Pediatric Inguinal Herniotomy (Dr. Meenakshi)", ot: "OT Suite 1", pac: "Cleared", implants: "Standard Set Ready" },
  ];

  const postOpGuidance = {
    1: { title: "Day 1 (Immediate Post-Op)", message: "🩹 Dressing check: Normal mild serous ooze. Begin ankle pump exercises every 2 hours. Take morning pain meds with food." },
    3: { title: "Day 3 (Wound & Mobility Milestone)", message: "🚶 Milestone: Aim for 15-meter assisted walking with walker. Ice knee 15 mins post-walk. Tap below to confirm no calf swelling." },
    7: { title: "Day 7 (Pre-Suture Review Check)", message: "📅 Suture removal clinic visit scheduled for Friday 10:00 AM with Dr. Sharma. Please bring all discharge radiographs." },
  };

  return (
    <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-slate-200">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-mono font-medium">
            <Stethoscope className="w-3.5 h-3.5" />
            SURGICAL OT & POST-OP RADAR
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display mt-1">
            Surgical Case Planning & Automated Post-Op Recovery Protocol
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Test how specialized surgical clinics coordinate operating rooms and guide discharged patients through structured WhatsApp recovery milestones.
          </p>
        </div>

        <div className="flex items-center gap-1.5 text-xs text-slate-600 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-full font-mono">
          <ShieldCheck className="w-4 h-4 text-indigo-600" />
          <span>Patient Safe Protocol</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Surgical Cases */}
        <div className="lg:col-span-7 space-y-4">
          <label className="text-xs font-bold text-slate-700 uppercase font-mono tracking-wider block">
            Active Surgical Planning Board
          </label>
          <div className="space-y-2.5">
            {cases.map((c) => (
              <div
                key={c.name}
                onClick={() => setSelectedCase(c.name)}
                className={`p-4 rounded-2xl border cursor-pointer text-xs transition-all ${
                  selectedCase === c.name
                    ? "bg-indigo-50/70 border-indigo-300 shadow-sm"
                    : "bg-slate-50 border-slate-200 hover:border-slate-300"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900">{c.name}</span>
                  <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    PAC: {c.pac}
                  </span>
                </div>
                <div className="text-[11px] text-slate-500 mt-1 font-mono flex items-center justify-between">
                  <span>Room: {c.ot}</span>
                  <span className="text-indigo-700 font-medium">{c.implants}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Automated Post-Op Flow */}
        <div className="lg:col-span-5 space-y-3">
          <div className="p-5 rounded-3xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="flex items-center justify-between text-xs font-bold text-slate-900">
              <span className="font-mono flex items-center gap-1.5">
                <MessageSquare className="w-3.5 h-3.5 text-indigo-600" />
                Post-Op WhatsApp Recovery Protocol
              </span>
            </div>

            {/* Day Selector */}
            <div className="grid grid-cols-3 gap-1.5 text-xs font-mono">
              {[1, 3, 7].map((d) => (
                <button
                  key={d}
                  onClick={() => setActiveDay(d)}
                  className={`py-1.5 px-2 rounded-xl text-center border transition-all ${
                    activeDay === d
                      ? "bg-slate-900 text-white border-slate-900 font-bold"
                      : "bg-white text-slate-700 border-slate-200"
                  }`}
                >
                  Day {d}
                </button>
              ))}
            </div>

            {/* Message Box */}
            <div className="p-3.5 rounded-2xl bg-white border border-slate-200 text-xs space-y-1.5">
              <div className="text-[11px] font-bold text-slate-900 font-mono">
                {postOpGuidance[activeDay as keyof typeof postOpGuidance].title}
              </div>
              <p className="text-slate-600 text-[11px] leading-relaxed">
                {postOpGuidance[activeDay as keyof typeof postOpGuidance].message}
              </p>
            </div>

            <div className="text-right text-[10px] text-emerald-700 font-mono flex items-center justify-end gap-1">
              <CheckCircle2 className="w-3 h-3 text-emerald-600" />
              <span>Automated patient response logged to doctor review tab</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
