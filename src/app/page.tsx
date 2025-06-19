"use client";
import Link from 'next/link'
import { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import { faTrainSubway, faMapMarkerAlt, faClock } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faScissors, faPalette, faSpa, faBrush, faStar, faGem, faUser, faHeart, faSearch, faBars, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import dynamic from 'next/dynamic';
import React from 'react';

// FontAwesome 라이브러리에 아이콘 추가
library.add(faBell, faStarSolid, faStarRegular, faTrainSubway, faHeartSolid, faHeartRegular, faMapMarkerAlt, faUserCircle, faScissors, faPalette, faSpa, faBrush, faStar, faGem, faUser, faHeart, faSearch, faBars, faChevronLeft, faChevronRight, faClock);

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
const StarRating = ({ rating, customSize }: { rating: number, customSize?: number }) => {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <FontAwesomeIcon
          key={star}
          icon={star <= rating ? faStarSolid : faStarRegular}
          className={star <= rating ? "text-yellow-400" : "text-gray-300"}
          style={{ fontSize: customSize || '14px', filter: 'url(#round)' }}
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

// 더미 리뷰 데이터 (닉네임 포함)
const timeSpecialReviews: Record<string, { nickname: string; text: string }[]> = {
  'LA 남성 그루밍 이발소': [
    { nickname: 'user01', text: '정말 친절하고 실력도 좋아요! 특히 디자이너님의 꼼꼼한 상담과 세심한 스타일링 덕분에 원하는 스타일로 잘 나왔습니다. 다음에도 꼭 방문할 예정이에요. 주차도 편리하고 매장 분위기도 너무 좋았어요.' },
    { nickname: 'user02', text: '가격이 합리적이에요. 기술력도 좋고 특히 매장이 청결해서 좋았습니다.' },
    { nickname: 'user03', text: '분위기가 깔끔해서 만족했습니다. 디자이너분들이 모두 친절하시고 전문적인 조언을 해주셔서 더욱 만족스러웠어요. 커트 후 스타일링 방법도 자세히 설명해주셔서 집에서도 쉽게 스타일링할 수 있었습니다.' },
    { nickname: 'user04', text: '예약이 쉬워서 편했어요.' }
  ],
  'flawless 팀색 및 헤어 시스템': [
    { nickname: 'hairqueen', text: '염색 결과가 너무 마음에 들어요.' },
    { nickname: 'minji', text: '상담이 꼼꼼해서 신뢰가 갑니다.' },
    { nickname: 'james', text: '재방문 의사 100%!' },
    { nickname: 'sally', text: '친구에게 추천했어요.' }
  ],
  '크리스피 컷 1': [
    { nickname: 'cutman', text: '커트가 세련되고 빠릅니다.' },
    { nickname: 'hannah', text: '직원분들이 모두 친절해요.' },
    { nickname: 'lee', text: '대기시간이 짧아서 좋아요.' },
    { nickname: 'user1', text: '인테리어가 너무 예쁘고 깔끔해요. 특히 조명이 예뻐서 사진 찍기도 좋았어요.' },
    { nickname: 'user2', text: '디자이너님이 친절하게 상담해주시고 꼼꼼하게 스타일링 해주셨어요.' },
    { nickname: 'user3', text: '가격도 합리적이고 시술 결과도 만족스러웠습니다. 다음에 또 방문할 예정이에요!' },
    { nickname: 'user4', text: '예약시스템이 잘 되어있어서 편리했어요. 시간 약속도 잘 지켜주셔서 좋았습니다.' },
    { nickname: 'user5', text: '헤어 디자이너분들의 실력이 모두 좋으세요. 특히 커트 라인이 예쁘게 나와서 만족했어요.' }
  ],
  '제이 @ The Parlour': [
    { nickname: 'soyeon', text: '인테리어가 고급스럽고 쾌적해요.' },
    { nickname: 'jparlour', text: '헤어스타일링이 만족스러워요.' },
    { nickname: 'driver', text: '주차가 편리해서 좋아요.' }
  ],
  '트라이브': [
    { nickname: 'tribeuser', text: '예약 시스템이 편리해요.' },
    { nickname: 'designer', text: '헤어 디자이너가 실력파입니다.' },
    { nickname: 'happy', text: '가격 대비 서비스가 훌륭해요.' }
  ],
  '프리미엄 헤어샵': [
    { nickname: 'trend', text: '최신 트렌드 스타일을 잘 알아요.' },
    { nickname: 'kind', text: '상담이 친절해서 좋았어요.' },
    { nickname: 'wide', text: '매장이 넓고 쾌적합니다.' }
  ],
  '스타일리스트 스튜디오': [
    { nickname: 'bright', text: '분위기가 밝고 활기차요.' },
    { nickname: 'colorcut', text: '커트와 염색 모두 만족!' },
    { nickname: 'friend', text: '친구와 함께 방문했어요.' }
  ]
};

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
  const [currentReviewPage, setCurrentReviewPage] = useState(1); // 현재 리뷰 페이지
  const reviewsPerPage = 5; // 페이지당 리뷰 수

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

  const totalPages = modalData?.reviews ? Math.ceil(modalData.reviews.length / reviewsPerPage) : 0;

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

  return (
    <div style={{ minHeight: '100vh', background: '#F7FAFC', display: 'flex', flexDirection: 'column' }}>
      {/* Sticky Header */}
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
                Style Logs
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
              <button className="text-white text-sm hover:text-gray-300 transition-colors duration-200 font-medium">
                로그인
              </button>
            </div>

            {/* 모바일 메뉴 버튼 */}
            <div className="md:hidden" style={{ height: '70px', display: 'flex', alignItems: 'center' }}>
              <button className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors duration-200">
                <FontAwesomeIcon icon={faBars} className="text-xl" />
              </button>
            </div>
          </div>
        </div>
      </div>

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
                background: 'transparent !important',
                marginBottom: '2px'
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
                marginTop: 6,
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
            marginBottom: '2px'
          }}>
            가격부터 서비스까지, 모든 것을 비교하세요
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
        <div style={{ position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)', zIndex: 10, width: '100%' }}>
          <div className="flex justify-center gap-8" style={{ flexWrap: 'nowrap', background: 'transparent' }}>
            <span className="category-item text-white font-bold drop-shadow cursor-pointer" style={{ background: 'transparent !important', fontSize: '18px' }}>헤어</span>
            <span className="category-item text-white font-bold drop-shadow cursor-pointer" style={{ background: 'transparent !important', fontSize: '18px' }}>네일아트</span>
            <span className="category-item text-white font-bold drop-shadow cursor-pointer" style={{ background: 'transparent !important', fontSize: '18px' }}>메이크업</span>
            <span className="category-item text-white font-bold drop-shadow cursor-pointer" style={{ background: 'transparent !important', fontSize: '18px' }}>피부관리</span>
            <span className="category-item text-white font-bold drop-shadow cursor-pointer" style={{ background: 'transparent !important', fontSize: '18px' }}>속눈썹</span>
            <span className="category-item text-white font-bold drop-shadow cursor-pointer" style={{ background: 'transparent !important', fontSize: '18px' }}>왁싱</span>
            <span className="category-item text-white font-bold drop-shadow cursor-pointer" style={{ background: 'transparent !important', fontSize: '18px' }}>반영구</span>
            <span className="category-item text-white font-bold drop-shadow cursor-pointer" style={{ background: 'transparent !important', fontSize: '18px' }}>두피케어</span>
            <span className="category-item text-white font-bold drop-shadow cursor-pointer" style={{ background: 'transparent !important', fontSize: '18px' }}>마사지</span>
            <span className="category-item text-white font-bold drop-shadow cursor-pointer" style={{ background: 'transparent !important', fontSize: '18px' }}>타투</span>
          </div>
        </div>
        {/* 상단 우측 로그인/회원가입 */}
        <div style={{
          position: 'absolute',
          top: '36px',
          left: '50%',
          transform: 'translateX(calc(-50% + 400px))',
          zIndex: 20,
        }}>
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
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
            <Link href="/community">
              <span style={{
                color: 'rgba(255,255,255,0.92)',
                fontSize: '15px',
                fontWeight: 'normal',
                letterSpacing: '0.03em',
                cursor: 'pointer',
                userSelect: 'none',
                textShadow: '0 1px 4px rgba(0,0,0,0.45)'
              }}>
                커뮤니티
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* 타임특가 섹션 */}
      <section className="w-full pt-[60px] pb-8 bg-gray-50">
        <div className="max-w-[1240px] mx-auto">
          {/* 타임특가 텍스트 */}
          <div className="mb-4 font-bold text-2xl">타임특가</div>
          
          {/* 슬라이드 컨테이너 */}
          <div className="relative">
            {/* 좌우 버튼 */}
            <button 
              className="absolute left-2 top-1/2 transform -translate-y-1/2 z-20 bg-white rounded-full w-12 h-12 shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200 border border-gray-200"
              onClick={() => {
                const container = document.getElementById('slide-container');
                if (container) {
                  container.scrollLeft -= 300;
                }
              }}
            >
              <FontAwesomeIcon icon={faChevronLeft} className="text-gray-600 text-lg" />
            </button>
            
            <button 
              className="absolute right-2 top-1/2 transform -translate-y-1/2 z-20 bg-white rounded-full w-12 h-12 shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200 border border-gray-200"
              onClick={() => {
                const container = document.getElementById('slide-container');
                if (container) {
                  container.scrollLeft += 300;
                }
              }}
            >
              <FontAwesomeIcon icon={faChevronRight} className="text-gray-600 text-lg" />
            </button>

            {/* 슬라이드 카드들 */}
            <div 
              id="slide-container"
              className="overflow-x-auto pb-4 scroll-smooth" 
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="flex gap-5" style={{ width: 'max-content' }}>
                {/* 슬라이드 카드 1 */}
                <div
                  className="w-[280px] bg-white rounded-lg overflow-hidden shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                  onClick={() => handleCardClick({
                    name: 'LA 남성 그루밍 이발소',
                    rating: 5.0,
                    reviewCount: 153,
                    address: '13 문화 예술로, 멜트 베이, 11946',
                    image: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTAzMDZfMjQ4%2FMDAxNzQxMjMxNDEzMjA1.NMlLTOkPOOQ1bBLuJ1SoBpME8lOfwZ860k521zNXyMQg.zT73UtiPMXcmSG4kJ4U_5MsZBMIAJwSdR2YSuDkCQQMg.PNG%2F%25B9%25CC%25BF%25EB%25BD%25C7_%25C1%25B6%25B8%25ED_3.png'
                  })}
                >
                  <div className="relative h-[200px]">
                    <img 
                      src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTAzMDZfMjQ4%2FMDAxNzQxMjMxNDEzMjA1.NMlLTOkPOOQ1bBLuJ1SoBpME8lOfwZ860k521zNXyMQg.zT73UtiPMXcmSG4kJ4U_5MsZBMIAJwSdR2YSuDkCQQMg.PNG%2F%25B9%25CC%25BF%25EB%25BD%25C7_%25C1%25B6%25B8%25ED_3.png"
                      alt="LA 남성 그루밍 이발소"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-black/80 text-white px-2 py-1 rounded-md text-sm font-bold flex items-center gap-1">
                      <span>5.0</span>
                      <span className="text-xs">(153개의 리뷰)</span>
                    </div>
                  </div>
                  <div className="p-4 text-center" style={{ minHeight: '180px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <h3 className="font-bold text-lg mb-2">LA 남성 그루밍 이발소</h3>
                      <p className="text-gray-600 text-sm mb-3">프리미엄 남성 헤어케어 서비스</p>
                      <p className="text-gray-500 text-xs mb-4">13 문화 예술로, 멜트 베이, 11946</p>
                    </div>
                    <div>
                      <div className="text-red-600 font-bold text-lg mb-2">₩25,000</div>
                      <button className="w-full bg-rose-500 text-white py-2 px-4 rounded-lg text-sm font-semibold hover:bg-rose-600 transition-colors">
                        예약하기
                      </button>
                    </div>
                  </div>
                </div>
                {/* 슬라이드 카드 2 */}
                <div
                  className="w-[280px] bg-white rounded-lg overflow-hidden shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                  onClick={() => handleCardClick({
                    name: 'flawless 팀색 및 헤어 시스템',
                    rating: 4.9,
                    reviewCount: 357,
                    address: '1766 이스트 콜로니얼 역대, 올랜도, 32817',
                    image: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTA0MDhfNDUg%2FMDAxNzQ0MTIzMDIyMjI1.GkH_xYwR5E6D3EpxQ-cWl2pjb-IEOYQrOv3dB4E0RQQg.slRzhIYyZbJUD5xLGUS101AtECex03LXD0T-bcT45Iog.JPEG%2FDSC08772.jpg'
                  })}
                >
                  <div className="relative h-[200px]">
                    <img 
                      src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTA0MDhfNDUg%2FMDAxNzQ0MTIzMDIyMjI1.GkH_xYwR5E6D3EpxQ-cWl2pjb-IEOYQrOv3dB4E0RQQg.slRzhIYyZbJUD5xLGUS101AtECex03LXD0T-bcT45Iog.JPEG%2FDSC08772.jpg"
                      alt="flawless 팀색 및 헤어 시스템"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-black/80 text-white px-2 py-1 rounded-md text-sm font-bold flex items-center gap-1">
                      <span>4.9</span>
                      <span className="text-xs">(357개의 리뷰)</span>
                    </div>
                  </div>
                  <div className="p-4 text-center" style={{ minHeight: '180px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <h3 className="font-bold text-lg mb-2">flawless 팀색 및 헤어 시스템</h3>
                      <p className="text-gray-600 text-sm mb-3">전문 염색 및 헤어 스타일링</p>
                      <p className="text-gray-500 text-xs mb-4">1766 이스트 콜로니얼 역대, 올랜도, 32817</p>
                    </div>
                    <div>
                      <div className="text-red-600 font-bold text-lg mb-2">₩45,000</div>
                      <button className="w-full bg-rose-500 text-white py-2 px-4 rounded-lg text-sm font-semibold hover:bg-rose-600 transition-colors">
                        예약하기
                      </button>
                    </div>
                  </div>
                </div>
                {/* 슬라이드 카드 3 */}
                <div
                  className="w-[280px] bg-white rounded-lg overflow-hidden shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                  onClick={() => handleCardClick({
                    name: '크리스피 컷 1',
                    rating: 5.0,
                    reviewCount: 234,
                    address: '115 N 첼섬 스트리트, 머스코지, OK, 74401',
                    image: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDEyMTFfMTYg%2FMDAxNzMzOTA3MzQ3OTI2.lV6R8qiR_UgsOTRRhTag6W2Bc5UgS11RBvf_58-wSoMg.7TDP02bP98aFd2JQzh0cGeUbMiN1ocuMu6ApUM2wqqYg.JPEG%2F900%25A3%25DF20241211%25A3%25DF105615%25A3%25A80%25A3%25A9.jpg'
                  })}
                >
                  <div className="relative h-[200px]">
                    <img 
                      src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDEyMTFfMTYg%2FMDAxNzMzOTA3MzQ3OTI2.lV6R8qiR_UgsOTRRhTag6W2Bc5UgS11RBvf_58-wSoMg.7TDP02bP98aFd2JQzh0cGeUbMiN1ocuMu6ApUM2wqqYg.JPEG%2F900%25A3%25DF20241211%25A3%25DF105615%25A3%25A80%25A3%25A9.jpg"
                      alt="크리스피 컷 1"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-black/80 text-white px-2 py-1 rounded-md text-sm font-bold flex items-center gap-1">
                      <span>5.0</span>
                      <span className="text-xs">(234개의 리뷰)</span>
                    </div>
                  </div>
                  <div className="p-4 text-center" style={{ minHeight: '180px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <h3 className="font-bold text-lg mb-2">크리스피 컷 1</h3>
                      <p className="text-gray-600 text-sm mb-3">트렌디한 커트 스타일링</p>
                      <p className="text-gray-500 text-xs mb-4">115 N 첼섬 스트리트, 머스코지, OK, 74401</p>
                    </div>
                    <div>
                      <div className="text-red-600 font-bold text-lg mb-2">₩30,000</div>
                      <button className="w-full bg-rose-500 text-white py-2 px-4 rounded-lg text-sm font-semibold hover:bg-rose-600 transition-colors">
                        예약하기
                      </button>
                    </div>
                  </div>
                </div>
                {/* 슬라이드 카드 4 */}
                <div
                  className="w-[280px] bg-white rounded-lg overflow-hidden shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                  onClick={() => handleCardClick({
                    name: '제이 @ The Parlour',
                    rating: 5.0,
                    reviewCount: 599,
                    address: '420 W 콜리플랜트 로드, 그린치, 45616',
                    image: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDEyMTFfMTYg%2FMDAxNzMzOTA3MzQ3OTI2.lV6R8qiR_UgsOTRRhTag6W2Bc5UgS11RBvf_58-wSoMg.7TDP02bP98aFd2JQzh0cGeUbMiN1ocuMu6ApUM2wqqYg.JPEG%2F900%25A3%25DF20241211%25A3%25DF105615%25A3%25A80%25A3%25A9.jpg'
                  })}
                >
                  <div className="relative h-[200px]">
                    <img 
                      src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDEyMTFfMTYg%2FMDAxNzMzOTA3MzQ3OTI2.lV6R8qiR_UgsOTRRhTag6W2Bc5UgS11RBvf_58-wSoMg.7TDP02bP98aFd2JQzh0cGeUbMiN1ocuMu6ApUM2wqqYg.JPEG%2F900%25A3%25DF20241211%25A3%25DF105615%25A3%25A80%25A3%25A9.jpg"
                      alt="제이 @ The Parlour"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-black/80 text-white px-2 py-1 rounded-md text-sm font-bold flex items-center gap-1">
                      <span>5.0</span>
                      <span className="text-xs">(599개의 리뷰)</span>
                    </div>
                  </div>
                  <div className="p-4 text-center" style={{ minHeight: '180px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <h3 className="font-bold text-lg mb-2">제이 @ The Parlour</h3>
                      <p className="text-gray-600 text-sm mb-3">고급 헤어 스타일링 서비스</p>
                      <p className="text-gray-500 text-xs mb-4">420 W 콜리플랜트 로드, 그린치, 45616</p>
                    </div>
                    <div>
                      <div className="text-red-600 font-bold text-lg mb-2">₩55,000</div>
                      <button className="w-full bg-rose-500 text-white py-2 px-4 rounded-lg text-sm font-semibold hover:bg-rose-600 transition-colors">
                        예약하기
                      </button>
                    </div>
                  </div>
                </div>
                {/* 슬라이드 카드 5 */}
                <div
                  className="w-[280px] bg-white rounded-lg overflow-hidden shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                  onClick={() => handleCardClick({
                    name: '트라이브',
                    rating: 4.8,
                    reviewCount: 555,
                    address: '555 캐슬 드라이브, 버밍엄, 35209',
                    image: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTAyMTZfMTM2%2FMDAxNzM5NzEwNjcwNjI0.E2wdB1sfjz0CNvEOHMDR_dHL-CiJ4pKy2rLhaY1leLMg._CMjlTBkhwdeqRJlsLGn6Ctn-S_8Tl7gak5VrjQhwZYg.JPEG%2F900%25A3%25DF20250213%25A3%25DF181930.jpg'
                  })}
                >
                  <div className="relative h-[200px]">
                    <img 
                      src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTAyMTZfMTM2%2FMDAxNzM5NzEwNjcwNjI0.E2wdB1sfjz0CNvEOHMDR_dHL-CiJ4pKy2rLhaY1leLMg._CMjlTBkhwdeqRJlsLGn6Ctn-S_8Tl7gak5VrjQhwZYg.JPEG%2F900%25A3%25DF20250213%25A3%25DF181930.jpg"
                      alt="트라이브"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-black/80 text-white px-2 py-1 rounded-md text-sm font-bold flex items-center gap-1">
                      <span>4.8</span>
                      <span className="text-xs">(555개의 리뷰)</span>
                    </div>
                  </div>
                  <div className="p-4 text-center" style={{ minHeight: '180px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <h3 className="font-bold text-lg mb-2">트라이브</h3>
                      <p className="text-gray-600 text-sm mb-3">모던한 헤어 디자인 스튜디오</p>
                      <p className="text-gray-500 text-xs mb-4">555 캐슬 드라이브, 버밍엄, 35209</p>
                    </div>
                    <div>
                      <div className="text-red-600 font-bold text-lg mb-2">₩35,000</div>
                      <button className="w-full bg-rose-500 text-white py-2 px-4 rounded-lg text-sm font-semibold hover:bg-rose-600 transition-colors">
                        예약하기
                      </button>
                    </div>
                  </div>
                </div>
                {/* 슬라이드 카드 6 */}
                <div
                  className="w-[280px] bg-white rounded-lg overflow-hidden shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                  onClick={() => handleCardClick({
                    name: '프리미엄 헤어샵',
                    rating: 4.9,
                    reviewCount: 432,
                    address: '강남대로 123, 서울, 06123',
                    image: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTAzMDZfMjQ4%2FMDAxNzQxMjMxNDEzMjA1.NMlLTOkPOOQ1bBLuJ1SoBpME8lOfwZ860k521zNXyMQg.zT73UtiPMXcmSG4kJ4U_5MsZBMIAJwSdR2YSuDkCQQMg.PNG%2F%25B9%25CC%25BF%25EB%25BD%25C7_%25C1%25B6%25B8%25ED_3.png'
                  })}
                >
                  <div className="relative h-[200px]">
                    <img 
                      src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTAzMDZfMjQ4%2FMDAxNzQxMjMxNDEzMjA1.NMlLTOkPOOQ1bBLuJ1SoBpME8lOfwZ860k521zNXyMQg.zT73UtiPMXcmSG4kJ4U_5MsZBMIAJwSdR2YSuDkCQQMg.PNG%2F%25B9%25CC%25BF%25EB%25BD%25C7_%25C1%25B6%25B8%25ED_3.png"
                      alt="프리미엄 헤어샵"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-black/80 text-white px-2 py-1 rounded-md text-sm font-bold flex items-center gap-1">
                      <span>4.9</span>
                      <span className="text-xs">(432개의 리뷰)</span>
                    </div>
                  </div>
                  <div className="p-4 text-center" style={{ minHeight: '180px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <h3 className="font-bold text-lg mb-2">프리미엄 헤어샵</h3>
                      <p className="text-gray-600 text-sm mb-3">럭셔리 헤어 케어 서비스</p>
                      <p className="text-gray-500 text-xs mb-4">강남대로 123, 서울, 06123</p>
                    </div>
                    <div>
                      <div className="text-red-600 font-bold text-lg mb-2">₩65,000</div>
                      <button className="w-full bg-rose-500 text-white py-2 px-4 rounded-lg text-sm font-semibold hover:bg-rose-600 transition-colors">
                        예약하기
                      </button>
                    </div>
                  </div>
                </div>
                {/* 슬라이드 카드 7 */}
                <div
                  className="w-[280px] bg-white rounded-lg overflow-hidden shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                  onClick={() => handleCardClick({
                    name: '스타일리스트 스튜디오',
                    rating: 5.0,
                    reviewCount: 298,
                    address: '홍대로 456, 서울, 04039',
                    image: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTA0MDhfNDUg%2FMDAxNzQ0MTIzMDIyMjI1.GkH_xYwR5E6D3EpxQ-cWl2pjb-IEOYQrOv3dB4E0RQQg.slRzhIYyZbJUD5xLGUS101AtECex03LXD0T-bcT45Iog.JPEG%2FDSC08772.jpg'
                  })}
                >
                  <div className="relative h-[200px]">
                    <img 
                      src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTA0MDhfNDUg%2FMDAxNzQ0MTIzMDIyMjI1.GkH_xYwR5E6D3EpxQ-cWl2pjb-IEOYQrOv3dB4E0RQQg.slRzhIYyZbJUD5xLGUS101AtECex03LXD0T-bcT45Iog.JPEG%2FDSC08772.jpg"
                      alt="스타일리스트 스튜디오"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-black/80 text-white px-2 py-1 rounded-md text-sm font-bold flex items-center gap-1">
                      <span>5.0</span>
                      <span className="text-xs">(298개의 리뷰)</span>
                    </div>
                  </div>
                  <div className="p-4 text-center" style={{ minHeight: '180px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <h3 className="font-bold text-lg mb-2">스타일리스트 스튜디오</h3>
                      <p className="text-gray-600 text-sm mb-3">아티스틱 헤어 디자인</p>
                      <p className="text-gray-500 text-xs mb-4">홍대로 456, 서울, 04039</p>
                    </div>
                    <div>
                      <div className="text-red-600 font-bold text-lg mb-2">₩40,000</div>
                      <button className="w-full bg-rose-500 text-white py-2 px-4 rounded-lg text-sm font-semibold hover:bg-rose-600 transition-colors">
                        예약하기
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 앱 다운로드 섹션 */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-[1240px] mx-auto flex gap-5">
          {/* 왼쪽 카드 - 일반 사용자용 */}
          <div className="flex-1 bg-[#e6f7f7] rounded-3xl p-12 h-[800px] relative overflow-hidden">
            {/* 앱 정보 */}
            <div className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 bg-[#00a3a3] rounded-xl flex items-center justify-center">
                <img src="/globe.svg" alt="Booksy" className="w-6 h-6 invert" />
              </div>
              <span className="text-gray-700">stylelogs 앱 • iOS, Android</span>
            </div>

            {/* 메인 텍스트 */}
            <h2 className="text-4xl font-bold mb-4">가까운 뷰티샵, 더 스마트하게. <br />예약하십시오.</h2>
            <p className="text-gray-600 mb-8">
              전화 태그를 치릅니다. 언제 어디서나 즉시 다음 약속을 찾고<br />
              예약하세요. 더 스마트하게.
            </p>

            {/* 국가 선택 및 다운로드 버튼 */}
            <div className="flex gap-4 items-center">
              <select className="px-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-700 w-40">
                <option value="US">🇺🇸 United States</option>
                <option value="KR">🇰🇷 대한민국</option>
              </select>
              <button className="px-8 py-3 bg-[#00a3a3] text-white rounded-lg hover:bg-[#008f8f] transition-colors">
                다운로드
              </button>
            </div>

            {/* 일러스트레이션 */}
            <div className="absolute bottom-0 left-12">
              <div className="relative w-[200px] h-[300px]">
                <img 
                  src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTAzMDZfMjQ4%2FMDAxNzQxMjMxNDEzMjA1.NMlLTOkPOOQ1bBLuJ1SoBpME8lOfwZ860k521zNXyMQg.zT73UtiPMXcmSG4kJ4U_5MsZBMIAJwSdR2YSuDkCQQMg.PNG%2F%25B9%25CC%25BF%25EB%25BD%25C7_%25C1%25B6%25B8%25ED_3.png" 
                  alt="Woman illustration" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* 앱 스크린샷 */}
            <div className="absolute bottom-0 right-12">
              <div className="relative w-[280px] h-[500px]">
                <img 
                  src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTA0MDhfNDUg%2FMDAxNzQ0MTIzMDIyMjI1.GkH_xYwR5E6D3EpxQ-cWl2pjb-IEOYQrOv3dB4E0RQQg.slRzhIYyZbJUD5xLGUS101AtECex03LXD0T-bcT45Iog.JPEG%2FDSC08772.jpg" 
                  alt="App screenshot" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* 오른쪽 카드 - 비즈니스용 */}
          <div className="flex-1 bg-[#f8f8f8] rounded-3xl p-12 h-[800px] relative overflow-hidden">
            {/* 앱 정보 */}
            <div className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 bg-gray-900 rounded-xl flex items-center justify-center">
                <img src="/globe.svg" alt="BooksyBiz" className="w-6 h-6 invert" />
              </div>
              <span className="text-gray-700">style Logs 앱 • iOS, 안드로이드</span>
            </div>

            {/* 메인 텍스트 */}
            <h2 className="text-4xl font-bold mb-4">귀하의 비즈니스를<br />위한 styleLogs</h2>
            <p className="text-gray-600 mb-8">
              스타일로그를 시작하여 비즈니스를 더 잘 운영하십시오. 캘린더,<br />
              예약, 마케팅 및 지불을 모두 하나로.
            </p>

            {/* 비즈니스 시작 버튼 */}
            <button className="px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
              내 비즈니스 설정
            </button>

            {/* 일러스트레이션 */}
            <div className="absolute bottom-0 left-12">
              <div className="relative w-[200px] h-[300px]">
                <img 
                  src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTAzMjRfMjc4%2FMDAxNzQyNzgxMDg5OTEy.CX9CWh323KrjA97EdgmkKX3MyuDyN1KMzszFp_NZVv8g.O8Y_EoFJZ2ljMyU0bsMkkyw4iS-avY6oWBiGHi8RXHcg.JPEG%2FIMG_0633.jpg" 
                  alt="Business illustration" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* 앱 스크린샷 */}
            <div className="absolute bottom-0 right-12">
              <div className="relative w-[280px] h-[500px]">
                <img 
                  src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDEyMTFfMTYg%2FMDAxNzMzOTA3MzQ3OTI2.lV6R8qiR_UgsOTRRhTag6W2Bc5UgS11RBvf_58-wSoMg.7TDP02bP98aFd2JQzh0cGeUbMiN1ocuMu6ApUM2wqqYg.JPEG%2F900%25A3%25DF20241211%25A3%25DF105615%25A3%25A80%25A3%25A9.jpg" 
                  alt="Business app screenshot" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 스크롤 테스트를 위한 추가 내용 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">인기 뷰티샵</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularSalons.map((salon, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gray-200 relative">
                  <img 
                    src={salon.image} 
                    alt={salon.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{salon.name}</h3>
                  <p className="text-gray-600 mb-2">{salon.location}</p>
                  <p className="text-gray-500 text-sm mb-4">{salon.desc}</p>
                  <div className="flex items-center justify-between">
                    <StarRating rating={salon.rating} />
                    <span className="text-gray-500 text-sm">리뷰 {salon.reviewCount}개</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">최근 리뷰</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviewedSalons.map((salon, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{salon.name}</h3>
                <p className="text-gray-600 mb-2">{salon.location}</p>
                <p className="text-gray-500 text-sm mb-4">{salon.desc}</p>
                <div className="flex items-center justify-between">
                  <StarRating rating={salon.rating} />
                  <span className="text-gray-500 text-sm">리뷰 {salon.reviewCount}개</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">서비스 카테고리</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {menuWithSub.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                  <FontAwesomeIcon icon={item.icon} className="text-2xl text-gray-600" />
                </div>
                <h3 className="text-sm font-medium text-gray-900">{item.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">추가 콘텐츠</h2>
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">뷰티 트렌드</h3>
              <p className="text-gray-600 leading-relaxed">
                최신 뷰티 트렌드를 확인하고 나에게 맞는 스타일을 찾아보세요. 
                전문가들이 추천하는 스타일링 팁과 트렌디한 헤어스타일을 소개합니다.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">예약 가이드</h3>
              <p className="text-gray-600 leading-relaxed">
                뷰티샵 예약을 위한 완벽한 가이드입니다. 
                예약 전 확인해야 할 사항들과 예약 후 준비사항을 안내해드립니다.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">고객 후기</h3>
              <p className="text-gray-600 leading-relaxed">
                실제 고객들의 생생한 후기를 확인하세요. 
                다양한 뷰티샵의 서비스 품질과 고객 만족도를 한눈에 볼 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 모달 컴포넌트 */}
      {modalOpen && modalData && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl p-8 w-[450px] relative animate-fadeIn max-h-[90vh] overflow-y-auto">
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-2xl"
              onClick={() => setModalOpen(false)}
            >
              &times;
            </button>
            <img 
              src={modalData.image || "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTAzMDZfMjQ4%2FMDAxNzQxMjMxNDEzMjA1.NMlLTOkPOOQ1bBLuJ1SoBpME8lOfwZ860k521zNXyMQg.zT73UtiPMXcmSG4kJ4U_5MsZBMIAJwSdR2YSuDkCQQMg.PNG%2F%25B9%25CC%25BF%25EB%25BD%25C7_%25C1%25B6%25B8%25ED_3.png"} 
              alt={modalData.name} 
              className="w-full h-40 object-cover rounded-lg mb-4" 
            />
            <h3 className="text-xl font-bold mb-2 text-center">{modalData.name}</h3>
            <div className="flex flex-col items-center gap-1 mb-2">
              <div className="flex items-center gap-2">
                <StarRating rating={modalData.rating} />
                <span className="font-semibold">{modalData.rating}</span>
                <span className="text-gray-500 text-sm">({modalData.reviewCount}개의 리뷰)</span>
              </div>
            </div>
            <div className="text-gray-600 text-sm mb-4 text-center">{modalData.address}</div>
            <div className="border-t pt-3">
              <div className="font-semibold mb-2">고객 리뷰</div>
              <ul className="space-y-2">
                {modalData.reviews && modalData.reviews.length > 0 ? (
                  getCurrentPageReviews(modalData.reviews).map((r: { nickname: string; text: string }, i: number) => (
                    <li key={i} className="text-gray-700 text-sm bg-gray-50 rounded p-3">
                      <div className="flex items-start gap-2">
                        <div className="flex-shrink-0 mt-1">
                          <StarRating rating={5} customSize={12} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-medium mb-1">{r.nickname}</div>
                          <div className="text-gray-600 leading-relaxed break-words">{r.text}</div>
                        </div>
                      </div>
                    </li>
                  ))
                ) : (
                  <li className="text-gray-400 text-sm">아직 리뷰가 없습니다.</li>
                )}
              </ul>
              {modalData.reviews && modalData.reviews.length > reviewsPerPage && (
                <div className="flex justify-center items-center gap-4 mt-4 border-t pt-4">
                  <button
                    onClick={handlePrevPage}
                    disabled={currentReviewPage === 1}
                    className={`px-3 py-1 rounded ${
                      currentReviewPage === 1
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    이전
                  </button>
                  <span className="text-sm text-gray-600">
                    {currentReviewPage} / {totalPages}
                  </span>
                  <button
                    onClick={handleNextPage}
                    disabled={currentReviewPage === totalPages}
                    className={`px-3 py-1 rounded ${
                      currentReviewPage === totalPages
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    다음
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
