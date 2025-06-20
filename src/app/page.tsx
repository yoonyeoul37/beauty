"use client";
import React, { useState, useEffect } from 'react';
import HeroSection from './components/HeroSection';
import TimeSpecialSection from './components/TimeSpecialSection';
import AppDownloadSection from './components/AppDownloadSection';
import StickyHeader from './components/StickyHeader';
import Link from 'next/link';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  
  // TimeSpecialSection을 위한 상태 관리 로직을 복원합니다.
  const [bigCardIdx, setBigCardIdx] = useState(-1);
  const [clickedCard, setClickedCard] = useState(-1);
  
  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 80); // 헤더가 80px 스크롤 시 변경
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <StickyHeader isScrolled={isScrolled} />
      <HeroSection showDropdown={showDropdown} setShowDropdown={setShowDropdown} />
      
      {/* CategoryNav 컴포넌트를 제거합니다. */}
      
      <TimeSpecialSection 
        bigCardIdx={bigCardIdx}
        setBigCardIdx={setBigCardIdx}
        clickedCard={clickedCard}
        setClickedCard={setClickedCard}
      />

      <section className="relative w-full h-[600px] overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/48969-459186305.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold mb-4">당신의 아름다움을 위한 최고의 선택</h2>
            <p className="text-xl mb-8">전문가와 함께 새로운 스타일을 찾아보세요</p>
            <div className="flex gap-4 justify-center">
              <button className="bg-white text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors">
                지금 시작하기
              </button>
              <Link href="/community" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-black transition-colors">
                커뮤니티
              </Link>
            </div>
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
      
      <AppDownloadSection />
    </main>
  );
}
