import React, { useState } from 'react';
import { GALLERY_ITEMS, createWhatsAppUrl } from '../data/businessData';
import { GalleryItem } from '../types';
import { MessageSquare, ZoomIn, X, Camera } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const filterOptions = [
    { id: 'all', label: 'All Photos' },
    { id: 'foam-wash', label: 'Snow Foam & Rinse' },
    { id: 'interior', label: 'Interior Cabin' },
    { id: 'detailing', label: 'Machine Polishing' },
    { id: 'ceramic', label: 'Ceramic Beading' },
  ];

  const filteredItems =
    activeFilter === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  const handleImageError = (id: string) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="gallery" className="py-16 lg:py-24 border-b border-slate-800/80 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-sky-400 mb-2">
              Visual Proof & Craftsmanship
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
              Car Care Detailing Gallery
            </h2>
            <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
              Explore authentic high-resolution results from our foam washes, deep interior spa treatments,
              paint correction, and hydrophobic ceramic coatings in Coimbatore.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl shrink-0">
            {filterOptions.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setActiveFilter(f.id)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                  activeFilter === f.id
                    ? 'bg-sky-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => {
            const hasError = imageErrors[item.id];
            return (
              <div
                key={item.id}
                onClick={() => setActiveItem(item)}
                className="group relative cursor-pointer overflow-hidden rounded-xl border border-slate-800 bg-slate-900 transition-all duration-300 hover:border-sky-500/60 shadow-md"
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-slate-950">
                  {!hasError ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                      onError={() => handleImageError(item.id)}
                    />
                  ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center p-6 text-center text-slate-400">
                      <Camera className="h-8 w-8 text-sky-400 mb-2" />
                      <span className="text-xs font-semibold text-white">{item.title}</span>
                    </div>
                  )}
                </div>

                {/* Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="text-[11px] font-medium text-sky-400 mb-1">
                    {item.categoryLabel}
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1 group-hover:text-sky-200 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Zoom indicator */}
                <div className="absolute top-3 right-3 rounded-full bg-slate-950/70 p-2 text-white opacity-0 transition-opacity group-hover:opacity-100 backdrop-blur-sm border border-slate-800">
                  <ZoomIn className="h-4 w-4" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Lightbox Modal */}
        {activeItem && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={() => setActiveItem(null)}
          >
            <div
              className="relative max-w-3xl w-full rounded-2xl border border-slate-700 bg-slate-950 overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActiveItem(null)}
                className="absolute top-3 right-3 z-10 rounded-full bg-slate-900/80 p-2 text-slate-300 hover:text-white border border-slate-700 transition-colors"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="aspect-[16/10] w-full bg-black overflow-hidden">
                <img
                  src={activeItem.image}
                  alt={activeItem.title}
                  className="h-full w-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-6 sm:p-7 border-t border-slate-800 bg-slate-900">
                <div className="text-xs font-semibold text-sky-400 mb-1">
                  {activeItem.categoryLabel}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{activeItem.title}</h3>
                <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
                  {activeItem.description}
                </p>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-4 border-t border-slate-800">
                  <span className="text-xs text-slate-400">
                    Location: Coimbatore Car Care Detailing Bay
                  </span>
                  <a
                    href={createWhatsAppUrl(
                      `Hello Car Care, I saw the "${activeItem.title}" photo in your gallery and would like a similar service for my car in Coimbatore.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-xs font-semibold text-white hover:bg-emerald-500 transition-colors shadow"
                  >
                    <MessageSquare className="h-3.5 w-3.5 fill-current" />
                    <span>Inquire About This Service on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
