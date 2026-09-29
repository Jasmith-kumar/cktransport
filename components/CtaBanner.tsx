'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, Phone, ShieldCheck } from 'lucide-react';

interface CtaBannerProps {
  onOpenQuote?: () => void;
}

export default function CtaBanner({ onOpenQuote }: CtaBannerProps) {
  const handleClick = () => {
    if (onOpenQuote) {
      onOpenQuote();
    } else {
      const el = document.getElementById('quote');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-[#0B1F33] text-white py-16 sm:py-20 overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute inset-0 z-0 opacity-30">
        <Image
          src="/images/service_regional_highway_1790608967200.jpg"
          alt="CK Transports Highway Freight"
          fill
          sizes="100vw"
          className="object-cover object-center"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F33] via-[#0B1F33]/90 to-[#0B1F33]/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-gradient-to-r from-[#102A45]/90 to-[#0B1F33]/90 p-8 sm:p-12 rounded-2xl border border-slate-700/80 shadow-2xl backdrop-blur-sm">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#F57C00]">
              Ready to Ship?
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mt-1 mb-3">
              Let&apos;s Move Your Business Forward
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              Get a fast and competitive freight quote today. Dedicated freight capacity across the United States.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full sm:w-auto">
            <button
              onClick={handleClick}
              className="w-full sm:w-auto px-8 py-4 bg-[#F57C00] hover:bg-[#E65100] text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-all duration-200 shadow-xl flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Request A Quote</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="tel:+19732007886"
              className="w-full sm:w-auto px-6 py-4 bg-slate-800/80 hover:bg-slate-700 text-white font-semibold text-xs uppercase tracking-wider rounded-lg border border-slate-600 transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#F57C00]" />
              <span>973-200-7886</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
