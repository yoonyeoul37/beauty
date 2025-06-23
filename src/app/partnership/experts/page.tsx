'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faStar, faChartLine, faGift, faRocket, faShieldAlt, faLightbulb, faHandshake } from '@fortawesome/free-solid-svg-icons';

export default function ExpertsPartnershipPage() {
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
      icon: faGift,
      title: '다양한 수익 창출',
      description: '제품 추천, 콘텐츠 제작, 상담 등 다양한 방법으로 수익을 창출하세요',
      details: ['제품 추천 수수료 10-20%', '콘텐츠 제작비 10-50만원', '상담 수익 시간당 3-10만원']
    },
    {
      icon: faRocket,
      title: '브랜드 노출',
      description: 'tegana 플랫폼을 통해 더 많은 고객에게 브랜드를 알리세요',
      details: ['플랫폼 메인 노출', '전문가 추천 시스템', '브랜드 협업 기회']
    },
    {
      icon: faUsers,
      title: '고객 확보',
      description: '신뢰할 수 있는 플랫폼을 통해 새로운 고객을 확보하세요',
      details: ['정확한 타겟 고객', '고품질 고객 유입', '고객 관리 시스템']
    },
    {
      icon: faLightbulb,
      title: '전문 콘텐츠 플랫폼',
      description: '전문가로서의 역량을 마음껏 발휘할 수 있는 공간을 제공합니다',
      details: ['전용 콘텐츠 공간', '전문가 인증 시스템', '포트폴리오 관리']
    }
  ];

  const revenueModels = [
    {
      title: '제품 추천',
      description: '믿고 사용하는 제품을 고객에게 추천하고 수수료를 받으세요',
      revenue: '판매 수수료 10-20%',
      example: '월 100개 제품 추천 시 50-100만원 수익'
    },
    {
      title: '콘텐츠 제작',
      description: '뷰티 팁, 튜토리얼, 리뷰 등 전문 콘텐츠를 제작하세요',
      revenue: '콘텐츠당 10-50만원',
      example: '월 5개 콘텐츠 제작 시 50-250만원 수익'
    },
    {
      title: '개인 상담',
      description: '1:1 맞춤형 뷰티 상담 서비스를 제공하세요',
      revenue: '시간당 3-10만원',
      example: '월 20시간 상담 시 60-200만원 수익'
    },
    {
      title: '브랜드 협업',
      description: '브랜드와의 파트너십을 통해 안정적인 수익을 창출하세요',
      revenue: '월 100-500만원',
      example: '브랜드 앰버서더 계약 시 월 100-500만원'
    }
  ];

  const successStories = [
    {
      name: '김미영',
      profession: '메이크업 아티스트',
      story: 'tegana를 통해 월 평균 200만원의 수익을 창출하고 있습니다. 제품 추천과 개인 상담이 주요 수익원이에요.',
      revenue: '월 200만원'
    },
    {
      name: '박지현',
      profession: '헤어 디자이너',
      story: '플랫폼을 통해 새로운 고객을 많이 만났어요. 브랜드 협업도 생겨서 수익이 크게 늘었습니다.',
      revenue: '월 300만원'
    },
    {
      name: '이수진',
      profession: '뷰티 인플루언서',
      story: '콘텐츠 제작과 제품 추천으로 안정적인 수익을 얻고 있어요. 팔로워 수도 크게 늘었습니다.',
      revenue: '월 400만원'
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
              뷰티 전문가
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              당신의 전문성을 tegana에서 마음껏 발휘하세요
            </p>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              메이크업 아티스트, 헤어 디자이너, 뷰티 인플루언서<br />
              모든 뷰티 전문가를 환영합니다
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/partnership/experts/register"
                className="bg-gradient-to-r from-amber-400 to-orange-400 text-slate-900 px-8 py-4 rounded-xl font-semibold hover:from-amber-500 hover:to-orange-500 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                전문가 등록하기
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
              전문가가 얻는 혜택
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              tegana와 함께하면 다양한 혜택을 누릴 수 있습니다
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

      {/* Revenue Models */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              수익 창출 모델
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              다양한 방법으로 수익을 창출할 수 있습니다
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {revenueModels.map((model, index) => (
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
              실제 전문가들의 성공 스토리를 확인해보세요
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div
                key={story.name}
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
                        {story.name}
                      </h3>
                      <p className="text-slate-600">
                        {story.profession}
                      </p>
                    </div>
                    <div className="bg-gradient-to-r from-amber-400 to-orange-400 text-white px-3 py-1 rounded-lg text-sm font-semibold">
                      {story.revenue}
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
            tegana와 함께 당신의 전문성을 마음껏 발휘하고<br />
            안정적인 수익을 창출해보세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/partnership/experts/register"
              className="bg-gradient-to-r from-amber-400 to-orange-400 text-slate-900 px-8 py-4 rounded-xl font-semibold hover:from-amber-500 hover:to-orange-500 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              전문가 등록하기
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