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
    products: [
      {
        id: "prod_1",
        name: "프리미엄 샴푸",
        description: "두피 건강을 위한 프리미엄 샴푸입니다. 탈모 예방과 모발 강화에 도움을 줍니다.",
        price: 35000,
        originalPrice: 45000,
        image: "/images/cosmetics-9086984_640.jpg",
        category: "헤어케어",
        isNew: true,
        inStock: true,
        tags: ["샴푸", "탈모예방", "모발강화"]
      },
      {
        id: "prod_2",
        name: "헤어 왁스",
        description: "자연스러운 스타일링을 위한 프리미엄 헤어 왁스입니다. 끈적임 없이 오래 지속됩니다.",
        price: 25000,
        image: "/images/cosmetics-9086984_640.jpg",
        category: "스타일링",
        isNew: false,
        inStock: true,
        tags: ["왁스", "스타일링", "자연스러움"]
      },
      {
        id: "prod_3",
        name: "헤어 브러시",
        description: "고급스러운 헤어 브러시입니다. 모발 손상을 최소화하며 스타일링을 도와줍니다.",
        price: 18000,
        image: "/images/cosmetics-9086984_640.jpg",
        category: "도구",
        isNew: false,
        inStock: true,
        tags: ["브러시", "도구", "모발보호"]
      },
      {
        id: "prod_1_4",
        name: "두피 마사지 오일",
        description: "두피 혈액순환을 촉진하는 마사지 오일입니다. 스트레스 해소와 모발 성장에 도움을 줍니다.",
        price: 32000,
        originalPrice: 40000,
        image: "/images/cosmetics-9086984_640.jpg",
        category: "헤어케어",
        isNew: true,
        inStock: true,
        tags: ["마사지오일", "혈액순환", "모발성장"]
      },
      {
        id: "prod_1_5",
        name: "헤어 스프레이",
        description: "강력한 홀드력을 자랑하는 헤어 스프레이입니다. 습기에도 강하며 하루 종일 스타일을 유지합니다.",
        price: 22000,
        image: "/images/cosmetics-9086984_640.jpg",
        category: "스타일링",
        isNew: false,
        inStock: true,
        tags: ["스프레이", "강력홀드", "습기방지"]
      }
    ],
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
    products: [
      {
        id: "prod_4",
        name: "염색 전용 샴푸",
        description: "염색 후 모발을 보호하는 전용 샴푸입니다. 색상 유지와 모발 건강에 특화되어 있습니다.",
        price: 28000,
        originalPrice: 35000,
        image: "/images/cosmetics-9086984_640.jpg",
        category: "헤어케어",
        isNew: true,
        inStock: true,
        tags: ["염색", "색상유지", "모발보호"]
      },
      {
        id: "prod_5",
        name: "컬러 트리트먼트",
        description: "염색 후 색상 보정과 모발 회복을 위한 트리트먼트입니다.",
        price: 42000,
        image: "/images/cosmetics-9086984_640.jpg",
        category: "헤어케어",
        isNew: false,
        inStock: true,
        tags: ["트리트먼트", "색상보정", "모발회복"]
      },
      {
        id: "prod_2_3",
        name: "염색 전용 컨디셔너",
        description: "염색 모발을 부드럽게 가꿔주는 전용 컨디셔너입니다. 색상 유지와 윤기를 동시에 케어합니다.",
        price: 25000,
        image: "/images/cosmetics-9086984_640.jpg",
        category: "헤어케어",
        isNew: false,
        inStock: true,
        tags: ["컨디셔너", "염색케어", "윤기"]
      },
      {
        id: "prod_2_4",
        name: "헤어 마스크",
        description: "깊은 영양 공급을 위한 헤어 마스크입니다. 손상된 모발을 회복시켜줍니다.",
        price: 38000,
        originalPrice: 48000,
        image: "/images/cosmetics-9086984_640.jpg",
        category: "헤어케어",
        isNew: true,
        inStock: true,
        tags: ["마스크", "영양공급", "모발회복"]
      },
      {
        id: "prod_2_5",
        name: "컬러 프로텍터",
        description: "염색 모발의 색상을 오래 유지시켜주는 프로텍터입니다. UV 차단 기능도 포함되어 있습니다.",
        price: 30000,
        image: "/images/cosmetics-9086984_640.jpg",
        category: "헤어케어",
        isNew: false,
        inStock: true,
        tags: ["프로텍터", "색상유지", "UV차단"]
      }
    ],
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
    products: [
      {
        id: "prod_3_1",
        name: "볼륨 펌 전용 샴푸",
        description: "볼륨 펌 후 모발을 케어하는 전용 샴푸입니다. 볼륨감을 오래 유지시켜줍니다.",
        price: 32000,
        originalPrice: 40000,
        image: "/images/cosmetics-9086984_640.jpg",
        category: "헤어케어",
        isNew: true,
        inStock: true,
        tags: ["볼륨펌", "볼륨유지", "전용샴푸"]
      },
      {
        id: "prod_3_2",
        name: "헤어 세럼",
        description: "모발 끝 부분을 케어하는 헤어 세럼입니다. 건조함을 해소하고 윤기를 더해줍니다.",
        price: 28000,
        image: "/images/cosmetics-9086984_640.jpg",
        category: "헤어케어",
        isNew: false,
        inStock: true,
        tags: ["세럼", "모발끝케어", "윤기"]
      },
      {
        id: "prod_3_3",
        name: "헤어 클립 세트",
        description: "다양한 크기의 헤어 클립 세트입니다. 스타일링 시 편리하게 사용할 수 있습니다.",
        price: 15000,
        image: "/images/cosmetics-9086984_640.jpg",
        category: "도구",
        isNew: false,
        inStock: true,
        tags: ["클립", "스타일링도구", "세트"]
      },
      {
        id: "prod_3_4",
        name: "헤어 드라이어",
        description: "프로페셔널 헤어 드라이어입니다. 강력한 바람과 이온 기능으로 빠른 건조를 도와줍니다.",
        price: 85000,
        originalPrice: 120000,
        image: "/images/cosmetics-9086984_640.jpg",
        category: "도구",
        isNew: true,
        inStock: true,
        tags: ["드라이어", "프로페셔널", "이온기능"]
      }
    ],
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
    products: [
      {
        id: "prod_4_1",
        name: "네일 케어 오일",
        description: "네일과 큐티클을 케어하는 오일입니다. 건조함을 해소하고 건강한 네일을 유지시켜줍니다.",
        price: 18000,
        image: "/images/cosmetics-9086984_640.jpg",
        category: "네일케어",
        isNew: false,
        inStock: true,
        tags: ["네일오일", "큐티클케어", "건조함해소"]
      },
      {
        id: "prod_4_2",
        name: "젤 네일 세트",
        description: "다양한 색상의 젤 네일 세트입니다. 집에서도 쉽게 사용할 수 있는 고품질 제품입니다.",
        price: 45000,
        originalPrice: 60000,
        image: "/images/cosmetics-9086984_640.jpg",
        category: "네일아트",
        isNew: true,
        inStock: true,
        tags: ["젤네일", "색상세트", "홈케어"]
      },
      {
        id: "prod_4_3",
        name: "네일 아트 스티커",
        description: "예쁜 네일 아트 스티커 세트입니다. 간단하게 아름다운 네일을 완성할 수 있습니다.",
        price: 12000,
        image: "/images/cosmetics-9086984_640.jpg",
        category: "네일아트",
        isNew: false,
        inStock: true,
        tags: ["스티커", "네일아트", "간편스타일링"]
      },
      {
        id: "prod_4_4",
        name: "네일 파일",
        description: "고급스러운 네일 파일입니다. 네일 모양을 예쁘게 다듬어줍니다.",
        price: 8000,
        image: "/images/cosmetics-9086984_640.jpg",
        category: "네일도구",
        isNew: false,
        inStock: true,
        tags: ["네일파일", "도구", "모양다듬기"]
      },
      {
        id: "prod_4_5",
        name: "네일 리무버",
        description: "젤 네일을 깔끔하게 제거하는 리무버입니다. 네일 손상을 최소화합니다.",
        price: 15000,
        image: "/images/cosmetics-9086984_640.jpg",
        category: "네일케어",
        isNew: false,
        inStock: true,
        tags: ["리무버", "젤제거", "손상방지"]
      }
    ],
    timeSpecial: {
      active: true,
      services: [
        {
          service: "이달의 아트",
          discountRate: 30,
          startDate: "2024-01-08",
          endDate: "2024-01-22",
          startTime: "10:00",
          endTime: "12:00"
        }
      ],
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
    products: [
      {
        id: "prod_5_1",
        name: "프리미엄 파운데이션",
        description: "자연스러운 커버력을 자랑하는 프리미엄 파운데이션입니다. 오래 지속되며 피부에 부담이 적습니다.",
        price: 65000,
        originalPrice: 85000,
        image: "/images/cosmetics-9086984_640.jpg",
        category: "베이스메이크업",
        isNew: true,
        inStock: true,
        tags: ["파운데이션", "자연스러움", "오래지속"]
      },
      {
        id: "prod_5_2",
        name: "아이라이너 펜",
        description: "부드럽고 선명한 라인을 그려주는 아이라이너 펜입니다. 물에 강하며 하루 종일 유지됩니다.",
        price: 28000,
        image: "/images/cosmetics-9086984_640.jpg",
        category: "아이메이크업",
        isNew: false,
        inStock: true,
        tags: ["아이라이너", "선명한라인", "물에강함"]
      },
      {
        id: "prod_5_3",
        name: "립스틱 세트",
        description: "다양한 색상의 립스틱 세트입니다. 보습력이 좋고 오래 지속되는 포뮬러입니다.",
        price: 42000,
        image: "/images/cosmetics-9086984_640.jpg",
        category: "립메이크업",
        isNew: false,
        inStock: true,
        tags: ["립스틱", "색상세트", "보습력"]
      },
      {
        id: "prod_5_4",
        name: "메이크업 브러시 세트",
        description: "프로페셔널 메이크업 브러시 세트입니다. 부드러운 터치로 완벽한 메이크업을 완성합니다.",
        price: 55000,
        originalPrice: 75000,
        image: "/images/cosmetics-9086984_640.jpg",
        category: "메이크업도구",
        isNew: true,
        inStock: true,
        tags: ["브러시세트", "프로페셔널", "부드러운터치"]
      },
      {
        id: "prod_5_5",
        name: "메이크업 리무버",
        description: "깔끔하게 메이크업을 제거하는 리무버입니다. 피부에 자극이 적고 보습 효과도 있습니다.",
        price: 32000,
        image: "/images/cosmetics-9086984_640.jpg",
        category: "스킨케어",
        isNew: false,
        inStock: true,
        tags: ["리무버", "깔끔제거", "보습효과"]
      }
    ],
    timeSpecial: {
      active: true,
      services: [
        {
          service: "데일리 메이크업",
          discountRate: 25,
          startDate: "2024-01-05",
          endDate: "2024-01-20",
          startTime: "10:00",
          endTime: "12:00"
        }
      ],
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
      services: [
        {
          service: "기본 케어",
          discountRate: 35,
          startDate: "2024-01-15",
          endDate: "2024-01-30",
          startTime: "14:00",
          endTime: "16:00"
        }
      ],
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
      services: [
        {
          service: "자연스러운 연장",
          discountRate: 25,
          startDate: "2024-01-10",
          endDate: "2024-01-25",
          startTime: "10:00",
          endTime: "12:00"
        }
      ],
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
      services: [
        {
          service: "브라질리언 왁싱",
          discountRate: 30,
          startDate: "2024-01-12",
          endDate: "2024-01-27",
          startTime: "11:00",
          endTime: "13:00"
        }
      ],
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