"use client";
import React, { useState, useEffect, useRef } from 'react';
import HeroSection from './components/HeroSection';
import FloatingCategoryMenu from './components/FloatingCategoryMenu';
import Link from 'next/link';
import CitySearchSection from "./components/CitySearchSection";
import TimeSpecialSection from './components/TimeSpecialSection';
import AppDownloadSection from './components/AppDownloadSection';
import BusinessSection from './components/BusinessSection';
import FeatureSearch from './components/FeatureSearch';
import FeatureManage from './components/FeatureManage';
import FeatureReview from './components/FeatureReview';
import RecommendedArticlesSection from './components/RecommendedArticlesSection';
import { timeSpecialReviews } from '@/app/data/reviews';
import StickyHeader from './components/StickyHeader';
import BeautyTrendSection from './components/BeautyTrendSection';
import PromoCardBanner from './components/PromoCardBanner';

export default function Home() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const timeSpecialSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (timeSpecialSectionRef.current) {
        const { top } = timeSpecialSectionRef.current.getBoundingClientRect();
        // 헤더 높이(70px)를 고려하여, 섹션 상단이 뷰포트 상단에 닿기 전에 헤더가 나타나도록 합니다.
        if (window.scrollY > timeSpecialSectionRef.current.offsetTop - 70) {
          setIsHeaderVisible(true);
        } else {
          setIsHeaderVisible(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // 초기 로드 시 스크롤 위치 확인
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <main className="min-h-screen bg-white text-gray-800">
      <StickyHeader isVisible={isHeaderVisible} />
      <HeroSection showDropdown={showDropdown} setShowDropdown={setShowDropdown} />
      
      <div id="time-special-section" ref={timeSpecialSectionRef}>
        <TimeSpecialSection reviews={timeSpecialReviews} />
      </div>
      
      <section className="w-full py-20 animated-gradient">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-white">
            당신의 아름다움을 위한 최고의 선택
          </h2>
          <p className="text-xl mb-8 text-white/90">
            전문가와 함께 새로운 스타일을 찾아보세요
          </p>
          <div className="flex gap-4 justify-center">
            <Link 
              href="/search" 
              className="button-hover bg-white text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition-colors"
            >
              지금 시작하기
            </Link>
            <Link 
              href="/community" 
              className="button-hover bg-transparent border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-black transition-colors"
            >
              커뮤니티
            </Link>
          </div>
        </div>
      </section>

      <BeautyTrendSection />
      
      {/* 상품 구매 배너 */}
      <section className="w-full py-16 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                {/* 메인 콘텐츠 */}
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                      <span className="text-2xl">🛍️</span>
                    </div>
                    <div>
                      <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                        전문가가 추천하는 제품을 만나보세요
                      </h2>
                      <p className="text-sm text-gray-600 mt-1">업체 추천 제품으로 더 오래 지속되는 효과</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 text-lg leading-relaxed">
                    시술 후 <span className="font-semibold text-blue-600">홈케어 제품</span>을 구매하시면 
                    더 오래 지속되는 효과를 경험하실 수 있습니다. 
                    업체에서 직접 추천하는 제품으로 더 좋은 결과를 만들어보세요.
                  </p>
                  
                  {/* 장점 리스트 */}
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-green-600 text-sm font-bold">✓</span>
                      </div>
                      <div>
                        <span className="font-medium text-gray-900">홈케어로 더 오래 지속</span>
                        <p className="text-sm text-gray-600 mt-1">시술 효과를 오래 유지할 수 있습니다</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-blue-600 text-sm font-bold">⭐</span>
                      </div>
                      <div>
                        <span className="font-medium text-gray-900">전문가 추천 제품</span>
                        <p className="text-sm text-gray-600 mt-1">업체에서 직접 추천하는 제품입니다</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-purple-600 text-sm font-bold">🚀</span>
                      </div>
                      <div>
                        <span className="font-medium text-gray-900">온라인으로 편리하게</span>
                        <p className="text-sm text-gray-600 mt-1">언제든지 간편하게 구매하실 수 있습니다</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* CTA 버튼 */}
                  <div className="pt-4">
                    <Link 
                      href="/products" 
                      className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-sm"
                    >
                      <span>상품 둘러보기</span>
                      <span className="text-sm">→</span>
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* 우측 이미지/아이콘 영역 */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-8">
                <div className="text-center">
                  <div className="text-6xl mb-6">💄</div>
                  <div className="space-y-3">
                    <p className="text-gray-800 font-semibold text-lg">
                      헤어케어 · 스타일링 · 네일케어
                    </p>
                    <p className="text-gray-600">
                      다양한 뷰티 상품을 만나보세요
                    </p>
                    <div className="flex justify-center gap-3 mt-4">
                      <span className="bg-white/70 text-gray-700 px-3 py-1 rounded-md text-sm font-medium shadow-sm">샴푸</span>
                      <span className="bg-white/70 text-gray-700 px-3 py-1 rounded-md text-sm font-medium shadow-sm">왁스</span>
                      <span className="bg-white/70 text-gray-700 px-3 py-1 rounded-md text-sm font-medium shadow-sm">브러시</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <PromoCardBanner />
      
      <section className="w-full py-20 bg-gray-50">
        <div className="max-w-[1240px] mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            지금 가입하고 특별한 혜택을 받으세요
          </h2>
          <p className="text-gray-600 mb-8">
            신규 회원을 위한 다양한 할인 혜택과 이벤트가 준비되어 있습니다
          </p>
          <button className="button-hover bg-black text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-900 transition-colors">
            무료 회원가입
          </button>
        </div>
      </section>
      
      <section className="w-full bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AppDownloadSection />
            <BusinessSection />
          </div>
        </div>
      </section>

      <FeatureSearch />
      <FeatureManage />
      <FeatureReview />

      <CitySearchSection />
      
      <RecommendedArticlesSection />
      
    </main>
  );
}
