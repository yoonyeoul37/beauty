"use client";
import React, { useState } from 'react';
import Link from 'next/link';

interface SubCategory {
  name: string;
  href: string;
}

interface Category {
  name: string;
  href: string;
  subCategories: SubCategory[];
}

const categories: Category[] = [
  {
    name: '헤어',
    href: '/hair',
    subCategories: [
      { name: '전체', href: '/hair' },
      { name: '컷', href: '/haircut' },
      { name: '펌', href: '/perm' },
      { name: '염색', href: '/coloring' },
      { name: '클리닉', href: '/hair/clinic' },
      { name: '스타일링', href: '/hair/styling' },
    ],
  },
  {
    name: '네일아트',
    href: '/nail',
    subCategories: [
      { name: '전체', href: '/nail' },
      { name: '젤네일', href: '/nail/gel' },
      { name: '네일아트', href: '/nail/art' },
      { name: '네일케어', href: '/nail/care' },
      { name: '패디큐어', href: '/nail/pedicure' },
    ],
  },
  { name: '메이크업', href: '/makeup', subCategories: [] },
  { name: '피부관리', href: '/skincare', subCategories: [] },
  { name: '속눈썹', href: '/eyelash', subCategories: [] },
  { name: '왁싱', href: '/waxing', subCategories: [] },
  { name: '반영구', href: '/semi-permanent', subCategories: [] },
  { name: '두피케어', href: '/scalp-care', subCategories: [] },
  { name: '마사지', href: '/massage', subCategories: [] },
  { name: '타투', href: '/tattoo', subCategories: [] },
];

const CategoryNav = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>('헤어');

  const handleCategoryClick = (categoryName: string) => {
    setActiveCategory(prev => prev === categoryName ? null : categoryName);
  };

  const activeSubCategories = categories.find(c => c.name === activeCategory)?.subCategories || [];

  return (
    <nav className="bg-white shadow-md sticky top-[80px] z-30">
      <div className="max-w-[1240px] mx-auto">
        {/* Main Categories */}
        <div className="flex justify-between items-center py-3">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => handleCategoryClick(category.name)}
              className={`px-4 py-2 text-base font-semibold transition-colors duration-300 ${
                activeCategory === category.name
                  ? 'text-pink-500 border-b-2 border-pink-500'
                  : 'text-gray-600 hover:text-pink-500'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Sub Categories */}
        {activeCategory && activeSubCategories.length > 0 && (
          <div className="bg-gray-50 border-t border-gray-200">
            <div className="max-w-[1240px] mx-auto flex items-center py-3 space-x-6">
              {activeSubCategories.map((sub) => (
                <Link key={sub.name} href={sub.href}>
                  <div className="text-gray-700 hover:text-pink-500 font-medium transition-colors">
                    {sub.name}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default CategoryNav; 