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
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faScissors, faPalette, faSpa, faBrush, faStar, faGem, faUser, faHeart, faSearch } from '@fortawesome/free-solid-svg-icons';
import dynamic from 'next/dynamic';

// FontAwesome 라이브러리에 아이콘 추가
library.add(faBell, faStarSolid, faStarRegular, faTrainSubway, faHeartSolid, faHeartRegular, faMapMarkerAlt, faUserCircle, faScissors, faPalette, faSpa, faBrush, faStar, faGem, faUser, faHeart, faSearch);

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
  { name: '커뮤니티', href: '/community', icon: '💬' }
];

const popularSalons = [
  { 
    name: '스타일리스트 A', 
    location: '강남', 
    desc: '합리적 가격, 높은 평점', 
    href: '/haircut', 
    rating: 4.9, 
    reviewCount: 2341,
    image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTAzMDZfMjQ4%2FMDAxNzQxMjMxNDEzMjA1.NMlLTOkPOOQ1bBLuJ1SoBpME8lOfwZ860k521zNXyMQg.zT73UtiPMXcmSG4kJ4U_5MsZBMIAJwSdR2YSuDkCQQMg.PNG%2F%25B9%25CC%25BF%25EB%25BD%25C7_%25C1%25B6%25B8%25ED_3.png&type=a340"
  },
  { 
    name: '스타일리스트 B', 
    location: '홍대', 
    desc: '트렌디한 스타일', 
    href: '/coloring', 
    rating: 4.7, 
    reviewCount: 1876,
    image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTA0MDhfNDUg%2FMDAxNzQ0MTIzMDIyMjI1.GkH_xYwR5E6D3EpxQ-cWl2pjb-IEOYQrOv3dB4E0RQQg.slRzhIYyZbJUD5xLGUS101AtECex03LXD0T-bcT45Iog.JPEG%2FDSC08772.jpg&type=a340"
  },
  { 
    name: '스타일리스트 C', 
    location: '신촌', 
    desc: '친절한 서비스', 
    href: '/perm', 
    rating: 4.8, 
    reviewCount: 1543, 
    subway: { line: 2, station: '신촌역', exit: 2, walk: 6 },
    image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTAyMTZfMTM2%2FMDAxNzM5NzEwNjcwNjI0.E2wdB1sfjz0CNvEOHMDR_dHL-CiJ4pKy2rLhaY1leLMg._CMjlTBkhwdeqRJlsLGn6Ctn-S_8Tl7gak5VrjQhwZYg.JPEG%2F900%25A3%25DF20250213%25A3%25DF181930.jpg&type=a340"
  },
  { 
    name: '스타일리스트 D', 
    location: '건대', 
    desc: '예약 필수 인기샵', 
    href: '/haircut', 
    rating: 4.6, 
    reviewCount: 987, 
    subway: { line: 2, station: '건대입구역', exit: 5, walk: 3 },
    image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDEyMTFfMTYg%2FMDAxNzMzOTA3MzQ3OTI2.lV6R8qiR_UgsOTRRhTag6W2Bc5UgS11RBvf_58-wSoMg.7TDP02bP98aFd2JQzh0cGeUbMiN1ocuMu6ApUM2wqqYg.JPEG%2F900%25A3%25DF20241211%25A3%25DF105615%25A3%25A80%25A3%25A9.jpg&type=a340"
  },
  { 
    name: '스타일리스트 E', 
    location: '잠실', 
    desc: '합리적 가격, 최신 트렌드', 
    href: '/coloring', 
    rating: 4.8, 
    reviewCount: 765,
    image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTAzMjRfMjc4%2FMDAxNzQyNzgxMDg5OTEy.CX9CWh323KrjA97EdgmkKX3MyuDyN1KMzszFp_NZVv8g.O8Y_EoFJZ2ljMyU0bsMkkyw4iS-avY6oWBiGHi8RXHcg.JPEG%2FIMG_0633.jpg&type=a340"
  }
];

const reviewedSalons = [
  { name: '뷰티살롱 A', location: '강남', desc: '리뷰 1,234개', href: '/haircut', rating: 4.8, reviewCount: 1234 },
  { name: '헤어스튜디오 B', location: '홍대', desc: '리뷰 987개', href: '/coloring', rating: 4.5, reviewCount: 987 },
  { name: '미용실 C', location: '신촌', desc: '리뷰 856개', href: '/perm', rating: 4.9, reviewCount: 856, subway: { line: 2, station: '신촌역', exit: 2, walk: 6 } },
  { name: '헤어살롱 D', location: '건대', desc: '리뷰 743개', href: '/haircut', rating: 4.7, reviewCount: 743, subway: { line: 2, station: '건대입구역', exit: 5, walk: 3 } },
  { name: '뷰티샵 E', location: '잠실', desc: '리뷰 632개', href: '/coloring', rating: 4.6, reviewCount: 632 },
];

