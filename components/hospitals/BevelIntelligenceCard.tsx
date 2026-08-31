"use client";

import React from "react";
import { Sparkles, Bot, CheckCircle2, ArrowRight, ShieldCheck, Check } from "lucide-react";

export function BevelIntelligenceCard() {
  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-slate-50 text-slate-900">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header - Clean Light */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono font-bold text-blue-800">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>AI CLINICAL OS</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-extrabold text-slate-950 font-display tracking-tight leading-tight">
            Go deeper with Clinical Intelligence
          </h2>
          <p className="text-base sm:text-xl text-slate-600 font-sans leading-relaxed">
            Get personalized guidance and actionable advice from your own 24/7 hospital operating engine.
          </p>
        </div>

        {/* Large White Rounded Card Inside Light Background */}
        <div className="rounded-[40px] sm:rounded-[48px] bg-white border border-slate-200 text-slate-900 p-8 sm:p-14 shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Get Answers From Your Data */}
            <div className="lg:col-span-6 space-y-6">
              <h3 className="text-3xl sm:text-5xl font-extrabold text-slate-950 font-display tracking-tight leading-tight">
                Get answers from your hospital data
              </h3>
              <p className="text-base sm:text-xl text-slate-600 leading-relaxed font-sans">
                Ask questions about patient flow and get answers grounded in your own real-time hospital metrics.
              </p>

              <div className="space-y-3 font-sans text-sm sm:text-base text-slate-700">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>"How many beds are discharging before 2:00 PM today?"</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>"Which OPD specialty currently has the highest waiting time?"</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>"Auto-dispatch housekeeping staff to Sanitizing beds"</span>
                </div>
              </div>
            </div>

            {/* Right Column: Bevel-Style Thought Process & Proactive Check-in iPhone Card */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="w-full max-w-md rounded-[32px] bg-slate-50 border-2 border-slate-200/80 p-6 shadow-xl space-y-4 text-xs font-sans">
                {/* Simulated AI Thought Accordion Header */}
                <div className="p-3 rounded-2xl bg-white border border-slate-200 space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span>Thought for 12 seconds</span>
                    <span className="text-emerald-600 font-bold">Done ✓</span>
                  </div>
                  <div className="space-y-1 text-[11px] text-slate-500 font-mono">
                    <div className="flex items-center gap-1.5 text-slate-700">
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span>Reviewing live ward telemetry signals</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-700">
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span>Analyzing OPD token queue velocity</span>
                    </div>
                  </div>
                </div>

                {/* AI Insight Result */}
                <div className="p-4 rounded-2xl bg-white border border-slate-200 text-slate-800 space-y-2 leading-relaxed text-sm">
                  <p className="font-semibold text-slate-900">
                    "Dr. Verma completed 28 OPD consultations today with 0 pending lab delays. Bed 204 in Ward B has completed sanitization and is ready for intake."
                  </p>
                </div>

                {/* Simulated Blue Chat Bubble */}
                <div className="flex justify-end">
                  <div className="bg-blue-600 text-white font-medium px-4 py-2.5 rounded-2xl rounded-tr-sm max-w-xs shadow-md text-xs sm:text-sm">
                    "Remind nursing station to verify vitals for Room 302 at 4:00 PM."
                  </div>
                </div>

                {/* Proactive Check-in Pill */}
                <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="font-bold text-xs sm:text-sm">Vital Check-in Scheduled</div>
                    <div className="text-[11px] font-mono text-emerald-700">Auto-reminder sent to on-duty nurse</div>
                  </div>
                  <span className="text-xs font-mono font-bold text-emerald-800 bg-white px-2 py-1 rounded-lg border border-emerald-200">
                    4:00 PM
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
