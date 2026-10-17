import React from 'react';
import { Sparkles, MessageSquare } from 'lucide-react';
import { BusinessConfig } from '../types';
import { createWhatsAppUrl } from '../data/businessData';

interface FooterProps {
  config: BusinessConfig;
}

export const Footer: React.FC<FooterProps> = ({ config }) => {
  const currentYear = 2026;

  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-12 text-slate-400 text-xs">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-slate-800/80">
          {/* Brand Info */}
          <div className="md:col-span-1 space-y-3">
            <div className="flex items-center gap-2 text-white font-bold text-base">
              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-sky-600 text-white">
                <Sparkles className="h-4 w-4" />
              </div>
              <span>{config.companyName}</span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Professional car wash, snow foam cleaning, interior sanitization, and paint detailing in Coimbatore, Tamil Nadu, India.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-2.5">
            <div className="text-xs font-semibold uppercase tracking-wider text-white">Navigation</div>
            <ul className="space-y-1.5">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-white transition-colors">
                  Packages & Pricing
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-white transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">
                  Detailing Gallery
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Local Service Areas */}
          <div className="space-y-2.5">
            <div className="text-xs font-semibold uppercase tracking-wider text-white">
              Areas Served
            </div>
            <p className="text-slate-400 leading-relaxed">
              RS Puram, Gandhipuram, Peelamedu, Saravanampatti, Saibaba Colony, Race Course, Singanallur, and greater Coimbatore, Tamil Nadu.
            </p>
          </div>

          {/* Communication Policy */}
          <div className="space-y-2.5">
            <div className="text-xs font-semibold uppercase tracking-wider text-white">
              Communication Policy
            </div>
            <p className="text-slate-400 leading-relaxed">
              We operate exclusively via <strong>WhatsApp text messages</strong> for quotes and slot booking. No phone calls or voice spam.
            </p>
            <div className="pt-1">
              <a
                href={createWhatsAppUrl('Hello Car Care Coimbatore, I would like to inquire about car wash slots.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
              >
                <MessageSquare className="h-3.5 w-3.5 fill-current" />
                <span>Text +91 9566992055</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
          <div>
            © {currentYear} {config.companyName}, Coimbatore, Tamil Nadu, India. All rights reserved.
          </div>
          <div className="text-[11px] text-slate-500">
            Address, pricing, and operating hours subject to final business verification.
          </div>
        </div>
      </div>
    </footer>
  );
};
