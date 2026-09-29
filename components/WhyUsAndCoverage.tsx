'use client';

import React, { useState } from 'react';
import {
  ShieldCheck,
  Settings2,
  Globe,
  Users,
  DollarSign,
  Radio,
  CheckCircle2,
  ArrowRight,
  MapPin,
  Truck,
  Award,
} from 'lucide-react';

const REASONS = [
  {
    title: 'Reliable & Professional',
    description:
      'Rigorous safety vetting, experienced CDL-A drivers, and meticulously maintained late-model power units.',
    icon: ShieldCheck,
  },
  {
    title: 'Flexible Solutions',
    description:
      'Customized capacity arrangements, drop-and-hook staging, and scalable multi-modal freight adaptability.',
    icon: Settings2,
  },
  {
    title: 'Nationwide Coverage',
    description:
      'Direct freight transit across all 48 contiguous states with established regional and cross-country corridors.',
    icon: Globe,
  },
  {
    title: 'Customer Focused',
    description:
      'Dedicated logistics account managers with responsive 24/7 direct dispatch communication—no voicemail dead-ends.',
    icon: Users,
  },
  {
    title: 'Competitive Rates',
    description:
      'Transparent, upfront pricing based on live market freight indices with no hidden fuel or accessorial surprises.',
    icon: DollarSign,
  },
  {
    title: 'Shipment Visibility',
    description:
      'Real-time automated GPS tracking, continuous milestone alerts, and instant electronic Proof of Delivery (POD).',
    icon: Radio,
  },
];

const REGIONS = [
  {
    name: 'Northeast',
    states: 'NJ, NY, PA, CT, MA, ME, NH, VT, RI',
    hub: 'Kearny, NJ (HQ)',
    turnaround: 'Next-Day Delivery',
    color: '#F57C00',
  },
  {
    name: 'Southeast',
    states: 'FL, GA, NC, SC, TN, AL, MS, VA',
    hub: 'Atlanta, GA Hub',
    turnaround: '1 - 2 Business Days',
    color: '#EA580C',
  },
  {
    name: 'Midwest',
    states: 'IL, OH, IN, MI, WI, MN, MO, IA, KS',
    hub: 'Chicago, IL Hub',
    turnaround: '1 - 2 Business Days',
    color: '#D97706',
  },
  {
    name: 'Southwest',
    states: 'TX, AZ, NM, OK, NV, UT',
    hub: 'Dallas / Fort Worth Hub',
    turnaround: '2 - 3 Business Days',
    color: '#0284C7',
  },
  {
    name: 'West Coast',
    states: 'CA, WA, OR, ID',
    hub: 'Los Angeles / Ontario Hub',
    turnaround: '3 - 4 Business Days',
    color: '#10B981',
  },
  {
    name: 'Nationwide Network',
    states: 'All 50 United States Coverage',
    hub: 'National Dispatch Center',
    turnaround: 'Full Coverage',
    color: '#6366F1',
  },
];

