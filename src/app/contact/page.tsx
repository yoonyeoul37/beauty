'use client';

import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const ContactPage = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    inquiryType: 'general',
    title: '',
    content: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted:', formValues);
    // Here you would typically handle the form submission, e.g., send to an API
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
        <div className="bg-white text-gray-800 py-24 sm:py-32 px-4">
            <div className="max-w-2xl mx-auto text-center">
                <AnimatedElement>
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">문의가 정상적으로 접수되었습니다.</h1>
                    <p className="text-lg text-gray-600">
                        빠른 시일 내에 검토 후 입력해주신 이메일로 답변드리겠습니다.
                    </p>
                    <button 
                        onClick={() => window.location.reload()}
                        className="mt-8 px-8 py-3 bg-pink-600 text-white font-bold rounded-lg hover:bg-pink-700 transition-colors"
                    >
                        새 문의 작성하기
                    </button>
                </AnimatedElement>
            </div>
        </div>
    )
  }

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <div className="bg-gray-100 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <AnimatedElement as="h1" className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            1:1 문의하기
          </AnimatedElement>
          <AnimatedElement as="p" className="mt-3 text-base sm:text-lg text-gray-600" delay={0.2}>
            궁금한 점이나 제안할 내용이 있으시면 언제든지 편하게 문의해주세요.
          </AnimatedElement>
        </div>
      </div>
      
      {/* Contact Form */}
      <div className="py-12 sm:py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <AnimatedElement delay={0.3}>
                <label htmlFor="name" className="block text-sm font-bold text-gray-700">이름</label>
                <input type="text" name="name" id="name" required value={formValues.name} onChange={handleInputChange} className="mt-1 block w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500" />
            </AnimatedElement>

            <AnimatedElement delay={0.4}>
                <label htmlFor="email" className="block text-sm font-bold text-gray-700">이메일</label>
                <input type="email" name="email" id="email" required value={formValues.email} onChange={handleInputChange} className="mt-1 block w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500" placeholder="ответ@example.com" />
            </AnimatedElement>
            
            <AnimatedElement delay={0.5}>
                <label htmlFor="inquiryType" className="block text-sm font-bold text-gray-700">문의 유형</label>
                <select id="inquiryType" name="inquiryType" required value={formValues.inquiryType} onChange={handleInputChange} className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm rounded-md">
                    <option value="general">일반 문의</option>
                    <option value="account">계정 관련</option>
                    <option value="payment">예약/결제 관련</option>
                    <option value="suggestion">서비스 제안</option>
                    <option value="other">기타</option>
                </select>
            </AnimatedElement>

            <AnimatedElement delay={0.6}>
                <label htmlFor="title" className="block text-sm font-bold text-gray-700">제목</label>
                <input type="text" name="title" id="title" required value={formValues.title} onChange={handleInputChange} className="mt-1 block w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500" />
            </AnimatedElement>

            <AnimatedElement delay={0.7}>
                <label htmlFor="content" className="block text-sm font-bold text-gray-700">내용</label>
                <textarea id="content" name="content" rows={6} required value={formValues.content} onChange={handleInputChange} className="mt-1 block w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500" />
            </AnimatedElement>
            
            <AnimatedElement delay={0.8} className="text-center">
                <button type="submit" className="w-full sm:w-auto inline-flex justify-center items-center px-8 py-3 border border-transparent text-base font-bold rounded-md shadow-sm text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition-colors">
                    <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
                    문의 제출하기
                </button>
            </AnimatedElement>
          </form>
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

export default ContactPage; 