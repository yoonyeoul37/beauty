'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faMapMarkerAlt, faClock, faBuilding, faUsers, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function StickyHeader({ isVisible }: { isVisible: boolean }) {
  return (
    <div 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'}`}
      style={{ 
        background: 'rgba(29, 29, 29, 0.8)',
        boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        height: '70px'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full" style={{ height: '70px' }}>
          {/* 로고 */}
          <div className="flex items-center" style={{ height: '70px' }}>
            <Link href="/" className="text-white font-bold text-xl hover:text-gray-300 transition-colors duration-200" style={{ fontFamily: 'Pretendard, Arial, sans-serif' }}>
              tegana
            </Link>
          </div>

          {/* Booksy 스타일 3분할 검색창 */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8 gap-3 items-center" style={{ height: '70px' }}>
            {/* 서비스/비즈니스 검색 */}
            <div className="relative flex-1 h-full flex items-center">
              <input
                type="text"
                placeholder="검색 서비스 또는 비즈니스"
                className="w-full h-12 rounded-lg pl-4 pr-10 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all duration-200"
                style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <FontAwesomeIcon icon={faSearch} />
              </div>
            </div>
            {/* 지역 검색 */}
            <div className="relative flex-1 h-full flex items-center">
              <input
                type="text"
                placeholder="어디?"
                className="w-full h-12 rounded-lg pl-10 pr-3 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all duration-200"
                style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </div>
            </div>
            {/* 날짜/시간 검색 */}
            <div className="relative flex-1 h-full flex items-center">
              <input
                type="text"
                placeholder="언제?"
                className="w-full h-12 rounded-lg pl-10 pr-3 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all duration-200"
                style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <FontAwesomeIcon icon={faClock} />
              </div>
            </div>
          </div>

          {/* 데스크톱 네비게이션 */}
          <div className="hidden md:flex items-center space-x-6" style={{ height: '70px' }}>
            <button className="flex items-center gap-2 text-white text-sm hover:text-amber-400 transition-all duration-200 font-medium group">
              <FontAwesomeIcon icon={faBuilding} className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
              <span className="group-hover:translate-x-0.5 transition-transform duration-200">비즈니스 목록</span>
            </button>
            <Link href="/community" className="flex items-center gap-2 text-white text-sm hover:text-amber-400 transition-all duration-200 font-medium group">
              <FontAwesomeIcon icon={faUsers} className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
              <span className="group-hover:translate-x-0.5 transition-transform duration-200">커뮤니티</span>
            </Link>
            <Link href="/login" className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm hover:bg-amber-500 hover:border-amber-500 transition-all duration-200 font-medium px-4 py-2 rounded-lg group">
              <FontAwesomeIcon icon={faSignInAlt} className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
              <span className="group-hover:translate-x-0.5 transition-transform duration-200">로그인</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 