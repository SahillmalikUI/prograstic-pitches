"use client";

import React, { useState } from "react";
import { Clock, CheckCircle2, MessageCircle, Calendar, ShieldCheck, RefreshCw, UserCheck } from "lucide-react";

export function DentalWorkflowDemo() {
  const [activeChair, setActiveChair] = useState<number>(1);
  const [reminderSent, setReminderSent] = useState(false);
  const [patientConfirmed, setPatientConfirmed] = useState(false);

  const chairs = [
    { id: 1, name: "Operatory 1 (Surgical / Implants)", doctor: "Dr. Thind", status: "In-Procedure", time: "35 mins remaining", color: "border-teal-400 bg-teal-50/50" },
    { id: 2, name: "Operatory 2 (Orthodontics / Aligners)", doctor: "Dr. Kaur", status: "Ready for Next Patient", time: "Next: Ananya Sharma (4:00 PM)", color: "border-blue-400 bg-blue-50/50" },
    { id: 3, name: "Operatory 3 (Hygiene & Scaling)", doctor: "Hygienist Pooja", status: "Sanitizing Chair", time: "Available in 5 mins", color: "border-amber-400 bg-amber-50/50" },
  ];

  const handleSendReminder = () => {
    setReminderSent(true);
    setTimeout(() => {
      setPatientConfirmed(true);
    }, 1500);
  };

  return (
    <div className="rounded-[28px] bg-white border border-slate-200 p-6 sm:p-10 shadow-sm space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-xs sm:text-sm font-mono font-bold">
            <Clock className="w-4 h-4" />
            CHAIR CAPACITY MATRIX & WHATSAPP RADAR
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display mt-2">
            Multi-Chair Operatory Grid & Two-Way Attendance Confirmation
          </h3>
          <p className="text-sm sm:text-base text-slate-500 mt-1">
            Test how dental teams dynamically balance surgical chairs and eliminate no-shows via automated interactive WhatsApp messaging.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600 bg-slate-50 border border-slate-200 px-4 py-2 rounded-full font-mono shrink-0">
          <ShieldCheck className="w-4 h-4 text-teal-600" />
          <span>Meta Cloud API Verified</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Multi-Chair Grid */}
        <div className="lg:col-span-7 space-y-4">
          <label className="text-xs sm:text-sm font-bold text-slate-700 uppercase font-mono tracking-wider block">
            Live Operatory Chair Status
          </label>
          <div className="space-y-3">
            {chairs.map((chair) => (
              <div
                key={chair.id}
                onClick={() => setActiveChair(chair.id)}
                className={`p-5 rounded-2xl border-2 cursor-pointer transition-all ${
                  activeChair === chair.id
                    ? `${chair.color} shadow-md`
                    : "border-slate-200 bg-slate-50 hover:border-slate-300"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="font-bold text-base sm:text-lg text-slate-900">{chair.name}</div>
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-white border border-slate-200 text-slate-700">
                    {chair.status}
                  </span>
                </div>
                <div className="text-xs sm:text-sm text-slate-600 mt-2 font-mono flex items-center justify-between">
                  <span>Assigned: {chair.doctor}</span>
                  <span className="font-semibold text-slate-900">{chair.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: WhatsApp Interactive Confirmation */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-6 rounded-[24px] bg-slate-50 border border-slate-200 space-y-4">
            <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-slate-900">
              <span className="font-mono flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                Two-Way WhatsApp Protocol
              </span>
              <span className="text-emerald-700 text-xs font-mono">Live Sync</span>
            </div>

            {/* Chat preview card */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200 text-xs sm:text-sm space-y-2 shadow-sm">
              <div className="text-xs text-slate-400 font-mono">Simulated WhatsApp Notification</div>
              <p className="text-slate-800 leading-relaxed font-medium">
                Hello Ananya! 👋 This is a reminder for your Dental Aligner Review today at 4:00 PM with Dr. Kaur at Thind Dental Clinic.
              </p>

              <div className="pt-2 flex flex-col gap-2">
                <button
                  disabled={patientConfirmed}
                  onClick={handleSendReminder}
                  className={`w-full py-2.5 px-3 rounded-xl text-xs font-bold font-mono transition-all border ${
                    patientConfirmed
                      ? "bg-emerald-50 text-emerald-800 border-emerald-300"
                      : "bg-teal-600 hover:bg-teal-700 text-white border-teal-600"
                  }`}
                >
                  {patientConfirmed ? "✓ Confirmed: Attendance Logged" : reminderSent ? "Patient clicked 'I am Coming!'" : "Simulate 2-Way Patient Confirm"}
                </button>
              </div>
            </div>

            {patientConfirmed && (
              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs sm:text-sm text-emerald-800 font-mono flex items-center gap-2 animate-in fade-in">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Operatory 2 slot marked 'Confirmed — Patient on way'</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
