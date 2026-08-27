"use client";

import React, { useState } from "react";
import { X, CheckCircle, Send, ShieldCheck, ArrowRight, Terminal } from "lucide-react";
import { IndustryVertical } from "@/data/verticals";

interface DiscoveryModalProps {
  isOpen: boolean;
  onClose: () => void;
  vertical?: IndustryVertical;
}

export function DiscoveryModal({ isOpen, onClose, vertical }: DiscoveryModalProps) {
  const [name, setName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [selectedModules, setSelectedModules] = useState<string[]>([]);
  const [timeline, setTimeline] = useState("Within Next 14-30 Days");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const toggleModule = (mod: string) => {
    setSelectedModules((prev) =>
      prev.includes(mod) ? prev.filter((m) => m !== mod) : [...prev, mod]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          companyName,
          phone,
          email,
          industry: vertical?.name || "General Engineering",
          selectedModules,
          timeline,
          timestamp: new Date().toISOString(),
        }),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto">
              <CheckCircle className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 font-display">
              Discovery Call Requested!
            </h3>
            <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
              Thank you, <span className="font-semibold text-slate-900">{name}</span>. A senior engineer from <span className="text-indigo-600 font-semibold">Prograstic</span> will review your workflow requirements and reach out via WhatsApp/email within 24 hours.
            </p>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 font-mono text-left max-w-md mx-auto space-y-1">
              <div>• Industry: {vertical?.name || "Custom Software"}</div>
              <div>• Contact: {phone} | {email}</div>
              <div>• Target Timeline: {timeline}</div>
            </div>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-4 px-6 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs transition-colors"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-mono font-medium">
                <Terminal className="w-3.5 h-3.5" />
                DIRECT-TO-BUILDER DISCOVERY
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
                Schedule a 15-Minute Engineering Call
              </h3>
              <p className="text-xs text-slate-500">
                No account managers or sales pitches. Speak directly with the software engineer who will architect and build your platform.
              </p>
            </div>

            {/* Modules Needed */}
            {vertical?.suggestedModules && (
              <div>
                <label className="text-xs font-bold text-slate-700 uppercase font-mono tracking-wider block mb-2">
                  What operational loops do you need to solve?
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {vertical.suggestedModules.map((mod) => {
                    const isChecked = selectedModules.includes(mod);
                    return (
                      <button
                        key={mod}
                        type="button"
                        onClick={() => toggleModule(mod)}
                        className={`px-3 py-1.5 rounded-full text-xs border transition-all ${
                          isChecked
                            ? "bg-slate-900 text-white border-slate-900 font-medium"
                            : "bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300"
                        }`}
                      >
                        {isChecked ? "✓ " : "+ "}
                        {mod}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">Your Name *</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Dr. Rajesh / Amit Kumar"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">Clinic / Hospital / Company Name *</label>
                <input
                  type="text"
                  required
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="e.g. Apex Health Center"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">WhatsApp / Phone Number *</label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98765 43210"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500 font-mono"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">Email Address *</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500"
                />
              </div>
            </div>

            {/* Target Timeline */}
            <div>
              <label className="text-xs font-bold text-slate-700 uppercase font-mono tracking-wider block mb-1.5">
                Target Launch Timeline
              </label>
              <div className="grid grid-cols-3 gap-2">
                {["Next 14-30 Days", "Within 60 Days", "Exploring Feasibility"].map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTimeline(t)}
                    className={`py-2 px-1 text-center text-xs rounded-xl border transition-all ${
                      timeline === t
                        ? "bg-slate-900 text-white border-slate-900 font-semibold"
                        : "bg-slate-50 text-slate-600 border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Submit CTA */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 px-6 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg shadow-slate-900/10 disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
                <span>{loading ? "Scheduling..." : "Submit & Schedule Call"}</span>
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 mt-2.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Zero sales spam • 100% confidential engineering assessment</span>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
