"use client";

import React from "react";
import { ArrowRight, GraduationCap, Sparkles, CheckCircle2, ShieldCheck, Zap, Layers, RefreshCw, BarChart3, Database, PlaneTakeoff, Globe2 } from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";

export function EducationCapabilitiesSection() {
  const capabilities = [
    {
      num: "01",
      title: "1-Click Multi-University Application Dispatch",
      tag: "ADMISSIONS ENGINE",
      stat: "48-Hour Turnaround",
      desc: "Batch lodge student applications across UK Russell Group, Group of Eight, and Canada DLIs. Automated SOP formatting and requirement matching.",
      points: [
        "Direct API integration with university admissions portals",
        "Automated entry criteria & IELTS cutoff verification",
        "Unconditional offer letter auto-sync & document repository",
      ],
    },
    {
      num: "02",
      title: "Sub-Agent Commission & Revenue Share Ledger",
      tag: "COMMISSION MATRIX",
      stat: "Zero Payout Disputes",
      desc: "Multi-tier commission management for 50+ regional sub-agents. Automated invoice generation upon student university fee payment.",
      points: [
        "Configurable per-university percentage & fixed payout tiers",
        "Automated university milestone trigger (Enrolled ➔ Paid)",
        "Real-time partner portal with live student status visibility",
      ],
    },
    {
      num: "03",
      title: "Document Verification & IELTS TRF Vault",
      tag: "SECURITY VAULT",
      stat: "100% Verified Documents",
      desc: "Direct verification with British Council, IDP, and Pearson for test scores. Prevent fraudulent bank statements and academic transcripts.",
      points: [
        "Live IELTS / PTE TRF verification API",
        "Financial solvency & 28-day bank balance validation",
        "Audit-ready UKVI / IRCC compliance package generation",
      ],
    },
    {
      num: "04",
      title: "Automated WhatsApp Milestones & Forex Portal",
      tag: "STUDENT CONVERSION",
      stat: "99.4% Visa Success",
      desc: "Keep students and anxious parents updated at every milestone via WhatsApp. Integrated international tuition fee transfer escrow.",
      points: [
        "Automated WhatsApp updates on Offer Letter & CAS issuance",
        "Integrated wholesale student Forex tuition fee transfers",
        "Pre-departure checklists & accommodation booking portal",
      ],
    },
  ];

  return (
    <section id="capabilities" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white text-slate-900">
      <div className="space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono text-amber-700 font-bold uppercase tracking-widest">
              <span>02.</span>
              <span>AGENCY CAPABILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-slate-950 uppercase leading-[0.95]">
              Details That Accelerate Admissions Yield.
            </h2>
          </div>

          <p className="text-sm sm:text-base text-slate-600 font-sans max-w-sm">
            Modular software units deployed on your existing agency hardware in 14-day agile development sprints.
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
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
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
