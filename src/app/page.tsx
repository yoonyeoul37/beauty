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
      
      {/* 상품 구매 섹션 - 세련된 디자인 */}
      <section className="w-full py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* 배경 패턴 */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-6">
              <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></span>
              <span className="text-white/90 text-sm font-medium">전문가 엄선</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              시술 후에도
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
                완벽한 스타일
              </span>
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              전문가가 직접 추천하는 홈케어 제품으로<br />
              시술 효과를 더 오래, 더 아름답게 유지하세요
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* 카드 1 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 h-full hover:bg-white/15 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">✨</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">전문가 검증</h3>
                <p className="text-white/70 leading-relaxed">
                  실제 미용사들이 사용하고 추천하는 제품만 엄선하여 제공합니다
                </p>
              </div>
            </div>

            {/* 카드 2 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 h-full hover:bg-white/15 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">맞춤 추천</h3>
                <p className="text-white/70 leading-relaxed">
                  시술 종류와 모발 상태에 맞는 최적의 제품을 추천해드립니다
                </p>
              </div>
            </div>

            {/* 카드 3 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 h-full hover:bg-white/15 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">편리한 구매</h3>
                <p className="text-white/70 leading-relaxed">
                  시술 후 바로 구매하거나 언제든지 온라인으로 편리하게 주문하세요
                </p>
              </div>
            </div>
          </div>

          {/* CTA 섹션 */}
          <div className="text-center">
            <Link 
              href="/products" 
              className="group inline-flex items-center gap-4 bg-white text-slate-900 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-white/20"
            >
              <span>상품 둘러보기</span>
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Link>
            <p className="text-white/60 text-sm mt-4">
              헤어케어 · 스타일링 · 네일케어 · 메이크업
            </p>
          </div>
        </div>
      </section>
      
      <PromoCardBanner />
      
      {/* 회원가입 섹션 - 세련된 디자인 */}
      <section className="w-full py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
        {/* 배경 장식 */}
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-indigo-200/20 to-pink-200/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm border border-white/40 rounded-full px-4 py-2 mb-6">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
              <span className="text-slate-700 text-sm font-medium">새로운 시작</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 leading-tight">
              더 나은 뷰티 경험을
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                시작해보세요
              </span>
            </h2>
            
            <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              전문가 추천 상품 할인, 시술 예약 혜택, 커뮤니티 참여 등<br />
              다양한 혜택을 누려보세요
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/signup" 
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <span>시작하기</span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
              
              <div className="flex items-center gap-6 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  <span>무료 가입</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  <span>즉시 혜택</span>
                </div>
              </div>
            </div>
          </div>
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
