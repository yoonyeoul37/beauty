"use client";
import Link from 'next/link'
import { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import { faTrainSubway, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

// FontAwesome 라이브러리에 아이콘 추가
library.add(faBell, faStarSolid, faStarRegular, faTrainSubway, faHeartSolid, faHeartRegular, faMapMarkerAlt);

const subwayLineColors: { [key: number]: string } = {
  1: '#0052A4', // 1호선 파랑
  2: '#009D3E', // 2호선 초록
  3: '#EF7C1C', // 3호선 주황
  4: '#00A5DE', // 4호선 하늘
  5: '#996CAC', // 5호선 보라
  6: '#CD7C2F', // 6호선 갈색
  7: '#747F00', // 7호선 연두
  8: '#E6186C', // 8호선 분홍
  9: '#BDB092', // 9호선 금색
};

const categories = [
  { name: '커트', href: '/haircut', icon: '💇‍♂️' },
  { name: '염색', href: '/coloring', icon: '🎨' },
  { name: '펌', href: '/perm', icon: '🌀' },
  { name: '클리닉', href: '#', icon: '💆‍♀️' },
  { name: '메이크업', href: '#', icon: '💄' },
  { name: '왁싱', href: '#', icon: '🧖‍♀️' },
  { name: '네일', href: '#', icon: '💅' },
  { name: '속눈썹', href: '#', icon: '👁️' },
];

const popularSalons = [
  { name: '스타일리스트 A', location: '강남', desc: '합리적 가격, 높은 평점', href: '/haircut', rating: 4.9, reviewCount: 2341 },
  { name: '스타일리스트 B', location: '홍대', desc: '트렌디한 스타일', href: '/coloring', rating: 4.7, reviewCount: 1876 },
  { name: '스타일리스트 C', location: '신촌', desc: '친절한 서비스', href: '/perm', rating: 4.8, reviewCount: 1543, subway: { line: 2, station: '신촌역', exit: 2, walk: 6 } },
  { name: '스타일리스트 D', location: '건대', desc: '예약 필수 인기샵', href: '/haircut', rating: 4.6, reviewCount: 987, subway: { line: 2, station: '건대입구역', exit: 5, walk: 3 } },
  { name: '스타일리스트 E', location: '잠실', desc: '합리적 가격, 최신 트렌드', href: '/coloring', rating: 4.8, reviewCount: 765 },
];

const reviewedSalons = [
  { name: '뷰티살롱 A', location: '강남', desc: '리뷰 1,234개', href: '/haircut', rating: 4.8, reviewCount: 1234 },
  { name: '헤어스튜디오 B', location: '홍대', desc: '리뷰 987개', href: '/coloring', rating: 4.5, reviewCount: 987 },
  { name: '미용실 C', location: '신촌', desc: '리뷰 856개', href: '/perm', rating: 4.9, reviewCount: 856, subway: { line: 2, station: '신촌역', exit: 2, walk: 6 } },
  { name: '헤어살롱 D', location: '건대', desc: '리뷰 743개', href: '/haircut', rating: 4.7, reviewCount: 743, subway: { line: 2, station: '건대입구역', exit: 5, walk: 3 } },
  { name: '뷰티샵 E', location: '잠실', desc: '리뷰 632개', href: '/coloring', rating: 4.6, reviewCount: 632 },
];

const menuWithSub = [
  {
    name: '헤어', href: '/hair', icon: '💇‍♂️',
    submenu: ['커트', '염색', '펌', '헤어 클리닉', '헤드 스파']
  },
  {
    name: '네일아트', href: '/nailart', icon: '💅',
    submenu: ['젤 네일', '아트 네일', '케어']
  },
  {
    name: '메이크업', href: '/makeup', icon: '💄',
    submenu: ['데일리 메이크업', '특별 메이크업', '메이크업 클래스']
  },
  {
    name: '피부관리', href: '/skincare', icon: '✨',
    submenu: ['기본 관리', '특수 관리', '안티에이징']
  },
  {
    name: '마사지&스파', href: '/massage', icon: '💆‍♀️',
    submenu: ['전신 마사지', '발 마사지', '스파 트리트먼트']
  },
  {
    name: '기타 뷰티 서비스', href: '/other', icon: '🧴',
    submenu: ['속눈썹', '왁싱']
  },
];

// 별점을 렌더링하는 컴포넌트
const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <FontAwesomeIcon
          key={star}
          icon={star <= rating ? faStarSolid : faStarRegular}
          className={star <= rating ? "text-yellow-400" : "text-gray-300"}
          style={{ fontSize: '14px', filter: 'url(#round)' }}
        />
      ))}
    </div>
  );
};

