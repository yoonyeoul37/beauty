"use client";

import { useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faSquarePlus, faDownload } from '@fortawesome/free-solid-svg-icons';

// 간단한 로고 컴포넌트
const StyleLogAppLogo = () => (
  <svg width="24" height="24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" rx="20" fill="#34495e"/>
    <path d="M 50 28 V 72 M 25 50 C 40 45, 60 45, 75 50" stroke="white" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function AppDownloadSection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-50 rounded-3xl p-8 flex flex-col h-full border border-slate-200/50 transition-all duration-500 hover:shadow-lg hover:border-emerald-200"
    >
      {/* 미묘한 배경 그라데이션 */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/30 via-transparent to-teal-100/20 rounded-3xl opacity-0 transition-opacity duration-500 hover:opacity-100"></div>

      {/* 상단 로고 */}
      <div className="flex items-center gap-2 mb-6 relative z-10">
        <div className={`transition-transform duration-300 ${isHovered ? 'scale-105' : ''}`}>
          <StyleLogAppLogo />
        </div>
        <div>
          <p className="font-bold text-sm text-slate-800">스타일로그</p>
          <p className="text-xs text-slate-500">App</p>
        </div>
      </div>

      {/* 중앙 컨텐츠 */}
      <div className="flex-grow relative z-10">
        <h3 className="text-2xl font-bold text-slate-900 mb-4 leading-snug transition-colors duration-300">
          당신의 스타일을<br/>
          <span className={`transition-all duration-500 ${isHovered ? 'text-emerald-600' : 'text-slate-700'}`}>
            더 쉽게 관리하세요
          </span>
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed mb-6">
          예약부터 리뷰까지, 모든 뷰티 서비스를<br/>
          한 앱에서 편하게
        </p>
        
        {/* 다운로드 카운터 */}
        <div className="flex items-center gap-2 text-xs text-emerald-600 font-medium mb-6">
          <FontAwesomeIcon icon={faDownload} className="text-emerald-500" />
          <span>다운로드: 15,420+</span>
        </div>
      </div>

      {/* 하단 버튼들 */}
      <div className="flex items-center gap-3 relative z-10">
        <a 
          href="/search" 
          className="flex items-center justify-center gap-2 bg-slate-900 text-white w-full py-3 rounded-xl transition-all duration-300 text-sm font-medium hover:bg-slate-800 hover:scale-[1.02]"
        >
          <FontAwesomeIcon icon={faSearch} className="text-base" />
          내 주변 뷰티샵 찾기
        </a>
        <a 
          href="#" 
          className="flex items-center justify-center gap-2 bg-emerald-600 text-white w-full py-3 rounded-xl transition-all duration-300 text-sm font-medium hover:bg-emerald-700 hover:scale-[1.02]"
        >
          <FontAwesomeIcon icon={faSquarePlus} className="text-base" />
          홈 화면에 추가
        </a>
      </div>

      {/* 하단 표시 */}
      <div className="mt-6 text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-3 py-1.5 border border-slate-200/50">
          <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
          <p className="text-xs text-slate-600">App Screenshot</p>
        </div>
      </div>
    </div>
  );
} 