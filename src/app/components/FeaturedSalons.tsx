'use client';

import React, { useRef, useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from '@heroicons/react/24/solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
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
  {
    id: 6,
    name: '글램 헤어 스튜디오',
    rating: 4.7,
    reviewCount: 189,
    imageUrl: 'https://images.pexels.com/photos/3993451/pexels-photo-3993451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: '헤어살롱'
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

// 추천업체 카드 문구 리스트
const cardCopyList = [
  "고객 만족도 1위, 믿고 맡기는 전문가",
  "실력과 친절을 모두 갖춘 프리미엄 살롱",
  "트렌디한 스타일, 꼼꼼한 시술",
  "당신만을 위한 1:1 맞춤 시술",
  "소중한 하루, 아름다움으로 채워드려요",
  "편안한 분위기, 정성 가득한 서비스",
  "첫 방문 고객 20% 할인 이벤트 중!",
  "지금 예약하면 무료 스타일링 서비스",
  "리뷰 작성 시 홈케어 샘플 증정"
];

function getRandomCopy() {
  return cardCopyList[Math.floor(Math.random() * cardCopyList.length)];
}

function SalonCard({ salon, liked, onLike, onReview }) {
  const [copy, setCopy] = useState(cardCopyList[0]);
  useEffect(() => {
    setCopy(getRandomCopy());
  }, []);
  return (
    <div
      className="group block flex-shrink-0 w-72 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 outline-none focus:outline-none border border-gray-200"
      tabIndex={0}
    >
      <Link href="#" className="block">
        <div className="relative h-40 overflow-hidden rounded-t-lg">
          <Image
            src={salon.imageUrl}
            alt={salon.name}
            fill
            style={{ objectFit: 'cover' }}
            className="group-hover:scale-105 transition-transform duration-300"
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onReview(salon);
            }}
            className="absolute top-2 right-2 bg-black bg-opacity-50 text-white text-xs font-bold py-1 px-2 rounded-full flex items-center hover:bg-opacity-70 transition-all cursor-pointer"
          >
            <StarIcon className="h-3 w-3 text-yellow-300 mr-1" />
            <span>{salon.rating.toFixed(1)}</span>
            <span className="ml-1">({salon.reviewCount})</span>
          </button>
        </div>
        <div className="relative p-4 h-40 flex flex-col justify-center items-center text-center">
          <button
            onClick={(e) => onLike(e, salon.id)}
            className="absolute -top-1 right-0 p-2 text-gray-400 hover:text-red-500 transition-colors z-10"
            aria-label="찜하기"
          >
            <FontAwesomeIcon
              icon={liked ? faHeartSolid : faHeartRegular}
              className={liked ? "text-red-500" : ""}
              size="lg"
            />
          </button>
          <div className="transform -translate-y-[30px]">
            <p className="text-xl text-teal-600 font-semibold">{salon.category}</p>
            <h3 className="mt-1 text-lg font-bold text-gray-900">
              {salon.name}
            </h3>
          </div>
          {/* 랜덤 카피 문구 */}
          <div className="italic text-gray-700 text-sm mt-2 mb-2 min-h-[32px] flex items-center justify-center">{copy}</div>
        </div>
      </Link>
    </div>
  );
}

const FeaturedSalons = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedSalon, setSelectedSalon] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [likedSalons, setLikedSalons] = useState<number[]>([]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleLikeClick = (e: React.MouseEvent, salonId: number) => {
    e.preventDefault();
    e.stopPropagation();
    setLikedSalons(prev =>
      prev.includes(salonId)
        ? prev.filter(id => id !== salonId)
        : [...prev, salonId]
    );
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
              <SalonCard
                key={salon.id}
                salon={salon}
                liked={likedSalons.includes(salon.id)}
                onLike={handleLikeClick}
                onReview={handleReviewClick}
              />
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