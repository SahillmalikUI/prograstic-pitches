"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { CfiManufacturingHero } from "@/components/manufacturing/CfiManufacturingHero";
import { CfiStickyScrollytellingSection } from "@/components/manufacturing/CfiStickyScrollytellingSection";
import { CfiPlantStorySection } from "@/components/manufacturing/CfiPlantStorySection";
import { CfiPlantCapabilitiesSection } from "@/components/manufacturing/CfiPlantCapabilitiesSection";
import { CfiInteractiveSimulatorSection } from "@/components/manufacturing/CfiInteractiveSimulatorSection";
import { CfiComparisonTable } from "@/components/manufacturing/CfiComparisonTable";
import { ProcessTimeline } from "@/components/common/ProcessTimeline";
import { CfiCtaSection } from "@/components/manufacturing/CfiCtaSection";
import { DiscoveryModal } from "@/components/common/DiscoveryModal";
import { VERTICALS } from "@/data/verticals";

export default function ManufacturingPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const vertical = VERTICALS.manufacturing;

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col selection:bg-slate-950 selection:text-white">
      {/* Top Silk Scroll Progress Indicator */}
      <ScrollProgress colorFrom="#EA580C" colorTo="#F97316" />

      <Navbar vertical={vertical} onOpenScopeModal={() => setModalOpen(true)} />

      <main className="flex-1 space-y-16 sm:space-y-24">
        {/* 1. Giant Brutalist Hero Section with Daylight Smart Factory Floor */}
        <CfiManufacturingHero vertical={vertical} onOpenScopeModal={() => setModalOpen(true)} />

        {/* 2. Apple-Style 3D Sticky Scrollytelling Showcase */}
        <CfiStickyScrollytellingSection />

        {/* 3. Shopfloor Bottleneck & Real Industrial Photography Story */}
        <CfiPlantStorySection />

        {/* 4. Plant Capabilities Grid (4 Project Cards) */}
        <CfiPlantCapabilitiesSection />

        {/* 5. Live Interactive Shopfloor Simulator */}
        <CfiInteractiveSimulatorSection />

        {/* 6. Plant Comparison Matrix: Prograstic vs Legacy MES */}
        <CfiComparisonTable />

        {/* 7. 14-Day Rapid Deployment Roadmap */}
        <ProcessTimeline onOpenScopeModal={() => setModalOpen(true)} />

        {/* 8. Bottom Plant Discovery CTA Banner */}
        <CfiCtaSection onOpenScopeModal={() => setModalOpen(true)} />
      </main>

      <Footer vertical={vertical} onOpenScopeModal={() => setModalOpen(true)} />
      <DiscoveryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} vertical={vertical} />
    </div>
  );
}
