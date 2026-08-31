"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { IndustrialPlantHero } from "@/components/manufacturing/IndustrialPlantHero";
import { IndustrialMissingLoopSection } from "@/components/manufacturing/IndustrialMissingLoopSection";
import { IndustrialCapabilitiesSection } from "@/components/manufacturing/IndustrialCapabilitiesSection";
import { StudioVsOthers } from "@/components/common/StudioVsOthers";
import { ProcessTimeline } from "@/components/common/ProcessTimeline";
import { DiscoveryModal } from "@/components/common/DiscoveryModal";
import { ManufacturingWorkflowDemo } from "@/components/widgets/ManufacturingWorkflowDemo";
import { VERTICALS } from "@/data/verticals";

export default function ManufacturingPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const vertical = VERTICALS.manufacturing;

  return (
    <div className="min-h-screen bg-[#0F1117] text-white flex flex-col selection:bg-[#FF5500] selection:text-white">
      <Navbar vertical={vertical} onOpenScopeModal={() => setModalOpen(true)} />

      <main className="flex-1 space-y-20">
        <IndustrialPlantHero vertical={vertical} onOpenScopeModal={() => setModalOpen(true)}>
          <ManufacturingWorkflowDemo />
        </IndustrialPlantHero>

        <IndustrialMissingLoopSection vertical={vertical} />
        <IndustrialCapabilitiesSection vertical={vertical} onOpenScopeModal={() => setModalOpen(true)} />
        <StudioVsOthers />
        <ProcessTimeline onOpenScopeModal={() => setModalOpen(true)} />
      </main>

      <Footer vertical={vertical} onOpenScopeModal={() => setModalOpen(true)} />
      <DiscoveryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} vertical={vertical} />
    </div>
  );
}
