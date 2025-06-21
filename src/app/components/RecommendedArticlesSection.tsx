'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const articles = [
  {
    title: '셀프 케어를 위한 최고의 뷰티 팁',
    imgSrc: '/images/cosmetics-9086984_640.jpg',
    href: '#',
  },
  {
    title: '나에게 맞는 퍼스널 컬러 찾기',
    imgSrc: '/images/makeup-1289325_640.jpg',
    href: '#',
  },
  {
    title: '고급스러운 스타일을 위한 향수 가이드',
    imgSrc: '/images/chanel-4743979_1280.jpg',
    href: '#',
  },
  {
    title: '집에서 하는 스파 데이 아이디어',
    imgSrc: '/images/cosmetics-9086984_640.jpg', // Re-using image
    href: '#',
  },
  {
    title: '건강한 머릿결을 위한 5가지 습관',
    imgSrc: '/images/makeup-1289325_640.jpg', // Re-using image
    href: '#',
  }
];

const RecommendedArticlesSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">당신에게 추천합니다</h2>
          <div className="hidden sm:flex items-center gap-x-2">
            <button
              onClick={() => scroll('left')}
              className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition"
              aria-label="scroll left"
            >
              <ChevronLeftIcon className="h-5 w-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition"
              aria-label="scroll right"
            >
              <ChevronRightIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
        <div
          ref={scrollRef}
          className="flex gap-x-8 overflow-x-auto scroll-smooth scrollbar-hide -mb-4 pb-4"
        >
          {articles.map((article, idx) => (
            <Link key={idx} href={article.href} className="group block flex-shrink-0 w-full sm:w-80">
              <div className="overflow-hidden rounded-lg">
                <Image
                  src={article.imgSrc}
                  alt={article.title}
                  width={320}
                  height={200}
                  className="w-full h-50 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-800 group-hover:text-teal-600 transition text-center">
                {article.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecommendedArticlesSection; 