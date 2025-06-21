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
      { name: "머리 자르기. 테이퍼. 대머리 페이즈 등", price: 30000, duration: "35분" },
      { name: "헤어컷과 스트레이트 면도기", price: 45000, duration: "55분" },
      { name: "수염 및 눈썹 정리", price: 30000, duration: "35분" },
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
      { name: "여성 컷", price: 30000 },
      { name: "남성 컷", price: 25000 },
      { name: "클리닉", price: 80000 },
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
      { name: "기본 케어", price: 20000 },
      { name: "젤 네일", price: 55000 },
      { name: "웨딩 네일", price: 120000 },
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
      { name: "뿌리 염색", price: 60000 },
      { name: "S컬 펌", price: 150000 },
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

            <div className="space-y-8">
              {dummySalons.map((salon) => {
                if (salon.promoted) {
                  return (
                    <div key={salon.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg transition-shadow duration-300">
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/3 flex-shrink-0">
                          <Image
                            src={salon.imageUrl}
                            alt={salon.name}
                            width={300}
                            height={300}
                            className="object-cover h-full w-full"
                          />
                        </div>
                        <div className="flex-1 p-6 flex flex-col justify-between">
                          <div>
                            <div className="flex justify-between items-start">
                              <div>
                                <div className="flex items-center mb-2">
                                  <h2 className="text-xl font-bold text-gray-800">{salon.name}</h2>
                                  <div className="ml-4 flex items-center">
                                    <StarIcon className="h-5 w-5 text-yellow-400" />
                                    <span className="ml-1 text-gray-600 font-medium">{salon.rating}</span>
                                    <span className="ml-2 text-sm text-gray-500">({salon.reviewCount})</span>
                                  </div>
                                </div>
                                <p className="text-sm text-gray-500 mb-2">{salon.address}</p>
                                <div className="flex items-center text-xs text-gray-500">
                                  <span>Promoted</span>
                                  <InformationCircleIcon className="h-4 w-4 ml-1 text-gray-400" />
                                </div>
                              </div>
                            </div>
                            
                            <div className="border-t border-gray-100 my-4"></div>

                            <ul className="space-y-3">
                              {salon.services.slice(0, 3).map((service, index) => (
                                <li key={index} className="flex justify-between items-center text-sm">
                                  <div className="flex flex-col">
                                    <span className="text-gray-800 font-medium">{service.name}</span>
                                    <span className="text-gray-500">{service.duration}</span>
                                  </div>
                                  <div className="flex items-center gap-x-3">
                                    <span className="font-semibold text-gray-800 text-base">{service.price.toLocaleString()}원</span>
                                    <button className="px-5 py-2 bg-teal-500 text-white font-bold rounded-md hover:bg-teal-600 transition-colors text-xs">
                                      선택
                                    </button>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                }
                return (
                  <div key={salon.id} className="flex bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
                    <div className="flex-shrink-0">
                      <Image
                        src={salon.imageUrl}
                        alt={salon.name}
                        width={250}
                        height={250}
                        className="object-cover h-full"
                      />
                    </div>
                    <div className="flex-1 p-6 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center mb-1">
                          <h2 className="text-xl font-bold text-gray-800">{salon.name}</h2>
                          <div className="ml-4 flex items-center">
                            <StarIcon className="h-5 w-5 text-yellow-400" />
                            <span className="ml-1 text-gray-600 font-medium">{salon.rating}</span>
                            <span className="ml-2 text-sm text-gray-500">({salon.reviewCount})</span>
                          </div>
                        </div>
                        <p className="text-sm text-gray-500 mb-4">{salon.address}</p>
                        
                        <div className="border-t border-gray-100 my-4"></div>

                        <ul className="space-y-2">
                          {salon.services.map((service, index) => (
                            <li key={index} className="flex justify-between items-center text-sm">
                              <span className="text-gray-700">{service.name}</span>
                              <span className="font-semibold text-gray-800">{service.price.toLocaleString()}원</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="mt-6 flex justify-end">
                        <button className="px-6 py-2 bg-teal-500 text-white font-semibold rounded-md hover:bg-teal-600 transition-colors">
                          상세보기 및 예약
                        </button>
                      </div>
                    </div>
                  </div>
                )
              })}
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