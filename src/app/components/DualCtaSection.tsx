"use client"
import { useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import TgnBizLogo from './TgnBizLogo';
import Link from "next/link";

// 고객용 로고
const CustomerLogo = () => (
  <svg 
    width="48" 
    height="48" 
    viewBox="0 0 100 100" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className="rounded-xl shadow-sm"
  >
    <rect width="100" height="100" rx="20" fill="#14b8a6"/>
    <path 
      d="M 50 28 V 72 M 25 50 C 40 45, 60 45, 75 50" 
      stroke="white" 
      strokeWidth="8" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <text 
      x="60" 
      y="77" 
      fontFamily="'Comic Sans MS', 'Chalkboard SE', 'Marker Felt', sans-serif" 
      fontSize="30" 
      fontWeight="bold" 
      fill="white"
    >
      gn
    </text>
  </svg>
);

// 고객용 CTA 카드
const CustomerCtaCard = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSendLink = () => {
    if (phoneNumber) {
      alert(`입력하신 번호 ${phoneNumber}로 앱 다운로드 링크를 전송합니다. (테스트)`);
    } else {
      alert('전화번호를 입력해주세요.');
    }
  };

  return (
    <div className="flex-1 bg-[#e6f6f6] rounded-3xl p-8 lg:p-10 flex flex-col overflow-hidden text-center">
      {/* --- 상단 콘텐츠 영역 --- */}
      <div className="min-h-[210px]">
        <div className="flex items-center justify-center gap-3 mb-4">
          <CustomerLogo />
          <span className="font-bold text-gray-700 text-sm">태가나 앱 - iOS, 안드로이드</span>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">앱 다운로드</h3>
        <p className="text-gray-600 text-sm leading-6 mb-6">
          다음 약속을 찾아 언제 어디서나 즉시 예약하세요.
          <br/>
          앱 다운로드 링크를 문자로 보내드립니다.
        </p>
        <div className="flex items-center gap-2 max-w-sm mx-auto">
          <input 
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="전화번호"
            className="w-full h-11 bg-white rounded-lg px-4 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all shadow-sm"
          />
          <button 
            onClick={handleSendLink}
            className="flex-shrink-0 bg-teal-500 text-white font-bold h-11 px-6 rounded-lg hover:bg-teal-600 transition-colors shadow-teal-500/20 shadow-lg"
          >
            다운로드
          </button>
        </div>
      </div>
      {/* --- 하단 이미지 영역 --- */}
      <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
        <Image
          className="absolute inset-0 w-full h-full object-cover"
          src="https://images.pexels.com/photos/3993447/pexels-photo-3993447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Person getting a haircut"
          fill
          style={{ objectFit: 'cover' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>
    </div>
  );
};

// 비즈니스용 CTA 카드
const BusinessCtaCard = () => {
  return (
    <div className="flex-1 bg-gray-800 rounded-2xl p-8 md:p-12 flex flex-col">
      <h3 className="text-3xl font-extrabold text-white">
        비즈니스 파트너
      </h3>
      <p className="text-gray-300 text-sm leading-6 mt-2 mb-6">
        더 나은 비즈니스 운영을 위해 시작하세요. 캘린더,
        <br/>
        예약, 마케팅, 결제가 모두 하나로 이루어집니다.
      </p>
      <div className="mt-auto">
        <Link href="/business" className="inline-block bg-white text-gray-800 font-bold py-3 px-6 rounded-lg hover:bg-gray-200 transition-colors">
          비즈니스 앱 보기
        </Link>
      </div>
      {/* --- 하단 이미지 영역 --- */}
      <div className="relative bg-gray-800 rounded-2xl shadow-xl overflow-hidden mt-8 -mx-10 -mb-10 h-48">
        <Image
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          src="https://images.pexels.com/photos/705255/pexels-photo-705255.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Salon interior"
          fill
          style={{ objectFit: 'cover' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>
    </div>
  );
};

export default function DualCtaSection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* 고객용 CTA */}
          <div className="bg-teal-50 rounded-2xl p-8 md:p-12 flex flex-col">
            <h3 className="text-3xl font-extrabold text-gray-800">
              최고의 뷰티 경험
            </h3>
            <p className="text-gray-600 text-sm leading-6 mt-2 mb-6">
              내 주변 최고의 전문가를 찾아보고,
              <br/>
              쉽고 빠르게 예약하세요.
            </p>
            <div className="mt-auto">
              <Link href="/search" className="inline-block bg-teal-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-teal-600 transition-colors">
                예약 시작하기
              </Link>
            </div>
            {/* --- 하단 이미지 영역 --- */}
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden mt-8 -mx-10 -mb-10 h-48">
              <Image
                className="absolute inset-0 w-full h-full object-cover"
                src="https://images.pexels.com/photos/3993447/pexels-photo-3993447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Person getting a haircut"
                fill
                style={{ objectFit: 'cover' }}
              />
               <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>

          {/* 비즈니스용 CTA */}
          <div className="bg-gray-800 rounded-2xl p-8 md:p-12 flex flex-col">
            <h3 className="text-3xl font-extrabold text-white">
              비즈니스 파트너
            </h3>
            <p className="text-gray-300 text-sm leading-6 mt-2 mb-6">
              더 나은 비즈니스 운영을 위해 시작하세요. 캘린더,
              <br/>
              예약, 마케팅, 결제가 모두 하나로 이루어집니다.
            </p>
            <div className="mt-auto">
              <Link href="/business" className="inline-block bg-white text-gray-800 font-bold py-3 px-6 rounded-lg hover:bg-gray-200 transition-colors">
                비즈니스 앱 보기
              </Link>
            </div>
             {/* --- 하단 이미지 영역 --- */}
             <div className="relative bg-gray-800 rounded-2xl shadow-xl overflow-hidden mt-8 -mx-10 -mb-10 h-48">
              <Image
                className="absolute inset-0 w-full h-full object-cover opacity-50"
                src="https://images.pexels.com/photos/705255/pexels-photo-705255.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Salon interior"
                fill
                style={{ objectFit: 'cover' }}
              />
               <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
} 