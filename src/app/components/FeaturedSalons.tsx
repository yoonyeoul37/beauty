'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from '@heroicons/react/24/solid';

const featuredSalons = [
  {
    id: 1,
    name: '프레시컷 바버샵',
    rating: 4.9,
    reviewCount: 367,
    imageUrl: 'https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: '바버샵'
  },
  {
    id: 2,
    name: '제이스 인상',
    rating: 5.0,
    reviewCount: 155,
    imageUrl: 'https://images.pexels.com/photos/4577410/pexels-photo-4577410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: '헤어살롱'
  },
  {
    id: 3,
    name: '3단계 이발소 - 디',
    rating: 4.9,
    reviewCount: 222,
    imageUrl: 'https://images.pexels.com/photos/3993398/pexels-photo-3993398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: '바버샵'
  },
  {
    id: 4,
    name: '조모 다 바버',
    rating: 4.8,
    reviewCount: 346,
    imageUrl: 'https://images.pexels.com/photos/853427/pexels-photo-853427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: '바버샵'
  },
  {
    id: 5,
    name: '네일, 피어나',
    rating: 4.9,
    reviewCount: 312,
    imageUrl: 'https://images.pexels.com/photos/3997388/pexels-photo-3997388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: '네일살롱'
  },
];

const FeaturedSalons = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-800">추천 업체</h2>
          <div className="hidden sm:flex items-center gap-x-2">
             <button
              onClick={() => scroll('left')}
              className="p-2 rounded-full bg-white text-gray-600 hover:bg-gray-100 transition shadow"
              aria-label="scroll left"
            >
              <ChevronLeftIcon className="h-5 w-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-2 rounded-full bg-white text-gray-600 hover:bg-gray-100 transition shadow"
              aria-label="scroll right"
            >
              <ChevronRightIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
        <div
          ref={scrollRef}
          className="flex gap-x-6 overflow-x-auto scroll-smooth scrollbar-hide pb-4"
        >
          {featuredSalons.map((salon) => (
            <div key={salon.id} className="group block flex-shrink-0 w-72 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <Link href="#" className="block">
                <div className="relative h-40 overflow-hidden rounded-t-lg">
                  <Image
                    src={salon.imageUrl}
                    alt={salon.name}
                    layout="fill"
                    objectFit="cover"
                    className="group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white text-xs font-bold py-1 px-2 rounded-full flex items-center">
                    <StarIcon className="h-3 w-3 text-yellow-300 mr-1" />
                    <span>{salon.rating.toFixed(1)}</span>
                    <span className="ml-1">({salon.reviewCount})</span>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-xs text-teal-600 font-semibold">{salon.category}</p>
                  <h3 className="mt-1 text-base font-bold text-gray-900 truncate">
                    {salon.name}
                  </h3>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedSalons; 