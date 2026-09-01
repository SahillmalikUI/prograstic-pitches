"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { BevelHospitalHero } from "@/components/hospitals/BevelHospitalHero";
import { BevelStickyScrollytellingSection } from "@/components/hospitals/BevelStickyScrollytellingSection";
import { BevelPillarsSection } from "@/components/hospitals/BevelPillarsSection";
import { BevelHealthRecordsSection } from "@/components/hospitals/BevelHealthRecordsSection";
import { BevelIntelligenceCard } from "@/components/hospitals/BevelIntelligenceCard";
import { BevelFeatureSwitcherSection } from "@/components/hospitals/BevelFeatureSwitcherSection";
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
    <div className="min-h-screen bg-white text-slate-900 flex flex-col selection:bg-slate-950 selection:text-white">
      {/* Top Silk Scroll Progress Indicator */}
      <ScrollProgress colorFrom="#2563EB" colorTo="#06B6D4" />

      <Navbar vertical={vertical} onOpenScopeModal={() => setModalOpen(true)} />

      <main className="flex-1 space-y-16 sm:space-y-24">
        {/* 1. Bevel-Style Light Sky Hero with iPhone, Smart Watch & 3D Tilt */}
        <BevelHospitalHero vertical={vertical} onOpenScopeModal={() => setModalOpen(true)} />

        {/* 2. Apple-Style 3D Sticky Scrollytelling Showcase Engine */}
        <BevelStickyScrollytellingSection />

        {/* 3. The 3 Core Pillars: Flow, Wards, Care with Animated Radial Gauges */}
        <BevelPillarsSection />

        {/* 4. Connect Your Hospital Health Records with 3D Tilt Card */}
        <BevelHealthRecordsSection />

        {/* 5. Go Deeper With Clinical Intelligence & AI Thought Engine */}
        <BevelIntelligenceCard />

        {/* 6. And That’s Not All - Feature Selector Stack with AnimatePresence */}
        <BevelFeatureSwitcherSection />

        {/* 7. Live Interactive Hospital OPD & EMR Simulator */}
        <BevelInteractiveDemoSection />

        {/* 8. Comparison Table: Prograstic vs Legacy HMS */}
        <BevelComparisonTable />

        {/* 9. 14-Day Delivery Sprint Timeline */}
        <ProcessTimeline onOpenScopeModal={() => setModalOpen(true)} />

        {/* 10. Bottom Scope Discovery CTA Banner */}
        <BevelCtaSection onOpenScopeModal={() => setModalOpen(true)} />
      </main>

      <Footer vertical={vertical} onOpenScopeModal={() => setModalOpen(true)} />
      <DiscoveryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} vertical={vertical} />
    </div>
  );
}
