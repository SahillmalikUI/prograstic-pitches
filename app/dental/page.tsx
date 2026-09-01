"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { DentalHeroSection } from "@/components/dental/DentalHeroSection";
import { DentalStickyScrollytellingSection } from "@/components/dental/DentalStickyScrollytellingSection";
import { DentalStorySection } from "@/components/dental/DentalStorySection";
import { DentalCapabilitiesSection } from "@/components/dental/DentalCapabilitiesSection";
import { DentalInteractiveDemoSection } from "@/components/dental/DentalInteractiveDemoSection";
import { DentalComparisonTable } from "@/components/dental/DentalComparisonTable";
import { ProcessTimeline } from "@/components/common/ProcessTimeline";
import { DentalCtaSection } from "@/components/dental/DentalCtaSection";
import { DiscoveryModal } from "@/components/common/DiscoveryModal";
import { VERTICALS } from "@/data/verticals";

export default function DentalPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const vertical = VERTICALS.dental;

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col selection:bg-slate-950 selection:text-white">
      {/* Top Silk Scroll Progress Indicator */}
      <ScrollProgress colorFrom="#0D9488" colorTo="#06B6D4" />

      <Navbar vertical={vertical} onOpenScopeModal={() => setModalOpen(true)} />

      <main className="flex-1 space-y-16 sm:space-y-24">
        {/* 1. Giant Brutalist Hero Section with Daylight Dental Operatory */}
        <DentalHeroSection vertical={vertical} onOpenScopeModal={() => setModalOpen(true)} />

        {/* 2. Apple-Style 3D Sticky Scrollytelling Showcase */}
        <DentalStickyScrollytellingSection />

        {/* 3. Chairside Bottleneck & Real Dental Practice Story */}
        <DentalStorySection />

        {/* 4. Dental Clinical Capabilities Grid (4 Modules) */}
        <DentalCapabilitiesSection />

        {/* 5. Live Interactive 32-Tooth Odontogram Simulator */}
        <DentalInteractiveDemoSection />

        {/* 6. Clinical Comparison Matrix: Prograstic vs Legacy Dental Software */}
        <DentalComparisonTable />

        {/* 7. 14-Day Rapid Deployment Roadmap */}
        <ProcessTimeline onOpenScopeModal={() => setModalOpen(true)} />

        {/* 8. Bottom Dental Discovery CTA Banner */}
        <DentalCtaSection onOpenScopeModal={() => setModalOpen(true)} />
      </main>

      <Footer vertical={vertical} onOpenScopeModal={() => setModalOpen(true)} />
      <DiscoveryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} vertical={vertical} />
    </div>
  );
}
