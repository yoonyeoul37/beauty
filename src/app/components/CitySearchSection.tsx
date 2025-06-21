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
  const [selectedCity, setSelectedCity] = useState<string | null>(null);

  if (selectedCity) {
    return (
      <section className="w-full py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <button 
            onClick={() => setSelectedCity(null)}
            className="flex items-center text-3xl font-bold text-gray-800 mb-12 hover:text-teal-500 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
            {selectedCity}
          </button>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-4">
            {services.map((service) => (
              <Link 
                key={service} 
                href={`/search?city=${encodeURIComponent(selectedCity)}&category=${encodeURIComponent(service)}`}
                className="text-gray-600 hover:text-teal-500 transition-colors"
              >
                {service}
              </Link>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          지역별 전문가 찾기
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-4">
          {cities.map((city) => (
            <button 
              key={city} 
              onClick={() => setSelectedCity(city)}
              className="flex items-center justify-center text-gray-600 hover:text-teal-500 transition-colors"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4 mr-2" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span>{city}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
} 