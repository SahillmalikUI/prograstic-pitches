"use client";

import React, { useState } from "react";
import { Heart, ShieldCheck, CheckCircle2, MessageCircle, Clock, Sparkles } from "lucide-react";

export function FertilityWorkflowDemo() {
  const [activeStage, setActiveStage] = useState(3);

  const stages = [
    { id: 1, title: "Ovarian Stimulation", day: "Day 1 - 10", status: "Completed", note: "14 Follicles tracking on ultrasound (18mm peak)" },
    { id: 2, title: "Precision Trigger Shot", day: "Day 11 (Locked Time)", status: "Completed", note: "Trigger timed to 10:15 PM with multi-channel alarms" },
    { id: 3, title: "Day-5 Blastocyst Lab", day: "Day 18 (Active)", status: "Active Stage", note: "6 Grade 5AA/4AA blastocysts successfully vitrified" },
    { id: 4, title: "Frozen Embryo Transfer", day: "Next Cycle", status: "Upcoming", note: "Endometrial receptivity protocol mapped" },
  ];

  return (
    <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-slate-200">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 border border-rose-100 text-rose-700 text-xs font-mono font-medium">
            <Heart className="w-3.5 h-3.5 fill-rose-600 text-rose-600" />
            IVF PROTOCOL ENGINE
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display mt-1">
            IVF Protocol Roadmaps & Embryology Milestone Publishing
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Test how fertility clinics eliminate patient anxiety and maintain 100% medication timing compliance.
          </p>
        </div>

        <div className="flex items-center gap-1.5 text-xs text-slate-600 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-full font-mono">
          <ShieldCheck className="w-4 h-4 text-rose-600" />
          <span>Dual-Partner Privacy</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Stages */}
        <div className="lg:col-span-6 space-y-2.5">
          <label className="text-xs font-bold text-slate-700 uppercase font-mono tracking-wider block">
            Cycle Milestone Stages
          </label>
          {stages.map((s) => {
            const isCurrent = activeStage === s.id;
            return (
              <div
                key={s.id}
                onClick={() => setActiveStage(s.id)}
                className={`p-3.5 rounded-2xl border cursor-pointer flex items-center justify-between text-xs transition-all ${
                  isCurrent
                    ? "bg-rose-50 border-rose-400 shadow-sm"
                    : "bg-slate-50 border-slate-200 hover:border-slate-300"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center font-mono text-xs font-bold ${
                      s.status === "Completed"
                        ? "bg-emerald-100 text-emerald-800"
                        : isCurrent
                        ? "bg-rose-600 text-white"
                        : "bg-slate-200 text-slate-600"
                    }`}
                  >
                    {s.status === "Completed" ? "✓" : s.id}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">{s.title}</div>
                    <div className="text-[11px] text-slate-500 font-mono">{s.day}</div>
                  </div>
                </div>

                <span className="text-[10px] font-mono font-medium text-slate-700 bg-white px-2 py-0.5 rounded-full border border-slate-200">
                  {s.status}
                </span>
              </div>
            );
          })}
        </div>

        {/* Right Column: Lab Update Card */}
        <div className="lg:col-span-6 space-y-3">
          <div className="p-5 rounded-3xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5 pb-2 border-b border-slate-200">
              <Sparkles className="w-3.5 h-3.5 text-rose-600" />
              <span>Embryology Lab Milestone Update</span>
            </div>

            <p className="text-xs text-slate-700 leading-relaxed">
              {stages.find((s) => s.id === activeStage)?.note}
            </p>

            <div className="p-3 rounded-2xl bg-white border border-slate-200 space-y-1.5">
              <div className="text-[11px] font-bold text-emerald-800 font-mono flex items-center gap-1.5">
                <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>Automated WhatsApp Patient Update</span>
              </div>
              <div className="text-xs text-slate-600 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                ✨ Wonderful news! 6 high-grade blastocysts reached Day 5 development. Tap to view embryology lab grading report.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
