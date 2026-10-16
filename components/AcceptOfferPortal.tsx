'use client';

import React, { useState } from 'react';
import {
  CreditCard,
  FileCheck,
  CheckCircle2,
  ShieldCheck,
  Lock,
  Download,
  Printer,
  Search,
  Building,
  Calendar,
  MapPin,
  Truck,
  DollarSign,
  AlertCircle,
  ExternalLink,
  ChevronRight,
  Info,
} from 'lucide-react';

interface QuoteOffer {
  quoteId: string;
  customerName: string;
  companyName: string;
  email: string;
  phone: string;
  origin: string;
  destination: string;
  freightType: string;
  weight: string;
  palletCount: number;
  pickupDate: string;
  deliveryDate: string;
  linehaulRate: number;
  fuelSurcharge: number;
  accessorials: number;
  totalAmount: number;
  status: 'PENDING_ACCEPTANCE' | 'OFFER_ACCEPTED' | 'PAID_DISPATCHED';
}

const SAMPLE_OFFER: QuoteOffer = {
  quoteId: 'CK-84920',
  customerName: 'Marcus Vance',
  companyName: 'Apex Industrial Supply Corp',
  email: 'm.vance@apexindustrial.com',
  phone: '(555) 392-8812',
  origin: 'Elizabeth, NJ 07201 (Industrial Pkwy)',
  destination: 'Atlanta, GA 30303 (Fulton Logistics Hub)',
  freightType: 'Full Truckload (FTL) - 53ft Dry Van',
  weight: '38,500 lbs',
  palletCount: 24,
  pickupDate: 'October 2, 2026',
  deliveryDate: 'October 4, 2026',
  linehaulRate: 2150.0,
  fuelSurcharge: 280.0,
  accessorials: 0.0,
  totalAmount: 2430.0,
  status: 'PENDING_ACCEPTANCE',
};

interface AcceptOfferPortalProps {
  initialQuoteId?: string;
  onPaymentSuccess?: (loadId: string) => void;
  onOpenLegal?: (policyType: string) => void;
}

