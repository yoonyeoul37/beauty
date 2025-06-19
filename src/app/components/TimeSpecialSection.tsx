"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faClock, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import StarRating from './StarRating';
import ReviewModal from './ReviewModal';
import { timeSpecialReviews } from '../data/reviews';
import TestDropdown from './TestDropdown';

interface TimeSpecialSectionProps {
  randomSalonIndex: number;
  bigCardIdx: number;
  setBigCardIdx: (index: number) => void;
  clickedCard: number;
  setClickedCard: (index: number) => void;
}

// 살롱 데이터 타입 정의
interface SalonData {
  name: string;
  image: string;
  originalPrice: number;
  specialPrice: number;
}

// 살롱 데이터 배열
const salonData: SalonData[] = [
  {
    name: "LA 남성 그루밍 이발소",
    image: "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=1920",
    originalPrice: 80000,
    specialPrice: 56000
  },
  {
    name: "flawless 팀색 및 헤어 시스템",
    image: "https://images.pexels.com/photos/3993451/pexels-photo-3993451.jpeg?auto=compress&cs=tinysrgb&w=1920",
    originalPrice: 120000,
    specialPrice: 84000
  },
  {
    name: "크리스피 컷 1",
    image: "https://images.pexels.com/photos/3993453/pexels-photo-3993453.jpeg?auto=compress&cs=tinysrgb&w=1920",
    originalPrice: 150000,
    specialPrice: 105000
  },
  {
    name: "제이 @ The Parlour",
    image: "https://images.pexels.com/photos/3993455/pexels-photo-3993455.jpeg?auto=compress&cs=tinysrgb&w=1920",
    originalPrice: 100000,
    specialPrice: 70000
  },
  {
    name: "트라이브",
    image: "https://images.pexels.com/photos/3993457/pexels-photo-3993457.jpeg?auto=compress&cs=tinysrgb&w=1920",
    originalPrice: 200000,
    specialPrice: 140000
  },
  {
    name: "프리미엄 헤어샵",
    image: "https://images.pexels.com/photos/3993467/pexels-photo-3993467.jpeg?auto=compress&cs=tinysrgb&w=1920",
    originalPrice: 90000,
    specialPrice: 63000
  }
];

// 배열을 랜덤하게 섞는 함수
const shuffleArray = (array: any[]) => {
  return [...array].sort(() => Math.random() - 0.5);
};

