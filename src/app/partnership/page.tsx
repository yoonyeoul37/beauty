'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faStar, faChartLine, faHandshake, faLightbulb, faRocket, faGift, faShieldAlt } from '@fortawesome/free-solid-svg-icons';

export default function PartnershipPage() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const partnershipTypes = [
    {
      icon: faUsers,
      title: '뷰티 전문가',
      description: '메이크업 아티스트, 헤어 디자이너, 뷰티 인플루언서',
      benefits: ['수익 창출 기회', '브랜드 노출', '고객 확보', '전문 콘텐츠 플랫폼'],
      cta: '전문가 등록하기',
      href: '/partnership/experts'
    },
    {
      icon: faStar,
      title: '뷰티 브랜드',
      description: '화장품, 뷰티 도구, 스킨케어 브랜드',
      benefits: ['타겟 고객 확보', '판매 증가', '브랜드 인지도 향상', '데이터 분석'],
      cta: '브랜드 협력하기',
      href: '/partnership/brands'
    },
    {
      icon: faHandshake,
      title: '뷰티 비즈니스',
      description: '미용실, 네일샵, 뷰티샵',
      benefits: ['고객 유입 증가', '예약 관리 시스템', '마케팅 지원', '수익 공유'],
      cta: '비즈니스 등록하기',
      href: '/partnership/business'
    }
  ];

  const whyChooseTegana = [
    {
      icon: faRocket,
      title: '성장하는 플랫폼',
      description: '전문가 추천 기반의 신뢰할 수 있는 뷰티 플랫폼'
    },
    {
      icon: faGift,
      title: '다양한 수익 모델',
      description: '제품 추천, 콘텐츠 제작, 상담 등 다양한 수익 창출 기회'
    },
    {
      icon: faShieldAlt,
      title: '안전한 파트너십',
      description: '투명하고 공정한 수익 공유 및 지속적인 파트너십'
    },
    {
      icon: faChartLine,
      title: '데이터 기반 성장',
      description: '고객 데이터 분석을 통한 맞춤형 서비스 제공'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              파트너십
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              tegana와 함께 뷰티 시장의 새로운 가능성을 만들어가세요
            </p>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              전문가 추천 기반의 신뢰할 수 있는 플랫폼에서<br />
              당신의 전문성과 브랜드 가치를 높여보세요
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              파트너십 유형
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              다양한 분야의 파트너들과 함께 성장하는 생태계를 구축합니다
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnershipTypes.map((type, index) => (
              <div
                key={type.title}
                ref={(el) => (sectionRefs.current[index] = el)}
                className={`bg-gradient-to-br from-white to-slate-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-slate-200 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="text-center space-y-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-orange-400 rounded-2xl flex items-center justify-center mx-auto">
                    <FontAwesomeIcon icon={type.icon} className="w-8 h-8 text-white" />
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">
                      {type.title}
                    </h3>
                    <p className="text-slate-600 mb-6">
                      {type.description}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-slate-900">주요 혜택</h4>
                    <ul className="space-y-2">
                      {type.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-slate-600">
                          <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={type.href}
                    className="inline-block bg-gradient-to-r from-amber-400 to-orange-400 text-white px-6 py-3 rounded-xl font-semibold hover:from-amber-500 hover:to-orange-500 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    {type.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Tegana */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              tegana를 선택하는 이유
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              전문가 추천 기반의 신뢰할 수 있는 플랫폼에서<br />
              함께 성장할 수 있는 이유를 확인해보세요
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseTegana.map((reason, index) => (
              <div
                key={reason.title}
                ref={(el) => (sectionRefs.current[index + 3] = el)}
                className={`text-center space-y-4 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${(index + 3) * 200}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto">
                  <FontAwesomeIcon icon={reason.icon} className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  {reason.title}
                </h3>
                <p className="text-slate-600">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            지금 바로 시작하세요
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            tegana와 함께 뷰티 시장의 새로운 가능성을 만들어가세요.<br />
            전문가 추천 기반의 신뢰할 수 있는 플랫폼에서 당신의 가치를 높여보세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-amber-400 to-orange-400 text-slate-900 px-8 py-4 rounded-xl font-semibold hover:from-amber-500 hover:to-orange-500 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              문의하기
            </Link>
            <Link
              href="/about"
              className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300"
            >
              더 알아보기
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 