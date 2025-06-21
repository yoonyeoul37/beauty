"use client"
import { useState, useEffect, useRef } from 'react';
import Image from "next/image";
import Link from 'next/link';
import { StarIcon } from '@heroicons/react/24/solid';
import { useSearchParams } from 'next/navigation';
import { 
  MagnifyingGlassIcon, 
  MapPinIcon, 
  CalendarIcon,
  AdjustmentsHorizontalIcon,
  ChevronDownIcon,
  MapIcon,
  InformationCircleIcon
} from '@heroicons/react/24/outline';
import TgnLogo from "../components/TgnLogo";
import FilterModal from '../components/FilterModal';
import SortByModal from '../components/SortByModal';
import FeaturedSalons from '../components/FeaturedSalons';

// This is dummy data. Later, this will come from a database.
const dummySalons = [
  {
    id: 99,
    name: "ESE 이발사",
    rating: 5.0,
    reviewCount: 84,
    address: "1.8마일. 1215W. 어빙 파크 로드, 벤슨빌, 60106",
    imageUrl: "https://images.pexels.com/photos/3993324/pexels-photo-3993324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    promoted: true,
    services: [
      { name: "머리 자르기. 테이퍼. 대머리 페이즈 등", price: 30000, duration: "35분", description: "핫 타월과 마사지가 포함되어 있습니다." },
      { name: "헤어컷과 스트레이트 면도기", price: 45000, duration: "55분", description: "최고급 면도 크림을 사용합니다." },
      { name: "수염 및 눈썹 정리", price: 30000, duration: "35분", description: "깔끔한 인상을 위한 필수 코스입니다." },
      { name: "어린이 컷", price: 25000, duration: "30분", description: "12세 이하 어린이를 위한 컷입니다." },
      { name: "두피 스케일링", price: 50000, duration: "45분", description: "상쾌한 두피 관리를 경험해보세요." },
    ],
  },
  {
    id: 1,
    name: "헤어살롱 봄날",
    rating: 4.8,
    reviewCount: 124,
    address: "서울 강남구 테헤란로 123",
    imageUrl: "https://images.pexels.com/photos/3993398/pexels-photo-3993398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    services: [
      { name: "여성 컷", price: 30000, duration: "50분", description: "트렌디한 스타일을 연출해 드립니다." },
      { name: "남성 컷", price: 25000, duration: "30분", description: "정통 클래식 컷 전문입니다." },
      { name: "클리닉", price: 80000, duration: "1시간 20분", description: "손상된 모발에 영양을 공급합니다." },
    ],
  },
  {
    id: 2,
    name: "네일, 피어나",
    rating: 4.9,
    reviewCount: 312,
    address: "서울 마포구 양화로 45",
    imageUrl: "https://images.pexels.com/photos/3997388/pexels-photo-3997388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    services: [
      { name: "기본 케어", price: 20000, duration: "30분", description: "손톱 모양 정리 및 큐티클 제거가 포함됩니다." },
      { name: "젤 네일", price: 55000, duration: "1시간", description: "다양한 색상과 디자인 선택이 가능합니다." },
      { name: "웨딩 네일", price: 120000, duration: "1시간 30분", description: "가장 특별한 날을 위한 맞춤 디자인을 제공합니다." },
    ],
  },
    {
    id: 3,
    name: "더프리미엄 헤어",
    rating: 4.7,
    reviewCount: 88,
    address: "서울 서초구 서초대로 77",
    imageUrl: "https://images.pexels.com/photos/853427/pexels-photo-853427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    services: [
      { name: "뿌리 염색", price: 60000, duration: "1시간 30분", description: "자라난 모발의 색상을 균일하게 맞춥니다." },
      { name: "S컬 펌", price: 150000, duration: "2시간 30분", description: "자연스럽고 탄력 있는 웨이브를 연출합니다." },
    ],
  },
];

const services = [
  "미용실", "이발소", "네일 살롱", "스킨 케어", "눈썹 & 속눈썹", "마사지", "메이크업", "웰니스 & 데이 스파"
];

