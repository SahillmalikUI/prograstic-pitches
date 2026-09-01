"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { EducationHeroSection } from "@/components/education/EducationHeroSection";
import { EducationStickyScrollytellingSection } from "@/components/education/EducationStickyScrollytellingSection";
import { EducationStorySection } from "@/components/education/EducationStorySection";
import { EducationCapabilitiesSection } from "@/components/education/EducationCapabilitiesSection";
import { EducationInteractiveDemoSection } from "@/components/education/EducationInteractiveDemoSection";
import { EducationComparisonTable } from "@/components/education/EducationComparisonTable";
import { ProcessTimeline } from "@/components/common/ProcessTimeline";
import { EducationCtaSection } from "@/components/education/EducationCtaSection";
import { DiscoveryModal } from "@/components/common/DiscoveryModal";
import { VERTICALS } from "@/data/verticals";

export default function EducationPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const vertical = VERTICALS.education;

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col selection:bg-slate-950 selection:text-white">
      {/* Top Silk Scroll Progress Indicator */}
      <ScrollProgress colorFrom="#D97706" colorTo="#F59E0B" />

      <Navbar vertical={vertical} onOpenScopeModal={() => setModalOpen(true)} />

      <main className="flex-1 space-y-16 sm:space-y-24">
        {/* 1. Giant Brutalist Hero Section with Daylight University Campus Visual */}
        <EducationHeroSection vertical={vertical} onOpenScopeModal={() => setModalOpen(true)} />

        {/* 2. Apple-Style 3D Sticky Scrollytelling Showcase Engine */}
        <EducationStickyScrollytellingSection />

        {/* 3. Admissions Bottleneck & Real Student Pipeline Story */}
        <EducationStorySection />

        {/* 4. Agency Capabilities Grid (4 Modules) */}
        <EducationCapabilitiesSection />

        {/* 5. Live Interactive 3D Flipping Notebook Simulator */}
        <EducationInteractiveDemoSection />

        {/* 6. Admissions Comparison Matrix: Prograstic vs Generic CRM */}
        <EducationComparisonTable />

        {/* 7. 14-Day Rapid Deployment Roadmap */}
        <ProcessTimeline onOpenScopeModal={() => setModalOpen(true)} />

        {/* 8. Bottom Education Discovery CTA Banner */}
        <EducationCtaSection onOpenScopeModal={() => setModalOpen(true)} />
      </main>

      <Footer vertical={vertical} onOpenScopeModal={() => setModalOpen(true)} />
      <DiscoveryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} vertical={vertical} />
    </div>
  );
}
