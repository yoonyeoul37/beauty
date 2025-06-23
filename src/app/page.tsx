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
      <section className="w-full py-16 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">🛍️</span>
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                    업체에서 상품도 판매해요!
                  </h2>
                </div>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  시술 후 홈케어 제품을 구매하면 더 오래 지속되는 효과를 경험할 수 있어요. 
                  업체에서 직접 추천하는 제품으로 더 좋은 결과를 만들어보세요.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3">
                    <span className="text-green-500 text-xl">✓</span>
                    <span className="text-gray-700">시술 후 홈케어로 더 오래 지속</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-500 text-xl">✓</span>
                    <span className="text-gray-700">업체에서 직접 추천하는 제품</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-500 text-xl">✓</span>
                    <span className="text-gray-700">온라인으로 편리하게 구매</span>
                  </div>
                </div>
                <Link 
                  href="/search" 
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  상품 구매하기
                  <span className="text-lg">→</span>
                </Link>
              </div>
              <div className="relative h-64 lg:h-auto bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">💄</div>
                  <p className="text-gray-600 font-medium">
                    헤어케어 · 스타일링 · 네일케어<br/>
                    다양한 뷰티 상품을 만나보세요
                  </p>
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
