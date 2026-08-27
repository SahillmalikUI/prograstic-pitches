"use client";

import React from "react";
import Link from "next/link";
import { Terminal, ShieldCheck, Cpu, ArrowUpRight, ArrowRight } from "lucide-react";
import { IndustryVertical } from "@/data/verticals";

interface FooterProps {
  vertical?: IndustryVertical;
  onOpenScopeModal: () => void;
}

export function Footer({ vertical, onOpenScopeModal }: FooterProps) {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 pt-16 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
        {/* Banner: Direct to Builder */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-mono font-medium">
              <Terminal className="w-3.5 h-3.5" />
              DIRECT-TO-BUILDER MODEL
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
              Software, built by the people who ship it.
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              No account managers, no middle-tier handoffs. The senior full-stack engineer who scopes your operational workflow is the person who architects and builds it.
            </p>
          </div>

          <button
            onClick={onOpenScopeModal}
            className="px-6 py-3.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs transition-all hover:scale-105 shadow-md shadow-slate-900/10 shrink-0 flex items-center justify-center gap-2"
          >
            <span>Talk to the Engineering Team</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Links & Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-xl bg-slate-900 flex items-center justify-center text-white font-bold text-xs">
                P
              </div>
              <span className="font-display font-bold text-sm tracking-tight text-slate-900">
                PROGRASTIC
              </span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed max-w-sm">
              An engineering-led software studio building bespoke internal operating platforms, automated data pipelines, and workflow software.
            </p>
            <div className="text-xs font-mono text-slate-500">
              Bengaluru • Delhi NCR • Chandigarh • Global
            </div>
          </div>

          <div className="space-y-2">
            <div className="text-xs font-bold text-slate-900 uppercase font-mono tracking-wider">
              Studio Service Lines
            </div>
            <ul className="space-y-1.5 text-xs text-slate-600">
              <li>
                <a
                  href="https://prograstic.com/services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-slate-900 flex items-center gap-1 transition-colors"
                >
                  <span>Custom Software Engineering</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://prograstic.com/services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-slate-900 flex items-center gap-1 transition-colors"
                >
                  <span>UI/UX & Product Design</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://prograstic.com/services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-slate-900 flex items-center gap-1 transition-colors"
                >
                  <span>Data Pipelines & Automation</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://prograstic.com/services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-slate-900 flex items-center gap-1 transition-colors"
                >
                  <span>Cloud & DevOps Infrastructure</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-400" />
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <div className="text-xs font-bold text-slate-900 uppercase font-mono tracking-wider">
              Guarantees
            </div>
            <div className="space-y-2 text-xs text-slate-600">
              <div className="flex items-center gap-2 text-slate-800 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% Custom Source Code Ownership</span>
              </div>
              <div className="flex items-center gap-2 text-slate-800 font-medium">
                <Cpu className="w-4 h-4 text-indigo-600 shrink-0" />
                <span>Zero Per-User Recurring SaaS Tax</span>
              </div>
              <div className="flex items-center gap-2 text-slate-800 font-medium">
                <Terminal className="w-4 h-4 text-blue-600 shrink-0" />
                <span>14-Day Production Sprints</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Prograstic Technologies Pvt. Ltd. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="https://prograstic.com" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900">
              prograstic.com
            </a>
            <a href="mailto:hello@prograstic.com" className="hover:text-slate-900">
              hello@prograstic.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
