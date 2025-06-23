'use client';

import { useState, use } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faMapMarkerAlt, 
  faClock, 
  faPhone, 
  faStar,
  faWifi,
  faCar,
  faCreditCard,
  faMoneyBill,
  faCalendarAlt,
  faArrowLeft,
  faHeart,
  faShare,
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Link from 'next/link';
import { getBusinessById } from '@/app/data/businesses';

interface BusinessDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function BusinessDetailPage({ params }: BusinessDetailPageProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [activeTab, setActiveTab] = useState('info');
  
  const resolvedParams = use(params);
  const business = getBusinessById(resolvedParams.id);
  
  if (!business) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">업체를 찾을 수 없습니다</h1>
          <Link href="/" className="text-amber-600 hover:text-amber-700">
            홈으로 돌아가기
          </Link>
        </div>
      </div>
    );
  }

  const allImages = [business.images.profile, ...business.images.interior, ...business.images.works];
  
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FontAwesomeIcon
        key={i}
        icon={faStar}
        className={`text-sm ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 헤더 */}
      <div className="bg-white shadow-sm border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <Link 
              href="/"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors duration-200"
            >
              <FontAwesomeIcon icon={faArrowLeft} />
              <span className="text-sm font-medium">뒤로가기</span>
            </Link>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsFavorite(!isFavorite)}
                className={`p-2 rounded-full transition-colors duration-200 ${
                  isFavorite ? 'text-red-500 bg-red-50' : 'text-gray-400 hover:text-red-500'
                }`}
              >
                <FontAwesomeIcon icon={faHeart} />
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-600 rounded-full transition-colors duration-200">
                <FontAwesomeIcon icon={faShare} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 메인 콘텐츠 */}
          <div className="lg:col-span-2">
            {/* 이미지 갤러리 */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8">
              <div className="relative aspect-video">
                <Image
                  src={allImages[currentImageIndex]}
                  alt={`${business.businessName} 이미지 ${currentImageIndex + 1}`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                
                {/* 이미지 네비게이션 */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white bg-opacity-80 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all duration-200"
                >
                  <FontAwesomeIcon icon={faChevronLeft} className="text-gray-700" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white bg-opacity-80 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all duration-200"
                >
                  <FontAwesomeIcon icon={faChevronRight} className="text-gray-700" />
                </button>
                
                {/* 이미지 인디케이터 */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                  {allImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-200 ${
                        index === currentImageIndex ? 'bg-white' : 'bg-white bg-opacity-50'
                      }`}
                    />
                  ))}
                </div>
              </div>
              
              {/* 썸네일 */}
              <div className="p-4 flex gap-2 overflow-x-auto">
                {allImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                      index === currentImageIndex ? 'border-amber-500' : 'border-gray-200'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`썸네일 ${index + 1}`}
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* 탭 네비게이션 */}
            <div className="bg-white rounded-xl shadow-sm mb-8">
              <div className="border-b border-gray-200">
                <nav className="flex space-x-8 px-6">
                  {[
                    { id: 'info', label: '업체 정보' },
                    { id: 'services', label: '서비스' },
                    { id: 'products', label: '🛍️ 상품' },
                    { id: 'reviews', label: '리뷰' }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
                        activeTab === tab.id
                          ? 'border-amber-500 text-amber-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </nav>
              </div>

              {/* 탭 콘텐츠 */}
              <div className="p-6">
                {/* 업체 정보 탭 */}
                {activeTab === 'info' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">업체 소개</h3>
                      <p className="text-gray-700 leading-relaxed">{business.description}</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">영업시간</h3>
                      <div className="space-y-2">
                        {Object.entries({
                          monday: '월요일',
                          tuesday: '화요일',
                          wednesday: '수요일',
                          thursday: '목요일',
                          friday: '금요일',
                          saturday: '토요일',
                          sunday: '일요일'
                        }).map(([day, label]) => (
                          <div key={day} className="flex justify-between items-center py-2">
                            <span className="text-gray-700">{label}</span>
                            <span className="text-gray-900 font-medium">
                              {business.businessHours[day].closed 
                                ? '휴무' 
                                : `${business.businessHours[day].open} - ${business.businessHours[day].close}`
                              }
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">편의시설</h3>
                      <div className="grid grid-cols-2 gap-4">
                        {[
                          { key: 'parking', label: '주차 가능', icon: faCar },
                          { key: 'wifi', label: 'Wi-Fi', icon: faWifi },
                          { key: 'cardPayment', label: '카드 결제', icon: faCreditCard },
                          { key: 'cashPayment', label: '현금 결제', icon: faMoneyBill }
                        ].map((amenity) => (
                          <div key={amenity.key} className="flex items-center gap-3">
                            <FontAwesomeIcon 
                              icon={amenity.icon} 
                              className={`text-lg ${business.amenities[amenity.key as keyof typeof business.amenities] ? 'text-amber-500' : 'text-gray-300'}`} 
                            />
                            <span className={`text-sm ${business.amenities[amenity.key as keyof typeof business.amenities] ? 'text-gray-900' : 'text-gray-400'}`}>
                              {amenity.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* 서비스 탭 */}
                {activeTab === 'services' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">서비스 목록</h3>
                      <div className="space-y-4">
                        {Object.entries(business.services).map(([serviceName, price], index) => (
                          <div key={index} className="border border-gray-200 rounded-lg p-4">
                            <div className="flex justify-between items-start mb-2">
                              <h4 className="font-medium text-gray-900">{serviceName}</h4>
                              <span className="text-amber-600 font-semibold">{price.toLocaleString()}원</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* 타임스페셜 */}
                    {business.timeSpecial && (
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">타임스페셜</h3>
                        <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-lg p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-amber-600 text-lg">⏰</span>
                            <span className="font-semibold text-amber-800">특별 할인</span>
                          </div>
                          <p className="text-amber-700 mb-2">{business.timeSpecial.description}</p>
                          <div className="flex items-center gap-4 text-sm text-amber-600">
                            <span>할인율: {business.timeSpecial.discountRate}%</span>
                            <span>기간: {business.timeSpecial.startDate} ~ {business.timeSpecial.endDate}</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* 상품 탭 */}
                {activeTab === 'products' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">업체 상품</h3>
                      
                      {/* 상품이 없는 경우 */}
                      {(!business.products || business.products.length === 0) && (
                        <div className="text-center py-12">
                          <div className="text-gray-400 text-6xl mb-4">🛍️</div>
                          <h4 className="text-lg font-medium text-gray-900 mb-2">아직 등록된 상품이 없어요</h4>
                          <p className="text-gray-600 mb-4">이 업체에서 판매하는 상품이 곧 등록될 예정입니다.</p>
                          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                            <div className="flex items-start gap-3">
                              <span className="text-blue-500 text-lg">💡</span>
                              <div className="text-sm text-blue-700">
                                <p className="font-medium mb-1">상품 구매의 장점:</p>
                                <ul className="space-y-1">
                                  <li>• 시술 후 홈케어로 더 오래 지속</li>
                                  <li>• 업체에서 직접 추천하는 제품</li>
                                  <li>• 온라인으로 편리하게 구매</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* 상품 목록 */}
                      {business.products && business.products.length > 0 && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {business.products.map((product, index) => (
                            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-200">
                              <div className="aspect-square bg-gray-100 relative">
                                <Image
                                  src={product.image || '/images/cosmetics-9086984_640.jpg'}
                                  alt={product.name}
                                  fill
                                  className="object-cover"
                                />
                                {product.isNew && (
                                  <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                                    NEW
                                  </div>
                                )}
                              </div>
                              <div className="p-4">
                                <h4 className="font-medium text-gray-900 mb-2">{product.name}</h4>
                                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
                                <div className="flex items-center justify-between">
                                  <span className="text-amber-600 font-semibold text-lg">
                                    {product.price.toLocaleString()}원
                                  </span>
                                  <div className="flex gap-2">
                                    <button className="px-3 py-1 text-sm border border-amber-500 text-amber-600 rounded-md hover:bg-amber-50 transition-colors duration-200">
                                      장바구니
                                    </button>
                                    <button className="px-3 py-1 text-sm bg-amber-500 text-white rounded-md hover:bg-amber-600 transition-colors duration-200">
                                      구매하기
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* 리뷰 탭 */}
                {activeTab === 'reviews' && (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-900">리뷰</h3>
                      <div className="flex items-center gap-2">
                        {renderStars(business.stats.averageRating)}
                        <span className="text-sm text-gray-600">
                          {business.stats.averageRating} ({business.stats.totalReviews}개)
                        </span>
                      </div>
                    </div>
                    
                    <div className="text-center py-12">
                      <FontAwesomeIcon icon={faStar} className="text-4xl text-gray-300 mb-4" />
                      <p className="text-gray-600">리뷰 기능은 준비 중입니다.</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* 사이드바 */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              {/* 업체 정보 카드 */}
              <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                <h1 className="text-2xl font-bold text-gray-900 mb-2">{business.businessName}</h1>
                <p className="text-gray-600 mb-4">{business.category}</p>
                
                <div className="flex items-center gap-2 mb-4">
                  {renderStars(business.stats.averageRating)}
                  <span className="text-sm text-gray-600">
                    {business.stats.averageRating} ({business.stats.totalReviews}개 리뷰)
                  </span>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-sm">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="text-amber-500 w-4" />
                    <span className="text-gray-700">{business.address}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <FontAwesomeIcon icon={faPhone} className="text-amber-500 w-4" />
                    <span className="text-gray-700">{business.phone}</span>
                  </div>
                </div>

                <button className="w-full bg-amber-500 text-white py-3 rounded-lg font-medium hover:bg-amber-600 transition-colors duration-200">
                  예약하기
                </button>
              </div>

              {/* 지도 */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">위치</h3>
                <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="text-3xl text-gray-400 mb-2" />
                    <p className="text-gray-600 text-sm">지도가 여기에 표시됩니다</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 