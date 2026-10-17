import React from 'react';
import { MessageSquare } from 'lucide-react';
import { createWhatsAppUrl } from '../data/businessData';

export const FloatingWhatsApp: React.FC = () => {
  const defaultMsg =
    'Hello Car Care Coimbatore, I would like to book a car wash or detailing service.';

  return (
    <aside
      aria-label="WhatsApp quick booking"
      className="fixed bottom-5 right-5 z-40"
    >
      <a
        href={createWhatsAppUrl(defaultMsg)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with Car Care Coimbatore: +91 9566992055"
        className="group flex items-center gap-2.5 rounded-full bg-emerald-600 pl-3.5 pr-4 py-2.5 text-xs font-bold text-white shadow-xl shadow-emerald-950/70 hover:bg-emerald-500 transition-all hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 border border-emerald-400/30"
      >
        <span className="relative flex h-3 w-3">
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white/90"></span>
        </span>
        <MessageSquare className="h-4 w-4 fill-current shrink-0" />
        <span className="hidden sm:inline font-semibold">WhatsApp Us (+91 9566992055)</span>
        <span className="sm:hidden font-semibold">WhatsApp</span>
      </a>
    </aside>
  );
};
