"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faClock, faChevronDown, faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import StarRating from './StarRating';
import ReviewModal from './ReviewModal';
import SortByModal from './SortByModal';

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

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

interface TimeSpecialGridProps {
  initialSalons: SalonData[];
  reviews: Record<string, { nickname: string; text: string }[]>;
}

export default function TimeSpecialGrid({ initialSalons, reviews }: TimeSpecialGridProps) {
  const [isReviewModalOpen, setReviewModalOpen] = useState(false);
  const [isSortByModalOpen, setSortByModalOpen] = useState(false);
  const [selectedSalon, setSelectedSalon] = useState<SalonData | null>(null);
  const [showAll, setShowAll] = useState(false);
  const [showViewDropdown, setShowViewDropdown] = useState(false);
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const [sortType, setSortType] = useState<'distance' | 'review' | 'price'>('distance');
  const [likedSalons, setLikedSalons] = useState<string[]>([]);

  const handleOpenReviewModal = (salon: SalonData) => {
    setSelectedSalon(salon);
    setReviewModalOpen(true);
  };
  
  const handleLikeClick = (e: React.MouseEvent, salonName: string) => {
    e.stopPropagation();
    setLikedSalons(prev =>
      prev.includes(salonName)
        ? prev.filter(name => name !== salonName)
        : [...prev, salonName]
    );
  };
  
  const salonsToShow = showAll ? initialSalons : initialSalons.slice(0, 6);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (showViewDropdown || showSortDropdown) {
        const dropdown = document.querySelector('.dropdown');
        if (dropdown && !dropdown.contains(e.target as Node)) {
          setShowViewDropdown(false);
          setShowSortDropdown(false);
        }
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          타임스페셜
        </h2>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <button
              onClick={() => setShowViewDropdown(!showViewDropdown)}
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
              <span>{showAll ? '간단히 보기' : '전체보기'}</span>
              <FontAwesomeIcon icon={faChevronDown} className="ml-2 -mr-1 h-5 w-5" />
            </button>
            {showViewDropdown && (
              <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg z-10 border">
                <div className="py-1">
                  <button
                    onClick={() => {
                      setShowAll(false);
                      setShowViewDropdown(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    간단히 보기
                  </button>
                  <button
                    onClick={() => {
                      setShowAll(true);
                      setShowViewDropdown(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    전체보기
                  </button>
                </div>
              </div>
            )}
          </div>
          
          <div className="relative">
            <button
              onClick={() => setShowSortDropdown(!showSortDropdown)}
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
              <span>정렬 기준</span>
              <FontAwesomeIcon icon={faChevronDown} className="ml-2 -mr-1 h-5 w-5" />
            </button>
            {showSortDropdown && (
              <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg z-10 border">
                <div className="py-1">
                  <button
                    onClick={() => {
                      setSortType('distance');
                      setShowSortDropdown(false);
                    }}
                    className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                      sortType === 'distance' ? 'text-indigo-600 font-semibold' : 'text-gray-700'
                    }`}
                  >
                    거리순
                  </button>
                  <button
                    onClick={() => {
                      setSortType('review');
                      setShowSortDropdown(false);
                    }}
                    className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                      sortType === 'review' ? 'text-indigo-600 font-semibold' : 'text-gray-700'
                    }`}
                  >
                    리뷰순
                  </button>
                  <button
                    onClick={() => {
                      setSortType('price');
                      setShowSortDropdown(false);
                    }}
                    className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                      sortType === 'price' ? 'text-indigo-600 font-semibold' : 'text-gray-700'
                    }`}
                  >
                    가격순
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {salonsToShow.map((salon, idx) => (
          <div
            key={`${salon.name}-${idx}`}
            className="bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:transform hover:scale-105 hover:-translate-y-2"
            onClick={() => handleOpenReviewModal(salon)}
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
                onClick={(e) => handleLikeClick(e, salon.name)}
                className="absolute top-4 right-4 w-10 h-10 bg-black bg-opacity-40 rounded-full flex items-center justify-center shadow-md hover:bg-opacity-60 transition-colors z-10"
                aria-label="찜하기"
              >
                <FontAwesomeIcon
                  icon={likedSalons.includes(salon.name) ? faHeartSolid : faHeartRegular}
                  className={likedSalons.includes(salon.name) ? "text-red-500" : "text-white"}
                />
              </button>
            </div>
            {/* Card content below image */}
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold mb-2 truncate">{salon.name}</h3>
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
                      handleOpenReviewModal(salon);
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
      <div className="mt-8 text-center sm:hidden">
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-sm font-semibold text-indigo-600 hover:text-indigo-500"
        >
          {showAll ? '간단히 보기' : '전체보기'}
        </button>
      </div>

      {selectedSalon && (
        <ReviewModal
          isOpen={!!selectedSalon}
          salonName={selectedSalon.name}
          reviews={reviews[selectedSalon.name] || []}
          onClose={() => setSelectedSalon(null)}
        />
      )}
    </>
  );
} 