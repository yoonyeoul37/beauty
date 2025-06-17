"use client";
import Link from 'next/link'
import { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

// FontAwesome 라이브러리에 아이콘 추가
library.add(faBell);

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
  { name: '스타일리스트 A', location: '강남', desc: '합리적 가격, 높은 평점', href: '/haircut' },
  { name: '스타일리스트 B', location: '홍대', desc: '트렌디한 스타일', href: '/coloring' },
  { name: '스타일리스트 C', location: '신촌', desc: '친절한 서비스', href: '/perm' },
  { name: '스타일리스트 D', location: '건대', desc: '예약 필수 인기샵', href: '#' },
  { name: '스타일리스트 E', location: '잠실', desc: '합리적 가격, 최신 트렌드', href: '#' },
];

const reviewedSalons = [
  { name: '뷰티살롱 A', location: '강남', desc: '리뷰 1,234개', href: '/haircut' },
  { name: '헤어스튜디오 B', location: '홍대', desc: '리뷰 987개', href: '/coloring' },
  { name: '미용실 C', location: '신촌', desc: '리뷰 856개', href: '/perm' },
  { name: '헤어살롱 D', location: '건대', desc: '리뷰 743개', href: '#' },
  { name: '뷰티샵 E', location: '잠실', desc: '리뷰 632개', href: '#' },
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

export default function Home() {
  const [openMenu, setOpenMenu] = useState<number | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

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
      setIsTransition(true);
    }, 5000);
    return () => clearInterval(timer);
  }, [reviewSlideCards.length, isReviewPaused]);

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
    setIsTransition(true);
  };
  const goReviewPrev = () => {
    setReviewSlideIdx((prev) => prev - 1);
    setIsTransition(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white flex flex-col">
      {/* 헤더 */}
      <header className="w-full" style={{ height: 100, minHeight: 100 }}>
        <div className="h-full flex items-center px-4 bg-[#800020] shadow">
          <div className="flex items-center gap-8" style={{ marginLeft: 120 }}>
            <span className="text-3xl font-extrabold text-white tracking-wide">라뷰</span>
            <input
              type="text"
              placeholder=""
              className="w-[580px] h-[60px] rounded-full px-8 py-4 text-lg shadow focus:outline-none focus:ring-2 focus:ring-pink-300 border border-gray-200 bg-white placeholder-gray-400"
            />
          </div>
        </div>
      </header>

      {/* 카테고리 */}
      <nav ref={navRef} className="w-full bg-white shadow-sm py-3 px-2 flex flex-wrap justify-center gap-4 relative">
        {menuWithSub.map((cat, idx) => (
          <div key={cat.name} className="relative flex flex-col items-center w-28">
            <button
              className="flex flex-col items-center w-full hover:text-pink-600 focus:outline-none transition-colors duration-200"
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

      {/* 추천 배너 */}
      <section className="w-full flex justify-center py-6 bg-gradient-to-r from-pink-100 to-blue-100">
        <div className="w-full max-w-2xl rounded-xl bg-white shadow p-6 flex flex-col md:flex-row items-center gap-4">
          <div className="flex-1">
            <h2 className="text-lg font-bold text-pink-600 mb-2">WELL&COME 이벤트</h2>
            <p className="text-gray-600 text-sm mb-2">신규 회원 최대 50% 할인 쿠폰 증정!</p>
            <button className="bg-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-pink-600 transition">이벤트 보기</button>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="w-32 h-20 bg-pink-200 rounded-lg flex items-center justify-center text-3xl">🎁</div>
          </div>
        </div>
      </section>

      {/* 인기 미용실 슬라이더 */}
      <section className="container mx-auto px-4 py-8">
        <div className="w-[1200px] mx-auto">
          <h3 className="text-left mb-5 flex items-center gap-3">
            <FontAwesomeIcon icon={faBell} className="text-pink-500 animate-pulse text-2xl" />
            <div className="flex items-center">
              <span className="text-2xl font-extrabold bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">타임특가</span>
              <div className="ml-3 flex items-center">
                <span className="text-sm font-medium text-gray-600 bg-gradient-to-r from-pink-100 to-purple-100 px-3 py-1 rounded-full">
                  시간 놓치면 끝! 지금만 가능한 혜택
                </span>
              </div>
            </div>
          </h3>
        </div>
        {slideCards.length === 0 ? (
          <div className="w-full text-center text-gray-400 py-20 text-lg">등록된 업체가 없습니다.</div>
        ) : (
          <div className="w-[1280px] mx-auto flex items-center justify-center relative">
            {/* 왼쪽 버튼 */}
            <button
              onClick={goPrev}
              className="absolute left-[-48px] z-20 w-10 h-10 bg-white rounded-xl shadow flex items-center justify-center hover:bg-gray-100 active:bg-gray-200 transition border border-gray-200"
              style={{ top: '50%', transform: 'translateY(-50%)' }}
              aria-label="이전"
            >
              <span className="text-2xl">{'<'}</span>
            </button>
            {/* 카드 슬라이드 */}
            <div
              className="w-[1200px] overflow-hidden rounded-xl"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div
                className={`flex ${isTransition ? 'transition-transform duration-500' : ''}`}
                style={{ width: `${slideCards.length * 240}px`, transform: `translateX(-${slideIdx * 240}px)` }}
              >
                {slideCards.map((salon, idx) => (
                  <Link
                    key={salon.name + idx}
                    href={salon.href}
                    className="group block bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 w-[240px] h-[360px] relative overflow-hidden mx-2"
                  >
                    {/* 오버레이 */}
                    <div className="pointer-events-none absolute inset-0 bg-[#e1e9fa] opacity-0 group-hover:opacity-20 transition-all duration-300 z-10" />
                    <div className="relative h-full">
                      {/* 이미지 섹션 */}
                      <div className="w-full h-[240px] overflow-hidden">
                        <img src={
                          idx % slideLen === 0 ? "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTAzMDZfMjQ4%2FMDAxNzQxMjMxNDEzMjA1.NMlLTOkPOOQ1bBLuJ1SoBpME8lOfwZ860k521zNXyMQg.zT73UtiPMXcmSG4kJ4U_5MsZBMIAJwSdR2YSuDkCQQMg.PNG%2F%25B9%25CC%25BF%25EB%25BD%25C7_%25C1%25B6%25B8%25ED_3.png&type=a340"
                          : idx % slideLen === 1 ? "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTA0MDhfNDUg%2FMDAxNzQ0MTIzMDIyMjI1.GkH_xYwR5E6D3EpxQ-cWl2pjb-IEOYQrOv3dB4E0RQQg.slRzhIYyZbJUD5xLGUS101AtECex03LXD0T-bcT45Iog.JPEG%2FDSC08772.jpg&type=a340"
                          : idx % slideLen === 2 ? "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTAyMTZfMTM2%2FMDAxNzM5NzEwNjcwNjI0.E2wdB1sfjz0CNvEOHMDR_dHL-CiJ4pKy2rLhaY1leLMg._CMjlTBkhwdeqRJlsLGn6Ctn-S_8Tl7gak5VrjQhwZYg.JPEG%2F900%25A3%25DF20250213%25A3%25DF181930.jpg&type=a340"
                          : idx % slideLen === 3 ? "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDEyMTFfMTYg%2FMDAxNzMzOTA3MzQ3OTI2.lV6R8qiR_UgsOTRRhTag6W2Bc5UgS11RBvf_58-wSoMg.7TDP02bP98aFd2JQzh0cGeUbMiN1ocuMu6ApUM2wqqYg.JPEG%2F900%25A3%25DF20241211%25A3%25DF105615%25A3%25A80%25A3%25A9.jpg&type=a340"
                          : "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTAzMjRfMjc4%2FMDAxNzQyNzgxMDg5OTEy.CX9CWh323KrjA97EdgmkKX3MyuDyN1KMzszFp_NZVv8g.O8Y_EoFJZ2ljMyU0bsMkkyw4iS-avY6oWBiGHi8RXHcg.JPEG%2FIMG_0633.jpg&type=a340"
                        } alt={salon.name} className="w-full h-full object-cover" />
                      </div>
                      {/* 텍스트 섹션 */}
                      <div className="p-4 text-center">
                        <div className="font-semibold text-gray-700 text-lg mb-1 group-hover:text-gray-800 transition-colors duration-300">
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
                  </Link>
                ))}
              </div>
            </div>
            {/* 오른쪽 버튼 */}
            <button
              onClick={goNext}
              className="absolute right-[-48px] z-20 w-10 h-10 bg-white rounded-xl shadow flex items-center justify-center hover:bg-gray-100 active:bg-gray-200 transition border border-gray-200"
              style={{ top: '50%', transform: 'translateY(-50%)' }}
              aria-label="다음"
            >
              <span className="text-2xl">{'>'}</span>
            </button>
          </div>
        )}
      </section>

      {/* 최근 리뷰가 많은 업체 슬라이더 */}
      <section className="container mx-auto px-4 py-8">
        <div className="w-[1200px] mx-auto">
          <h3 className="text-xl font-bold text-gray-800 text-left mb-5">최근 리뷰가 많은 업체</h3>
        </div>
        {reviewSlideCards.length === 0 ? (
          <div className="w-full text-center text-gray-400 py-20 text-lg">등록된 업체가 없습니다.</div>
        ) : (
          <div className="w-[1280px] mx-auto flex items-center justify-center relative">
            {/* 왼쪽에 고정된 큰 카드 */}
            <div className="w-[480px] mr-4">
              <Link
                href={reviewedSalons[0].href}
                className="group block bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 w-[480px] h-[360px] relative overflow-hidden"
              >
                <div className="pointer-events-none absolute inset-0 bg-[#e1e9fa] opacity-0 group-hover:opacity-20 transition-all duration-300 z-10" />
                <div className="relative h-full">
                  <div className="w-[480px] h-[240px] overflow-hidden">
                    <img 
                      src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTAzMDZfMjQ4%2FMDAxNzQxMjMxNDEzMjA1.NMlLTOkPOOQ1bBLuJ1SoBpME8lOfwZ860k521zNXyMQg.zT73UtiPMXcmSG4kJ4U_5MsZBMIAJwSdR2YSuDkCQQMg.PNG%2F%25B9%25CC%25BF%25EB%25BD%25C7_%25C1%25B6%25B8%25ED_3.png&type=a340" 
                      alt={reviewedSalons[0].name} 
                      className="w-[480px] h-full object-cover"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <div className="font-semibold text-gray-700 text-lg mb-1 group-hover:text-gray-800 transition-colors duration-300">
                      {reviewedSalons[0].name}
                    </div>
                    <div className="text-sm text-gray-500 mb-2 group-hover:text-gray-600 transition-colors duration-300">
                      {reviewedSalons[0].location}
                    </div>
                    <div className="text-sm text-pink-500 group-hover:text-pink-600 transition-colors duration-300">
                      {reviewedSalons[0].desc}
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* 슬라이딩되는 작은 카드들 */}
            <div className="w-[720px] relative">
              {/* 왼쪽 버튼 */}
              <button
                onClick={goReviewPrev}
                className="absolute left-[-48px] z-20 w-10 h-10 bg-white rounded-xl shadow flex items-center justify-center hover:bg-gray-100 active:bg-gray-200 transition border border-gray-200"
                style={{ top: '50%', transform: 'translateY(-50%)' }}
                aria-label="이전"
              >
                <span className="text-2xl">{'<'}</span>
              </button>

              {/* 카드 슬라이드 */}
              <div
                className="overflow-hidden"
                onMouseEnter={() => setIsReviewPaused(true)}
                onMouseLeave={() => setIsReviewPaused(false)}
              >
                <div
                  className={`flex ${isTransition ? 'transition-transform duration-500' : ''}`}
                  style={{ width: `${(reviewSlideCards.length - 1) * 240}px`, transform: `translateX(-${reviewSlideIdx * 240}px)` }}
                >
                  {reviewSlideCards.slice(1).map((salon, idx) => (
                    <Link
                      key={salon.name + idx}
                      href={salon.href}
                      className="group block bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 w-[240px] h-[360px] relative overflow-hidden mx-2"
                    >
                      <div className="pointer-events-none absolute inset-0 bg-[#e1e9fa] opacity-0 group-hover:opacity-20 transition-all duration-300 z-10" />
                      <div className="relative h-full">
                        <div className="w-full h-[240px] overflow-hidden">
                          <img src={
                            idx % (slideLen-1) === 0 ? "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTA0MDhfNDUg%2FMDAxNzQ0MTIzMDIyMjI1.GkH_xYwR5E6D3EpxQ-cWl2pjb-IEOYQrOv3dB4E0RQQg.slRzhIYyZbJUD5xLGUS101AtECex03LXD0T-bcT45Iog.JPEG%2FDSC08772.jpg&type=a340"
                            : idx % (slideLen-1) === 1 ? "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTAyMTZfMTM2%2FMDAxNzM5NzEwNjcwNjI0.E2wdB1sfjz0CNvEOHMDR_dHL-CiJ4pKy2rLhaY1leLMg._CMjlTBkhwdeqRJlsLGn6Ctn-S_8Tl7gak5VrjQhwZYg.JPEG%2F900%25A3%25DF20250213%25A3%25DF181930.jpg&type=a340"
                            : "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDEyMTFfMTYg%2FMDAxNzMzOTA3MzQ3OTI2.lV6R8qiR_UgsOTRRhTag6W2Bc5UgS11RBvf_58-wSoMg.7TDP02bP98aFd2JQzh0cGeUbMiN1ocuMu6ApUM2wqqYg.JPEG%2F900%25A3%25DF20241211%25A3%25DF105615%25A3%25A80%25A3%25A9.jpg&type=a340"
                          } alt={salon.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="p-4 text-center">
                          <div className="font-semibold text-gray-700 text-lg mb-1 group-hover:text-gray-800 transition-colors duration-300">
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
                    </Link>
                  ))}
                </div>
              </div>

              {/* 오른쪽 버튼 */}
              <button
                onClick={goReviewNext}
                className="absolute right-[-48px] z-20 w-10 h-10 bg-white rounded-xl shadow flex items-center justify-center hover:bg-gray-100 active:bg-gray-200 transition border border-gray-200"
                style={{ top: '50%', transform: 'translateY(-50%)' }}
                aria-label="다음"
              >
                <span className="text-2xl">{'>'}</span>
              </button>
            </div>
          </div>
        )}
      </section>

      {/* 더 많은 섹션/이벤트/추천 등은 필요에 따라 추가 가능 */}

      {/* 푸터 */}
      <footer className="w-full bg-gray-100 py-6 mt-auto text-center text-xs text-gray-500">
        <div>© 2024 라뷰 | 미용 가격 비교 서비스</div>
        <div className="mt-1">문의: help@labview.kr</div>
      </footer>
    </div>
  )
}
