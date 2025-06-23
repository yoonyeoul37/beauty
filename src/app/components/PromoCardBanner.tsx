"use client";

import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faStore, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import { sampleBusinesses } from '@/app/data/businesses';

const PromoCardBanner = () => {
  const [nearbyBusinesses, setNearbyBusinesses] = useState<any[]>([]);

  useEffect(() => {
    console.log('PromoCardBanner: Component mounted');
    
    // 매번 랜덤하게 다른 업체들을 선택
    const getRandomBusinesses = () => {
      // 전체 업체 목록을 복사하고 섞기
      const shuffledBusinesses = [...sampleBusinesses]
        .sort(() => Math.random() - 0.5) // 랜덤 섞기
        .slice(0, 6) // 6개 중에서 선택 (더 많은 다양성)
        .map(business => ({
          ...business,
          distance: Math.random() * 5 + 0.5
        }));
      
      // 최종 3개 선택
      return shuffledBusinesses.slice(0, 3);
    };
    
    const randomBusinesses = getRandomBusinesses();
    console.log('PromoCardBanner: Using random businesses:', randomBusinesses);
    setNearbyBusinesses(randomBusinesses);
  }, []);

  console.log('PromoCardBanner: Render state:', { nearbyBusinesses: nearbyBusinesses.length });

  if (nearbyBusinesses.length === 0) {
    console.log('PromoCardBanner: No businesses yet, showing loading');
    return (
      <section className="w-full py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              내 주변 추천 업체
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
              위치를 확인하여 가까운 뷰티샵을 찾고 있습니다...
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse">
                <div className="aspect-[4/3] bg-gray-200"></div>
                <div className="p-6">
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-6 bg-gray-200 rounded mb-3"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  console.log('PromoCardBanner: Rendering with businesses:', nearbyBusinesses);

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            내 주변 추천 업체
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
            서울 지역의 추천 뷰티샵을 만나보세요.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {nearbyBusinesses.map((business) => (
            <Link 
              href={`/business/${business.id}`} 
              key={business.id} 
              className="group block bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300 ease-in-out hover:shadow-2xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={business.images.profile}
                  alt={business.businessName}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                {business.distance && (
                  <div className="absolute top-3 right-3 bg-white/90 text-gray-800 text-xs font-semibold px-2 py-1 rounded-full flex items-center">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-1" />
                    {business.distance.toFixed(1)}km
                  </div>
                )}
              </div>
              <div className="p-6">
                <p className="text-sm font-semibold text-sky-600 mb-2">{business.category}</p>
                <h3 className="font-bold text-xl text-gray-900 mb-3 line-clamp-1 h-[28px]">{business.businessName}</h3>
                <p className="text-gray-600 line-clamp-2 h-[48px] mb-4">{business.description}</p>
                
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center text-yellow-500">
                    <span className="text-sm font-semibold">{business.stats.averageRating}</span>
                    <span className="text-xs text-gray-500 ml-1">({business.stats.totalReviews}리뷰)</span>
                  </div>
                  <div className="text-xs text-gray-500">
                    {business.address.split(' ').slice(0, 2).join(' ')}
                  </div>
                </div>
                
                <div className="flex items-center text-amber-600 font-semibold text-sm group-hover:text-amber-700 transition-colors">
                  <span>자세히 보기</span>
                  <FontAwesomeIcon icon={faArrowRight} className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromoCardBanner; 