'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faChartLine, faUsers, faGift, faRocket, faShieldAlt, faLightbulb, faHandshake } from '@fortawesome/free-solid-svg-icons';

export default function BrandsPartnershipPage() {
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

  const benefits = [
    {
      icon: faUsers,
      title: '정확한 타겟 고객',
      description: '뷰티 전문가를 통한 정확한 타겟 고객 확보',
      details: ['전문가 추천으로 신뢰도 향상', '정확한 타겟팅', '고품질 고객 유입']
    },
    {
      icon: faChartLine,
      title: '판매 증가',
      description: '전문가 추천을 통한 제품 판매 증가',
      details: ['평균 30-75% 매출 향상', '재구매율 증가', '브랜드 인지도 향상']
    },
    {
      icon: faLightbulb,
      title: '데이터 분석',
      description: '고객 행동 패턴 및 시장 트렌드 분석',
      details: ['고객 선호도 분석', '시장 트렌드 예측', '제품 개발 인사이트']
    },
    {
      icon: faRocket,
      title: '브랜드 마케팅',
      description: '전문가를 통한 효과적인 브랜드 마케팅',
      details: ['전문가 콘텐츠 마케팅', '브랜드 스토리텔링', '소셜 미디어 연동']
    }
  ];

  const collaborationModels = [
    {
      title: '제품 추천',
      description: '전문가가 직접 추천하는 제품으로 신뢰도 향상',
      revenue: '판매 수수료 15-20%',
      example: '월 100개 제품 판매 시 150-200만원 수익'
    },
    {
      title: '브랜드 콘텐츠',
      description: '전문가가 제작하는 브랜드 콘텐츠',
      revenue: '콘텐츠당 20-100만원',
      example: '월 5개 콘텐츠 제작 시 100-500만원'
    },
    {
      title: '브랜드 앰버서더',
      description: '전문가와의 장기 브랜드 파트너십',
      revenue: '월 100-500만원',
      example: '연간 계약 시 1,200-6,000만원'
    },
    {
      title: '이벤트 협력',
      description: '뷰티 이벤트 및 프로모션 협력',
      revenue: '이벤트별 협상',
      example: '대형 이벤트 시 500-2,000만원'
    }
  ];

  const successStories = [
    {
      brand: '클린뷰티 브랜드 A',
      category: '스킨케어',
      story: 'tegana 전문가 추천으로 3개월 만에 매출 150% 증가. 특히 20-30대 고객층에서 큰 반응을 얻었습니다.',
      growth: '매출 150% 증가'
    },
    {
      brand: 'K-뷰티 브랜드 B',
      category: '메이크업',
      story: '전문가 콘텐츠 마케팅으로 브랜드 인지도가 크게 향상되었고, 온라인 판매가 급증했습니다.',
      growth: '온라인 판매 200% 증가'
    },
    {
      brand: '네일 브랜드 C',
      category: '네일케어',
      story: '네일 전문가들과의 협력으로 전문가 시장에서 입지를 다졌고, 고객 만족도가 크게 향상되었습니다.',
      growth: '고객 만족도 95%'
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
              뷰티 브랜드
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              전문가 추천으로 브랜드 가치를 높이세요
            </p>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              뷰티 전문가들과 함께<br />
              신뢰할 수 있는 브랜드로 성장하세요
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/partnership/brands/register"
                className="bg-gradient-to-r from-amber-400 to-orange-400 text-slate-900 px-8 py-4 rounded-xl font-semibold hover:from-amber-500 hover:to-orange-500 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                브랜드 협력하기
              </Link>
              <Link
                href="#benefits"
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300"
              >
                혜택 알아보기
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              브랜드가 얻는 혜택
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              tegana와 함께하면 브랜드 가치를 크게 향상시킬 수 있습니다
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                ref={(el) => (sectionRefs.current[index] = el)}
                className={`bg-gradient-to-br from-white to-slate-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-slate-200 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-orange-400 rounded-2xl flex items-center justify-center">
                    <FontAwesomeIcon icon={benefit.icon} className="w-8 h-8 text-white" />
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-slate-600 mb-4">
                      {benefit.description}
                    </p>
                    <ul className="space-y-2">
                      {benefit.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center text-sm text-slate-600">
                          <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration Models */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              협력 모델
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              다양한 방법으로 브랜드와 협력할 수 있습니다
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {collaborationModels.map((model, index) => (
              <div
                key={model.title}
                ref={(el) => (sectionRefs.current[index + 4] = el)}
                className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-slate-200 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${(index + 4) * 200}ms` }}
              >
                <div className="text-center space-y-4">
                  <h3 className="text-xl font-bold text-slate-900">
                    {model.title}
                  </h3>
                  <p className="text-slate-600 text-sm">
                    {model.description}
                  </p>
                  <div className="bg-gradient-to-r from-amber-400 to-orange-400 text-white px-4 py-2 rounded-lg">
                    <p className="font-semibold">{model.revenue}</p>
                  </div>
                  <p className="text-xs text-slate-500">
                    {model.example}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              성공 사례
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              실제 브랜드들의 성공 스토리를 확인해보세요
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div
                key={story.brand}
                ref={(el) => (sectionRefs.current[index + 8] = el)}
                className={`bg-gradient-to-br from-slate-50 to-purple-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-slate-200 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${(index + 8) * 200}ms` }}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">
                        {story.brand}
                      </h3>
                      <p className="text-slate-600">
                        {story.category}
                      </p>
                    </div>
                    <div className="bg-gradient-to-r from-amber-400 to-orange-400 text-white px-3 py-1 rounded-lg text-sm font-semibold">
                      {story.growth}
                    </div>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    "{story.story}"
                  </p>
                </div>
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
            tegana와 함께 브랜드 가치를 높이고<br />
            전문가 추천으로 신뢰할 수 있는 브랜드로 성장하세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/partnership/brands/register"
              className="bg-gradient-to-r from-amber-400 to-orange-400 text-slate-900 px-8 py-4 rounded-xl font-semibold hover:from-amber-500 hover:to-orange-500 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              브랜드 협력하기
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300"
            >
              문의하기
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 