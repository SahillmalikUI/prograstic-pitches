"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BevelHospitalHero } from "@/components/hospitals/BevelHospitalHero";
import { BevelIntelligenceCard } from "@/components/hospitals/BevelIntelligenceCard";
import { BevelPillarsSection } from "@/components/hospitals/BevelPillarsSection";
import { BevelMissingLoopSection } from "@/components/hospitals/BevelMissingLoopSection";
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
    <div className="min-h-screen bg-[#07080A] text-white flex flex-col selection:bg-[#00F0FF] selection:text-black">
      <Navbar vertical={vertical} onOpenScopeModal={() => setModalOpen(true)} />

      <main className="flex-1 space-y-16 sm:space-y-24">
        {/* Bevel-Style Hero with Dual-Device Showcase */}
        <BevelHospitalHero vertical={vertical} onOpenScopeModal={() => setModalOpen(true)} />

        {/* Bevel-Style AI Clinical Intelligence Card */}
        <BevelIntelligenceCard />

        {/* The 3 Core Pillars (Flow, Care, Speed) */}
        <BevelPillarsSection />

        {/* Missing Loop Bottleneck Analysis */}
        <BevelMissingLoopSection vertical={vertical} />

        {/* Live Interactive Hospital Workflow Simulator */}
        <BevelInteractiveDemoSection />

        {/* Bevel Comparison Table: Prograstic vs Legacy HMS */}
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
