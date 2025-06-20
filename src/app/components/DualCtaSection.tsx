"use client"
import { useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import TgnLogo from './TgnLogo';
import TgnBizLogo from './TgnBizLogo';

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
          <TgnLogo />
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
      <div className="flex-1 flex items-end -mx-10 -mb-10 mt-8">
        <Image 
          src="https://images.pexels.com/photos/2835266/pexels-photo-2835266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Cosmetic product"
          width={600}
          height={400}
          className="w-full object-cover"
        />
      </div>
    </div>
  );
};

// 비즈니스용 CTA 카드
const BusinessCtaCard = () => {
  return (
    <div className="flex-1 bg-gray-100 rounded-3xl p-8 lg:p-10 flex flex-col overflow-hidden text-center">
      {/* --- 상단 콘텐츠 영역 --- */}
      <div className="min-h-[210px]">
        <div className="flex items-center justify-center gap-3 mb-4">
          <TgnBizLogo />
          <span className="font-bold text-gray-700 text-sm">TganaBiz 앱 - ios, Android</span>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">파트너용 앱</h3>
        <p className="text-gray-600 text-sm leading-6 mb-6">
          더 나은 비즈니스 운영을 위해 시작하세요. 캘린더,
          <br/>
          예약, 마케팅, 결제가 모두 하나로 이루어집니다.
        </p>
        <button className="bg-gray-900 text-white font-bold h-11 px-6 rounded-lg hover:bg-black transition-colors inline-flex items-center gap-2 shadow-lg shadow-gray-900/20">
          내 비즈니스 성장
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
       </div>
      {/* --- 하단 이미지 영역 --- */}
      <div className="flex-1 flex items-end -mx-10 -mb-10 mt-8">
         <Image 
            src="https://images.pexels.com/photos/5676016/pexels-photo-5676016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Business app illustration"
            width={600}
            height={400}
            className="w-full object-cover opacity-80"
          />
      </div>
    </div>
  );
};


export default function DualCtaSection() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8 h-[800px]">
          <CustomerCtaCard />
          <BusinessCtaCard />
        </div>
      </div>
    </section>
  );
} 