export default function WhyUsAndCoverage() {
  const [activeRegion, setActiveRegion] = useState<number>(0);

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-[#F3F5F7] text-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Grid Section matching Screenshots */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Why Choose CK Transports */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#F57C00] mb-3">
                <span className="w-6 h-0.5 bg-[#F57C00]" />
                <span>Why Choose CK Transports</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B1F33] tracking-tight leading-tight mb-5">
                A Partner You Can Count On
              </h2>

              <p className="text-base text-slate-600 leading-relaxed mb-8">
                We are committed to providing reliable, professional, and cost-effective transportation services. Our focus is on building long-term relationships with our customers through trust, performance, and great service.
              </p>

              {/* 6 Value Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {REASONS.map((reason, idx) => {
                  const Icon = reason.icon;
                  return (
                    <div
                      key={idx}
                      className="bg-white p-4 rounded-lg border border-slate-200/80 shadow-sm hover:border-[#0B1F33] transition-colors"
                    >
                      <div className="flex items-center gap-2.5 mb-1.5">
                        <div className="p-1.5 rounded bg-slate-100 text-[#0B1F33]">
                          <Icon className="w-4 h-4 text-[#F57C00]" />
                        </div>
                        <h4 className="text-sm font-bold text-[#0B1F33]">
                          {reason.title}
                        </h4>
                      </div>
                      <p className="text-xs text-slate-500 leading-relaxed pl-8">
                        {reason.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div>
                <a
                  href="#about"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#F57C00] hover:bg-[#E65100] text-white font-bold text-xs uppercase tracking-wider rounded transition-all shadow-md group"
                >
                  <span>Learn More About Us</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Our Coverage & US Interactive Map */}
          <div id="coverage" className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-lg">
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#F57C00] mb-2">
                <span className="w-6 h-0.5 bg-[#F57C00]" />
                <span>Our Coverage</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-[#0B1F33] tracking-tight">
                Serving Across the United States
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2">
                CK Transports proudly provides freight transportation services nationwide with established high-volume shipping corridors.
              </p>
            </div>

            {/* Custom Interactive Stylized US Route Map Graphic */}
            <div className="relative w-full h-64 sm:h-72 bg-gradient-to-br from-[#0B1F33] to-[#071521] rounded-lg p-4 overflow-hidden mb-6 flex flex-col justify-between text-white shadow-inner">
              {/* Stylized background lines mimicking highway grid */}
              <div className="absolute inset-0 opacity-15">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
                      <path d="M 30 0 L 0 0 0 30" fill="none" stroke="currentColor" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
              </div>

              {/* USA Silhouette Vector (Stylized clean representation) */}
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <svg
                  viewBox="0 0 600 350"
                  className="w-full h-full max-h-56 select-none"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Continental USA contour shape */}
                  <path
                    d="M 60 70 L 120 65 L 180 60 L 250 60 L 320 62 L 400 85 L 470 65 L 530 60 L 560 90 L 545 130 L 515 150 L 530 190 L 490 220 L 485 270 L 460 295 L 435 270 L 400 240 L 370 245 L 350 295 L 310 310 L 260 260 L 210 245 L 160 250 L 110 220 L 70 200 L 50 140 Z"
                    fill="#16375A"
                    stroke="#2A537E"
                    strokeWidth="2"
                    className="transition-colors duration-300"
                  />

                  {/* Route lines radiating from Kearny, NJ Headquarters (Approx pos 520, 110) */}
                  {/* To Atlanta Southeast (460, 230) */}
                  <path
                    d="M 520 110 Q 490 170 460 220"
                    stroke="#F57C00"
                    strokeWidth={activeRegion === 1 || activeRegion === 5 ? "3" : "1.5"}
                    strokeDasharray={activeRegion === 1 ? "none" : "4 4"}
                    opacity={activeRegion === 1 || activeRegion === 5 || activeRegion === 0 ? "1" : "0.3"}
                    className="transition-all"
                  />
                  {/* To Chicago Midwest (380, 120) */}
                  <path
                    d="M 520 110 Q 450 100 380 120"
                    stroke="#F57C00"
                    strokeWidth={activeRegion === 2 || activeRegion === 5 ? "3" : "1.5"}
                    strokeDasharray={activeRegion === 2 ? "none" : "4 4"}
                    opacity={activeRegion === 2 || activeRegion === 5 || activeRegion === 0 ? "1" : "0.3"}
                    className="transition-all"
                  />
                  {/* To Dallas Southwest (320, 240) */}
                  <path
                    d="M 520 110 Q 410 190 320 230"
                    stroke="#F57C00"
                    strokeWidth={activeRegion === 3 || activeRegion === 5 ? "3" : "1.5"}
                    strokeDasharray={activeRegion === 3 ? "none" : "4 4"}
                    opacity={activeRegion === 3 || activeRegion === 5 || activeRegion === 0 ? "1" : "0.3"}
                    className="transition-all"
                  />
                  {/* To Los Angeles West Coast (110, 200) */}
                  <path
                    d="M 520 110 Q 320 120 110 200"
                    stroke="#F57C00"
                    strokeWidth={activeRegion === 4 || activeRegion === 5 ? "3" : "1.5"}
                    strokeDasharray={activeRegion === 4 ? "none" : "4 4"}
                    opacity={activeRegion === 4 || activeRegion === 5 || activeRegion === 0 ? "1" : "0.3"}
                    className="transition-all"
                  />

                  {/* Hub Terminals Markers */}
                  {/* NJ HQ Marker */}
                  <circle cx="520" cy="110" r="7" fill="#F57C00" className="animate-pulse" />
                  <circle cx="520" cy="110" r="14" stroke="#F57C00" strokeWidth="1.5" opacity="0.6" />
                  <text x="500" y="95" fill="#FFFFFF" fontSize="10" fontWeight="bold">
                    NJ HQ (Kearny)
                  </text>

                  {/* Other Hub Nodes */}
                  <circle cx="460" cy="220" r="4" fill="#FFFFFF" opacity="0.9" />
                  <text x="440" y="238" fill="#CBD5E1" fontSize="8">Atlanta</text>

                  <circle cx="380" cy="120" r="4" fill="#FFFFFF" opacity="0.9" />
                  <text x="360" y="138" fill="#CBD5E1" fontSize="8">Chicago</text>

                  <circle cx="320" cy="230" r="4" fill="#FFFFFF" opacity="0.9" />
                  <text x="300" y="248" fill="#CBD5E1" fontSize="8">Dallas</text>

                  <circle cx="110" cy="200" r="4" fill="#FFFFFF" opacity="0.9" />
                  <text x="90" y="218" fill="#CBD5E1" fontSize="8">Los Angeles</text>
                </svg>
              </div>

              {/* Dynamic Region Callout */}
              <div className="relative z-10 bg-black/60 backdrop-blur-sm border border-slate-700/60 rounded px-3 py-1.5 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#F57C00]" />
                  <span className="font-semibold text-white">
                    {REGIONS[activeRegion].name}:
                  </span>
                  <span className="text-slate-300">
                    {REGIONS[activeRegion].hub}
                  </span>
                </div>
                <span className="text-[11px] text-[#F57C00] font-bold">
                  {REGIONS[activeRegion].turnaround}
                </span>
              </div>
            </div>

            {/* Region Selector Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-6">
              {REGIONS.map((region, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveRegion(idx)}
                  className={`px-3 py-2 text-left rounded border text-xs transition-all ${
                    activeRegion === idx
                      ? 'bg-[#0B1F33] text-white border-[#0B1F33] shadow-sm'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center gap-1.5 font-bold">
                    <span
                      className="w-2 h-2 rounded-full shrink-0"
                      style={{ backgroundColor: region.color }}
                    />
                    <span>{region.name}</span>
                  </div>
                  <p className="text-[10px] text-slate-400 truncate mt-0.5">
                    {region.states}
                  </p>
                </button>
              ))}
            </div>

            {/* 4 Quantitative Proof Stats matching screenshot */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-200 text-center">
              <div>
                <p className="text-2xl sm:text-3xl font-black text-[#0B1F33]">
                  50+
                </p>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-0.5">
                  Partner Carriers
                </p>
              </div>

              <div>
                <p className="text-2xl sm:text-3xl font-black text-[#0B1F33]">
                  500+
                </p>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-0.5">
                  Happy Clients
                </p>
              </div>

              <div>
                <p className="text-2xl sm:text-3xl font-black text-[#0B1F33]">
                  All 50
                </p>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-0.5">
                  States Covered
                </p>
              </div>

              <div>
                <p className="text-2xl sm:text-3xl font-black text-[#F57C00]">
                  99%
                </p>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-0.5">
                  On-Time Delivery
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
