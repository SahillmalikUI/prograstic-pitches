"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BevelHospitalHero } from "@/components/hospitals/BevelHospitalHero";
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
      <Navbar vertical={vertical} onOpenScopeModal={() => setModalOpen(true)} />

      <main className="flex-1 space-y-16 sm:space-y-28">
        {/* 1. Bevel-Style Light Sky Hero with iPhone, Smart Watch & Floating Badges (Screenshot 1) */}
        <BevelHospitalHero vertical={vertical} onOpenScopeModal={() => setModalOpen(true)} />

        {/* 2. The 3 Core Pillars: Flow, Wards, Care (Screenshot 3) */}
        <BevelPillarsSection />

        {/* 3. Connect Your Hospital Health Records (Screenshot 1 of newest batch) */}
        <BevelHealthRecordsSection />

        {/* 4. Go Deeper With Clinical Intelligence (Screenshots 4 & 5) */}
        <BevelIntelligenceCard />

        {/* 5. And That’s Not All - Feature Selector Stack (Screenshot 2 of newest batch) */}
        <BevelFeatureSwitcherSection />

        {/* 6. Live Interactive Hospital OPD & EMR Simulator */}
        <BevelInteractiveDemoSection />

        {/* 7. Comparison Table: Prograstic vs Legacy HMS */}
        <BevelComparisonTable />

        {/* 8. 14-Day Delivery Sprint Timeline */}
        <ProcessTimeline onOpenScopeModal={() => setModalOpen(true)} />

        {/* 9. Bottom Scope Discovery CTA Banner */}
        <BevelCtaSection onOpenScopeModal={() => setModalOpen(true)} />
      </main>

      <Footer vertical={vertical} onOpenScopeModal={() => setModalOpen(true)} />
      <DiscoveryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} vertical={vertical} />
    </div>
  );
}
