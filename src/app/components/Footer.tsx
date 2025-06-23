'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faUser, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

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

    const currentRef = footerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const companyInfo = [
    { icon: faBuilding, label: '회사명', value: '태가나주식회사' },
    { icon: faUser, label: '대표', value: '윤여울' },
    { icon: faMapMarkerAlt, label: '주소', value: '서울특별시 서초구 마방로6길 13 4층' },
    { icon: faPhoneAlt, label: '고객센터', value: '1533-8237 (평일 10:00 - 18:00)' },
  ];

  return (
    <footer 
      ref={footerRef}
      className="bg-zinc-900 border-t border-zinc-700 mt-16 overflow-hidden"
    >
      <div className={`max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 text-sm text-zinc-400 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* 로고 및 기본 정보 */}
          <div className={`space-y-4 transition-all duration-700 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
            <Link href="/" className="block">
              <h3 className="text-2xl font-bold text-white mb-4 hover:text-amber-400 transition-colors duration-300 cursor-pointer">
                스타일로그
              </h3>
            </Link>
            <div className="space-y-2">
              {companyInfo.map((info, index) => (
                <div 
                  key={info.label}
                  className="flex items-center transition-all duration-500 ease-out"
                  style={{ 
                    transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
                    opacity: isVisible ? 1 : 0,
                    transitionDelay: `${100 + index * 100}ms`
                  }}
                >
                  <FontAwesomeIcon icon={info.icon} className="w-4 h-4 mr-3 text-zinc-500" />
                  <p>
                    <strong className="font-semibold text-zinc-300">{info.label}:</strong> {info.value}
                  </p>
                </div>
              ))}
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