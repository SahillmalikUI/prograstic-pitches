"use client";

import React, { useState, useEffect, useRef } from "react";
import { Sparkles, Eye, ShieldCheck, CheckCircle2, ChevronRight, ChevronLeft, Sliders, Scan, Layers } from "lucide-react";

export function FaceScrollAestheticDemo() {
  const [activeZone, setActiveZone] = useState<number>(1);
  const [laserScan, setLaserScan] = useState(false);

  const zones = [
    {
      id: 1,
      name: "Upper Third (Forehead & Glabella)",
      badge: "Neurotoxin Protocol",
      target: "Frontalis & Corrugator Muscles",
      treatment: "24 Units Dysport / Botox Mapping",
      depth: "Intramuscular (2.5mm)",
      expectedOutcome: "Elimination of dynamic brow lines while preserving natural facial expression",
      rotation: "rotateX(12deg) rotateY(0deg) scale(1.1)",
      pins: [
        { label: "Frontalis Right (4U)", top: "24%", left: "38%", color: "bg-indigo-500" },
        { label: "Glabella Center (8U)", top: "32%", left: "50%", color: "bg-rose-500" },
        { label: "Frontalis Left (4U)", top: "24%", left: "62%", color: "bg-indigo-500" },
        { label: "Crow's Feet (4U)", top: "42%", left: "28%", color: "bg-amber-500" },
      ],
    },
    {
      id: 2,
      name: "Mid-Face (Cheeks & Tear Troughs)",
      badge: "Dermal Volumization",
      target: "Deep Zygomatic & Infraorbital Fat Pads",
      treatment: "2.0ml Juvéderm Voluma XC (Cannula Vector)",
      depth: "Supraperiosteal Bolus",
      expectedOutcome: "Mid-face projection, restoring youthful Ogee curve and eliminating tired under-eye hollowing",
      rotation: "rotateX(0deg) rotateY(-22deg) scale(1.15)",
      pins: [
        { label: "Zygomatic Arch (0.8ml)", top: "48%", left: "34%", color: "bg-emerald-500" },
        { label: "Tear Trough Apex (0.4ml)", top: "44%", left: "44%", color: "bg-blue-500" },
        { label: "Nasolabial Anchor (0.8ml)", top: "60%", left: "42%", color: "bg-purple-500" },
      ],
    },
    {
      id: 3,
      name: "Lower Third (Jawline & Masseter)",
      badge: "Structural Contouring",
      target: "Mandibular Angle & Masseter Muscle",
      treatment: "Volux XC + 35U Masseter Slimming",
      depth: "Deep Fascial Plane",
      expectedOutcome: "Sharp, defined mandibular border with reduction in nocturnal bruxism and teeth clenching",
      rotation: "rotateX(-8deg) rotateY(24deg) scale(1.15)",
      pins: [
        { label: "Gonion Angle (1.2ml)", top: "68%", left: "68%", color: "bg-teal-500" },
        { label: "Masseter Deep (20U)", top: "62%", left: "72%", color: "bg-rose-500" },
        { label: "Pre-Jowl Sulcus (0.6ml)", top: "75%", left: "54%", color: "bg-amber-500" },
      ],
    },
    {
      id: 4,
      name: "Full Epidermal Laser Resurfacing",
      badge: "Skin Architecture Scan",
      target: "Full Facial Dermal-Epidermal Junction",
      treatment: "Fractional CO2 + Q-Switched Nd:YAG Laser",
      depth: "Fractional Thermal Ablation",
      expectedOutcome: "85% reduction in hyperpigmentation, pore refinement, and neocollagenesis synthesis",
      rotation: "rotateX(0deg) rotateY(0deg) scale(1.0)",
      pins: [
        { label: "Collagen Density: 94%", top: "35%", left: "50%", color: "bg-emerald-400" },
        { label: "Melanin Disruption: Complete", top: "52%", left: "50%", color: "bg-indigo-400" },
      ],
    },
  ];

  const currentZone = zones.find((z) => z.id === activeZone) || zones[0];

  const triggerLaserScan = () => {
    setLaserScan(true);
    setTimeout(() => setLaserScan(false), 2500);
  };

  return (
    <div className="rounded-[32px] bg-slate-950 text-white p-6 sm:p-10 border border-slate-800 shadow-2xl space-y-8 overflow-hidden relative">
      {/* Background glow */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800 relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs sm:text-sm font-mono font-bold">
            <Scan className="w-4 h-4 text-rose-400" />
            <span>3D ANATOMICAL SCROLL MAPPING</span>
          </div>
          <h3 className="text-2xl sm:text-4xl font-extrabold text-white font-display mt-2">
            Interactive Facial Zone Scanner & Injection Telemetry
          </h3>
          <p className="text-sm sm:text-base text-slate-400 mt-1">
            Scroll or switch zones to see how the camera dynamically rotates and highlights anatomical depth layers in real time.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={triggerLaserScan}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs sm:text-sm font-mono font-semibold text-rose-300 border border-rose-500/30 flex items-center gap-2 transition-all"
          >
            <Sparkles className="w-4 h-4 text-rose-400 animate-pulse" />
            <span>{laserScan ? "Scanning Dermis..." : "Trigger Laser Scan"}</span>
          </button>
        </div>
      </div>

      {/* Zone Switcher Tabs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 relative z-10 font-mono text-xs sm:text-sm">
        {zones.map((z) => (
          <button
            key={z.id}
            onClick={() => setActiveZone(z.id)}
            className={`p-3.5 rounded-2xl border text-left transition-all ${
              activeZone === z.id
                ? "bg-rose-600 text-white border-rose-500 shadow-lg shadow-rose-900/40 font-bold"
                : "bg-slate-900/80 text-slate-400 border-slate-800 hover:bg-slate-800 hover:text-white"
            }`}
          >
            <div className="text-[10px] uppercase tracking-wider opacity-75">ZONE 0{z.id}</div>
            <div className="font-semibold truncate mt-0.5">{z.name.split("(")[0]}</div>
          </button>
        ))}
      </div>

      {/* 3D Anatomical Stage Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        {/* Left Column: 3D Face Viewport with Camera Rotation Physics */}
        <div className="lg:col-span-6 bg-slate-900/90 rounded-[28px] border border-slate-800 p-6 relative min-h-[420px] flex items-center justify-center overflow-hidden">
          {/* Laser Grid Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(#e11d48_1px,transparent_1px)] [background-size:16px_16px] opacity-20 pointer-events-none" />

          {/* Animated Laser Beam */}
          {laserScan && (
            <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-rose-500 to-transparent shadow-[0_0_20px_#e11d48] animate-pulse transition-all duration-700 z-30 top-0 animate-[bounce_2s_infinite]" />
          )}

          {/* 3D Face Wireframe & Target Pins Container */}
          <div
            className="relative w-64 h-80 sm:w-72 sm:h-96 transition-all duration-700 ease-out flex items-center justify-center"
            style={{
              transform: currentZone.rotation,
              transformStyle: "preserve-3d",
              perspective: 1000,
            }}
          >
            {/* Anatomical Head Silhouette (Stylized 3D Vector Geometry) */}
            <div className="relative w-full h-full rounded-[60px] border-2 border-slate-700/80 bg-slate-950/60 backdrop-blur-md p-4 flex flex-col justify-between shadow-2xl">
              {/* Forehead Contour */}
              <div className="w-40 h-12 border-b border-indigo-500/30 rounded-t-full mx-auto" />
              {/* Eyes Axis */}
              <div className="flex justify-around px-6">
                <div className="w-10 h-3 rounded-full border border-slate-600/60" />
                <div className="w-10 h-3 rounded-full border border-slate-600/60" />
              </div>
              {/* Nasal Bridge */}
              <div className="w-3 h-16 border-r border-slate-600/60 mx-auto" />
              {/* Lip Contour */}
              <div className="w-16 h-4 border border-rose-500/30 rounded-full mx-auto" />
              {/* Jawline Arch */}
              <div className="w-32 h-10 border-t border-teal-500/40 rounded-b-full mx-auto" />
            </div>

            {/* Dynamic Anatomical Pins */}
            {currentZone.pins.map((pin, i) => (
              <div
                key={i}
                className="absolute z-20 transition-all duration-500 animate-in fade-in"
                style={{ top: pin.top, left: pin.left }}
              >
                <div className="relative group">
                  <div className={`w-3.5 h-3.5 rounded-full ${pin.color} animate-ping absolute opacity-75`} />
                  <div className={`w-3.5 h-3.5 rounded-full ${pin.color} border-2 border-white shadow-lg relative cursor-pointer`} />
                  <div className="absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap bg-slate-900 border border-slate-700 text-[11px] font-mono text-white px-2.5 py-0.5 rounded-md shadow-xl pointer-events-none">
                    {pin.label}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Active Angle Readout */}
          <div className="absolute bottom-4 left-4 font-mono text-[11px] text-slate-400 flex items-center gap-2 bg-slate-950/80 px-3 py-1.5 rounded-full border border-slate-800">
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
            <span>Camera Coordinates: {currentZone.rotation}</span>
          </div>
        </div>

        {/* Right Column: Live Clinical Prescription & Telemetry */}
        <div className="lg:col-span-6 space-y-5">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 text-rose-300 border border-rose-500/20 text-xs font-mono font-bold">
              <span>{currentZone.badge}</span>
            </div>
            <h4 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
              {currentZone.name}
            </h4>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {currentZone.expectedOutcome}
            </p>
          </div>

          <div className="space-y-3 font-mono text-xs sm:text-sm">
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
              <div className="text-slate-400 text-xs uppercase">Target Anatomical Structure</div>
              <div className="text-white font-bold">{currentZone.target}</div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
              <div className="text-slate-400 text-xs uppercase">Clinical Formulation & Volume</div>
              <div className="text-rose-400 font-bold">{currentZone.treatment}</div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-between">
              <span className="text-slate-400 text-xs uppercase">Injection Depth:</span>
              <span className="text-emerald-400 font-bold">{currentZone.depth}</span>
            </div>
          </div>

          {/* Stepper Navigation Buttons */}
          <div className="flex items-center justify-between pt-2">
            <button
              disabled={activeZone === 1}
              onClick={() => setActiveZone((prev) => Math.max(1, prev - 1))}
              className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 disabled:opacity-30 text-white text-xs sm:text-sm font-mono flex items-center gap-1.5 border border-slate-800"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous Zone</span>
            </button>

            <span className="text-xs font-mono text-slate-500">
              Zone {activeZone} of 4
            </span>

            <button
              disabled={activeZone === 4}
              onClick={() => setActiveZone((prev) => Math.min(4, prev + 1))}
              className="px-4 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 disabled:opacity-30 text-white text-xs sm:text-sm font-mono flex items-center gap-1.5 font-bold shadow-lg shadow-rose-900/30"
            >
              <span>Next Zone</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
