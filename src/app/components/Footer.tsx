'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faUser, faMapMarkerAlt, faPhoneAlt, faEnvelope, faInstagram, faTwitter, faFacebook, faYoutube } from '@fortawesome/free-solid-svg-icons';
import { faInstagram as faInstagramBrand, faTwitter as faTwitterBrand, faFacebook as faFacebookBrand, faYoutube as faYoutubeBrand } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');

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

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 뉴스레터 구독 로직
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  const companyInfo = [
    { icon: faBuilding, label: 'Company', value: '태가나주식회사' },
    { icon: faUser, label: 'CEO', value: '윤여울' },
    { icon: faMapMarkerAlt, label: 'Address', value: '서울특별시 서초구 마방로6길 13 4층' },
    { icon: faPhoneAlt, label: 'Customer Service', value: '1533-8237 (평일 10:00 - 18:00)' },
    { icon: faEnvelope, label: 'Email', value: 'contact@tegana.com' },
  ];

  const socialLinks = [
    { icon: faInstagramBrand, href: '#', label: 'Instagram' },
    { icon: faTwitterBrand, href: '#', label: 'Twitter' },
    { icon: faFacebookBrand, href: '#', label: 'Facebook' },
    { icon: faYoutubeBrand, href: '#', label: 'YouTube' },
  ];

  return (
    <footer 
      ref={footerRef}
      className="relative bg-gradient-to-br from-black via-gray-900 to-black border-t border-white/10 mt-16 overflow-hidden"
    >
      {/* 배경 패턴 */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className={`max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 relative z-10 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        
        {/* 메인 콘텐츠 */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
          
          {/* 로고 및 회사 정보 */}
          <div className={`lg:col-span-2 space-y-6 transition-all duration-700 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
            <Link href="/" className="block">
              <h3 className="text-3xl font-bold text-white mb-4 hover:text-amber-400 transition-colors duration-300 cursor-pointer">
                tegana
              </h3>
            </Link>
            <p className="text-slate-300 leading-relaxed max-w-md">
              전문가가 추천하는 뷰티 플랫폼으로, 더 아름다운 당신을 만나보세요.
            </p>
            
            {/* 회사 정보 */}
            <div className="space-y-3">
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
                  <FontAwesomeIcon icon={info.icon} className="w-4 h-4 mr-3 text-amber-400" />
                  <p className="text-slate-300">
                    <strong className="font-semibold text-white">{info.label}:</strong> {info.value}
                  </p>
                </div>
              ))}
            </div>

            {/* 소셜 미디어 */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center text-white hover:bg-amber-400 hover:text-slate-900 transition-all duration-300 hover:scale-110"
                  style={{
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                    opacity: isVisible ? 1 : 0,
                    transitionDelay: `${600 + index * 100}ms`
                  }}
                >
                  <FontAwesomeIcon icon={social.icon} className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* 링크 섹션 */}
          <div className={`space-y-8 transition-all duration-700 ease-out delay-100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
            <div className="space-y-4">
              <h4 className="font-bold text-white text-lg">고객지원</h4>
              <ul className="space-y-3">
                <li><Link href="/notice" className="text-slate-300 hover:text-amber-400 transition-colors duration-200">공지사항</Link></li>
                <li><Link href="/faq" className="text-slate-300 hover:text-amber-400 transition-colors duration-200">자주 묻는 질문</Link></li>
                <li><Link href="/contact" className="text-slate-300 hover:text-amber-400 transition-colors duration-200">1:1 문의</Link></li>
                <li><Link href="/review" className="text-slate-300 hover:text-amber-400 transition-colors duration-200">리뷰</Link></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-bold text-white text-lg">회사소개</h4>
              <ul className="space-y-3">
                <li><Link href="/about" className="text-slate-300 hover:text-amber-400 transition-colors duration-200">태가나 팀</Link></li>
                <li><Link href="/careers" className="text-slate-300 hover:text-amber-400 transition-colors duration-200">채용</Link></li>
                <li><Link href="/business" className="text-slate-300 hover:text-amber-400 transition-colors duration-200">비즈니스</Link></li>
                <li><Link href="/partnership" className="text-slate-300 hover:text-amber-400 transition-colors duration-200">파트너십</Link></li>
              </ul>
            </div>
          </div>

          {/* 뉴스레터 구독 */}
          <div className={`space-y-6 transition-all duration-700 ease-out delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
            <div className="space-y-4">
              <h4 className="font-bold text-white text-lg">뉴스레터 구독</h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                최신 뷰티 트렌드와 특별한 혜택을 받아보세요
              </p>
              
              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="이메일 주소를 입력하세요"
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all duration-300"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-400 to-orange-400 text-slate-900 px-4 py-3 rounded-xl font-semibold hover:from-amber-500 hover:to-orange-500 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  구독하기
                </button>
              </form>
            </div>

            {/* 정책 링크 */}
            <div className="space-y-3">
              <h4 className="font-bold text-white text-lg">정책</h4>
              <ul className="space-y-2">
                <li><Link href="/terms" className="text-slate-300 hover:text-amber-400 transition-colors duration-200 text-sm">이용약관</Link></li>
                <li><Link href="/privacy" className="text-slate-300 hover:text-amber-400 transition-colors duration-200 text-sm font-semibold">개인정보처리방침</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* 하단 저작권 */}
        <div className={`border-t border-white/10 pt-8 text-center transition-opacity duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} TEGANA Corp. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 