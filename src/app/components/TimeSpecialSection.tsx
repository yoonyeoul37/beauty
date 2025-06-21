"use client";
import TimeSpecialGrid from './TimeSpecialGrid';
import { timeSpecialReviews as allReviews } from '@/app/data/reviews'; // 기본값으로 사용
import { useState, useEffect } from 'react';

// 데이터 타입 정의 (중복될 수 있으나, 서버 컴포넌트의 독립성을 위해 유지)
interface ServicePrice {
  name: string;
  originalPrice: number;
  specialPrice: number;
  discount?: string;
}

interface SalonData {
  name: string;
  image: string;
  time: string;
  services: ServicePrice[];
  shuffledServices?: ServicePrice[];
}

const salonData: SalonData[] = [
    {
      name: "LA 남성 그루밍 이발소",
      image: "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=1920",
      time: "오늘 14:00 - 16:00",
      services: [
        { name: "남성컷", originalPrice: 40000, specialPrice: 32000, discount: "20%" },
        { name: "다운펌", originalPrice: 60000, specialPrice: 48000, discount: "20%" }
      ]
    },
    {
      name: "flawless 팀색 및 헤어 시스템",
      image: "https://images.pexels.com/photos/3993451/pexels-photo-3993451.jpeg?auto=compress&cs=tinysrgb&w=1920",
      time: "오늘 11:00 - 13:00",
      services: [
        { name: "전체염색", originalPrice: 120000, specialPrice: 84000, discount: "30%" },
        { name: "뿌리염색", originalPrice: 80000, specialPrice: 56000, discount: "30%" }
      ]
    },
    {
      name: "크리스피 컷 1",
      image: "https://images.pexels.com/photos/3993453/pexels-photo-3993453.jpeg?auto=compress&cs=tinysrgb&w=1920",
      time: "오늘 18:00 - 20:00",
      services: [
        { name: "일반펌", originalPrice: 150000, specialPrice: 105000, discount: "30%" },
        { name: "클리닉", originalPrice: 100000, specialPrice: 70000, discount: "30%" }
      ]
    },
    {
      name: "제이 @ The Parlour",
      image: "https://images.pexels.com/photos/3993455/pexels-photo-3993455.jpeg?auto=compress&cs=tinysrgb&w=1920",
      time: "오늘 13:00 - 15:00",
      services: [
        { name: "여성컷", originalPrice: 50000, specialPrice: 35000, discount: "30%" },
        { name: "드라이", originalPrice: 40000, specialPrice: 28000, discount: "30%" }
      ]
    },
    {
      name: "트라이브",
      image: "https://images.pexels.com/photos/3993457/pexels-photo-3993457.jpeg?auto=compress&cs=tinysrgb&w=1920",
      time: "오늘 16:00 - 18:00",
      services: [
        { name: "특수펌", originalPrice: 200000, specialPrice: 140000, discount: "30%" },
        { name: "두피케어", originalPrice: 120000, specialPrice: 84000, discount: "30%" }
      ]
    },
    {
      name: "프리미엄 헤어샵",
      image: "https://images.pexels.com/photos/3993467/pexels-photo-3993467.jpeg?auto=compress&cs=tinysrgb&w=1920",
      time: "오늘 17:00 - 19:00",
      services: [
        { name: "컷", originalPrice: 90000, specialPrice: 63000, discount: "30%" },
        { name: "염색", originalPrice: 150000, specialPrice: 105000, discount: "30%" }
      ]
    }
  ];
  
const shuffleArray = (array: any[]) => {
  // 진짜 랜덤으로 섞기
  return [...array].sort(() => Math.random() - 0.5);
};

interface TimeSpecialSectionProps {
  reviews?: Record<string, { nickname: string; text: string }[]>;
}

const TimeSpecialSection: React.FC<TimeSpecialSectionProps> = ({ reviews = allReviews }) => {
  const [showAll, setShowAll] = useState(false);
  const [shuffledSalons, setShuffledSalons] = useState<SalonData[]>([]);

  useEffect(() => {
    // 클라이언트에서만 랜덤 실행
    const initialSalons = shuffleArray(salonData.slice(0, 6)).map(salon => ({
      ...salon,
      shuffledServices: shuffleArray([...salon.services]).slice(0, 2)
    }));
    setShuffledSalons(initialSalons);
  }, []);
  
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {shuffledSalons.length > 0 && (
          <TimeSpecialGrid showAll={showAll} reviews={reviews} initialSalons={shuffledSalons} />
        )}
      </div>
    </section>
  );
}

export default TimeSpecialSection; 