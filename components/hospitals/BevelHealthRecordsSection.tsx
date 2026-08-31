"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheck, CheckCircle2, FileText, Activity, Database, Sparkles, Lock } from "lucide-react";

export function BevelHealthRecordsSection() {
  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Large Bevel Card with Soft Radar Aura Background */}
      <div className="relative rounded-[40px] sm:rounded-[48px] bg-[#F0F5FA] border border-slate-200/80 p-8 sm:p-16 shadow-xl overflow-hidden">
        {/* Subtle Concentric Radar Rings */}
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[600px] sm:h-[900px] rounded-full border border-slate-300/40 pointer-events-none" />
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full border border-slate-300/40 pointer-events-none" />
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] rounded-full border border-slate-300/40 pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center relative z-10">
          {/* Left Column: Light iPhone with Floating Lab Badges in Orbit */}
          <div className="lg:col-span-6 flex justify-center relative">
            {/* Floating Lab Badge Top Left */}
            <div className="absolute -top-4 -left-4 sm:left-4 z-20 bg-white border border-slate-200 px-3.5 py-2 rounded-2xl shadow-lg flex items-center gap-2 text-xs font-mono font-bold text-slate-800 animate-in fade-in">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <span>Pathology Sync</span>
            </div>

            {/* Floating Lab Badge Top Right */}
            <div className="absolute -top-2 -right-4 sm:right-6 z-20 bg-white border border-slate-200 px-3.5 py-2 rounded-2xl shadow-lg flex items-center gap-2 text-xs font-mono font-bold text-purple-700 animate-in fade-in">
              <span className="w-2.5 h-2.5 rounded-full bg-purple-500" />
              <span>Radiology DICOM</span>
            </div>

            {/* Floating Lab Badge Bottom Right */}
            <div className="absolute -bottom-4 right-0 sm:right-8 z-20 bg-white border border-slate-200 px-3.5 py-2 rounded-2xl shadow-lg flex items-center gap-2 text-xs font-mono font-bold text-sky-700 animate-in fade-in">
              <span className="w-2.5 h-2.5 rounded-full bg-sky-500" />
              <span>ABDM Health ID</span>
            </div>

            {/* The iPhone Mockup */}
            <div className="relative w-full max-w-[300px] sm:max-w-[340px] aspect-[3/4] rounded-[36px] overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.15)] border-4 border-white bg-white">
              <Image
                src="/mockups/bevel_health_records.jpg"
                alt="Connect Hospital Health Records"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Right Column: Large Bold Bevel-Scale Text */}
          <div className="lg:col-span-6 space-y-6 text-slate-900">
            <h2 className="text-4xl sm:text-6xl font-extrabold font-display tracking-tight text-slate-950 leading-[1.08]">
              Connect your hospital health records
            </h2>

            <p className="text-lg sm:text-2xl text-slate-600 font-sans leading-relaxed">
              Store your pathology labs, doctor consultation notes, and diagnostic radiology scans in one secure, unified database.
            </p>

            <div className="space-y-4 pt-2 font-sans text-base sm:text-lg text-slate-700">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Instant Lab Handoff:</strong> Blood tests and imaging results appear immediately on the doctor's consultation console.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Zero Lost Reports:</strong> Patients access their verified reports directly via WhatsApp without paper friction.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>100% Private Cloud:</strong> Full database sovereignty with zero third-party software licensing fees.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
