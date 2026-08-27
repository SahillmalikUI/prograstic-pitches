"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CleanHero } from "@/components/common/CleanHero";
import { MissingLoopSection } from "@/components/common/MissingLoopSection";
import { CapabilitiesSection } from "@/components/common/CapabilitiesSection";
import { StudioVsOthers } from "@/components/common/StudioVsOthers";
import { ProcessTimeline } from "@/components/common/ProcessTimeline";
import { DiscoveryModal } from "@/components/common/DiscoveryModal";
import { FertilityWorkflowDemo } from "@/components/widgets/FertilityWorkflowDemo";
import { VERTICALS } from "@/data/verticals";

export default function FertilityPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const vertical = VERTICALS.fertility;

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col selection:bg-slate-900 selection:text-white">
      <Navbar vertical={vertical} onOpenScopeModal={() => setModalOpen(true)} />

      <main className="flex-1 space-y-16">
        <CleanHero vertical={vertical} onOpenScopeModal={() => setModalOpen(true)} />

        {/* Live Interactive Workflow Preview */}
        <section className="py-8 px-4 sm:px-6 max-w-6xl mx-auto w-full">
          <FertilityWorkflowDemo />
        </section>

        <MissingLoopSection vertical={vertical} />
        <CapabilitiesSection vertical={vertical} onOpenScopeModal={() => setModalOpen(true)} />
        <StudioVsOthers />
        <ProcessTimeline onOpenScopeModal={() => setModalOpen(true)} />
      </main>

      <Footer vertical={vertical} onOpenScopeModal={() => setModalOpen(true)} />
      <DiscoveryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} vertical={vertical} />
    </div>
  );
}
