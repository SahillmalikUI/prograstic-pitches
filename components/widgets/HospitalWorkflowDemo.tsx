"use client";

import React, { useState } from "react";
import { Users, Activity, FileText, CheckCircle2, ArrowRight, Bell, Zap, Layers, RefreshCw } from "lucide-react";

export function HospitalWorkflowDemo() {
  const [patientName, setPatientName] = useState("Rajesh Malhotra");
  const [department, setDepartment] = useState("Cardiology (Dr. Sharma)");
  const [symptom, setSymptom] = useState("Chest discomfort & elevated BP (150/95)");
  const [activeStep, setActiveStep] = useState(2); // 1: Front Desk, 2: Doctor EMR, 3: Lab & Ward

  const [queueList, setQueueList] = useState([
    { token: "T-101", name: "Rajesh Malhotra", dept: "Cardiology", status: "In Consultation", wait: "Now" },
    { token: "T-102", name: "Sunita Patel", dept: "Cardiology", status: "Next in Queue", wait: "6 mins" },
    { token: "T-103", name: "Amitabh Sen", dept: "Internal Med", status: "Waiting in Lounge", wait: "14 mins" },
  ]);

  const [rxGenerated, setRxGenerated] = useState(false);

  return (
    <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-slate-200">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-mono font-medium">
            <Zap className="w-3.5 h-3.5" />
            LIVE WORKFLOW SIMULATOR
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display mt-1">
            Single-Entry Hospital Data Pipeline & Live OPD Flow
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Test how front-desk patient registration instantly flows to the doctor EMR and automated WhatsApp token alerts.
          </p>
        </div>

        {/* Step Indicator */}
        <div className="flex items-center bg-slate-100 p-1 rounded-full text-xs font-semibold">
          <button
            onClick={() => setActiveStep(1)}
            className={`px-3 py-1 rounded-full transition-all ${
              activeStep === 1 ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-800"
            }`}
          >
            1. Front Desk
          </button>
          <button
            onClick={() => setActiveStep(2)}
            className={`px-3 py-1 rounded-full transition-all ${
              activeStep === 2 ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-800"
            }`}
          >
            2. Doctor Console
          </button>
          <button
            onClick={() => setActiveStep(3)}
            className={`px-3 py-1 rounded-full transition-all ${
              activeStep === 3 ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-800"
            }`}
          >
            3. Lab & Handoff
          </button>
        </div>
      </div>

      {/* Interactive Flow Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Interactive Inputs */}
        <div className="lg:col-span-7 space-y-4">
          {activeStep === 1 && (
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="text-xs font-bold text-slate-900 uppercase font-mono tracking-wider flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-blue-600" />
                1-Step Front-Desk Patient Intake
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <label className="text-slate-600 block mb-1">Patient Full Name</label>
                  <input
                    type="text"
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-slate-900 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="text-slate-600 block mb-1">Consulting Department</label>
                  <select
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-slate-900 focus:outline-none focus:border-blue-500"
                  >
                    <option>Cardiology (Dr. Sharma)</option>
                    <option>Internal Medicine (Dr. Iyer)</option>
                    <option>Orthopaedics (Dr. Khanna)</option>
                  </select>
                </div>
              </div>
              <button
                onClick={() => setActiveStep(2)}
                className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition-all shadow-sm"
              >
                <span>Dispatch Token & Push to Doctor EMR</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

          {activeStep === 2 && (
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-200">
                <span className="font-bold text-slate-900 uppercase font-mono tracking-wider flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-blue-600" />
                  Doctor Active Consult Screen: {patientName} [Token #T-101]
                </span>
                <span className="text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  Data Synced from Reception
                </span>
              </div>

              <div className="text-xs space-y-2">
                <div>
                  <label className="text-slate-600 block mb-1">Clinical Vitals & Symptoms</label>
                  <input
                    type="text"
                    value={symptom}
                    onChange={(e) => setSymptom(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-slate-900 focus:outline-none"
                  />
                </div>

                <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-1.5">
                  <div className="text-[11px] font-bold text-slate-700 uppercase font-mono">1-Click Specialty Prescription Macro</div>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-800 text-[11px]">Tab. Telmisartan 40mg OD</span>
                    <span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-800 text-[11px]">Tab. Atorvastatin 20mg HS</span>
                    <span className="px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 text-[11px] border border-blue-100 font-medium">Requisition: 2D Echo + Lipid Profile</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => {
                  setRxGenerated(true);
                  setActiveStep(3);
                }}
                className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition-all"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Sign Prescription & Route Lab Orders</span>
              </button>
            </div>
          )}

          {activeStep === 3 && (
            <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-3">
              <div className="flex items-center gap-2 text-emerald-800 font-bold text-xs font-mono uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Prescription Finalized & Departmental Bridge Active
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                Orders for <span className="font-semibold text-slate-900">{patientName}</span> were automatically routed to the In-House Pathology Lab & Diagnostic Wing without printing or paper handover.
              </p>
              <div className="p-3 rounded-xl bg-white border border-emerald-200 text-xs font-mono text-slate-700 space-y-1">
                <div>• Patient WhatsApp: E-Prescription PDF Delivered (Green-Tick)</div>
                <div>• Diagnostic Wing: 2D Echo requisition queued in Radiology station</div>
                <div>• Billing Counter: Itemized charges reconciled automatically</div>
              </div>
              <button
                onClick={() => setActiveStep(1)}
                className="text-xs font-bold text-emerald-800 hover:underline flex items-center gap-1"
              >
                <RefreshCw className="w-3 h-3" />
                <span>Simulate Next Patient Flow</span>
              </button>
            </div>
          )}
        </div>

        {/* Right Column: Live Queue Board */}
        <div className="lg:col-span-5 space-y-3">
          <div className="flex items-center justify-between text-xs font-bold text-slate-700 uppercase font-mono">
            <span>Synchronized Queue Radar</span>
            <span className="text-blue-600 font-medium">Real-Time</span>
          </div>

          <div className="space-y-2">
            {queueList.map((item, idx) => (
              <div
                key={item.token}
                className={`p-3 rounded-2xl border flex items-center justify-between transition-all ${
                  idx === 0
                    ? "bg-blue-50/70 border-blue-200 shadow-sm"
                    : "bg-slate-50 border-slate-200"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center font-mono font-bold text-xs ${
                      idx === 0 ? "bg-blue-600 text-white" : "bg-white border border-slate-200 text-slate-700"
                    }`}
                  >
                    {item.token}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">{item.name}</div>
                    <div className="text-[11px] text-slate-500">{item.dept}</div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-xs font-mono font-bold text-blue-700">{item.wait}</div>
                  <div className="text-[10px] text-slate-500">{item.status}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-600 flex items-center gap-2">
            <Bell className="w-3.5 h-3.5 text-blue-600 shrink-0" />
            <span>Patients receive automated WhatsApp alerts when 1 token remains.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
