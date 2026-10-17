import { BusinessConfig, FAQItem, GalleryItem, PricingPackage, ServiceItem } from '../types';

export const DEFAULT_BUSINESS_CONFIG: BusinessConfig = {
  companyName: 'Car Care',
  locationCity: 'Coimbatore',
  locationState: 'Tamil Nadu',
  locationCountry: 'India',
  whatsappNumber: '919566992055',
  whatsappDisplay: '+91 9566992055',
  addressPlaceholder: '[Placeholder: No. 42, Avinashi Road / Near Hope College, Coimbatore, Tamil Nadu 641004]',
  workingHoursPlaceholder: '[Placeholder: Monday – Sunday: 8:30 AM – 8:00 PM]',
  socialPlaceholders: {
    instagram: 'https://instagram.com/[Placeholder-carcare_cbe]',
    facebook: 'https://facebook.com/[Placeholder-carcarecbe]',
    googleMaps: 'https://maps.google.com/?q=[Placeholder-CarCare+Coimbatore]',
  },
};

export const WHATSAPP_BASE_URL = 'https://wa.me/919566992055';

export function createWhatsAppUrl(message: string): string {
  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message.trim())}`;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'exterior-foam-wash',
    number: '01',
    title: 'Exterior Foam Wash',
    shortDesc: 'Touchless snow foam cannon wash with pH-neutral imported shampoo and microfiber drying.',
    fullDesc: 'Our signature exterior cleaning removes road grime, dust, and mud safely. We apply thick snow foam that lifts dirt away from clear-coat surfaces, followed by high-pressure filtered water rinse and scratch-free plush microfiber drying.',
    image: '/src/assets/images/service_foam_pressure_wash_1792225164676.jpg',
    duration: '45 – 60 Mins',
    highlights: [
      'High-density snow foam pre-wash',
      'Underbody and wheel arch pressure blast',
      'Alloy wheel de-dusting and tire dressing',
      'Streak-free glass cleaning',
      'Two-bucket wash method with grit guards',
    ],
    recommendedFor: 'Weekly or bi-weekly maintenance for all cars in Coimbatore.',
    whatsappMessage: 'Hello Car Care, I would like to book an Exterior Foam Wash for my car in Coimbatore. Please let me know available slots.',
  },
  {
    id: 'interior-cleaning',
    number: '02',
    title: 'Interior Deep Cleaning',
    shortDesc: 'Meticulous interior vacuuming, leather/fabric upholstery care, and antibacterial steam sanitization.',
    fullDesc: 'Restores freshness and hygiene inside the cabin. Includes deep vacuum extraction of carpets and floor mats, stain spot treatment, conditioning of leather/fabric seats, dashboard UV protection, and AC vent sanitization.',
    image: '/src/assets/images/service_interior_detailing_1792225164410.jpg',
    duration: '90 – 120 Mins',
    highlights: [
      'Industrial deep vacuum for seats, mats & boot',
      'Steam sanitation and odor neutralizer',
      'Leather conditioning / Fabric spot treatment',
      'Dashboard, console and door trim UV dressing',
      'AC duct freshening and bacteria removal',
    ],
    recommendedFor: 'Vehicles needing cabin rejuvenation or family road-trip hygiene.',
    whatsappMessage: 'Hello Car Care, I am interested in Interior Deep Cleaning for my car in Coimbatore. What are the available slots?',
  },
  {
    id: 'complete-car-spa',
    number: '03',
    title: 'Complete Car Spa',
    shortDesc: 'Comprehensive full-body treatment uniting exterior snow foam with thorough interior sanitization.',
    fullDesc: 'The complete rejuvenation package for vehicles. We combine our thorough exterior snow foam cleaning and wheel detailing with comprehensive interior cabin deep cleaning, tire conditioning, and exterior glass clarity polish.',
    image: '/src/assets/images/hero_car_wash_foam_1792225163086.jpg',
    duration: '2.5 – 3 Hours',
    highlights: [
      'Everything in Exterior Snow Foam Wash',
      'Everything in Interior Deep Cleaning',
      'Engine bay dry wipe-down & dressing',
      'Hydrophobic glass rain repellent wipe',
      'Long-lasting matte tire gel application',
    ],
    recommendedFor: 'Monthly routine or pre-festival vehicle makeover.',
    whatsappMessage: 'Hello Car Care, I would like to schedule a Complete Car Spa package for my vehicle in Coimbatore.',
  },
  {
    id: 'car-polishing-gloss',
    number: '04',
    title: 'Car Polishing & Swirl Removal',
    shortDesc: 'Dual-action machine polishing to eliminate light swirl marks, oxidation, and restore deep gloss.',
    fullDesc: 'Revitalize dull paint and eliminate microscopic scratch webs caused by improper dusting. Using dual-action orbital polishers and professional fine compounds, we restore vibrant depth, color clarity, and high mirror gloss.',
    image: '/src/assets/images/service_car_polishing_gloss_1792225165724.jpg',
    duration: '3 – 4 Hours',
    highlights: [
      'Paint surface decontamination & clay bar prep',
      'Dual-action machine swirl mark reduction',
      'Mirror reflection gloss enhancer compound',
      'Synthetic paint sealant protection layer',
      'Chrome and exterior trim brightening',
    ],
    recommendedFor: 'Cars showing swirl marks, dullness, or preparing for special occasions.',
    whatsappMessage: 'Hello Car Care, I want to inquire about Car Polishing & Swirl Removal for my vehicle in Coimbatore.',
  },
  {
    id: 'ceramic-detailing',
    number: '05',
    title: 'Ceramic Coating Detailing',
    shortDesc: 'Advanced SiO2 ceramic protective shield providing extreme hydrophobic beading and UV shield.',
    fullDesc: 'The gold standard for automotive paint protection. Our multi-layer ceramic treatment bonds with clear-coat to deliver an ultra-slick hydrophobic surface that repels water spots, bird droppings, acid rain, and Coimbatore road grime.',
    image: '/src/assets/images/gallery_ceramic_beading_1792225164837.jpg',
    duration: '1 – 2 Days (Requires Curing)',
    highlights: [
      'Multi-stage paint correction before application',
      'Professional 9H ceramic coating layer',
      'Extreme water beading & self-cleaning effect',
      'Long-term UV ray & oxidation resistance',
      'Includes 1-year maintenance inspection guide',
    ],
    recommendedFor: 'New cars and car enthusiasts seeking lasting shine and paint protection.',
    whatsappMessage: 'Hello Car Care, I am interested in Ceramic Coating Detailing for my car in Coimbatore. Please share package details.',
  },
  {
    id: 'trim-headlight-restoration',
    number: '06',
    title: 'Trim & Headlight Restoration',
    shortDesc: 'Restore faded yellowed headlights and weathered black trim plastics to factory fresh contrast.',
    fullDesc: 'Over time, sunlight oxidizes headlight lenses and dries out black plastic trim. We mechanically wet-sand, compound, polish, and apply a UV-blocking ceramic seal to restore crystal headlight clarity and rich black trim satin finish.',
    image: '/src/assets/images/service_foam_pressure_wash_1792225164676.jpg',
    duration: '60 – 90 Mins',
    highlights: [
      'Multi-grit wet sanding of hazy lenses',
      'Optical compound polishing for crystal clarity',
      'High-grade UV inhibitor protective sealant',
      'Restoration of faded exterior bumper/cladding trim',
      'Improved nighttime driving visibility',
    ],
    recommendedFor: 'Vehicles 3+ years old with foggy headlight lenses or chalky exterior plastics.',
    whatsappMessage: 'Hello Car Care, I would like to book Headlight & Trim Restoration for my car in Coimbatore.',
  },
];

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    id: 'pkg-quick-wash',
    name: 'Quick Foam Wash',
    tagline: 'Fast, touchless exterior cleanse for busy Coimbatore commuters.',
    duration: '45 mins',
    prices: {
      hatchback: '[Placeholder: ₹399]',
      sedan: '[Placeholder: ₹499]',
      suv: '[Placeholder: ₹599]',
    },
    features: [
      'Snow foam cannon pre-wash',
      'High-pressure underbody rinse',
      'Scratch-free microfiber dry',
      'Alloy wheels clean & tire dress',
      'Exterior glass crystal wipe',
    ],
    recommendedVehicle: 'Daily commuters & quick dust removal',
    whatsappMessage: 'Hello Car Care, I would like to book the Quick Foam Wash package in Coimbatore.',
  },
  {
    id: 'pkg-deep-spa',
    name: 'Car Care Deep Spa',
    tagline: 'Our most popular complete interior and exterior rejuvenation.',
    popular: true,
    duration: '2.5 hrs',
    prices: {
      hatchback: '[Placeholder: ₹899]',
      sedan: '[Placeholder: ₹1,099]',
      suv: '[Placeholder: ₹1,299]',
    },
    features: [
      'All Quick Foam Wash inclusions',
      'Deep interior vacuum (seats, carpets, boot)',
      'Dashboard & door trim UV conditioning',
      'AC vent anti-bacterial steam sanitizing',
      'Upholstery spot stain treatment',
      'Door jambs & boot groove cleaning',
    ],
    recommendedVehicle: 'Recommended for families & monthly car maintenance',
    whatsappMessage: 'Hello Car Care, I would like to book the Car Care Deep Spa package in Coimbatore.',
  },
  {
    id: 'pkg-gloss-protection',
    name: 'Gloss & Shield Detailing',
    tagline: 'Machine paint polish plus polymer sealant for showroom shine.',
    duration: '4 – 5 hrs',
    prices: {
      hatchback: '[Placeholder: ₹1,899]',
      sedan: '[Placeholder: ₹2,299]',
      suv: '[Placeholder: ₹2,699]',
    },
    features: [
      'All Deep Spa inclusions',
      'Surface clay bar decontamination',
      'Dual-action machine single-stage swirl polish',
      'High-gloss synthetic paint sealant coat',
      'Engine bay wipe-down & satin dressing',
      'Rain repellent treatment on front windshield',
    ],
    recommendedVehicle: 'Vehicles preparing for trips, resale, or special occasions',
    whatsappMessage: 'Hello Car Care, I am interested in the Gloss & Shield Detailing package in Coimbatore.',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Precision Snow Foam Bath',
    category: 'foam-wash',
    categoryLabel: 'Snow Foam Wash',
    image: '/src/assets/images/hero_car_wash_foam_1792225163086.jpg',
    description: 'Thick pH-neutral foam dissolving surface particulate before contact washing.',
  },
  {
    id: 'gal-2',
    title: 'High-Pressure Water Rinse',
    category: 'foam-wash',
    categoryLabel: 'Pressure Washing',
    image: '/src/assets/images/service_foam_pressure_wash_1792225164676.jpg',
    description: 'Removing contaminants and foam with calibrated pressure to safeguard clear-coat.',
  },
  {
    id: 'gal-3',
    title: 'Pristine Cabin Detailing',
    category: 'interior',
    categoryLabel: 'Interior Cleaning',
    image: '/src/assets/images/service_interior_detailing_1792225164410.jpg',
    description: 'Full vacuum extraction, leather care, and dust-free matte dashboard finish.',
  },
  {
    id: 'gal-4',
    title: 'Paint Correction & Reflection',
    category: 'detailing',
    categoryLabel: 'Machine Polishing',
    image: '/src/assets/images/service_car_polishing_gloss_1792225165724.jpg',
    description: 'Dual-action orbital polishing bringing out razor-sharp mirror reflections.',
  },
  {
    id: 'gal-5',
    title: 'Hydrophobic Ceramic Beading',
    category: 'ceramic',
    categoryLabel: 'Ceramic Coating',
    image: '/src/assets/images/gallery_ceramic_beading_1792225164837.jpg',
    description: 'Micro water beading proving superior surface tension and SiO2 protection.',
  },
];

export const WHY_CHOOSE_US = [
  {
    title: 'Filtered Water Rinsing',
    description: 'We use filtered, treated water to prevent mineral deposits, calcification, and water spotting on your vehicle’s clear coat.',
  },
  {
    title: 'pH-Neutral Safe Shampoos',
    description: 'Our snow foam formulas lift road film without stripping factory wax, ceramic coatings, or drying out sensitive rubber door seals.',
  },
  {
    title: 'Two-Bucket & Grit Guard Method',
    description: 'We separate rinse water from clean wash suds with sediment traps to ensure no abrasive road dust ever scratches your paint.',
  },
  {
    title: '100% WhatsApp Text Booking',
    description: 'No waiting on hold. Send us your vehicle details, get transparent estimates, and receive live photo updates directly on WhatsApp.',
  },
  {
    title: 'Dedicated Attention to Detail',
    description: 'From fuel-cap crevices and alloy lug nuts to AC vents, every inch of your vehicle is inspected before handoff.',
  },
  {
    title: 'Convenient Coimbatore Access',
    description: 'Centrally situated to cater to car owners across RS Puram, Gandhipuram, Peelamedu, Saibaba Colony, and surrounding areas.',
  },
];

export const FAQS_DATA: FAQItem[] = [
  {
    question: 'How do I book a car wash or detailing slot at Car Care?',
    answer: 'Booking is simple and fast via WhatsApp text message. Just click any “Book on WhatsApp” button on our website, or message us directly at +91 9566992055 with your vehicle model, desired service, and preferred date or time window. We will promptly confirm your slot with details.',
  },
  {
    question: 'How long does a typical car wash take?',
    answer: 'A standard Exterior Foam Wash takes approximately 45 to 60 minutes. Complete Car Spa treatments take between 2 to 3 hours, while machine polishing or ceramic detailing packages take 4 hours to 1–2 days depending on curing requirements.',
  },
  {
    question: 'Why are prices listed as placeholders on the website?',
    answer: 'Our website currently displays clearly labeled placeholder prices to illustrate our package tiers. Actual rates vary based on exact vehicle size, paint condition, and chosen customized add-ons. You can text us your vehicle model on WhatsApp for a firm, transparent quote.',
  },
  {
    question: 'What is the difference between a standard car wash and car detailing?',
    answer: 'A car wash focuses on cleansing surface dirt from the exterior and basic vacuuming inside. Car detailing is an in-depth restoration process that targets paint correction, swirl mark removal, leather deep conditioning, steam sanitization, and protective ceramic or sealant coatings.',
  },
  {
    question: 'Can I drop off my car and collect it later?',
    answer: 'Yes! Many customers drop off their car in the morning and pick it up after work. We send progress photos and a ready-for-pickup notification directly to your WhatsApp.',
  },
  {
    question: 'Are your cleaning products safe for ceramic coated or wrapped cars?',
    answer: 'Absolutely. We use pH-neutral, wax-safe automotive shampoos and ultra-plush microfiber towels specifically calibrated for ceramic-coated and PPF-wrapped vehicles.',
  },
];

export const COIMBATORE_LOCALITIES = [
  'RS Puram',
  'Gandhipuram',
  'Peelamedu',
  'Saravanampatti',
  'Saibaba Colony',
  'Race Course',
  'Singanallur',
  'Ramanathapuram',
  'Vadavalli',
  'Hopes College / Avinashi Road',
];
