"use client";

import React, { useEffect, useRef, useState } from "react";
import { BookOpen, CheckCircle2, ShieldCheck, Award, FileText, Plane, Sparkles, ArrowDown, ChevronRight } from "lucide-react";

export function BookScrollEducationDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalScrollDistance = rect.height - windowHeight;

      if (totalScrollDistance <= 0) return;

      const currentScroll = -rect.top;
      const progress = Math.min(Math.max(currentScroll / totalScrollDistance, 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Desktop leaf rotation angles (0 to -180 deg)
  const leaf1Rotation = Math.min(Math.max((scrollProgress - 0.05) / 0.4 * -180, -180), 0);
  const leaf2Rotation = Math.min(Math.max((scrollProgress - 0.52) / 0.4 * -180, -180), 0);

  const activeStageName =
    scrollProgress < 0.35
      ? "PAGE 1: Student Intake & IELTS TRF"
      : scrollProgress < 0.7
      ? "PAGE 2: Official University Offer Letters"
      : "PAGE 3: Embassy Visa Grant & CAS";

  return (
    <div ref={containerRef} className="relative h-[220vh] sm:h-[250vh] w-full">
      {/* Sticky Book Viewport */}
      <div className="sticky top-16 sm:top-20 w-full min-h-[520px] sm:min-h-[640px] flex flex-col justify-between p-4 sm:p-8 bg-slate-900 rounded-[28px] sm:rounded-[36px] border border-slate-800 shadow-2xl overflow-hidden">
        {/* Background Ambient Glow */}
        <div className="absolute -top-32 -right-32 w-80 sm:w-96 h-80 sm:h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-80 sm:w-96 h-80 sm:h-96 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />

        {/* Top Control & Scroll Status Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800 relative z-20">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs sm:text-sm font-mono font-bold">
              <BookOpen className="w-4 h-4 text-blue-400" />
              <span>3D SCROLL-DRIVEN NOTEBOOK</span>
            </div>
            <h3 className="text-lg sm:text-3xl font-extrabold text-white font-display mt-1">
              Scroll Down To Turn The Pages
            </h3>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs sm:text-sm">
            <span className="text-slate-400 hidden sm:inline">Active Page:</span>
            <span className="px-3 py-1 rounded-full bg-blue-600 text-white font-bold text-xs sm:text-sm shadow-md shadow-blue-900/30 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span className="truncate max-w-[200px] sm:max-w-none">{activeStageName}</span>
            </span>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* DESKTOP VIEW (MD+): 2-Page Dual Spread Physical Notebook with Spiral Spine */}
        {/* ========================================================================= */}
        <div className="hidden md:flex my-auto py-6 items-center justify-center relative z-10 [perspective:1600px]">
          <div className="relative w-full max-w-4xl h-[410px] rounded-3xl bg-[#0F172A] border-4 border-slate-800 shadow-[0_25px_60px_rgba(0,0,0,0.6)] flex items-stretch overflow-visible">
            {/* Spiral Spine Ring Markers in the Center */}
            <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-8 z-40 flex flex-col justify-around items-center pointer-events-none">
              {Array.from({ length: 10 }).map((_, i) => (
                <div
                  key={i}
                  className="w-7 h-3 rounded-full bg-gradient-to-r from-slate-400 via-slate-200 to-slate-500 border border-slate-600 shadow-md transform -rotate-6"
                />
              ))}
            </div>

            {/* LEFT STATIC PAGE: Official Consultancy Header / Cover Spine */}
            <div className="w-1/2 h-full bg-[#FAF9F6] rounded-l-2xl p-6 sm:p-7 border-r border-slate-300 shadow-inner flex flex-col justify-between text-slate-800">
              <div className="space-y-2 border-b border-slate-200 pb-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold tracking-widest uppercase text-blue-800 bg-blue-50 px-2.5 py-0.5 rounded border border-blue-200">
                    ADMISSIONS DOSSIER 2026
                  </span>
                  <span className="text-xs font-mono text-slate-400">REF: UK-8812</span>
                </div>
                <h4 className="text-lg sm:text-xl font-extrabold text-slate-900 font-display">
                  Global Admissions Journey
                </h4>
                <p className="text-xs text-slate-500">
                  Candidate: <strong className="text-slate-900">Harpreet Singh Dhillon</strong>
                </p>
              </div>

              {/* Progress Milestones Checklist on Left Page */}
              <div className="space-y-2 text-xs font-mono">
                <div className={`p-2.5 rounded-xl border transition-all flex items-center justify-between ${
                  scrollProgress >= 0.05 ? "bg-emerald-50 border-emerald-200 text-emerald-900 font-bold" : "bg-white border-slate-200 text-slate-500"
                }`}>
                  <span>1. Intake & IELTS TRF (7.5)</span>
                  <span>{scrollProgress >= 0.05 ? "✓ Complete" : "Pending"}</span>
                </div>

                <div className={`p-2.5 rounded-xl border transition-all flex items-center justify-between ${
                  scrollProgress >= 0.45 ? "bg-emerald-50 border-emerald-200 text-emerald-900 font-bold" : "bg-white border-slate-200 text-slate-500"
                }`}>
                  <span>2. Unconditional Offers (3)</span>
                  <span>{scrollProgress >= 0.45 ? "✓ Complete" : "In Progress"}</span>
                </div>

                <div className={`p-2.5 rounded-xl border transition-all flex items-center justify-between ${
                  scrollProgress >= 0.85 ? "bg-emerald-50 border-emerald-200 text-emerald-900 font-bold" : "bg-white border-slate-200 text-slate-500"
                }`}>
                  <span>3. Embassy Visa (Tier 4)</span>
                  <span>{scrollProgress >= 0.85 ? "✓ Issued ✈️" : "Queued"}</span>
                </div>
              </div>

              <div className="text-[11px] text-slate-400 font-mono flex items-center gap-1.5 border-t border-slate-200 pt-2">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                <span>Centralized Secure Admissions Vault</span>
              </div>
            </div>

            {/* RIGHT BASE PAGE (The final underneath page: Visa Grant & CAS) */}
            <div className="w-1/2 h-full bg-[#FAF9F6] rounded-r-2xl p-6 sm:p-7 shadow-inner flex flex-col justify-between text-slate-800">
              <div className="space-y-2 border-b border-slate-200 pb-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold tracking-widest uppercase text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">
                    STAGE 03 • FINAL
                  </span>
                  <span className="text-xs font-mono text-emerald-700 font-bold">APPROVED ✈️</span>
                </div>
                <h4 className="text-lg sm:text-xl font-extrabold text-slate-900 font-display">
                  UKVI Visa Grant & CAS Lodgement
                </h4>
              </div>

              <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-300 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono font-bold text-emerald-950">
                  <span className="flex items-center gap-1.5">
                    <Plane className="w-4 h-4 text-emerald-600" />
                    <span>CAS: E4G8K991023</span>
                  </span>
                  <span>Manchester UK</span>
                </div>
                <p className="text-xs text-emerald-900 font-mono leading-relaxed">
                  Visa Grant Letter issued. Biometrics verified. Scheduled flight departure: September 14, 2026.
                </p>
              </div>

              <div className="text-[11px] text-slate-400 font-mono flex items-center justify-end gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>All documents synced to student mobile app</span>
              </div>
            </div>

            {/* 3D FLIPPING LEAF 2: University Offers */}
            <div
              className="absolute top-0 bottom-0 left-1/2 w-1/2 h-full origin-left [transform-style:preserve-3d] transition-transform duration-100 ease-out pointer-events-none z-30"
              style={{
                transform: `rotateY(${leaf2Rotation}deg)`,
              }}
            >
              <div className="absolute inset-0 w-full h-full bg-[#FAF9F6] rounded-r-2xl p-6 sm:p-7 shadow-2xl border-l border-slate-300 flex flex-col justify-between text-slate-800 [backface-visibility:hidden]">
                <div className="space-y-1 border-b border-slate-200 pb-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-indigo-800 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200">
                      STAGE 02 • OFFERS
                    </span>
                    <span className="text-xs font-mono text-amber-700 font-bold">3 Unconditional</span>
                  </div>
                  <h4 className="text-lg font-extrabold text-slate-900 font-display">
                    Official University Acceptances
                  </h4>
                </div>

                <div className="space-y-2.5 text-xs">
                  <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-300">
                    <div className="font-bold text-emerald-950 text-sm">Univ. of Manchester (UK)</div>
                    <div className="text-xs text-emerald-800 font-mono">MSc Computer Science • Unconditional ✓</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="font-bold text-slate-900 text-sm">Univ. of Warwick (UK)</div>
                    <div className="text-xs text-slate-500 font-mono">MSc Data Analytics • Offered</div>
                  </div>
                </div>

                <div className="text-[11px] font-mono text-blue-700 flex items-center justify-end gap-1">
                  <span>Keep scrolling for Visa Stamp ➔</span>
                </div>
              </div>

              <div className="absolute inset-0 w-full h-full bg-[#F3F4F6] rounded-l-2xl p-5 shadow-2xl flex items-center justify-center text-slate-400 font-mono text-xs [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <span>[ Official University Verification Stamp Seal ]</span>
              </div>
            </div>

            {/* 3D FLIPPING LEAF 1: Student Profile & IELTS */}
            <div
              className="absolute top-0 bottom-0 left-1/2 w-1/2 h-full origin-left [transform-style:preserve-3d] transition-transform duration-100 ease-out pointer-events-none z-30"
              style={{
                transform: `rotateY(${leaf1Rotation}deg)`,
              }}
            >
              <div className="absolute inset-0 w-full h-full bg-[#FAF9F6] rounded-r-2xl p-6 sm:p-7 shadow-2xl border-l border-slate-300 flex flex-col justify-between text-slate-800 [backface-visibility:hidden]">
                <div className="space-y-1 border-b border-slate-200 pb-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-blue-800 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                      STAGE 01 • INTAKE
                    </span>
                    <span className="text-xs font-mono text-emerald-700 font-bold">IELTS Band 7.5</span>
                  </div>
                  <h4 className="text-lg font-extrabold text-slate-900 font-display">
                    Academic Scores & Transcripts
                  </h4>
                </div>

                <div className="space-y-2.5 text-xs">
                  <div className="p-3 rounded-xl bg-blue-50 border border-blue-200">
                    <div className="font-bold text-blue-950 text-sm">IELTS Academic Test Report</div>
                    <div className="text-xs text-blue-800 font-mono">Listening 8.5 • Reading 8.0 • Writing 7.0 • Speaking 7.0</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="font-bold text-slate-900 text-sm">Statement of Purpose (SOP)</div>
                    <div className="text-xs text-slate-600">Specialization in Distributed Systems finalized.</div>
                  </div>
                </div>

                <div className="text-[11px] font-mono text-blue-700 flex items-center justify-end gap-1">
                  <span>Scroll down to turn page ➔</span>
                </div>
              </div>

              <div className="absolute inset-0 w-full h-full bg-[#F3F4F6] rounded-l-2xl p-5 shadow-2xl flex items-center justify-center text-slate-400 font-mono text-xs [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <span>[ Verified IELTS British Council Verification Seal ]</span>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* MOBILE & TABLET VIEW (< MD): Full-Width Touch-Friendly Notebook Card Pad */}
        {/* ========================================================================= */}
        <div className="flex md:hidden my-auto py-4 items-center justify-center relative z-10 w-full">
          <div className="w-full bg-[#FAF9F6] rounded-2xl border-2 border-slate-300 p-5 shadow-xl text-slate-800 space-y-4">
            {/* Top Spiral Rings Header on Mobile */}
            <div className="flex justify-between items-center pb-2 border-b border-slate-200">
              <div className="flex items-center gap-1">
                {Array.from({ length: 6 }).map((_, i) => (
                  <span key={i} className="w-2.5 h-2 rounded-full bg-slate-400 inline-block" />
                ))}
              </div>
              <span className="text-[10px] font-mono font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                PAGE {scrollProgress < 0.35 ? "1/3" : scrollProgress < 0.7 ? "2/3" : "3/3"}
              </span>
            </div>

            {/* Stage 1 on Mobile */}
            {scrollProgress < 0.35 && (
              <div className="space-y-3 animate-in fade-in">
                <div>
                  <span className="text-[10px] font-mono text-blue-700 uppercase font-bold">Stage 01 • Intake</span>
                  <h4 className="text-base font-bold text-slate-900">Student Profile & IELTS Scores</h4>
                  <p className="text-xs text-slate-500">Candidate: Harpreet Singh Dhillon (CGPA 8.92)</p>
                </div>

                <div className="p-3 rounded-xl bg-blue-50 border border-blue-200 text-xs space-y-1">
                  <div className="font-bold text-blue-950">IELTS Academic: Band 7.5</div>
                  <div className="text-[11px] text-blue-800 font-mono">L: 8.5 • R: 8.0 • W: 7.0 • S: 7.0</div>
                </div>

                <p className="text-[11px] font-mono text-slate-500 text-center pt-1">
                  ↓ Scroll down to flip to University Offers ↓
                </p>
              </div>
            )}

            {/* Stage 2 on Mobile */}
            {scrollProgress >= 0.35 && scrollProgress < 0.7 && (
              <div className="space-y-3 animate-in fade-in">
                <div>
                  <span className="text-[10px] font-mono text-indigo-700 uppercase font-bold">Stage 02 • Offers</span>
                  <h4 className="text-base font-bold text-slate-900">University Offer Letters</h4>
                  <p className="text-xs text-slate-500">3 Unconditional Admissions Received</p>
                </div>

                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-300 text-xs">
                  <div className="font-bold text-emerald-950">Univ. of Manchester (UK)</div>
                  <div className="text-[11px] text-emerald-800 font-mono">MSc Computer Science • Unconditional Offer ✓</div>
                </div>

                <p className="text-[11px] font-mono text-slate-500 text-center pt-1">
                  ↓ Scroll down to flip to Embassy Visa ↓
                </p>
              </div>
            )}

            {/* Stage 3 on Mobile */}
            {scrollProgress >= 0.7 && (
              <div className="space-y-3 animate-in fade-in">
                <div>
                  <span className="text-[10px] font-mono text-emerald-700 uppercase font-bold">Stage 03 • Approved</span>
                  <h4 className="text-base font-bold text-slate-900">UKVI Student Visa Issued ✈️</h4>
                  <p className="text-xs text-slate-500">CAS: E4G8K991023 (Manchester)</p>
                </div>

                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs space-y-1">
                  <div className="font-bold text-emerald-950">Biometrics & CAS Verified</div>
                  <div className="text-[11px] text-emerald-800 font-mono">Flight Departure: Sept 14, 2026</div>
                </div>

                <div className="text-[10px] text-emerald-700 font-mono text-center flex items-center justify-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  <span>Admissions file successfully completed</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Interactive Scroll Indicator Bar */}
        <div className="flex items-center justify-between pt-3 border-t border-slate-800 font-mono text-xs text-slate-400 relative z-20">
          <div className="flex items-center gap-2">
            <ArrowDown className="w-4 h-4 text-blue-400 animate-bounce" />
            <span className="text-[11px] sm:text-xs">Scroll to flip pages</span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <span className="hidden sm:inline">Scroll:</span>
            <div className="w-20 sm:w-40 h-2 bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-500 rounded-full transition-all duration-75"
                style={{ width: `${scrollProgress * 100}%` }}
              />
            </div>
            <span className="text-white font-bold text-xs sm:text-sm">{Math.round(scrollProgress * 100)}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