export default function AcceptOfferPortal({
  initialQuoteId,
  onPaymentSuccess,
  onOpenLegal,
}: AcceptOfferPortalProps) {
  const [searchQuoteId, setSearchQuoteId] = useState(initialQuoteId || 'CK-84920');
  const [offer, setOffer] = useState<QuoteOffer>(SAMPLE_OFFER);
  const [step, setStep] = useState<'REVIEW' | 'ACCEPT_SIGN' | 'PAYMENT' | 'RECEIPT'>('REVIEW');

  // Signer form
  const [signerName, setSignerName] = useState(offer.customerName);
  const [signerTitle, setSignerTitle] = useState('Director of Logistics');
  const [termsAgreed, setTermsAgreed] = useState(false);
  const [typedSignature, setTypedSignature] = useState(offer.customerName);

  // Payment form
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'ach' | 'net30'>('card');
  const [cardNumber, setCardNumber] = useState('4242 •••• •••• 4242');
  const [cardExpiry, setCardExpiry] = useState('08/28');
  const [cardCvc, setCardCvc] = useState('884');
  const [cardholderName, setCardholderName] = useState(offer.customerName);
  const [billingZip, setBillingZip] = useState('07201');
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [transactionId, setTransactionId] = useState('');

  const handleLookup = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuoteId.trim()) return;
    // For demonstration, refresh offer or populate with searched quote
    setOffer({
      ...SAMPLE_OFFER,
      quoteId: searchQuoteId.toUpperCase(),
    });
    setStep('REVIEW');
  };

  const handleAcceptOffer = (e: React.FormEvent) => {
    e.preventDefault();
    if (!termsAgreed || !typedSignature.trim()) {
      alert('Please agree to the carrier terms and provide your authorized signature.');
      return;
    }
    setOffer((prev) => ({ ...prev, status: 'OFFER_ACCEPTED' }));
    setStep('PAYMENT');
  };

  const handleProcessPayment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessingPayment(true);

    setTimeout(() => {
      const generatedTxn = 'TXN-CK-' + Math.floor(1000000 + Math.random() * 9000000);
      setTransactionId(generatedTxn);
      setOffer((prev) => ({ ...prev, status: 'PAID_DISPATCHED' }));
      setIsProcessingPayment(false);
      setStep('RECEIPT');

      if (onPaymentSuccess) {
        onPaymentSuccess(offer.quoteId);
      }
    }, 1500);
  };

  return (
    <section id="accept-offer" className="py-20 bg-[#071521] text-white scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-emerald-950/80 border border-emerald-700/60 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-4 h-4" />
            <span>Shipper Portal & Payment Gateway</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Accept Rate Offer & Process Payment
          </h2>
          <p className="text-sm text-slate-300 mt-2">
            Review your official CK Transports Rate Confirmation, execute the freight carriage agreement, and complete secure payment processing.
          </p>
        </div>

        {/* Lookup Bar */}
        <div className="bg-[#0B1F33] p-4 rounded-xl border border-slate-700/80 shadow-lg mb-8 max-w-2xl mx-auto">
          <form onSubmit={handleLookup} className="flex flex-col sm:flex-row items-center gap-3">
            <div className="relative flex-1 w-full">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="text"
                value={searchQuoteId}
                onChange={(e) => setSearchQuoteId(e.target.value)}
                placeholder="Enter Quote # or Rate Conf (e.g. CK-84920)"
                className="w-full bg-[#071521] border border-slate-700 rounded-lg pl-10 pr-4 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#F57C00]"
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto px-5 py-2 bg-[#F57C00] hover:bg-[#E65100] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors shrink-0"
            >
              Lookup Offer
            </button>
          </form>
          <div className="flex items-center justify-between text-[11px] text-slate-400 mt-2 px-1">
            <span>Preloaded: Rate Confirmation #{offer.quoteId}</span>
            <span className="text-emerald-400 font-semibold">Ready for Underwriting Verification</span>
          </div>
        </div>

        {/* Multi-Step Flow Indicator */}
        <div className="grid grid-cols-4 gap-2 mb-8 text-center text-xs">
          <div
            className={`py-2 rounded border font-semibold ${
              step === 'REVIEW'
                ? 'bg-[#F57C00] text-white border-[#F57C00]'
                : 'bg-[#0B1F33] text-slate-300 border-slate-700'
            }`}
          >
            1. Rate Review
          </div>
          <div
            className={`py-2 rounded border font-semibold ${
              step === 'ACCEPT_SIGN'
                ? 'bg-[#F57C00] text-white border-[#F57C00]'
                : 'bg-[#0B1F33] text-slate-300 border-slate-700'
            }`}
          >
            2. Accept & Sign
          </div>
          <div
            className={`py-2 rounded border font-semibold ${
              step === 'PAYMENT'
                ? 'bg-[#F57C00] text-white border-[#F57C00]'
                : 'bg-[#0B1F33] text-slate-300 border-slate-700'
            }`}
          >
            3. Secure Checkout
          </div>
          <div
            className={`py-2 rounded border font-semibold ${
              step === 'RECEIPT'
                ? 'bg-emerald-600 text-white border-emerald-600'
                : 'bg-[#0B1F33] text-slate-300 border-slate-700'
            }`}
          >
            4. Paid BOL & Receipt
          </div>
        </div>

        {/* STEP 1: RATE CONFIRMATION REVIEW */}
        {step === 'REVIEW' && (
          <div className="bg-[#0B1F33] rounded-xl border border-slate-700/80 shadow-2xl overflow-hidden">
            {/* Document Header */}
            <div className="p-6 sm:p-8 border-b border-slate-700/80 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-[#102A45]/50">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xl font-black text-white">CK TRANSPORTS</span>
                  <span className="text-xs bg-[#F57C00] text-white font-bold px-2 py-0.5 rounded">
                    RATE CONFIRMATION
                  </span>
                </div>
                <p className="text-xs text-slate-300 mt-1">
                  2 Penn Plaza E, Newark, NJ 07105 · DOT #3894211 · MC #1429810
                </p>
              </div>

              <div className="text-right sm:text-right">
                <p className="text-xs text-slate-400">Confirmation Reference</p>
                <p className="text-lg font-mono font-bold text-white tracking-wider">
                  #{offer.quoteId}
                </p>
                <p className="text-[11px] text-emerald-400">Status: Pending Shipper Acceptance</p>
              </div>
            </div>

            {/* Shipper & Carrier Details */}
            <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-6 border-b border-slate-700/60 text-xs">
              <div className="p-4 rounded-lg bg-[#071521] border border-slate-800">
                <p className="font-bold text-slate-400 uppercase tracking-wider text-[10px] mb-2">
                  Shipper / Bill-To Party
                </p>
                <p className="text-sm font-bold text-white">{offer.companyName}</p>
                <p className="text-slate-300">Attn: {offer.customerName}</p>
                <p className="text-slate-300">{offer.email}</p>
                <p className="text-slate-300">{offer.phone}</p>
              </div>

              <div className="p-4 rounded-lg bg-[#071521] border border-slate-800">
                <p className="font-bold text-slate-400 uppercase tracking-wider text-[10px] mb-2">
                  Carrier Information
                </p>
                <p className="text-sm font-bold text-white">CK Transports LLC</p>
                <p className="text-slate-300">2 Penn Plaza E, Newark, NJ 07105</p>
                <p className="text-slate-300">Dispatch: 973-200-7886</p>
                <p className="text-slate-300">Billing: info@cktransports.us</p>
              </div>
            </div>

            {/* Lane & Shipment Specifications */}
            <div className="p-6 sm:p-8 border-b border-slate-700/60">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                Routing & Cargo Specifications
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="flex items-start gap-3 p-3 rounded bg-[#071521]/70 border border-slate-800">
                  <div className="p-2 rounded bg-slate-800 text-[#F57C00]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-semibold">
                      Pickup Origin
                    </span>
                    <p className="font-bold text-white mt-0.5">{offer.origin}</p>
                    <p className="text-[11px] text-slate-400">Date: {offer.pickupDate}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded bg-[#071521]/70 border border-slate-800">
                  <div className="p-2 rounded bg-slate-800 text-emerald-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-semibold">
                      Delivery Destination
                    </span>
                    <p className="font-bold text-white mt-0.5">{offer.destination}</p>
                    <p className="text-[11px] text-slate-400">ETA: {offer.deliveryDate}</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4 text-xs">
                <div className="p-3 rounded bg-[#071521]/70 border border-slate-800">
                  <span className="text-[10px] text-slate-400 uppercase">Service Type</span>
                  <p className="font-bold text-white">{offer.freightType}</p>
                </div>
                <div className="p-3 rounded bg-[#071521]/70 border border-slate-800">
                  <span className="text-[10px] text-slate-400 uppercase">Weight / Capacity</span>
                  <p className="font-bold text-white">{offer.weight}</p>
                </div>
                <div className="p-3 rounded bg-[#071521]/70 border border-slate-800">
                  <span className="text-[10px] text-slate-400 uppercase">Pallet Count</span>
                  <p className="font-bold text-white">{offer.palletCount} Pallets (Standard 48x40)</p>
                </div>
                <div className="p-3 rounded bg-[#071521]/70 border border-slate-800">
                  <span className="text-[10px] text-slate-400 uppercase">Cargo Insurance</span>
                  <p className="font-bold text-emerald-400">$250,000 Included</p>
                </div>
              </div>
            </div>

            {/* Line Item Accounting Breakdown */}
            <div className="p-6 sm:p-8 border-b border-slate-700/60 bg-[#071521]/40">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Freight Charges Breakdown (USD)
              </h4>
              <div className="divide-y divide-slate-800 text-xs">
                <div className="py-2.5 flex justify-between items-center">
                  <span className="text-slate-300">Base Linehaul Transportation (820 miles)</span>
                  <span className="font-mono font-bold text-white">
                    ${offer.linehaulRate.toFixed(2)}
                  </span>
                </div>
                <div className="py-2.5 flex justify-between items-center">
                  <span className="text-slate-300">DOE Indexed Fuel Surcharge</span>
                  <span className="font-mono font-bold text-white">
                    ${offer.fuelSurcharge.toFixed(2)}
                  </span>
                </div>
                <div className="py-2.5 flex justify-between items-center">
                  <span className="text-slate-300">Accessorials & Standard Dock Service</span>
                  <span className="font-mono font-bold text-emerald-400">$0.00 (Standard)</span>
                </div>
                <div className="py-3.5 flex justify-between items-center text-sm font-bold bg-[#0B1F33]/80 px-3 rounded mt-2">
                  <span className="text-white">Total Agreed Freight Rate:</span>
                  <span className="text-xl font-mono font-black text-[#F57C00]">
                    ${offer.totalAmount.toFixed(2)} USD
                  </span>
                </div>
              </div>
            </div>

            {/* Review Action Footer */}
            <div className="p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#071521]">
              <div className="text-xs text-slate-400">
                <span>By continuing, you will review the carriage terms and provide authorization.</span>
              </div>
              <button
                onClick={() => setStep('ACCEPT_SIGN')}
                className="w-full sm:w-auto px-8 py-3.5 bg-[#F57C00] hover:bg-[#E65100] text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                <span>Accept Offer & Proceed To Sign</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: SHIPPER AUTHORIZATION & SIGNATURE */}
        {step === 'ACCEPT_SIGN' && (
          <div className="bg-[#0B1F33] rounded-xl border border-slate-700/80 shadow-2xl p-6 sm:p-8">
            <div className="max-w-2xl mx-auto">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F57C00] mb-2">
                <FileCheck className="w-4 h-4" />
                <span>Step 2: Legal Authorization & Signature</span>
              </div>
              <h3 className="text-2xl font-black text-white mb-2">
                Sign Rate Confirmation #{offer.quoteId}
              </h3>
              <p className="text-xs text-slate-300 mb-6">
                Please review the terms of carriage and enter your electronic signature to bind this freight agreement.
              </p>

              {/* Carrier Agreement Box */}
              <div className="p-4 rounded-lg bg-[#071521] border border-slate-800 text-xs text-slate-300 max-h-48 overflow-y-auto space-y-2 mb-6">
                <p className="font-bold text-white text-[11px]">
                  CK TRANSPORTS FREIGHT CARRIAGE & RATE AGREEMENT:
                </p>
                <p>
                  1. <strong>Equipment Commitment:</strong> Upon signature and payment receipt, CK Transports dispatches dedicated equipment for pickup on {offer.pickupDate}.
                </p>
                <p>
                  2. <strong>Detention & Demurrage:</strong> Shipper and receiver are entitled to two (2) hours of free loading and unloading time. Detention will be charged at seventy-five dollars ($75.00 USD) per hour thereafter.
                </p>
                <p>
                  3. <strong>Cargo Liability:</strong> Carrier maintains $250,000.00 primary commercial motor cargo insurance. Shipper certifies goods are properly packaged and secured.
                </p>
                <p>
                  4. <strong>Truck Ordered Not Used (TONU):</strong> Cancellations made less than 24 hours prior to scheduled pickup window are subject to a $200.00 TONU fee.
                </p>
                <p>
                  5. <strong>Payment:</strong> Rates are quoted in United States Dollars (USD). Authorized credit card or ACH will be processed immediately upon execution.
                </p>
              </div>

              {/* Signature Form */}
              <form onSubmit={handleAcceptOffer} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">
                      Authorized Signer Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={signerName}
                      onChange={(e) => {
                        setSignerName(e.target.value);
                        setTypedSignature(e.target.value);
                      }}
                      className="w-full bg-[#071521] border border-slate-700 rounded p-2.5 text-white text-xs focus:border-[#F57C00] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">
                      Signer Corporate Title *
                    </label>
                    <input
                      type="text"
                      required
                      value={signerTitle}
                      onChange={(e) => setSignerTitle(e.target.value)}
                      placeholder="e.g. Director of Logistics, Shipping Mgr"
                      className="w-full bg-[#071521] border border-slate-700 rounded p-2.5 text-white text-xs focus:border-[#F57C00] focus:outline-none"
                    />
                  </div>
                </div>

                {/* E-Signature Box */}
                <div>
                  <label className="block text-slate-300 font-semibold text-xs mb-1">
                    Electronic Signature (Type Your Full Legal Name) *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      value={typedSignature}
                      onChange={(e) => setTypedSignature(e.target.value)}
                      className="w-full bg-[#071521] border border-slate-700 rounded p-3 text-lg font-serif italic text-[#F57C00] tracking-wide focus:border-[#F57C00] focus:outline-none"
                    />
                    <div className="absolute right-3 top-3 text-[10px] text-slate-400 font-mono">
                      Timestamp: {new Date().toLocaleDateString()}
                    </div>
                  </div>
                  <p className="text-[10px] text-slate-400 mt-1">
                    Valid ESIGN Act compliant digital signature recorded with IP verification.
                  </p>
                </div>

                {/* Agreement Checkbox */}
                <div className="p-3 rounded bg-[#071521]/70 border border-slate-800 flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="termsAgreement"
                    required
                    checked={termsAgreed}
                    onChange={(e) => setTermsAgreed(e.target.checked)}
                    className="mt-1 w-4 h-4 rounded border-slate-600 text-[#F57C00] focus:ring-[#F57C00]"
                  />
                  <label htmlFor="termsAgreement" className="text-xs text-slate-300 cursor-pointer">
                    I confirm that I am authorized on behalf of <strong>{offer.companyName}</strong> to accept this Freight Rate Confirmation of <strong>${offer.totalAmount.toFixed(2)} USD</strong> and agree to CK Transports Terms of Carriage, Cargo Policies, and Detention Rules.
                  </label>
                </div>

                {/* Navigation Buttons */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-700/60">
                  <button
                    type="button"
                    onClick={() => setStep('REVIEW')}
                    className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white"
                  >
                    Back to Review
                  </button>
                  <button
                    type="submit"
                    className="px-8 py-3 bg-[#F57C00] hover:bg-[#E65100] text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-all flex items-center gap-2 shadow-lg"
                  >
                    <span>Execute Agreement & Continue</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* STEP 3: PAYMENT GATEWAY CHECKOUT */}
        {step === 'PAYMENT' && (
          <div className="bg-[#0B1F33] rounded-xl border border-slate-700/80 shadow-2xl p-6 sm:p-8">
            <div className="max-w-2xl mx-auto">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400">
                  <Lock className="w-4 h-4" />
                  <span>256-Bit SSL Encrypted Payment</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-400">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>PCI-DSS Level 1 Compliant</span>
                </div>
              </div>

              <h3 className="text-2xl font-black text-white mb-1">
                Process Payment for Load #{offer.quoteId}
              </h3>
              <p className="text-xs text-slate-300 mb-6">
                Total Charge: <strong className="text-white text-base">${offer.totalAmount.toFixed(2)} USD</strong> (Includes linehaul, fuel surcharge, and carrier dispatch).
              </p>

              {/* Payment Method Selector */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`p-3 rounded-lg border text-xs font-bold flex flex-col items-center gap-1 transition-all ${
                    paymentMethod === 'card'
                      ? 'bg-[#16375A] text-white border-[#F57C00] shadow-md'
                      : 'bg-[#071521] text-slate-400 border-slate-800 hover:text-slate-200'
                  }`}
                >
                  <CreditCard className="w-5 h-5 text-[#F57C00]" />
                  <span>Credit / Debit Card</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('ach')}
                  className={`p-3 rounded-lg border text-xs font-bold flex flex-col items-center gap-1 transition-all ${
                    paymentMethod === 'ach'
                      ? 'bg-[#16375A] text-white border-[#F57C00] shadow-md'
                      : 'bg-[#071521] text-slate-400 border-slate-800 hover:text-slate-200'
                  }`}
                >
                  <Building className="w-5 h-5 text-emerald-400" />
                  <span>ACH Bank Transfer</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('net30')}
                  className={`p-3 rounded-lg border text-xs font-bold flex flex-col items-center gap-1 transition-all ${
                    paymentMethod === 'net30'
                      ? 'bg-[#16375A] text-white border-[#F57C00] shadow-md'
                      : 'bg-[#071521] text-slate-400 border-slate-800 hover:text-slate-200'
                  }`}
                >
                  <Calendar className="w-5 h-5 text-amber-400" />
                  <span>Corporate Net 30</span>
                </button>
              </div>

              {/* Card Form */}
              {paymentMethod === 'card' && (
                <form onSubmit={handleProcessPayment} className="space-y-4 text-xs">
                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">
                      Cardholder Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={cardholderName}
                      onChange={(e) => setCardholderName(e.target.value)}
                      className="w-full bg-[#071521] border border-slate-700 rounded p-2.5 text-white focus:border-[#F57C00] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">
                      Card Number
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        placeholder="•••• •••• •••• ••••"
                        className="w-full bg-[#071521] border border-slate-700 rounded p-2.5 pr-20 text-white font-mono focus:border-[#F57C00] focus:outline-none"
                      />
                      <div className="absolute right-3 top-2.5 flex items-center gap-1 text-[10px] text-slate-400 font-bold">
                        <span className="bg-slate-800 px-1 py-0.5 rounded text-blue-400">VISA</span>
                        <span className="bg-slate-800 px-1 py-0.5 rounded text-red-400">MC</span>
                        <span className="bg-slate-800 px-1 py-0.5 rounded text-cyan-400">AMEX</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-slate-300 font-semibold mb-1">
                        Expiration (MM/YY)
                      </label>
                      <input
                        type="text"
                        required
                        value={cardExpiry}
                        onChange={(e) => setCardExpiry(e.target.value)}
                        placeholder="MM/YY"
                        className="w-full bg-[#071521] border border-slate-700 rounded p-2.5 text-white font-mono focus:border-[#F57C00] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-300 font-semibold mb-1">
                        Security Code (CVV / CVC)
                      </label>
                      <input
                        type="password"
                        required
                        maxLength={4}
                        value={cardCvc}
                        onChange={(e) => setCardCvc(e.target.value)}
                        placeholder="3 or 4 digits"
                        className="w-full bg-[#071521] border border-slate-700 rounded p-2.5 text-white font-mono focus:border-[#F57C00] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">
                      Billing Postal Code
                    </label>
                    <input
                      type="text"
                      required
                      value={billingZip}
                      onChange={(e) => setBillingZip(e.target.value)}
                      placeholder="07201"
                      className="w-full bg-[#071521] border border-slate-700 rounded p-2.5 text-white font-mono focus:border-[#F57C00] focus:outline-none"
                    />
                  </div>

                  {/* Merchant Descriptor & Refund Notice */}
                  <div className="p-3 rounded bg-[#071521] border border-slate-800 text-[11px] text-slate-400 flex items-start gap-2">
                    <Info className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    <span>
                      Charge will appear on your bank statement as: <strong>CK TRANSPORTS LLC</strong>. Official payment receipt and electronic Bill of Lading (BOL) will be immediately generated.
                    </span>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-700/60">
                    <button
                      type="button"
                      onClick={() => setStep('ACCEPT_SIGN')}
                      className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={isProcessingPayment}
                      className="px-8 py-3.5 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-all flex items-center gap-2 shadow-lg"
                    >
                      {isProcessingPayment ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Processing Transaction...</span>
                        </>
                      ) : (
                        <>
                          <Lock className="w-3.5 h-3.5" />
                          <span>Pay ${offer.totalAmount.toFixed(2)} USD & Dispatch</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}

              {/* ACH Form */}
              {paymentMethod === 'ach' && (
                <div className="p-4 rounded-lg bg-[#071521] border border-slate-800 text-xs space-y-3">
                  <p className="font-bold text-white">Direct Corporate ACH / Wire Instructions:</p>
                  <div className="divide-y divide-slate-800">
                    <div className="py-2 flex justify-between">
                      <span className="text-slate-400">Beneficiary Bank:</span>
                      <span className="font-semibold text-white">JPMorgan Chase Bank, N.A.</span>
                    </div>
                    <div className="py-2 flex justify-between">
                      <span className="text-slate-400">Account Name:</span>
                      <span className="font-semibold text-white">CK Transports LLC</span>
                    </div>
                    <div className="py-2 flex justify-between">
                      <span className="text-slate-400">Routing Number (ABA):</span>
                      <span className="font-mono font-bold text-[#F57C00]">021000021</span>
                    </div>
                    <div className="py-2 flex justify-between">
                      <span className="text-slate-400">Account Number:</span>
                      <span className="font-mono font-bold text-white">•••• •••• 8419</span>
                    </div>
                    <div className="py-2 flex justify-between">
                      <span className="text-slate-400">Payment Reference:</span>
                      <span className="font-mono font-bold text-emerald-400">#{offer.quoteId}</span>
                    </div>
                  </div>
                  <button
                    onClick={handleProcessPayment}
                    className="w-full mt-4 py-3 bg-[#F57C00] hover:bg-[#E65100] text-white font-bold text-xs uppercase tracking-wider rounded"
                  >
                    Confirm ACH Initiation & Issue Dispatch
                  </button>
                </div>
              )}

              {/* Net 30 Option */}
              {paymentMethod === 'net30' && (
                <div className="p-4 rounded-lg bg-[#071521] border border-slate-800 text-xs space-y-3">
                  <p className="font-bold text-white">Corporate Net 30 Billing Account:</p>
                  <p className="text-slate-300">
                    If your company has an approved credit line with CK Transports, this load will be invoiced on standard Net 30 terms following delivery and POD upload.
                  </p>
                  <button
                    onClick={handleProcessPayment}
                    className="w-full mt-4 py-3 bg-[#F57C00] hover:bg-[#E65100] text-white font-bold text-xs uppercase tracking-wider rounded"
                  >
                    Authorize on Net 30 Account
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* STEP 4: RECEIPT & OFFICIAL BILL OF LADING */}
        {step === 'RECEIPT' && (
          <div className="bg-[#0B1F33] rounded-xl border border-emerald-600/60 shadow-2xl p-6 sm:p-8 text-center max-w-2xl mx-auto animate-fade-in">
            <div className="w-16 h-16 bg-emerald-950 border border-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 text-emerald-400">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="inline-block px-3 py-1 rounded bg-emerald-900/60 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-2">
              Payment Completed · Carrier Dispatched
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">
              Rate Offer Accepted & Paid!
            </h3>
            <p className="text-xs text-slate-300 mb-6 max-w-md mx-auto">
              Thank you for trusting CK Transports. Your transaction has been approved, equipment is locked for dispatch, and a confirmation email has been dispatched to {offer.email}.
            </p>

            {/* Receipt Summary Card */}
            <div className="bg-[#071521] p-4 rounded-lg border border-slate-800 text-left text-xs mb-6 divide-y divide-slate-800">
              <div className="pb-2 flex justify-between">
                <span className="text-slate-400">Transaction Reference:</span>
                <span className="font-mono font-bold text-emerald-400">{transactionId}</span>
              </div>
              <div className="py-2 flex justify-between">
                <span className="text-slate-400">Load Confirmation:</span>
                <span className="font-mono font-bold text-white">#{offer.quoteId}</span>
              </div>
              <div className="py-2 flex justify-between">
                <span className="text-slate-400">Amount Charged:</span>
                <span className="font-mono font-bold text-white">${offer.totalAmount.toFixed(2)} USD</span>
              </div>
              <div className="py-2 flex justify-between">
                <span className="text-slate-400">Merchant Operating Address:</span>
                <span className="text-slate-300">2 Penn Plaza E, Newark, NJ 07105</span>
              </div>
              <div className="pt-2 flex justify-between">
                <span className="text-slate-400">Scheduled Pickup:</span>
                <span className="text-white font-semibold">{offer.pickupDate}</span>
              </div>
            </div>

            {/* Actions: Print & BOL */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() => window.print()}
                className="w-full sm:w-auto px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold rounded flex items-center justify-center gap-2 border border-slate-700 cursor-pointer"
              >
                <Printer className="w-4 h-4" />
                <span>Print Official Receipt</span>
              </button>

              <button
                onClick={() => {
                  const el = document.getElementById('tracking');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto px-6 py-2.5 bg-[#F57C00] hover:bg-[#E65100] text-white text-xs font-bold uppercase tracking-wider rounded flex items-center justify-center gap-2 shadow-md cursor-pointer"
              >
                <Truck className="w-4 h-4" />
                <span>Track This Freight</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
