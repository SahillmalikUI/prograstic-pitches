"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { DiscoveryModal } from "@/components/common/DiscoveryModal";
import { StudioVsOthers } from "@/components/common/StudioVsOthers";
import { ProcessTimeline } from "@/components/common/ProcessTimeline";
import { HospitalWorkflowDemo } from "@/components/widgets/HospitalWorkflowDemo";
import { DentalWorkflowDemo } from "@/components/widgets/DentalWorkflowDemo";
import { AestheticWorkflowDemo } from "@/components/widgets/AestheticWorkflowDemo";
import { ManufacturingWorkflowDemo } from "@/components/widgets/ManufacturingWorkflowDemo";
import { ClinicsWorkflowDemo } from "@/components/widgets/ClinicsWorkflowDemo";
import { EducationWorkflowDemo } from "@/components/widgets/EducationWorkflowDemo";
import { NeuroWorkflowDemo } from "@/components/widgets/NeuroWorkflowDemo";
import { FertilityWorkflowDemo } from "@/components/widgets/FertilityWorkflowDemo";
import { VERTICALS } from "@/data/verticals";
import { ArrowRight, Terminal, CheckCircle2, ShieldCheck, Zap, Layers, Sparkles } from "lucide-react";

export default function HubPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeVerticalForModal, setActiveVerticalForModal] = useState<string>("hospitals");
  const [activeDemo, setActiveDemo] = useState<string>("hospitals");

  const handleOpenModal = (slug: string = "hospitals") => {
    setActiveVerticalForModal(slug);
    setModalOpen(true);
  };

  const renderActiveWorkflow = () => {
    switch (activeDemo) {
      case "hospitals":
        return <HospitalWorkflowDemo />;
      case "dental":
        return <DentalWorkflowDemo />;
      case "aesthetics":
        return <AestheticWorkflowDemo />;
      case "manufacturing":
        return <ManufacturingWorkflowDemo />;
      case "clinics":
        return <ClinicsWorkflowDemo />;
      case "education":
        return <EducationWorkflowDemo />;
      case "neurology":
        return <NeuroWorkflowDemo />;
      case "fertility":
        return <FertilityWorkflowDemo />;
      default:
        return <HospitalWorkflowDemo />;
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col selection:bg-slate-900 selection:text-white">
      <Navbar onOpenScopeModal={() => handleOpenModal("hospitals")} />

      <main className="flex-1 space-y-16">
        {/* Hub Master Hero */}
        <section className="relative pt-12 pb-16 px-4 sm:px-6 overflow-hidden bg-white hero-glow-indigo">
          <div className="absolute inset-0 bg-grid-prograstic opacity-70 pointer-events-none" />

          <div className="max-w-6xl mx-auto space-y-10 relative z-10">
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-[11px] font-mono font-medium text-slate-700 tracking-wider shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 animate-pulse" />
                <span>services.prograstic</span>
                <span className="text-slate-300">•</span>
                <span className="text-slate-500">Industry Pitch Hub</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight font-display leading-[1.06]">
                Software, built by the{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-blue-600 to-teal-600">
                  people who ship it.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                A small engineering-led software studio. No account managers, no handoffs between departments — the person who scopes your project is the person who builds it.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
                <button
                  onClick={() => handleOpenModal("hospitals")}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs uppercase tracking-wider transition-all hover:scale-105 shadow-lg shadow-slate-900/10 flex items-center justify-center gap-2"
                >
                  <span>Talk to the Engineering Team</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="#industry-directory"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs transition-colors flex items-center justify-center"
                >
                  <span>Browse Industry Verticals</span>
                </a>
              </div>
            </div>

            {/* Metric Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-slate-200">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                <div className="text-2xl sm:text-3xl font-extrabold text-indigo-600 font-display">8+</div>
                <div className="text-xs font-bold text-slate-900">Industry Verticals</div>
                <div className="text-[11px] text-slate-500">Customized operating engines</div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                <div className="text-2xl sm:text-3xl font-extrabold text-teal-600 font-display">1 Team</div>
                <div className="text-xs font-bold text-slate-900">Zero Middlemen</div>
                <div className="text-[11px] text-slate-500">Direct access to builders</div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                <div className="text-2xl sm:text-3xl font-extrabold text-blue-600 font-display">100%</div>
                <div className="text-xs font-bold text-slate-900">Code Ownership</div>
                <div className="text-[11px] text-slate-500">Zero monthly per-user SaaS tax</div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                <div className="text-2xl sm:text-3xl font-extrabold text-amber-600 font-display">14 Days</div>
                <div className="text-xs font-bold text-slate-900">Delivery Sprints</div>
                <div className="text-[11px] text-slate-500">Fast production turnaround</div>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Pitch Directory */}
        <section id="industry-directory" className="py-12 px-4 sm:px-6 max-w-6xl mx-auto space-y-10">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-mono font-medium tracking-wide">
              <Layers className="w-3.5 h-3.5 text-indigo-600" />
              INDUSTRY-SPECIFIC PITCH SITES
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 font-display">
              Bespoke Software For Your Exact Industry
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Select an industry below to view the dedicated pitch website solving operational bottlenecks in that vertical.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {Object.values(VERTICALS).map((v) => (
              <div
                key={v.id}
                className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 clean-card-hover flex flex-col justify-between space-y-5"
              >
                <div className="space-y-2.5">
                  <span
                    className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full"
                    style={{
                      backgroundColor: `${v.accentHex}12`,
                      color: v.accentHex,
                    }}
                  >
                    {v.industryTag}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 leading-snug">
                    {v.name}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {v.heroDescription}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
                  <Link
                    href={`/${v.slug}`}
                    className="text-xs font-bold text-slate-900 hover:text-indigo-600 flex items-center gap-1 transition-colors"
                  >
                    <span>View Dedicated Pitch</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <button
                    onClick={() => handleOpenModal(v.slug)}
                    className="text-[11px] text-slate-500 hover:text-slate-900 underline underline-offset-4"
                  >
                    Scope
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Live Interactive Workflow Suite */}
        <section className="py-16 px-4 sm:px-6 bg-slate-50 border-y border-slate-200">
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="text-center space-y-2 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-800 text-xs font-mono font-medium">
                <Zap className="w-3.5 h-3.5 text-emerald-600" />
                INTERACTIVE WORKFLOW PREVIEW
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
                Test Our Live Software Prototypes
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Switch between industries below to test live data entry pipelines, queue management, and automated alerts.
              </p>
            </div>

            {/* Switcher Pills */}
            <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              {Object.values(VERTICALS).map((v) => {
                const isActive = activeDemo === v.id;
                return (
                  <button
                    key={v.id}
                    onClick={() => setActiveDemo(v.id)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                      isActive
                        ? "bg-slate-900 text-white shadow-sm"
                        : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: v.accentHex }}
                    />
                    <span>{v.name.split("&")[0].trim()}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Workflow Component */}
            <div className="pt-2">{renderActiveWorkflow()}</div>
          </div>
        </section>

        {/* Process Timeline */}
        <ProcessTimeline onOpenScopeModal={() => handleOpenModal(activeDemo)} />

        {/* Studio Comparison */}
        <StudioVsOthers />
      </main>

      <Footer onOpenScopeModal={() => handleOpenModal(activeDemo)} />

      <DiscoveryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        vertical={VERTICALS[activeVerticalForModal] || VERTICALS.hospitals}
      />
    </div>
  );
}
