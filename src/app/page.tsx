"use client";
import React, { useState, useEffect } from 'react';
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

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  
  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 80);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-white text-gray-800">
      <StickyHeader isScrolled={isScrolled} />
      <FloatingCategoryMenu isVisible={isScrolled} />
      <HeroSection showDropdown={showDropdown} setShowDropdown={setShowDropdown} />
      <TimeSpecialSection reviews={timeSpecialReviews} />
      
      <section className="w-full py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">당신의 아름다움을 위한 최고의 선택</h2>
          <p className="text-xl mb-8">전문가와 함께 새로운 스타일을 찾아보세요</p>
          <div className="flex gap-4 justify-center">
            <Link href="/search" className="bg-white text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition-colors">
              지금 시작하기
            </Link>
            <Link href="/community" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-black transition-colors">
              커뮤니티
            </Link>
          </div>
        </div>
      </section>
      
      <section className="w-full py-20 bg-gray-50">
        <div className="max-w-[1240px] mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">지금 가입하고 특별한 혜택을 받으세요</h2>
          <p className="text-gray-600 mb-8">신규 회원을 위한 다양한 할인 혜택과 이벤트가 준비되어 있습니다</p>
          <button className="bg-black text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-900 transition-colors">
            무료 회원가입
          </button>
        </div>
      </section>
      
      <section className="w-full bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[800px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
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
