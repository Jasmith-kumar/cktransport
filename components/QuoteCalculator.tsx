'use client';

import React from 'react';
import {
  FileText,
  Mail,
  MapPin,
  CheckCircle2,
} from 'lucide-react';
import ContactForm from './ContactForm';

export default function QuoteCalculator() {
  const quoteChecklist = [
    {
      title: 'Contact Details',
      details: 'Full Name, Company Name, Direct Telephone & Business Email (required)',
    },
    {
      title: 'Pickup Location',
      details: 'Origin City, State & Zip Code (or Shipper Facility Address)',
    },
    {
      title: 'Delivery Location',
      details: 'Destination City, State & Zip Code (or Receiver Warehouse)',
    },
    {
      title: 'Freight Category',
      details: 'Full Truckload (FTL), Less Than Truckload (LTL), Regional, Expedited, or Commercial',
    },
    {
      title: 'Weight & Pallet Count',
      details: 'Approximate Total Weight (lbs), Number of Pallets, Cargo Dimensions',
    },
    {
      title: 'Target Schedule',
      details: 'Desired Pickup Date & Receiving Appointment Window',
    },
    {
      title: 'Special Requirements',
      details: 'Liftgate Delivery, Dock-to-Dock, Inside Delivery, or Temperature Specifications',
    },
  ];

  return (
    <section id="quote" className="py-20 lg:py-28 bg-[#0B1F33] text-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Headline and Overview */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#F57C00] mb-3">
              <span className="w-6 h-0.5 bg-[#F57C00]" />
              <span>Request a Quote</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-5">
              Get a Fast & Competitive Freight Quote
            </h2>

            <p className="text-base text-slate-300 leading-relaxed mb-6">
              CK Transports provides upfront, transparent freight rates for commercial shippers, manufacturers, and distributors across the United States. Submit the form and we&apos;ll send your request to info@cktransports.us and ckbilling.us@gmail.com.
            </p>

            <div className="space-y-4 mb-8 text-xs text-slate-300">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-[#071521] border border-slate-800">
                <CheckCircle2 className="w-5 h-5 text-[#F57C00] shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white text-sm">Transparent All-In Pricing</p>
                  <p className="text-slate-400 mt-1">
                    No hidden fuel surcharges or surprise billing. Complete lane transparency based on current national freight indexes.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-[#071521] border border-slate-800">
                <CheckCircle2 className="w-5 h-5 text-[#F57C00] shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white text-sm">Immediate Dispatch Confirmation</p>
                  <p className="text-slate-400 mt-1">
                    Dedicated account managers review and confirm equipment availability within 15 to 30 minutes during standard business hours.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-[#071521] border border-slate-800">
                <CheckCircle2 className="w-5 h-5 text-[#F57C00] shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white text-sm">Comprehensive Cargo Coverage</p>
                  <p className="text-slate-400 mt-1">
                    $250,000 standard cargo insurance included on every commercial dispatch with option for declared high-value riders.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Contact Action Box */}
            <div className="p-6 rounded-xl bg-gradient-to-r from-[#102A45] to-[#0a1b2d] border border-slate-700/80 shadow-lg">
              <p className="text-xs uppercase tracking-wider text-[#F57C00] font-bold">
                Direct Dispatch Hotline
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-2">
                <div>
                  <a
                    href="tel:+19732007886"
                    className="text-2xl font-black text-white hover:text-[#F57C00] transition-colors"
                  >
                    973-200-7886
                  </a>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Mon - Fri: 8:00 AM - 6:00 PM EST
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 shrink-0">
                  <a
                    href="mailto:info@cktransports.us?subject=Freight%20Quote%20Request"
                    className="px-6 py-3 bg-[#F57C00] hover:bg-[#E65100] text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
                  >
                    <Mail className="w-4 h-4" />
                    <span>info@cktransports.us</span>
                  </a>
                  <a
                    href="mailto:ckbilling.us@gmail.com?subject=Freight%20Quote%20Request"
                    className="px-6 py-3 bg-[#F57C00] hover:bg-[#E65100] text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
                  >
                    <Mail className="w-4 h-4" />
                    <span>ckbilling.us@gmail.com</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Checklist */}
            <div className="mt-8 bg-[#071521] border border-slate-700/80 rounded-2xl p-6 shadow-xl">
              <div className="border-b border-slate-800 pb-4 mb-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F57C00] mb-1">
                  <FileText className="w-4 h-4" />
                  <span>Information Checklist</span>
                </div>
                <h3 className="text-lg font-bold text-white">
                  Details to Include in Your Message
                </h3>
              </div>

              <div className="divide-y divide-slate-800/80 text-xs">
                {quoteChecklist.map((item, idx) => (
                  <div key={idx} className="py-3 flex items-start gap-3">
                    <div className="w-6 h-6 rounded bg-[#102A45] border border-slate-700 text-[#F57C00] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm">{item.title}</h4>
                      <p className="text-slate-400 mt-0.5">{item.details}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 p-4 rounded-xl bg-[#0B1F33] border border-slate-700 text-xs">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#F57C00] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-white">Corporate Terminal Location</p>
                    <p className="text-slate-300 mt-0.5">
                      CK Transports · 2 Penn Plaza E, Newark, NJ 07105
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Quote request form */}
          <div className="lg:col-span-6 bg-[#071521] border border-slate-700/80 rounded-2xl p-6 sm:p-8 shadow-2xl">
            <div className="border-b border-slate-800 pb-4 mb-6">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F57C00] mb-1">
                <Mail className="w-4 h-4" />
                <span>Online Quote Request</span>
              </div>
              <h3 className="text-xl font-bold text-white">
                Submit Your Freight Details
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Email is required. You&apos;ll receive an automatic thank-you confirmation after submitting.
              </p>
            </div>

            <ContactForm formType="quote" variant="dark" />
          </div>
        </div>
      </div>
    </section>
  );
}
