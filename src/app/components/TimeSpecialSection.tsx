import TimeSpecialGrid from './TimeSpecialGrid';
import { timeSpecialReviews as allReviews } from '@/app/data/reviews';
import { Salon, Service } from '@/data/definitions';

// 새로운 데이터 구조에 맞춘 임시 데이터
const salonData: (Omit<Salon, 'menu'> & { time: string; services: Service[] })[] = [
  {
    id: "1",
    name: "LA 남성 그루밍 이발소",
    address: "서울 강남구 테헤란로 123",
    images: ["https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=1920"],
    rating: 4.8,
    reviewCount: 120,
    tags: ["헤어", "남성컷", "이발소"],
    time: "오늘 14:00 - 16:00",
    services: [
      { type: 'simple', name: "남성컷", price: 32000, originalPrice: 40000, discount: "20%", tags: ["남성컷"] },
      { type: 'simple', name: "다운펌", price: 48000, originalPrice: 60000, discount: "20%", tags: ["다운펌", "펌"] }
    ]
  },
  {
    id: "2",
    name: "flawless 팀색 및 헤어 시스템",
    address: "서울 강남구 역삼로 456",
    images: ["https://images.pexels.com/photos/3993451/pexels-photo-3993451.jpeg?auto=compress&cs=tinysrgb&w=1920"],
    rating: 4.9,
    reviewCount: 250,
    tags: ["헤어", "염색", "클리닉"],
    time: "오늘 11:00 - 13:00",
    services: [
      { type: 'simple', name: "전체염색", price: 84000, originalPrice: 120000, discount: "30%", tags: ["염색"] },
      { type: 'simple', name: "뿌리염색", price: 56000, originalPrice: 80000, discount: "30%", tags: ["염색"] }
    ]
  },
   {
    id: "3",
    name: "크리스피 컷 1",
    address: "서울 서초구 반포대로 789",
    images: ["https://images.pexels.com/photos/3993453/pexels-photo-3993453.jpeg?auto=compress&cs=tinysrgb&w=1920"],
    rating: 4.7,
    reviewCount: 88,
    tags: ["헤어", "펌", "클리닉"],
    time: "오늘 18:00 - 20:00",
    services: [
      { type: 'simple', name: "일반펌", price: 105000, originalPrice: 150000, discount: "30%", tags: ["펌"] },
      { type: 'simple', name: "클리닉", price: 70000, originalPrice: 100000, discount: "30%", tags: ["클리닉"] }
    ]
  },
  {
    id: "4",
    name: "제이 @ The Parlour",
    address: "서울 용산구 이태원로 12",
    images: ["https://images.pexels.com/photos/3993455/pexels-photo-3993455.jpeg?auto=compress&cs=tinysrgb&w=1920"],
    rating: 5.0,
    reviewCount: 150,
    tags: ["헤어", "여성컷", "드라이"],
    time: "오늘 13:00 - 15:00",
    services: [
      { type: 'simple', name: "여성컷", price: 35000, originalPrice: 50000, discount: "30%", tags: ["여성컷"] },
      { type: 'simple', name: "드라이", price: 28000, originalPrice: 40000, discount: "30%", tags: ["드라이"] }
    ]
  },
  {
    id: "5",
    name: "트라이브",
    address: "서울 성동구 성수동2가",
    images: ["https://images.pexels.com/photos/3993457/pexels-photo-3993457.jpeg?auto=compress&cs=tinysrgb&w=1920"],
    rating: 4.6,
    reviewCount: 95,
    tags: ["헤어", "특수펌", "두피케어"],
    time: "오늘 16:00 - 18:00",
    services: [
      { type: 'simple', name: "특수펌", price: 140000, originalPrice: 200000, discount: "30%", tags: ["펌", "특수펌"] },
      { type: 'simple', name: "두피케어", price: 84000, originalPrice: 120000, discount: "30%", tags: ["클리닉", "두피"] }
    ]
  },
  {
    id: "6",
    name: "프리미엄 헤어샵",
    address: "서울 강남구 청담동",
    images: ["https://images.pexels.com/photos/3993467/pexels-photo-3993467.jpeg?auto=compress&cs=tinysrgb&w=1920"],
    rating: 4.9,
    reviewCount: 310,
    tags: ["헤어", "컷", "염색", "프리미엄"],
    time: "오늘 17:00 - 19:00",
    services: [
      { type: 'simple', name: "컷", price: 63000, originalPrice: 90000, discount: "30%", tags: ["컷"] },
      { type: 'simple', name: "염색", price: 105000, originalPrice: 150000, discount: "30%", tags: ["염색"] }
    ]
  },
  {
    id: "7",
    name: "네일의 정석",
    address: "서울 마포구 연남동",
    images: ["https://images.pexels.com/photos/6954209/pexels-photo-6954209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"],
    rating: 4.9,
    reviewCount: 420,
    tags: ["네일", "젤네일", "케어"],
    time: "오늘 10:00 - 12:00",
    services: [
      { type: 'simple', name: "이달의 아트", price: 70000, originalPrice: 100000, discount: "30%", tags: ["네일아트", "젤네일"] },
      { type: 'simple', name: "기본 케어", price: 28000, originalPrice: 40000, discount: "30%", tags: ["네일케어"] }
    ]
  },
  {
    id: "8",
    name: "오늘 더 예뻐",
    address: "서울 송파구 잠실동",
    images: ["https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=2070&auto=format&fit=crop"],
    rating: 4.8,
    reviewCount: 180,
    tags: ["메이크업", "데일리", "면접"],
    time: "오늘 09:00 - 11:00",
    services: [
      { type: 'simple', name: "데일리 메이크업", price: 60000, originalPrice: 80000, discount: "25%", tags: ["메이크업", "데일리"] },
      { type: 'simple', name: "헤어 스타일링", price: 30000, originalPrice: 40000, discount: "25%", tags: ["헤어"] }
    ]
  }
];
  
const shuffleArray = (array: any[]) => {
  // Use a deterministic sort instead of random shuffle to prevent hydration mismatch
  return [...array].sort((a, b) => a.name.localeCompare(b.name));
};

interface TimeSpecialSectionProps {
  reviews?: Record<string, { nickname: string; text: string }[]>;
}

const TimeSpecialSection: React.FC<TimeSpecialSectionProps> = ({ reviews = allReviews }) => {
  const shuffledSalons = shuffleArray(salonData).map(salon => ({
    ...salon,
    shuffledServices: shuffleArray([...salon.services]).slice(0, 2)
  }));
  
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TimeSpecialGrid reviews={reviews} initialSalons={shuffledSalons} />
      </div>
    </section>
  );
}

export default TimeSpecialSection; 