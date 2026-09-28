'use client';

import React from 'react';
import { X, ShieldCheck, FileText, RefreshCw, CreditCard } from 'lucide-react';

export type PolicyType = 'terms' | 'privacy' | 'refund' | 'payment' | null;

interface LegalComplianceModalProps {
  activePolicy: PolicyType;
  onClose: () => void;
}

export default function LegalComplianceModal({
  activePolicy,
  onClose,
}: LegalComplianceModalProps) {
  if (!activePolicy) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#0B1F33] text-white rounded-xl shadow-2xl max-w-3xl w-full max-h-[85vh] overflow-y-auto border border-slate-700/80 p-6 sm:p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6 pb-4 border-b border-slate-700">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F57C00] mb-1">
            <ShieldCheck className="w-4 h-4" />
            <span>CK Transports · Merchant & Legal Governance</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-white">
            {activePolicy === 'terms' && 'Terms of Service & Freight Carriage Agreement'}
            {activePolicy === 'privacy' && 'Privacy & Data Protection Policy'}
            {activePolicy === 'refund' && 'Cancellation, Refund & TONU Policy'}
            {activePolicy === 'payment' && 'Payment Gateway & Billing Terms'}
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Effective Date: January 1, 2026 · Operating Address: 308 Evergreen Forest Blvd, Avenel, NJ 07001
          </p>
        </div>

        {/* Content Body */}
        <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
          {/* TERMS OF SERVICE */}
          {activePolicy === 'terms' && (
            <>
              <div>
                <h3 className="text-white font-bold mb-1">1. Scope and Authority</h3>
                <p>
                  These Terms of Service govern all freight transportation, motor carriage, freight brokerage, and logistics services provided by CK Transports LLC (&quot;Carrier&quot;), operating under FMCSA authority (DOT #3894211 / MC #1429810). By booking a shipment, accepting a Rate Confirmation, or issuing a Bill of Lading, Shipper agrees to be legally bound by these terms.
                </p>
              </div>

              <div>
                <h3 className="text-white font-bold mb-1">2. Rate Confirmations & Contract Execution</h3>
                <p>
                  Each Rate Confirmation executed through our online Shipper Portal or via electronic signature constitutes an independent contract for carriage. Quoted rates include linehaul transportation and standard fuel surcharges based on the U.S. Department of Energy (DOE) diesel index unless otherwise expressly stipulated.
                </p>
              </div>

              <div>
                <h3 className="text-white font-bold mb-1">3. Loading, Unloading & Detention</h3>
                <p>
                  Shipper and Consignee shall be allowed two (2) hours of complimentary free time for loading and two (2) hours of free time for unloading. Detention time extending beyond the initial free time window shall be assessed at the rate of seventy-five dollars ($75.00 USD) per hour, billed in fifteen-minute increments.
                </p>
              </div>

              <div>
                <h3 className="text-white font-bold mb-1">4. Carrier Cargo Liability & Insurance</h3>
                <p>
                  Carrier liability for cargo loss, damage, or delay is governed by 49 U.S.C. § 14706 (the Carmack Amendment). Carrier maintains primary commercial motor cargo insurance of $250,000.00 USD per conveyance. Shipper is responsible for properly declaring high-value cargo exceeding standard thresholds prior to dispatch.
                </p>
              </div>

              <div>
                <h3 className="text-white font-bold mb-1">5. Governing Law & Jurisdiction</h3>
                <p>
                  This agreement shall be governed by the laws of the State of New Jersey and applicable federal transportation statutes. Any dispute arising under or in connection with this agreement shall be submitted to the exclusive jurisdiction of the state or federal courts located in Middlesex County, New Jersey.
                </p>
              </div>
            </>
          )}

          {/* PRIVACY POLICY */}
          {activePolicy === 'privacy' && (
            <>
              <div>
                <h3 className="text-white font-bold mb-1">1. Information We Collect</h3>
                <p>
                  CK Transports collects business information necessary to arrange freight transport, including company names, physical pickup and delivery addresses, authorized signer names, business phone numbers, email addresses, and shipment cargo specifications.
                </p>
              </div>

              <div>
                <h3 className="text-white font-bold mb-1">2. Payment & Credit Card Data Security</h3>
                <p>
                  We comply strictly with the Payment Card Industry Data Security Standard (PCI-DSS Level 1). When processing payments through our portal, credit card numbers, CVVs, and expiration dates are encrypted in transit via Transport Layer Security (TLS 1.3 / 256-bit SSL) and transmitted directly to our authorized payment processor. We do not store full raw credit card numbers on our local web servers.
                </p>
              </div>

              <div>
                <h3 className="text-white font-bold mb-1">3. Geolocation & Real-Time Tracking Data</h3>
                <p>
                  Electronic logging device (ELD) and satellite GPS tracking coordinates are utilized strictly for verifying shipment transit milestones and providing accurate Estimated Time of Arrival (ETA) updates to authorized shippers and consignees.
                </p>
              </div>

              <div>
                <h3 className="text-white font-bold mb-1">4. Non-Disclosure & Third-Party Sharing</h3>
                <p>
                  We never sell, rent, or trade customer information to third-party marketing companies. Data is shared exclusively with operational personnel, dispatched drivers, and financial settlement gateways necessary to complete freight transit and invoicing.
                </p>
              </div>
            </>
          )}

          {/* REFUND, CANCELLATION & TONU POLICY */}
          {activePolicy === 'refund' && (
            <>
              <div>
                <h3 className="text-white font-bold mb-1">1. Cancellation Prior to Equipment Dispatch</h3>
                <p>
                  A shipper may cancel a booked freight order without financial penalty provided written cancellation is received by CK Transports dispatch at least twenty-four (24) hours prior to the scheduled pickup time. Any advance prepayment will be refunded in full via the original payment method within three to five (3-5) business days.
                </p>
              </div>

              <div>
                <h3 className="text-white font-bold mb-1">2. Truck Ordered Not Used (TONU) Policy</h3>
                <p>
                  If a truck is dispatched to the designated pickup location and the load is cancelled by the shipper, unavailable, or unable to be loaded through no fault of the Carrier, a standard Truck Ordered Not Used (&quot;TONU&quot;) fee of $200.00 USD shall apply to compensate driver linehaul travel and deadhead fuel expenses.
                </p>
              </div>

              <div>
                <h3 className="text-white font-bold mb-1">3. Cargo Claims & Resolution Process</h3>
                <p>
                  In the event of physical cargo damage or shortage, notice of intent to claim must be noted on the Bill of Lading (BOL) upon delivery. A formal written claim supported by photographs, original purchase invoices, and inspection reports must be submitted to claims@cktransports.com within nine (9) months of delivery in accordance with federal Carmack Amendment regulations. Claims are investigated and resolved within thirty (30) business days.
                </p>
              </div>

              <div>
                <h3 className="text-white font-bold mb-1">4. Refund Processing Timeline</h3>
                <p>
                  Approved refunds, accessorial adjustments, or billing corrections are credited back to the customer&apos;s original credit card or bank account within 3 to 7 business days following formal claim approval.
                </p>
              </div>
            </>
          )}

          {/* PAYMENT & MERCHANT TERMS */}
          {activePolicy === 'payment' && (
            <>
              <div>
                <h3 className="text-white font-bold mb-1">1. Accepted Payment Methods</h3>
                <p>
                  CK Transports accepts major credit and debit cards (Visa, MasterCard, American Express, Discover), Corporate ACH electronic transfers, wire transfers, and approved Corporate Net 30 billing accounts. All transactions are denominated strictly in United States Dollars (USD).
                </p>
              </div>

              <div>
                <h3 className="text-white font-bold mb-1">2. Credit Card Merchant Statement Descriptor</h3>
                <p>
                  All credit and debit card transactions processed through our online gateway or billing terminals will appear on your financial account statement under the authorized merchant descriptor: <strong>CK TRANSPORTS LLC</strong> or <strong>CK TRANSPORTS FREIGHT</strong>.
                </p>
              </div>

              <div>
                <h3 className="text-white font-bold mb-1">3. Corporate Credit & Net 30 Accounts</h3>
                <p>
                  Shippers seeking Net 15 or Net 30 credit terms must submit a completed corporate credit application and standard trade references. Payments past due beyond thirty (30) calendar days are subject to a late service charge of 1.5% per month (or the maximum allowed by law).
                </p>
              </div>

              <div>
                <h3 className="text-white font-bold mb-1">4. Invoice Inquiries & Billing Disputes</h3>
                <p>
                  If you identify an error on your rate confirmation or invoice, please contact our billing department immediately at <a href="mailto:billing@cktransports.com" className="text-[#F57C00] underline">billing@cktransports.com</a> or call (856) 555-0123. Billing inquiries are reviewed and resolved by a designated controller within two (2) business days.
                </p>
              </div>
            </>
          )}
        </div>

        {/* Modal Footer */}
        <div className="mt-6 pt-4 border-t border-slate-700 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-[#F57C00] hover:bg-[#E65100] text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors"
          >
            I Understand & Close
          </button>
        </div>
      </div>
    </div>
  );
}
