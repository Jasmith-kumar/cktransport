'use client';

import React, { useState } from 'react';
import {
  Search,
  Truck,
  CheckCircle2,
  Clock,
  MapPin,
  Calendar,
  ShieldCheck,
  AlertCircle,
  FileText,
  Navigation,
} from 'lucide-react';

export default function ShipmentTracker() {
  const [trackingNumber, setTrackingNumber] = useState('CK-TRK-9821');
  const [isSearching, setIsSearching] = useState(false);
  const [shipment, setShipment] = useState({
    id: 'CK-TRK-9821',
    bolNumber: 'BOL-84920-A',
    status: 'IN_TRANSIT',
    statusLabel: 'In Transit · On Schedule',
    origin: 'Kearny, NJ (Distribution Terminal)',
    destination: 'Atlanta, GA (Industrial Gateway)',
    pickupDate: 'Sep 27, 2026 · 08:30 AM EST',
    estimatedDelivery: 'Sep 29, 2026 · 02:00 PM EST',
    driver: 'Robert M. (CDL-A Certified)',
    tractor: 'Unit #412 (Freightliner Cascadia)',
    trailer: '53ft Air-Ride Dry Van #T-882',
    temperature: 'Ambient (N/A)',
    currentLocation: 'Harrisonburg, VA (I-81 Southbound MP 247)',
    lastUpdate: '14 minutes ago via Satellite GPS',
    milestones: [
      {
        title: 'Dispatch Confirmed & Equipment Assigned',
        time: 'Sep 26, 2026 · 04:15 PM EST',
        location: 'Kearny, NJ Dispatch Desk',
        completed: true,
      },
      {
        title: 'Cargo Loaded & Sealed at Shipper Dock',
        time: 'Sep 27, 2026 · 09:45 AM EST',
        location: 'Elizabeth, NJ Shipper Facility',
        completed: true,
      },
      {
        title: 'Departed Regional Distribution Hub',
        time: 'Sep 27, 2026 · 11:30 AM EST',
        location: 'Kearny, NJ Interstate Terminal',
        completed: true,
      },
      {
        title: 'In Transit - Interstate Linehaul Corridors',
        time: 'Sep 28, 2026 · 10:15 AM EST',
        location: 'Harrisonburg, VA (I-81 South)',
        completed: true,
        current: true,
      },
      {
        title: 'Out for Final Delivery to Receiver Dock',
        time: 'Sep 29, 2026 · Estimated 10:00 AM EST',
        location: 'Atlanta, GA Metro Area',
        completed: false,
      },
      {
        title: 'Delivered & Signed Electronic Proof of Delivery (POD)',
        time: 'Sep 29, 2026 · Estimated 02:00 PM EST',
        location: 'Atlanta Receiver Facility',
        completed: false,
      },
    ],
  });

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingNumber.trim()) return;
    setIsSearching(true);
    setTimeout(() => {
      setShipment((prev) => ({
        ...prev,
        id: trackingNumber.toUpperCase(),
      }));
      setIsSearching(false);
    }, 500);
  };

  return (
    <section id="tracking" className="py-20 bg-[#071521] text-white border-t border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#F57C00] mb-3">
            <Navigation className="w-4 h-4" />
            <span>Shipment Visibility</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Track Your Freight in Real Time
          </h2>
          <p className="text-sm text-slate-300 mt-2">
            Enter your CK Transports Tracking PRO # or Bill of Lading (BOL) number for 24/7 satellite GPS tracking updates.
          </p>
        </div>

        {/* Search Bar */}
        <div className="bg-[#0B1F33] p-4 rounded-xl border border-slate-700/80 shadow-xl mb-8 max-w-xl mx-auto">
          <form onSubmit={handleTrack} className="flex gap-2">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="text"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                placeholder="Enter PRO # or BOL # (e.g. CK-TRK-9821)"
                className="w-full bg-[#071521] border border-slate-700 rounded-lg pl-10 pr-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#F57C00]"
              />
            </div>
            <button
              type="submit"
              disabled={isSearching}
              className="px-6 py-2 bg-[#F57C00] hover:bg-[#E65100] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors flex items-center gap-1.5"
            >
              {isSearching ? 'Searching...' : 'Track'}
            </button>
          </form>
        </div>

        {/* Shipment Status Card */}
        <div className="bg-[#0B1F33] rounded-2xl border border-slate-700/80 shadow-2xl overflow-hidden">
          {/* Top Status Header */}
          <div className="p-6 sm:p-8 bg-[#102A45]/40 border-b border-slate-700/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-3">
                <span className="text-xl font-black text-white">{shipment.id}</span>
                <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-emerald-950 text-emerald-300 border border-emerald-700/50 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  {shipment.statusLabel}
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Bill of Lading: {shipment.bolNumber} · GPS Ping: {shipment.lastUpdate}
              </p>
            </div>

            <div className="text-left sm:text-right">
              <p className="text-xs text-slate-400">Estimated Delivery Window</p>
              <p className="text-base font-bold text-white mt-0.5">
                {shipment.estimatedDelivery}
              </p>
            </div>
          </div>

          {/* Current GPS Checkpoint Banner */}
          <div className="px-6 py-3 bg-[#071521] border-b border-slate-800 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2 text-slate-300">
              <MapPin className="w-4 h-4 text-[#F57C00] shrink-0" />
              <span>Current Position: <strong>{shipment.currentLocation}</strong></span>
            </div>
            <span className="text-emerald-400 font-semibold hidden sm:inline">
              Speed: 64 MPH · Temperature: Ambient
            </span>
          </div>

          {/* Timeline Milestones */}
          <div className="p-6 sm:p-8">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-6">
              Carrier Transit Milestones
            </h4>

            <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-slate-800 before:z-0">
              {shipment.milestones.map((milestone, idx) => (
                <div key={idx} className="relative z-10 flex items-start gap-4 text-xs">
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 border-2 ${
                      milestone.completed
                        ? milestone.current
                          ? 'bg-[#F57C00] border-white text-white ring-4 ring-orange-500/20'
                          : 'bg-emerald-600 border-emerald-400 text-white'
                        : 'bg-slate-800 border-slate-700 text-slate-500'
                    }`}
                  >
                    {milestone.completed ? (
                      <CheckCircle2 className="w-4 h-4" />
                    ) : (
                      <Clock className="w-3.5 h-3.5" />
                    )}
                  </div>

                  <div className="flex-1 bg-[#071521]/60 p-3.5 rounded-lg border border-slate-800/80">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <p
                        className={`font-bold ${
                          milestone.current ? 'text-[#F57C00]' : 'text-white'
                        }`}
                      >
                        {milestone.title}
                      </p>
                      <span className="text-[11px] text-slate-400 font-mono">
                        {milestone.time}
                      </span>
                    </div>
                    <p className="text-slate-400 mt-1 flex items-center gap-1.5">
                      <MapPin className="w-3 h-3 text-slate-500" />
                      <span>{milestone.location}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Driver & Equipment Card */}
          <div className="p-6 bg-[#071521] border-t border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div>
              <span className="text-slate-500 uppercase text-[10px] font-bold">Assigned Driver</span>
              <p className="text-white font-semibold mt-0.5">{shipment.driver}</p>
            </div>
            <div>
              <span className="text-slate-500 uppercase text-[10px] font-bold">Power Unit & Trailer</span>
              <p className="text-white font-semibold mt-0.5">{shipment.tractor} / {shipment.trailer}</p>
            </div>
            <div>
              <span className="text-slate-500 uppercase text-[10px] font-bold">Need Live Dispatch Support?</span>
              <p className="text-[#F57C00] font-bold mt-0.5">973-200-7886 (Option 1)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
