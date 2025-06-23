'use client';

import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faUserFriends, faLightbulb, faChartLine } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

const openPositions = [
  {
    title: 'Frontend Developer',
    department: 'Engineering',
    location: '서울, 대한민국 (원격 근무 가능)',
    description: 'React, Next.js 환경에서 사용자에게 최고의 경험을 제공하는 웹 애플리케이션을 개발합니다. UI/UX 팀과 긴밀하게 협업하여 아이디어를 현실로 만듭니다.',
  },
  {
    title: 'Backend Developer',
    department: 'Engineering',
    location: '서울, 대한민국',
    description: '안정적이고 확장 가능한 서버 아키텍처를 설계하고 개발합니다. 대용량 트래픽 처리 및 데이터베이스 최적화 경험이 있는 분을 찾습니다.',
  },
  {
    title: 'UI/UX Designer',
    department: 'Design',
    location: '서울, 대한민국',
    description: '사용자 중심의 리서치를 바탕으로 직관적이고 아름다운 인터페이스를 설계합니다. 스타일로그의 브랜드 가치를 시각적으로 표현합니다.',
  },
  {
    title: 'Digital Marketer',
    department: 'Marketing',
    location: '서울, 대한민국',
    description: '데이터 기반의 마케팅 전략을 수립하고 실행합니다. 다양한 채널을 통해 스타일로그의 성장을 이끌어갈 분을 기다립니다.',
  },
];

const companyValues = [
    {
        icon: faUserFriends,
        title: '신뢰와 존중',
        description: '우리는 투명한 소통을 바탕으로 서로를 존중하며, 동료의 성장이 곧 나의 성장이라는 믿음으로 함께합니다.'
    },
    {
        icon: faLightbulb,
        title: '자율과 책임',
        description: '스스로 문제를 정의하고 해결책을 찾아나가는 주도적인 문화를 지향합니다. 높은 자율성에는 강한 책임감이 따릅니다.'
    },
    {
        icon: faChartLine,
        title: '탁월함의 추구',
        description: '현실에 안주하지 않고 끊임없이 더 나은 방법을 고민합니다. 최고의 제품을 만들기 위해 디테일에 집착합니다.'
    }
]

const CareersPage = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-purple-600 to-blue-500 text-white py-24 sm:py-32">
        <div className="absolute inset-0 overflow-hidden">
            <Image src="/images/makeup-1289325_640.jpg" alt="Careers Background" layout="fill" objectFit="cover" className="opacity-20" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center px-4">
          <AnimatedElement as="h1" className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            뷰티의 미래를 함께 만드세요
          </AnimatedElement>
          <AnimatedElement as="p" className="mt-4 text-lg sm:text-xl max-w-2xl mx-auto" delay={0.2}>
            스타일로그는 당신의 열정과 전문성을 기다립니다. 최고의 동료들과 함께 세상을 바꿀 새로운 도전을 시작하세요.
          </AnimatedElement>
        </div>
      </div>
      
      {/* Company Values */}
      <div className="py-16 sm:py-24 px-4">
        <div className="max-w-5xl mx-auto">
            <AnimatedElement as="h2" className="text-3xl sm:text-4xl font-extrabold text-center mb-12">
                우리가 일하는 방식
            </AnimatedElement>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {companyValues.map((value, index) => (
                    <AnimatedElement key={index} delay={0.3 + index * 0.1}>
                        <div className="text-center p-8 bg-gray-50 rounded-lg">
                            <FontAwesomeIcon icon={value.icon} className="text-4xl text-purple-500 mb-4" />
                            <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                            <p className="text-gray-600">{value.description}</p>
                        </div>
                    </AnimatedElement>
                ))}
            </div>
        </div>
      </div>

      {/* Open Positions */}
      <div className="bg-gray-50 py-16 sm:py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatedElement as="h2" className="text-3xl sm:text-4xl font-extrabold text-center mb-12">
            현재 채용 중인 포지션
          </AnimatedElement>
          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <AnimatedElement key={position.title} delay={0.3 + index * 0.1}>
                <div className="bg-white p-6 rounded-lg border border-gray-200 hover:border-purple-400 transition-colors duration-300">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                    <h3 className="text-xl font-bold text-purple-700">{position.title}</h3>
                    <span className="text-sm text-white bg-purple-500 px-3 py-1 rounded-full mt-2 sm:mt-0">{position.department}</span>
                  </div>
                  <p className="text-sm text-gray-500 mb-4">{position.location}</p>
                  <p className="text-gray-600 mb-4">{position.description}</p>
                  <a href="#" className="font-semibold text-purple-600 hover:text-purple-800 transition-colors">
                    자세히 보기 <FontAwesomeIcon icon={faArrowRight} className="ml-1 text-xs" />
                  </a>
                </div>
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

export default CareersPage; 