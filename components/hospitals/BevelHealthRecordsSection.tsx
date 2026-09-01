"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Zap, Database } from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";

export function BevelHealthRecordsSection() {
  const points = [
    "Instant Lab Handoff to Doctor Screen",
    "Direct WhatsApp Patient Report Dispatch",
    "100% Private Cloud Database Sovereignty",
  ];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative rounded-[36px] sm:rounded-[44px] bg-[#F0F5FA] border border-slate-200/80 p-8 sm:p-14 shadow-xl overflow-hidden"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 items-center relative z-10">
          {/* Left Column: iPhone with 3D Tilt */}
          <div className="lg:col-span-6 flex justify-center relative">
            {/* Orbiting Badge 1 */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-3 -left-3 sm:left-4 z-20 bg-white border border-slate-200 px-3 py-1.5 rounded-xl shadow-md flex items-center gap-2 text-xs font-mono font-bold text-slate-800"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Pathology Sync</span>
            </motion.div>

            {/* Orbiting Badge 2 */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, delay: 0.5, ease: "easeInOut" }}
              className="absolute -bottom-3 right-2 sm:right-6 z-20 bg-white border border-slate-200 px-3 py-1.5 rounded-xl shadow-md flex items-center gap-2 text-xs font-mono font-bold text-purple-700"
            >
              <span className="w-2 h-2 rounded-full bg-purple-500" />
              <span>Radiology DICOM</span>
            </motion.div>

            <TiltCard className="rounded-[36px] p-2">
              <div className="relative w-full max-w-[270px] sm:max-w-[310px] aspect-[3/4] rounded-[32px] overflow-hidden shadow-2xl border-4 border-white bg-white">
                <Image
                  src="/mockups/bevel_health_records.jpg"
                  alt="Connect Hospital Health Records"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </TiltCard>
          </div>

          {/* Right Column: Punchy, Minimal Text */}
          <div className="lg:col-span-6 space-y-6 text-slate-900">
            <div className="space-y-3">
              <span className="px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-mono font-bold text-blue-700 shadow-sm">
                UNIFIED DATA LAYER
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-slate-950 leading-[1.08]">
                Connect your hospital health records.
              </h2>
              <p className="text-base sm:text-xl text-slate-600 font-sans leading-relaxed">
                Pathology, EMR notes, and DICOM radiology in one unified database.
              </p>
            </div>

            <div className="space-y-2.5 pt-2">
              {points.map((pt, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 rounded-2xl bg-white/80 border border-slate-200/80 text-sm sm:text-base font-bold text-slate-800 shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
