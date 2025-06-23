import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import TestDropdown from './TestDropdown';
import Link from 'next/link';
import { useState, useEffect } from 'react';

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
  const [searchFocused, setSearchFocused] = useState(false);
  const [logoLoaded, setLogoLoaded] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [typingIndex, setTypingIndex] = useState(0);
  
  const textStyle = { color: 'white', textShadow: '0 2px 5px rgba(0,0,0,0.5)' };
  
  const searchPlaceholders = [
    "헤어샵을 찾아보세요",
    "네일샵을 검색해보세요", 
    "메이크업샵을 찾아보세요",
    "피부관리를 검색해보세요"
  ];

  useEffect(() => {
    // 로고 애니메이션 시작
    setLogoLoaded(true);
    
    // 타이핑 애니메이션
    const typingInterval = setInterval(() => {
      setTypingIndex((prev) => (prev + 1) % searchPlaceholders.length);
    }, 3000);
    
    return () => clearInterval(typingInterval);
  }, []);

  const handleSort = (type: string) => {
    setSortType(type);
    console.log('Sort type changed to:', type);
  };

  return (
    <section className="relative w-full h-[560px] flex items-center justify-center overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        src="/미용영상.mp4"
      />
      
      {/* 사이트명 - 왼쪽 상단 고급진 애니메이션 */}
      <div style={{ position: 'absolute', top: '20px', left: '40px', zIndex: 10, background: 'transparent' }}>
        <div style={{ display: 'flex', flexDirection: 'column', background: 'transparent' }}>
          <div 
            className={`premium-logo ${logoLoaded ? 'loaded' : ''}`}
            style={{ 
              ...textStyle,
              fontSize: '36px', 
              fontWeight: 900, 
              fontFamily: "'Noto Sans KR', sans-serif",
              letterSpacing: '0.1em',
              animation: logoLoaded ? 'premiumFadeIn 2s ease-out, premiumGlowV2 4s ease-in-out infinite alternate, logoFloat 6s ease-in-out infinite' : 'none',
              background: 'transparent !important',
              marginBottom: '2px',
              marginLeft: '200px',
              transform: logoLoaded ? 'translateY(0)' : 'translateY(-20px)',
              opacity: logoLoaded ? 1 : 0,
              transition: 'all 0.8s ease-out'
            }}
          >
            스타일로그
          </div>
          <div 
            className={`english-text ${logoLoaded ? 'loaded' : ''}`}
            style={{ 
              ...textStyle,
              fontSize: '20px', 
              fontWeight: 800,
              fontFamily: "'Montserrat', sans-serif",
              letterSpacing: '0.1em',
              marginTop: -10,
              opacity: logoLoaded ? '0.9' : '0',
              background: 'transparent !important',
              marginLeft: '150px',
              animation: logoLoaded ? 'fadeInUp 2s ease-out 0.5s both, textShimmer 3s ease-in-out infinite' : 'none',
              transform: logoLoaded ? 'translateY(0)' : 'translateY(10px)',
              transition: 'all 0.8s ease-out 0.5s'
            }}
          >
            Style Logs
          </div>
        </div>
      </div>

      {/* 커뮤니티 & 잡스 링크 - 오른쪽 상단 */}
      <div style={{ position: 'absolute', top: '15px', right: '70px',  zIndex: 10, display: 'flex', gap: '20px', alignItems: 'center' }}>
        <Link 
          href="/community"
          className="community-link hover:text-gray-200 transition-all duration-300 px-3 py-1 rounded-lg hover:bg-white/10 hover:scale-105"
          style={{
            ...textStyle,
            animation: 'fadeInRight 1s ease-out 1s both',
            opacity: 0,
            transform: 'translateX(20px)'
          }}
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
        <div 
          className="hero-title"
          style={{
            ...textStyle,
            fontSize: '32px',
            fontWeight: 'bold',
            letterSpacing: '0.05em',
            textAlign: 'center',
            marginBottom: '2px',
            whiteSpace: 'nowrap',
            animation: 'heroTitleSlideIn 1.5s ease-out 0.8s both',
            opacity: 0,
            transform: 'translateY(30px)'
          }}
        >
          가격부터 서비스까지, 모든 것을 비교하세요
        </div>
        <div 
          className="hero-subtitle"
          style={{
            ...textStyle,
            fontSize: '20px',
            fontWeight: 'normal',
            letterSpacing: '0.03em',
            textAlign: 'center',
            marginBottom: '28px',
            marginTop: '-10px',
            animation: 'heroSubtitleSlideIn 1.5s ease-out 1.2s both',
            opacity: 0,
            transform: 'translateY(30px)'
          }}
        >
          누구보다 나에게 어울리는 곳을 찾는 방법
        </div>
        
        {/* 검색창 - 생동감 있는 애니메이션 */}
        <div 
          className="search-container"
          style={{ 
            width: '100%', 
            position: 'relative',
            animation: 'searchContainerSlideIn 1s ease-out 1.6s both',
            opacity: 0,
            transform: 'translateY(20px) scale(0.95)'
          }}
        >
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder={searchPlaceholders[typingIndex]}
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
            className={`search-input w-full h-[50px] rounded-lg px-5 text-lg bg-white/90 text-gray-900 shadow transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:bg-white/95 ${
              searchFocused ? 'search-focused' : ''
            }`}
            style={{ 
              boxSizing: 'border-box', 
              paddingRight: '44px',
              transform: searchFocused ? 'scale(1.02)' : 'scale(1)',
              boxShadow: searchFocused 
                ? '0 8px 25px rgba(0,0,0,0.15), 0 0 0 3px rgba(236, 72, 153, 0.1)' 
                : '0 4px 15px rgba(0,0,0,0.1)'
            }}
          />
          <div 
            className="search-icon"
            style={{
              position: 'absolute',
              right: '16px',
              top: '50%',
              transform: `translateY(-50%) ${searchFocused ? 'scale(1.1)' : 'scale(1)'}`,
              color: searchFocused ? '#ec4899' : '#b0b0b0',
              fontSize: '22px',
              pointerEvents: 'none',
              transition: 'all 0.3s ease'
            }}
          >
            <FontAwesomeIcon icon={faSearch} />
          </div>
          
          {/* 검색창 하단 글로우 효과 */}
          {searchFocused && (
            <div 
              className="search-glow"
              style={{
                position: 'absolute',
                bottom: '-8px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '80%',
                height: '4px',
                background: 'linear-gradient(90deg, transparent, rgba(236, 72, 153, 0.3), transparent)',
                borderRadius: '50%',
                animation: 'searchGlow 2s ease-in-out infinite'
              }}
            />
          )}
        </div>
      </div>
      
      {/* 카테고리 메뉴 - 생동감 있는 호버 효과 */}
      <div 
        className="absolute bottom-0 left-0 right-0 z-40"
        onMouseLeave={() => setActiveCategory(null)}
      >
        {/* 1단 카테고리 */}
        <div 
          className="flex justify-center gap-8 py-3 category-container"
          style={{ 
            flexWrap: 'nowrap',
            animation: 'categorySlideUp 1s ease-out 2s both',
            opacity: 0,
            transform: 'translateY(20px)'
          }}
        >
          {mainCategories.map((category, index) => (
            <div 
              key={category.name} 
              className="relative category-wrapper"
              onMouseEnter={() => setActiveCategory(category.name)}
              style={{
                animation: `categoryItemFadeIn 0.6s ease-out ${2.2 + index * 0.1}s both`,
                opacity: 0,
                transform: 'translateY(10px)'
              }}
            >
              <span 
                className={`category-item font-bold drop-shadow cursor-pointer transition-all duration-300 hover:scale-110 ${
                  activeCategory === category.name ? 'category-active' : ''
                }`} 
                style={{ 
                  fontSize: '18px', 
                  ...textStyle,
                  textShadow: activeCategory === category.name 
                    ? '0 0 20px rgba(255,255,255,0.6), 0 2px 5px rgba(0,0,0,0.5)' 
                    : '0 2px 5px rgba(0,0,0,0.5)',
                  transform: activeCategory === category.name ? 'scale(1.1)' : 'scale(1)'
                }}
              >
                {category.name}
              </span>
              
              {/* 카테고리 호버 시 글로우 효과 */}
              {activeCategory === category.name && (
                <div 
                  className="category-glow"
                  style={{
                    position: 'absolute',
                    bottom: '-5px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '100%',
                    height: '2px',
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)',
                    borderRadius: '50%',
                    animation: 'categoryGlow 1.5s ease-in-out infinite'
                  }}
                />
              )}
            </div>
          ))}
        </div>

        {/* 2단 카테고리 (활성화 시 나타남) */}
        {activeCategory && (
          <div 
            className="absolute bottom-full left-0 right-0 mb-2 bg-black/30 backdrop-blur-sm transition-all duration-500"
            style={{ 
              height: activeCategory ? '50px' : '0px', 
              overflow: 'hidden',
              animation: 'subCategorySlideDown 0.4s ease-out'
            }}
          >
            <div className="max-w-[1240px] mx-auto flex justify-center items-center h-full gap-6">
              {mainCategories.find(c => c.name === activeCategory)?.sub.map((subCategory, index) => (
                <Link key={subCategory} href={`/${subCategory.toLowerCase()}`}>
                  <div 
                    className="text-white hover:text-pink-300 transition-all duration-300 text-base font-medium hover:scale-105"
                    style={{
                      animation: `subCategoryFadeIn 0.3s ease-out ${index * 0.1}s both`,
                      opacity: 0,
                      transform: 'translateY(10px)'
                    }}
                  >
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