import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import TestDropdown from './TestDropdown';
import Link from 'next/link';
import { useState } from 'react';

interface HeroSectionProps {
  showDropdown: boolean;
  setShowDropdown: (show: boolean) => void;
}

const mainCategories = [
  {
    name: '헤어',
    sub: ['컷', '펌', '염색', '클리닉', '스타일링']
  },
  {
    name: '네일아트',
    sub: ['젤네일', '네일아트', '네일케어', '패디큐어']
  },
  { name: '메이크업', sub: ['데일리', '웨딩', '특수분장'] },
  { name: '피부관리', sub: [] },
  { name: '속눈썹', sub: ['연장', '펌'] },
  { name: '왁싱', sub: [] },
  { name: '반영구', sub: [] },
  { name: '두피케어', sub: [] },
  { name: '마사지', sub: [] },
  { name: '타투', sub: [] },
];

export default function HeroSection({ showDropdown, setShowDropdown }: HeroSectionProps) {
  const [sortType, setSortType] = useState('distance');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const handleSort = (type: string) => {
    setSortType(type);
    console.log('Sort type changed to:', type);
  };

  return (
    <section className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        src="/48969-459186305.mp4"
      />
      {/* 사이트명 - 왼쪽 상단 고급진 애니메이션 */}
      <div style={{ position: 'absolute', top: '20px', left: '40px', zIndex: 10, background: 'transparent' }}>
        <div style={{ display: 'flex', flexDirection: 'column', background: 'transparent' }}>
          <div 
            className="premium-logo"
            style={{ 
              color: 'white', 
              fontSize: '36px', 
              fontWeight: 900, 
              fontFamily: "'Noto Sans KR', sans-serif",
              letterSpacing: '0.1em',
              textShadow: '0 2px 5px rgba(0,0,0,0.4)',
              animation: 'premiumFadeIn 2s ease-out, premiumGlowV2 4s ease-in-out infinite alternate',
              background: 'transparent !important',
              marginBottom: '2px',
              marginLeft: '200px'
            }}
          >
            tegana
          </div>
          <div 
            className="english-text"
            style={{ 
              color: 'white', 
              fontSize: '20px', 
              fontWeight: 800,
              fontFamily: "'Montserrat', sans-serif",
              letterSpacing: '0.1em',
              marginTop: -10,
              opacity: '0.9',
              background: 'transparent !important',
              marginLeft: '150px',
              animation: 'fadeInUp 2s ease-out',
            }}
          >
            태가나에서 한눈에 비교하다
          </div>
        </div>
      </div>

      {/* 커뮤니티 & 잡스 링크 - 오른쪽 상단 */}
      <div style={{ position: 'absolute', top: '15px', right: '70px',  zIndex: 10, display: 'flex', gap: '20px', alignItems: 'center' }}>
        {/* 태가나잡스 링크 */}
        <Link 
          href="/community"
          className="text-white hover:text-gray-200 transition-colors duration-200 px-3 py-1 rounded-lg hover:bg-white/10"
          style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ 
              fontSize: '14px', 
              fontWeight: 600,
              fontFamily: "'Gmarket Sans', sans-serif",
              marginBottom: '1px'
            }}>
              태가나잡스
            </div>
            <div style={{ 
              fontSize: '8px', 
              fontWeight: 700,
              fontFamily: "'Montserrat', sans-serif",
              letterSpacing: '0.1em',
              opacity: '0.8'
            }}>
              TEGANA JOBS
            </div>
          </div>
        </Link>

        {/* 커뮤니티 링크 */}
        <Link 
          href="/community"
          className="text-white hover:text-gray-200 transition-colors duration-200 px-3 py-1 rounded-lg hover:bg-white/10"
          style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ 
              fontSize: '14px', 
              fontWeight: 600,
              fontFamily: "'Gmarket Sans', sans-serif",
              marginBottom: '1px'
            }}>
              커뮤니티
            </div>
            <div style={{ 
              fontSize: '8px', 
              fontWeight: 700,
              fontFamily: "'Montserrat', sans-serif",
              letterSpacing: '0.1em',
              opacity: '0.8'
            }}>
              COMMUNITY
            </div>
          </div>
        </Link>
      </div>

      {/* 히어로 중앙 컨테이너 */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 11,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        maxWidth: 600
      }}>
        <div style={{
          color: 'white',
          fontSize: '32px',
          fontWeight: 'bold',
          letterSpacing: '0.05em',
          textAlign: 'center',
          marginBottom: '2px',
          whiteSpace: 'nowrap'
        }}>
          내 주변 모든 뷰티샵을 태가나에서 간편하게
        </div>
        <div style={{
          color: 'white',
          fontSize: '20px',
          fontWeight: 'normal',
          letterSpacing: '0.03em',
          textAlign: 'center',
          marginBottom: '28px',
          marginTop: '-10px'
        }}>
          누구보다 나에게 어울리는 곳을 찾는 방법
        </div>
        <div style={{ width: '100%', position: 'relative' }}>
          <input
            type="text"
            placeholder="검색어를 입력하세요"
            className="w-full h-[50px] rounded-lg px-5 text-lg bg-white/90 text-gray-900 shadow focus:outline-none focus:ring-2 focus:ring-gray-400"
            style={{ boxSizing: 'border-box', paddingRight: '44px' }}
          />
          <div style={{
            position: 'absolute',
            right: '16px',
            top: '50%',
            transform: 'translateY(-50%)',
            color: '#b0b0b0',
            fontSize: '22px',
            pointerEvents: 'none'
          }}>
            <FontAwesomeIcon icon={faSearch} />
          </div>
        </div>
      </div>
      {/* 카테고리 메뉴 - 히어로 섹션 하단에 2단 구조로 변경 */}
      <div 
        className="absolute bottom-0 left-0 right-0 z-40"
        onMouseLeave={() => setActiveCategory(null)}
      >
        {/* 1단 카테고리 */}
        <div className="flex justify-center gap-8 py-3" style={{ flexWrap: 'nowrap' }}>
          {mainCategories.map((category) => (
            <div 
              key={category.name} 
              className="relative"
              onMouseEnter={() => setActiveCategory(category.name)}
            >
              <span className="category-item text-white font-bold drop-shadow cursor-pointer" style={{ fontSize: '18px' }}>
                {category.name}
              </span>
            </div>
          ))}
        </div>

        {/* 2단 카테고리 (활성화 시 나타남) */}
        {activeCategory && (
          <div 
            className="absolute bottom-full left-0 right-0 mb-2 bg-black/30 backdrop-blur-sm transition-all duration-300"
            style={{ 
              height: activeCategory ? '50px' : '0px', 
              overflow: 'hidden',
            }}
          >
            <div className="max-w-[1240px] mx-auto flex justify-center items-center h-full gap-6">
              {mainCategories.find(c => c.name === activeCategory)?.sub.map((subCategory) => (
                <Link key={subCategory} href={`/${subCategory.toLowerCase()}`}>
                  <div className="text-white hover:text-pink-300 transition-colors duration-200 text-base font-medium">
                    {subCategory}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
} 