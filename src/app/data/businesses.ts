import { BusinessProfile } from '@/data/definitions';

// 샘플 업체 데이터
export const sampleBusinesses: BusinessProfile[] = [
  {
    id: "1",
    businessName: "LA 남성 그루밍 이발소",
    category: "헤어",
    subcategory: "이발소",
    description: "남성 전용 프리미엄 이발소입니다. 15년 경력의 전문가들이 고객의 개성을 살린 스타일링을 제공합니다.",
    phone: "02-1234-5678",
    email: "la.grooming@example.com",
    address: "서울 강남구 테헤란로 123",
    location: {
      lat: 37.5665,
      lng: 126.9780
    },
    businessHours: {
      monday: { open: '09:00', close: '19:00', closed: false },
      tuesday: { open: '09:00', close: '19:00', closed: false },
      wednesday: { open: '09:00', close: '19:00', closed: false },
      thursday: { open: '09:00', close: '19:00', closed: false },
      friday: { open: '09:00', close: '19:00', closed: false },
      saturday: { open: '09:00', close: '18:00', closed: false },
      sunday: { open: '10:00', close: '17:00', closed: false }
    },
    amenities: {
      parking: true,
      wifi: true,
      cardPayment: true,
      cashPayment: true
    },
    images: {
      profile: "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=1920",
      interior: [
        "https://images.pexels.com/photos/3993451/pexels-photo-3993451.jpeg?auto=compress&cs=tinysrgb&w=1920",
        "https://images.pexels.com/photos/3993453/pexels-photo-3993453.jpeg?auto=compress&cs=tinysrgb&w=1920"
      ],
      works: [
        "https://images.pexels.com/photos/3993455/pexels-photo-3993455.jpeg?auto=compress&cs=tinysrgb&w=1920",
        "https://images.pexels.com/photos/3993457/pexels-photo-3993457.jpeg?auto=compress&cs=tinysrgb&w=1920"
      ]
    },
    services: {
      "남성컷": 40000,
      "다운펌": 60000,
      "염색": 80000,
      "클리닉": 120000,
      "스타일링": 30000
    },
    timeSpecial: {
      active: true,
      services: [
        {
          service: "남성컷",
          discountRate: 20,
          startDate: "2024-01-15",
          endDate: "2024-01-31",
          startTime: "14:00",
          endTime: "16:00"
        },
        {
          service: "다운펌",
          discountRate: 15,
          startDate: "2024-01-15",
          endDate: "2024-01-31",
          startTime: "18:00",
          endTime: "20:00"
        },
        {
          service: "염색",
          discountRate: 25,
          startDate: "2024-01-15",
          endDate: "2024-01-31",
          startTime: "20:00",
          endTime: "22:00"
        }
      ],
      description: "신년 맞이 특별 할인! 시간대별 다양한 서비스 할인"
    },
    stats: {
      totalReviews: 120,
      averageRating: 4.8,
      totalCustomers: 850,
      monthlyBookings: 45
    },
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-15T00:00:00Z",
    isVerified: true,
    isActive: true
  },
  {
    id: "2",
    businessName: "flawless 팀색 및 헤어 시스템",
    category: "헤어",
    subcategory: "헤어샵",
    description: "염색 전문 헤어샵입니다. 최신 트렌드와 고객의 개성을 조화롭게 표현합니다.",
    phone: "02-2345-6789",
    email: "flawless@example.com",
    address: "서울 강남구 역삼로 456",
    location: {
      lat: 37.5665,
      lng: 126.9780
    },
    businessHours: {
      monday: { open: '10:00', close: '20:00', closed: false },
      tuesday: { open: '10:00', close: '20:00', closed: false },
      wednesday: { open: '10:00', close: '20:00', closed: false },
      thursday: { open: '10:00', close: '20:00', closed: false },
      friday: { open: '10:00', close: '20:00', closed: false },
      saturday: { open: '10:00', close: '19:00', closed: false },
      sunday: { open: '11:00', close: '18:00', closed: false }
    },
    amenities: {
      parking: false,
      wifi: true,
      cardPayment: true,
      cashPayment: true
    },
    images: {
      profile: "https://images.pexels.com/photos/3993451/pexels-photo-3993451.jpeg?auto=compress&cs=tinysrgb&w=1920",
      interior: [
        "https://images.pexels.com/photos/3993453/pexels-photo-3993453.jpeg?auto=compress&cs=tinysrgb&w=1920",
        "https://images.pexels.com/photos/3993455/pexels-photo-3993455.jpeg?auto=compress&cs=tinysrgb&w=1920"
      ],
      works: [
        "https://images.pexels.com/photos/3993457/pexels-photo-3993457.jpeg?auto=compress&cs=tinysrgb&w=1920",
        "https://images.pexels.com/photos/3993467/pexels-photo-3993467.jpeg?auto=compress&cs=tinysrgb&w=1920"
      ]
    },
    services: {
      "전체염색": 120000,
      "뿌리염색": 80000,
      "컷": 50000,
      "펌": 100000,
      "클리닉": 150000
    },
    timeSpecial: {
      active: true,
      services: [
        {
          service: "전체염색",
          discountRate: 30,
          startDate: "2024-01-10",
          endDate: "2024-01-25",
          startTime: "15:00",
          endTime: "17:00"
        }
      ],
      description: "겨울 시즌 특별 할인! 전체염색 30% 할인"
    },
    stats: {
      totalReviews: 250,
      averageRating: 4.9,
      totalCustomers: 1200,
      monthlyBookings: 78
    },
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-10T00:00:00Z",
    isVerified: true,
    isActive: true
  },
  {
    id: "3",
    businessName: "크리스피 컷 1",
    category: "헤어",
    subcategory: "헤어샵",
    description: "트렌디한 스타일링을 추구하는 헤어샵입니다. 젊은 감각의 디자이너들이 고객의 스타일을 완성합니다.",
    phone: "02-3456-7890",
    email: "crispy@example.com",
    address: "서울 서초구 반포대로 789",
    location: {
      lat: 37.5665,
      lng: 126.9780
    },
    businessHours: {
      monday: { open: '10:00', close: '20:00', closed: false },
      tuesday: { open: '10:00', close: '20:00', closed: false },
      wednesday: { open: '10:00', close: '20:00', closed: false },
      thursday: { open: '10:00', close: '20:00', closed: false },
      friday: { open: '10:00', close: '20:00', closed: false },
      saturday: { open: '10:00', close: '19:00', closed: false },
      sunday: { open: '11:00', close: '18:00', closed: false }
    },
    amenities: {
      parking: true,
      wifi: true,
      cardPayment: true,
      cashPayment: false
    },
    images: {
      profile: "https://images.pexels.com/photos/3993453/pexels-photo-3993453.jpeg?auto=compress&cs=tinysrgb&w=1920",
      interior: [
        "https://images.pexels.com/photos/3993455/pexels-photo-3993455.jpeg?auto=compress&cs=tinysrgb&w=1920",
        "https://images.pexels.com/photos/3993457/pexels-photo-3993457.jpeg?auto=compress&cs=tinysrgb&w=1920"
      ],
      works: [
        "https://images.pexels.com/photos/3993467/pexels-photo-3993467.jpeg?auto=compress&cs=tinysrgb&w=1920",
        "https://images.pexels.com/photos/6954209/pexels-photo-6954209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      ]
    },
    services: {
      "일반펌": 150000,
      "클리닉": 100000,
      "컷": 40000,
      "염색": 80000,
      "스타일링": 35000
    },
    timeSpecial: {
      active: true,
      services: [
        {
          service: "일반펌",
          discountRate: 30,
          startDate: "2024-01-12",
          endDate: "2024-01-28",
          startTime: "16:00",
          endTime: "18:00"
        }
      ],
      description: "봄 준비 특별 할인! 일반펌 30% 할인"
    },
    stats: {
      totalReviews: 88,
      averageRating: 4.7,
      totalCustomers: 650,
      monthlyBookings: 32
    },
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-12T00:00:00Z",
    isVerified: true,
    isActive: true
  },
  {
    id: "4",
    businessName: "네일의 정석",
    category: "네일아트",
    subcategory: "네일샵",
    description: "네일 아트 전문점입니다. 최신 트렌드와 고객의 취향을 반영한 아름다운 네일을 제공합니다.",
    phone: "02-4567-8901",
    email: "nail.art@example.com",
    address: "서울 마포구 연남동",
    location: {
      lat: 37.5665,
      lng: 126.9780
    },
    businessHours: {
      monday: { open: '10:00', close: '19:00', closed: false },
      tuesday: { open: '10:00', close: '19:00', closed: false },
      wednesday: { open: '10:00', close: '19:00', closed: false },
      thursday: { open: '10:00', close: '19:00', closed: false },
      friday: { open: '10:00', close: '19:00', closed: false },
      saturday: { open: '10:00', close: '18:00', closed: false },
      sunday: { open: '11:00', close: '17:00', closed: false }
    },
    amenities: {
      parking: false,
      wifi: true,
      cardPayment: true,
      cashPayment: true
    },
    images: {
      profile: "https://images.pexels.com/photos/6954209/pexels-photo-6954209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      interior: [
        "https://images.pexels.com/photos/3993455/pexels-photo-3993455.jpeg?auto=compress&cs=tinysrgb&w=1920",
        "https://images.pexels.com/photos/3993457/pexels-photo-3993457.jpeg?auto=compress&cs=tinysrgb&w=1920"
      ],
      works: [
        "https://images.pexels.com/photos/3993467/pexels-photo-3993467.jpeg?auto=compress&cs=tinysrgb&w=1920",
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=2070&auto=format&fit=crop"
      ]
    },
    services: {
      "이달의 아트": 100000,
      "기본 케어": 40000,
      "젤네일": 60000,
      "네일아트": 80000,
      "패디큐어": 50000
    },
    timeSpecial: {
      active: true,
      service: "이달의 아트",
      discountRate: 30,
      startDate: "2024-01-08",
      endDate: "2024-01-22",
      description: "신년 특별 할인! 이달의 아트 30% 할인"
    },
    stats: {
      totalReviews: 420,
      averageRating: 4.9,
      totalCustomers: 1800,
      monthlyBookings: 120
    },
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-08T00:00:00Z",
    isVerified: true,
    isActive: true
  },
  {
    id: "5",
    businessName: "오늘 더 예뻐",
    category: "메이크업",
    subcategory: "메이크업샵",
    description: "데일리 메이크업부터 특별한 날을 위한 메이크업까지, 고객의 아름다움을 극대화합니다.",
    phone: "02-5678-9012",
    email: "beautiful.today@example.com",
    address: "서울 송파구 잠실동",
    location: {
      lat: 37.5665,
      lng: 126.9780
    },
    businessHours: {
      monday: { open: '09:00', close: '18:00', closed: false },
      tuesday: { open: '09:00', close: '18:00', closed: false },
      wednesday: { open: '09:00', close: '18:00', closed: false },
      thursday: { open: '09:00', close: '18:00', closed: false },
      friday: { open: '09:00', close: '18:00', closed: false },
      saturday: { open: '09:00', close: '17:00', closed: false },
      sunday: { open: '10:00', close: '16:00', closed: false }
    },
    amenities: {
      parking: true,
      wifi: true,
      cardPayment: true,
      cashPayment: true
    },
    images: {
      profile: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=2070&auto=format&fit=crop",
      interior: [
        "https://images.pexels.com/photos/3993455/pexels-photo-3993455.jpeg?auto=compress&cs=tinysrgb&w=1920",
        "https://images.pexels.com/photos/3993457/pexels-photo-3993457.jpeg?auto=compress&cs=tinysrgb&w=1920"
      ],
      works: [
        "https://images.pexels.com/photos/3993467/pexels-photo-3993467.jpeg?auto=compress&cs=tinysrgb&w=1920",
        "https://images.pexels.com/photos/6954209/pexels-photo-6954209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      ]
    },
    services: {
      "데일리 메이크업": 80000,
      "헤어 스타일링": 40000,
      "웨딩 메이크업": 200000,
      "특수분장": 150000,
      "메이크업 클래스": 100000
    },
    timeSpecial: {
      active: true,
      service: "데일리 메이크업",
      discountRate: 25,
      startDate: "2024-01-05",
      endDate: "2024-01-20",
      description: "새해 특별 할인! 데일리 메이크업 25% 할인"
    },
    stats: {
      totalReviews: 180,
      averageRating: 4.8,
      totalCustomers: 950,
      monthlyBookings: 65
    },
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-05T00:00:00Z",
    isVerified: true,
    isActive: true
  },
  {
    id: "6",
    businessName: "스킨케어 뷰티클리닉",
    category: "피부관리",
    subcategory: "피부샵",
    description: "전문 피부관리와 케어를 제공하는 뷰티클리닉입니다. 개인 맞춤형 케어로 건강한 피부를 만들어드립니다.",
    phone: "02-6789-0123",
    email: "skincare@example.com",
    address: "서울 강남구 청담동",
    location: {
      lat: 37.5665,
      lng: 126.9780
    },
    businessHours: {
      monday: { open: '10:00', close: '19:00', closed: false },
      tuesday: { open: '10:00', close: '19:00', closed: false },
      wednesday: { open: '10:00', close: '19:00', closed: false },
      thursday: { open: '10:00', close: '19:00', closed: false },
      friday: { open: '10:00', close: '19:00', closed: false },
      saturday: { open: '10:00', close: '18:00', closed: false },
      sunday: { open: '11:00', close: '17:00', closed: false }
    },
    amenities: {
      parking: true,
      wifi: true,
      cardPayment: true,
      cashPayment: true
    },
    images: {
      profile: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop",
      interior: [
        "https://images.pexels.com/photos/3993455/pexels-photo-3993455.jpeg?auto=compress&cs=tinysrgb&w=1920",
        "https://images.pexels.com/photos/3993457/pexels-photo-3993457.jpeg?auto=compress&cs=tinysrgb&w=1920"
      ],
      works: [
        "https://images.pexels.com/photos/3993467/pexels-photo-3993467.jpeg?auto=compress&cs=tinysrgb&w=1920",
        "https://images.pexels.com/photos/6954209/pexels-photo-6954209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      ]
    },
    services: {
      "기본 케어": 80000,
      "진정 케어": 120000,
      "미백 케어": 150000,
      "안티에이징": 200000,
      "아쿠아필": 100000
    },
    timeSpecial: {
      active: true,
      service: "기본 케어",
      discountRate: 35,
      startDate: "2024-01-15",
      endDate: "2024-01-30",
      description: "겨울 피부 케어 특별 할인! 기본 케어 35% 할인"
    },
    stats: {
      totalReviews: 320,
      averageRating: 4.9,
      totalCustomers: 1500,
      monthlyBookings: 95
    },
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-15T00:00:00Z",
    isVerified: true,
    isActive: true
  },
  {
    id: "7",
    businessName: "속눈썹 아름다움",
    category: "속눈썹",
    subcategory: "속눈썹샵",
    description: "자연스럽고 아름다운 속눈썹 연장을 전문으로 하는 샵입니다. 개인 맞춤형 디자인으로 완벽한 눈매를 완성합니다.",
    phone: "02-7890-1234",
    email: "eyelash@example.com",
    address: "서울 서초구 서초동",
    location: {
      lat: 37.5665,
      lng: 126.9780
    },
    businessHours: {
      monday: { open: '10:00', close: '19:00', closed: false },
      tuesday: { open: '10:00', close: '19:00', closed: false },
      wednesday: { open: '10:00', close: '19:00', closed: false },
      thursday: { open: '10:00', close: '19:00', closed: false },
      friday: { open: '10:00', close: '19:00', closed: false },
      saturday: { open: '10:00', close: '18:00', closed: false },
      sunday: { open: '11:00', close: '17:00', closed: false }
    },
    amenities: {
      parking: false,
      wifi: true,
      cardPayment: true,
      cashPayment: true
    },
    images: {
      profile: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=2080&auto=format&fit=crop",
      interior: [
        "https://images.pexels.com/photos/3993455/pexels-photo-3993455.jpeg?auto=compress&cs=tinysrgb&w=1920",
        "https://images.pexels.com/photos/3993457/pexels-photo-3993457.jpeg?auto=compress&cs=tinysrgb&w=1920"
      ],
      works: [
        "https://images.pexels.com/photos/3993467/pexels-photo-3993467.jpeg?auto=compress&cs=tinysrgb&w=1920",
        "https://images.pexels.com/photos/6954209/pexels-photo-6954209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      ]
    },
    services: {
      "자연스러운 연장": 120000,
      "볼륨 연장": 150000,
      "속눈썹 펌": 80000,
      "속눈썹 케어": 50000,
      "속눈썹 리프팅": 100000
    },
    timeSpecial: {
      active: true,
      service: "자연스러운 연장",
      discountRate: 25,
      startDate: "2024-01-10",
      endDate: "2024-01-25",
      description: "신년 특별 할인! 자연스러운 연장 25% 할인"
    },
    stats: {
      totalReviews: 280,
      averageRating: 4.8,
      totalCustomers: 1200,
      monthlyBookings: 85
    },
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-10T00:00:00Z",
    isVerified: true,
    isActive: true
  },
  {
    id: "8",
    businessName: "왁싱 전문 뷰티샵",
    category: "왁싱",
    subcategory: "왁싱샵",
    description: "전문적인 왁싱 서비스를 제공하는 뷰티샵입니다. 깔끔하고 안전한 제모로 매끄러운 피부를 만들어드립니다.",
    phone: "02-8901-2345",
    email: "waxing@example.com",
    address: "서울 마포구 홍대입구",
    location: {
      lat: 37.5665,
      lng: 126.9780
    },
    businessHours: {
      monday: { open: '10:00', close: '19:00', closed: false },
      tuesday: { open: '10:00', close: '19:00', closed: false },
      wednesday: { open: '10:00', close: '19:00', closed: false },
      thursday: { open: '10:00', close: '19:00', closed: false },
      friday: { open: '10:00', close: '19:00', closed: false },
      saturday: { open: '10:00', close: '18:00', closed: false },
      sunday: { open: '11:00', close: '17:00', closed: false }
    },
    amenities: {
      parking: true,
      wifi: true,
      cardPayment: true,
      cashPayment: true
    },
    images: {
      profile: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=2126&auto=format&fit=crop",
      interior: [
        "https://images.pexels.com/photos/3993455/pexels-photo-3993455.jpeg?auto=compress&cs=tinysrgb&w=1920",
        "https://images.pexels.com/photos/3993457/pexels-photo-3993457.jpeg?auto=compress&cs=tinysrgb&w=1920"
      ],
      works: [
        "https://images.pexels.com/photos/3993467/pexels-photo-3993467.jpeg?auto=compress&cs=tinysrgb&w=1920",
        "https://images.pexels.com/photos/6954209/pexels-photo-6954209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      ]
    },
    services: {
      "브라질리언 왁싱": 80000,
      "비키니 왁싱": 60000,
      "다리 왁싱": 50000,
      "팔 왁싱": 40000,
      "얼굴 왁싱": 30000
    },
    timeSpecial: {
      active: true,
      service: "브라질리언 왁싱",
      discountRate: 30,
      startDate: "2024-01-12",
      endDate: "2024-01-27",
      description: "겨울 시즌 특별 할인! 브라질리언 왁싱 30% 할인"
    },
    stats: {
      totalReviews: 150,
      averageRating: 4.7,
      totalCustomers: 800,
      monthlyBookings: 45
    },
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-12T00:00:00Z",
    isVerified: true,
    isActive: true
  }
];

// 타임스페셜이 활성화된 업체만 필터링
export const getActiveTimeSpecialBusinesses = () => {
  return sampleBusinesses.filter(business => business.timeSpecial?.active);
};

// 특정 카테고리의 업체 필터링
export const getBusinessesByCategory = (category: string) => {
  return sampleBusinesses.filter(business => business.category === category);
};

// 업체 ID로 업체 찾기
export const getBusinessById = (id: string) => {
  return sampleBusinesses.find(business => business.id === id);
};

// 위치 기반으로 가까운 업체 찾기 (하버사인 공식 사용)
export const getNearbyBusinesses = (userLat: number, userLng: number, radiusKm: number = 5, limit: number = 3) => {
  const calculateDistance = (lat1: number, lng1: number, lat2: number, lng2: number) => {
    const R = 6371; // 지구의 반지름 (km)
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLng = (lng2 - lng1) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLng/2) * Math.sin(dLng/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
  };

  return sampleBusinesses
    .map(business => ({
      ...business,
      distance: calculateDistance(userLat, userLng, business.location.lat, business.location.lng)
    }))
    .filter(business => business.distance <= radiusKm)
    .sort((a, b) => a.distance - b.distance)
    .slice(0, limit);
}; 