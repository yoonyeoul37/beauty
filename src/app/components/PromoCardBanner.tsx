"use client";

import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

const promoItems = [
  {
    id: 1,
    title: "여름맞이 젤네일 특가",
    description: "시원한 여름 컬러로 기분 전환!",
    imageUrl: "https://images.pexels.com/photos/14589385/pexels-photo-14589385.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 2,
    title: "맨즈 헤어 스타일링",
    description: "가장 트렌디한 스타일을 만나보세요",
    imageUrl: "https://images.pexels.com/photos/4067935/pexels-photo-4067935.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 3,
    title: "속눈썹 연장 첫 시술 할인",
    description: "또렷하고 아름다운 눈매를 경험하세요",
    imageUrl: "https://images.pexels.com/photos/3738346/pexels-photo-3738346.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 4,
    title: "프리미엄 두피 케어",
    description: "건강한 두피에서 건강한 머릿결이",
    imageUrl: "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

export default function PromoCardBanner() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollability = () => {
    const el = scrollContainerRef.current;
    if (el) {
      setCanScrollLeft(el.scrollLeft > 0);
      setCanScrollRight(el.scrollWidth > el.clientWidth + el.scrollLeft + 1);
    }
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (el) {
      checkScrollability();
      el.addEventListener('scroll', checkScrollability);
      window.addEventListener('resize', checkScrollability);
      return () => {
        el.removeEventListener('scroll', checkScrollability);
        window.removeEventListener('resize', checkScrollability);
      };
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="py-8 relative">
       {canScrollLeft && (
        <button 
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-md"
        >
          <ChevronLeftIcon className="h-6 w-6 text-gray-700" />
        </button>
      )}
      <div 
        ref={scrollContainerRef}
        className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide"
      >
        {promoItems.map((item) => (
          <div key={item.id} className="flex-none w-72 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
            <div className="relative h-40">
              <Image
                src={item.imageUrl}
                alt={item.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4">
              <h4 className="font-bold text-gray-800 truncate">{item.title}</h4>
              <p className="text-sm text-gray-600 truncate">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
       {canScrollRight && (
        <button 
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-md"
        >
          <ChevronRightIcon className="h-6 w-6 text-gray-700" />
        </button>
      )}
    </div>
  );
} 