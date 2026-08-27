"use client";

import React, { useState } from "react";
import { Cpu, AlertTriangle, CheckCircle2, QrCode, RefreshCw, Bell, Layers, Zap } from "lucide-react";

export function ManufacturingWorkflowDemo() {
  const [machines, setMachines] = useState([
    { id: "CNC-01", name: "CNC Milling Station 1", status: "Running", output: "1,420 / 1,500 Units", oee: "94.2%", operator: "Ramesh K." },
    { id: "INJ-04", name: "Injection Moulding Line 4", status: "Running", output: "890 / 1,000 Units", oee: "88.5%", operator: "Suraj P." },
    { id: "ASM-02", name: "Assembly & Packing Cell", status: "Running", output: "3,200 / 3,500 Units", oee: "96.1%", operator: "Vikram N." },
  ]);

  const [alertMessage, setAlertMessage] = useState<string | null>(null);

  const handleTriggerBreakdown = (machineId: string) => {
    setMachines((prev) =>
      prev.map((m) =>
        m.id === machineId ? { ...m, status: "DOWNTIME (Hydraulic Fault)", oee: "62.0%" } : m
      )
    );
    setAlertMessage(`🚨 Automated Breakdown Ticket dispatched to Plant Maintenance Lead for ${machineId}! Response timer active.`);
  };

  const handleResolve = (machineId: string) => {
    setMachines((prev) =>
      prev.map((m) =>
        m.id === machineId ? { ...m, status: "Running", oee: "93.0%" } : m
      )
    );
    setAlertMessage(`✅ Machine ${machineId} marked operational by Maintenance Engineer.`);
  };

  return (
    <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-slate-200">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-100 text-amber-800 text-xs font-mono font-medium">
            <Cpu className="w-3.5 h-3.5" />
            SHOP FLOOR TELEMETRY SIMULATOR
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display mt-1">
            Rugged Shop Floor Data Entry & Live Machine Downtime Radar
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Test how factory floor operators log production batches and trigger instant 1-tap maintenance dispatch.
          </p>
        </div>

        <div className="flex items-center gap-1.5 text-xs text-slate-600 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-full font-mono">
          <QrCode className="w-4 h-4 text-amber-600" />
          <span>Barcode & QR Traceability</span>
        </div>
      </div>

      {/* Machine Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {machines.map((m) => {
          const isDown = m.status.includes("DOWNTIME");
          return (
            <div
              key={m.id}
              className={`p-5 rounded-2xl border space-y-3 transition-all ${
                isDown
                  ? "bg-red-50/60 border-red-200 shadow-sm"
                  : "bg-slate-50 border-slate-200"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold font-mono text-slate-900">{m.id}</span>
                <span
                  className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full ${
                    isDown
                      ? "bg-red-100 text-red-700"
                      : "bg-emerald-100 text-emerald-800"
                  }`}
                >
                  {m.status}
                </span>
              </div>

              <div>
                <div className="text-xs font-bold text-slate-900">{m.name}</div>
                <div className="text-[11px] text-slate-500 mt-0.5">Operator: {m.operator}</div>
              </div>

              <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-xs space-y-1 font-mono text-slate-700">
                <div className="flex justify-between">
                  <span>Batch Output:</span>
                  <span className="font-bold text-slate-900">{m.output}</span>
                </div>
                <div className="flex justify-between">
                  <span>Plant OEE:</span>
                  <span className="font-bold text-slate-900">{m.oee}</span>
                </div>
              </div>

              {isDown ? (
                <button
                  onClick={() => handleResolve(m.id)}
                  className="w-full py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-colors"
                >
                  Mark Repaired & Resume
                </button>
              ) : (
                <button
                  onClick={() => handleTriggerBreakdown(m.id)}
                  className="w-full py-2 rounded-xl bg-white hover:bg-red-50 border border-slate-200 text-red-600 font-semibold text-xs transition-colors flex items-center justify-center gap-1"
                >
                  <AlertTriangle className="w-3.5 h-3.5" />
                  <span>Simulate 1-Tap Breakdown</span>
                </button>
              )}
            </div>
          );
        })}
      </div>

      {/* Alert Dispatch Log */}
      {alertMessage && (
        <div className="p-4 rounded-2xl bg-slate-900 text-white text-xs font-mono flex items-center gap-2.5 animate-in fade-in">
          <Bell className="w-4 h-4 text-amber-400 shrink-0" />
          <span>{alertMessage}</span>
        </div>
      )}
    </div>
  );
}
