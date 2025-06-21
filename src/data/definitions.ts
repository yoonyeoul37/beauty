export type Price = number | '문의' | '상담 후 결정' | '변동';

export interface SimpleService {
  type: 'simple';
  name: string;
  description?: string;
  price: Price;
  originalPrice?: number;
  discount?: string;
  tags: string[];
  isSignature?: boolean;
}

export interface PricingOption {
  sessions: string; // 예: "1회", "10회"
  price: Price;
  originalPrice?: number;
  discount?: string;
}

export interface PackageService {
  type: 'package';
  name: string;
  description?: string;
  pricingOptions: PricingOption[];
  note?: string;
  tags: string[];
  isSignature?: boolean;
}

export type Service = SimpleService | PackageService;

export interface ServiceSection {
  title: string;
  services: Service[];
}

export interface Salon {
  id: string;
  name: string;
  address: string;
  images: string[];
  rating: number;
  reviewCount: number;
  portfolio?: any[]; // For tattoo artists, etc.
  menu: ServiceSection[];
  tags: string[]; // Overall tags for the salon itself
} 