"use client"
import { useState } from 'react';
import Link from 'next/link';

const cities = [
  "서울", "경기", "인천", "부산", "대구", "광주", "대전", "울산",
  "세종", "강원", "충북", "충남", "전북", "전남", "경북", "경남", "제주"
];

const services = [
  "이발소", "미용실", "마사지", "타투샵", "제모", "네일 살롱", 
  "눈썹 & 속눈썹", "메이크업", "아크릴 네일", "상자 땋기", "드레드락",
  "여성 헤어컷", "젤 네일", "남성 헤어컷", "네일 디자인", "페디큐어"
];

export default function CitySearchSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState<string | null>(null);

  const handleCitySelect = (city: string) => {
    setSelectedCity(city);
    setIsOpen(false);
  };

  return (
    <section className="w-full py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          지역별 전문가 찾기
        </h2>
        <p className="text-gray-500 mb-8">원하는 지역을 선택하여 최고의 전문가를 찾아보세요.</p>
        <div className="relative inline-block text-left w-full max-w-xs">
          <div>
            <button 
              type="button" 
              className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" 
              onClick={() => setIsOpen(!isOpen)}
            >
              {selectedCity || "지역 선택"}
              <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          {isOpen && (
            <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
              <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                {cities.map((city) => (
                  <button 
                    key={city} 
                    onClick={() => handleCitySelect(city)}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" 
                    role="menuitem"
                  >
                    {city}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
        
        {selectedCity && (
            <div className="mt-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">{selectedCity}의 서비스</h3>
                <div className="flex flex-wrap justify-center gap-4">
                {services.map((service) => (
                    <Link 
                        key={service} 
                        href={`/search?city=${encodeURIComponent(selectedCity)}&category=${encodeURIComponent(service)}`}
                        className="bg-gray-100 text-gray-700 hover:bg-indigo-100 hover:text-indigo-700 rounded-full px-4 py-2 text-sm font-medium transition-colors"
                    >
                        {service}
                    </Link>
                ))}
                </div>
            </div>
        )}
      </div>
    </section>
  );
} 