export default function TimeSpecialSection({
  randomSalonIndex,
  bigCardIdx,
  setBigCardIdx,
  clickedCard,
  setClickedCard
}: TimeSpecialSectionProps) {
  const [sortType, setSortType] = useState<'distance' | 'review' | 'price'>('distance');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedSalon, setSelectedSalon] = useState<string | null>(null);
  const [shuffledSalons, setShuffledSalons] = useState<SalonData[]>([]);
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // 초기 섞기 및 1분마다 섞기
  useEffect(() => {
    const shuffle = () => {
      if (!isPaused) {
        setShuffledSalons(shuffleArray(salonData.slice(0, 6)));
      }
    };

    // 초기 섞기
    shuffle();

    // 1분마다 섞기
    const interval = setInterval(shuffle, 60000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleSort = (type: string) => {
    setSortType(type as 'distance' | 'review' | 'price');
  };

  const handleMouseEnter = (idx: number) => {
    setHoveredCard(idx);
    setIsPaused(true);
  };

  const handleMouseLeave = (idx: number) => {
    setHoveredCard(null);
    // 다른 상호작용이 없을 때만 재시작
    if (clickedCard === -1 && bigCardIdx === -1 && !selectedSalon) {
      setIsPaused(false);
    }
  };

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-[1240px] mx-auto">
        {/* 섹션 헤더 */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2">타임스페셜</h2>
            <p className="text-gray-600">지금 바로 예약하고 특별한 혜택을 받으세요</p>
          </div>
          <div className="flex gap-4 items-center">
            <div className="relative">
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2"
              >
                {sortType === 'distance' && '거리순'}
                {sortType === 'review' && '리뷰순'}
                {sortType === 'price' && '가격순'}
                <FontAwesomeIcon icon={faChevronDown} className="w-3 h-3" />
              </button>
              <TestDropdown 
                isOpen={isDropdownOpen}
                onClose={() => setIsDropdownOpen(false)}
                onSort={handleSort}
              />
            </div>
            <button className="px-6 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              전체보기
            </button>
          </div>
        </div>

        {/* 카드 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {shuffledSalons.map((salon, idx) => (
            <div
              key={`${salon.name}-${idx}`}
              className={`bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:transform hover:scale-105 hover:-translate-y-2 ${
                clickedCard === idx ? 'transform scale-[1.02]' : ''
              }`}
              style={{
                boxShadow: clickedCard === idx
                  ? '0 10px 40px rgba(0,0,0,0.12)'
                  : '0 4px 20px rgba(0,0,0,0.08)'
              }}
              onClick={() => {
                setClickedCard(idx === clickedCard ? -1 : idx);
                setIsPaused(true);
              }}
              onMouseEnter={() => {
                handleMouseEnter(idx);
              }}
              onMouseLeave={() => {
                handleMouseLeave(idx);
              }}
            >
              {/* 이미지 */}
              <Link 
                href={`/salon/${encodeURIComponent(salon.name)}`}
                className="block relative w-full pt-[75%]"
                onClick={(e) => {
                  e.stopPropagation(); // 카드 전체 클릭 이벤트와 분리
                }}
              >
                <div className="absolute inset-0">
                  <Image
                    src={salon.image}
                    alt={salon.name}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={90}
                    priority={idx < 3}
                    placeholder="blur"
                    blurDataURL={`data:image/svg+xml;base64,...`}
                  />
                </div>
                <button 
                  className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-50 transition-colors z-10"
                  onClick={(e) => {
                    e.stopPropagation();
                    setBigCardIdx(idx === bigCardIdx ? -1 : idx);
                    setIsPaused(true);
                  }}
                >
                  <FontAwesomeIcon
                    icon={idx === bigCardIdx ? faHeartSolid : faHeartRegular}
                    className={idx === bigCardIdx ? "text-red-500" : "text-gray-400"}
                  />
                </button>
              </Link>

              {/* 컨텐츠 */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{salon.name}</h3>
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <FontAwesomeIcon icon={faMapMarkerAlt} />
                      <span>강남구 신사동</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <StarRating rating={4.5} />
                    <button 
                      className="text-sm text-gray-500 mt-1 hover:text-pink-500 transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (timeSpecialReviews[salon.name]?.length > 0) {
                          setSelectedSalon(salon.name);
                          setIsPaused(true);
                        }
                      }}
                    >
                      {timeSpecialReviews[salon.name]?.length || 0} 리뷰
                    </button>
                  </div>
                </div>

                {/* 타임 스페셜 정보 */}
                <div className="bg-gray-50 rounded-xl p-4 mb-4">
                  <div className="flex items-center gap-2 text-gray-600 mb-2">
                    <FontAwesomeIcon icon={faClock} className="text-gray-400" />
                    <span className="text-sm">오늘 17:00 - 19:00</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm text-gray-500 line-through">₩{salon.originalPrice.toLocaleString()}</span>
                      <span className="text-lg font-bold ml-2">₩{salon.specialPrice.toLocaleString()}</span>
                    </div>
                    <span className="text-red-500 font-bold">30% OFF</span>
                  </div>
                </div>

                {/* 예약 버튼 */}
                <button 
                  className="w-full py-3 bg-black text-white rounded-xl hover:bg-gray-900 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsPaused(true);
                    // 예약 로직
                  }}
                >
                  예약하기
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Review Modal */}
      {selectedSalon && (
        <ReviewModal
          isOpen={!!selectedSalon}
          onClose={() => {
            setSelectedSalon(null);
            setIsPaused(false);
          }}
          salonName={selectedSalon}
          reviews={timeSpecialReviews[selectedSalon].map(review => ({
            nickname: review.nickname,
            text: review.text,
            rating: 5 // 기본값으로 5점 설정
          }))}
          totalReviews={timeSpecialReviews[selectedSalon].length}
          averageRating={4.5} // 기본값으로 4.5점 설정
        />
      )}
    </section>
  );
} 