"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BevelHospitalHero } from "@/components/hospitals/BevelHospitalHero";
import { BevelMissingLoopSection } from "@/components/hospitals/BevelMissingLoopSection";
import { BevelCapabilitiesSection } from "@/components/hospitals/BevelCapabilitiesSection";
import { StudioVsOthers } from "@/components/common/StudioVsOthers";
import { ProcessTimeline } from "@/components/common/ProcessTimeline";
import { DiscoveryModal } from "@/components/common/DiscoveryModal";
import { HospitalWorkflowDemo } from "@/components/widgets/HospitalWorkflowDemo";
import { VERTICALS } from "@/data/verticals";

export default function HospitalsPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const vertical = VERTICALS.hospitals;

  return (
    <div className="min-h-screen bg-[#080C15] text-white flex flex-col selection:bg-[#00F0FF] selection:text-slate-950">
      <Navbar vertical={vertical} onOpenScopeModal={() => setModalOpen(true)} />

      <main className="flex-1 space-y-20">
        <BevelHospitalHero vertical={vertical} onOpenScopeModal={() => setModalOpen(true)}>
          <HospitalWorkflowDemo />
        </BevelHospitalHero>

        <BevelMissingLoopSection vertical={vertical} />
        <BevelCapabilitiesSection vertical={vertical} onOpenScopeModal={() => setModalOpen(true)} />
        <StudioVsOthers />
        <ProcessTimeline onOpenScopeModal={() => setModalOpen(true)} />
      </main>

      <Footer vertical={vertical} onOpenScopeModal={() => setModalOpen(true)} />
      <DiscoveryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} vertical={vertical} />
    </div>
  );
}
