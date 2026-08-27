"use client";

import React from "react";
import { ArrowRight, Terminal, Sparkles, CheckCircle2, Clock } from "lucide-react";

interface ProcessTimelineProps {
  onOpenScopeModal: () => void;
}

export function ProcessTimeline({ onOpenScopeModal }: ProcessTimelineProps) {
  const steps = [
    {
      num: "01",
      title: "15-Minute Architecture Discovery",
      desc: "We review your operational bottlenecks, current software gaps, and map the exact software modules you need. No sales pitches, just engineering scope.",
      timing: "Day 1",
    },
    {
      num: "02",
      title: "Interactive Prototype & UX Validation",
      desc: "We build a clickable prototype of your core workflow (intake, queue, doctor screen, or machine board) so your team can test and approve the feel.",
      timing: "Day 3 - 5",
    },
    {
      num: "03",
      title: "High-Speed Full-Stack Development",
      desc: "We write clean, production-grade Next.js, FastAPI/Node, and PostgreSQL code with encrypted database security and external API integrations.",
      timing: "Day 6 - 12",
    },
    {
      num: "04",
      title: "Staff Onboarding & Production Go-Live",
      desc: "We deploy on your private cloud or managed infrastructure, train your floor staff, and ensure seamless go-live with zero operational downtime.",
      timing: "Day 14 - 30",
    },
  ];

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <div className="text-center space-y-4 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-xs sm:text-sm font-mono font-bold text-emerald-800">
          <Clock className="w-4 h-4 text-emerald-600" />
          <span>AGILE 14-DAY SPRINT DELIVERY</span>
        </div>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight font-display">
          From Concept To Production in 14 Days
        </h2>
        <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Our senior builders work in dedicated 2-week execution sprints to deliver functional software directly into your staff's hands.
        </p>
      </div>

      {/* Step Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step) => (
          <div
            key={step.num}
            className="p-8 rounded-[32px] bg-slate-50 border border-slate-200/90 shadow-sm clean-card-hover space-y-5 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-3xl font-black font-display text-indigo-600">
                  {step.num}
                </span>
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700">
                  {step.timing}
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-display">
                {step.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {step.desc}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs sm:text-sm font-semibold text-emerald-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Full Source Code Handover</span>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Box */}
      <div className="text-center pt-4">
        <button
          onClick={onOpenScopeModal}
          className="px-10 py-4 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm sm:text-base uppercase tracking-wider transition-all hover:scale-105 shadow-xl shadow-slate-900/10 inline-flex items-center gap-3"
        >
          <span>Kick Off Your 14-Day Sprint</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
