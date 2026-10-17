import React from 'react';
import { WHY_CHOOSE_US } from '../data/businessData';
import { Droplet, Shield, Layers, MessageSquare, Sparkles, Navigation } from 'lucide-react';

const icons = [Droplet, Shield, Layers, MessageSquare, Sparkles, Navigation];

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-16 lg:py-24 border-b border-slate-800/80 bg-slate-900/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-sky-400 mb-2">
            The Car Care Standard
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
            Why Car Owners in Coimbatore Choose Us
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            We prioritize paint integrity, hygiene, and straightforward customer convenience.
            Here is our standard operational procedure on every vehicle entering our Coimbatore studio.
          </p>
        </div>

        {/* 6 Core Pillars Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {WHY_CHOOSE_US.map((item, index) => {
            const Icon = icons[index % icons.length];
            const num = (index + 1).toString().padStart(2, '0');

            return (
              <div
                key={index}
                className="rounded-xl border border-slate-800 bg-slate-950/70 p-6 sm:p-7 hover:border-slate-700 transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-950/80 border border-sky-900/50 text-sky-400">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="font-mono text-xs font-bold text-slate-500 tabular-nums">
                    {num}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Studio Transparency Banner */}
        <div className="mt-12 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-bold text-white mb-1">
              Have Questions About Your Car’s Specific Paint or Interior?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Text our detailing specialists on WhatsApp with photos of your car for honest advice and no-obligation estimates.
            </p>
          </div>
          <a
            href="https://wa.me/919566992055?text=Hello%20Car%20Care%2C%20I%20have%20a%20question%20about%20my%20car%20paint%20condition%20in%20Coimbatore."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-5 py-2.5 text-xs font-semibold text-white hover:bg-emerald-500 transition-colors whitespace-nowrap shrink-0 shadow"
          >
            <MessageSquare className="h-3.5 w-3.5 fill-current" />
            <span>Chat on WhatsApp (+91 9566992055)</span>
          </a>
        </div>
      </div>
    </section>
  );
};
