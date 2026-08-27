"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Lock, Sparkles, Layout, Play, ShieldCheck, CheckCircle } from "lucide-react";

interface AppWindowFrameProps {
  title: string;
  slug: string;
  mockupImage?: string;
  children: React.ReactNode;
}

export function AppWindowFrame({ title, slug, mockupImage, children }: AppWindowFrameProps) {
  const [viewMode, setViewMode] = useState<"interactive" | "mockup">("interactive");

  return (
    <div className="w-full rounded-[28px] sm:rounded-[32px] bg-white border border-slate-200/90 shadow-2xl shadow-slate-900/8 transition-all">
      {/* macOS / Safari Window Chrome Header */}
      <div className="bg-slate-100/80 backdrop-blur-md px-4 sm:px-6 py-3.5 border-b border-slate-200 rounded-t-[28px] sm:rounded-t-[32px] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        {/* Traffic Light Buttons */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]/50 inline-block shadow-inner" />
            <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]/50 inline-block shadow-inner" />
            <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]/50 inline-block shadow-inner" />
          </div>
          <span className="hidden md:inline-block text-xs font-mono text-slate-500 ml-2">
            Prograstic Engine v3.4
          </span>
        </div>

        {/* Safari URL Address Bar */}
        <div className="flex items-center justify-center flex-1 max-w-md mx-auto w-full">
          <div className="w-full bg-white border border-slate-200/90 rounded-full px-4 py-1.5 text-xs font-mono text-slate-600 flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-1.5 truncate">
              <Lock className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span className="text-slate-400">https://</span>
              <span className="text-slate-900 font-semibold truncate">core.prograstic.com/{slug}-os</span>
            </div>
            <span className="hidden sm:inline-flex text-[10px] bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 rounded border border-emerald-200">
              SSL Verified
            </span>
          </div>
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center gap-1 self-end sm:self-auto bg-slate-200/70 p-1 rounded-full text-xs font-semibold">
          <button
            onClick={() => setViewMode("interactive")}
            className={`px-3.5 py-1 rounded-full text-xs font-medium flex items-center gap-1.5 transition-all ${
              viewMode === "interactive"
                ? "bg-white text-slate-900 shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <Play className="w-3 h-3 text-indigo-600 fill-indigo-600" />
            <span>Interactive Tool</span>
          </button>

          {mockupImage && (
            <button
              onClick={() => setViewMode("mockup")}
              className={`px-3.5 py-1 rounded-full text-xs font-medium flex items-center gap-1.5 transition-all ${
                viewMode === "mockup"
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Layout className="w-3 h-3 text-slate-600" />
              <span>Full UI Dashboard</span>
            </button>
          )}
        </div>
      </div>

      {/* Window Body */}
      <div className="p-3 sm:p-6 bg-slate-50/50 rounded-b-[28px] sm:rounded-b-[32px]">
        {viewMode === "interactive" ? (
          children
        ) : (
          <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm space-y-3 animate-in fade-in">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src={mockupImage!}
                alt={`${title} UI Dashboard Mockup`}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="p-4 flex items-center justify-between text-xs sm:text-sm text-slate-600 border-t border-slate-100">
              <span className="font-semibold text-slate-900 font-display">
                Production-grade bespoke interface engineered by Prograstic
              </span>
              <span className="font-mono text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                100% Custom Source Code
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
