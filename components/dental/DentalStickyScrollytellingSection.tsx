"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Activity, Smile, Zap, Sparkles, CheckCircle2, Layers } from "lucide-react";
import { RadialGauge } from "@/components/ui/RadialGauge";

export function DentalStickyScrollytellingSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 25,
    restDelta: 0.001,
  });

  // 3D Perspective Transforms for Center Dental Operatory Visual
  const rotateX = useTransform(smoothProgress, [0, 0.5, 1], [18, 0, -12]);
  const rotateY = useTransform(smoothProgress, [0, 0.5, 1], [-18, 0, 14]);
  const scale = useTransform(smoothProgress, [0, 0.5, 1], [0.88, 1.05, 0.92]);
  const deviceY = useTransform(smoothProgress, [0, 0.5, 1], [30, 0, -30]);

  // Step Opacities & Translations
  const step1Opacity = useTransform(smoothProgress, [0, 0.25, 0.35], [1, 1, 0]);
  const step1Y = useTransform(smoothProgress, [0, 0.25, 0.35], [0, 0, -40]);

  const step2Opacity = useTransform(smoothProgress, [0.3, 0.45, 0.65, 0.72], [0, 1, 1, 0]);
  const step2Y = useTransform(smoothProgress, [0.3, 0.45, 0.65, 0.72], [40, 0, 0, -40]);

  const step3Opacity = useTransform(smoothProgress, [0.68, 0.8, 1], [0, 1, 1]);
  const step3Y = useTransform(smoothProgress, [0.68, 0.8, 1], [40, 0, 0]);

  // Parallax Telemetry Wings
  const badge1X = useTransform(smoothProgress, [0, 0.5, 1], [-60, 0, 40]);
  const badge1Opacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const badge2X = useTransform(smoothProgress, [0, 0.5, 1], [60, 0, -40]);
  const badge2Opacity = useTransform(smoothProgress, [0.2, 0.4, 0.9, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="relative h-[280vh] bg-white text-slate-900">
      {/* Sticky Pinned Viewport */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between py-10 px-4 sm:px-6 lg:px-8 overflow-hidden z-10">
        {/* Ambient Radial Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-teal-100/50 via-cyan-50/40 to-blue-50/50 rounded-full blur-[120px] pointer-events-none" />

        {/* Top Header Scramble */}
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between border-b border-slate-200/80 pb-4 text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-teal-500 animate-pulse" />
            <span className="font-bold text-slate-900 uppercase tracking-widest">
              3D SCROLL EXPERIENCE // CHAIRSIDE WORKFLOW
            </span>
          </div>

          <div className="flex items-center gap-2 font-mono text-slate-500">
            <span>SCROLL TO EXPLORE</span>
            <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-ping" />
          </div>
        </div>

        {/* Center 3D Stage with Sticky Operatory Visual & Crossfading Story Cards */}
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center flex-1 my-auto">
          {/* Left Column: Crossfading Story Step Panels */}
          <div className="lg:col-span-5 relative min-h-[260px] flex items-center">
            {/* Step 1: 1-Tap 32-Tooth Odontogram */}
            <motion.div
              style={{ opacity: step1Opacity, y: step1Y }}
              className="absolute inset-0 flex flex-col justify-center space-y-4 pointer-events-none"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-xs font-mono font-bold text-teal-800 w-fit">
                <Smile className="w-3.5 h-3.5 text-teal-600 animate-pulse" />
                <span>PHASE 01: 1-TAP ODONTOGRAM CHARTING</span>
              </div>
              <h3 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-slate-950 leading-tight">
                30-Second Glove-Friendly Charting
              </h3>
              <p className="text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
                Dentists tap any tooth on chairside iPads to record composite fillings, crowns, and implants in seconds.
              </p>
              <div className="flex items-center gap-3 pt-2">
                <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 font-mono text-xs font-bold border border-emerald-200">
                  30s Chairside Speed
                </span>
                <span className="text-xs font-mono text-slate-400">• Zero 40-Field Forms</span>
              </div>
            </motion.div>

            {/* Step 2: 3D Intraoral Scanner Sync */}
            <motion.div
              style={{ opacity: step2Opacity, y: step2Y }}
              className="absolute inset-0 flex flex-col justify-center space-y-4 pointer-events-none"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-xs font-mono font-bold text-cyan-800 w-fit">
                <Zap className="w-3.5 h-3.5 text-cyan-600 animate-pulse" />
                <span>PHASE 02: 3D STL INTRAORAL SCAN SYNC</span>
              </div>
              <h3 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-slate-950 leading-tight">
                Direct CAD/CAM Dental Lab Dispatch
              </h3>
              <p className="text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
                STL mesh scans attach directly to digital lab job cards with VITA shade selection and real-time delivery countdowns.
              </p>
              <div className="flex items-center gap-3 pt-2">
                <span className="px-3 py-1 rounded-full bg-teal-50 text-teal-700 font-mono text-xs font-bold border border-teal-200">
                  100% Lab Traceability
                </span>
                <span className="text-xs font-mono text-slate-400">• Zero Lost Metal Boxes</span>
              </div>
            </motion.div>

            {/* Step 3: WhatsApp Patient EMI */}
            <motion.div
              style={{ opacity: step3Opacity, y: step3Y }}
              className="absolute inset-0 flex flex-col justify-center space-y-4 pointer-events-none"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono font-bold text-blue-800 w-fit">
                <Sparkles className="w-3.5 h-3.5 text-blue-600 animate-pulse" />
                <span>PHASE 03: VISUAL WHATSAPP TREATMENT PLANS</span>
              </div>
              <h3 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-slate-950 leading-tight">
                Transparent Quotes & 0% Patient EMI
              </h3>
              <p className="text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
                Visual tooth diagrams and 1-tap 0% interest EMI options sent directly to patient WhatsApp for 40% higher case acceptance.
              </p>
              <div className="flex items-center gap-3 pt-2">
                <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-mono text-xs font-bold border border-blue-200">
                  +40% Case Acceptance
                </span>
                <span className="text-xs font-mono text-slate-400">• Instant Digital Approval</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Pinned 3D Transforming Operatory Visual */}
          <div className="lg:col-span-7 flex justify-center items-center relative py-6">
            {/* Parallax Floating Telemetry Pill 1 (Left) */}
            <motion.div
              style={{ x: badge1X, opacity: badge1Opacity }}
              className="hidden lg:flex absolute -left-6 top-1/4 z-30 p-3.5 rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-200 shadow-2xl space-y-1 w-52 pointer-events-none"
            >
              <div className="flex items-center justify-between text-[11px] font-mono text-teal-700 font-bold">
                <span>OPERATORY 02</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              </div>
              <div className="text-sm font-black text-slate-950 font-display">3D Scan Synced</div>
              <div className="text-[10px] text-slate-500 font-mono">STL: Tooth #14 Ready</div>
            </motion.div>

            {/* Parallax Floating Telemetry Pill 2 (Right) */}
            <motion.div
              style={{ x: badge2X, opacity: badge2Opacity }}
              className="hidden lg:flex absolute -right-6 bottom-1/4 z-30 p-3.5 rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-200 shadow-2xl space-y-1 w-52 pointer-events-none"
            >
              <div className="flex items-center justify-between text-[11px] font-mono text-blue-700 font-bold">
                <span>LAB STATUS</span>
                <span className="text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded text-[10px]">MILLING</span>
              </div>
              <div className="text-sm font-black text-slate-950 font-display">Zirconia Crown</div>
              <div className="text-[10px] text-slate-500 font-mono">Delivery: 48 hrs</div>
            </motion.div>

            {/* Central Pinned 3D Transforming Visual */}
            <motion.div
              style={{
                perspective: 1200,
                rotateX,
                rotateY,
                scale,
                y: deviceY,
                transformStyle: "preserve-3d",
              }}
              className="relative w-full max-w-lg aspect-[16/10] rounded-[36px] overflow-hidden shadow-[0_35px_80px_-15px_rgba(0,0,0,0.22)] border-4 border-white bg-slate-900"
            >
              <Image
                src="/mockups/dental_chairside_ipad.jpg"
                alt="Dentist Operating 3D Intraoral Scan on iPad Pro"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
        </div>

        {/* Bottom Scroll Progress Bar Indicator */}
        <div className="max-w-7xl mx-auto w-full pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs font-mono text-slate-500">
          <div className="flex items-center gap-3">
            <span className="text-slate-900 font-bold">14-DAY DELIVERY SPRINT</span>
            <span className="text-slate-300">•</span>
            <span>ZERO MONTHLY PER-DOCTOR TAX</span>
          </div>

          <div className="w-36 h-1.5 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
            <motion.div
              style={{ scaleX: smoothProgress, transformOrigin: "0%" }}
              className="h-full bg-teal-600 rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
