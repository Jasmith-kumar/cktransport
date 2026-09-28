'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Menu,
  X,
  ChevronRight,
} from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full shadow-lg">
      {/* Top Utility Announcement Bar */}
      <div className="bg-[#071521] border-b border-slate-800/80 text-xs text-slate-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-col md:flex-row items-center justify-between gap-2">
          {/* Left info: Address & Tagline */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-slate-300">
            <div className="flex items-center gap-1.5 hover:text-white transition-colors">
              <MapPin className="w-3.5 h-3.5 text-[#F57C00] shrink-0" />
              <span>308 Evergreen Forest Blvd, Avenel, NJ 07001</span>
            </div>
            <span className="hidden lg:inline text-slate-600">|</span>
            <span className="hidden lg:inline text-slate-400">
              Reliable Freight Solutions Across America
            </span>
          </div>

          {/* Right info: Hours & Phone */}
          <div className="flex items-center gap-4 text-slate-300">
            <div className="hidden sm:flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#F57C00] shrink-0" />
              <span>Mon - Fri: 8AM - 6PM EST</span>
            </div>
            <span className="hidden sm:inline text-slate-600">|</span>
            <a
              href="tel:+18565550123"
              className="flex items-center gap-1.5 font-semibold text-white hover:text-[#F57C00] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#F57C00] shrink-0" />
              <span>+1 (856) 555-0123</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="bg-[#0B1F33] border-b border-slate-700/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-[#16375A] to-[#0a1828] border border-slate-700/80 shadow-inner group-hover:border-[#F57C00]/60 transition-all">
              <svg
                viewBox="0 0 100 100"
                className="w-8 h-8 fill-none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 50 L45 25 L45 75 Z"
                  fill="#FFFFFF"
                  className="group-hover:fill-slate-100 transition-colors"
                />
                <path
                  d="M48 25 L75 25 L55 50 L75 75 L48 75 L62 50 Z"
                  fill="#F57C00"
                />
                <path
                  d="M15 82 L85 82 L75 88 L25 88 Z"
                  fill="#EA580C"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tight text-white flex items-center gap-1">
                CK <span className="text-slate-200">TRANSPORTS</span>
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#F57C00]">
                Moving America Forward
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-200">
            <a
              href="#home"
              className="text-[#F57C00] font-semibold transition-colors hover:text-[#ff922b]"
            >
              Home
            </a>
            <a
              href="#about"
              className="hover:text-white transition-colors"
            >
              About Us
            </a>
            <a
              href="#services"
              className="hover:text-white transition-colors"
            >
              Services
            </a>
            <a
              href="#coverage"
              className="hover:text-white transition-colors"
            >
              Coverage
            </a>
            <a
              href="#why-us"
              className="hover:text-white transition-colors"
            >
              Why Us
            </a>
            <a
              href="#quote"
              className="hover:text-white transition-colors"
            >
              Request a Quote
            </a>
            <a
              href="#contact"
              className="hover:text-white transition-colors"
            >
              Contact Us
            </a>
          </nav>

          {/* Header Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#quote"
              className="px-5 py-2.5 bg-[#F57C00] hover:bg-[#E65100] text-white font-semibold text-xs uppercase tracking-wider rounded transition-all duration-200 shadow-md flex items-center gap-2 group cursor-pointer"
            >
              <span>Request A Quote</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="#quote"
              className="sm:hidden px-3 py-1.5 bg-[#F57C00] text-white text-xs font-bold rounded"
            >
              Quote
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#071521] border-b border-slate-700/80 px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-2 text-sm font-medium text-slate-200">
            <a
              href="#home"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-800 text-[#F57C00]"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-800"
            >
              About Us
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-800"
            >
              Services
            </a>
            <a
              href="#coverage"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-800"
            >
              Coverage
            </a>
            <a
              href="#why-us"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-800"
            >
              Why Us
            </a>
            <a
              href="#quote"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-800"
            >
              Request a Quote
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-800"
            >
              Contact Us
            </a>
          </div>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <a
              href="#quote"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 bg-[#F57C00] text-white font-bold text-center rounded text-sm uppercase tracking-wider"
            >
              Request A Freight Quote
            </a>
            <div className="text-center text-xs text-slate-400 py-1 flex items-center justify-center gap-2">
              <Phone className="w-3.5 h-3.5 text-[#F57C00]" />
              <a href="tel:+18565550123" className="hover:text-white">
                +1 (856) 555-0123
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
