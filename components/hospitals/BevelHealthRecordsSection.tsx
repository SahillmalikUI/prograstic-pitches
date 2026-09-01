"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, CheckCircle2, FileText, Activity, Database, Sparkles, Lock } from "lucide-react";

export function BevelHealthRecordsSection() {
  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Large Bevel Card with Soft Radar Aura Background */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative rounded-[40px] sm:rounded-[48px] bg-[#F0F5FA] border border-slate-200/80 p-8 sm:p-16 shadow-xl overflow-hidden"
      >
        {/* Subtle Animated Radar Pulse */}
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[800px] h-[500px] sm:h-[800px] rounded-full border border-slate-300/40 pointer-events-none"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center relative z-10">
          {/* Left Column: Light iPhone with Floating Lab Badges in Orbit */}
          <div className="lg:col-span-6 flex justify-center relative">
            {/* Floating Lab Badge Top Left */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-4 -left-4 sm:left-4 z-20 bg-white border border-slate-200 px-3.5 py-2 rounded-2xl shadow-lg flex items-center gap-2 text-xs font-mono font-bold text-slate-800"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Pathology Sync</span>
            </motion.div>

            {/* Floating Lab Badge Top Right */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, delay: 0.5, ease: "easeInOut" }}
              className="absolute -top-2 -right-4 sm:right-6 z-20 bg-white border border-slate-200 px-3.5 py-2 rounded-2xl shadow-lg flex items-center gap-2 text-xs font-mono font-bold text-purple-700"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-purple-500" />
              <span>Radiology DICOM</span>
            </motion.div>

            {/* Floating Lab Badge Bottom Right */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 5, delay: 1, ease: "easeInOut" }}
              className="absolute -bottom-4 right-0 sm:right-8 z-20 bg-white border border-slate-200 px-3.5 py-2 rounded-2xl shadow-lg flex items-center gap-2 text-xs font-mono font-bold text-sky-700"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-sky-500" />
              <span>ABDM Health ID</span>
            </motion.div>

            {/* The iPhone Mockup with Spring Hover */}
            <motion.div
              whileHover={{ scale: 1.03, rotate: 0.5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative w-full max-w-[290px] sm:max-w-[330px] aspect-[3/4] rounded-[36px] overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.15)] border-4 border-white bg-white cursor-pointer"
            >
              <Image
                src="/mockups/bevel_health_records.jpg"
                alt="Connect Hospital Health Records"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>

          {/* Right Column: Large Bold Text with Framer Reveal */}
          <div className="lg:col-span-6 space-y-6 text-slate-900">
            <h2 className="text-4xl sm:text-6xl font-extrabold font-display tracking-tight text-slate-950 leading-[1.08]">
              Connect your hospital health records
            </h2>

            <p className="text-lg sm:text-2xl text-slate-600 font-sans leading-relaxed">
              Store pathology labs, doctor consultation notes, and diagnostic radiology scans in one secure, unified database.
            </p>

            <div className="space-y-4 pt-2 font-sans text-base sm:text-lg text-slate-700">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Instant Lab Handoff:</strong> Blood tests and imaging results appear immediately on the doctor's screen.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Zero Lost Reports:</strong> Patients access verified reports directly via WhatsApp without paper slips.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>100% Private Cloud:</strong> Full database sovereignty with zero third-party licensing fees.</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
