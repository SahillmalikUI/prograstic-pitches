"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, ShieldCheck, Activity, CheckCircle2, Zap, Layers, Lock, Smile, Radio } from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { InfiniteMarquee } from "@/components/ui/InfiniteMarquee";
import { IndustryVertical } from "@/data/verticals";

interface DentalHeroSectionProps {
  vertical: IndustryVertical;
  onOpenScopeModal: () => void;
}

export function DentalHeroSection({ vertical, onOpenScopeModal }: DentalHeroSectionProps) {
  const marqueeBadges = [
    { text: "3D Intraoral STL Scanner Sync", tag: "CAD/CAM", icon: <Smile className="w-3.5 h-3.5 text-teal-600" /> },
    { text: "1-Tap 32-Tooth Odontogram", tag: "CHAIRSIDE", icon: <Zap className="w-3.5 h-3.5 text-amber-600" /> },
    { text: "VITA Shade Matching & Lab Gateway", tag: "PROSTHETICS", icon: <Sparkles className="w-3.5 h-3.5 text-purple-600" /> },
    { text: "Automated WhatsApp Patient EMI Quotes", tag: "FINANCE", icon: <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> },
    { text: "100% Private Cloud Sovereignty", tag: "SECURITY", icon: <Lock className="w-3.5 h-3.5 text-blue-600" /> },
  ];

  return (
    <section className="relative pt-10 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 bg-white text-slate-900 overflow-hidden">
      {/* Soft Mint Radial Aura */}
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.75, 0.5] }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
        className="absolute top-0 right-1/4 w-[600px] h-[350px] bg-teal-100/50 rounded-full blur-[100px] pointer-events-none"
      />
      <div className="absolute bottom-10 left-10 w-[500px] h-[300px] bg-cyan-50/70 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16 relative z-10">
        {/* Top Scramble & Clinic Telemetry Badges */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-5 text-xs font-mono"
        >
          <div className="flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-500" />
            </span>
            <span className="tracking-widest uppercase font-bold text-slate-900">PROGRASTIC DENTAL & CHAIRSIDE OS</span>
            <span className="text-slate-300">•</span>
            <span className="text-teal-700 font-bold bg-teal-50 px-2.5 py-0.5 rounded-full border border-teal-200 flex items-center gap-1.5 shadow-sm">
              <Radio className="w-3 h-3 text-teal-600 animate-spin" />
              <span>OPERATORY TELEMETRY: LIVE</span>
            </span>
          </div>

          <div className="flex items-center gap-6 text-xs font-mono text-slate-600">
            <div>
              <span className="text-slate-400">CHAIR TURNOVER: </span>
              <strong className="text-teal-700 font-bold bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
                <AnimatedCounter value={12} suffix=" MIN AVG" />
              </strong>
            </div>
            <div className="hidden sm:block">
              <span className="text-slate-400">LAB DISPATCH STATUS: </span>
              <strong className="text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                <AnimatedCounter value={100} suffix="% TRACKED" />
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
            className="text-sm sm:text-base font-mono text-teal-700 font-bold uppercase tracking-widest flex items-center gap-2"
          >
            <Smile className="w-4 h-4 text-teal-600 animate-bounce" />
            <span>Chairside Operating Software for Dental Practices</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-5xl sm:text-7xl lg:text-9xl font-extrabold font-display tracking-tight text-slate-950 uppercase leading-[0.90] select-none"
          >
            CHAIRSIDE OS &<br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-950 via-slate-800 to-teal-600">
              DENTAL CLINICS.
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4 items-end"
          >
            <p className="lg:col-span-8 text-xl sm:text-2xl text-slate-600 font-sans leading-relaxed">
              From 1-tap 32-tooth odontogram charting to intraoral 3D scanner sync and prosthetic lab dispatch. Custom software built for dental clinics and multi-chair chains.
            </p>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenScopeModal}
                className="w-full px-8 py-4 rounded-full bg-slate-950 hover:bg-slate-800 text-white font-bold text-sm uppercase tracking-wider transition-all shadow-xl shadow-slate-950/15 flex items-center justify-center gap-3 group"
              >
                <span>Schedule 15-Min Dental Scope</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#capabilities"
                className="w-full px-8 py-3.5 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-800 font-mono text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 font-bold"
              >
                <Activity className="w-3.5 h-3.5 text-teal-600" />
                <span>Explore Chairside Features</span>
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Daylight Dental Operatory Display with 3D Tilt Physics */}
        <TiltCard className="rounded-[36px] sm:rounded-[48px] overflow-hidden border border-slate-200 bg-slate-50 shadow-2xl group">
          <div className="relative w-full aspect-[16/9] min-h-[380px] sm:min-h-[520px]">
            <Image
              src="/mockups/dental_light_hero.jpg"
              alt="Boutique Modern Dental Operatory"
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
                <div className="flex items-center justify-between text-xs font-mono text-teal-700 font-bold">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                    OPERATORY CHAIR 02
                  </span>
                  <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    3D SCAN SYNCED
                  </span>
                </div>
                <div className="text-sm font-bold font-sans text-slate-900">
                  Intraoral STL scan mapped to 32-tooth digital odontogram in <AnimatedCounter value={12} suffix="s" />.
                </div>
              </div>

              {/* Telemetry Card 2 */}
              <div className="p-5 rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-200 text-slate-900 space-y-1.5 max-w-sm shadow-xl animate-float-delayed">
                <div className="flex items-center justify-between text-xs font-mono text-slate-600 font-bold">
                  <span className="text-teal-700">TOOTH #14 (UPPER RIGHT)</span>
                  <span className="text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                    CERAMIC CROWN RX
                  </span>
                </div>
                <div className="text-sm font-bold font-sans text-slate-900">
                  Automated CAD/CAM milling job dispatched to dental prosthetics lab.
                </div>
              </div>
            </div>
          </div>
        </TiltCard>

        {/* Infinite Dental Protocol Ticker */}
        <div className="pt-2 border-t border-slate-200/80 space-y-3">
          <div className="text-[11px] font-mono text-slate-400 uppercase tracking-widest text-center">
            CAD/CAM PROTOCOLS & CHAIRSIDE INTEGRATIONS
          </div>
          <InfiniteMarquee items={marqueeBadges} speed={28} />
        </div>
      </div>
    </section>
  );
}
