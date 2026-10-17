import React, { useState } from 'react';
import { MessageSquare, Clock, CheckCircle2, ChevronRight, Car } from 'lucide-react';
import { SERVICES_DATA, createWhatsAppUrl } from '../data/businessData';
import { ServiceItem } from '../types';

export const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem>(SERVICES_DATA[0]);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="services" className="py-16 lg:py-24 border-b border-slate-800/80 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-sky-400 mb-2">
            Auto Detailing & Care
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
            Specialized Car Wash & Detailing Services
          </h2>
          <p className="mt-3 text-slate-300 text-base leading-relaxed">
            Every service at Car Care Coimbatore is performed with filtered soft water, safe pH-balanced formulas,
            and professional dual-action polishers to protect and rejuvenate your car.
          </p>
        </div>

        {/* 6 Services Asymmetric Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES_DATA.map((service) => {
            const hasError = imageErrors[service.id];
            return (
              <div
                key={service.id}
                className="group flex flex-col justify-between rounded-xl border border-slate-800/90 bg-slate-900/70 p-6 transition-all duration-200 hover:border-sky-500/50 hover:bg-slate-900 shadow-sm"
              >
                <div>
                  {/* Visual slot with resilient fallback */}
                  <div className="relative mb-5 aspect-[16/10] w-full overflow-hidden rounded-lg border border-slate-800 bg-slate-950">
                    {!hasError ? (
                      <img
                        src={service.image}
                        alt={`${service.title} at Car Care Coimbatore`}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                        onError={() => handleImageError(service.id)}
                      />
                    ) : (
                      <div className="flex h-full w-full flex-col items-center justify-center bg-slate-900 p-4 text-center">
                        <Car className="h-8 w-8 text-sky-400 mb-2" />
                        <span className="text-xs font-medium text-slate-300">{service.title}</span>
                      </div>
                    )}
                    <div className="absolute top-2.5 left-2.5 rounded bg-slate-950/80 px-2 py-0.5 text-[11px] font-semibold text-sky-400 border border-slate-800 backdrop-blur-sm">
                      {service.number}
                    </div>
                  </div>

                  {/* Title & Duration */}
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-lg font-bold text-white group-hover:text-sky-300 transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-3">
                    <Clock className="h-3.5 w-3.5 text-sky-400 shrink-0" />
                    <span>Est. Duration: <strong className="text-slate-300 font-medium">{service.duration}</strong></span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                    {service.shortDesc}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2 mb-6 border-t border-slate-800/60 pt-4">
                    {service.highlights.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Actions: Quick Details View & WhatsApp Booking Button */}
                <div className="pt-2 border-t border-slate-800/60 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedService(service)}
                    className="text-xs font-medium text-sky-400 hover:text-sky-300 flex items-center gap-1 transition-colors whitespace-nowrap shrink-0"
                  >
                    <span>Full Details</span>
                    <ChevronRight className="h-3.5 w-3.5" />
                  </button>

                  <a
                    href={createWhatsAppUrl(service.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-600/90 px-3 py-1.5 text-xs font-semibold text-white shadow hover:bg-emerald-500 transition-colors whitespace-nowrap shrink-0"
                  >
                    <MessageSquare className="h-3.5 w-3.5 fill-current" />
                    <span>Book on WhatsApp</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal for In-Depth Service Details */}
        {selectedService && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            style={{ display: selectedService.id ? 'flex' : 'none' }}
          >
            <div className="relative w-full max-w-xl rounded-xl border border-slate-700 bg-slate-900 p-6 sm:p-8 shadow-2xl text-left max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-sky-400">{selectedService.number}.</span>
                  <h3 className="text-xl font-bold text-white">{selectedService.title}</h3>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedService({} as ServiceItem)}
                  className="rounded-md p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                  aria-label="Close details modal"
                >
                  ✕
                </button>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-400 mb-4">
                <Clock className="h-3.5 w-3.5 text-sky-400" />
                <span>Estimated Service Duration: <strong className="text-white">{selectedService.duration}</strong></span>
              </div>

              <p className="text-sm text-slate-200 leading-relaxed mb-5">
                {selectedService.fullDesc}
              </p>

              <div className="mb-5">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2.5">
                  Complete Service Inclusions:
                </h4>
                <ul className="space-y-2">
                  {selectedService.highlights?.map((hl, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-lg bg-slate-950 p-3.5 border border-slate-800 text-xs text-slate-300 mb-6">
                <span className="text-sky-400 font-semibold">Recommended for: </span>
                {selectedService.recommendedFor}
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setSelectedService({} as ServiceItem)}
                  className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white transition-colors"
                >
                  Close
                </button>
                <a
                  href={createWhatsAppUrl(selectedService.whatsappMessage || '')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-xs font-semibold text-white shadow hover:bg-emerald-500 transition-colors"
                >
                  <MessageSquare className="h-4 w-4 fill-current" />
                  <span>Book This Service via WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
