"use client";

import React, { useState } from "react";
import { Calendar, Clock, CheckCircle2, MessageSquare, Smartphone, ShieldCheck, Sparkles } from "lucide-react";

export function DentalWorkflowDemo() {
  const [selectedChair, setSelectedChair] = useState<number>(1);
  const [selectedProcedure, setSelectedProcedure] = useState("Aligner 3D Scan & Review");
  const [selectedTime, setSelectedTime] = useState("04:30 PM");
  const [patientName, setPatientName] = useState("Dr. Ananya Sharma");
  const [patientPhone, setPatientPhone] = useState("+91 98765 43210");
  const [isConfirmed, setIsConfirmed] = useState(true);

  const chairs = [
    { id: 1, name: "Operatory 1 (Cosmetic & Aligners)", status: "Active Consult", doctor: "Dr. Vikram Seth" },
    { id: 2, name: "Operatory 2 (General & Hygiene)", status: "Sterilizing (5m)", doctor: "Dr. Ritu Verma" },
    { id: 3, name: "Operatory 3 (Surgical & Implants)", status: "Available", doctor: "Dr. Kabir Roy" },
  ];

  const procedures = [
    { name: "Aligner 3D Scan & Review", duration: "30 mins", type: "Orthodontics" },
    { name: "Implant CBCT Planning", duration: "45 mins", type: "Surgical" },
    { name: "Smile Design & Veneers", duration: "60 mins", type: "Aesthetics" },
    { name: "Laser Scaling & Polish", duration: "30 mins", type: "Hygiene" },
  ];

  const times = ["10:30 AM", "11:45 AM", "02:00 PM", "03:15 PM", "04:30 PM", "06:00 PM"];

  return (
    <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-slate-200">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-xs font-mono font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            LIVE CHAIR MATRIX SIMULATOR
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display mt-1">
            Dynamic Chair Allocation & WhatsApp Reminder Loop
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Test how duration-aware chair booking eliminates idle operatory time and triggers two-way patient attendance confirmation.
          </p>
        </div>

        <div className="flex items-center gap-1.5 text-xs text-slate-600 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-full font-mono">
          <ShieldCheck className="w-4 h-4 text-teal-600" />
          <span>Meta Cloud API Verified</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Interactive Controls */}
        <div className="lg:col-span-7 space-y-5">
          {/* Step 1: Chair Selection */}
          <div>
            <label className="text-xs font-bold text-slate-700 uppercase font-mono tracking-wider block mb-2">
              1. Operatory Chair Status
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {chairs.map((chair) => (
                <button
                  key={chair.id}
                  onClick={() => setSelectedChair(chair.id)}
                  className={`p-3 rounded-2xl text-left border text-xs transition-all ${
                    selectedChair === chair.id
                      ? "bg-teal-50 border-teal-500 shadow-sm"
                      : "bg-slate-50 border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <div className="font-bold text-slate-900 truncate">Chair #{chair.id}</div>
                  <div className="text-[11px] text-teal-700 font-medium truncate">{chair.doctor}</div>
                  <div className="text-[10px] text-slate-500 mt-0.5">{chair.status}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Procedure */}
          <div>
            <label className="text-xs font-bold text-slate-700 uppercase font-mono tracking-wider block mb-2">
              2. Procedure & Dynamic Time Duration
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {procedures.map((p) => (
                <button
                  key={p.name}
                  onClick={() => setSelectedProcedure(p.name)}
                  className={`p-3 rounded-2xl text-left border text-xs transition-all ${
                    selectedProcedure === p.name
                      ? "bg-teal-50 border-teal-500 shadow-sm"
                      : "bg-slate-50 border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <div className="font-bold text-slate-900">{p.name}</div>
                  <div className="text-[11px] text-slate-500 mt-0.5 font-mono">
                    ⏱ {p.duration} • <span className="text-teal-700 font-medium">{p.type}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Synchronized Slot */}
          <div>
            <label className="text-xs font-bold text-slate-700 uppercase font-mono tracking-wider block mb-2">
              3. Available Synchronized Slot
            </label>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
              {times.map((t) => (
                <button
                  key={t}
                  onClick={() => setSelectedTime(t)}
                  className={`py-2 px-2 rounded-xl text-center text-xs font-mono border transition-all ${
                    selectedTime === t
                      ? "bg-slate-900 text-white border-slate-900 font-bold"
                      : "bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Trigger */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <label className="text-slate-600 block mb-1">Patient Name</label>
                <input
                  type="text"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  className="w-full bg-white border border-slate-200 rounded-xl px-3 py-1.5 text-slate-900 focus:outline-none"
                />
              </div>
              <div>
                <label className="text-slate-600 block mb-1">WhatsApp Number</label>
                <input
                  type="text"
                  value={patientPhone}
                  onChange={(e) => setPatientPhone(e.target.value)}
                  className="w-full bg-white border border-slate-200 rounded-xl px-3 py-1.5 text-slate-900 focus:outline-none font-mono"
                />
              </div>
            </div>

            <button
              onClick={() => setIsConfirmed(true)}
              className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-all shadow-sm"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Simulate Chair Lock & WhatsApp Confirmation Dispatch</span>
            </button>
          </div>
        </div>

        {/* Right Column: Live Simulated Phone Interface */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="text-xs font-mono text-slate-500 mb-2 flex items-center gap-1.5">
            <Smartphone className="w-3.5 h-3.5 text-teal-600" />
            <span>Patient Smartphone Preview</span>
          </div>

          <div className="w-full max-w-[320px] rounded-[32px] border-4 border-slate-300 bg-[#0B141A] p-3 shadow-xl text-white">
            {/* WhatsApp Header */}
            <div className="flex items-center gap-2.5 pb-2.5 border-b border-gray-800 px-1">
              <div className="w-7 h-7 rounded-full bg-teal-600 flex items-center justify-center text-white text-xs font-bold">
                D
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1">
                  <span className="text-xs font-bold truncate">Apex Dental Studio</span>
                  <CheckCircle2 className="w-3 h-3 text-teal-400 fill-teal-400 text-black shrink-0" />
                </div>
                <span className="text-[10px] text-gray-400">Verified Official Account</span>
              </div>
            </div>

            {/* Chat Body */}
            <div className="py-3 space-y-3 min-h-[280px]">
              <div className="bg-[#005C4B] rounded-2xl rounded-tl-sm p-3 text-white text-xs space-y-2 border border-teal-500/20">
                <p className="font-semibold text-teal-100">
                  🦷 Dental Appointment Scheduled
                </p>
                <p className="text-[11px] leading-relaxed text-teal-50">
                  Hi <span className="font-semibold">{patientName || "Patient"}</span>, your slot for{" "}
                  <span className="underline font-medium">{selectedProcedure}</span> is confirmed.
                </p>

                <div className="bg-black/25 rounded-lg p-2 text-[10px] space-y-1 font-mono text-teal-100">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Slot:</span>
                    <span className="font-bold text-white">{selectedTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Operatory:</span>
                    <span>Chair #{selectedChair}</span>
                  </div>
                </div>

                <div className="space-y-1 pt-1">
                  <button className="w-full py-1.5 bg-white/10 hover:bg-white/20 rounded-md text-[10px] font-semibold text-teal-200">
                    ✅ 1-Tap Confirm Attendance
                  </button>
                  <button className="w-full py-1.5 bg-white/5 hover:bg-white/10 rounded-md text-[10px] font-medium text-gray-300">
                    🗺️ Clinic GPS Directions
                  </button>
                </div>

                <div className="text-right text-[9px] text-teal-200/60 pt-0.5">
                  Delivered ✓✓
                </div>
              </div>
            </div>

            <div className="text-center py-1 border-t border-gray-800 text-[9px] text-gray-500 font-mono">
              Automated 24h & 2h reminders active
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
