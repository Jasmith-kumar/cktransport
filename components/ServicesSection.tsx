'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Truck,
  Package,
  MapPin,
  Compass,
  Building,
  CalendarCheck,
  Zap,
  Briefcase,
  ArrowRight,
  Check,
  X,
} from 'lucide-react';

interface ServiceItem {
  id: string;
  title: string;
  badge: string;
  tagline: string;
  description: string;
  features: string[];
  equipment: string;
  transitTime: string;
  image?: string;
  icon: React.ElementType;
}

const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'ftl',
    title: 'Full Truckload (FTL)',
    badge: 'Dedicated Fleet',
    tagline: 'Dedicated trucks for large shipments and exclusive trailer use.',
    description:
      'CK Transports offers full truckload capacity with dedicated 53-foot dry vans and temperature-controlled reefer units. Your shipment stays sealed from origin pickup to final destination with zero transfers or cross-dock delays.',
    features: [
      'Exclusive trailer capacity up to 45,000 lbs',
      'Door-to-door direct routing without intermediate handling',
      'High-security seal verification & real-time GPS tracking',
      'Standard 53ft Air-Ride Dry Vans & Refrigerated trailers',
    ],
    equipment: '53ft Dry Van / Refrigerated',
    transitTime: '1 - 4 Business Days Nationwide',
    image: '/images/service_ftl_truck_1790608942139.jpg',
    icon: Truck,
  },
  {
    id: 'ltl',
    title: 'Less Than Truckload (LTL)',
    badge: 'Cost-Effective',
    tagline: 'Consolidated commercial freight solutions for 1 to 6 pallets.',
    description:
      'Pay only for the space your cargo occupies. Our optimized LTL consolidation network allows businesses, manufacturers, and distributors to move smaller commercial freight efficiently while keeping transportation costs strictly controlled.',
    features: [
      'Pallet-tier pricing from 150 lbs to 12,000 lbs',
      'Regional distribution hub consolidation with barcode tracking',
      'Liftgate service & residential/inside delivery options',
      'Automated freight class & density rating support',
    ],
    equipment: 'Enclosed Van with Hydraulic Liftgate',
    transitTime: '2 - 5 Business Days',
    image: '/images/service_ltl_warehouse_1790608954826.jpg',
    icon: Package,
  },
  {
    id: 'regional',
    title: 'Regional Freight Transportation',
    badge: 'High Frequency',
    tagline: 'Reliable regional transportation within core interstate corridors.',
    description:
      'High-frequency distribution across the Northeast, Mid-Atlantic, Southeast, and Midwest. Our drivers know local shipping hubs, commercial docks, and metropolitan routes inside and out for dependable next-day delivery.',
    features: [
      'Next-day & second-day regional turnaround',
      'Strategic terminals across NJ, NY, PA, MD, and OH',
      'Flexible drop-and-hook trailer staging',
      'Consistent morning dock appointments',
    ],
    equipment: 'Class 8 Day Cabs & 48ft/53ft Trailers',
    transitTime: '24 - 48 Hours',
    image: '/images/service_regional_highway_1790608967200.jpg',
    icon: MapPin,
  },
  {
    id: 'long-distance',
    title: 'Long-Distance Transportation',
    badge: 'Interstate Haul',
    tagline: 'Coast-to-coast freight across the United States with complete confidence.',
    description:
      'Connecting the East Coast to the Midwest, Southwest, and Pacific West Coast. We provide reliable interstate linehaul with dual-driver team transit options for high-priority shipments requiring continuous wheels-in-motion transit.',
    features: [
      'Coverage across all 48 contiguous US states',
      'Team-driver service for non-stop transit over 1,500+ miles',
      'Satellite tracking with automated milestone checkpoints',
      'Comprehensive $250,000 cargo insurance included',
    ],
    equipment: 'Aero Sleeper Cabs with 53ft Air-Ride Trailers',
    transitTime: '2 - 4 Days Coast-to-Coast',
    image: '/images/hero_freight_truck_1790608925966.jpg',
    icon: Compass,
  },
  {
    id: 'commercial',
    title: 'Commercial Freight',
    badge: 'B2B Enterprise',
    tagline: 'Tailored logistics for distributors, manufacturers, and warehouses.',
    description:
      'Designed specifically for manufacturing plants, wholesale distributors, and retail fulfillment centers. We handle recurring lane allocations, volume freight contracts, and raw material deliveries with corporate accountability.',
    features: [
      'Customized shipper agreements & corporate Net 30 billing',
      'High-density palletized industrial freight handling',
      'Appointment compliance with retailer strict delivery guidelines',
      'Dedicated logistics manager assigned to your account',
    ],
    equipment: 'Heavy-Duty Tandem Axle Vans & Flatbeds',
    transitTime: 'Custom Schedule',
    icon: Building,
  },
  {
    id: 'scheduled',
    title: 'Scheduled Freight Delivery',
    badge: 'Guaranteed Slots',
    tagline: 'Flexible and reliable recurring appointment-based deliveries.',
    description:
      'Never miss a dock appointment or warehouse receiving window. CK Transports coordinates directly with receiving facilities to guarantee Just-In-Time (JIT) deliveries, preventing costly dock demurrage and congestion.',
    features: [
      'Strict 1-hour appointment window arrival discipline',
      'Automated pre-delivery ETA text and email dispatch alerts',
      'Weekend and early morning dock receiving support',
      'Proof of Delivery (POD) signed and uploaded within 2 hours',
    ],
    equipment: 'Dedicated Regional Equipment',
    transitTime: 'Guaranteed Time Windows',
    icon: CalendarCheck,
  },
  {
    id: 'expedited',
    title: 'Expedited Transportation',
    badge: 'Time-Critical',
    tagline: 'When time matters most: urgent, emergency, and hot-shot freight.',
    description:
      'When your supply chain cannot afford a factory shutdown or missed project deadline, CK Transports deploys expedited linehaul with dedicated dispatch, zero stopovers, and direct express point-to-point transit.',
    features: [
      'Immediate dispatch within 60-90 minutes of booking confirmation',
      'Continuous 24/7 flight-control dispatch monitoring',
      'Direct nonstop transport from pickup shipper to receiver',
      'Guaranteed delivery time commitments with SLA backing',
    ],
    equipment: 'Expedited Straight Trucks & Team Tractors',
    transitTime: 'Express Direct Transit',
    icon: Zap,
  },
  {
    id: 'b2b',
    title: 'Business-to-Business Freight',
    badge: 'Supply Chain Partner',
    tagline: 'End-to-end supply chain integration and strategic carrier partnerships.',
    description:
      'We act as an extension of your operations team. From weekly production line pickups to distribution warehouse transfers, we provide consistent capacity, predictable rates, and high-touch communication.',
    features: [
      'Guaranteed annual and seasonal lane rate stability',
      'EDI & API automated dispatch and invoicing capabilities',
      'Consolidated monthly statements with transparent fuel surcharges',
      'Quarterly operational performance & safety reviews',
    ],
    equipment: 'Comprehensive Modern Fleet',
    transitTime: 'Contract Based',
    icon: Briefcase,
  },
];

