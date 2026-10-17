import React, { useState } from 'react';
import { MessageSquare, ArrowRight, ShieldCheck, Droplets, Sparkles, MapPin } from 'lucide-react';
import { createWhatsAppUrl } from '../data/businessData';

interface HeroProps {
  onExplorePackages: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExplorePackages }) => {
  const [imageError, setImageError] = useState(false);

  const heroWhatsAppMessage =
    'Hello Car Care, I am looking to book a professional car wash and detailing service in Coimbatore. Please let me know the available time slots and packages.';

  return (
    <section id="home" className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-800/80">
      {/* Subtle ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-96 w-[42rem] -translate-x-1/2 rounded-full bg-sky-500/10 blur-3xl"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main 2-column Hero split with balanced heights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column: Headline, Proposition & Primary WhatsApp CTA */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Location context unboxed inline marker */}
            <div className="flex items-center gap-2 text-xs font-medium text-sky-400 mb-4 tracking-wide">
              <MapPin className="h-3.5 w-3.5 text-sky-400 shrink-0" />
              <span>Coimbatore, Tamil Nadu</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-400">Professional Studio Detailing</span>
            </div>

            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.12]"
              style={{ textWrap: 'balance' }}
            >
              Precision Car Wash & Detailing in Coimbatore
            </h1>

            <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
              Elevate your drive with active snow foam washes, deep steam interior sanitization,
              and swirl-free paint correction. Transparent pricing, expert handling, and rapid WhatsApp booking.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={createWhatsAppUrl(heroWhatsAppMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-lg bg-emerald-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-950/50 hover:bg-emerald-500 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 whitespace-nowrap shrink-0 group"
              >
                <MessageSquare className="h-4.5 w-4.5 fill-current transition-transform group-hover:scale-110" />
                <span>Book via WhatsApp</span>
                <ArrowRight className="h-4 w-4 ml-0.5 opacity-80 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                type="button"
                onClick={onExplorePackages}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-700/80 bg-slate-900/60 px-5 py-3.5 text-sm font-medium text-slate-200 hover:bg-slate-800 hover:text-white transition-colors whitespace-nowrap shrink-0"
              >
                <span>View Packages & Pricing</span>
              </button>
            </div>

            {/* Communication preference notice */}
            <div className="mt-6 flex items-center gap-2 text-xs text-slate-400">
              <div className="h-1.5 w-1.5 rounded-full bg-emerald-400"></div>
              <span>Instant slot scheduling via WhatsApp text: <strong className="text-slate-300 font-semibold">+91 9566992055</strong></span>
            </div>
          </div>

          {/* Right Column: High-Impact Automotive Detailing Visual */}
          <div className="lg:col-span-6 relative flex items-center">
            <div className="relative w-full aspect-[16/9] lg:aspect-auto lg:h-full min-h-[320px] rounded-xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl">
              {!imageError ? (
                <img
                  src="/src/assets/images/hero_car_wash_foam_1792225163086.jpg"
                  alt="High-end luxury car receiving active snow foam wash at Car Care Coimbatore studio"
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 to-sky-950 text-slate-300 p-8 text-center">
                  <Sparkles className="h-12 w-12 text-sky-400 mb-3" />
                  <p className="text-base font-semibold text-white">Car Care Studio – Coimbatore</p>
                  <p className="text-xs text-slate-400 mt-1 max-w-sm">
                    Snow foam wash, interior deep sanitization & ceramic paint care.
                  </p>
                </div>
              )}

              {/* Scrim overlay for depth */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20"
              />

              {/* Subtle overlay caption */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-slate-200 bg-slate-950/70 backdrop-blur-md px-3.5 py-2 rounded-lg border border-slate-800/80">
                <span className="font-medium">Active Snow Foam & Contactless Pre-Wash</span>
                <span className="text-sky-400 font-semibold">100% Scratch-Safe</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Proof & Key Advantages Strip below Hero Split */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          <div className="flex flex-col">
            <div className="flex items-center gap-2 text-sky-400 mb-1.5">
              <Droplets className="h-4 w-4" />
              <span className="text-sm font-semibold text-white">Filtered RO Water</span>
            </div>
            <p className="text-xs text-slate-400 leading-normal">
              Spotless rinse eliminates mineral calcification and water drop rings.
            </p>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-2 text-sky-400 mb-1.5">
              <ShieldCheck className="h-4 w-4" />
              <span className="text-sm font-semibold text-white">pH-Neutral Shampoos</span>
            </div>
            <p className="text-xs text-slate-400 leading-normal">
              Imported safe chemicals preserve clear coats, ceramic layers, and wax.
            </p>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-2 text-sky-400 mb-1.5">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-semibold text-white">Two-Bucket Technique</span>
            </div>
            <p className="text-xs text-slate-400 leading-normal">
              Grit guards trap road debris to ensure zero swirl marks on paint.
            </p>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-2 text-emerald-400 mb-1.5">
              <MessageSquare className="h-4 w-4" />
              <span className="text-sm font-semibold text-white">WhatsApp Updates</span>
            </div>
            <p className="text-xs text-slate-400 leading-normal">
              Direct text booking, vehicle readiness alerts, and progress photos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
