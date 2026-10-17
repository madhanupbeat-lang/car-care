import React, { useState } from 'react';
import { MessageSquare, Calendar, Car, Sparkles, Send, CheckCircle2 } from 'lucide-react';
import { createWhatsAppUrl, SERVICES_DATA } from '../data/businessData';
import { VehicleCategory } from '../types';

export const WhatsAppBookingWizard: React.FC = () => {
  const [vehicleCategory, setVehicleCategory] = useState<VehicleCategory>('sedan');
  const [vehicleModel, setVehicleModel] = useState('');
  const [selectedService, setSelectedService] = useState(SERVICES_DATA[0].title);
  const [preferredSlot, setPreferredSlot] = useState('Morning (09:00 AM – 12:00 PM)');
  const [preferredDay, setPreferredDay] = useState('Today / Earliest Available');
  const [notes, setNotes] = useState('');

  const vehicleLabel =
    vehicleCategory === 'hatchback'
      ? 'Hatchback'
      : vehicleCategory === 'sedan'
      ? 'Sedan'
      : 'SUV / Luxury';

  // Construct the structured prefilled message
  const prefilledText = [
    `*CAR CARE COIMBATORE - BOOKING INQUIRY*`,
    `🚗 Vehicle Type: ${vehicleLabel}${vehicleModel ? ` (${vehicleModel.trim()})` : ''}`,
    `✨ Requested Service: ${selectedService}`,
    `📅 Preferred Day: ${preferredDay}`,
    `⏰ Preferred Slot: ${preferredSlot}`,
    notes ? `📝 Note: ${notes.trim()}` : null,
    `📍 Location: Coimbatore, Tamil Nadu`,
    `Please confirm slot availability and final quotation.`,
  ]
    .filter(Boolean)
    .join('\n');

  const waUrl = createWhatsAppUrl(prefilledText);

  return (
    <section id="booking-wizard" className="py-16 lg:py-24 border-b border-slate-800/80 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Form Controls */}
          <div className="lg:col-span-7">
            <div className="text-xs font-semibold uppercase tracking-wider text-sky-400 mb-2">
              Fast WhatsApp Dispatch
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
              Instant WhatsApp Booking Builder
            </h2>
            <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
              Configure your vehicle and required service below. We automatically generate a cleanly formatted
              booking message ready to dispatch directly to Car Care Coimbatore (+91 9566992055).
            </p>

            <div className="mt-8 space-y-6 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8">
              {/* Step 1: Vehicle Category */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                  1. Select Vehicle Class
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  {(['hatchback', 'sedan', 'suv'] as VehicleCategory[]).map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setVehicleCategory(cat)}
                      className={`flex flex-col items-center justify-center py-3 px-2 rounded-lg border text-xs font-semibold transition-all ${
                        vehicleCategory === cat
                          ? 'border-sky-500 bg-sky-950/60 text-white shadow-sm'
                          : 'border-slate-800 bg-slate-950/70 text-slate-400 hover:text-white hover:border-slate-700'
                      }`}
                    >
                      <Car className="h-4 w-4 mb-1 text-sky-400" />
                      <span className="capitalize">{cat === 'suv' ? 'SUV / Luxury' : cat}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Optional Vehicle Model */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                  2. Vehicle Model (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Maruti Swift, Hyundai Creta, Honda City, BMW 3..."
                  value={vehicleModel}
                  onChange={(e) => setVehicleModel(e.target.value)}
                  className="w-full rounded-lg border border-slate-800 bg-slate-950 px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                />
              </div>

              {/* Step 2: Desired Service */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                  3. Select Desired Service or Package
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full rounded-lg border border-slate-800 bg-slate-950 px-3.5 py-2.5 text-xs sm:text-sm text-white focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                >
                  <optgroup label="Core Detailing Services">
                    {SERVICES_DATA.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title} ({s.duration})
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="Complete Packages">
                    <option value="Quick Foam Wash Package">Quick Foam Wash Package</option>
                    <option value="Car Care Deep Spa Package">Car Care Deep Spa Package</option>
                    <option value="Gloss & Shield Detailing Package">Gloss & Shield Detailing Package</option>
                  </optgroup>
                </select>
              </div>

              {/* Step 3: Preferred Day & Time Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    4. Preferred Day
                  </label>
                  <select
                    value={preferredDay}
                    onChange={(e) => setPreferredDay(e.target.value)}
                    className="w-full rounded-lg border border-slate-800 bg-slate-950 px-3.5 py-2.5 text-xs sm:text-sm text-white focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                  >
                    <option value="Today / Earliest Slot">Today / Earliest Slot</option>
                    <option value="Tomorrow">Tomorrow</option>
                    <option value="This Weekend (Saturday)">This Weekend (Saturday)</option>
                    <option value="This Weekend (Sunday)">This Weekend (Sunday)</option>
                    <option value="Upcoming Weekday">Upcoming Weekday</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    5. Time Window
                  </label>
                  <select
                    value={preferredSlot}
                    onChange={(e) => setPreferredSlot(e.target.value)}
                    className="w-full rounded-lg border border-slate-800 bg-slate-950 px-3.5 py-2.5 text-xs sm:text-sm text-white focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                  >
                    <option value="Morning (08:30 AM – 11:30 AM)">Morning (08:30 AM – 11:30 AM)</option>
                    <option value="Afternoon (12:00 PM – 03:30 PM)">Afternoon (12:00 PM – 03:30 PM)</option>
                    <option value="Evening (04:00 PM – 07:30 PM)">Evening (04:00 PM – 07:30 PM)</option>
                  </select>
                </div>
              </div>

              {/* Special notes */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                  Special Notes or Queries (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Paint swirl concerns, child seat stain, interior pet hair..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full rounded-lg border border-slate-800 bg-slate-950 px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Live WhatsApp Message Preview & Action */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-6 sm:p-7 shadow-xl">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-emerald-500"></div>
                  <span className="text-xs font-bold uppercase tracking-wider text-white">
                    Live WhatsApp Message Preview
                  </span>
                </div>
                <span className="text-[11px] text-slate-400">Recipient: +91 9566992055</span>
              </div>

              {/* Chat bubble representation */}
              <div className="rounded-xl bg-slate-950 border border-slate-800/90 p-4 font-mono text-xs text-emerald-300/90 whitespace-pre-line leading-relaxed shadow-inner">
                {prefilledText}
              </div>

              <div className="mt-4 space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>Opens WhatsApp text chat instantly with zero typing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>Direct response from Car Care detailing team in Coimbatore</span>
                </div>
              </div>

              {/* Big Booking Button */}
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-full flex items-center justify-center gap-2.5 rounded-xl bg-emerald-600 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-950/60 hover:bg-emerald-500 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500"
              >
                <MessageSquare className="h-4.5 w-4.5 fill-current" />
                <span>Send via WhatsApp (+91 9566992055)</span>
                <Send className="h-4 w-4 ml-1" />
              </a>

              <p className="mt-3 text-[11px] text-center text-slate-400 leading-normal">
                Text messages only. No calls or phone dialers implemented per communication policy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
