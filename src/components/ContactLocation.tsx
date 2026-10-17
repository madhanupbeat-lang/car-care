import React from 'react';
import { MessageSquare, MapPin, Clock, Share2, Edit3, CheckCircle } from 'lucide-react';
import { BusinessConfig } from '../types';
import { COIMBATORE_LOCALITIES, createWhatsAppUrl } from '../data/businessData';

interface ContactLocationProps {
  config: BusinessConfig;
  onOpenPlaceholderEditor: () => void;
}

export const ContactLocation: React.FC<ContactLocationProps> = ({
  config,
  onOpenPlaceholderEditor,
}) => {
  return (
    <section id="contact" className="py-16 lg:py-24 border-b border-slate-800/80 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Business Details & Placeholders */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-sky-400 mb-2">
                Coimbatore Detailing Studio
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
                Contact & Location Details
              </h2>
              <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                Connect directly with <strong>{config.companyName}</strong> in Coimbatore, Tamil Nadu.
                We handle all scheduling and customer inquiries exclusively through WhatsApp text messages for prompt, documented service.
              </p>
            </div>

            {/* Editable Placeholders Highlight Card */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 sm:p-7 space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-xs font-bold uppercase tracking-wider text-white">
                  Business Information
                </span>
                <button
                  type="button"
                  onClick={onOpenPlaceholderEditor}
                  className="inline-flex items-center gap-1.5 text-xs text-sky-400 hover:text-sky-300 transition-colors"
                >
                  <Edit3 className="h-3.5 w-3.5" />
                  <span>Update Placeholder Details</span>
                </button>
              </div>

              {/* Company Name */}
              <div className="flex items-start gap-3.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-950 border border-sky-900/60 text-sky-400 shrink-0 mt-0.5">
                  <MapPin className="h-4.5 w-4.5" />
                </div>
                <div>
                  <div className="text-xs font-medium text-slate-400">Business Name & Region</div>
                  <div className="text-sm font-bold text-white">
                    {config.companyName} · {config.locationCity}, {config.locationState}, {config.locationCountry}
                  </div>
                </div>
              </div>

              {/* Address Placeholder */}
              <div className="flex items-start gap-3.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800 border border-slate-700/80 text-slate-300 shrink-0 mt-0.5">
                  <MapPin className="h-4.5 w-4.5" />
                </div>
                <div>
                  <div className="text-xs font-medium text-slate-400 flex items-center gap-2">
                    <span>Studio Physical Address</span>
                    <span className="text-[10px] text-amber-400/90 font-mono">[Placeholder]</span>
                  </div>
                  <div className="text-xs sm:text-sm text-slate-200 font-mono mt-0.5 bg-slate-950/60 px-2.5 py-1.5 rounded border border-slate-800">
                    {config.addressPlaceholder}
                  </div>
                </div>
              </div>

              {/* Working Hours Placeholder */}
              <div className="flex items-start gap-3.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800 border border-slate-700/80 text-slate-300 shrink-0 mt-0.5">
                  <Clock className="h-4.5 w-4.5" />
                </div>
                <div>
                  <div className="text-xs font-medium text-slate-400 flex items-center gap-2">
                    <span>Studio Operating Hours</span>
                    <span className="text-[10px] text-amber-400/90 font-mono">[Placeholder]</span>
                  </div>
                  <div className="text-xs sm:text-sm text-slate-200 font-mono mt-0.5 bg-slate-950/60 px-2.5 py-1.5 rounded border border-slate-800">
                    {config.workingHoursPlaceholder}
                  </div>
                </div>
              </div>

              {/* WhatsApp Only Communication Channel */}
              <div className="flex items-start gap-3.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-950 border border-emerald-900/60 text-emerald-400 shrink-0 mt-0.5">
                  <MessageSquare className="h-4.5 w-4.5 fill-current" />
                </div>
                <div>
                  <div className="text-xs font-medium text-slate-400">Communication Mode</div>
                  <div className="text-sm font-bold text-white flex items-center gap-2">
                    <span>WhatsApp Text Messages Only: </span>
                    <span className="text-emerald-400 font-mono">{config.whatsappDisplay}</span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    No telephone links or phone calls enabled. Text us anytime for slot bookings and pricing quotes.
                  </p>
                </div>
              </div>

              {/* Social Media Placeholders */}
              <div className="flex items-start gap-3.5 pt-2 border-t border-slate-800/80">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800 border border-slate-700/80 text-slate-300 shrink-0 mt-0.5">
                  <Share2 className="h-4.5 w-4.5" />
                </div>
                <div>
                  <div className="text-xs font-medium text-slate-400 flex items-center gap-2">
                    <span>Social Media Channels</span>
                    <span className="text-[10px] text-amber-400/90 font-mono">[Placeholders]</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-1.5 text-xs text-sky-400 font-mono">
                    <span className="bg-slate-950 px-2 py-1 rounded border border-slate-800">
                      Instagram: {config.socialPlaceholders.instagram}
                    </span>
                    <span className="bg-slate-950 px-2 py-1 rounded border border-slate-800">
                      Facebook: {config.socialPlaceholders.facebook}
                    </span>
                    <span className="bg-slate-950 px-2 py-1 rounded border border-slate-800">
                      Google Maps: {config.socialPlaceholders.googleMaps}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Coimbatore Localities Served & Instant WhatsApp Box */}
          <div className="lg:col-span-5 space-y-6">
            {/* Coimbatore Local SEO & Service Areas Box */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 sm:p-7">
              <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                <MapPin className="h-4 w-4 text-sky-400" />
                <span>Serving Key Localities Across Coimbatore</span>
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Car Care welcomes motorists from across the greater Coimbatore metropolitan area, including:
              </p>

              <div className="grid grid-cols-2 gap-2 text-xs text-slate-300">
                {COIMBATORE_LOCALITIES.map((loc, idx) => (
                  <div key={idx} className="flex items-center gap-1.5 py-1">
                    <CheckCircle className="h-3.5 w-3.5 text-sky-400 shrink-0" />
                    <span>{loc}</span>
                  </div>
                ))}
              </div>

              <div className="mt-5 pt-4 border-t border-slate-800/80 text-xs text-slate-400">
                Convenient access from Avinashi Road, Trichy Road, and Sathy Road arterials.
              </div>
            </div>

            {/* Direct WhatsApp Callout Card */}
            <div className="rounded-2xl border border-emerald-900/60 bg-gradient-to-br from-emerald-950/40 to-slate-900 p-6 sm:p-7 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-lg shadow-emerald-950/60 mb-4">
                <MessageSquare className="h-6 w-6 fill-current" />
              </div>

              <h4 className="text-lg font-bold text-white mb-1.5">
                Ready to Book Your Car Service?
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                Text us on WhatsApp at <strong>+91 9566992055</strong>. We respond quickly with available times,
                package suggestions, and slot confirmations.
              </p>

              <a
                href={createWhatsAppUrl(
                  'Hello Car Care Coimbatore, I would like to book a car wash service today. Please let me know available slots.'
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-bold text-white shadow-lg hover:bg-emerald-500 transition-colors"
              >
                <MessageSquare className="h-4 w-4 fill-current" />
                <span>Start WhatsApp Chat (+91 9566992055)</span>
              </a>

              <p className="text-[11px] text-slate-400 mt-2.5">
                Strict WhatsApp text preference. No voice call spam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
