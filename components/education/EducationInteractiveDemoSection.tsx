"use client";

import React from "react";
import { BookScrollEducationDemo } from "@/components/widgets/BookScrollEducationDemo";
import { GraduationCap, Sparkles, Activity } from "lucide-react";

export function EducationInteractiveDemoSection() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10 bg-white text-slate-900">
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-xs font-mono font-bold text-amber-800">
          <GraduationCap className="w-3.5 h-3.5 text-amber-600" />
          <span>3D SCROLL-DRIVEN FLIPPING NOTEBOOK</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 font-display tracking-tight uppercase leading-tight">
          Flip The Student Dossier Notebook
        </h2>
        <p className="text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
          Scroll down inside the interactive dossier below to watch the physical pages flip in 3D: IELTS 7.5 TRF ➔ Russell Group Offer Letters ➔ UKVI Visa Grant.
        </p>
      </div>

      <div className="rounded-[40px] bg-[#FFFDF7] border border-amber-200/90 p-4 sm:p-8 shadow-xl">
        <BookScrollEducationDemo />
      </div>
    </section>
  );
}
