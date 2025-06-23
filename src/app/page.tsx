"use client";
import React, { useState, useEffect, useRef } from 'react';
import HeroSection from './components/HeroSection';
import StickyHeader from './components/StickyHeader';
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

// 스크롤 애니메이션 훅
const useScrollAnimation = () => {
  const [animatedElements, setAnimatedElements] = useState<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-animate-id');
            if (id) {
              setAnimatedElements(prev => new Set(prev).add(id));
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const elements = document.querySelectorAll('[data-animate-id]');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return animatedElements;
};

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const animatedElements = useScrollAnimation();
  
  useEffect(() => {
    function handleScroll() {
      // 타임스페셜 섹션이 화면에 나타날 때 스틱헤더 표시
      const timeSpecialSection = document.querySelector('[data-animate-id="time-special"]');
      if (timeSpecialSection) {
        const rect = timeSpecialSection.getBoundingClientRect();
        // 타임스페셜 섹션이 화면 상단에 도달했을 때 스틱헤더 표시
        setIsScrolled(rect.top <= 100);
      }
    }
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isAnimated = (id: string) => animatedElements.has(id);

  return (
    <main className="min-h-screen bg-white text-gray-800">
      <StickyHeader isScrolled={isScrolled} />
      <FloatingCategoryMenu isVisible={isScrolled} />
      <HeroSection showDropdown={showDropdown} setShowDropdown={setShowDropdown} />
      
      {/* 타임스페셜 섹션 */}
      <div 
        data-animate-id="time-special"
        className={`scroll-animate ${isAnimated('time-special') ? 'animate' : ''}`}
      >
        <TimeSpecialSection reviews={timeSpecialReviews} />
      </div>
      
      {/* CTA 섹션 */}
      <section 
        data-animate-id="cta-section"
        className={`w-full py-20 animated-gradient ${isAnimated('cta-section') ? 'animate' : ''}`}
        style={{
          animation: isAnimated('cta-section') ? 'fadeInUp 0.8s ease-out' : 'none'
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            className="text-4xl font-bold mb-4 text-white"
            style={{
              animation: isAnimated('cta-section') ? 'fadeInUp 0.8s ease-out 0.2s both' : 'none',
              opacity: isAnimated('cta-section') ? 1 : 0,
              transform: isAnimated('cta-section') ? 'translateY(0)' : 'translateY(30px)'
            }}
          >
            당신의 아름다움을 위한 최고의 선택
          </h2>
          <p 
            className="text-xl mb-8 text-white/90"
            style={{
              animation: isAnimated('cta-section') ? 'fadeInUp 0.8s ease-out 0.4s both' : 'none',
              opacity: isAnimated('cta-section') ? 1 : 0,
              transform: isAnimated('cta-section') ? 'translateY(0)' : 'translateY(30px)'
            }}
          >
            전문가와 함께 새로운 스타일을 찾아보세요
          </p>
          <div 
            className="flex gap-4 justify-center"
            style={{
              animation: isAnimated('cta-section') ? 'fadeInUp 0.8s ease-out 0.6s both' : 'none',
              opacity: isAnimated('cta-section') ? 1 : 0,
              transform: isAnimated('cta-section') ? 'translateY(0)' : 'translateY(30px)'
            }}
          >
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
      
      {/* 회원가입 섹션 */}
      <section 
        data-animate-id="signup-section"
        className={`w-full py-20 bg-gray-50 ${isAnimated('signup-section') ? 'animate' : ''}`}
        style={{
          animation: isAnimated('signup-section') ? 'fadeInUp 0.8s ease-out' : 'none'
        }}
      >
        <div className="max-w-[1240px] mx-auto text-center">
          <h2 
            className="text-3xl font-bold mb-4"
            style={{
              animation: isAnimated('signup-section') ? 'fadeInUp 0.8s ease-out 0.2s both' : 'none',
              opacity: isAnimated('signup-section') ? 1 : 0,
              transform: isAnimated('signup-section') ? 'translateY(0)' : 'translateY(30px)'
            }}
          >
            지금 가입하고 특별한 혜택을 받으세요
          </h2>
          <p 
            className="text-gray-600 mb-8"
            style={{
              animation: isAnimated('signup-section') ? 'fadeInUp 0.8s ease-out 0.4s both' : 'none',
              opacity: isAnimated('signup-section') ? 1 : 0,
              transform: isAnimated('signup-section') ? 'translateY(0)' : 'translateY(30px)'
            }}
          >
            신규 회원을 위한 다양한 할인 혜택과 이벤트가 준비되어 있습니다
          </p>
          <button 
            className="button-hover bg-black text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-900 transition-colors"
            style={{
              animation: isAnimated('signup-section') ? 'bounceIn 0.8s ease-out 0.6s both' : 'none',
              opacity: isAnimated('signup-section') ? 1 : 0,
              transform: isAnimated('signup-section') ? 'scale(1)' : 'scale(0.3)'
            }}
          >
            무료 회원가입
          </button>
        </div>
      </section>
      
      {/* 앱 다운로드 & 비즈니스 섹션 */}
      <section 
        data-animate-id="app-business-section"
        className={`w-full bg-white py-20 ${isAnimated('app-business-section') ? 'animate' : ''}`}
        style={{
          animation: isAnimated('app-business-section') ? 'fadeInUp 0.8s ease-out' : 'none'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[800px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
            <div 
              className="scroll-animate-left"
              style={{
                animation: isAnimated('app-business-section') ? 'fadeInLeft 0.8s ease-out 0.2s both' : 'none',
                opacity: isAnimated('app-business-section') ? 1 : 0,
                transform: isAnimated('app-business-section') ? 'translateX(0)' : 'translateX(-30px)'
              }}
            >
              <AppDownloadSection />
            </div>
            <div 
              className="scroll-animate-right"
              style={{
                animation: isAnimated('app-business-section') ? 'fadeInRight 0.8s ease-out 0.4s both' : 'none',
                opacity: isAnimated('app-business-section') ? 1 : 0,
                transform: isAnimated('app-business-section') ? 'translateX(0)' : 'translateX(30px)'
              }}
            >
              <BusinessSection />
            </div>
          </div>
        </div>
      </section>

      {/* 기능 섹션들 */}
      <div 
        data-animate-id="features-section"
        className={`${isAnimated('features-section') ? 'animate' : ''}`}
        style={{
          animation: isAnimated('features-section') ? 'fadeInUp 0.8s ease-out' : 'none'
        }}
      >
        <FeatureSearch />
        <FeatureManage />
        <FeatureReview />
      </div>

      {/* 도시 검색 섹션 */}
      <div 
        data-animate-id="city-search-section"
        className={`${isAnimated('city-search-section') ? 'animate' : ''}`}
        style={{
          animation: isAnimated('city-search-section') ? 'slideInFromBottom 0.8s ease-out' : 'none'
        }}
      >
        <CitySearchSection />
      </div>

      {/* 추천 아티클 섹션 */}
      <div 
        data-animate-id="articles-section"
        className={`${isAnimated('articles-section') ? 'animate' : ''}`}
        style={{
          animation: isAnimated('articles-section') ? 'scaleIn 0.8s ease-out' : 'none'
        }}
      >
        <RecommendedArticlesSection />
      </div>
    </main>
  );
}
