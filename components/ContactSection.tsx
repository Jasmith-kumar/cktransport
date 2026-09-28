'use client';

import React from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Building,
  ShieldCheck,
  Globe,
  FileCheck,
  CheckCircle2,
} from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#F3F5F7] text-slate-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#F57C00] mb-3">
            <span className="w-6 h-0.5 bg-[#F57C00]" />
            <span>Contact Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B1F33] tracking-tight leading-tight mb-4">
            Connect With CK Transports
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Our corporate offices and dispatch desk are available Monday through Friday. Reach out directly by phone, email, or visit our New Jersey operational headquarters.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main 4 Contact Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Headquarters Card */}
            <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="p-3.5 rounded-xl bg-[#0B1F33] text-[#F57C00] w-fit mb-4">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#0B1F33]">
                  Corporate Address
                </h3>
                <p className="text-sm font-semibold text-slate-800 mt-2">
                  CK Transports
                </p>
                <p className="text-sm text-slate-600">
                  308 Evergreen Forest Blvd
                </p>
                <p className="text-sm text-slate-600">
                  Avenel, NJ 07001, United States
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>Middlesex County</span>
                <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded">
                  Operational Hub
                </span>
              </div>
            </div>

            {/* Direct Telephone Card */}
            <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="p-3.5 rounded-xl bg-[#0B1F33] text-[#F57C00] w-fit mb-4">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#0B1F33]">
                  Telephone & Dispatch
                </h3>
                <p className="text-2xl font-black text-slate-900 mt-2">
                  <a
                    href="tel:+18565550123"
                    className="hover:text-[#F57C00] transition-colors"
                  >
                    +1 (856) 555-0123
                  </a>
                </p>
                <p className="text-xs text-slate-500 mt-2">
                  Direct Line to Live Freight Dispatch & Operations
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500">
                <span>Immediate phone response during operating hours</span>
              </div>
            </div>

            {/* Direct Email Card */}
            <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="p-3.5 rounded-xl bg-[#0B1F33] text-[#F57C00] w-fit mb-4">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#0B1F33]">
                  Email Inquiries
                </h3>
                <div className="mt-3 space-y-2 text-xs">
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">General Information:</span>
                    <a
                      href="mailto:info@cktransports.com"
                      className="font-bold text-slate-800 hover:text-[#F57C00] text-sm transition-colors"
                    >
                      info@cktransports.com
                    </a>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Freight Dispatch:</span>
                    <a
                      href="mailto:dispatch@cktransports.com"
                      className="font-bold text-slate-800 hover:text-[#F57C00] text-sm transition-colors"
                    >
                      dispatch@cktransports.com
                    </a>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Billing & Invoicing:</span>
                    <a
                      href="mailto:billing@cktransports.com"
                      className="font-bold text-slate-800 hover:text-[#F57C00] text-sm transition-colors"
                    >
                      billing@cktransports.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500">
                <span>Responses delivered within 1 business hour</span>
              </div>
            </div>

            {/* Business Hours Card */}
            <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="p-3.5 rounded-xl bg-[#0B1F33] text-[#F57C00] w-fit mb-4">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#0B1F33]">
                  Operating Schedule
                </h3>
                <div className="mt-3 space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-600 font-medium">Monday - Friday:</span>
                    <span className="font-bold text-slate-900">8:00 AM - 6:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600 font-medium">Saturday:</span>
                    <span className="font-bold text-slate-900">9:00 AM - 1:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600 font-medium">Sunday:</span>
                    <span className="text-slate-500">Closed (On-Call Dispatch)</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500">
                <span>24/7 emergency dispatch coverage for loads in transit</span>
              </div>
            </div>
          </div>

          {/* Right Column: Business Profile & Credentials Overview */}
          <div className="lg:col-span-4 bg-[#0B1F33] text-white p-7 sm:p-8 rounded-2xl border border-slate-700/80 shadow-xl flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F57C00] mb-2">
                <ShieldCheck className="w-4 h-4" />
                <span>Company Credentials</span>
              </div>

              <h3 className="text-2xl font-black text-white mb-4">
                CK Transports
              </h3>

              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                A dependable U.S.-based freight carrier providing commercial trucking solutions across all 50 states. We prioritize on-time safety, clear communication, and customer satisfaction.
              </p>

              <div className="space-y-3 text-xs divide-y divide-slate-800">
                <div className="pt-2 flex justify-between items-center">
                  <span className="text-slate-400">Carrier Authority:</span>
                  <span className="font-bold text-white">FMCSA Registered</span>
                </div>
                <div className="pt-2 flex justify-between items-center">
                  <span className="text-slate-400">USDOT Identifier:</span>
                  <span className="font-mono font-bold text-slate-200">#3894211</span>
                </div>
                <div className="pt-2 flex justify-between items-center">
                  <span className="text-slate-400">MC Docket Number:</span>
                  <span className="font-mono font-bold text-slate-200">#1429810</span>
                </div>
                <div className="pt-2 flex justify-between items-center">
                  <span className="text-slate-400">Primary Cargo Coverage:</span>
                  <span className="font-bold text-emerald-400">$250,000 Included</span>
                </div>
                <div className="pt-2 flex justify-between items-center">
                  <span className="text-slate-400">Operating Base:</span>
                  <span className="font-bold text-white">Avenel, New Jersey</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800">
              <a
                href="tel:+18565550123"
                className="w-full py-3.5 bg-[#F57C00] hover:bg-[#E65100] text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg"
              >
                <Phone className="w-4 h-4" />
                <span>Call (856) 555-0123</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