export default function SearchPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [filterPosition, setFilterPosition] = useState<{ top: number, left: number } | null>(null);
  const [isSortByModalOpen, setIsSortByModalOpen] = useState(false);
  const [sortByPosition, setSortByPosition] = useState<{ top: number, left: number } | null>(null);
  const [currentSort, setCurrentSort] = useState("추천");

  const filterButtonRef = useRef<HTMLButtonElement>(null);
  const sortByButtonRef = useRef<HTMLButtonElement>(null);

  const searchParams = useSearchParams();
  const city = searchParams.get('city');
  const category = searchParams.get('category');
  const [displayedSalons, setDisplayedSalons] = useState<typeof dummySalons>([]);

  useEffect(() => {
    // 페이지가 로드될 때 한 번만 실행되어 살롱 목록을 무작위로 섞습니다.
    const shuffled = [...dummySalons].sort(() => Math.random() - 0.5);
    setDisplayedSalons(shuffled);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger as soon as user scrolls
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleFilterClick = () => {
    if (filterButtonRef.current) {
      const rect = filterButtonRef.current.getBoundingClientRect();
      setFilterPosition({ top: rect.bottom, left: rect.left });
    }
    setIsSortByModalOpen(false); // Close sort modal if open
    setIsFilterModalOpen(prev => !prev);
  };

  const handleSortByClick = () => {
    if (sortByButtonRef.current) {
      const rect = sortByButtonRef.current.getBoundingClientRect();
      setSortByPosition({ top: rect.bottom, left: rect.left });
    }
    setIsFilterModalOpen(false); // Close filter modal if open
    setIsSortByModalOpen(prev => !prev);
  };

  const handleSortSelect = (option: string) => {
    setCurrentSort(option);
  };

  return (
    <>
      <div className="bg-gray-50 min-h-screen">
        <header className="sticky top-0 z-20">
          {/* Dark part of the header */}
          <div className="bg-gray-800 text-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Top bar with logo, search, and nav links (h-20) */}
              <div className="flex items-center justify-between h-20">
                <div className="flex-shrink-0">
                  <TgnLogo />
                </div>

                <div className="hidden md:flex flex-grow justify-center">
                  <div className="flex-grow max-w-2xl grid grid-cols-1 md:grid-cols-3 gap-2 bg-white rounded-lg p-1">
                    <div className="relative">
                       <MagnifyingGlassIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                       <input type="text" placeholder="검색, 서비스..." className="w-full pl-11 pr-4 py-2 text-sm rounded-md border-transparent bg-gray-100 text-gray-900 focus:ring-2 focus:ring-teal-400 focus:border-transparent" />
                    </div>
                    <div className="relative">
                       <MapPinIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                       <input type="text" defaultValue={city || ''} placeholder="어디?" className="w-full pl-11 pr-4 py-2 text-sm rounded-md border-transparent bg-gray-100 text-gray-900 focus:ring-2 focus:ring-teal-400 focus:border-transparent" />
                    </div>
                    <div className="relative">
                       <CalendarIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                       <input type="text" placeholder="언제?" className="w-full pl-11 pr-4 py-2 text-sm rounded-md border-transparent bg-gray-100 text-gray-900 focus:ring-2 focus:ring-teal-400 focus:border-transparent" />
                    </div>
                  </div>
                </div>

                <div className="hidden md:flex items-center space-x-4 text-sm font-medium">
                  <a href="#" className="hover:text-gray-300">비즈니스 목록</a>
                  <Link href="/community" className="hover:text-gray-300">커뮤니티</Link>
                  <a href="#" className="hover:text-gray-300">로그인</a>
                </div>
              </div>
              
              {/* Collapsible wrapper for the category bar (max-h-16) */}
              <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isScrolled ? 'max-h-0' : 'max-h-16'}`}>
                <div className="flex justify-center space-x-6 overflow-x-auto -mb-px pt-2 pb-3">
                  {services.map(service => (
                    <a key={service} href="#" className={`py-2 px-1 whitespace-nowrap text-sm font-medium transition-colors ${service === category ? 'text-white border-b-2 border-white' : 'text-gray-400 hover:text-white'}`}>
                      {service}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Filter and Sort bar - now part of the sticky header */}
          <div className="bg-gray-50/95 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-14">
                {/* Left side: Filters */}
                <div className="flex items-center space-x-2">
                  <button 
                    ref={filterButtonRef}
                    onClick={handleFilterClick}
                    className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors focus:outline-none"
                  >
                    <AdjustmentsHorizontalIcon className="h-5 w-5 text-gray-500" />
                    <span>필터</span>
                  </button>
                  <button
                    ref={sortByButtonRef}
                    onClick={handleSortByClick}
                    className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors focus:outline-none"
                  >
                    <span>정렬 기준: {currentSort}</span>
                    <ChevronDownIcon className="h-4 w-4 text-gray-500" />
                  </button>
                </div>

                {/* Right side: Map View */}
                <div>
                  <button className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-full shadow-sm hover:bg-gray-50 transition-colors">
                    <span>지도 보기</span>
                    <MapIcon className="h-5 w-5 text-gray-500" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main>
          <FeaturedSalons />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="mb-10">
              <h1 className="text-3xl font-extrabold text-gray-900">
                {`'${city || '전체'}'의 '${category || '모든 서비스'}' 검색 결과`}
              </h1>
              <p className="mt-2 text-sm text-gray-500">{dummySalons.length}개의 검색 결과</p>
            </div>

            <div className="space-y-6">
              {displayedSalons.map((salon) => (
                <div key={salon.id} className="flex bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
                  {/* Image Section */}
                  <div className="flex-shrink-0 w-64 md:w-80">
                    <div className="relative h-full">
                      <Image
                        src={salon.imageUrl}
                        alt={salon.name}
                        layout="fill"
                        objectFit="cover"
                        className="h-full w-full"
                      />
                      <div className="absolute top-4 left-4 bg-black bg-opacity-70 text-white text-center rounded-md px-3 py-2">
                        <p className="font-bold text-xl">{salon.rating.toFixed(1)}</p>
                        <p className="text-xs">{salon.reviewCount}개의 리뷰</p>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="flex-1 p-6 flex flex-col">
                    <div className="flex-1">
                      <div className="mb-4">
                        <h2 className="text-2xl font-bold text-gray-800">{salon.name}</h2>
                        <p className="text-sm text-gray-500 mt-1">{salon.address}</p>
                        {salon.promoted && (
                          <div className="mt-2 inline-flex items-center gap-x-1.5 rounded-md bg-gray-800 px-2 py-1 text-xs font-medium text-white">
                            <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 7.162V4.5a.75.75 0 00-1.5 0v1.468a5.992 5.992 0 00-4.34-1.933 6 6 0 100 12 5.992 5.992 0 004.34-1.933v1.468a.75.75 0 001.5 0V12.838a.75.75 0 00-.33-.626 5.25 5.25 0 00-8.34-4.088 1.5 1.5 0 01-2.258-2.258 8.25 8.25 0 0110.588 6.018.75.75 0 00.33-.626zM5 10a5 5 0 1110 0 5 5 0 01-10 0z" /></svg>
                            추천
                          </div>
                        )}
                      </div>

                      {/* Services List */}
                      <ul className="divide-y divide-gray-200">
                        {salon.services.map((service, index) => (
                          <li key={index} className="py-4 flex justify-between items-center">
                            <div className="flex-grow">
                              <p className="font-semibold text-gray-800">{service.name}</p>
                              <p className="text-sm text-gray-600 mt-1">{service.description}</p>
                            </div>
                            <div className="ml-6 flex-shrink-0 flex items-center gap-x-6">
                              <div className="text-right">
                                <p className="font-bold text-lg text-gray-800">{service.price.toLocaleString()}원</p>
                                <p className="text-sm text-gray-500">{service.duration}</p>
                              </div>
                              <button className="px-6 py-2.5 bg-teal-500 text-white font-bold rounded-md hover:bg-teal-600 transition-colors">
                                예약
                              </button>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
      <FilterModal 
        isOpen={isFilterModalOpen} 
        onClose={() => setIsFilterModalOpen(false)}
        position={filterPosition}
      />
      <SortByModal
        isOpen={isSortByModalOpen}
        onClose={() => setIsSortByModalOpen(false)}
        position={sortByPosition}
        currentSort={currentSort}
        onSelect={handleSortSelect}
      />
    </>
  );
} 