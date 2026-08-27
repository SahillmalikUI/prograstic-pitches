"use client";

import React from "react";
import { ShieldCheck, Cpu, ArrowRight } from "lucide-react";

interface ProcessTimelineProps {
  onOpenScopeModal: () => void;
}

export function ProcessTimeline({ onOpenScopeModal }: ProcessTimelineProps) {
  const steps = [
    {
      number: "01",
      title: "Discovery & Workflow Audit",
      timeline: "Week 1",
      description: "We analyze your staff's daily data entry friction, communication bottlenecks, and operational drop-off points."
    },
    {
      number: "02",
      title: "Systems Architecture & Live Prototype",
      timeline: "Week 1 - 2",
      description: "We architect the database schema and build a working interactive prototype so you test the exact flow before final code."
    },
    {
      number: "03",
      title: "Agile Sprint Engineering",
      timeline: "Weeks 2 - 3",
      description: "Senior full-stack engineers build the custom platform with continuous weekly staging updates and API integrations."
    },
    {
      number: "04",
      title: "Staff Onboarding & Continuous Evolution",
      timeline: "Week 4 & Ongoing",
      description: "Zero-downtime deployment, interactive staff training, and continuous feature expansion backed by our engineering SLA."
    }
  ];

  return (
    <section id="process" className="py-20 px-4 sm:px-6 bg-white border-t border-slate-200">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-mono font-medium tracking-wide">
            <Cpu className="w-3.5 h-3.5 text-indigo-600" />
            HOW WE DELIVER
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 font-display">
            A Fast, Direct 4-Step Engineering Process
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            From initial operational audit to live production software in 14-30 days.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div
              key={s.number}
              className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 clean-card-hover flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black font-display text-slate-900">
                    {s.number}
                  </span>
                  <span className="text-[11px] font-mono text-slate-500 bg-white px-2 py-0.5 rounded-full border border-slate-200">
                    {s.timeline}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 leading-snug">
                  {s.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {s.description}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-200 text-slate-700 text-[11px] font-mono flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Zero Department Handoffs</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Scope CTA */}
        <div className="text-center pt-4">
          <button
            onClick={onOpenScopeModal}
            className="px-8 py-3.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs uppercase tracking-wider transition-all hover:scale-105 shadow-md shadow-slate-900/10 inline-flex items-center gap-2"
          >
            <span>Talk to the Engineering Team</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
