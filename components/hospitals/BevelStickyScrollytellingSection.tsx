"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Activity, HeartPulse, Sparkles, CheckCircle2, ShieldCheck, Zap, Bed, FileText } from "lucide-react";
import { LiveEcgWave } from "@/components/ui/LiveEcgWave";
import { RadialGauge } from "@/components/ui/RadialGauge";

export function BevelStickyScrollytellingSection() {
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

  // 3D Perspective Transforms for Center Device
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

  // Floating Badges Trajectory
  const badge1X = useTransform(smoothProgress, [0, 0.5, 1], [-60, 0, 40]);
  const badge1Opacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const badge2X = useTransform(smoothProgress, [0, 0.5, 1], [60, 0, -40]);
  const badge2Opacity = useTransform(smoothProgress, [0.2, 0.4, 0.9, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="relative h-[280vh] bg-white text-slate-900">
      {/* Sticky Pinned Viewport */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between py-10 px-4 sm:px-6 lg:px-8 overflow-hidden z-10">
        {/* Soft Ambient Radial Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-blue-100/50 via-teal-50/40 to-rose-50/50 rounded-full blur-[120px] pointer-events-none" />

        {/* Top Header Badge */}
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between border-b border-slate-200/80 pb-4 text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse" />
            <span className="font-bold text-slate-900 uppercase tracking-widest">
              3D SCROLL EXPERIENCE // CLINICAL FLOW
            </span>
          </div>

          <div className="flex items-center gap-2 font-mono text-slate-500">
            <span>SCROLL TO EXPLORE</span>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-ping" />
          </div>
        </div>

        {/* Center 3D Stage with Sticky Devices & Crossfading Story Cards */}
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center flex-1 my-auto">
          {/* Left Column: Crossfading Story Step Panels */}
          <div className="lg:col-span-5 relative min-h-[260px] flex items-center">
            {/* Step 1: Triage */}
            <motion.div
              style={{ opacity: step1Opacity, y: step1Y }}
              className="absolute inset-0 flex flex-col justify-center space-y-4 pointer-events-none"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono font-bold text-blue-800 w-fit">
                <Activity className="w-3.5 h-3.5 text-blue-600 animate-pulse" />
                <span>PHASE 01: RECEPTION TRIAGE</span>
              </div>
              <h3 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-slate-950 leading-tight">
                Instant Patient Token & WhatsApp Queue
              </h3>
              <p className="text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
                Patients scan a dynamic QR kiosk at reception. Live queue position updates sync directly to their WhatsApp.
              </p>
              <div className="flex items-center gap-3 pt-2">
                <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 font-mono text-xs font-bold border border-emerald-200">
                  94% Triage Velocity
                </span>
                <span className="text-xs font-mono text-slate-400">• Zero Lobby Congestion</span>
              </div>
            </motion.div>

            {/* Step 2: Wards */}
            <motion.div
              style={{ opacity: step2Opacity, y: step2Y }}
              className="absolute inset-0 flex flex-col justify-center space-y-4 pointer-events-none"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-xs font-mono font-bold text-teal-800 w-fit">
                <Bed className="w-3.5 h-3.5 text-teal-600 animate-pulse" />
                <span>PHASE 02: WARD & ICU SYNCHRONIZATION</span>
              </div>
              <h3 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-slate-950 leading-tight">
                Real-Time Bed Occupancy Heatmaps
              </h3>
              <p className="text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
                Admissions, sanitization timers, and nursing station handoffs are synchronized live across all hospital floors.
              </p>
              <div className="flex items-center gap-3 pt-2">
                <span className="px-3 py-1 rounded-full bg-teal-50 text-teal-700 font-mono text-xs font-bold border border-teal-200">
                  11 / 12 Beds Active
                </span>
                <span className="text-xs font-mono text-slate-400">• 1-Tap Emergency Reservation</span>
              </div>
            </motion.div>

            {/* Step 3: Care Documentation */}
            <motion.div
              style={{ opacity: step3Opacity, y: step3Y }}
              className="absolute inset-0 flex flex-col justify-center space-y-4 pointer-events-none"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-xs font-mono font-bold text-rose-800 w-fit">
                <HeartPulse className="w-3.5 h-3.5 text-rose-600 animate-pulse" />
                <span>PHASE 03: 30-SECOND DOCTOR EMR</span>
              </div>
              <h3 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-slate-950 leading-tight">
                Voice Prescriptions & Direct Pharmacy Handoff
              </h3>
              <p className="text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
                Touch-optimized clinical templates dispatch prescription orders straight to pharmacy and pathology labs.
              </p>
              <div className="flex items-center gap-3 pt-2">
                <span className="px-3 py-1 rounded-full bg-rose-50 text-rose-700 font-mono text-xs font-bold border border-rose-200">
                  30s Touch Handoff
                </span>
                <span className="text-xs font-mono text-slate-400">• ICD-11 Auto-Coding</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Pinned 3D Rotating Device Container with Parallax Badges */}
          <div className="lg:col-span-7 flex justify-center items-center relative py-6">
            {/* Parallax Floating Telemetry Pill 1 (Left) */}
            <motion.div
              style={{ x: badge1X, opacity: badge1Opacity }}
              className="hidden lg:flex absolute -left-6 top-1/4 z-30 p-3.5 rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-200 shadow-2xl space-y-1 w-52 pointer-events-none"
            >
              <div className="flex items-center justify-between text-[11px] font-mono text-blue-700 font-bold">
                <span>TRIAGE FLOW</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              </div>
              <LiveEcgWave color="#2563EB" height={26} />
              <div className="text-[11px] font-bold text-slate-900">OPD Wait: 8.4 min</div>
            </motion.div>

            {/* Parallax Floating Telemetry Pill 2 (Right) */}
            <motion.div
              style={{ x: badge2X, opacity: badge2Opacity }}
              className="hidden lg:flex absolute -right-6 bottom-1/4 z-30 p-3.5 rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-200 shadow-2xl space-y-1 w-52 pointer-events-none"
            >
              <div className="flex items-center justify-between text-[11px] font-mono text-teal-700 font-bold">
                <span>WARD SYNC</span>
                <span className="text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded text-[10px]">LIVE</span>
              </div>
              <div className="text-sm font-black text-slate-950 font-display">98.4% On-Time</div>
              <div className="text-[10px] text-slate-500 font-mono">Discharge Lag: 0s</div>
            </motion.div>

            {/* Central Pinned 3D Transforming Mockups */}
            <motion.div
              style={{
                perspective: 1200,
                rotateX,
                rotateY,
                scale,
                y: deviceY,
                transformStyle: "preserve-3d",
              }}
              className="relative flex items-center justify-center gap-4 sm:gap-6"
            >
              {/* iPhone Mockup */}
              <div className="relative w-[230px] sm:w-[280px] aspect-[9/18] rounded-[44px] overflow-hidden shadow-[0_35px_80px_-15px_rgba(0,0,0,0.22)] border-[6px] border-white bg-slate-900">
                <Image
                  src="/mockups/bevel_light_phone.jpg"
                  alt="Hospital OS iPhone Interface"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Apple Watch Mockup */}
              <div className="relative w-[130px] sm:w-[170px] aspect-[4/5] rounded-[34px] overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.18)] border-4 border-white bg-slate-900 self-end -mb-3">
                <Image
                  src="/mockups/bevel_light_watch.jpg"
                  alt="Clinical Telemetry Smart Watch"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Scroll Progress Bar Indicator */}
        <div className="max-w-7xl mx-auto w-full pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs font-mono text-slate-500">
          <div className="flex items-center gap-3">
            <span className="text-slate-900 font-bold">14-DAY DELIVERY SPRINT</span>
            <span className="text-slate-300">•</span>
            <span>ZERO MONTHLY SAAS TAX</span>
          </div>

          <div className="w-36 h-1.5 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
            <motion.div
              style={{ scaleX: smoothProgress, transformOrigin: "0%" }}
              className="h-full bg-blue-600 rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
