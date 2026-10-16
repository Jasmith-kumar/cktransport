'use client';

import React from 'react';
import Link from 'next/link';
import {
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
  Lock,
} from 'lucide-react';
import { PolicyType } from './LegalComplianceModals';

interface FooterProps {
  onOpenPolicy: (type: PolicyType) => void;
}

export default function Footer({ onOpenPolicy }: FooterProps) {
  return (
    <footer className="bg-[#071521] text-slate-300 border-t border-slate-800">
      {/* Upper Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Brand Info & Address */}
          <div className="lg:col-span-5 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded bg-[#102A45] border border-slate-700">
                <svg
                  viewBox="0 0 100 100"
                  className="w-7 h-7 fill-none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20 50 L45 25 L45 75 Z" fill="#FFFFFF" />
                  <path d="M48 25 L75 25 L55 50 L75 75 L48 75 L62 50 Z" fill="#F57C00" />
                  <path d="M15 82 L85 82 L75 88 L25 88 Z" fill="#EA580C" />
                </svg>
              </div>
              <div>
                <span className="text-xl font-black text-white tracking-tight">
                  CK <span className="text-slate-300">TRANSPORTS</span>
                </span>
                <p className="text-[10px] tracking-widest text-[#F57C00] font-bold uppercase">
                  Moving America Forward
                </p>
              </div>
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              CK Transports is a U.S.-based freight transportation company committed to dependable, safe, and professional trucking solutions across the United States.
            </p>

            <div className="pt-2 text-xs space-y-2">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#F57C00] shrink-0 mt-0.5" />
                <span className="text-slate-300">
                  2 Penn Plaza E, Newark, NJ 07105
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#F57C00] shrink-0" />
                <a href="tel:+19732007886" className="hover:text-white transition-colors">
                  973-200-7886
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#F57C00] shrink-0" />
                <a href="mailto:info@cktransports.us" className="hover:text-white transition-colors">
                  info@cktransports.us
                </a>
              </div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Website Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#home" className="hover:text-[#F57C00] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#F57C00] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#F57C00] transition-colors">
                  Freight Services
                </a>
              </li>
              <li>
                <a href="#coverage" className="hover:text-[#F57C00] transition-colors">
                  Our Coverage
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-[#F57C00] transition-colors">
                  Why CK Transports
                </a>
              </li>
              <li>
                <a href="#quote" className="hover:text-[#F57C00] transition-colors">
                  Request a Quote
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#F57C00] transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Business & Governance Policies */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-2">
              Corporate Governance & Policies
            </h4>
            <p className="text-xs text-slate-400">
              CK Transports adheres to strict federal motor carriage regulations and transparent business standards.
            </p>

            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onOpenPolicy('terms')}
                  className="hover:text-[#F57C00] transition-colors text-slate-300 text-left"
                >
                  Terms of Service & Freight Agreement
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenPolicy('privacy')}
                  className="hover:text-[#F57C00] transition-colors text-slate-300 text-left"
                >
                  Privacy & Data Protection Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenPolicy('refund')}
                  className="hover:text-[#F57C00] transition-colors text-slate-300 text-left"
                >
                  Cancellation, Refund & TONU Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenPolicy('payment')}
                  className="hover:text-[#F57C00] transition-colors text-slate-300 text-left"
                >
                  Payment & Commercial Billing Terms
                </button>
              </li>
            </ul>

            <div className="pt-2 flex items-center gap-2 text-[11px] text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-[#F57C00]" />
              <span>FMCSA Authorized Motor Carrier (DOT #3894211)</span>
            </div>
            <div className="flex items-center gap-2 text-[11px] text-slate-400">
              <Lock className="w-3.5 h-3.5 text-emerald-400" />
              <span>SSL Secured & Verified Commercial Entity</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Sub-Footer with Legal Links */}
      <div className="border-t border-slate-800/80 bg-[#050e17]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            <p>© 2026 CK Transports. All Rights Reserved. U.S.-Based Freight Transportation.</p>
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <button
              onClick={() => onOpenPolicy('terms')}
              className="hover:text-white transition-colors"
            >
              Terms of Service
            </button>
            <span>·</span>
            <button
              onClick={() => onOpenPolicy('privacy')}
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </button>
            <span>·</span>
            <button
              onClick={() => onOpenPolicy('refund')}
              className="hover:text-white transition-colors"
            >
              Refund & TONU Policy
            </button>
            <span>·</span>
            <button
              onClick={() => onOpenPolicy('payment')}
              className="hover:text-white transition-colors"
            >
              Payment Terms
            </button>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-5 text-center">
          <p className="text-[11px] text-slate-500">
            Affiliated to Chandrakanth Kushwaha
          </p>
        </div>
      </div>
    </footer>
  );
}
