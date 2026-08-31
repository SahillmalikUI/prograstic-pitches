"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { IndustryVertical } from "@/data/verticals";

interface FooterProps {
  vertical?: IndustryVertical;
  onOpenScopeModal?: () => void;
}

export function Footer({ vertical, onOpenScopeModal }: FooterProps) {
  return (
    <footer className="w-full bg-[#FAFBFD] py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Floating Prograstic Card with Signature Purple Taped Stickers */}
        <div className="relative rounded-[32px] sm:rounded-[40px] bg-white border border-slate-200/80 p-8 sm:p-14 shadow-xl shadow-slate-900/5">
          {/* Purple Tape Sticker Top Left */}
          <div className="absolute -top-3.5 left-8 sm:left-12 w-12 sm:w-16 h-7 sm:h-8 bg-[#8B5CF6] shadow-md transform -rotate-12 rounded-sm pointer-events-none opacity-90" />

          {/* Purple Tape Sticker Top Right */}
          <div className="absolute -top-3.5 right-8 sm:right-12 w-12 sm:w-16 h-7 sm:h-8 bg-[#8B5CF6] shadow-md transform rotate-12 rounded-sm pointer-events-none opacity-90" />

          <div className="space-y-12">
            {/* Top Brand Header */}
            <div className="space-y-4 max-w-2xl">
              <a
                href="https://www.prograstic.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 group"
              >
                {/* Prograstic Hexagon Logo Symbol */}
                <div className="w-8 h-8 rounded-lg bg-slate-950 flex items-center justify-center text-white font-black text-sm">
                  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <span className="text-2xl sm:text-3xl font-extrabold font-display tracking-tight text-slate-950">
                  Prograstic
                </span>
              </a>

              <p className="text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
                A builder community for India's startup ecosystem — founders, operators, and creators shipping together on Prograstic.
              </p>
            </div>

            {/* 3 Spacious Columns (ECOSYSTEM, BUILD, STORIES) */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-4 text-sm sm:text-base font-sans">
              {/* Column 1: ECOSYSTEM */}
              <div className="space-y-4">
                <div className="text-xs font-mono font-bold tracking-widest text-slate-400 uppercase">
                  ECOSYSTEM
                </div>
                <ul className="space-y-2.5 text-slate-600 font-medium">
                  <li>
                    <a href="https://www.prograstic.com" target="_blank" rel="noopener noreferrer" className="hover:text-slate-950 transition-colors">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="https://www.prograstic.com" target="_blank" rel="noopener noreferrer" className="hover:text-slate-950 transition-colors">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="https://www.prograstic.com" target="_blank" rel="noopener noreferrer" className="hover:text-slate-950 transition-colors">
                      Community
                    </a>
                  </li>
                  <li>
                    <a href="https://www.prograstic.com" target="_blank" rel="noopener noreferrer" className="hover:text-slate-950 transition-colors">
                      Startups
                    </a>
                  </li>
                </ul>
              </div>

              {/* Column 2: BUILD */}
              <div className="space-y-4">
                <div className="text-xs font-mono font-bold tracking-widest text-slate-400 uppercase">
                  BUILD
                </div>
                <ul className="space-y-2.5 text-slate-600 font-medium">
                  <li>
                    <a href="https://www.prograstic.com" target="_blank" rel="noopener noreferrer" className="hover:text-slate-950 transition-colors">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="https://www.prograstic.com/ideaforge" target="_blank" rel="noopener noreferrer" className="hover:text-slate-950 transition-colors">
                      Tools
                    </a>
                  </li>
                  <li>
                    <button
                      onClick={onOpenScopeModal}
                      className="hover:text-slate-950 transition-colors text-left"
                    >
                      Apply to join
                    </button>
                  </li>
                </ul>
              </div>

              {/* Column 3: STORIES */}
              <div className="space-y-4 col-span-2 md:col-span-1">
                <div className="text-xs font-mono font-bold tracking-widest text-slate-400 uppercase">
                  STORIES
                </div>
                <ul className="space-y-2.5 text-slate-600 font-medium">
                  <li>
                    <a href="https://www.prograstic.com" target="_blank" rel="noopener noreferrer" className="hover:text-slate-950 transition-colors">
                      Digital manga library
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-slate-600">Founder spotlights</span>
                    <span className="text-[10px] font-mono font-bold uppercase bg-[#EDE9FE] text-[#7C3AED] px-2 py-0.5 rounded-full border border-[#DDD6FE]">
                      soon
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Clean Bottom Copyright & Social Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm font-sans text-slate-500 px-4">
          <div className="flex items-center gap-3 flex-wrap">
            <span>©2026 Prograstic. All rights reserved.</span>
            <span className="text-slate-300">•</span>
            <a href="https://www.prograstic.com" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors">
              Privacy Policy
            </a>
            <span className="text-slate-300">•</span>
            <div className="flex items-center gap-1.5">
              <a href="https://www.prograstic.com" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors">
                Terms
              </a>
              <span className="text-[9px] font-mono font-bold uppercase bg-[#EDE9FE] text-[#7C3AED] px-1.5 py-0.2 rounded-full border border-[#DDD6FE]">
                soon
              </span>
            </div>
          </div>

          {/* Social Icons matching Prograstic */}
          <div className="flex items-center gap-4 text-slate-700 font-mono text-sm">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-slate-950 transition-colors font-bold">
              in
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-slate-950 transition-colors font-bold">
              𝕏
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-slate-950 transition-colors font-bold text-xs">
              IG
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