export default function Home() {
  const [openMenu, setOpenMenu] = useState<number | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const [randomSalonIndex, setRandomSalonIndex] = useState(0); // 랜덤 선택된 카드 인덱스
  // 최근 리뷰가 많은 업체 큰 카드 랜덤 인덱스
  const [bigCardIdx, setBigCardIdx] = useState(0);

  // 슬라이더 상태
  const visibleCount = 5;
  const slideLen = popularSalons.length;
  let slideCards: typeof popularSalons = [];
  let reviewSlideCards: typeof reviewedSalons = [];
  
  if (slideLen === 0) {
    slideCards = [];
    reviewSlideCards = [];
  } else {
    // 현재 있는 카드만 반복해서 5*3개 이상으로 복제
    while (slideCards.length < visibleCount * 3) {
      slideCards = slideCards.concat(popularSalons);
    }
    while (reviewSlideCards.length < visibleCount * 3) {
      reviewSlideCards = reviewSlideCards.concat(reviewedSalons);
    }
  }
  const [slideIdx, setSlideIdx] = useState(slideLen); // 중간에서 시작
  const [reviewSlideIdx, setReviewSlideIdx] = useState(slideLen); // 중간에서 시작
  const [isTransition, setIsTransition] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [isReviewPaused, setIsReviewPaused] = useState(false);

  const [liked, setLiked] = useState<{ [key: string]: boolean }>({});
  const [bounce, setBounce] = useState<{ [key: string]: boolean }>({});
  const [showToast, setShowToast] = useState<{ [key: string]: boolean }>({});
  const [toastMsg, setToastMsg] = useState<{ [key: string]: string }>({});
  const handleLike = (key: string) => {
    setLiked((prev) => ({ ...prev, [key]: !prev[key] }));
    setBounce((prev) => ({ ...prev, [key]: true }));
    setToastMsg((prev) => ({
      ...prev,
      [key]: liked[key] ? '찜을 취소했어요' : '관심 매장으로 등록!'
    }));
    setShowToast((prev) => ({ ...prev, [key]: true }));
    setTimeout(() => setBounce((prev) => ({ ...prev, [key]: false })), 500);
    setTimeout(() => setShowToast((prev) => ({ ...prev, [key]: false })), 2000);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenMenu(null);
      }
    }
    if (openMenu !== null) {
      window.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openMenu]);

  useEffect(() => {
    if (slideCards.length === 0 || isPaused) return;
    const timer = setInterval(() => {
      setSlideIdx((prev) => prev + 1);
      setIsTransition(true);
    }, 5000);
    return () => clearInterval(timer);
  }, [slideCards.length, isPaused]);

  useEffect(() => {
    if (reviewSlideCards.length === 0 || isReviewPaused) return;
    const timer = setInterval(() => {
      setReviewSlideIdx((prev) => prev + 1);
      // 현재 보이는 카드들 중에서 랜덤으로 하나 선택
      const visibleStartIdx = reviewSlideIdx % (slideLen - 1);
      const randomIdx = Math.floor(Math.random() * 3) + visibleStartIdx;
      setRandomSalonIndex(randomIdx % (slideLen - 1));
      setIsTransition(true);
    }, 5000);
    return () => clearInterval(timer);
  }, [reviewSlideCards.length, isReviewPaused, reviewSlideIdx, slideLen]);

  // 무한루프 효과
  useEffect(() => {
    if (slideIdx === slideCards.length - visibleCount + 1) {
      const timeout = setTimeout(() => {
        setIsTransition(false);
        setSlideIdx(slideLen);
      }, 500);
      return () => clearTimeout(timeout);
    } else if (slideIdx === 0) {
      const timeout = setTimeout(() => {
        setIsTransition(false);
        setSlideIdx(slideCards.length - visibleCount * 2);
      }, 500);
      return () => clearTimeout(timeout);
    } else {
      setIsTransition(true);
    }
  }, [slideIdx, slideLen, slideCards.length]);

  useEffect(() => {
    if (reviewSlideIdx === reviewSlideCards.length - visibleCount + 1) {
      const timeout = setTimeout(() => {
        setIsTransition(false);
        setReviewSlideIdx(slideLen);
      }, 500);
      return () => clearTimeout(timeout);
    } else if (reviewSlideIdx === 0) {
      const timeout = setTimeout(() => {
        setIsTransition(false);
        setReviewSlideIdx(reviewSlideCards.length - visibleCount * 2);
      }, 500);
      return () => clearTimeout(timeout);
    } else {
      setIsTransition(true);
    }
  }, [reviewSlideIdx, slideLen, reviewSlideCards.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      let nextIdx;
      do {
        nextIdx = Math.floor(Math.random() * reviewedSalons.length);
      } while (nextIdx === bigCardIdx);
      setBigCardIdx(nextIdx);
    }, 5000);
    return () => clearInterval(timer);
  }, [bigCardIdx]);

  const goNext = () => {
    setSlideIdx((prev) => prev + 1);
    setIsTransition(true);
  };
  const goPrev = () => {
    setSlideIdx((prev) => prev - 1);
    setIsTransition(true);
  };
  const goReviewNext = () => {
    setReviewSlideIdx((prev) => prev + 1);
    // 다음 버튼 클릭시에도 랜덤 선택
    const visibleStartIdx = (reviewSlideIdx + 1) % (slideLen - 1);
    const randomIdx = Math.floor(Math.random() * 3) + visibleStartIdx;
    setRandomSalonIndex(randomIdx % (slideLen - 1));
    setIsTransition(true);
  };
  const goReviewPrev = () => {
    setReviewSlideIdx((prev) => prev - 1);
    // 이전 버튼 클릭시에도 랜덤 선택
    const visibleStartIdx = (reviewSlideIdx - 1) % (slideLen - 1);
    const randomIdx = Math.floor(Math.random() * 3) + visibleStartIdx;
    setRandomSalonIndex(randomIdx % (slideLen - 1));
    setIsTransition(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white flex flex-col">
      {/* 헤더 */}
      <header className="w-full bg-[#232526] shadow-lg border-b-2 border-gray-300/40">
        <div className="h-[100px] flex items-center px-4 relative">
          <div className="flex items-center gap-8" style={{ marginLeft: 120 }}>
            <span className="text-4xl font-extrabold text-white tracking-wide drop-shadow-lg px-6 py-2 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-md">라뷰</span>
            <input
              type="text"
              placeholder="검색어를 입력하세요"
              className="w-[580px] h-[60px] rounded-full px-8 py-4 text-lg shadow focus:outline-none focus:ring-2 focus:ring-pink-300 border border-gray-200 bg-white placeholder-gray-400"
              style={{ boxShadow: '0 2px 12px 0 rgba(255, 0, 80, 0.08)' }}
            />
          </div>
          {/* 헤더 우측 네비게이션(예시) */}
          <div className="absolute right-12 flex items-center gap-6">
            <button className="text-white/80 hover:text-pink-200 transition-colors text-lg font-semibold px-3 py-2 rounded-xl hover:bg-white/10 focus:outline-none">로그인</button>
            <button className="text-white/80 hover:text-pink-200 transition-colors text-lg font-semibold px-3 py-2 rounded-xl hover:bg-white/10 focus:outline-none">회원가입</button>
          </div>
        </div>
      </header>

      {/* 히어로 섹션 */}
      <section className="w-full bg-gradient-to-r from-pink-50 via-purple-50 to-pink-50">
        <div className="max-w-[1200px] mx-auto px-4 py-16">
          <div className="flex items-center justify-between gap-8">
            <div className="flex-1">
              <h1
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-600 to-purple-600 text-transparent bg-clip-text"
                style={{ maxWidth: '700px', lineHeight: 1.2, wordBreak: 'keep-all' }}
              >
                내 주변 최고의 뷰티샵을 한눈에!
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                합리적인 가격, 높은 평점, 다양한 리뷰로<br />
                당신만의 완벽한 뷰티샵을 찾아보세요
              </p>
              <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200">
                지금 바로 비교하기
              </button>
            </div>
            <div className="flex-1 flex justify-end">
              <div className="relative w-[400px] h-[300px]">
                <img
                  src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTAzMDZfMjQ4%2FMDAxNzQxMjMxNDEzMjA1.NMlLTOkPOOQ1bBLuJ1SoBpME8lOfwZ860k521zNXyMQg.zT73UtiPMXcmSG4kJ4U_5MsZBMIAJwSdR2YSuDkCQQMg.PNG%2F%25B9%25CC%25BF%25EB%25BD%25C7_%25C1%25B6%25B8%25ED_3.png&type=a340"
                  alt="뷰티 서비스 일러스트"
                  className="w-full h-full object-contain"
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-pink-200 rounded-full opacity-50 animate-pulse"></div>
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-purple-200 rounded-full opacity-50 animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 카테고리 네비게이션 (sticky) */}
      <nav ref={navRef} className="w-full bg-white/80 backdrop-blur-md border-b border-gray-100 py-2 px-2 flex flex-wrap justify-center gap-4 relative sticky top-[100px] z-30 transition-all">
        {menuWithSub.map((cat, idx) => (
          <div key={cat.name} className="relative flex flex-col items-center w-28">
            <button
              className="flex flex-col items-center w-full hover:text-pink-300 focus:outline-none transition-colors duration-200 hover:bg-white/10 rounded-xl py-1"
              onClick={() => setOpenMenu(openMenu === idx ? null : idx)}
              type="button"
            >
              <span className="text-2xl mb-1">{cat.icon}</span>
              <span className="text-xs font-semibold tracking-wide flex items-center gap-1">
                {cat.name}
                <span className="ml-1 text-[10px]">{openMenu === idx ? '▲' : '▼'}</span>
              </span>
            </button>
            {/* 아코디언 서브메뉴: 모든 메뉴에 적용, 디자인 개선 */}
            {openMenu === idx && (
              <div className="absolute top-16 left-1/2 -translate-x-1/2 bg-white border border-pink-100 rounded-2xl shadow-xl z-20 w-44 py-2 animate-fadeIn flex flex-col gap-1">
                {cat.submenu.map((sub, i) => (
                  <div
                    key={sub}
                    className="flex items-center gap-2 px-5 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600 rounded-xl cursor-pointer transition-colors duration-150"
                  >
                    <span className="text-pink-400 text-xs">●</span> {sub}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* 이달의 스타일 트렌드 섹션 */}
      <div className="w-full bg-white py-12">
        <section className="w-full flex justify-center my-8">
          <div className="w-full max-w-5xl rounded-3xl shadow-xl px-8 py-10 flex flex-col items-center relative overflow-hidden bg-transparent">
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-pink-100 rounded-full opacity-20 z-0"></div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-purple-100 rounded-full opacity-10 z-0"></div>
            <div className="relative z-10 w-full">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center bg-gradient-to-r from-pink-600 to-purple-600 text-transparent bg-clip-text">이달의 스타일 트렌드</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-4">
                {/* 트렌드 카드 1 */}
                <div className="bg-white/90 rounded-2xl shadow p-6 flex flex-col items-center">
                  <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=200&q=80" alt="트렌드1" className="w-24 h-24 rounded-xl mb-3 object-cover" />
                  <div className="font-bold text-gray-800 mb-1 text-center">시스루 뱅</div>
                  <div className="text-gray-600 text-sm text-center mb-2">가볍고 자연스러운 앞머리로 청순미 업!</div>
                  <div className="text-xs text-pink-400">#시스루뱅 #여름헤어 #트렌드</div>
                </div>
                {/* 트렌드 카드 2 */}
                <div className="bg-white/90 rounded-2xl shadow p-6 flex flex-col items-center">
                  <img src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=200&q=80" alt="트렌드2" className="w-24 h-24 rounded-xl mb-3 object-cover" />
                  <div className="font-bold text-gray-800 mb-1 text-center">애쉬 베이지 컬러</div>
                  <div className="text-gray-600 text-sm text-center mb-2">차분하면서도 세련된 컬러로 분위기 변신!</div>
                  <div className="text-xs text-pink-400">#애쉬베이지 #염색 #여름컬러</div>
                </div>
                {/* 트렌드 카드 3 */}
                <div className="bg-white/90 rounded-2xl shadow p-6 flex flex-col items-center">
                  <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=200&q=80" alt="트렌드3" className="w-24 h-24 rounded-xl mb-3 object-cover" />
                  <div className="font-bold text-gray-800 mb-1 text-center">글리터 네일</div>
                  <div className="text-gray-600 text-sm text-center mb-2">반짝이는 포인트로 손끝까지 화사하게!</div>
                  <div className="text-xs text-pink-400">#글리터네일 #여름네일 #반짝이</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* 내 주변 추천 매장 섹션 */}
      <div className="w-full bg-pink-50 py-12">
        <section className="w-full flex justify-center">
          <div className="w-full max-w-3xl rounded-3xl shadow-xl px-8 py-8 my-8 flex flex-col items-center relative overflow-hidden bg-transparent">
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-pink-100 rounded-full opacity-30 z-0"></div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-purple-100 rounded-full opacity-20 z-0"></div>
            <div className="relative z-10 flex flex-col items-center">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-pink-500 text-4xl mb-2 drop-shadow" />
              <h2 className="text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-pink-600 to-purple-600 text-transparent bg-clip-text">내 주변 추천 매장</h2>
              <p className="text-gray-600 mb-6 text-center max-w-md">위치 권한을 허용하면 내 주변 인기 뷰티샵을 추천해드려요!</p>
              <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-full font-semibold shadow hover:scale-105 transition mb-4">내 주변 추천 보기</button>
              <div className="w-full flex justify-center">
                <div className="bg-white/80 rounded-2xl shadow p-6 w-full max-w-md flex flex-col items-center">
                  <span className="text-gray-400 text-sm mb-2">위치 권한을 허용하면 추천 매장이 여기에 표시됩니다.</span>
                  <span className="text-gray-300 text-xs">(예시) 프리미엄 헤어살롱, 네일아트샵 등</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* 인기 미용실 슬라이더 (타임특가) */}
      <div className="w-full bg-white py-12">
        <section className="w-full flex justify-center my-8">
          <div className="w-full max-w-5xl px-8 py-10 rounded-3xl shadow-xl bg-transparent">
            <div className="mb-5 flex items-center gap-3">
              <FontAwesomeIcon icon={faBell} className="text-pink-500 animate-pulse text-2xl" style={{ fontSize: '24px' }} />
              <div className="flex items-center">
                <span className="text-2xl font-extrabold bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">타임특가</span>
                <div className="ml-3 flex items-center">
                  <span className="text-sm font-medium text-gray-600 bg-gradient-to-r from-pink-100 to-purple-100 px-3 py-1 rounded-full">
                    시간 놓치면 끝! 지금만 가능한 혜택
                  </span>
                </div>
              </div>
            </div>
            {slideCards.length === 0 ? (
              <div className="w-full text-center text-gray-400 py-20 text-lg">등록된 업체가 없습니다.</div>
            ) : (
              <div className="w-full flex items-center justify-center relative">
                {/* 왼쪽 버튼 */}
                <button
                  onClick={goPrev}
                  className="absolute left-0 z-20 w-10 h-10 bg-white rounded-xl shadow flex items-center justify-center hover:bg-gray-100 active:bg-gray-200 transition border border-gray-200"
                  style={{ top: '50%', transform: 'translateY(-50%)' }}
                  aria-label="이전"
                >
                  <span className="text-2xl">{'<'}</span>
                </button>
                {/* 카드 슬라이드 */}
                <div
                  className="w-full overflow-hidden rounded-xl"
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                >
                  <div
                    className={`flex ${isTransition ? 'transition-transform duration-500' : ''}`}
                    style={{ width: `${slideCards.length * 240}px`, transform: `translateX(-${slideIdx * 240}px)` }}
                  >
                    {slideCards.map((salon, idx) => (
                      <div
                        key={salon.name + idx}
                        className="group block bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 w-[240px] h-[360px] relative overflow-hidden mx-2"
                      >
                        <div className="pointer-events-none absolute inset-0 bg-[#e1e9fa] opacity-0 group-hover:opacity-20 transition-all duration-300 z-10" />
                        <div className="relative h-full">
                          {/* 하트 버튼 */}
                          <button
                            onClick={() => handleLike(salon.name + idx)}
                            className={`absolute top-2 right-2 z-20 group transition-transform duration-300 ${bounce[salon.name + idx] ? 'animate-bounce-heart' : ''}`}
                            aria-label="찜하기"
                            type="button"
                          >
                            <FontAwesomeIcon
                              icon={liked[salon.name + idx] ? faHeartSolid : faHeartRegular}
                              className={`text-xl transition-colors duration-200 ${liked[salon.name + idx] ? 'text-pink-500' : 'text-gray-300'}`}
                            />
                          </button>
                          {showToast[salon.name + idx] && (
                            <div className={`absolute left-1/2 -translate-x-1/2 top-8 z-30 px-4 py-2 rounded-2xl shadow-lg text-white text-sm font-semibold transition-all duration-500 bg-pink-500/90 animate-fade-in-out`}
                              style={{ pointerEvents: 'none' }}>
                                {toastMsg[salon.name + idx]}
                              </div>
                          )}
                          {/* 이미지만 Link */}
                          <Link href={salon.href} className="block w-full h-[240px] overflow-hidden">
                            <img
                              src={
                                idx % slideLen === 0 ? "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTAzMDZfMjQ4%2FMDAxNzQxMjMxNDEzMjA1.NMlLTOkPOOQ1bBLuJ1SoBpME8lOfwZ860k521zNXyMQg.zT73UtiPMXcmSG4kJ4U_5MsZBMIAJwSdR2YSuDkCQQMg.PNG%2F%25B9%25CC%25BF%25EB%25BD%25C7_%25C1%25B6%25B8%25ED_3.png&type=a340"
                                : idx % slideLen === 1 ? "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTA0MDhfNDUg%2FMDAxNzQ0MTIzMDIyMjI1.GkH_xYwR5E6D3EpxQ-cWl2pjb-IEOYQrOv3dB4E0RQQg.slRzhIYyZbJUD5xLGUS101AtECex03LXD0T-bcT45Iog.JPEG%2FDSC08772.jpg&type=a340"
                                : idx % slideLen === 2 ? "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTAyMTZfMTM2%2FMDAxNzM5NzEwNjcwNjI0.E2wdB1sfjz0CNvEOHMDR_dHL-CiJ4pKy2rLhaY1leLMg._CMjlTBkhwdeqRJlsLGn6Ctn-S_8Tl7gak5VrjQhwZYg.JPEG%2F900%25A3%25DF20250213%25A3%25DF181930.jpg&type=a340"
                                : idx % slideLen === 3 ? "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDEyMTFfMTYg%2FMDAxNzMzOTA3MzQ3OTI2.lV6R8qiR_UgsOTRRhTag6W2Bc5UgS11RBvf_58-wSoMg.7TDP02bP98aFd2JQzh0cGeUbMiN1ocuMu6ApUM2wqqYg.JPEG%2F900%25A3%25DF20241211%25A3%25DF105615%25A3%25A80%25A3%25A9.jpg&type=a340"
                                : "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTAzMjRfMjc4%2FMDAxNzQyNzgxMDg5OTEy.CX9CWh323KrjA97EdgmkKX3MyuDyN1KMzszFp_NZVv8g.O8Y_EoFJZ2ljMyU0bsMkkyw4iS-avY6oWBiGHi8RXHcg.JPEG%2FIMG_0633.jpg&type=a340"
                              }
                              alt={salon.name}
                              className="w-full h-full object-cover cursor-pointer transition-transform duration-200 hover:scale-105"
                            />
                          </Link>
                          {/* 텍스트 섹션 */}
                          <div className="p-4 text-center">
                            <div className="flex items-center justify-center gap-2 mb-2 -mt-[13px]">
                              <StarRating rating={salon.rating} />
                              {/* 리뷰 텍스트만 Link */}
                              <Link href={`/review?shop=${encodeURIComponent(salon.name)}`} className="text-sm text-gray-500 underline cursor-pointer hover:text-pink-500">
                                ({salon.reviewCount.toLocaleString()})
                              </Link>
                            </div>
                            <div className="font-semibold text-gray-700 text-lg -mt-[10px] group-hover:text-gray-800 transition-colors duration-300">
                              {salon.name}
                            </div>
                            <div className="text-sm text-gray-500 mb-2 group-hover:text-gray-600 transition-colors duration-300">
                              {salon.location}
                            </div>
                            <div className="text-sm text-pink-500 group-hover:text-pink-600 transition-colors duration-300">
                              {salon.desc}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* 오른쪽 버튼 */}
                <button
                  onClick={goNext}
                  className="absolute right-0 z-20 w-10 h-10 bg-white rounded-xl shadow flex items-center justify-center hover:bg-gray-100 active:bg-gray-200 transition border border-gray-200"
                  style={{ top: '50%', transform: 'translateY(-50%)' }}
                  aria-label="다음"
                >
                  <span className="text-2xl">{'>'}</span>
                </button>
              </div>
            )}
          </div>
        </section>
      </div>

      {/* 오늘의 추천 매장 프리미엄 배너 */}
      <section className="w-full flex justify-center my-8">
        <div className="flex items-center bg-gradient-to-r from-pink-100 via-purple-100 to-pink-50 rounded-3xl shadow-xl px-8 py-6 max-w-3xl w-full relative overflow-hidden">
          <div className="absolute top-4 left-4 bg-yellow-400 text-white text-xs font-bold px-3 py-1 rounded-full shadow">오늘의 추천 매장</div>
          <img
            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=400&q=80"
            alt="추천 매장"
            className="w-32 h-32 rounded-2xl object-cover border-4 border-white shadow-lg mr-8"
          />
          <div className="flex-1">
            <div className="text-2xl font-bold text-gray-800 mb-2">프리미엄 헤어살롱</div>
            <div className="text-gray-600 mb-3">첫 방문 고객 30% 할인! 트렌디한 스타일과 친절한 서비스</div>
            <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-2 rounded-full font-semibold shadow hover:scale-105 transition">혜택 받기</button>
          </div>
        </div>
      </section>

      {/* 고객 후기/리뷰 하이라이트 섹션 */}
      <div className="w-full bg-purple-50 py-12">
        <section className="w-full flex justify-center my-8">
          <div className="w-full max-w-5xl rounded-3xl shadow-xl px-8 py-10 flex flex-col items-center relative overflow-hidden bg-transparent">
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-pink-100 rounded-full opacity-20 z-0"></div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-purple-100 rounded-full opacity-10 z-0"></div>
            <div className="relative z-10 w-full">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center bg-gradient-to-r from-pink-600 to-purple-600 text-transparent bg-clip-text">고객 후기 하이라이트</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                {/* 예시 후기 카드 1 */}
                <div className="bg-white/90 rounded-2xl shadow p-6 flex flex-col items-center">
                  <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="user" className="w-16 h-16 rounded-full mb-3 border-2 border-pink-200 object-cover" />
                  <div className="font-semibold text-gray-700 mb-1">소연***</div>
                  <div className="mb-2"><StarRating rating={5} /></div>
                  <div className="text-gray-600 text-sm text-center mb-2">친절하고 원하는 스타일로 잘 해주셨어요! 다음에도 또 방문할게요 :)</div>
                  <div className="text-xs text-gray-400">2024.05.01</div>
                </div>
                {/* 예시 후기 카드 2 */}
                <div className="bg-white/90 rounded-2xl shadow p-6 flex flex-col items-center">
                  <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="user" className="w-16 h-16 rounded-full mb-3 border-2 border-purple-200 object-cover" />
                  <div className="font-semibold text-gray-700 mb-1">민수***</div>
                  <div className="mb-2"><StarRating rating={4} /></div>
                  <div className="text-gray-600 text-sm text-center mb-2">예약도 편하고 가격도 합리적이었어요. 추천합니다!</div>
                  <div className="text-xs text-gray-400">2024.04.28</div>
                </div>
                {/* 예시 후기 카드 3 */}
                <div className="bg-white/90 rounded-2xl shadow p-6 flex flex-col items-center">
                  <img src="https://randomuser.me/api/portraits/women/43.jpg" alt="user" className="w-16 h-16 rounded-full mb-3 border-2 border-pink-200 object-cover" />
                  <div className="font-semibold text-gray-700 mb-1">지현***</div>
                  <div className="mb-2"><StarRating rating={5} /></div>
                  <div className="text-gray-600 text-sm text-center mb-2">매장도 깔끔하고 디자이너님이 정말 꼼꼼하세요!</div>
                  <div className="text-xs text-gray-400">2024.04.20</div>
                </div>
              </div>
              <div className="flex justify-center">
                <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold shadow hover:scale-105 transition">더 많은 후기 보기</button>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* 최근 리뷰가 많은 업체 */}
      <div className="w-full bg-white py-12">
        <section className="w-full flex justify-center my-8">
          <div className="w-full max-w-5xl px-8 py-10 rounded-3xl shadow-xl bg-transparent">
            <div className="mb-5 flex items-center gap-3 text-xl font-bold text-gray-800">
              최근 리뷰가 많은 업체
            </div>
            {reviewSlideCards.length === 0 ? (
              <div className="w-full text-center text-gray-400 py-20 text-lg">등록된 업체가 없습니다.</div>
            ) : (
              <div className="w-full flex items-center justify-center relative">
                <div className="w-full overflow-hidden rounded-xl">
                  <div className="flex justify-center">
                    {/* 큰 카드 (랜덤) */}
                    <div className="group block bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 w-[480px] h-[360px] relative overflow-hidden mx-2">
                      <div className="pointer-events-none absolute inset-0 bg-[#e1e9fa] opacity-0 group-hover:opacity-20 transition-all duration-300 z-10" />
                      <div className="relative h-full">
                        {/* 하트 버튼 */}
                        <button
                          onClick={() => handleLike(reviewedSalons[bigCardIdx].name + bigCardIdx)}
                          className={`absolute top-2 right-2 z-20 group transition-transform duration-300 ${bounce[reviewedSalons[bigCardIdx].name + bigCardIdx] ? 'animate-bounce-heart' : ''}`}
                          aria-label="찜하기"
                          type="button"
                        >
                          <FontAwesomeIcon
                            icon={liked[reviewedSalons[bigCardIdx].name + bigCardIdx] ? faHeartSolid : faHeartRegular}
                            className={`text-xl transition-colors duration-200 ${liked[reviewedSalons[bigCardIdx].name + bigCardIdx] ? 'text-pink-500' : 'text-gray-300'}`}
                          />
                        </button>
                        {showToast[reviewedSalons[bigCardIdx].name + bigCardIdx] && (
                          <div className={`absolute left-1/2 -translate-x-1/2 top-8 z-30 px-4 py-2 rounded-2xl shadow-lg text-white text-sm font-semibold transition-all duration-500 bg-pink-500/90 animate-fade-in-out`}
                            style={{ pointerEvents: 'none' }}>
                              {toastMsg[reviewedSalons[bigCardIdx].name + bigCardIdx]}
                            </div>
                        )}
                        {/* 이미지만 Link */}
                        <Link href={reviewedSalons[bigCardIdx].href} className="block w-full h-[240px] overflow-hidden">
                          <img
                            src={
                              bigCardIdx % slideLen === 0 ? "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTAzMDZfMjQ4%2FMDAxNzQxMjMxNDEzMjA1.NMlLTOkPOOQ1bBLuJ1SoBpME8lOfwZ860k521zNXyMQg.zT73UtiPMXcmSG4kJ4U_5MsZBMIAJwSdR2YSuDkCQQMg.PNG%2F%25B9%25CC%25BF%25EB%25BD%25C7_%25C1%25B6%25B8%25ED_3.png&type=a340"
                            : bigCardIdx % slideLen === 1 ? "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTA0MDhfNDUg%2FMDAxNzQ0MTIzMDIyMjI1.GkH_xYwR5E6D3EpxQ-cWl2pjb-IEOYQrOv3dB4E0RQQg.slRzhIYyZbJUD5xLGUS101AtECex03LXD0T-bcT45Iog.JPEG%2FDSC08772.jpg&type=a340"
                            : bigCardIdx % slideLen === 2 ? "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTAyMTZfMTM2%2FMDAxNzM5NzEwNjcwNjI0.E2wdB1sfjz0CNvEOHMDR_dHL-CiJ4pKy2rLhaY1leLMg._CMjlTBkhwdeqRJlsLGn6Ctn-S_8Tl7gak5VrjQhwZYg.JPEG%2F900%25A3%25DF20250213%25A3%25DF181930.jpg&type=a340"
                            : bigCardIdx % slideLen === 3 ? "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDEyMTFfMTYg%2FMDAxNzMzOTA3MzQ3OTI2.lV6R8qiR_UgsOTRRhTag6W2Bc5UgS11RBvf_58-wSoMg.7TDP02bP98aFd2JQzh0cGeUbMiN1ocuMu6ApUM2wqqYg.JPEG%2F900%25A3%25DF20241211%25A3%25DF105615%25A3%25A80%25A3%25A9.jpg&type=a340"
                            : "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTAzMjRfMjc4%2FMDAxNzQyNzgxMDg5OTEy.CX9CWh323KrjA97EdgmkKX3MyuDyN1KMzszFp_NZVv8g.O8Y_EoFJZ2ljMyU0bsMkkyw4iS-avY6oWBiGHi8RXHcg.JPEG%2FIMG_0633.jpg&type=a340"
                            }
                            alt={reviewedSalons[bigCardIdx].name}
                            className="w-full h-full object-cover cursor-pointer transition-transform duration-200 hover:scale-105"
                          />
                        </Link>
                        <div className="p-4 text-center">
                          <div className="flex items-center justify-center gap-2 mb-2 -mt-[13px]">
                            <StarRating rating={reviewedSalons[bigCardIdx].rating} />
                            {/* 리뷰 텍스트만 Link */}
                            <Link href={`/review?shop=${encodeURIComponent(reviewedSalons[bigCardIdx].name)}`} className="text-sm text-gray-500 underline cursor-pointer hover:text-pink-500">
                              ({reviewedSalons[bigCardIdx].reviewCount.toLocaleString()})
                            </Link>
                          </div>
                          <div className="font-semibold text-gray-700 text-lg -mt-[10px] group-hover:text-gray-800 transition-colors duration-300">
                            {reviewedSalons[bigCardIdx].name}
                          </div>
                          <div className="text-sm text-gray-500 mb-2 group-hover:text-gray-600 transition-colors duration-300">
                            {reviewedSalons[bigCardIdx].location}
                          </div>
                          <div className="text-sm text-pink-500 group-hover:text-pink-600 transition-colors duration-300">
                            {reviewedSalons[bigCardIdx].desc}
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* 작은 카드 3개 */}
                    {reviewedSalons.filter((_, idx) => idx !== bigCardIdx).slice(0, 3).map((salon, idx) => (
                      <div
                        key={salon.name + idx}
                        className="group block bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 w-[240px] h-[360px] relative overflow-hidden mx-2"
                      >
                        <div className="pointer-events-none absolute inset-0 bg-[#e1e9fa] opacity-0 group-hover:opacity-20 transition-all duration-300 z-10" />
                        <div className="relative h-full">
                          {/* 하트 버튼 */}
                          <button
                            onClick={() => handleLike(salon.name + idx)}
                            className={`absolute top-2 right-2 z-20 group transition-transform duration-300 ${bounce[salon.name + idx] ? 'animate-bounce-heart' : ''}`}
                            aria-label="찜하기"
                            type="button"
                          >
                            <FontAwesomeIcon
                              icon={liked[salon.name + idx] ? faHeartSolid : faHeartRegular}
                              className={`text-xl transition-colors duration-200 ${liked[salon.name + idx] ? 'text-pink-500' : 'text-gray-300'}`}
                            />
                          </button>
                          {showToast[salon.name + idx] && (
                            <div className={`absolute left-1/2 -translate-x-1/2 top-8 z-30 px-4 py-2 rounded-2xl shadow-lg text-white text-sm font-semibold transition-all duration-500 bg-pink-500/90 animate-fade-in-out`}
                              style={{ pointerEvents: 'none' }}>
                                {toastMsg[salon.name + idx]}
                              </div>
                          )}
                          {/* 이미지만 Link */}
                          <Link href={salon.href} className="block w-full h-[240px] overflow-hidden">
                            <img
                              src={
                                idx % slideLen === 0 ? "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTAzMDZfMjQ4%2FMDAxNzQxMjMxNDEzMjA1.NMlLTOkPOOQ1bBLuJ1SoBpME8lOfwZ860k521zNXyMQg.zT73UtiPMXcmSG4kJ4U_5MsZBMIAJwSdR2YSuDkCQQMg.PNG%2F%25B9%25CC%25BF%25EB%25BD%25C7_%25C1%25B6%25B8%25ED_3.png&type=a340"
                                : idx % slideLen === 1 ? "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTA0MDhfNDUg%2FMDAxNzQ0MTIzMDIyMjI1.GkH_xYwR5E6D3EpxQ-cWl2pjb-IEOYQrOv3dB4E0RQQg.slRzhIYyZbJUD5xLGUS101AtECex03LXD0T-bcT45Iog.JPEG%2FDSC08772.jpg&type=a340"
                                : idx % slideLen === 2 ? "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTAyMTZfMTM2%2FMDAxNzM5NzEwNjcwNjI0.E2wdB1sfjz0CNvEOHMDR_dHL-CiJ4pKy2rLhaY1leLMg._CMjlTBkhwdeqRJlsLGn6Ctn-S_8Tl7gak5VrjQhwZYg.JPEG%2F900%25A3%25DF20250213%25A3%25DF181930.jpg&type=a340"
                                : "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTAzMjRfMjc4%2FMDAxNzQyNzgxMDg5OTEy.CX9CWh323KrjA97EdgmkKX3MyuDyN1KMzszFp_NZVv8g.O8Y_EoFJZ2ljMyU0bsMkkyw4iS-avY6oWBiGHi8RXHcg.JPEG%2FIMG_0633.jpg&type=a340"
                              }
                              alt={salon.name}
                              className="w-full h-full object-cover cursor-pointer transition-transform duration-200 hover:scale-105"
                            />
                          </Link>
                          <div className="p-4 text-center">
                            <div className="flex items-center justify-center gap-2 mb-2 -mt-[13px]">
                              <StarRating rating={salon.rating} />
                              {/* 리뷰 텍스트만 Link */}
                              <Link href={`/review?shop=${encodeURIComponent(salon.name)}`} className="text-sm text-gray-500 underline cursor-pointer hover:text-pink-500">
                                ({salon.reviewCount.toLocaleString()})
                              </Link>
                            </div>
                            <div className="font-semibold text-gray-700 text-lg -mt-[10px] group-hover:text-gray-800 transition-colors duration-300">
                              {salon.name}
                            </div>
                            <div className="text-sm text-gray-500 mb-2 group-hover:text-gray-600 transition-colors duration-300">
                              {salon.location}
                            </div>
                            <div className="text-sm text-pink-500 group-hover:text-pink-600 transition-colors duration-300">
                              {salon.desc}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>

      {/* 지역별 인기 매장 지도 섹션 */}
      <div className="w-full bg-gray-50 py-12">
        <section className="w-full flex justify-center my-12">
          <div className="w-full max-w-5xl rounded-3xl shadow-xl px-8 py-10 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden bg-transparent">
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-pink-100 rounded-full opacity-20 z-0"></div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-purple-100 rounded-full opacity-10 z-0"></div>
            <div className="relative z-10 flex-1 flex flex-col items-center md:items-start">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-purple-600 text-transparent bg-clip-text">지역별 인기 매장 지도</h2>
              <p className="text-gray-600 mb-6 text-center md:text-left max-w-md">내가 사는 지역, 자주 찾는 동네의 인기 매장을 한눈에 확인해보세요!</p>
              <ul className="w-full max-w-xs space-y-4">
                <li className="bg-white/90 rounded-xl shadow p-4 flex flex-col">
                  <span className="font-semibold text-gray-800">라뷰헤어 강남점</span>
                  <span className="text-sm text-gray-500 mb-1">강남구</span>
                  <span className="text-yellow-400 font-bold">★ 4.9</span>
                </li>
                <li className="bg-white/90 rounded-xl shadow p-4 flex flex-col">
                  <span className="font-semibold text-gray-800">뷰티살롱 홍대</span>
                  <span className="text-sm text-gray-500 mb-1">마포구</span>
                  <span className="text-yellow-400 font-bold">★ 4.8</span>
                </li>
                <li className="bg-white/90 rounded-xl shadow p-4 flex flex-col">
                  <span className="font-semibold text-gray-800">프리미엄 네일 신촌</span>
                  <span className="text-sm text-gray-500 mb-1">서대문구</span>
                  <span className="text-yellow-400 font-bold">★ 4.7</span>
                </li>
              </ul>
            </div>
            <div className="relative z-10 flex-1 flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1506744038136-472988babdf9?auto=format&fit=crop&w=500&q=80"
                alt="지도 예시"
                className="w-full max-w-md h-72 object-cover rounded-2xl shadow-lg border-4 border-white"
              />
              {/* 지도 API 연동 시 이 부분에 실제 지도 삽입 */}
            </div>
          </div>
        </section>
      </div>

      {/* 전문가 칼럼/뷰티 팁 섹션 */}
      <div className="w-full bg-pink-50 py-12">
        <section className="w-full flex justify-center my-12">
          <div className="w-full max-w-5xl rounded-3xl shadow-xl px-8 py-10 flex flex-col items-center relative overflow-hidden bg-transparent">
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-pink-100 rounded-full opacity-20 z-0"></div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-purple-100 rounded-full opacity-10 z-0"></div>
            <div className="relative z-10 w-full">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center bg-gradient-to-r from-pink-600 to-purple-600 text-transparent bg-clip-text">전문가 칼럼 & 뷰티 팁</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                {/* 칼럼 카드 1 */}
                <div className="bg-white/90 rounded-2xl shadow p-6 flex flex-col items-center">
                  <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=facearea&w=200&q=80" alt="expert" className="w-20 h-20 rounded-full mb-3 border-2 border-pink-200 object-cover" />
                  <div className="font-bold text-gray-800 mb-1 text-center">여름철 헤어 관리 꿀팁</div>
                  <div className="text-gray-600 text-sm text-center mb-2">습기 많은 날씨에도 스타일을 유지하는 전문가의 노하우!</div>
                  <div className="text-xs text-gray-400">by 김헤어 전문가</div>
                </div>
                {/* 칼럼 카드 2 */}
                <div className="bg-white/90 rounded-2xl shadow p-6 flex flex-col items-center">
                  <img src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=200&q=80" alt="expert" className="w-20 h-20 rounded-full mb-3 border-2 border-purple-200 object-cover" />
                  <div className="font-bold text-gray-800 mb-1 text-center">손상 없는 염색 비법</div>
                  <div className="text-gray-600 text-sm text-center mb-2">컬러 유지와 모발 건강을 동시에 잡는 방법!</div>
                  <div className="text-xs text-gray-400">by 이컬러 전문가</div>
                </div>
                {/* 칼럼 카드 3 */}
                <div className="bg-white/90 rounded-2xl shadow p-6 flex flex-col items-center">
                  <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=200&q=80" alt="expert" className="w-20 h-20 rounded-full mb-3 border-2 border-pink-200 object-cover" />
                  <div className="font-bold text-gray-800 mb-1 text-center">피부관리, 이것만은 꼭!</div>
                  <div className="text-gray-600 text-sm text-center mb-2">기초부터 탄탄하게, 전문가가 알려주는 피부관리 팁</div>
                  <div className="text-xs text-gray-400">by 박피부 전문가</div>
                </div>
              </div>
              <div className="flex justify-center">
                <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold shadow hover:scale-105 transition">더 많은 칼럼 보기</button>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* SNS 연동(인스타그램, 블로그 후기 등) 섹션 */}
      <div className="w-full bg-white py-12">
        <section className="w-full flex justify-center my-12">
          <div className="w-full max-w-5xl rounded-3xl shadow-xl px-8 py-10 flex flex-col items-center relative overflow-hidden bg-transparent">
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-pink-100 rounded-full opacity-20 z-0"></div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-purple-100 rounded-full opacity-10 z-0"></div>
            <div className="relative z-10 w-full">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center bg-gradient-to-r from-pink-600 to-purple-600 text-transparent bg-clip-text">SNS 후기 모아보기</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                {/* 인스타그램 후기 카드 */}
                <div className="bg-white/90 rounded-2xl shadow p-6 flex flex-col items-center">
                  <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="instagram" className="w-8 h-8 mb-2" />
                  <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=200&q=80" alt="insta review" className="w-20 h-20 rounded-xl mb-3 object-cover" />
                  <div className="text-gray-600 text-sm text-center mb-2">#여름염색 #트렌드컬러<br/>컬러 너무 예쁘게 나와서 만족!</div>
                  <div className="text-xs text-gray-400">@beauty_insta</div>
                </div>
                {/* 블로그 후기 카드 */}
                <div className="bg-white/90 rounded-2xl shadow p-6 flex flex-col items-center">
                  <img src="https://cdn-icons-png.flaticon.com/512/5968/5968863.png" alt="blog" className="w-8 h-8 mb-2" />
                  <img src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=facearea&w=200&q=80" alt="blog review" className="w-20 h-20 rounded-xl mb-3 object-cover" />
                  <div className="text-gray-600 text-sm text-center mb-2">친구 추천으로 방문했는데<br/>서비스도 좋고 분위기도 굿!</div>
                  <div className="text-xs text-gray-400">네이버 블로거 뷰티리뷰</div>
                </div>
                {/* 인스타그램 후기 카드 2 */}
                <div className="bg-white/90 rounded-2xl shadow p-6 flex flex-col items-center">
                  <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="instagram" className="w-8 h-8 mb-2" />
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=facearea&w=200&q=80" alt="insta review" className="w-20 h-20 rounded-xl mb-3 object-cover" />
                  <div className="text-gray-600 text-sm text-center mb-2">#네일아트 #여름네일<br/>디자인이 너무 예뻐서 자주 가요!</div>
                  <div className="text-xs text-gray-400">@nail_trendy</div>
                </div>
              </div>
              <div className="flex justify-center">
                <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold shadow hover:scale-105 transition">더 많은 SNS 후기 보기</button>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* 푸터 */}
      <footer className="w-full bg-gray-100 py-6 mt-auto text-center text-xs text-gray-500">
        <div>© 2024 라뷰 | 미용 가격 비교 서비스</div>
        <div className="mt-1">문의: help@labview.kr</div>
      </footer>

      {/* SVG 필터 추가 - 별을 둥글게 만들기 위한 필터 */}
      <svg width="0" height="0" className="hidden">
        <defs>
          <filter id="round">
            <feGaussianBlur in="SourceGraphic" stdDeviation="0.5" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="round" />
            <feBlend in="SourceGraphic" in2="round" />
          </filter>
        </defs>
      </svg>

      <style jsx global>{`
      @keyframes bounce-heart {
        0% { transform: translateY(0) scale(1); }
        30% { transform: translateY(-12px) scale(1.2); }
        60% { transform: translateY(0) scale(1); }
        100% { transform: translateY(0) scale(1); }
      }
      .animate-bounce-heart {
        animation: bounce-heart 0.5s;
      }
      @keyframes fade-in-out {
        0% { opacity: 0; transform: translateY(-10px); }
        10% { opacity: 1; transform: translateY(0); }
        90% { opacity: 1; transform: translateY(0); }
        100% { opacity: 0; transform: translateY(-10px); }
      }
      .animate-fade-in-out {
        animation: fade-in-out 2s;
      }
      `}</style>
    </div>
  )
}
