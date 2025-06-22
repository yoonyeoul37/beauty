'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

// 카드에 표시될 데이터의 타입을 정의합니다.
export interface Service {
  name: string;
  price: string;
  description: string;
  pros: string;
  cons: string;
}

export interface ShopData {
  id: number;
  name:string;
  location: string;
  rating: number;
  reviews: number;
  imageUrl: string;
  services: Service[];
}

// 펼쳐지는 메뉴 아이템 컴포넌트
const AccordionItem = ({ service }: { service: Service }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left py-3 px-1 focus:outline-none"
      >
        <span className="font-semibold text-gray-800">{service.name}</span>
        <div className="flex items-center gap-4">
          <span className="font-semibold text-pink-500">{service.price}</span>
          <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} className="text-gray-400" />
        </div>
      </button>
      {isOpen && (
        <div className="p-4 bg-gray-50 rounded-b-lg">
          <h4 className="font-bold text-sm text-gray-700 mb-2">어떤 시술인가요?</h4>
          <p className="text-sm text-gray-600 mb-4">{service.description}</p>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h5 className="font-bold text-sm text-green-600 mb-1">장점</h5>
              <p className="text-sm text-gray-600">{service.pros}</p>
            </div>
            <div>
              <h5 className="font-bold text-sm text-red-600 mb-1">단점</h5>
              <p className="text-sm text-gray-600">{service.cons}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};


// 메인 카드 컴포넌트
export default function ShopInfoCard({ shop }: { shop: ShopData }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="relative h-32">
        <Image
          src={shop.imageUrl}
          alt={`${shop.name} 매장 사진`}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-3">
        <h3 className="text-lg font-bold text-gray-900 mb-1">{shop.name}</h3>
        <p className="text-sm text-gray-500 mb-2">{shop.location}</p>
        <div className="flex items-center gap-1 text-sm text-gray-600 mb-2">
          <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
          <span className="font-bold">{shop.rating}</span>
          <span>({shop.reviews}개의 리뷰)</span>
        </div>
        
        {/* 서비스 목록 (펼쳐보기) */}
        <div>
          {shop.services.map((service, index) => (
            <AccordionItem key={index} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
} 