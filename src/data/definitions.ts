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

// 업체 프로필 데이터 타입
export interface BusinessProfile {
  id: string;
  businessName: string;
  category: string;
  subcategory?: string;
  description: string;
  phone: string;
  email: string;
  address: string;
  location: {
    lat: number;
    lng: number;
  };
  
  // 영업시간
  businessHours: {
    [key: string]: {
      open: string;
      close: string;
      closed: boolean;
    };
  };
  
  // 편의시설
  amenities: {
    parking: boolean;
    wifi: boolean;
    cardPayment: boolean;
    cashPayment: boolean;
  };
  
  // 이미지
  images: {
    profile: string;
    interior: string[];
    works: string[];
  };
  
  // 서비스 및 가격
  services: {
    [serviceName: string]: number;
  };
  
  // 타임스페셜
  timeSpecial?: {
    active: boolean;
    services: Array<{
      service: string;
      discountRate: number;
      startDate: string;
      endDate: string;
      startTime: string;
      endTime: string;
    }>;
    description: string;
  };
  
  // 통계
  stats: {
    totalReviews: number;
    averageRating: number;
    totalCustomers: number;
    monthlyBookings: number;
  };
  
  // 메타데이터
  createdAt: string;
  updatedAt: string;
  isVerified: boolean;
  isActive: boolean;
}

// 리뷰 데이터 타입
export interface Review {
  id: string;
  businessId: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  images?: string[];
  service: string;
  createdAt: string;
  businessReply?: string;
  businessReplyAt?: string;
}

// 예약 데이터 타입
export interface Booking {
  id: string;
  businessId: string;
  userId: string;
  userName: string;
  service: string;
  price: number;
  date: string;
  time: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  createdAt: string;
  notes?: string;
} 