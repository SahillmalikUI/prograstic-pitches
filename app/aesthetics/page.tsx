"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LuxuryAestheticHero } from "@/components/aesthetics/LuxuryAestheticHero";
import { LuxuryMissingLoopSection } from "@/components/aesthetics/LuxuryMissingLoopSection";
import { LuxuryCapabilitiesSection } from "@/components/aesthetics/LuxuryCapabilitiesSection";
import { StudioVsOthers } from "@/components/common/StudioVsOthers";
import { ProcessTimeline } from "@/components/common/ProcessTimeline";
import { DiscoveryModal } from "@/components/common/DiscoveryModal";
import { FaceScrollAestheticDemo } from "@/components/widgets/FaceScrollAestheticDemo";
import { VERTICALS } from "@/data/verticals";

export default function AestheticsPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const vertical = VERTICALS.aesthetics;

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1C1917] flex flex-col selection:bg-[#1C1917] selection:text-[#FAF7F2]">
      <Navbar vertical={vertical} onOpenScopeModal={() => setModalOpen(true)} />

      <main className="flex-1 space-y-20">
        <LuxuryAestheticHero vertical={vertical} onOpenScopeModal={() => setModalOpen(true)}>
          <FaceScrollAestheticDemo />
        </LuxuryAestheticHero>

        <LuxuryMissingLoopSection vertical={vertical} />
        <LuxuryCapabilitiesSection vertical={vertical} onOpenScopeModal={() => setModalOpen(true)} />
        <StudioVsOthers />
        <ProcessTimeline onOpenScopeModal={() => setModalOpen(true)} />
      </main>

      <Footer vertical={vertical} onOpenScopeModal={() => setModalOpen(true)} />
      <DiscoveryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} vertical={vertical} />
    </div>
  );
}
