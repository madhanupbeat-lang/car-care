import React, { useState } from 'react';
import { MessageSquare, Menu, X, Sparkles } from 'lucide-react';
import { createWhatsAppUrl } from '../data/businessData';

interface HeaderProps {
  onOpenPlaceholderEditor?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenPlaceholderEditor }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const defaultBookingMsg =
    'Hello Car Care, I would like to book a car wash service in Coimbatore. Please let me know available slots.';

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Single text element Brand Wordmark */}
        <a
          href="#home"
          className="group flex items-center gap-2.5 text-xl font-bold tracking-tight text-white whitespace-nowrap shrink-0 transition-opacity hover:opacity-90"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-tr from-sky-600 to-blue-500 text-white shadow-sm shadow-sky-500/20">
            <Sparkles className="h-4.5 w-4.5" />
          </div>
          <span className="font-extrabold tracking-tight">Car Care</span>
        </a>

        {/* Zone 2: 5 clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
          <a
            href="#services"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Services
          </a>
          <a
            href="#packages"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Packages
          </a>
          <a
            href="#why-us"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Why Us
          </a>
          <a
            href="#gallery"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Gallery
          </a>
          <a
            href="#faq"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            FAQ
          </a>
          <a
            href="#contact"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Location
          </a>
        </nav>

        {/* Zone 3: 1 primary action button */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          {onOpenPlaceholderEditor && (
            <button
              onClick={onOpenPlaceholderEditor}
              type="button"
              className="px-2.5 py-1.5 text-xs text-slate-400 hover:text-sky-400 transition-colors border border-slate-800 rounded-md whitespace-nowrap shrink-0"
              title="Edit placeholder addresses, hours, and prices"
            >
              Edit Placeholders
            </button>
          )}
          <a
            href={createWhatsAppUrl(defaultBookingMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-xs font-semibold text-white shadow-sm shadow-emerald-900/40 hover:bg-emerald-500 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 whitespace-nowrap shrink-0"
          >
            <MessageSquare className="h-3.5 w-3.5 fill-current" />
            <span>Book on WhatsApp</span>
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-2">
          {onOpenPlaceholderEditor && (
            <button
              onClick={onOpenPlaceholderEditor}
              type="button"
              className="px-2 py-1 text-[11px] text-slate-400 border border-slate-800 rounded"
            >
              Placeholders
            </button>
          )}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-400 hover:text-white transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-slate-950 px-4 py-4 space-y-3">
          <nav className="flex flex-col space-y-2 text-sm font-medium text-slate-300">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 rounded hover:bg-slate-900 hover:text-white transition-colors"
            >
              Services
            </a>
            <a
              href="#packages"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 rounded hover:bg-slate-900 hover:text-white transition-colors"
            >
              Packages & Pricing
            </a>
            <a
              href="#why-us"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 rounded hover:bg-slate-900 hover:text-white transition-colors"
            >
              Why Choose Us
            </a>
            <a
              href="#gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 rounded hover:bg-slate-900 hover:text-white transition-colors"
            >
              Detailing Gallery
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 rounded hover:bg-slate-900 hover:text-white transition-colors"
            >
              FAQ
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 rounded hover:bg-slate-900 hover:text-white transition-colors"
            >
              Contact & Coimbatore Location
            </a>
          </nav>

          <div className="pt-2 border-t border-slate-800">
            <a
              href={createWhatsAppUrl(defaultBookingMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-4 py-2.5 text-xs font-semibold text-white shadow hover:bg-emerald-500 transition-colors"
            >
              <MessageSquare className="h-4 w-4 fill-current" />
              <span>Book via WhatsApp (+91 9566992055)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
