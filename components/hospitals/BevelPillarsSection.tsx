"use client";

import React from "react";
import { motion } from "framer-motion";
import { Activity, ShieldCheck, Zap, Bed, Clock, ArrowRight, HeartPulse, Sparkles, CheckCircle2 } from "lucide-react";

export function BevelPillarsSection() {
  const pillars = [
    {
      title: "Flow",
      tagline: "Live OPD Queue Velocity",
      score: "94%",
      scoreLabel: "Triage Clearance Rate",
      accent: "#2563EB",
      bgAccent: "bg-blue-50",
      textAccent: "text-blue-700",
      borderAccent: "border-blue-200",
      description: "Automated digital tokens and live WhatsApp queue radars eliminate crowded waiting rooms.",
      stat1: { label: "AVG WAIT TIME", val: "8.4 min" },
      stat2: { label: "OPD VELOCITY", val: "+42% faster" },
    },
    {
      title: "Wards",
      tagline: "Bed & ICU Synchronizer",
      score: "11/12",
      scoreLabel: "Active Ward Occupancy",
      accent: "#0D9488",
      bgAccent: "bg-teal-50",
      textAccent: "text-teal-700",
      borderAccent: "border-teal-200",
      description: "Color-coded bed heatmaps synchronize admissions, sanitization, and nursing stations in real time.",
      stat1: { label: "DISCHARGE LAG", val: "Zero delays" },
      stat2: { label: "ICU READY", val: "1-tap reserve" },
    },
    {
      title: "Care",
      tagline: "30s Clinical Documentation",
      score: "30s",
      scoreLabel: "Prescription Handoff",
      accent: "#E11D48",
      bgAccent: "bg-rose-50",
      textAccent: "text-rose-700",
      borderAccent: "border-rose-200",
      description: "Voice and touch-optimized prescription templates dispatch orders directly to pharmacy and lab.",
      stat1: { label: "RX TEMPLATES", val: "1-tap presets" },
      stat2: { label: "LAB HANDOFF", val: "Instant sync" },
    },
  ];

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12 bg-white text-slate-900">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-3 max-w-3xl mx-auto"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono font-bold text-slate-800">
          <Sparkles className="w-3.5 h-3.5 text-blue-600" />
          <span>THE 3 CLINICAL PILLARS</span>
        </div>
        <h2 className="text-4xl sm:text-6xl font-extrabold text-slate-950 font-display tracking-tight leading-tight">
          Run your hospital with total clarity
        </h2>
        <p className="text-base sm:text-xl text-slate-600 font-sans leading-relaxed">
          Three interconnected clinical engines designed to eliminate friction across reception, wards, and consultations.
        </p>
      </motion.div>

      {/* The 3 Cards Grid with Stagger & Spring Hover Animations */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pillars.map((pillar, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            whileHover={{ y: -8 }}
            className="p-8 sm:p-10 rounded-[36px] bg-[#F8FAFC] border border-slate-200/90 flex flex-col justify-between space-y-8 group shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
          >
            {/* Top Pillar Title & Live Status Indicator */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-3xl sm:text-4xl font-black font-display text-slate-950">
                  {pillar.title}
                </span>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-mono font-bold border ${pillar.bgAccent} ${pillar.textAccent} ${pillar.borderAccent} flex items-center gap-1.5`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                  <span>{pillar.tagline}</span>
                </span>
              </div>

              {/* Big Animated Score Display */}
              <div className="space-y-1 pt-2">
                <div className="text-5xl sm:text-6xl font-black text-slate-950 font-display tracking-tight">
                  {pillar.score}
                </div>
                <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                  {pillar.scoreLabel}
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
                {pillar.description}
              </p>
            </div>

            {/* Bottom 2 Mini Metric Badges */}
            <div className="grid grid-cols-2 gap-3 pt-6 border-t border-slate-200/80">
              <div className="p-3 rounded-2xl bg-white border border-slate-200/80 space-y-0.5 shadow-sm">
                <div className="text-[10px] font-mono text-slate-400 uppercase font-bold">{pillar.stat1.label}</div>
                <div className="text-sm font-bold text-slate-900">{pillar.stat1.val}</div>
              </div>
              <div className="p-3 rounded-2xl bg-white border border-slate-200/80 space-y-0.5 shadow-sm">
                <div className="text-[10px] font-mono text-slate-400 uppercase font-bold">{pillar.stat2.label}</div>
                <div className="text-sm font-bold text-slate-900">{pillar.stat2.val}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
