"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2, UserCheck, Stethoscope, Activity, ShieldCheck, RefreshCw, Send } from "lucide-react";

export function HospitalWorkflowDemo() {
  const [activeStep, setActiveStep] = useState<1 | 2 | 3>(1);
  const [patientName, setPatientName] = useState("Rajinder Kumar");
  const [tokenDispatched, setTokenDispatched] = useState(false);
  const [rxNotes, setRxNotes] = useState("Tab. Metformin 500mg BD | Tab. Telmisartan 40mg OD");
  const [rxSigned, setRxSigned] = useState(false);

  const handleIntakeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTokenDispatched(true);
    setTimeout(() => {
      setActiveStep(2);
      setTokenDispatched(false);
    }, 1200);
  };

  const handleRxSign = () => {
    setRxSigned(true);
    setTimeout(() => {
      setActiveStep(3);
      setRxSigned(false);
    }, 1200);
  };

  return (
    <div className="rounded-[28px] bg-white border border-slate-200 p-6 sm:p-10 shadow-sm space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs sm:text-sm font-mono font-bold">
            <Activity className="w-4 h-4" />
            LIVE HOSPITAL PIPELINE SIMULATOR
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display mt-2">
            Single-Entry Intake → OPD Queue → Doctor EMR → Automated Lab Routing
          </h3>
          <p className="text-sm sm:text-base text-slate-500 mt-1">
            Test how front-desk patient intake eliminates paper registers and auto-populates doctor consultation consoles.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600 bg-slate-50 border border-slate-200 px-4 py-2 rounded-full font-mono shrink-0">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>ABDM & HIPAA Encrypted</span>
        </div>
      </div>

      {/* Step Indicators */}
      <div className="grid grid-cols-3 gap-3 text-xs sm:text-sm font-mono">
        <button
          onClick={() => setActiveStep(1)}
          className={`py-3 px-4 rounded-2xl text-left border transition-all ${
            activeStep === 1
              ? "bg-slate-900 text-white border-slate-900 shadow-md font-bold"
              : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
          }`}
        >
          <div className="text-xs opacity-75">STEP 01</div>
          <div className="font-bold truncate mt-0.5">Reception Intake</div>
        </button>

        <button
          onClick={() => setActiveStep(2)}
          className={`py-3 px-4 rounded-2xl text-left border transition-all ${
            activeStep === 2
              ? "bg-slate-900 text-white border-slate-900 shadow-md font-bold"
              : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
          }`}
        >
          <div className="text-xs opacity-75">STEP 02</div>
          <div className="font-bold truncate mt-0.5">Doctor EMR Console</div>
        </button>

        <button
          onClick={() => setActiveStep(3)}
          className={`py-3 px-4 rounded-2xl text-left border transition-all ${
            activeStep === 3
              ? "bg-slate-900 text-white border-slate-900 shadow-md font-bold"
              : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
          }`}
        >
          <div className="text-xs opacity-75">STEP 03</div>
          <div className="font-bold truncate mt-0.5">Automated Lab/Pharmacy</div>
        </button>
      </div>

      {/* Interactive Simulator Screen */}
      <div className="p-6 sm:p-8 rounded-[24px] bg-slate-50 border border-slate-200 space-y-6">
        {activeStep === 1 && (
          <form onSubmit={handleIntakeSubmit} className="space-y-5 animate-in fade-in">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <span className="text-sm sm:text-base font-bold text-slate-900 font-mono">
                Front-Desk OPD Registration Terminal
              </span>
              <span className="text-xs font-mono text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                Single-Entry Active
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="text-xs font-bold text-slate-700 uppercase font-mono block mb-1.5">
                  Patient Full Name
                </label>
                <input
                  type="text"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 uppercase font-mono block mb-1.5">
                  Department / Doctor
                </label>
                <select className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Cardiology — Dr. V. K. Chopra</option>
                  <option>Orthopaedics — Dr. Vineet Sharma</option>
                  <option>Internal Medicine — Dr. P. K. Singh</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 uppercase font-mono block mb-1.5">
                  Primary Chief Complaint
                </label>
                <input
                  type="text"
                  defaultValue="Severe chest pressure & breathlessness (2 days)"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
              <span className="text-xs sm:text-sm text-slate-500 font-mono">
                Auto-generates OPD Token #C-104 & syncs with WhatsApp live countdown
              </span>
              <button
                type="submit"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-md"
              >
                <span>{tokenDispatched ? "Syncing..." : "Dispatch Token & Push to Doctor EMR"}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}

        {activeStep === 2 && (
          <div className="space-y-5 animate-in fade-in">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <div className="flex items-center gap-2.5">
                <Stethoscope className="w-5 h-5 text-blue-600" />
                <span className="text-sm sm:text-base font-bold text-slate-900">
                  Consulting: {patientName} (Token #C-104)
                </span>
              </div>
              <span className="text-xs font-mono text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200 font-bold">
                Doctor EMR Active
              </span>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 uppercase font-mono block mb-1.5">
                Electronic Prescription & Diagnostic Requisition
              </label>
              <textarea
                rows={3}
                value={rxNotes}
                onChange={(e) => setRxNotes(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
              <span className="text-xs sm:text-sm text-slate-500 font-mono">
                Order Diagnostic: 2D Echo + Lipid Profile + Troponin-I
              </span>
              <button
                onClick={handleRxSign}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-md"
              >
                <span>{rxSigned ? "Routing Orders..." : "Sign Prescription & Route Lab Orders"}</span>
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {activeStep === 3 && (
          <div className="space-y-5 animate-in fade-in">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span className="text-sm sm:text-base font-bold text-slate-900">
                  Orders Dispatched Instantly Across Departments
                </span>
              </div>
              <button
                onClick={() => setActiveStep(1)}
                className="text-xs font-mono text-blue-600 hover:underline flex items-center gap-1"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Reset Simulation</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-1.5">
                <div className="text-xs font-bold text-blue-700 font-mono">1. PATHOLOGY LAB</div>
                <div className="text-sm font-bold text-slate-900">Barcode #L-8821 Generated</div>
                <div className="text-xs text-slate-500 font-mono">Lipid Profile & Troponin-I queued</div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-1.5">
                <div className="text-xs font-bold text-teal-700 font-mono">2. PHARMACY INVOICE</div>
                <div className="text-sm font-bold text-slate-900">Medications Dispensed</div>
                <div className="text-xs text-slate-500 font-mono">Metformin & Telmisartan billed</div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-1.5">
                <div className="text-xs font-bold text-indigo-700 font-mono">3. PATIENT WHATSAPP</div>
                <div className="text-sm font-bold text-slate-900">Digital Rx & Diet Plan Sent</div>
                <div className="text-xs text-slate-500 font-mono">PDF copy delivered instantly</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
