"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { FertilityHeroSection } from "@/components/fertility/FertilityHeroSection";
import { FertilityStickyScrollytellingSection } from "@/components/fertility/FertilityStickyScrollytellingSection";
import { FertilityStorySection } from "@/components/fertility/FertilityStorySection";
import { FertilityCapabilitiesSection } from "@/components/fertility/FertilityCapabilitiesSection";
import { FertilityInteractiveDemoSection } from "@/components/fertility/FertilityInteractiveDemoSection";
import { FertilityComparisonTable } from "@/components/fertility/FertilityComparisonTable";
import { ProcessTimeline } from "@/components/common/ProcessTimeline";
import { FertilityCtaSection } from "@/components/fertility/FertilityCtaSection";
import { DiscoveryModal } from "@/components/common/DiscoveryModal";
import { VERTICALS } from "@/data/verticals";

export default function FertilityPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const vertical = VERTICALS.fertility;

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col selection:bg-slate-950 selection:text-white">
      {/* Top Silk Scroll Progress Indicator */}
      <ScrollProgress colorFrom="#E11D48" colorTo="#FB7185" />

      <Navbar vertical={vertical} onOpenScopeModal={() => setModalOpen(true)} />

      <main className="flex-1 space-y-16 sm:space-y-24">
        {/* 1. Giant Brutalist Hero Section with Daylight IVF Embryology Lab */}
        <FertilityHeroSection vertical={vertical} onOpenScopeModal={() => setModalOpen(true)} />

        {/* 2. Apple-Style 3D Sticky Scrollytelling Showcase */}
        <FertilityStickyScrollytellingSection />

        {/* 3. Embryology Bottleneck & Real Cryo Lab Photography Story */}
        <FertilityStorySection />

        {/* 4. IVF Clinical Capabilities Grid (4 Modules) */}
        <FertilityCapabilitiesSection />

        {/* 5. Live Interactive Embryo & Cryo Tank Simulator */}
        <FertilityInteractiveDemoSection />

        {/* 6. Clinical Comparison Matrix: Prograstic vs Legacy HMS */}
        <FertilityComparisonTable />

        {/* 7. 14-Day Rapid Deployment Roadmap */}
        <ProcessTimeline onOpenScopeModal={() => setModalOpen(true)} />

        {/* 8. Bottom IVF Discovery CTA Banner */}
        <FertilityCtaSection onOpenScopeModal={() => setModalOpen(true)} />
      </main>

      <Footer vertical={vertical} onOpenScopeModal={() => setModalOpen(true)} />
      <DiscoveryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} vertical={vertical} />
    </div>
  );
}
