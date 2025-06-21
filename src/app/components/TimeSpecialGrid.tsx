"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faClock, faChevronDown, faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import StarRating from './StarRating';
import ReviewModal from './ReviewModal';
import TestDropdown from './TestDropdown';

// Interface definitions from TimeSpecialSection
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

interface TimeSpecialGridProps {
  initialSalons: SalonData[];
  reviews: Record<string, { nickname: string; text: string }[]>;
  showAll: boolean;
}

export default function TimeSpecialGrid({ initialSalons, reviews, showAll }: TimeSpecialGridProps) {
  const [bigCardIdx, setBigCardIdx] = useState(-1);
  const [clickedCard, setClickedCard] = useState(-1);
  const [sortType, setSortType] = useState<'distance' | 'review' | 'price'>('distance');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedSalon, setSelectedSalon] = useState<string | null>(null);
  const [shuffledSalons] = useState<SalonData[]>(initialSalons);
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const handleSort = (type: string) => {
    setSortType(type as 'distance' | 'review' | 'price');
    setIsDropdownOpen(false);
    // Add sorting logic here if needed
  };

  const handleMouseEnter = (idx: number) => {
    setHoveredCard(idx);
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
    setIsPaused(false);
  };

  return (
    <>
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {shuffledSalons.map((salon, idx) => (
          <div
            key={`${salon.name}-${idx}`}
            className="bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:transform hover:scale-105 hover:-translate-y-2"
            onClick={() => setClickedCard(idx === clickedCard ? -1 : idx)}
            onMouseEnter={() => handleMouseEnter(idx)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="block relative w-full pt-[75%]">
              <div className="absolute inset-0">
                <Image
                  src={salon.image}
                  alt={salon.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  quality={90}
                  priority={idx < 3}
                />
              </div>
              <button 
                className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-50 transition-colors z-10"
                onClick={(e) => {
                  e.stopPropagation();
                  setBigCardIdx(idx === bigCardIdx ? -1 : idx);
                }}
              >
                <FontAwesomeIcon
                  icon={idx === bigCardIdx ? faHeartSolid : faHeartRegular}
                  className={idx === bigCardIdx ? "text-red-500" : "text-gray-400"}
                />
              </button>
            </div>
            {/* Card content below image */}
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
                      if (reviews[salon.name]?.length > 0) {
                        setSelectedSalon(salon.name);
                      }
                    }}
                  >
                    {reviews[salon.name]?.length || 0} 리뷰
                  </button>
                </div>
              </div>

              {/* 타임 스페셜 정보 */}
              <div className="bg-gray-50 rounded-xl p-4 mb-4 space-y-2">
                <div className="flex items-center gap-2 text-gray-600 text-sm">
                  <FontAwesomeIcon icon={faClock} className="text-gray-400" />
                  <span>{salon.time}</span>
                </div>
                
                {(salon.shuffledServices || []).map((service, serviceIdx) => (
                  <div key={serviceIdx} className="text-sm">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-gray-800">{service.name}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-400 line-through">
                          ₩{service.originalPrice.toLocaleString()}
                        </span>
                        <span className="text-lg font-bold text-red-500">
                          ₩{service.specialPrice.toLocaleString()}
                        </span>
                        {service.discount && (
                          <span className="bg-red-100 text-red-600 text-xs font-bold px-2 py-1 rounded-md">
                            {service.discount}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button className="w-full bg-black text-white font-bold py-3 rounded-lg hover:bg-gray-900 transition-colors">
                예약하기
              </button>
            </div>
          </div>
        ))}
      </div>
      {selectedSalon && (
        <ReviewModal
          isOpen={!!selectedSalon}
          salonName={selectedSalon}
          reviews={reviews[selectedSalon] || []}
          onClose={() => setSelectedSalon(null)}
        />
      )}
    </>
  );
} 