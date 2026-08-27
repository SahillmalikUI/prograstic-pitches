"use client";

import React, { useState } from "react";
import { GraduationCap, ShieldCheck, CheckCircle2, FileText, ArrowRight, Clock, UserCheck } from "lucide-react";

export function EducationWorkflowDemo() {
  const [activeStage, setActiveStage] = useState("SOP & Document Review");

  const stages = [
    { name: "Counseling & Shortlist", students: 12, status: "Active" },
    { name: "SOP & Document Review", students: 8, status: "Active Stage" },
    { name: "University Submitted", students: 15, status: "Processing" },
    { name: "Offer Letter Issued", students: 9, status: "Ready for Visa" },
  ];

  const studentDocs = [
    { name: "Passport Scan (Front/Back)", status: "Verified", color: "text-emerald-700 bg-emerald-50 border-emerald-200" },
    { name: "IELTS Academic TRF (Band 7.5)", status: "Verified", color: "text-emerald-700 bg-emerald-50 border-emerald-200" },
    { name: "Statement of Purpose (Draft v2)", status: "Under Review by Counselor", color: "text-amber-700 bg-amber-50 border-amber-200" },
    { name: "Financial Sponsorship Affidavit", status: "Uploaded by Student", color: "text-blue-700 bg-blue-50 border-blue-200" },
  ];

  return (
    <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-slate-200">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-mono font-medium">
            <GraduationCap className="w-3.5 h-3.5" />
            ADMISSIONS PIPELINE SIMULATOR
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display mt-1">
            Student Application Kanban & Secure Document Vault
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Test how overseas education consultancies track student milestones and prevent lost visa files.
          </p>
        </div>

        <div className="flex items-center gap-1.5 text-xs text-slate-600 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-full font-mono">
          <ShieldCheck className="w-4 h-4 text-blue-600" />
          <span>Centralized Cloud Vault</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Kanban Pipeline */}
        <div className="lg:col-span-6 space-y-3">
          <label className="text-xs font-bold text-slate-700 uppercase font-mono tracking-wider block">
            Application Pipeline Stages
          </label>
          <div className="space-y-2">
            {stages.map((stage) => {
              const isActive = activeStage === stage.name;
              return (
                <div
                  key={stage.name}
                  onClick={() => setActiveStage(stage.name)}
                  className={`p-3.5 rounded-2xl border cursor-pointer flex items-center justify-between text-xs transition-all ${
                    isActive
                      ? "bg-blue-50 border-blue-300 shadow-sm"
                      : "bg-slate-50 border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <div>
                    <div className="font-bold text-slate-900">{stage.name}</div>
                    <div className="text-[11px] text-slate-500 font-mono mt-0.5">
                      {stage.students} Active Student Files
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-medium bg-white px-2 py-0.5 rounded-full border border-slate-200 text-slate-700">
                    {stage.status}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Active Student File Vault */}
        <div className="lg:col-span-6 space-y-3">
          <div className="p-5 rounded-3xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-200">
              <span className="font-bold text-slate-900">Student: Harpreet Singh [UK - Fall 2026]</span>
              <span className="text-blue-700 font-mono text-[11px] font-semibold">University of Manchester</span>
            </div>

            <div className="space-y-2">
              {studentDocs.map((doc) => (
                <div
                  key={doc.name}
                  className="p-2.5 rounded-xl bg-white border border-slate-200 flex items-center justify-between text-xs"
                >
                  <div className="flex items-center gap-2">
                    <FileText className="w-3.5 h-3.5 text-slate-500" />
                    <span className="text-slate-800 font-medium">{doc.name}</span>
                  </div>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${doc.color}`}>
                    {doc.status}
                  </span>
                </div>
              ))}
            </div>

            <div className="p-2.5 rounded-xl bg-blue-50/70 border border-blue-200 text-[11px] text-blue-800 font-mono flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-blue-600 shrink-0" />
              <span>Intake Deadline Radar: 18 Days remaining for final CAS issuance</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
