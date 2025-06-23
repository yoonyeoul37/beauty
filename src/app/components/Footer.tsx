'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <footer 
      ref={footerRef}
      className="bg-zinc-900 border-t border-zinc-700 mt-16 overflow-hidden"
    >
      <div className={`max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 text-sm text-zinc-400 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* 로고 및 기본 정보 */}
          <div className={`space-y-4 transition-all duration-700 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
            <h3 className="text-2xl font-bold text-white">스타일로그</h3>
            <div className="space-y-1">
              <p><strong>회사명:</strong> 태가나주식회사</p>
              <p><strong>대표:</strong> 윤여울</p>
              <p><strong>주소:</strong> 서울특별시 서초구 마방로6길 13 4층</p>
              <p><strong>고객센터:</strong> 1533-8237 (평일 10:00 - 18:00)</p>
            </div>
          </div>

          {/* 링크 */}
          <div className="flex flex-col md:flex-row gap-8">
            <div className={`space-y-2 transition-all duration-700 ease-out delay-100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
              <h4 className="font-semibold text-zinc-200">고객지원</h4>
              <ul className="space-y-1">
                <li><Link href="/notice" className="footer-link">공지사항</Link></li>
                <li><Link href="/faq" className="footer-link">자주 묻는 질문</Link></li>
                <li><Link href="/contact" className="footer-link">1:1 문의</Link></li>
              </ul>
            </div>
            <div className={`space-y-2 transition-all duration-700 ease-out delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
              <h4 className="font-semibold text-zinc-200">회사소개</h4>
              <ul className="space-y-1">
                <li><Link href="/about" className="footer-link">스타일로그 팀</Link></li>
                <li><Link href="/careers" className="footer-link">채용</Link></li>
              </ul>
            </div>
            <div className={`space-y-2 transition-all duration-700 ease-out delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
              <h4 className="font-semibold text-zinc-200">정책</h4>
              <ul className="space-y-1">
                <li><Link href="/terms" className="footer-link">이용약관</Link></li>
                <li><Link href="/privacy" className="footer-link font-bold">개인정보처리방침</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* 하단 저작권 */}
        <div className={`mt-8 border-t border-zinc-700 pt-8 text-center text-xs transition-opacity duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <p>&copy; {new Date().getFullYear()} StyleLog Corp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 