"use client"

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faUsers, faRocket } from '@fortawesome/free-solid-svg-icons';

// 간단한 로고 컴포넌트
const StyleLogBizLogo = () => (
    <svg width="24" height="24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="100" rx="20" fill="#a78bfa"/>
        <path d="M30 70V30L70 30" stroke="white" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M30 50H70" stroke="white" strokeWidth="10" strokeLinecap="round" />
    </svg>
);

export default function BusinessSection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative bg-gradient-to-br from-slate-50 via-purple-50 to-violet-50 rounded-3xl p-8 flex flex-col h-full border border-slate-200/50 transition-all duration-500 hover:shadow-lg hover:border-purple-200"
    >
      {/* 미묘한 배경 그라데이션 */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100/30 via-transparent to-violet-100/20 rounded-3xl opacity-0 transition-opacity duration-500 hover:opacity-100"></div>

      {/* 상단 로고 */}
      <div className="flex items-center gap-2 mb-6 relative z-10">
        <div className={`transition-transform duration-300 ${isHovered ? 'scale-105' : ''}`}>
          <StyleLogBizLogo />
        </div>
        <div>
          <p className="font-bold text-sm text-slate-800">스타일로그 비즈니스</p>
          <p className="text-xs text-slate-500">For Business</p>
        </div>
      </div>

      {/* 중앙 컨텐츠 */}
      <div className="flex-grow relative z-10">
        <h3 className="text-2xl font-bold text-slate-900 mb-4 leading-snug transition-colors duration-300">
          비즈니스를<br/>
          <span className={`transition-all duration-500 ${isHovered ? 'text-purple-600' : 'text-slate-700'}`}>
            더 스마트하게
          </span>
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed mb-6">
          예약 관리, 고객 관리, 매출 분석까지<br/>
          한 번에 해결하세요.
        </p>
        
        {/* 비즈니스 통계 */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center justify-between text-xs">
            <span className="text-purple-600 font-medium">등록 비즈니스</span>
            <span className="text-slate-700 font-bold">2,847+</span>
          </div>
          <div className="flex items-center justify-between text-xs">
            <span className="text-purple-600 font-medium">평균 매출 증가</span>
            <span className="text-slate-700 font-bold">67%</span>
          </div>
        </div>
      </div>

      {/* 하단 버튼 */}
      <div className="relative z-10">
        <Link 
          href="/business" 
          className="inline-flex items-center gap-3 bg-slate-900 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 text-sm hover:bg-slate-800 hover:scale-[1.02]"
        >
          <span>비즈니스 시작하기</span>
          <FontAwesomeIcon icon={faRocket} className="text-base" />
        </Link>
      </div>

      {/* 하단 표시 */}
      <div className="mt-6 text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-3 py-1.5 border border-slate-200/50">
          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
          <p className="text-xs text-slate-600">Business Dashboard</p>
        </div>
      </div>
    </div>
  );
} 