import React, { useState } from 'react';
import { MessageSquare, Check, Sparkles, HelpCircle, Settings } from 'lucide-react';
import { PRICING_PACKAGES, createWhatsAppUrl } from '../data/businessData';
import { VehicleCategory } from '../types';

interface PricingProps {
  customPackages?: typeof PRICING_PACKAGES;
  onOpenPlaceholderEditor?: () => void;
}

export const Pricing: React.FC<PricingProps> = ({
  customPackages = PRICING_PACKAGES,
  onOpenPlaceholderEditor,
}) => {
  const [vehicleType, setVehicleType] = useState<VehicleCategory>('sedan');

  const getPackageWhatsAppMsg = (pkgName: string, price: string) => {
    const vehicleLabel =
      vehicleType === 'hatchback'
        ? 'Hatchback'
        : vehicleType === 'sedan'
        ? 'Sedan'
        : 'SUV / Luxury Vehicle';
    return `Hello Car Care, I would like to book the "${pkgName}" package for my ${vehicleLabel} in Coimbatore. (Price shown on site: ${price}). Please confirm available slots.`;
  };

  return (
    <section id="packages" className="py-16 lg:py-24 border-b border-slate-800/80 bg-slate-900/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-sky-400 mb-2">
              Transparent Care Plans
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
              Service Packages & Placeholder Pricing
            </h2>
            <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
              Choose your vehicle class to view sample package rates. All prices below are
              clearly identified editable placeholders until final shop rates are configured.
            </p>
          </div>

          {/* Interactive Vehicle Segmented Tabs */}
          <div className="flex items-center gap-1.5 p-1.5 bg-slate-950 border border-slate-800 rounded-xl shrink-0 self-start md:self-auto">
            <button
              type="button"
              onClick={() => setVehicleType('hatchback')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                vehicleType === 'hatchback'
                  ? 'bg-sky-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Hatchback
            </button>
            <button
              type="button"
              onClick={() => setVehicleType('sedan')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                vehicleType === 'sedan'
                  ? 'bg-sky-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Sedan / Crossover
            </button>
            <button
              type="button"
              onClick={() => setVehicleType('suv')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                vehicleType === 'suv'
                  ? 'bg-sky-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              SUV / MPV / Luxury
            </button>
          </div>
        </div>

        {/* Placeholder notice bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 rounded-lg border border-sky-900/40 bg-sky-950/20 px-4 py-3 text-xs text-sky-300">
          <div className="flex items-center gap-2">
            <HelpCircle className="h-4 w-4 text-sky-400 shrink-0" />
            <span>
              <strong>Note on Pricing:</strong> Displayed rates are labeled placeholders. Exact quotes are given via WhatsApp text based on vehicle make, size, and current paint condition.
            </span>
          </div>
          {onOpenPlaceholderEditor && (
            <button
              type="button"
              onClick={onOpenPlaceholderEditor}
              className="inline-flex items-center gap-1.5 text-xs text-sky-300 hover:text-white underline underline-offset-2 whitespace-nowrap shrink-0"
            >
              <Settings className="h-3.5 w-3.5" />
              <span>Customize Placeholder Prices</span>
            </button>
          )}
        </div>

        {/* Pricing Cards Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {customPackages.map((pkg) => {
            const currentPrice = pkg.prices[vehicleType];
            const isPopular = pkg.popular;

            return (
              <div
                key={pkg.id}
                className={`relative flex flex-col justify-between rounded-2xl border p-7 transition-all duration-200 ${
                  isPopular
                    ? 'border-sky-500 bg-slate-900/90 shadow-xl shadow-sky-950/40 ring-1 ring-sky-500/50'
                    : 'border-slate-800 bg-slate-950/80 hover:border-slate-700'
                }`}
              >
                {isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 px-3 py-0.5 text-[11px] font-bold uppercase tracking-wider text-white shadow-md">
                    <Sparkles className="h-3 w-3" />
                    <span>Most Popular</span>
                  </div>
                )}

                <div>
                  <div className="flex items-baseline justify-between mb-2">
                    <h3 className="text-xl font-bold text-white">{pkg.name}</h3>
                    <span className="text-xs text-slate-400">{pkg.duration}</span>
                  </div>

                  <p className="text-xs text-slate-300 mb-6 leading-relaxed min-h-[38px]">
                    {pkg.tagline}
                  </p>

                  {/* Price display with clear placeholder indicator */}
                  <div className="mb-6 rounded-xl bg-slate-900/90 border border-slate-800/80 p-4">
                    <div className="text-[11px] uppercase tracking-wider font-semibold text-slate-400 mb-1">
                      Estimated Rate ({vehicleType.toUpperCase()})
                    </div>
                    <div className="text-2xl font-extrabold text-white tracking-tight font-mono tabular-nums">
                      {currentPrice}
                    </div>
                    <div className="text-[11px] text-slate-400 mt-1">
                      Editable placeholder rate
                    </div>
                  </div>

                  {/* Inclusions */}
                  <div className="space-y-3 mb-8">
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Package Inclusions:
                    </div>
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <Check className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Primary Booking Action via WhatsApp */}
                <div className="pt-4 border-t border-slate-800/80">
                  <a
                    href={createWhatsAppUrl(getPackageWhatsAppMsg(pkg.name, currentPrice))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full flex items-center justify-center gap-2 rounded-lg py-3 px-4 text-xs font-bold transition-all shadow ${
                      isPopular
                        ? 'bg-emerald-600 text-white hover:bg-emerald-500 shadow-emerald-950/60'
                        : 'bg-slate-800 text-slate-200 hover:bg-slate-700 hover:text-white'
                    }`}
                  >
                    <MessageSquare className="h-4 w-4 fill-current shrink-0" />
                    <span>Book {pkg.name} via WhatsApp</span>
                  </a>
                  <p className="text-[11px] text-center text-slate-400 mt-2">
                    Direct WhatsApp booking with prefilled slot request
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
