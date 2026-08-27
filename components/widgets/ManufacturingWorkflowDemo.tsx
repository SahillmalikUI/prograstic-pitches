"use client";

import React, { useState } from "react";
import { Wrench, ShieldCheck, CheckCircle2, AlertTriangle, Play, RefreshCw, Cpu, Activity } from "lucide-react";

export function ManufacturingWorkflowDemo() {
  const [activeMachine, setActiveMachine] = useState<string>("CNC Mill #04");
  const [breakdownAlert, setBreakdownAlert] = useState(false);
  const [batchCount, setBatchCount] = useState<number>(450);

  const machines = [
    { name: "CNC Mill #04", line: "Line 2 (Precision Machining)", status: "Running", oee: "94.2%", operator: "Manish Kumar" },
    { name: "Injection Molding #02", line: "Line 1 (Polymer Housing)", status: "Running", oee: "91.8%", operator: "Gurpreet Singh" },
    { name: "Laser Cutter #01", line: "Line 3 (Sheet Metal)", status: "Maintenance Queued", oee: "82.4%", operator: "Rajesh V." },
  ];

  const handleBreakdown = () => {
    setBreakdownAlert(true);
  };

  const handleReset = () => {
    setBreakdownAlert(false);
  };

  return (
    <div className="rounded-[28px] bg-white border border-slate-200 p-6 sm:p-10 shadow-sm space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-100 text-amber-700 text-xs sm:text-sm font-mono font-bold">
            <Cpu className="w-4 h-4" />
            RUGGED SHOP FLOOR TERMINAL
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display mt-2">
            Operator Touch Entry & Instant Machine Breakdown Alerts
          </h3>
          <p className="text-sm sm:text-base text-slate-500 mt-1">
            Test how factory floor operators log parts produced and trigger instant maintenance dispatch without paperwork.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600 bg-slate-50 border border-slate-200 px-4 py-2 rounded-full font-mono shrink-0">
          <ShieldCheck className="w-4 h-4 text-amber-600" />
          <span>Rugged Tablet Interface</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Machine Grid */}
        <div className="lg:col-span-7 space-y-4">
          <label className="text-xs sm:text-sm font-bold text-slate-700 uppercase font-mono tracking-wider block">
            Select Active Machine Station
          </label>
          <div className="space-y-3">
            {machines.map((m) => (
              <div
                key={m.name}
                onClick={() => setActiveMachine(m.name)}
                className={`p-5 rounded-2xl border-2 cursor-pointer transition-all ${
                  activeMachine === m.name
                    ? "border-amber-400 bg-amber-50/50 shadow-md"
                    : "border-slate-200 bg-slate-50 hover:border-slate-300"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="font-bold text-base sm:text-lg text-slate-900">{m.name}</div>
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-white border border-slate-200 text-slate-700">
                    OEE: {m.oee}
                  </span>
                </div>
                <div className="text-xs sm:text-sm text-slate-600 mt-2 font-mono flex items-center justify-between">
                  <span>Operator: {m.operator}</span>
                  <span className="font-semibold text-slate-900">{m.line}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Operator Terminal Touch Screen */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-6 rounded-[24px] bg-slate-900 text-white space-y-5 shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <span className="text-xs sm:text-sm font-mono font-bold text-amber-400">
                TERMINAL: {activeMachine}
              </span>
              <span className="text-xs font-mono text-slate-400">Batch #B-8812</span>
            </div>

            {/* Batch Counter */}
            <div className="text-center py-2 space-y-1">
              <div className="text-xs font-mono text-slate-400 uppercase">Parts Produced (Current Shift)</div>
              <div className="text-4xl sm:text-5xl font-black font-mono text-emerald-400">
                {batchCount} <span className="text-sm font-normal text-slate-400">/ 500 Target</span>
              </div>
            </div>

            {/* Big Touch Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setBatchCount((c) => c + 10)}
                className="py-3.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 font-bold text-xs sm:text-sm font-mono border border-slate-700 transition-all text-center"
              >
                +10 Parts Logged
              </button>

              <button
                onClick={handleBreakdown}
                className="py-3.5 px-3 rounded-xl bg-rose-600 hover:bg-rose-700 font-bold text-xs sm:text-sm font-mono transition-all text-center flex items-center justify-center gap-1.5 shadow-md shadow-rose-900/30"
              >
                <AlertTriangle className="w-4 h-4" />
                <span>Report Breakdown</span>
              </button>
            </div>

            {breakdownAlert && (
              <div className="p-4 rounded-xl bg-rose-950/80 border border-rose-600 text-xs sm:text-sm text-rose-200 font-mono space-y-2 animate-in fade-in">
                <div className="font-bold flex items-center justify-between">
                  <span>🚨 MAINTENANCE ALERT DISPATCHED</span>
                  <button onClick={handleReset} className="underline text-xs text-slate-400 hover:text-white">
                    Clear
                  </button>
                </div>
                <p className="text-xs text-rose-300">
                  Lead Engineer Suresh notified on WhatsApp (Ticket #MT-409). Timer started for MTTR audit.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
