"use client";
import Link from 'next/link'
import { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faTrainSubway, faMapMarkerAlt, faClock } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faScissors, faPalette, faSpa, faBrush, faStar, faGem, faUser, faHeart, faSearch, faBars, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import dynamic from 'next/dynamic';
import React from 'react';
import HeroSection from './components/HeroSection';
import StarRating from './components/StarRating';
import ReviewAvatar from './components/ReviewAvatar';
import StickyHeader from './components/StickyHeader';
import AppDownloadSection from './components/AppDownloadSection';
import TimeSpecialSection from './components/TimeSpecialSection';
import { timeSpecialReviews } from './data/reviews';

// FontAwesome 라이브러리에 아이콘 추가
library.add(faBell, faTrainSubway, faHeartSolid, faHeartRegular, faMapMarkerAlt, faScissors, faPalette, faSpa, faBrush, faStar, faGem, faUser, faHeart, faSearch, faBars, faChevronLeft, faChevronRight, faClock);

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

export default function Home() {
  const [openMenu, setOpenMenu] = useState<number | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const [randomSalonIndex, setRandomSalonIndex] = useState(0);
  const [bigCardIdx, setBigCardIdx] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [clickedCard, setClickedCard] = useState(-1);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState<any>(null);
  const [currentReviewPage, setCurrentReviewPage] = useState(1);
  const [showDropdown, setShowDropdown] = useState(false);
  const reviewsPerPage = 5;
  const totalPages = modalData?.reviews ? Math.ceil(modalData.reviews.length / reviewsPerPage) : 1;

  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [dropdownPosition, setDropdownPosition] = useState({ x: 0, y: 0 });

  // 슬라이더 상태
  const visibleCount = 5;
  const slideLen = popularSalons.length;
  const [slideIdx, setSlideIdx] = useState(popularSalons.length);
  const [reviewSlideIdx, setReviewSlideIdx] = useState(slideLen); // 중간에서 시작
  const [isTransition, setIsTransition] = useState(true);
  const [isReviewPaused, setIsReviewPaused] = useState(false);

  const [liked, setLiked] = useState<{ [key: string]: boolean }>({});
  const [bounce, setBounce] = useState<{ [key: string]: boolean }>({});
  const [showToast, setShowToast] = useState<{ [key: string]: boolean }>({});
  const [toastMsg, setToastMsg] = useState<{ [key: string]: string }>({});

  // 슬라이드 카드 배열 생성
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

  // 카드 클릭 핸들러
  const handleCardClick = (data: any) => {
    const name = String(data.name);
    console.log('Card clicked:', data); // 디버깅용 로그
    console.log('Card name:', name); // 카드 이름 확인
    console.log('Available reviews:', Object.keys(timeSpecialReviews)); // 사용 가능한 리뷰 키 확인
    console.log('Found reviews:', timeSpecialReviews[name]); // 찾은 리뷰 확인
    
    const modalDataToSet = {
      ...data,
      reviews: timeSpecialReviews[name] || []
    };
    console.log('Modal data to set:', modalDataToSet); // 모달 데이터 확인
    
    setModalData(modalDataToSet);
    setModalOpen(true);
  };

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

  // 자동 슬라이드 효과
  useEffect(() => {
    if (isPaused) return; // 마우스 호버 시 일시 정지

    const interval = setInterval(() => {
      const container = document.getElementById('slide-container');
      if (container) {
        if (currentSlide < 6) {
          container.scrollLeft += 300;
          setCurrentSlide(prev => prev + 1);
        } else {
          container.scrollLeft = 0;
          setCurrentSlide(0);
        }
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [currentSlide, isPaused]);

  // 무한 슬라이드를 위한 인덱스 조정
  useEffect(() => {
    if (slideIdx >= popularSalons.length * 2) {
      setTimeout(() => {
        setSlideIdx(popularSalons.length);
      }, 500);
    }
    if (slideIdx <= 0) {
      setTimeout(() => {
        setSlideIdx(popularSalons.length);
      }, 500);
    }
  }, [slideIdx, popularSalons.length]);

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
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100); // 100px 이상 스크롤 시 헤더 표시
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // 모달 디버깅용 useEffect
  useEffect(() => {
    if (modalOpen && modalData) {
      console.log('Modal opened with data:', modalData);
      console.log('Modal reviews:', modalData.reviews);
    }
  }, [modalOpen, modalData]);

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

  // 리뷰 페이지네이션 처리 함수
  const getCurrentPageReviews = (reviews: any[]) => {
    const startIndex = (currentReviewPage - 1) * reviewsPerPage;
    return reviews.slice(startIndex, startIndex + reviewsPerPage);
  };

  const handlePrevPage = () => {
    setCurrentReviewPage(prev => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentReviewPage(prev => Math.min(prev + 1, totalPages));
  };

  // 모달이 열릴 때마다 페이지를 1로 리셋
  useEffect(() => {
    if (modalOpen) {
      setCurrentReviewPage(1);
    }
  }, [modalOpen]);

  // 드롭다운 위치 계산 및 표시 함수
  const handleCategoryClick = (index: number, event: React.MouseEvent) => {
    event.stopPropagation(); // 이벤트 버블링 방지
    const target = event.currentTarget;
    const rect = target.getBoundingClientRect();
    
    // 현재 선택된 카테고리와 같은 카테고리를 클릭한 경우 드롭다운을 닫음
    if (selectedCategory === index) {
      setSelectedCategory(null);
    } else {
      setDropdownPosition({
        x: rect.left,
        y: rect.bottom
      });
      setSelectedCategory(index);
    }
  };

  // 외부 클릭 감지
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectedCategory !== null) {
        setSelectedCategory(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [selectedCategory]);

  // 드롭다운 컴포넌트
  const SortDropdown = ({ x, y }: { x: number; y: number }) => {
    return (
      <div 
        className="fixed bg-white rounded-lg shadow-lg"
        style={{
          left: x,
          top: y,
          zIndex: 9999,
          minWidth: '120px',
          border: '1px solid rgba(0,0,0,0.1)',
          backgroundColor: 'white'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="py-1">
          <button className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-left">
            거리순
          </button>
          <button className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-left">
            리뷰순
          </button>
          <button className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-left">
            가격순
          </button>
        </div>
      </div>
    );
  };

  return (
    <main className="min-h-screen bg-white">
      <StickyHeader isScrolled={isScrolled} />
      <HeroSection showDropdown={showDropdown} setShowDropdown={setShowDropdown} />
      
      {/* 비디오 섹션 */}
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
            <button className="bg-white text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors">
              지금 시작하기
            </button>
          </div>
        </div>
      </section>

      {/* 타임스페셜 섹션 */}
      <TimeSpecialSection
        randomSalonIndex={randomSalonIndex}
        bigCardIdx={bigCardIdx}
        setBigCardIdx={setBigCardIdx}
        clickedCard={clickedCard}
        setClickedCard={setClickedCard}
      />

      {/* 회원가입 섹션 */}
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
