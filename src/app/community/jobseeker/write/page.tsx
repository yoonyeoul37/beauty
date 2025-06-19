'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faPaperPlane, faUser } from '@fortawesome/free-solid-svg-icons';

export default function JobSeekerWritePage() {
  const router = useRouter();
  
  const [formData, setFormData] = useState({
    name: '',
    desired: '',
    region: '',
    career: '',
    intro: '',
    contact: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // 필수 필드 검증
    const requiredFields = ['name', 'desired', 'region'];
    const missingFields = requiredFields.filter(field => !formData[field as keyof typeof formData].trim());
    
    if (missingFields.length > 0) {
      alert('필수 항목을 모두 입력해주세요.');
      return;
    }

    setIsSubmitting(true);
    
    // 실제로는 API 호출을 여기에 추가
    setTimeout(() => {
      alert('구직 등록이 성공적으로 완료되었습니다!');
      router.push('/community');
    }, 1000);
  };

  return (
    <main style={{ minHeight: '100vh', background: '#F7FAFC', paddingBottom: '5rem' }}>
      {/* 헤더 */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center gap-4">
          <button
            onClick={() => router.back()}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="w-5 h-5 text-gray-600" />
          </button>
          <div>
            <h1 className="text-xl font-bold text-gray-800">구직 등록</h1>
            <p className="text-sm text-gray-500">구직 정보를 등록해주세요</p>
          </div>
        </div>
      </div>

      {/* 구직 등록 폼 */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* 이름 */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              이름 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-200 focus:border-pink-400 transition-colors"
              placeholder="이름을 입력해주세요"
            />
          </div>

          {/* 희망 직종 */}
          <div>
            <label htmlFor="desired" className="block text-sm font-medium text-gray-700 mb-2">
              희망 직종 <span className="text-red-500">*</span>
            </label>
            <select
              id="desired"
              value={formData.desired}
              onChange={(e) => handleChange('desired', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-200 focus:border-pink-400 transition-colors"
            >
              <option value="">희망 직종을 선택해주세요</option>
              <option value="헤어디자이너">헤어디자이너</option>
              <option value="네일아티스트">네일아티스트</option>
              <option value="피부관리사">피부관리사</option>
              <option value="메이크업아티스트">메이크업아티스트</option>
              <option value="에스테틱">에스테틱</option>
            </select>
          </div>

          {/* 희망 지역 */}
          <div>
            <label htmlFor="region" className="block text-sm font-medium text-gray-700 mb-2">
              희망 지역 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="region"
              value={formData.region}
              onChange={(e) => handleChange('region', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-200 focus:border-pink-400 transition-colors"
              placeholder="예: 서울 강남구"
            />
          </div>

          {/* 경력 */}
          <div>
            <label htmlFor="career" className="block text-sm font-medium text-gray-700 mb-2">
              경력
            </label>
            <select
              id="career"
              value={formData.career}
              onChange={(e) => handleChange('career', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-200 focus:border-pink-400 transition-colors"
            >
              <option value="">경력을 선택해주세요</option>
              <option value="신입">신입</option>
              <option value="경력 1년 미만">경력 1년 미만</option>
              <option value="경력 1~3년">경력 1~3년</option>
              <option value="경력 3~5년">경력 3~5년</option>
              <option value="경력 5년 이상">경력 5년 이상</option>
            </select>
          </div>

          {/* 자기소개 */}
          <div>
            <label htmlFor="intro" className="block text-sm font-medium text-gray-700 mb-2">
              자기소개
            </label>
            <textarea
              id="intro"
              value={formData.intro}
              onChange={(e) => handleChange('intro', e.target.value)}
              rows={8}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-200 focus:border-pink-400 transition-colors resize-none"
              placeholder="자기소개를 작성해주세요. 경력, 강점, 희망사항 등을 포함해주세요."
            />
          </div>

          {/* 연락처 */}
          <div>
            <label htmlFor="contact" className="block text-sm font-medium text-gray-700 mb-2">
              연락처
            </label>
            <input
              type="text"
              id="contact"
              value={formData.contact}
              onChange={(e) => handleChange('contact', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-200 focus:border-pink-400 transition-colors"
              placeholder="연락처를 입력해주세요 (선택사항)"
            />
          </div>

          {/* 버튼 영역 */}
          <div className="flex gap-4 pt-6">
            <button
              type="button"
              onClick={() => router.back()}
              className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-colors"
            >
              취소
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 px-6 py-3 bg-pink-500 text-white rounded-xl font-medium hover:bg-pink-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  등록 중...
                </>
              ) : (
                <>
                  <FontAwesomeIcon icon={faPaperPlane} className="w-4 h-4" />
                  구직 등록
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
} 