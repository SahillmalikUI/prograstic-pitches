"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Terminal, Menu, X, Sparkles } from "lucide-react";
import { IndustryVertical } from "@/data/verticals";

interface NavbarProps {
  vertical?: IndustryVertical;
  onOpenScopeModal: () => void;
}

export function Navbar({ vertical, onOpenScopeModal }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-3 z-50 w-full px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="rounded-full bg-white/90 backdrop-blur-xl border border-slate-200 shadow-lg shadow-slate-900/5 px-4 sm:px-6 h-14 flex items-center justify-between transition-all">
        {/* Prograstic Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-xl bg-slate-900 flex items-center justify-center text-white font-black text-xs group-hover:scale-105 transition-transform">
            P
          </div>
          <div className="flex flex-col">
            <span className="font-display font-black text-sm tracking-tight text-slate-900 leading-none">
              PROGRASTIC
            </span>
            <span className="text-[9px] uppercase tracking-[0.2em] font-mono text-slate-500 mt-0.5 leading-none">
              {vertical ? vertical.name.split(" ")[0] : "Engineering Studio"}
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a
            href="#missing-loop"
            className="text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
          >
            The Missing Loop
          </a>

          <a
            href="#capabilities"
            className="text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
          >
            What We Build
          </a>

          <a
            href="#stack"
            className="text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
          >
            Tech Stack
          </a>

          <a
            href="#process"
            className="text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
          >
            14-Day Delivery
          </a>
        </nav>

        {/* Right CTA */}
        <div className="flex items-center gap-2">
          <button
            onClick={onOpenScopeModal}
            className="px-4 sm:px-5 py-2 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs transition-all hover:scale-105 shadow-md shadow-slate-900/10 flex items-center gap-1.5"
          >
            <span>Talk to the Builders</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-full hover:bg-slate-100 text-slate-600"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 p-4 rounded-2xl bg-white border border-slate-200 shadow-xl space-y-3 animate-in slide-in-from-top-2">
          <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
            Page Navigation
          </div>
          <div className="flex flex-col gap-2 text-xs font-semibold text-slate-700">
            <a href="#missing-loop" onClick={() => setMobileMenuOpen(false)}>
              • The Missing Loop
            </a>
            <a href="#capabilities" onClick={() => setMobileMenuOpen(false)}>
              • What We Build
            </a>
            <a href="#stack" onClick={() => setMobileMenuOpen(false)}>
              • Tech Stack
            </a>
            <a href="#process" onClick={() => setMobileMenuOpen(false)}>
              • 14-Day Delivery
            </a>
          </div>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenScopeModal();
            }}
            className="w-full py-2.5 rounded-full bg-slate-900 text-white text-xs font-bold"
          >
            Schedule 15-Min Scope Call
          </button>
        </div>
      )}
    </header>
  );
}
