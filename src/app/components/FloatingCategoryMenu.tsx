"use client";
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCut, 
  faHandSparkles, 
  faGem, 
  faSpa, 
  faEye,
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

interface FloatingCategoryMenuProps {
  isVisible: boolean;
}

interface CategoryItem {
  id: string;
  name: string;
  icon: any;
  href: string;
  gradient: string;
  description: string;
}

const categories: CategoryItem[] = [
  { 
    id: 'hair', 
    name: '헤어', 
    icon: faCut, 
    href: '/haircut', 
    gradient: 'from-purple-500 to-pink-500',
    description: '컷, 펌, 염색'
  },
  { 
    id: 'nail', 
    name: '네일아트', 
    icon: faHandSparkles, 
    href: '/nail', 
    gradient: 'from-pink-500 to-red-500',
    description: '젤네일, 아트'
  },
  { 
    id: 'makeup', 
    name: '메이크업', 
    icon: faGem, 
    href: '/makeup', 
    gradient: 'from-yellow-500 to-orange-500',
    description: '베이직, 브라이덜'
  },
  { 
    id: 'skincare', 
    name: '피부관리', 
    icon: faSpa, 
    href: '/skincare', 
    gradient: 'from-green-500 to-teal-500',
    description: '에스테틱, 케어'
  },
  { 
    id: 'eyelash', 
    name: '속눈썹', 
    icon: faEye, 
    href: '/eyelash', 
    gradient: 'from-indigo-500 to-purple-500',
    description: '연장, 볼륨'
  },
  { 
    id: 'waxing', 
    name: '왁싱', 
    icon: faHandSparkles, 
    href: '/waxing', 
    gradient: 'from-amber-500 to-yellow-500',
    description: '제모, 관리'
  },
];

export default function FloatingCategoryMenu({ isVisible }: FloatingCategoryMenuProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <div 
      className={`fixed right-6 top-1/2 transform -translate-y-1/2 z-40 transition-all duration-500 ease-out ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
      }`}
    >
      <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
        {/* 토글 버튼 */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="w-full p-4 bg-gradient-to-r from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 transition-all duration-300 border-b border-gray-200/50"
        >
          <FontAwesomeIcon 
            icon={isCollapsed ? faChevronLeft : faChevronRight} 
            className="text-gray-600 text-sm transition-transform duration-300"
          />
        </button>

        {/* 카테고리 목록 */}
        <div className={`transition-all duration-500 ease-out ${isCollapsed ? 'w-16' : 'w-56'}`}>
          {categories.map((category, index) => (
            <Link
              key={category.id}
              href={category.href}
              className={`block p-4 hover:bg-gradient-to-r hover:from-gray-50/80 hover:to-gray-100/80 transition-all duration-300 border-b border-gray-100/50 last:border-b-0 group ${
                activeCategory === category.id ? 'bg-gradient-to-r from-blue-50/80 to-indigo-50/80 border-l-4 border-l-blue-500' : ''
              }`}
              onClick={() => setActiveCategory(category.id)}
              style={{
                animationDelay: `${index * 50}ms`
              }}
            >
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-2xl flex items-center justify-center bg-gradient-to-r ${category.gradient} text-white text-sm flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <FontAwesomeIcon icon={category.icon} />
                </div>
                {!isCollapsed && (
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold text-gray-800 group-hover:text-gray-900 transition-colors">
                      {category.name}
                    </div>
                    <div className="text-xs text-gray-500 group-hover:text-gray-600 transition-colors mt-1">
                      {category.description}
                    </div>
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 