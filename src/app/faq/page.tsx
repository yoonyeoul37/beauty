'use client';

import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const faqData = [
  {
    category: '예약 및 결제',
    questions: [
      {
        q: '예약은 어떻게 하나요?',
        a: '원하는 샵과 디자이너, 시간을 선택한 후 예약 페이지에서 간단하게 예약할 수 있습니다. 예약 확정 시 알림을 보내드립니다.',
      },
      {
        q: '결제는 언제, 어떻게 하나요?',
        a: '서비스 이용 후 현장에서 직접 결제하거나, 앱에 등록된 카드로 간편하게 결제할 수 있습니다. 자세한 내용은 각 샵의 정책을 확인해주세요.',
      },
      {
        q: '예약 변경이나 취소는 어떻게 하나요?',
        a: '마이페이지의 예약 내역에서 직접 변경 또는 취소할 수 있습니다. 다만, 샵의 정책에 따라 취소 수수료가 발생할 수 있으니 주의사항을 꼭 확인해주세요.',
      },
    ],
  },
  {
    category: '회원 및 계정',
    questions: [
      {
        q: '아이디나 비밀번호를 잊어버렸어요.',
        a: '로그인 페이지 하단의 "아이디/비밀번호 찾기" 기능을 통해 본인인증 후 찾을 수 있습니다.',
      },
      {
        q: '회원정보를 수정하고 싶어요.',
        a: '마이페이지의 "회원정보 수정" 메뉴에서 프로필 사진, 연락처 등 개인정보를 직접 수정할 수 있습니다.',
      },
    ],
  },
  {
    category: '리뷰 및 포인트',
    questions: [
        {
            q: '리뷰는 어떻게 작성하나요?',
            a: '서비스를 이용 완료한 후에만 리뷰를 작성할 수 있습니다. 마이페이지 예약 내역에서 "리뷰 작성" 버튼을 눌러주세요.'
        },
        {
            q: '포인트는 어떻게 적립하고 사용하나요?',
            a: '리뷰 작성, 이벤트 참여 등을 통해 포인트를 적립할 수 있으며, 적립된 포인트는 결제 시 현금처럼 사용할 수 있습니다.'
        }
    ]
  }
];

const FaqPage = () => {
    const [openIndex, setOpenIndex] = useState<string | null>(null);

    const toggleFaq = (id: string) => {
        setOpenIndex(openIndex === id ? null : id);
    };

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <div className="bg-gray-100 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <AnimatedElement as="h1" className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            자주 묻는 질문
          </AnimatedElement>
          <AnimatedElement as="p" className="mt-3 text-base sm:text-lg text-gray-600" delay={0.2}>
            궁금한 점이 있으신가요? 빠르고 정확하게 해결해 드립니다.
          </AnimatedElement>
        </div>
      </div>
      
      {/* FAQ List */}
      <div className="py-12 sm:py-16 px-4">
        <div className="max-w-3xl mx-auto">
            {faqData.map((category, catIndex) => (
                <div key={category.category} className="mb-12">
                    <AnimatedElement as="h2" className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-pink-500 pb-2" delay={0.3 + catIndex * 0.2}>
                        {category.category}
                    </AnimatedElement>
                    <div className="space-y-4">
                        {category.questions.map((faq, qIndex) => {
                            const id = `${catIndex}-${qIndex}`;
                            const isOpen = openIndex === id;
                            return (
                                <AnimatedElement key={id} delay={0.4 + (catIndex * 0.2) + (qIndex * 0.05)}>
                                    <div className="border border-gray-200 rounded-lg">
                                        <button
                                            className="w-full flex justify-between items-center p-4 sm:p-5 text-left"
                                            onClick={() => toggleFaq(id)}
                                        >
                                            <span className="font-semibold">{faq.q}</span>
                                            <FontAwesomeIcon 
                                                icon={faChevronDown} 
                                                className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                                            />
                                        </button>
                                        <div 
                                            className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}
                                        >
                                            <p className="p-4 sm:p-5 pt-0 text-gray-600 leading-relaxed">
                                                {faq.a}
                                            </p>
                                        </div>
                                    </div>
                                </AnimatedElement>
                            )
                        })}
                    </div>
                </div>
            ))}
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

export default FaqPage; 