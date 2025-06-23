'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshake, faChartLine, faUsers, faGift, faRocket, faShieldAlt, faLightbulb, faMapMarkerAlt, faClock, faStar } from '@fortawesome/free-solid-svg-icons';

export default function BusinessPartnershipPage() {
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
      title: '고객 유입 증가',
      description: '위치 기반 검색으로 정확한 타겟 고객 확보',
      details: ['위치 기반 고객 유치', '검색 상위 노출', '신규 고객 확보']
    },
    {
      icon: faClock,
      title: '예약 관리 시스템',
      description: '24시간 온라인 예약으로 업무 효율성 향상',
      details: ['온라인 예약 시스템', '자동 예약 관리', '고객 데이터 관리']
    },
    {
      icon: faChartLine,
      title: '수익 공유',
      description: '위치 기반 동적 가격으로 수익 최적화',
      details: ['위치별 가격 차등', '수요 기반 가격 조정', '수익 공유 모델']
    },
    {
      icon: faRocket,
      title: '마케팅 지원',
      description: '플랫폼을 통한 무료 마케팅 및 홍보',
      details: ['플랫폼 내 홍보', '고객 리뷰 시스템', '브랜드 노출']
    }
  ];

  const businessTypes = [
    {
      title: '미용실',
      description: '커트, 염색, 펌, 스타일링 등 헤어 서비스',
      features: ['헤어 스타일링', '염색/펌', '커트/트리밍', '헤드 스파'],
      icon: '💇‍♀️'
    },
    {
      title: '네일샵',
      description: '젤네일, 아크릴, 네일아트 등 네일 서비스',
      features: ['젤네일', '아크릴', '네일아트', '네일케어'],
      icon: '💅'
    },
    {
      title: '뷰티샵',
      description: '메이크업, 에스테틱, 피부관리 등 종합 뷰티 서비스',
      features: ['메이크업', '에스테틱', '피부관리', '왁싱'],
      icon: '✨'
    },
    {
      title: '메디컬 뷰티',
      description: '레이저, 보톡스, 필러 등 메디컬 뷰티 서비스',
      features: ['레이저 시술', '보톡스', '필러', '리프팅'],
      icon: '🏥'
    }
  ];

  const pricingFeatures = [
    {
      title: '위치 기반 가격',
      description: '지역별 수요에 따른 동적 가격 설정',
      benefit: '수익 최적화'
    },
    {
      title: '시간대별 가격',
      description: '피크 타임과 오프 피크 타임 가격 차등',
      benefit: '고객 분산'
    },
    {
      title: '계절별 가격',
      description: '계절과 트렌드에 따른 가격 조정',
      benefit: '수요 대응'
    },
    {
      title: '고객 등급별 가격',
      description: '신규 고객과 단골 고객 가격 차등',
      benefit: '고객 유지'
    }
  ];

  const successStories = [
    {
      business: '강남 미용실 A',
      type: '미용실',
      story: 'tegana 등록 후 월 예약 건수가 40% 증가했고, 위치 기반 가격으로 평균 단가도 15% 상승했습니다.',
      growth: '매출 55% 증가'
    },
    {
      business: '홍대 네일샵 B',
      type: '네일샵',
      story: '온라인 예약 시스템으로 업무 효율성이 크게 향상되었고, 20대 고객층이 크게 늘었습니다.',
      growth: '고객 60% 증가'
    },
    {
      business: '청담 뷰티샵 C',
      type: '뷰티샵',
      story: '플랫폼을 통한 브랜드 노출로 프리미엄 고객층이 확대되었고, 평균 객단가가 30% 상승했습니다.',
      growth: '객단가 30% 증가'
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
              뷰티 비즈니스
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              위치 기반 동적 가격으로 수익을 최적화하세요
            </p>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              미용실, 네일샵, 뷰티샵<br />
              모든 뷰티 비즈니스를 환영합니다
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/partnership/business/register"
                className="bg-gradient-to-r from-amber-400 to-orange-400 text-slate-900 px-8 py-4 rounded-xl font-semibold hover:from-amber-500 hover:to-orange-500 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                비즈니스 등록하기
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
              비즈니스가 얻는 혜택
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              tegana와 함께하면 비즈니스 성장을 가속화할 수 있습니다
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

      {/* Business Types */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              지원하는 비즈니스 유형
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              다양한 뷰티 비즈니스를 지원합니다
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {businessTypes.map((type, index) => (
              <div
                key={type.title}
                ref={(el) => (sectionRefs.current[index + 4] = el)}
                className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-slate-200 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${(index + 4) * 200}ms` }}
              >
                <div className="text-center space-y-4">
                  <div className="text-4xl mb-4">
                    {type.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {type.title}
                  </h3>
                  <p className="text-slate-600 text-sm">
                    {type.description}
                  </p>
                  <ul className="space-y-1 text-xs text-slate-500">
                    {type.features.map((feature, idx) => (
                      <li key={idx}>• {feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              위치 기반 동적 가격
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              수요와 위치에 따른 스마트한 가격 설정으로 수익을 최적화하세요
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingFeatures.map((feature, index) => (
              <div
                key={feature.title}
                ref={(el) => (sectionRefs.current[index + 8] = el)}
                className={`bg-gradient-to-br from-slate-50 to-purple-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-slate-200 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${(index + 8) * 200}ms` }}
              >
                <div className="text-center space-y-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-orange-400 rounded-xl flex items-center justify-center mx-auto">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 text-sm">
                    {feature.description}
                  </p>
                  <div className="bg-gradient-to-r from-amber-400 to-orange-400 text-white px-3 py-1 rounded-lg text-sm font-semibold">
                    {feature.benefit}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              성공 사례
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              실제 비즈니스들의 성공 스토리를 확인해보세요
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div
                key={story.business}
                ref={(el) => (sectionRefs.current[index + 12] = el)}
                className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-slate-200 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${(index + 12) * 200}ms` }}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">
                        {story.business}
                      </h3>
                      <p className="text-slate-600">
                        {story.type}
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
            tegana와 함께 위치 기반 동적 가격으로<br />
            비즈니스 수익을 최적화하세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/partnership/business/register"
              className="bg-gradient-to-r from-amber-400 to-orange-400 text-slate-900 px-8 py-4 rounded-xl font-semibold hover:from-amber-500 hover:to-orange-500 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              비즈니스 등록하기
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