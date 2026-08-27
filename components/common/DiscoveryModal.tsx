"use client";

import React, { useState } from "react";
import { X, Calendar, CheckCircle2, ArrowRight, ShieldCheck, Terminal } from "lucide-react";
import { IndustryVertical } from "@/data/verticals";

interface DiscoveryModalProps {
  isOpen: boolean;
  onClose: () => void;
  vertical: IndustryVertical;
}

export function DiscoveryModal({ isOpen, onClose, vertical }: DiscoveryModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    orgName: "",
    email: "",
    phone: "",
    selectedModules: [] as string[],
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  if (!isOpen) return null;

  const toggleModule = (mod: string) => {
    setFormData((prev) => ({
      ...prev,
      selectedModules: prev.selectedModules.includes(mod)
        ? prev.selectedModules.filter((m) => m !== mod)
        : [...prev.selectedModules, mod],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          company: formData.orgName,
          email: formData.email,
          phone: formData.phone,
          verticalId: vertical.id,
          verticalName: vertical.name,
          modules: formData.selectedModules,
          notes: formData.notes,
        }),
      });
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
      setSubmitted(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in">
      <div className="relative w-full max-w-2xl bg-white rounded-[32px] border border-slate-200 shadow-2xl p-6 sm:p-10 max-h-[90vh] overflow-y-auto space-y-6">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-10 space-y-5 animate-in zoom-in-95">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
                Discovery Session Confirmed
              </h3>
              <p className="text-base text-slate-600 max-w-md mx-auto">
                Our lead systems engineer will reach out to <span className="font-semibold text-slate-900">{formData.email}</span> within 4 hours to review your architecture scope.
              </p>
            </div>
            <button
              onClick={onClose}
              className="px-8 py-3.5 rounded-full bg-slate-900 text-white font-bold text-sm uppercase tracking-wider hover:bg-slate-800"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-xs font-mono text-slate-700">
                <Terminal className="w-3.5 h-3.5 text-indigo-600" />
                <span>15-Minute Technical Discovery</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
                Talk to the Software Builders
              </h3>
              <p className="text-sm sm:text-base text-slate-600">
                Tell us about your organization and the operational bottlenecks you need custom software to solve.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-slate-700 uppercase font-mono block mb-1.5">
                  Your Full Name *
                </label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Dr. Harpreet Singh"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 uppercase font-mono block mb-1.5">
                  Organization / Clinic Name *
                </label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Landmark Hospital"
                  value={formData.orgName}
                  onChange={(e) => setFormData({ ...formData, orgName: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 uppercase font-mono block mb-1.5">
                  Work Email *
                </label>
                <input
                  required
                  type="email"
                  placeholder="director@landmarkhospital.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 uppercase font-mono block mb-1.5">
                  Phone / WhatsApp *
                </label>
                <input
                  required
                  type="tel"
                  placeholder="+91 98140 00000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900"
                />
              </div>
            </div>

            {/* Modules of Interest */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 uppercase font-mono block">
                Modules You Want To Scope:
              </label>
              <div className="flex flex-wrap gap-2">
                {vertical.suggestedModules.map((mod) => {
                  const isSelected = formData.selectedModules.includes(mod);
                  return (
                    <button
                      key={mod}
                      type="button"
                      onClick={() => toggleModule(mod)}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-semibold font-mono border transition-all ${
                        isSelected
                          ? "bg-slate-900 text-white border-slate-900"
                          : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                      }`}
                    >
                      {isSelected ? `✓ ${mod}` : `+ ${mod}`}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={submitting}
              className="w-full py-4 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm uppercase tracking-wider shadow-xl transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
            >
              <span>{submitting ? "Booking..." : "Schedule Engineering Scope Call"}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
