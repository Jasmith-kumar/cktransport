'use client';

import React from 'react';
import Image from 'next/image';
import {
  Truck,
  ShieldCheck,
  Globe2,
  Building2,
  Clock,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

export default function Hero() {
  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToQuote = () => {
    const el = document.getElementById('quote');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative bg-[#0B1F33] text-white overflow-hidden">
      {/* Background Hero Image with Deep Navy Gradient Scrim */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero_freight_truck_1790608925966.jpg"
          alt="CK Transports Heavy Duty Commercial Freight Truck on Highway"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105"
          referrerPolicy="no-referrer"
        />
        {/* Measured Multi-Stop Scrim */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F33] via-[#0B1F33]/85 to-[#0B1F33]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33] via-transparent to-[#0B1F33]/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 sm:pt-24 sm:pb-28 lg:pt-28 lg:pb-36">
        <div className="max-w-3xl">
          {/* Eyebrow Label */}
          <div className="inline-flex items-center gap-2 mb-4 text-xs sm:text-sm font-bold tracking-widest uppercase text-[#F57C00]">
            <span className="w-8 h-0.5 bg-[#F57C00]" />
            <span>Nationwide Freight Transportation</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.08] mb-6">
            Moving Freight.{' '}
            <span className="block text-[#F57C00]">Delivering Reliability.</span>
          </h1>

          {/* Subheading & Core Proposition */}
          <p className="text-xl sm:text-2xl font-bold text-slate-200 mb-4 tracking-tight">
            Safe. On Time. Across the United States.
          </p>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl font-normal">
            CK Transports provides dependable and efficient freight transportation solutions for businesses, distributors, manufacturers, and commercial partners across the country.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={scrollToQuote}
              className="px-7 py-3.5 bg-[#F57C00] hover:bg-[#E65100] text-white font-bold text-sm uppercase tracking-wider rounded shadow-lg shadow-orange-950/40 transition-all duration-200 flex items-center gap-2.5 group cursor-pointer"
            >
              <span>Request A Quote</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={scrollToServices}
              className="px-7 py-3.5 bg-slate-900/80 hover:bg-slate-800 text-white font-semibold text-sm uppercase tracking-wider rounded border border-slate-600 hover:border-slate-400 transition-all duration-200 flex items-center gap-2 cursor-pointer"
            >
              <span>Our Services</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Credibility Trust Badges */}
          <div className="mt-10 pt-6 border-t border-slate-700/60 flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-slate-300">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#F57C00]" />
              <span>FMCSA & DOT Compliant Carrier</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#F57C00]" />
              <span>$250,000 Standard Cargo Liability</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#F57C00]" />
              <span>GPS Tracking & Direct Dispatch</span>
            </div>
          </div>
        </div>
      </div>

      {/* 5-Column Key Highlights Bar matching Screenshot */}
      <div className="relative z-10 bg-[#071521] border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6 divide-y sm:divide-y-0 divide-slate-800">
            {/* Highlight 1 */}
            <div className="flex items-center gap-3 pt-3 sm:pt-0">
              <div className="p-2 rounded bg-slate-800/80 text-[#F57C00] shrink-0">
                <Truck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Reliable</p>
                <p className="text-sm font-bold text-white leading-tight">Transportation</p>
              </div>
            </div>

            {/* Highlight 2 */}
            <div className="flex items-center gap-3 pt-3 sm:pt-0">
              <div className="p-2 rounded bg-slate-800/80 text-[#F57C00] shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Safe & Secure</p>
                <p className="text-sm font-bold text-white leading-tight">Freight Handling</p>
              </div>
            </div>

            {/* Highlight 3 */}
            <div className="flex items-center gap-3 pt-3 sm:pt-0">
              <div className="p-2 rounded bg-slate-800/80 text-[#F57C00] shrink-0">
                <Globe2 className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Nationwide</p>
                <p className="text-sm font-bold text-white leading-tight">Coverage (All 50)</p>
              </div>
            </div>

            {/* Highlight 4 */}
            <div className="flex items-center gap-3 pt-3 sm:pt-0">
              <div className="p-2 rounded bg-slate-800/80 text-[#F57C00] shrink-0">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Business</p>
                <p className="text-sm font-bold text-white leading-tight">Focused Logistics</p>
              </div>
            </div>

            {/* Highlight 5 */}
            <div className="flex items-center gap-3 pt-3 sm:pt-0 col-span-2 sm:col-span-1">
              <div className="p-2 rounded bg-slate-800/80 text-[#F57C00] shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold">99% Record</p>
                <p className="text-sm font-bold text-white leading-tight">On-Time Delivery</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
