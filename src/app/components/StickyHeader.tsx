import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faMapMarkerAlt, faClock } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

interface StickyHeaderProps {
  isScrolled: boolean;
}

export default function StickyHeader({ isScrolled }: StickyHeaderProps) {
  return (
    <div 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 sticky-header ${
        isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full hidden'
      }`}
      style={{ 
        background: '#1D1D1D',
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
            <div className="text-white font-bold text-xl" style={{ fontFamily: 'Pretendard, Arial, sans-serif' }}>
            tegana
            </div>
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
            <button className="text-white text-sm hover:text-gray-300 transition-colors duration-200 font-medium">
              비즈니스 목록
            </button>
            <Link href="/community" className="text-white text-sm hover:text-gray-300 transition-colors duration-200 font-medium">
              커뮤니티
            </Link>
            <Link href="/login" className="text-white text-sm hover:text-gray-300 transition-colors duration-200 font-medium">
              로그인
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 