"use client";

import React, { useState } from "react";
import { Eye, ShieldCheck, CheckCircle2, Share2, Activity, Sliders, FileText } from "lucide-react";

export function NeuroWorkflowDemo() {
  const [activeSlice, setActiveSlice] = useState(24);
  const [activeSequence, setActiveSequence] = useState<"flair" | "dwi">("flair");
  const [linkDispatched, setLinkDispatched] = useState(false);

  const handleDispatch = () => {
    setLinkDispatched(true);
    setTimeout(() => setLinkDispatched(false), 3000);
  };

  return (
    <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-slate-200">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-mono font-medium">
            <Eye className="w-3.5 h-3.5" />
            CLOUD PACS & DICOM VIEWER
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display mt-1">
            Browser-Based DICOM Viewing & Instant Report Distribution
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Test how neurologists and patients access volumetric MRI scans without installing heavy local software.
          </p>
        </div>

        <div className="flex items-center gap-1.5 text-xs text-slate-600 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-full font-mono">
          <ShieldCheck className="w-4 h-4 text-indigo-600" />
          <span>Zero-Footprint WebGL</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Simulated Browser DICOM Screen */}
        <div className="lg:col-span-7 bg-slate-900 rounded-3xl p-5 text-white flex flex-col justify-between min-h-[340px]">
          <div className="flex justify-between items-start text-[11px] font-mono text-emerald-400">
            <div>
              <div className="font-bold text-white">PATIENT: SHARMA, ROHIT [M/48]</div>
              <div>STUDY: 3.0T MRI BRAIN PROTOCOL</div>
            </div>
            <div className="text-right">
              <div>SEQUENCE: {activeSequence.toUpperCase()}</div>
              <div>SLICE: {activeSlice} / 48</div>
            </div>
          </div>

          <div className="my-auto text-center py-6">
            <div className="w-32 h-32 rounded-full border-2 border-dashed border-indigo-400/40 mx-auto flex items-center justify-center bg-indigo-950/30">
              <div className="text-center">
                <span className="text-2xl">🧠</span>
                <div className="text-[10px] font-mono text-indigo-300 mt-1">
                  Slice Z: {activeSlice * 1.5}mm
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-2 pt-2 border-t border-slate-800">
            <div className="flex justify-between text-xs text-slate-400 font-mono">
              <span>Scrub Slice Volume:</span>
              <span className="text-indigo-400">Slice #{activeSlice}</span>
            </div>
            <input
              type="range"
              min="1"
              max="48"
              value={activeSlice}
              onChange={(e) => setActiveSlice(Number(e.target.value))}
              className="w-full accent-indigo-500 cursor-pointer"
            />
          </div>
        </div>

        {/* Right Column: Verified Sign-Off */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-5 rounded-3xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-slate-200 text-xs">
              <div className="flex items-center gap-1.5 font-bold text-slate-900">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Digitally Certified Report</span>
              </div>
              <span className="text-[11px] font-mono text-slate-500">Verified ✓</span>
            </div>

            <div className="text-xs text-slate-600 space-y-1 leading-relaxed">
              <p className="font-semibold text-slate-900">Impression:</p>
              <p className="text-[11px] text-slate-600">
                Normal brain volume without acute infarct or hemorrhage. Ventricles and sulci within normal limits.
              </p>
              <div className="pt-2 text-[10px] text-indigo-700 font-mono font-medium">
                Neurologist: Dr. K. S. Murthy, MD DM (Neuro)
              </div>
            </div>

            <button
              onClick={handleDispatch}
              className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition-all shadow-sm"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>{linkDispatched ? "Encrypted Magic Link Sent!" : "Dispatch Encrypted Report Link"}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
