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
];

const RecommendedArticlesSection = () => {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">당신에게 추천합니다</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <Link key={idx} href={article.href} className="group block">
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