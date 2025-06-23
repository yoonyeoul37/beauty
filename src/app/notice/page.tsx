'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const notices = [
  {
    id: 5,
    category: '업데이트',
    title: 'v1.2 업데이트: 새로운 필터 기능 및 검색 속도 개선 안내',
    date: '2024.07.15',
    isImportant: true,
  },
  {
    id: 4,
    category: '시스템 점검',
    title: '서버 안정화를 위한 정기 점검 안내 (7/20 02:00 ~ 04:00)',
    date: '2024.07.12',
    isImportant: true,
  },
  {
    id: 3,
    category: '이벤트',
    title: '여름맞이 첫 예약 20% 할인 이벤트 종료 안내',
    date: '2024.07.10',
    isImportant: false,
  },
  {
    id: 2,
    category: '안내',
    title: '개인정보처리방침 개정 안내 (2024.07.01 시행)',
    date: '2024.06.25',
    isImportant: false,
  },
  {
    id: 1,
    category: '안내',
    title: '스타일로그 정식 서비스 오픈!',
    date: '2024.06.01',
    isImportant: false,
  },
];

const NoticePage = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <div className="bg-gray-100 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <AnimatedElement as="h1" className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            공지사항
          </AnimatedElement>
          <AnimatedElement as="p" className="mt-3 text-base sm:text-lg text-gray-600" delay={0.2}>
            스타일로그의 새로운 소식과 중요한 안내를 확인하세요.
          </AnimatedElement>
        </div>
      </div>
      
      {/* Notices List */}
      <div className="py-12 sm:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="border-b border-gray-300 mb-6">
            <div className="flex text-sm font-bold text-gray-500">
              <div className="w-1/6 py-3 text-center">번호</div>
              <div className="w-4/6 py-3">제목</div>
              <div className="w-1/6 py-3 text-center">작성일</div>
            </div>
          </div>
          <div className="divide-y divide-gray-200">
            {notices.map((notice, index) => (
              <AnimatedElement key={notice.id} delay={0.2 + index * 0.05}>
                <Link href={`/notice/${notice.id}`}>
                  <div className="flex items-center py-4 px-2 hover:bg-gray-50 transition-colors duration-200 cursor-pointer">
                    <div className="w-1/6 text-center text-sm text-gray-500">{notice.id}</div>
                    <div className="w-4/6">
                      <div className="flex items-center">
                        {notice.isImportant && <span className="text-xs font-bold text-white bg-pink-500 px-2 py-0.5 rounded-md mr-2">중요</span>}
                        <span className="font-semibold text-gray-800">{notice.title}</span>
                      </div>
                    </div>
                    <div className="w-1/6 text-center text-sm text-gray-500">{notice.date}</div>
                  </div>
                </Link>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable AnimatedElement component
interface AnimatedElementProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: keyof JSX.IntrinsicElements;
}

const AnimatedElement = ({ children, className, delay = 0, as = 'div' }: AnimatedElementProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const Tag = as;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <Tag
      ref={ref as any}
      className={`${className} transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      }`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </Tag>
  );
};

export default NoticePage; 