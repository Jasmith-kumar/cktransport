import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'CK Transports | Nationwide Freight & Commercial Trucking Solutions',
  description: 'CK Transports provides dependable, efficient, and professional freight transportation solutions across the United States. Full Truckload (FTL), Less Than Truckload (LTL), regional, expedited, and B2B shipping.',
  keywords: 'CK Transports, freight transportation, trucking company, FTL shipping, LTL freight, logistics, New Jersey trucking, nationwide freight',
  openGraph: {
    title: 'CK Transports | Nationwide Freight & Commercial Trucking',
    description: 'Moving Freight. Delivering Reliability. Safe. On Time. Across the United States.',
    type: 'website',
    locale: 'en_US',
    siteName: 'CK Transports',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CK Transports | Reliable Freight Transportation',
    description: 'Professional freight transportation solutions across the United States.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-[#0B1F33] text-slate-100 antialiased selection:bg-[#F57C00] selection:text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
