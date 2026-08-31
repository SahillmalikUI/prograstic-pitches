"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Menu, X, Layers, Sparkles } from "lucide-react";
import { IndustryVertical } from "@/data/verticals";

interface NavbarProps {
  vertical?: IndustryVertical;
  onOpenScopeModal: () => void;
}

export function Navbar({ vertical, onOpenScopeModal }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isAesthetics = vertical?.slug === "aesthetics";
  const isDarkVertical = vertical?.slug === "manufacturing" || vertical?.slug === "neurology";

  return (
    <header className="sticky top-4 z-50 px-4 sm:px-6 max-w-7xl mx-auto w-full transition-all">
      <div
        className={`rounded-full px-5 py-3 flex items-center justify-between shadow-xl transition-all ${
          isAesthetics
            ? "bg-[#FAF7F2]/90 border border-[#EAE3D9] backdrop-blur-md text-[#1C1917] shadow-[#C8A97E]/10"
            : isDarkVertical
            ? "bg-[#0B0F19]/90 border border-slate-800 backdrop-blur-md text-white shadow-black/40"
            : "bg-white/90 border border-slate-200/90 backdrop-blur-md text-slate-900 shadow-slate-900/5"
        }`}
      >
        {/* Left: Brand Identity */}
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="flex items-center gap-2 font-black text-sm tracking-tight transition-opacity hover:opacity-80"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-slate-900 shadow-[0_0_8px_rgba(0,0,0,0.3)]" />
            <span className="font-display uppercase tracking-widest text-xs">PROGRASTIC</span>
          </Link>

          {vertical && (
            <div className="hidden sm:flex items-center gap-1.5 font-mono text-xs text-slate-400">
              <span>/</span>
              <span
                className="font-bold text-xs px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-800 border border-slate-200"
              >
                {vertical.name}
              </span>
            </div>
          )}
        </div>

        {/* Center: Dynamic Navigation */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-semibold uppercase tracking-wider">
          {vertical ? (
            <>
              <a
                href="#missing-loop"
                className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                The Missing Loop
              </a>
              <a
                href="#capabilities"
                className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                Capabilities
              </a>
              <Link
                href="/"
                className="text-slate-600 hover:text-slate-900 transition-colors flex items-center gap-1"
              >
                <Layers className="w-3.5 h-3.5" />
                <span>All Verticals</span>
              </Link>
            </>
          ) : (
            <>
              <a
                href="#industry-directory"
                className="text-slate-600 hover:text-slate-900 transition-colors flex items-center gap-1"
              >
                <Layers className="w-3.5 h-3.5" />
                <span>All Verticals</span>
              </a>
              <a
                href="#capabilities"
                className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                Live Prototypes
              </a>
              <Link
                href="/hospitals"
                className="text-blue-600 font-bold hover:text-blue-700 transition-colors"
              >
                Hospital OS ➔
              </Link>
            </>
          )}
        </nav>

        {/* Right: Action CTA */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={onOpenScopeModal}
            className="px-5 py-2 rounded-full font-bold text-xs uppercase tracking-wider transition-all hover:scale-105 shadow-md flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white"
          >
            <span>Talk to Builders</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full hover:bg-slate-500/10 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 p-5 rounded-3xl border border-slate-200 bg-white shadow-2xl space-y-4 animate-in fade-in slide-in-from-top-2 text-slate-900">
          <div className="flex flex-col space-y-3 font-semibold text-sm">
            {vertical ? (
              <>
                <a
                  href="#missing-loop"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 border-b border-slate-100"
                >
                  The Missing Loop
                </a>
                <a
                  href="#capabilities"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 border-b border-slate-100"
                >
                  Capabilities
                </a>
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 flex items-center justify-between"
                >
                  <span>All Industry Verticals</span>
                  <Layers className="w-4 h-4" />
                </Link>
              </>
            ) : (
              <>
                <a
                  href="#industry-directory"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 border-b border-slate-100"
                >
                  Browse Industry Verticals
                </a>
                <a
                  href="#capabilities"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 border-b border-slate-100"
                >
                  Live Prototypes
                </a>
                <Link
                  href="/hospitals"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 flex items-center justify-between text-blue-600 font-bold"
                >
                  <span>Featured: Hospital OS</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
