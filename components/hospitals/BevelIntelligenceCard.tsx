"use client";

import React from "react";
import { Sparkles, Bot, ArrowRight, ShieldCheck, CheckCircle2, Zap } from "lucide-react";

export function BevelIntelligenceCard() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="relative rounded-[36px] sm:rounded-[44px] bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/15 p-8 sm:p-14 backdrop-blur-2xl shadow-[0_25px_80px_rgba(0,0,0,0.8)] overflow-hidden">
        {/* Glow backdrop */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#00F0FF]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
          {/* Left Column: AI Clinical Intelligence Pitch */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-bold">
              <Sparkles className="w-3.5 h-3.5 text-[#00F0FF]" />
              <span>CLINICAL INTELLIGENCE COPILOT</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight leading-tight">
              Hospital Insights That Act Before Bottlenecks Happen.
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
              Just like modern consumer health apps analyze recovery, Prograstic Clinical Intelligence monitors real-time ward velocity, OPD congestion, and surgical turnaround times to recommend proactive adjustments.
            </p>

            <div className="space-y-3 font-mono text-xs text-slate-300">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#00F0FF]" />
                <span>Automated bed transfer recommendations upon discharge sign-off</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                <span>Zero-click WhatsApp pharmacy ready alerts for outpatient queues</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-purple-400" />
                <span>Continuous HIPAA & ABDM compliance audit verification</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Copilot Telemetry Card */}
          <div className="lg:col-span-6">
            <div className="rounded-[28px] bg-black/80 border border-white/15 p-6 sm:p-8 space-y-5 shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center">
                    <Bot className="w-4 h-4 text-[#00F0FF]" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">Prograstic Clinical AI</div>
                    <div className="text-[11px] text-slate-400 font-mono">Ward & Triage Coordinator • Live</div>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-cyan-300 bg-cyan-950/60 border border-cyan-500/30 px-2.5 py-1 rounded-full">
                  Real-Time
                </span>
              </div>

              {/* Simulated AI Insight Message */}
              <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 space-y-2 text-xs sm:text-sm">
                <p className="text-slate-200 leading-relaxed font-sans">
                  "⚡ <strong className="text-white">Ward Alert:</strong> Dr. Sharma signed discharge summary for Bed 204 (Orthopaedics). Cleaning protocol initiated. Automatically assigning to emergency trauma patient waiting at Lobby Token #18."
                </p>
                <div className="text-[11px] font-mono text-[#00F0FF]">
                  Action dispatched: Bed status updated to 'Sanitizing' across all reception screens.
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-slate-300 hover:text-white hover:border-white/20 transition-colors">
                  <div className="text-slate-500 uppercase text-[10px]">Triage Velocity</div>
                  <div className="text-white font-bold mt-0.5">8.4 mins avg</div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-slate-300 hover:text-white hover:border-white/20 transition-colors">
                  <div className="text-slate-500 uppercase text-[10px]">ICU Turnaround</div>
                  <div className="text-emerald-400 font-bold mt-0.5">99.2% Accurate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
