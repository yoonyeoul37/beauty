'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const teamMembers = [
  {
    name: '윤여울',
    role: 'CEO & Founder',
    bio: '뷰티 산업의 혁신을 꿈꾸며 스타일로그를 설립했습니다. 모든 사람이 자신만의 아름다움을 쉽게 찾고 경험할 수 있는 세상을 만듭니다.',
    imageUrl: '/images/salons/salon1.jpg', // Placeholder image
  },
  {
    name: '김민준',
    role: 'Lead Developer',
    bio: '최고의 기술로 가장 편리하고 안정적인 서비스를 제공합니다. 사용자의 입장에서 끊임없이 고민하며 더 나은 경험을 설계합니다.',
    imageUrl: '/images/salons/salon2.jpg', // Placeholder image
  },
  {
    name: '이서연',
    role: 'Head of Design',
    bio: '아름다움을 시각적으로 표현하는 일을 합니다. 직관적이고 감각적인 디자인으로 스타일로그의 가치를 전달합니다.',
    imageUrl: '/images/salons/salon3.jpg', // Placeholder image
  },
  {
    name: '박지훈',
    role: 'Marketing Manager',
    bio: '스타일로그의 이야기를 더 많은 사람들에게 알립니다. 진정성 있는 소통으로 브랜드와 사용자를 연결합니다.',
    imageUrl: '/images/salons/salon4.jpg', // Placeholder image
  },
];

const AboutUsPage = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-pink-500 to-purple-600 text-white py-24 sm:py-32">
        <div className="absolute inset-0 overflow-hidden">
            <Image src="/images/cosmetics-9086984_640.jpg" alt="Cosmetics Background" layout="fill" objectFit="cover" className="opacity-30" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center px-4">
          <AnimatedElement as="h1" className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            우리의 이야기
          </AnimatedElement>
          <AnimatedElement as="p" className="mt-4 text-lg sm:text-xl max-w-2xl mx-auto" delay={0.2}>
            스타일로그는 뷰티 정보의 비대칭을 해결하고, 모두가 자신에게 꼭 맞는 스타일을 찾을 수 있도록 돕기 위해 시작되었습니다.
          </AnimatedElement>
        </div>
      </div>
      
      {/* Mission and Vision */}
      <div className="py-16 sm:py-24 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <AnimatedElement delay={0.3}>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-pink-600">우리의 미션</h2>
            <p className="text-base sm:text-lg leading-relaxed">
              최고의 기술과 신뢰할 수 있는 정보를 바탕으로, 개인에게 최적화된 뷰티 경험을 제공하여 모든 사람의 일상을 더욱 빛나게 만듭니다.
            </p>
          </AnimatedElement>
          <AnimatedElement delay={0.4}>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-purple-600">우리의 비전</h2>
            <p className="text-base sm:text-lg leading-relaxed">
              뷰티 산업의 디지털 혁신을 선도하여, 아티스트와 고객 모두가 상생하고 발전하는 건강한 뷰티 생태계를 구축합니다.
            </p>
          </AnimatedElement>
        </div>
      </div>

      {/* Team Members */}
      <div className="bg-white py-16 sm:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <AnimatedElement as="h2" className="text-3xl sm:text-4xl font-extrabold text-center mb-12">
            스타일로그를 만드는 사람들
          </AnimatedElement>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <AnimatedElement key={member.name} delay={0.3 + index * 0.1}>
                <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                    <Image src={member.imageUrl} alt={member.name} layout="fill" objectFit="cover" />
                  </div>
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-pink-500 font-semibold mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable AnimatedElement component from previous steps
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

export default AboutUsPage; 