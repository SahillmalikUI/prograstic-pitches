"use client";

import React, { useState } from "react";
import { GraduationCap, ShieldCheck, CheckCircle2, ChevronRight, ChevronLeft, FileText, Stamp, Award, Plane, BookOpen } from "lucide-react";

export function BookScrollEducationDemo() {
  const [currentPage, setCurrentPage] = useState<1 | 2 | 3>(1);

  return (
    <div className="rounded-[32px] bg-white border border-slate-200 p-6 sm:p-10 shadow-xl space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs sm:text-sm font-mono font-bold">
            <BookOpen className="w-4 h-4" />
            <span>3D FLIPPING ADMISSIONS DOSSIER</span>
          </div>
          <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-display mt-2">
            Interactive Student Application & Visa Page-Turner
          </h3>
          <p className="text-sm sm:text-base text-slate-500 mt-1">
            Flip through the verified pages of a live student admissions journey from IELTS intake to Embassy Visa approval.
          </p>
        </div>

        {/* Page Switcher Buttons */}
        <div className="flex items-center gap-2 self-start sm:self-auto font-mono text-xs sm:text-sm">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1) as 1 | 2 | 3)}
            className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 disabled:opacity-30 text-slate-700 flex items-center gap-1 font-semibold transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Prev</span>
          </button>
          <span className="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 font-bold">
            Page {currentPage} / 3
          </span>
          <button
            disabled={currentPage === 3}
            onClick={() => setCurrentPage((p) => Math.min(3, p + 1) as 1 | 2 | 3)}
            className="px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-30 text-white flex items-center gap-1 font-semibold shadow-md transition-colors"
          >
            <span>Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 3D Book Layout Container */}
      <div className="relative min-h-[440px] flex items-center justify-center p-2 sm:p-6 bg-slate-50 rounded-[28px] border border-slate-200/90 shadow-inner">
        {/* Page 1: Student Profile & IELTS Academic Transcript */}
        {currentPage === 1 && (
          <div className="w-full max-w-3xl bg-white rounded-2xl border-2 border-slate-200 p-6 sm:p-8 shadow-xl space-y-6 animate-in fade-in slide-in-from-left-4">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold font-mono">
                  01
                </div>
                <div>
                  <div className="font-bold text-lg text-slate-900">STUDENT PROFILE & ACADEMIC TRANSCRIPT</div>
                  <div className="text-xs text-slate-500 font-mono">File #UK-2026-8812 • Verified by Senior Counselor</div>
                </div>
              </div>
              <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                100% Verified ✓
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <div className="text-slate-400 font-mono text-xs uppercase">Student Name</div>
                <div className="font-bold text-slate-900 text-base">Harpreet Singh Dhillon</div>
                <div className="text-slate-500 font-mono text-xs">B.Tech Computer Science (CGPA: 8.92)</div>
              </div>

              <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 space-y-1">
                <div className="text-blue-600 font-mono text-xs uppercase font-bold">IELTS Academic Score</div>
                <div className="font-extrabold text-blue-950 text-xl font-display">Overall Band 7.5</div>
                <div className="text-blue-700 font-mono text-xs">L: 8.5 • R: 8.0 • W: 7.0 • S: 7.0</div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="text-xs font-mono font-bold text-slate-700 uppercase">Statement of Purpose (SOP) Status:</div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                "Specialization in Distributed Systems & AI. Draft v3 finalized by Senior Admissions Editor. Zero grammatical anomalies."
              </p>
            </div>
          </div>
        )}

        {/* Page 2: Official University Offer Letters */}
        {currentPage === 2 && (
          <div className="w-full max-w-3xl bg-white rounded-2xl border-2 border-slate-200 p-6 sm:p-8 shadow-xl space-y-6 animate-in fade-in slide-in-from-right-4">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold font-mono">
                  02
                </div>
                <div>
                  <div className="font-bold text-lg text-slate-900">OFFICIAL UNIVERSITY ACCEPTANCES & OFFERS</div>
                  <div className="text-xs text-slate-500 font-mono">3 Unconditional Offers Received</div>
                </div>
              </div>
              <span className="text-xs font-mono font-bold text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                Gold Acceptance Stamp 🏆
              </span>
            </div>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="p-4 rounded-xl bg-emerald-50 border-2 border-emerald-300 flex items-center justify-between">
                <div>
                  <div className="font-bold text-emerald-950 text-base">University of Manchester (UK)</div>
                  <div className="text-emerald-800 font-mono text-xs">MSc Advanced Computer Science • Unconditional Offer</div>
                </div>
                <span className="font-mono text-xs font-bold text-emerald-700 bg-white px-3 py-1 rounded-full border border-emerald-300">
                  ACCEPTED & DEPOSIT PAID
                </span>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                <div>
                  <div className="font-bold text-slate-900">University of Warwick (UK)</div>
                  <div className="text-slate-500 font-mono text-xs">MSc Data Analytics • Unconditional Offer</div>
                </div>
                <span className="font-mono text-xs text-slate-600 bg-white px-2.5 py-1 rounded-full border border-slate-200">
                  Offered
                </span>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                <div>
                  <div className="font-bold text-slate-900">University of Melbourne (Australia)</div>
                  <div className="text-slate-500 font-mono text-xs">Master of Information Technology • Conditional Offer</div>
                </div>
                <span className="font-mono text-xs text-slate-600 bg-white px-2.5 py-1 rounded-full border border-slate-200">
                  Offered
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Page 3: Visa Grant & CAS Certificate */}
        {currentPage === 3 && (
          <div className="w-full max-w-3xl bg-white rounded-2xl border-2 border-slate-200 p-6 sm:p-8 shadow-xl space-y-6 animate-in fade-in slide-in-from-right-4">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold font-mono">
                  03
                </div>
                <div>
                  <div className="font-bold text-lg text-slate-900">STUDENT VISA (TIER 4) & CAS LODGEMENT</div>
                  <div className="text-xs text-slate-500 font-mono">UK Visas and Immigration (UKVI) Approved</div>
                </div>
              </div>
              <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                Visa Issued ✈️
              </span>
            </div>

            <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-300 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-emerald-900 font-bold text-base">
                  <Plane className="w-5 h-5 text-emerald-600" />
                  <span>CAS Statement: E4G8K991023 (Manchester)</span>
                </div>
                <span className="font-mono text-xs font-bold text-emerald-800 bg-white px-2.5 py-1 rounded-full border border-emerald-200">
                  Biometrics Cleared
                </span>
              </div>
              <p className="text-xs sm:text-sm text-emerald-800 font-mono leading-relaxed">
                Visa Reference: GWF0789123 • Flight Departure Window: September 14, 2026 • Pre-Departure Orientation Complete.
              </p>
            </div>

            <div className="text-right text-xs font-mono text-slate-500 flex items-center justify-end gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Full student journey synchronized in consultancy central CRM</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
