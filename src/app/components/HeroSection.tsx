import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import TestDropdown from './TestDropdown';
import Link from 'next/link';
import { useState } from 'react';

interface HeroSectionProps {
  showDropdown: boolean;
  setShowDropdown: (show: boolean) => void;
}

export default function HeroSection({ showDropdown, setShowDropdown }: HeroSectionProps) {
  const [sortType, setSortType] = useState('distance');

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
              fontWeight: 700, 
              fontFamily: "'Gmarket Sans', sans-serif",
              letterSpacing: '0.1em',
              textShadow: '0 2px 5px rgba(0,0,0,0.4)',
              animation: 'premiumFadeIn 2s ease-out, premiumGlow 3s ease-in-out infinite alternate',
              background: 'transparent !important',
              marginBottom: '2px',
              marginLeft: '200px'
            }}
          >
            태가나
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
              animation: 'premiumFadeIn 2.5s ease-out',
              background: 'transparent !important',
              marginLeft: '230px',
            }}
          >
            tegana
          </div>
        </div>
      </div>

      {/* 커뮤니티 링크 - 오른쪽 상단 */}
      <div style={{ position: 'absolute', top: '8px', right: '70px',  zIndex: 10 }}>
        <Link 
          href="/community"
          className="text-white text-base font-semibold hover:text-gray-200 transition-colors duration-200 px-4 py-2 rounded-lg hover:bg-white/10"
          style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}
        >
          커뮤니티
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
      {/* 카테고리 메뉴 - 히어로 섹션 하단 구분선 위에 단독 배치 */}
      <div style={{ position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)', zIndex: 50, width: '100%' }}>
        <div className="flex justify-center gap-8" style={{ flexWrap: 'nowrap', background: 'transparent' }}>
          {['헤어', '네일아트', '메이크업', '피부관리', '속눈썹', '왁싱', '반영구', '두피케어', '마사지', '타투'].map((category, index) => (
            <div key={index} className="relative">
              <span 
                className="category-item text-white font-bold drop-shadow cursor-pointer" 
                style={{ background: 'transparent !important', fontSize: '18px' }}
                onClick={() => {
                  alert('카테고리 클릭됨!');
                  setShowDropdown(!showDropdown);
                }}
              >
                {category}
              </span>
            </div>
          ))}
        </div>
        {/* 테스트용 드롭다운 */}
        {showDropdown && (
          <TestDropdown 
            isOpen={showDropdown}
            onClose={() => setShowDropdown(false)}
            onSort={handleSort}
          />
        )}
      </div>
    </section>
  );
} 