import React, { useState } from 'react';
import { X, Save, RotateCcw, AlertCircle, Check } from 'lucide-react';
import { BusinessConfig, PricingPackage } from '../types';
import { DEFAULT_BUSINESS_CONFIG, PRICING_PACKAGES } from '../data/businessData';

interface PlaceholderEditorModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: BusinessConfig;
  onSaveConfig: (newConfig: BusinessConfig) => void;
  packages: PricingPackage[];
  onSavePackages: (newPackages: PricingPackage[]) => void;
  onResetDefaults: () => void;
}

export const PlaceholderEditorModal: React.FC<PlaceholderEditorModalProps> = ({
  isOpen,
  onClose,
  config,
  onSaveConfig,
  packages,
  onSavePackages,
  onResetDefaults,
}) => {
  const [formData, setFormData] = useState<BusinessConfig>(config);
  const [packagesData, setPackagesData] = useState<PricingPackage[]>(packages);
  const [saveSuccess, setSaveSuccess] = useState(false);

  if (!isOpen) return null;

  const handlePriceChange = (
    pkgId: string,
    category: 'hatchback' | 'sedan' | 'suv',
    value: string
  ) => {
    setPackagesData((prev) =>
      prev.map((pkg) => {
        if (pkg.id === pkgId) {
          return {
            ...pkg,
            prices: {
              ...pkg.prices,
              [category]: value,
            },
          };
        }
        return pkg;
      })
    );
  };

  const handleSave = () => {
    onSaveConfig(formData);
    onSavePackages(packagesData);
    setSaveSuccess(true);
    setTimeout(() => {
      setSaveSuccess(false);
      onClose();
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl rounded-2xl border border-slate-700 bg-slate-900 p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div>
            <h3 className="text-lg font-bold text-white">
              Editable Business Placeholders
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Update temporary address, working hours, prices, and links as real business details become finalized.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-md p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-6 space-y-6">
          {/* Notice */}
          <div className="flex items-start gap-2.5 rounded-lg border border-amber-500/30 bg-amber-500/10 p-3 text-xs text-amber-200">
            <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
            <span>
              All placeholders are marked with brackets. Once you enter your official business location, hours, and rates, they update dynamically across the website and in WhatsApp booking links.
            </span>
          </div>

          {/* Business Address */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              Physical Address Placeholder
            </label>
            <textarea
              rows={2}
              value={formData.addressPlaceholder}
              onChange={(e) =>
                setFormData({ ...formData, addressPlaceholder: e.target.value })
              }
              className="w-full rounded-lg border border-slate-800 bg-slate-950 p-2.5 text-xs text-white focus:border-sky-500 focus:outline-none"
            />
          </div>

          {/* Working Hours */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              Working Hours Placeholder
            </label>
            <input
              type="text"
              value={formData.workingHoursPlaceholder}
              onChange={(e) =>
                setFormData({ ...formData, workingHoursPlaceholder: e.target.value })
              }
              className="w-full rounded-lg border border-slate-800 bg-slate-950 p-2.5 text-xs text-white focus:border-sky-500 focus:outline-none"
            />
          </div>

          {/* Social Media Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Instagram Placeholder URL
              </label>
              <input
                type="text"
                value={formData.socialPlaceholders.instagram}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    socialPlaceholders: {
                      ...formData.socialPlaceholders,
                      instagram: e.target.value,
                    },
                  })
                }
                className="w-full rounded-lg border border-slate-800 bg-slate-950 p-2.5 text-xs text-white focus:border-sky-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Facebook Placeholder URL
              </label>
              <input
                type="text"
                value={formData.socialPlaceholders.facebook}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    socialPlaceholders: {
                      ...formData.socialPlaceholders,
                      facebook: e.target.value,
                    },
                  })
                }
                className="w-full rounded-lg border border-slate-800 bg-slate-950 p-2.5 text-xs text-white focus:border-sky-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Editable Package Pricing Placeholders */}
          <div className="border-t border-slate-800 pt-5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-sky-400 mb-3">
              Package Price Placeholders (INR)
            </h4>
            <div className="space-y-4">
              {packagesData.map((pkg) => (
                <div
                  key={pkg.id}
                  className="rounded-lg border border-slate-800 bg-slate-950 p-3.5 space-y-2.5"
                >
                  <div className="text-xs font-bold text-white">{pkg.name}</div>
                  <div className="grid grid-cols-3 gap-2">
                    <div>
                      <label className="block text-[11px] text-slate-400 mb-1">Hatchback</label>
                      <input
                        type="text"
                        value={pkg.prices.hatchback}
                        onChange={(e) =>
                          handlePriceChange(pkg.id, 'hatchback', e.target.value)
                        }
                        className="w-full rounded border border-slate-800 bg-slate-900 p-1.5 text-xs text-white focus:border-sky-500 focus:outline-none font-mono"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] text-slate-400 mb-1">Sedan</label>
                      <input
                        type="text"
                        value={pkg.prices.sedan}
                        onChange={(e) =>
                          handlePriceChange(pkg.id, 'sedan', e.target.value)
                        }
                        className="w-full rounded border border-slate-800 bg-slate-900 p-1.5 text-xs text-white focus:border-sky-500 focus:outline-none font-mono"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] text-slate-400 mb-1">SUV</label>
                      <input
                        type="text"
                        value={pkg.prices.suv}
                        onChange={(e) =>
                          handlePriceChange(pkg.id, 'suv', e.target.value)
                        }
                        className="w-full rounded border border-slate-800 bg-slate-900 p-1.5 text-xs text-white focus:border-sky-500 focus:outline-none font-mono"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="mt-8 pt-4 border-t border-slate-800 flex items-center justify-between">
          <button
            type="button"
            onClick={() => {
              onResetDefaults();
              setFormData(DEFAULT_BUSINESS_CONFIG);
              setPackagesData(PRICING_PACKAGES);
            }}
            className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            <span>Reset to Defaults</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSave}
              className="inline-flex items-center gap-2 rounded-lg bg-sky-600 px-5 py-2 text-xs font-semibold text-white shadow hover:bg-sky-500 transition-colors"
            >
              {saveSuccess ? (
                <>
                  <Check className="h-3.5 w-3.5" />
                  <span>Saved!</span>
                </>
              ) : (
                <>
                  <Save className="h-3.5 w-3.5" />
                  <span>Apply Changes</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
