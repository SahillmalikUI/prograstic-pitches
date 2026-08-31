"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BevelHospitalHero } from "@/components/hospitals/BevelHospitalHero";
import { BevelPillarsSection } from "@/components/hospitals/BevelPillarsSection";
import { BevelIntelligenceCard } from "@/components/hospitals/BevelIntelligenceCard";
import { BevelInteractiveDemoSection } from "@/components/hospitals/BevelInteractiveDemoSection";
import { BevelComparisonTable } from "@/components/hospitals/BevelComparisonTable";
import { ProcessTimeline } from "@/components/common/ProcessTimeline";
import { BevelCtaSection } from "@/components/hospitals/BevelCtaSection";
import { DiscoveryModal } from "@/components/common/DiscoveryModal";
import { VERTICALS } from "@/data/verticals";

export default function HospitalsPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const vertical = VERTICALS.hospitals;

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col selection:bg-slate-900 selection:text-white">
      <Navbar vertical={vertical} onOpenScopeModal={() => setModalOpen(true)} />

      <main className="flex-1 space-y-16 sm:space-y-24">
        {/* Bevel-Style Light Sky Hero with iPhone & Watch */}
        <BevelHospitalHero vertical={vertical} onOpenScopeModal={() => setModalOpen(true)} />

        {/* The 3 Core Pillars (Flow, Wards, Care - Bevel Screenshot 3) */}
        <BevelPillarsSection />

        {/* Bevel Intelligence Section (Screenshots 4 & 5) */}
        <BevelIntelligenceCard />

        {/* Live Interactive Hospital Workflow Simulator */}
        <BevelInteractiveDemoSection />

        {/* Comparison Table: Prograstic vs Legacy HMS */}
        <BevelComparisonTable />

        {/* 14-Day Sprint Timeline */}
        <ProcessTimeline onOpenScopeModal={() => setModalOpen(true)} />

        {/* Bottom Scope CTA Banner */}
        <BevelCtaSection onOpenScopeModal={() => setModalOpen(true)} />
      </main>

      <Footer vertical={vertical} onOpenScopeModal={() => setModalOpen(true)} />
      <DiscoveryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} vertical={vertical} />
    </div>
  );
}