interface ServicesSectionProps {
  onSelectServiceForQuote?: (serviceTitle: string) => void;
}

export default function ServicesSection({
  onSelectServiceForQuote,
}: ServicesSectionProps) {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(
    null
  );

  return (
    <section id="services" className="py-20 lg:py-28 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#F57C00] mb-3">
            <span className="w-6 h-0.5 bg-[#F57C00]" />
            <span>Our Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B1F33] tracking-tight leading-tight mb-5">
            Freight Solutions for Your Business
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            CK Transports offers a full range of transportation services tailored to meet the unique needs of our customers. Whether you need a single shipment or ongoing logistics support, we are here to keep your business moving.
          </p>
        </div>

        {/* Featured Visual Grid (Top 4 marquis services with images) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {SERVICES_DATA.slice(0, 4).map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group relative bg-[#F8FAFC] border border-slate-200 rounded-lg overflow-hidden flex flex-col hover:border-[#0B1F33] hover:shadow-xl transition-all duration-300"
              >
                {/* Image header */}
                <div className="relative h-48 w-full bg-slate-200 overflow-hidden">
                  {service.image ? (
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="w-full h-full bg-[#0B1F33] flex items-center justify-center text-slate-400">
                      <Icon className="w-12 h-12 text-[#F57C00]" />
                    </div>
                  )}
                  <div className="absolute top-3 right-3 bg-[#0B1F33]/90 text-white text-[11px] font-semibold px-2.5 py-1 rounded">
                    {service.badge}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="p-1.5 rounded bg-orange-100 text-[#F57C00]">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="text-base font-bold text-[#0B1F33] group-hover:text-[#F57C00] transition-colors">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-600 line-clamp-3 mb-4 leading-relaxed">
                      {service.tagline}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedService(service)}
                      className="text-xs font-bold text-[#0B1F33] group-hover:text-[#F57C00] flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-[11px] text-slate-400 font-medium">
                      {service.transitTime.split(' ')[0]}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Secondary Services Cards (Commercial, Scheduled, Expedited, B2B) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_DATA.slice(4).map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="bg-[#F8FAFC] border border-slate-200 rounded-lg p-5 flex flex-col justify-between hover:border-[#0B1F33] hover:shadow-lg transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2 rounded bg-[#0B1F33] text-[#F57C00]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#0B1F33] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                    {service.tagline}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="text-xs font-bold text-[#0B1F33] hover:text-[#F57C00] flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <span>View Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-[11px] text-slate-400">
                    Reliable
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA for Services */}
        <div className="mt-12 p-6 sm:p-8 rounded-lg bg-[#0B1F33] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-2">
              Need a Custom Transportation Plan?
            </h3>
            <p className="text-sm text-slate-300 max-w-xl">
              From recurring dedicated lanes to specialized cross-dock arrangements, our logistics coordinators design custom shipping agreements tailored to your freight profile.
            </p>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <a
              href="#quote"
              className="px-6 py-3 bg-[#F57C00] hover:bg-[#E65100] text-white font-bold text-xs uppercase tracking-wider rounded transition-all flex items-center gap-2 shadow-md"
            >
              <span>Request A Quote</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Service Details Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors"
              aria-label="Close details"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F57C00] mb-2">
              <span>{selectedService.badge}</span>
              <span>·</span>
              <span>CK Transports Service</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-[#0B1F33] mb-3">
              {selectedService.title}
            </h3>

            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              {selectedService.description}
            </p>

            {/* Spec Box */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-lg bg-[#F8FAFC] border border-slate-200 mb-6 text-xs">
              <div>
                <p className="text-slate-400 font-semibold uppercase tracking-wider text-[10px]">
                  Standard Equipment
                </p>
                <p className="text-slate-800 font-bold mt-0.5">
                  {selectedService.equipment}
                </p>
              </div>
              <div>
                <p className="text-slate-400 font-semibold uppercase tracking-wider text-[10px]">
                  Estimated Transit Time
                </p>
                <p className="text-slate-800 font-bold mt-0.5">
                  {selectedService.transitTime}
                </p>
              </div>
            </div>

            {/* Features List */}
            <div className="mb-8">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                Key Operational Capabilities
              </h4>
              <ul className="space-y-2.5">
                {selectedService.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                    <div className="p-0.5 rounded-full bg-emerald-100 text-emerald-700 mt-0.5 shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-slate-200">
              <button
                onClick={() => setSelectedService(null)}
                className="w-full sm:w-auto px-5 py-2.5 rounded text-xs font-semibold text-slate-600 hover:bg-slate-100"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const serviceName = selectedService.title;
                  setSelectedService(null);
                  if (onSelectServiceForQuote) {
                    onSelectServiceForQuote(serviceName);
                  }
                  const el = document.getElementById('quote');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto px-6 py-2.5 rounded text-xs font-bold uppercase tracking-wider bg-[#F57C00] hover:bg-[#E65100] text-white flex items-center justify-center gap-2 shadow-md cursor-pointer"
              >
                <span>Quote This Service</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
