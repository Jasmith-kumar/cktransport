'use client';

import React from 'react';
import Image from 'next/image';
import {
  ShieldCheck,
  Award,
  Users,
  CheckCircle,
  Truck,
  Building2,
  Clock,
  ArrowRight,
} from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with Floating Experience Badge */}
          <div className="lg:col-span-6 relative">
            <div className="relative h-96 sm:h-[450px] w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
              <Image
                src="/images/service_ftl_truck_1790608942139.jpg"
                alt="CK Transports Commercial Fleet"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33]/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-xs uppercase tracking-widest text-[#F57C00] font-bold">
                  Corporate Terminal & Hub
                </p>
                <p className="text-lg font-bold">
                  308 Evergreen Forest Blvd, Avenel, NJ 07001
                </p>
              </div>
            </div>

            {/* Floating Trust Card */}
            <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:right-6 bg-[#0B1F33] text-white p-5 rounded-xl shadow-2xl border border-slate-700 max-w-xs hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-[#F57C00] text-white">
                  <Truck className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xl font-black text-white">100%</p>
                  <p className="text-xs text-slate-300 font-medium">
                    FMCSA Certified Carrier
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Principles */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#F57C00] mb-3">
              <span className="w-6 h-0.5 bg-[#F57C00]" />
              <span>About Us</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B1F33] tracking-tight leading-tight mb-6">
              Dependable Freight. Seamless Delivery.
            </h2>

            <p className="text-base sm:text-lg font-medium text-slate-700 leading-relaxed mb-4">
              CK Transports is a U.S.-based freight transportation company focused on dependable, efficient, and professional trucking solutions.
            </p>

            <p className="text-sm text-slate-600 leading-relaxed mb-8">
              We work with businesses, distributors, manufacturers, and commercial customers to move freight safely and efficiently across the United States. Headquartered in Avenel, New Jersey, our operations center orchestrates continuous linehaul and regional routes with dedicated attention to cargo security, strict appointment compliance, and real-time communication.
            </p>

            {/* Core Values 4-Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 text-xs">
              <div className="p-3.5 rounded-lg bg-[#F8FAFC] border border-slate-200">
                <div className="flex items-center gap-2 font-bold text-[#0B1F33] mb-1">
                  <ShieldCheck className="w-4 h-4 text-[#F57C00]" />
                  <span>Safety-First Fleet</span>
                </div>
                <p className="text-slate-500">
                  Late-model power units with collision mitigation and regular DOT inspections.
                </p>
              </div>

              <div className="p-3.5 rounded-lg bg-[#F8FAFC] border border-slate-200">
                <div className="flex items-center gap-2 font-bold text-[#0B1F33] mb-1">
                  <Clock className="w-4 h-4 text-[#F57C00]" />
                  <span>On-Time Guarantee</span>
                </div>
                <p className="text-slate-500">
                  Strict appointment windows for distribution centers and manufacturing plants.
                </p>
              </div>

              <div className="p-3.5 rounded-lg bg-[#F8FAFC] border border-slate-200">
                <div className="flex items-center gap-2 font-bold text-[#0B1F33] mb-1">
                  <Users className="w-4 h-4 text-[#F57C00]" />
                  <span>Dedicated Coordinators</span>
                </div>
                <p className="text-slate-500">
                  Direct line to real human logistics dispatchers 24 hours a day, 7 days a week.
                </p>
              </div>

              <div className="p-3.5 rounded-lg bg-[#F8FAFC] border border-slate-200">
                <div className="flex items-center gap-2 font-bold text-[#0B1F33] mb-1">
                  <Award className="w-4 h-4 text-[#F57C00]" />
                  <span>Licensed & Insured</span>
                </div>
                <p className="text-slate-500">
                  Fully bonded with comprehensive primary cargo and commercial liability coverage.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="#contact"
                className="px-6 py-3.5 bg-[#0B1F33] hover:bg-[#16375A] text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center gap-2"
              >
                <span>Contact Our Team</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#quote"
                className="px-5 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs uppercase tracking-wider rounded-lg transition-colors"
              >
                Request Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
