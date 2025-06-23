'use client';

import { useEffect, useRef, useState } from 'react';

const TermsContent = () => {
  const sections = [
    {
      title: '제 1 조 (목적)',
      content:
        '이 약관은 스타일로그(이하 "회사")가 제공하는 모든 서비스(이하 "서비스")의 이용 조건 및 절차, 회사와 회원 간의 권리, 의무 및 책임사항 등을 규정함을 목적으로 합니다.',
    },
    {
      title: '제 2 조 (용어의 정의)',
      content:
        '1. "서비스"란 회사가 제공하는 모든 온라인 정보 제공 및 예약 서비스를 의미합니다.\n2. "회원"이란 회사에 개인정보를 제공하여 회원등록을 한 자로서, 회사의 정보를 지속적으로 제공받으며 서비스를 계속적으로 이용할 수 있는 자를 말합니다.\n3. "아이디(ID)"란 회원의 식별과 서비스 이용을 위하여 회원이 정하고 회사가 승인하는 문자와 숫자의 조합을 의미합니다.\n4. "비밀번호"란 회원이 부여받은 아이디와 일치되는 회원임을 확인하고 비밀보호를 위해 회원 자신이 정한 문자 또는 숫자의 조합을 의미합니다.',
    },
    {
      title: '제 3 조 (약관의 명시와 개정)',
      content:
        '1. 회사는 이 약관의 내용과 상호, 영업소 소재지, 대표자의 성명, 사업자등록번호, 연락처 등을 회원이 쉽게 알 수 있도록 서비스 초기 화면에 게시합니다.\n2. 회사는 "약관의규제에관한법률", "정보통신망이용촉진및정보보호등에관한법률(이하 "정보통신망법")" 등 관련법을 위배하지 않는 범위에서 이 약관을 개정할 수 있습니다.\n3. 회사가 약관을 개정할 경우에는 적용일자 및 개정사유를 명시하여 현행약관과 함께 서비스의 초기화면에 그 적용일자 7일 이전부터 적용일자 전일까지 공지합니다.',
    },
    {
        title: '제 4 조 (서비스의 제공 및 변경)',
        content:
          '1. 회사는 다음과 같은 업무를 수행합니다.\n  - 뷰티 서비스에 대한 정보 제공 및 예약 중개\n  - 커뮤니티 서비스\n  - 기타 회사가 정하는 업무\n2. 회사는 상당한 이유가 있는 경우에 운영상, 기술상의 필요에 따라 제공하고 있는 전부 또는 일부 서비스를 변경할 수 있습니다.\n3. 서비스의 내용, 이용방법, 이용시간에 대하여 변경이 있는 경우에는 변경사유, 변경될 서비스의 내용 및 제공일자 등은 그 변경 전에 해당 서비스 초기화면에 게시하여야 합니다.',
    },
    {
        title: '제 5 조 (회원가입)',
        content:
          '1. 이용자는 회사가 정한 가입 양식에 따라 회원정보를 기입한 후 이 약관에 동의한다는 의사표시를 함으로써 회원가입을 신청합니다.\n2. 회사는 제1항과 같이 회원으로 가입할 것을 신청한 이용자 중 다음 각 호에 해당하지 않는 한 회원으로 등록합니다.\n  - 가입신청자가 이전에 회원자격을 상실한 적이 있는 경우\n  - 등록 내용에 허위, 기재누락, 오기가 있는 경우\n  - 기타 회원으로 등록하는 것이 회사의 기술상 현저히 지장이 있다고 판단되는 경우',
    },
    {
        title: '제 6 조 (회원의 의무)',
        content:
          '1. 회원은 다음 행위를 하여서는 안 됩니다.\n  - 신청 또는 변경 시 허위 내용의 등록\n  - 타인의 정보 도용\n  - 회사가 게시한 정보의 변경\n  - 회사의 서비스에 대한 영리 목적의 이용\n  - 기타 불법적이거나 부당한 행위\n2. 회원은 관계법, 이 약관의 규정, 이용안내 및 서비스와 관련하여 공지한 주의사항, 회사가 통지하는 사항 등을 준수하여야 하며, 기타 회사의 업무에 방해되는 행위를 하여서는 안 됩니다.',
    }
  ];

  return (
    <div className="bg-white text-gray-800 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <AnimatedElement as="h1" className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-4">
          이용약관
        </AnimatedElement>
        <AnimatedElement as="p" className="text-center text-gray-500 mb-12" delay={0.2}>
          최종 수정일: {new Date().toLocaleDateString('ko-KR')}
        </AnimatedElement>

        <div className="space-y-10">
          {sections.map((section, index) => (
            <AnimatedElement key={index} delay={0.3 + index * 0.1}>
              <h2 className="text-xl font-bold text-gray-900 mb-3">{section.title}</h2>
              <p className="text-base leading-relaxed whitespace-pre-line">{section.content}</p>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </div>
  );
};

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

export default TermsContent; 