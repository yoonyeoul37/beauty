'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from '@heroicons/react/24/solid';
import ReviewModal from './ReviewModal';

const featuredSalons = [
  {
    id: 1,
    name: '프레시컷 바버샵',
    rating: 4.9,
    reviewCount: 367,
    imageUrl: 'https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: '바버샵'
  },
  {
    id: 2,
    name: '제이스 인상',
    rating: 5.0,
    reviewCount: 155,
    imageUrl: 'https://images.pexels.com/photos/4577410/pexels-photo-4577410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: '헤어살롱'
  },
  {
    id: 3,
    name: '3단계 이발소 - 디',
    rating: 4.9,
    reviewCount: 222,
    imageUrl: 'https://images.pexels.com/photos/3993398/pexels-photo-3993398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: '바버샵'
  },
  {
    id: 4,
    name: '조모 다 바버',
    rating: 4.8,
    reviewCount: 346,
    imageUrl: 'https://images.pexels.com/photos/853427/pexels-photo-853427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: '바버샵'
  },
  {
    id: 5,
    name: '네일, 피어나',
    rating: 4.9,
    reviewCount: 312,
    imageUrl: 'https://images.pexels.com/photos/3997388/pexels-photo-3997388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: '네일살롱'
  },
];

// 샘플 리뷰 데이터
const sampleReviews = [
  {
    nickname: "김미영",
    text: "정말 만족스러웠어요! 디자이너님이 제 얼굴형에 맞춰서 스타일을 제안해주셔서 더욱 좋았습니다.",
    rating: 5
  },
  {
    nickname: "박지민",
    text: "친절하고 깔끔하게 해주셔서 감사했습니다. 다음에도 꼭 방문하고 싶어요!",
    rating: 5
  },
  {
    nickname: "이수진",
    text: "가격 대비 퀄리티가 정말 좋아요. 특히 염색이 자연스럽게 잘 나왔습니다.",
    rating: 4
  },
  {
    nickname: "최현우",
    text: "예약도 편하고 시술도 만족스러워요. 추천합니다!",
    rating: 5
  },
  {
    nickname: "정다은",
    text: "깔끔하고 전문적인 시술이었습니다. 다음에도 이용할 예정이에요.",
    rating: 4
  }
];

const FeaturedSalons = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedSalon, setSelectedSalon] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleReviewClick = (salon: any) => {
    setSelectedSalon(salon);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedSalon(null);
  };

  return (
    <>
      <div className="bg-gray-50 py-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-800">추천 업체</h2>
            <div className="hidden sm:flex items-center gap-x-2">
               <button
                onClick={() => scroll('left')}
                className="p-2 rounded-full bg-white text-gray-600 hover:bg-gray-100 transition shadow"
                aria-label="scroll left"
              >
                <ChevronLeftIcon className="h-5 w-5" />
              </button>
              <button
                onClick={() => scroll('right')}
                className="p-2 rounded-full bg-white text-gray-600 hover:bg-gray-100 transition shadow"
                aria-label="scroll right"
              >
                <ChevronRightIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div
            ref={scrollRef}
            className="flex gap-x-6 overflow-x-auto scroll-smooth scrollbar-hide pb-4"
          >
            {featuredSalons.map((salon) => (
              <div key={salon.id} className="group block flex-shrink-0 w-72 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <Link href="#" className="block">
                  <div className="relative h-40 overflow-hidden rounded-t-lg">
                    <Image
                      src={salon.imageUrl}
                      alt={salon.name}
                      layout="fill"
                      objectFit="cover"
                      className="group-hover:scale-105 transition-transform duration-300"
                    />
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleReviewClick(salon);
                      }}
                      className="absolute top-2 right-2 bg-black bg-opacity-50 text-white text-xs font-bold py-1 px-2 rounded-full flex items-center hover:bg-opacity-70 transition-all cursor-pointer"
                    >
                      <StarIcon className="h-3 w-3 text-yellow-300 mr-1" />
                      <span>{salon.rating.toFixed(1)}</span>
                      <span className="ml-1">({salon.reviewCount})</span>
                    </button>
                  </div>
                  <div className="p-8 pt-4 flex flex-col items-center text-center">
                    <p className="text-base text-teal-600 font-semibold">{salon.category}</p>
                    <h3 className="mt-0 text-lg font-bold text-gray-900 truncate">
                      {salon.name}
                    </h3>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedSalon && (
        <ReviewModal
          isOpen={isModalOpen}
          onClose={closeModal}
          salonName={selectedSalon.name}
          reviews={sampleReviews}
          totalReviews={selectedSalon.reviewCount}
          averageRating={selectedSalon.rating}
        />
      )}
    </>
  );
};

export default FeaturedSalons; 