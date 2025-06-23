'use client';

import { useEffect, useRef, useState } from 'react';

const PrivacyPolicyContent = () => {
  const sections = [
    {
      title: '제 1 조 (개인정보의 처리 목적)',
      content:
        '스타일로그(이하 "회사")는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 개인정보 보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.\n1. 회원 가입 및 관리: 회원 가입의사 확인, 회원제 서비스 제공에 따른 본인 식별·인증, 회원자격 유지·관리, 제한적 본인확인제 시행에 따른 본인확인, 서비스 부정이용 방지, 만 14세 미만 아동의 개인정보 처리 시 법정대리인의 동의여부 확인, 각종 고지·통지 등을 목적으로 개인정보를 처리합니다.\n2. 서비스 제공: 서비스 제공, 콘텐츠 제공, 맞춤 서비스 제공, 본인인증, 연령인증, 요금결제·정산 등을 목적으로 개인정보를 처리합니다.',
    },
    {
      title: '제 2 조 (처리하는 개인정보의 항목)',
      content:
        '회사는 다음의 개인정보 항목을 처리하고 있습니다.\n1. 필수항목: 이름, 생년월일, 성별, 아이디, 비밀번호, 이메일 주소, 휴대전화번호\n2. 선택항목: 프로필 사진, 관심 분야\n3. 자동수집항목: IP주소, 쿠키, MAC주소, 서비스 이용기록, 방문기록, 불량이용기록 등',
    },
    {
      title: '제 3 조 (개인정보의 처리 및 보유 기간)',
      content:
        '1. 회사는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.\n2. 각각의 개인정보 처리 및 보유 기간은 다음과 같습니다.\n  - 회원 가입 및 관리: 회원 탈퇴 시까지. 다만, 다음의 사유에 해당하는 경우에는 해당 사유 종료 시까지\n    1) 관계 법령 위반에 따른 수사·조사 등이 진행 중인 경우에는 해당 수사·조사 종료 시까지\n    2) 서비스 이용에 따른 채권·채무관계 잔존 시에는 해당 채권·채무관계 정산 시까지\n  - 전자상거래에서의 계약·청약철회, 대금결제, 재화 등 공급기록: 5년',
    },
    {
        title: '제 4 조 (개인정보의 제3자 제공)',
        content:
          '회사는 정보주체의 개인정보를 제1조(개인정보의 처리 목적)에서 명시한 범위 내에서만 처리하며, 정보주체의 동의, 법률의 특별한 규정 등 개인정보 보호법 제17조 및 제18조에 해당하는 경우에만 개인정보를 제3자에게 제공합니다.',
    },
    {
        title: '제 5 조 (정보주체의 권리·의무 및 행사방법)',
        content:
          '1. 정보주체는 회사에 대해 언제든지 개인정보 열람·정정·삭제·처리정지 요구 등의 권리를 행사할 수 있습니다.\n2. 제1항에 따른 권리 행사는 회사에 대해 서면, 전화, 전자우편, 모사전송(FAX) 등을 통하여 하실 수 있으며 회사는 이에 대해 지체 없이 조치하겠습니다.\n3. 정보주체가 개인정보의 오류 등에 대한 정정 또는 삭제를 요구한 경우에는 회사는 정정 또는 삭제를 완료할 때까지 당해 개인정보를 이용하거나 제공하지 않습니다.',
    },
    {
        title: '제 6 조 (개인정보 파기절차 및 방법)',
        content:
          '1. 회사는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기합니다.\n2. 회사는 다음의 방법으로 개인정보를 파기합니다.\n  - 전자적 파일 형태: 복원이 불가능한 방법으로 영구 삭제\n  - 종이 문서: 분쇄하거나 소각',
    }
  ];

  return (
    <div className="bg-white text-gray-800 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <AnimatedElement as="h1" className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-4">
          개인정보처리방침
        </AnimatedElement>
        <AnimatedElement as="p" className="text-center text-gray-500 mb-12" delay={0.2}>
          최종 시행일: {new Date().toLocaleDateString('ko-KR')}
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

export default PrivacyPolicyContent; 