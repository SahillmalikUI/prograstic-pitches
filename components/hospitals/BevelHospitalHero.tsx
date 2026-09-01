"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Activity, Bed, FileText, CheckCircle2, ShieldCheck, Zap } from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { LiveEcgWave } from "@/components/ui/LiveEcgWave";
import { InfiniteMarquee } from "@/components/ui/InfiniteMarquee";
import { IndustryVertical } from "@/data/verticals";

interface BevelHospitalHeroProps {
  vertical: IndustryVertical;
  onOpenScopeModal: () => void;
}

export function BevelHospitalHero({ vertical, onOpenScopeModal }: BevelHospitalHeroProps) {
  const marqueeBadges = [
    { text: "ABDM Level-3 Integrated", tag: "COMPLIANCE", icon: <ShieldCheck className="w-3.5 h-3.5 text-blue-600" /> },
    { text: "DICOM PACS 0.4s Fast Sync", tag: "IMAGING", icon: <Zap className="w-3.5 h-3.5 text-amber-500" /> },
    { text: "HL7 / FHIR Interoperability", tag: "STANDARD", icon: <Activity className="w-3.5 h-3.5 text-emerald-600" /> },
    { text: "100% On-Premise / Private Cloud", tag: "SECURITY", icon: <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600" /> },
    { text: "14-Day Rapid Deployment", tag: "AGILE", icon: <Sparkles className="w-3.5 h-3.5 text-rose-500" /> },
  ];

  return (
    <section className="relative pt-12 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 bg-white text-slate-900 overflow-hidden">
      {/* Luxury Modern Hospital Medical Atrium Background Image */}
      <div className="absolute inset-0 pointer-events-none opacity-20 mix-blend-multiply">
        <Image
          src="/mockups/hospital_bg_texture.jpg"
          alt="Modern Hospital Medical Atrium Architecture"
          fill
          className="object-cover object-top"
          priority
        />
      </div>

      {/* Soft Ambient Radial Sky Glows */}
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.45, 0.7, 0.45] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute top-0 right-1/4 w-[600px] h-[350px] bg-blue-100/50 rounded-full blur-[100px] pointer-events-none"
      />
      <div className="absolute bottom-10 left-10 w-[500px] h-[300px] bg-teal-50/60 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16 relative z-10">
        {/* Top Scramble & Telemetry Badges */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200/80 pb-5 text-xs font-mono"
        >
          <div className="flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600" />
            </span>
            <span className="tracking-widest uppercase font-bold text-slate-900">PROGRASTIC HOSPITAL OS</span>
            <span className="text-slate-300">•</span>
            <span className="text-blue-700 font-bold bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200 flex items-center gap-1.5 shadow-sm">
              <Activity className="w-3 h-3 text-blue-600 animate-pulse" />
              <span>LIVE TRIAGE ENGINE</span>
            </span>
          </div>

          <div className="flex items-center gap-6 text-xs font-mono text-slate-600">
            <div>
              <span className="text-slate-400">AVG WAIT: </span>
              <strong className="text-blue-700 font-bold bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                <AnimatedCounter value={8.4} suffix=" MIN" decimals={1} />
              </strong>
            </div>
            <div className="hidden sm:block">
              <span className="text-slate-400">BED OCCUPANCY: </span>
              <strong className="text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                <AnimatedCounter value={91.6} suffix="%" decimals={1} />
              </strong>
            </div>
          </div>
        </motion.div>

        {/* Hero Copy & CTA Buttons */}
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm sm:text-base font-mono text-blue-600 font-bold uppercase tracking-widest flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-blue-600 animate-bounce" />
            <span>Modern Clinical Operating Software</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-5xl sm:text-7xl lg:text-9xl font-extrabold font-display tracking-tight text-slate-950 uppercase leading-[0.90] select-none"
          >
            HOSPITAL OS &<br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-950 via-slate-800 to-blue-600">
              CLINICAL FLOW.
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4 items-end"
          >
            <p className="lg:col-span-8 text-xl sm:text-2xl text-slate-600 font-sans leading-relaxed">
              From zero-wait OPD queue tokens to real-time ICU bed synchronization and 30-second doctor prescriptions. Custom software engineered for modern hospitals.
            </p>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenScopeModal}
                className="w-full px-8 py-4 rounded-full bg-slate-950 hover:bg-slate-800 text-white font-bold text-sm uppercase tracking-wider transition-all shadow-xl shadow-slate-950/15 flex items-center justify-center gap-3 group"
              >
                <span>Schedule 15-Min Scope Call</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#missing-loop"
                className="w-full px-8 py-3.5 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-800 font-mono text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 font-bold"
              >
                <Activity className="w-3.5 h-3.5 text-blue-600" />
                <span>Explore Hospital Flow</span>
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Real Daylight Medical Hardware Showcase with 3D Tilt Physics */}
        <TiltCard className="rounded-[36px] sm:rounded-[48px] overflow-hidden border border-slate-200 bg-slate-50 shadow-2xl group">
          <div className="relative w-full aspect-[16/9] min-h-[380px] sm:min-h-[520px]">
            <Image
              src="/mockups/hospital_ui.jpg"
              alt="Hospital Operating System Device Telemetry"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              priority
            />

            {/* Subtle Vignette Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

            {/* Floating Live Telemetry Cards */}
            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-stretch sm:items-end justify-between gap-4">
              {/* Telemetry Card 1 */}
              <div className="p-5 rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-200 text-slate-900 space-y-2 max-w-sm shadow-xl animate-float-slow">
                <div className="flex items-center justify-between text-xs font-mono text-blue-700 font-bold">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                    LIVE OPD QUEUE RADAR
                  </span>
                  <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    NORMAL
                  </span>
                </div>
                <LiveEcgWave color="#2563EB" height={28} />
                <div className="text-sm font-bold font-sans text-slate-900">
                  Room 104 • <AnimatedCounter value={14} suffix=" patients waiting" /> (Avg wait: 8.4m)
                </div>
              </div>

              {/* Telemetry Card 2 */}
              <div className="p-5 rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-200 text-slate-900 space-y-1.5 max-w-sm shadow-xl animate-float-delayed">
                <div className="flex items-center justify-between text-xs font-mono text-slate-600 font-bold">
                  <span className="text-blue-700">ICU & WARD HEATMAP</span>
                  <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    SYNCED
                  </span>
                </div>
                <div className="text-sm font-bold font-sans text-slate-900">
                  Bed 4B sanitized & ready for admission. Instant nursing dispatch active.
                </div>
              </div>
            </div>
          </div>
        </TiltCard>

        {/* Infinite Protocol Ticker */}
        <div className="pt-2 border-t border-slate-200/80 space-y-3">
          <div className="text-[11px] font-mono text-slate-400 uppercase tracking-widest text-center">
            INTEROPERABLE WITH ALL CLINICAL PROTOCOLS & HARDWARE
          </div>
          <InfiniteMarquee items={marqueeBadges} speed={28} />
        </div>
      </div>
    </section>
  );
}
