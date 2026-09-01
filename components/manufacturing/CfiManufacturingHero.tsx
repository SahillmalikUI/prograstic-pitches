"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, ShieldCheck, Activity, CheckCircle2, Zap, Layers, Lock, Factory, Radio, Box } from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { InfiniteMarquee } from "@/components/ui/InfiniteMarquee";
import { IndustryVertical } from "@/data/verticals";

interface CfiManufacturingHeroProps {
  vertical: IndustryVertical;
  onOpenScopeModal: () => void;
}

export function CfiManufacturingHero({ vertical, onOpenScopeModal }: CfiManufacturingHeroProps) {
  const marqueeBadges = [
    { text: "PLC Siemens / Allen-Bradley Live Telemetry", tag: "SCADA", icon: <Zap className="w-3.5 h-3.5 text-orange-500" /> },
    { text: "OEE 98.7% Benchmark Tracking", tag: "EFFICIENCY", icon: <Activity className="w-3.5 h-3.5 text-emerald-600" /> },
    { text: "Barcode Lot Lineage & Raw Material Tracking", tag: "TRACEABILITY", icon: <Box className="w-3.5 h-3.5 text-blue-600" /> },
    { text: "RFID AGV Warehouse Dispatch", tag: "LOGISTICS", icon: <Factory className="w-3.5 h-3.5 text-purple-600" /> },
    { text: "100% Private Cloud / Industrial IoT", tag: "SECURITY", icon: <ShieldCheck className="w-3.5 h-3.5 text-slate-700" /> },
  ];

  return (
    <section className="relative pt-10 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 bg-white text-slate-900 overflow-hidden">
      {/* High-Tech Smart Factory Background Image */}
      <div className="absolute inset-0 pointer-events-none opacity-20 mix-blend-multiply">
        <Image
          src="/mockups/manufacturing_bg_texture.jpg"
          alt="High Tech Smart Manufacturing Facility Floor"
          fill
          className="object-cover object-top"
          priority
        />
      </div>

      {/* Soft Orange / Amber Ambient Glow */}
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.45, 0.7, 0.45] }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
        className="absolute top-0 right-1/4 w-[600px] h-[350px] bg-orange-100/60 rounded-full blur-[100px] pointer-events-none"
      />
      <div className="absolute bottom-10 left-10 w-[500px] h-[300px] bg-amber-50/70 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16 relative z-10">
        {/* Top Scramble & Factory Telemetry Badges */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-5 text-xs font-mono"
        >
          <div className="flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500" />
            </span>
            <span className="tracking-widest uppercase font-bold text-slate-900">PROGRASTIC FACTORY OS</span>
            <span className="text-slate-300">•</span>
            <span className="text-orange-700 font-bold bg-orange-50 px-2.5 py-0.5 rounded-full border border-orange-200 flex items-center gap-1.5 shadow-sm">
              <Radio className="w-3 h-3 text-orange-600 animate-spin" />
              <span>SHOPFLOOR RADAR: LIVE</span>
            </span>
          </div>

          <div className="flex items-center gap-6 text-xs font-mono text-slate-600">
            <div>
              <span className="text-slate-400">OEE BENCHMARK: </span>
              <strong className="text-orange-700 font-bold bg-orange-50 px-2 py-0.5 rounded border border-orange-200">
                <AnimatedCounter value={98.7} suffix="%" decimals={1} />
              </strong>
            </div>
            <div className="hidden sm:block">
              <span className="text-slate-400">LOT TRACEABILITY: </span>
              <strong className="text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                <AnimatedCounter value={99.9} suffix="% ACCURACY" decimals={1} />
              </strong>
            </div>
          </div>
        </motion.div>

        {/* Giant Brutalist-Clean Heading */}
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm sm:text-base font-mono text-orange-600 font-bold uppercase tracking-widest flex items-center gap-2"
          >
            <Factory className="w-4 h-4 text-orange-600 animate-bounce" />
            <span>Industrial Operating Software for Mid-Market Manufacturing</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-5xl sm:text-7xl lg:text-9xl font-extrabold font-display tracking-tight text-slate-950 uppercase leading-[0.90] select-none"
          >
            FACTORY OS &<br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-950 via-slate-800 to-orange-600">
              MACHINE FLOW.
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4 items-end"
          >
            <p className="lg:col-span-8 text-xl sm:text-2xl text-slate-600 font-sans leading-relaxed">
              From raw material lot traceability to real-time machine OEE telemetry and automated dispatch weighbridges. Custom software engineered for modern industrial plants.
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
                <Activity className="w-3.5 h-3.5 text-orange-600" />
                <span>Explore Plant Architecture</span>
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Daylight Factory Visual Display with 3D Tilt Physics */}
        <TiltCard className="rounded-[36px] sm:rounded-[48px] overflow-hidden border border-slate-200 bg-slate-50 shadow-2xl group">
          <div className="relative w-full aspect-[16/9] min-h-[380px] sm:min-h-[520px]">
            <Image
              src="/mockups/manufacturing_feature.jpg"
              alt="High-Tech Manufacturing Plant Factory Floor"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              priority
            />

            {/* Subtle Gradient Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

            {/* Floating Live Telemetry Cards */}
            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-stretch sm:items-end justify-between gap-4">
              {/* Telemetry Card 1 */}
              <div className="p-5 rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-200 text-slate-900 space-y-1.5 max-w-sm shadow-xl animate-float-slow">
                <div className="flex items-center justify-between text-xs font-mono text-orange-600 font-bold">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                    LIVE CNC LINE 04
                  </span>
                  <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    OEE 98.7%
                  </span>
                </div>
                <div className="text-sm font-bold font-sans text-slate-900">
                  Cycle time: 24.2s • <AnimatedCounter value={1840} suffix=" units produced" /> (0 scrap)
                </div>
              </div>

              {/* Telemetry Card 2 */}
              <div className="p-5 rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-200 text-slate-900 space-y-1.5 max-w-sm shadow-xl animate-float-delayed">
                <div className="flex items-center justify-between text-xs font-mono text-slate-600 font-bold">
                  <span className="text-blue-700">RAW MATERIAL COIL #B-892</span>
                  <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    VERIFIED
                  </span>
                </div>
                <div className="text-sm font-bold font-sans text-slate-900">
                  Heat #489201 linked to Batch 44. e-Way bill and QC inspection cleared.
                </div>
              </div>
            </div>
          </div>
        </TiltCard>

        {/* Infinite Protocol Ticker */}
        <div className="pt-2 border-t border-slate-200/80 space-y-3">
          <div className="text-[11px] font-mono text-slate-400 uppercase tracking-widest text-center">
            INDUSTRIAL HARDWARE & PROTOCOL INTEROPERABILITY
          </div>
          <InfiniteMarquee items={marqueeBadges} speed={28} />
        </div>
      </div>
    </section>
  );
}
