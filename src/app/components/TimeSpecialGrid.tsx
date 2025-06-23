"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faClock, faChevronDown, faHeart as faHeartSolid, faBolt, faStar, faFire, faClock as faClockIcon, faGem, faCrown } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import StarRating from './StarRating';
import ReviewModal from './ReviewModal';
import SortByModal from './SortByModal';
import { Salon, Service, BusinessProfile } from '@/data/definitions';
import { getActiveTimeSpecialBusinesses } from '@/app/data/businesses';

// 임시 타입 정의. 실제 Salon 타입은 더 복잡할 수 있음.
// TimeSpecialSection에서 전달되는 props에 맞게 확장
type DisplaySalon = Omit<Salon, 'menu'> & {
  time: string;
  services: Service[];
  shuffledServices?: Service[];
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

interface TimeSpecialGridProps {
  reviews?: Record<string, { nickname: string; text: string }[]>;
  initialSalons?: any[];
}

const TimeSpecialGrid: React.FC<TimeSpecialGridProps> = ({ reviews = {} }) => {
  const [businesses, setBusinesses] = useState<BusinessProfile[]>([]);
  const [visibleCount, setVisibleCount] = useState(8);
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [heartAnimations, setHeartAnimations] = useState<Set<string>>(new Set());
  const [sortBy, setSortBy] = useState('distance');
  const [showSortDropdown, setShowSortDropdown] = useState(false);

  useEffect(() => {
    // 실제 업체 데이터 사용
    const activeBusinesses = getActiveTimeSpecialBusinesses();
    setBusinesses(activeBusinesses);
  }, []);

  // 드롭다운 외부 클릭 시 닫기
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.sort-dropdown')) {
        setShowSortDropdown(false);
      }
    };

    if (showSortDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showSortDropdown]);

  const toggleFavorite = (businessId: string) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(businessId)) {
      newFavorites.delete(businessId);
    } else {
      newFavorites.add(businessId);
      // 하트 애니메이션 시작
      setHeartAnimations(prev => new Set(prev).add(businessId));
      // 1초 후 애니메이션 제거
      setTimeout(() => {
        setHeartAnimations(prev => {
          const newSet = new Set(prev);
          newSet.delete(businessId);
          return newSet;
        });
      }, 1000);
    }
    setFavorites(newFavorites);
  };

  const handleSort = (sortType: string) => {
    setSortBy(sortType);
    setShowSortDropdown(false);
  };

  const getSortedBusinesses = () => {
    const sorted = [...businesses];
    switch (sortBy) {
      case 'distance':
        // 거리순 (임시로 랜덤)
        return sorted.sort(() => Math.random() - 0.5);
      case 'price':
        // 가격순 (타임스페셜 할인율 기준)
        return sorted.sort((a, b) => {
          const aDiscount = a.timeSpecial?.discountRate || 0;
          const bDiscount = b.timeSpecial?.discountRate || 0;
          return bDiscount - aDiscount; // 할인율 높은 순
        });
      case 'rating':
        // 리뷰순
        return sorted.sort((a, b) => b.stats.averageRating - a.stats.averageRating);
      default:
        return sorted;
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FontAwesomeIcon
        key={i}
        icon={faStar}
        className={`text-sm ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  const formatTimeSpecial = (business: BusinessProfile) => {
    if (!business.timeSpecial?.active) return null;
    
    const originalPrice = business.services[business.timeSpecial.service];
    const discountedPrice = Math.round(originalPrice * (1 - business.timeSpecial.discountRate / 100));
    
    return {
      service: business.timeSpecial.service,
      originalPrice,
      discountedPrice,
      discountRate: business.timeSpecial.discountRate,
      description: business.timeSpecial.description
    };
  };

  const getTwoServices = (business: BusinessProfile) => {
    const services = Object.entries(business.services);
    const timeSpecial = formatTimeSpecial(business);
    
    if (timeSpecial) {
      // 타임스페셜 서비스와 다른 서비스 1개 선택
      const otherServices = services.filter(([serviceName]) => serviceName !== timeSpecial.service);
      const secondService = otherServices[Math.floor(Math.random() * otherServices.length)];
      
      return [
        {
          name: timeSpecial.service,
          price: timeSpecial.discountedPrice,
          originalPrice: timeSpecial.originalPrice,
          discount: `${timeSpecial.discountRate}%`,
          isTimeSpecial: true
        },
        {
          name: secondService[0],
          price: secondService[1],
          originalPrice: secondService[1],
          discount: null,
          isTimeSpecial: false
        }
      ];
    } else {
      // 타임스페셜이 없으면 2개 서비스 랜덤 선택
      const shuffled = services.sort(() => 0.5 - Math.random());
      return shuffled.slice(0, 2).map(([serviceName, price]) => ({
        name: serviceName,
        price,
        originalPrice: price,
        discount: null,
        isTimeSpecial: false
      }));
    }
  };

  const visibleBusinesses = getSortedBusinesses().slice(0, visibleCount);

  return (
    <div>
      {/* 제목 섹션 */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-xl flex items-center justify-center shadow-lg">
            <FontAwesomeIcon icon={faBolt} className="text-white text-xl" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            타임스페셜
          </h2>
        </div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          지금 바로 예약하면 특별한 할인 혜택을 받을 수 있어요!
        </p>
        
        {/* 정렬 드롭다운 */}
        <div className="flex justify-end mb-6">
          <div className="relative sort-dropdown">
            <button
              onClick={() => setShowSortDropdown(!showSortDropdown)}
              className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200 shadow-sm"
            >
              <span className="text-sm font-medium text-gray-700">
                {sortBy === 'distance' && '거리순'}
                {sortBy === 'price' && '가격순'}
                {sortBy === 'rating' && '리뷰순'}
              </span>
              <FontAwesomeIcon 
                icon={faChevronDown} 
                className={`text-gray-500 text-xs transition-transform duration-200 ${
                  showSortDropdown ? 'rotate-180' : ''
                }`} 
              />
            </button>
            
            {showSortDropdown && (
              <div className="absolute top-full right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-50 min-w-[120px]">
                <div
                  className={`px-4 py-2 text-sm cursor-pointer hover:bg-gray-50 transition-colors duration-200 ${
                    sortBy === 'distance' ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                  }`}
                  onClick={() => handleSort('distance')}
                >
                  거리순
                </div>
                <div
                  className={`px-4 py-2 text-sm cursor-pointer hover:bg-gray-50 transition-colors duration-200 ${
                    sortBy === 'price' ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                  }`}
                  onClick={() => handleSort('price')}
                >
                  가격순
                </div>
                <div
                  className={`px-4 py-2 text-sm cursor-pointer hover:bg-gray-50 transition-colors duration-200 ${
                    sortBy === 'rating' ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                  }`}
                  onClick={() => handleSort('rating')}
                >
                  리뷰순
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 업체 그리드 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
        {visibleBusinesses.map((business) => {
          const timeSpecial = formatTimeSpecial(business);
          
          return (
            <div key={business.id} className="card-hover bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              {/* 이미지 */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={business.images.profile}
                  alt={business.businessName}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* 타임스페셜 배지 */}
                {timeSpecial && (
                  <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse hover:scale-110 transition-transform duration-200 z-10 max-w-[120px] truncate">
                    {timeSpecial.discountRate}% 할인
                  </div>
                )}
                
                {/* 찜하기 버튼 */}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    toggleFavorite(business.id);
                  }}
                  className={`absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ripple z-30 ${
                    favorites.has(business.id)
                      ? 'bg-red-500 text-white hover:bg-red-600'
                      : 'bg-white/80 text-gray-600 hover:bg-white hover:text-red-500'
                  }`}
                  style={{
                    boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                    position: 'absolute',
                    top: '12px',
                    right: '12px'
                  }}
                >
                  <FontAwesomeIcon 
                    icon={faHeartSolid} 
                    className={`text-sm transition-all duration-300 ${
                      heartAnimations.has(business.id) ? 'heart-animation' : ''
                    }`} 
                  />
                </button>
              </div>

              {/* 콘텐츠 */}
              <div className="p-4">
                {/* 업체 정보 */}
                <div className="mb-3">
                  <h3 className="font-bold text-gray-900 mb-1 line-clamp-1">
                    {business.businessName}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="text-amber-500" />
                    <span className="line-clamp-1">{business.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {renderStars(business.stats.averageRating)}
                    <span className="text-sm text-gray-600">
                      {business.stats.averageRating} ({business.stats.totalReviews})
                    </span>
                  </div>
                </div>

                {/* 서비스 정보 */}
                <div className="bg-gray-50 rounded-lg p-3 mb-3 space-y-2">
                  {/* 타임스페셜 시간 표시 */}
                  {timeSpecial && (
                    <div className="flex items-center gap-2 text-xs text-amber-600 font-medium mb-2">
                      <FontAwesomeIcon icon={faClock} className="text-xs" />
                      <span>오늘 14:00-16:00 한정</span>
                    </div>
                  )}
                  
                  {getTwoServices(business).map((service, index) => (
                    <div key={index} className="text-sm">
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-bold text-gray-800 truncate flex-shrink-0 min-w-0">
                          {service.name}
                        </span>
                        <div className="flex items-center gap-1 flex-shrink-0">
                          {service.originalPrice !== service.price && (
                            <span className="text-gray-400 line-through text-xs whitespace-nowrap">
                              {service.originalPrice.toLocaleString()}원
                            </span>
                          )}
                          <span className={`font-bold ${service.isTimeSpecial ? 'text-red-500' : 'text-gray-900'} text-sm whitespace-nowrap`}>
                            {service.price.toLocaleString()}원
                          </span>
                          {service.discount && (
                            <span className="bg-red-100 text-red-600 text-xs font-bold px-1.5 py-0.5 rounded flex-shrink-0 whitespace-nowrap">
                              {service.discount}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* 예약 버튼 */}
                <Link
                  href={`/business/${business.id}`}
                  className="block w-full bg-black text-white text-center py-3 rounded-lg font-medium hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
                >
                  예약하기
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* 더보기 버튼 */}
      {visibleCount < businesses.length && (
        <div className="text-center">
          <button
            onClick={() => setVisibleCount(prev => prev + 8)}
            className="px-8 py-3 bg-white border-2 border-amber-500 text-amber-600 rounded-lg font-medium hover:bg-amber-50 transition-colors duration-200"
          >
            더 많은 타임스페셜 보기
          </button>
        </div>
      )}
    </div>
  );
};

export default TimeSpecialGrid; 