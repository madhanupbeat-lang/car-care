export type VehicleCategory = 'hatchback' | 'sedan' | 'suv';

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  duration: string;
  highlights: string[];
  recommendedFor: string;
  whatsappMessage: string;
}

export interface PricingPackage {
  id: string;
  name: string;
  tagline: string;
  popular?: boolean;
  duration: string;
  prices: {
    hatchback: string;
    sedan: string;
    suv: string;
  };
  features: string[];
  recommendedVehicle: string;
  whatsappMessage: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'foam-wash' | 'interior' | 'detailing' | 'ceramic';
  categoryLabel: string;
  image: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BusinessConfig {
  companyName: string;
  locationCity: string;
  locationState: string;
  locationCountry: string;
  whatsappNumber: string;
  whatsappDisplay: string;
  addressPlaceholder: string;
  workingHoursPlaceholder: string;
  socialPlaceholders: {
    instagram: string;
    facebook: string;
    googleMaps: string;
  };
}