const menuWithSub = [
  { name: '커트', href: '/haircut', icon: faScissors, submenu: ['남성 커트', '여성 커트', '학생 커트'] },
  { name: '염색', href: '/coloring', icon: faPalette, submenu: ['전체 염색', '부분 염색', '탈색'] },
  { name: '펌', href: '/perm', icon: faSpa, submenu: ['디지털펌', '셋팅펌', '볼륨펌'] },
  { name: '클리닉', href: '#', icon: faGem, submenu: ['모발 클리닉', '두피 클리닉'] },
  { name: '메이크업', href: '#', icon: faBrush, submenu: ['데일리', '웨딩', '특수분장'] },
  { name: '왁싱', href: '#', icon: faStar, submenu: ['브라질리언', '얼굴', '바디'] },
  { name: '네일', href: '#', icon: faHeart, submenu: ['젤 네일', '케어', '아트'] },
  { name: '속눈썹', href: '#', icon: faUser, submenu: ['연장', '펌', '케어'] },
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

// 후기 카드 프로필 렌더링 함수
function ReviewAvatar({ image, name, color }: { image?: string, name?: string, color?: string }) {
  return (
    <div className={`w-24 h-24 rounded-full mb-4 border-4 object-cover shadow-lg flex items-center justify-center ${color || 'bg-pink-50'} text-3xl font-bold text-pink-400`}>
      {image ? (
        <img src={image} alt={name || 'user'} className="w-full h-full object-cover rounded-full" />
      ) : name ? (
        <span>{name[0]}</span>
      ) : (
        <FontAwesomeIcon icon={faUserCircle} className="text-pink-300 w-16 h-16" />
      )}
    </div>
  );
}

export default function Home() {
  const [openMenu, setOpenMenu] = useState<number | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const [randomSalonIndex, setRandomSalonIndex] = useState(0); // 랜덤 선택된 카드 인덱스
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

  useEffect(() => {
    const onScroll = () => {
      // This effect is now empty as the BooksyHeader component has been removed
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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
    <div style={{ minHeight: '100vh', background: '#F7FAFC', display: 'flex', flexDirection: 'column' }}>
      {/* 동영상 히어로 섹션 - 단독 */}
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
        <div style={{ position: 'absolute', top: '40px', left: '40px', zIndex: 10, background: 'transparent' }}>
          <div style={{ display: 'flex', flexDirection: 'column', background: 'transparent' }}>
            <div 
              className="premium-logo"
              style={{ 
                color: 'white', 
                fontSize: '36px', 
                fontWeight: 'bold', 
                letterSpacing: '0.15em',
                fontFamily: 'Pretendard, Arial, sans-serif',
                textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                animation: 'premiumFadeIn 2s ease-out, premiumGlow 3s ease-in-out infinite alternate',
                background: 'transparent !important'
              }}
            >
              스타일로그
            </div>
            <div 
              className="english-text"
              style={{ 
                color: 'white', 
                fontSize: '18px', 
                fontWeight: 'normal', 
                letterSpacing: '0.1em',
                marginTop: '8px',
                opacity: '0.9',
                animation: 'premiumFadeIn 2.5s ease-out',
                background: 'transparent !important'
              }}
            >
              Style Logs
            </div>
          </div>
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
            marginBottom: '18px'
          }}>
            예뻐지기 전에, 먼저 비교하세요
          </div>
          <div style={{
            color: 'white',
            fontSize: '20px',
            fontWeight: 'normal',
            letterSpacing: '0.03em',
            textAlign: 'center',
            marginBottom: '28px'
          }}>
            누구보다 나에게 어울리는 곳을 찾는 방법
          </div>
          <div style={{ width: '100%' }}>
            <input
              type="text"
              placeholder="검색어를 입력하세요"
              className="w-full h-[50px] rounded-lg px-5 text-lg bg-white/90 text-gray-900 shadow focus:outline-none focus:ring-2 focus:ring-gray-400"
              style={{ boxSizing: 'border-box' }}
            />
          </div>
        </div>
        {/* 카테고리 메뉴 - 히어로 섹션 하단 구분선 위에 단독 배치 */}
        <div style={{ position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)', zIndex: 10, width: '100%' }}>
          <div className="flex justify-center gap-8" style={{ flexWrap: 'nowrap', background: 'transparent' }}>
            <span className="category-item text-white text-xl font-bold drop-shadow cursor-pointer" style={{ background: 'transparent !important' }}>헤어</span>
            <span className="category-item text-white text-xl font-bold drop-shadow cursor-pointer" style={{ background: 'transparent !important' }}>네일아트</span>
            <span className="category-item text-white text-xl font-bold drop-shadow cursor-pointer" style={{ background: 'transparent !important' }}>메이크업</span>
            <span className="category-item text-white text-xl font-bold drop-shadow cursor-pointer" style={{ background: 'transparent !important' }}>피부관리</span>
            <span className="category-item text-white text-xl font-bold drop-shadow cursor-pointer" style={{ background: 'transparent !important' }}>속눈썹</span>
            <span className="category-item text-white text-xl font-bold drop-shadow cursor-pointer" style={{ background: 'transparent !important' }}>왁싱</span>
            <span className="category-item text-white text-xl font-bold drop-shadow cursor-pointer" style={{ background: 'transparent !important' }}>반영구</span>
            <span className="category-item text-white text-xl font-bold drop-shadow cursor-pointer" style={{ background: 'transparent !important' }}>두피케어</span>
            <span className="category-item text-white text-xl font-bold drop-shadow cursor-pointer" style={{ background: 'transparent !important' }}>마사지</span>
            <span className="category-item text-white text-xl font-bold drop-shadow cursor-pointer" style={{ background: 'transparent !important' }}>타투</span>
          </div>
        </div>
        {/* 상단 우측 로그인/회원가입 */}
        <div style={{
          position: 'absolute',
          top: '36px',
          right: '48px',
          zIndex: 20,
        }}>
          <span style={{
            color: 'rgba(255,255,255,0.92)',
            fontSize: '15px',
            fontWeight: 'normal',
            letterSpacing: '0.03em',
            cursor: 'pointer',
            userSelect: 'none',
            textShadow: '0 1px 4px rgba(0,0,0,0.45)'
          }}>
            로그인 · 회원가입
          </span>
        </div>
      </section>
    </div>
  )
}
