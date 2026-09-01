"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { LuxuryAestheticHero } from "@/components/aesthetics/LuxuryAestheticHero";
import { AestheticsStickyScrollytellingSection } from "@/components/aesthetics/AestheticsStickyScrollytellingSection";
import { AestheticsStorySection } from "@/components/aesthetics/AestheticsStorySection";
import { AestheticsCapabilitiesSection } from "@/components/aesthetics/AestheticsCapabilitiesSection";
import { AestheticsInteractiveDemoSection } from "@/components/aesthetics/AestheticsInteractiveDemoSection";
import { AestheticsComparisonTable } from "@/components/aesthetics/AestheticsComparisonTable";
import { ProcessTimeline } from "@/components/common/ProcessTimeline";
import { AestheticsCtaSection } from "@/components/aesthetics/AestheticsCtaSection";
import { DiscoveryModal } from "@/components/common/DiscoveryModal";
import { VERTICALS } from "@/data/verticals";

export default function AestheticsPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const vertical = VERTICALS.aesthetics;

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-slate-900 flex flex-col selection:bg-slate-950 selection:text-white">
      {/* Top Silk Scroll Progress Indicator */}
      <ScrollProgress colorFrom="#C8A97E" colorTo="#D97706" />

      <Navbar vertical={vertical} onOpenScopeModal={() => setModalOpen(true)} />

      <main className="flex-1 space-y-16 sm:space-y-24">
        {/* 1. Giant Brutalist Hero Section with Luxury MedSpa Editorial Visual */}
        <LuxuryAestheticHero vertical={vertical} onOpenScopeModal={() => setModalOpen(true)} />

        {/* 2. Apple-Style 3D Sticky Scrollytelling Showcase Engine */}
        <AestheticsStickyScrollytellingSection />

        {/* 3. Injector Bottleneck & Real MedSpa Story */}
        <AestheticsStorySection />

        {/* 4. MedSpa Capabilities Grid (4 Modules) */}
        <AestheticsCapabilitiesSection />

        {/* 5. Live Interactive 3D Facial Injection Mapper */}
        <AestheticsInteractiveDemoSection />

        {/* 6. Clinical Comparison Matrix: Prograstic vs Generic Salon App */}
        <AestheticsComparisonTable />

        {/* 7. 14-Day Rapid Deployment Roadmap */}
        <ProcessTimeline onOpenScopeModal={() => setModalOpen(true)} />

        {/* 8. Bottom MedSpa Discovery CTA Banner */}
        <AestheticsCtaSection onOpenScopeModal={() => setModalOpen(true)} />
      </main>

      <Footer vertical={vertical} onOpenScopeModal={() => setModalOpen(true)} />
      <DiscoveryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} vertical={vertical} />
    </div>
  );
}
