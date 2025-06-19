'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faPaperPlane, faBuilding } from '@fortawesome/free-solid-svg-icons';

export default function JobWritePage() {
  const router = useRouter();
  
  const [formData, setFormData] = useState({
    companyName: '',
    location: '',
    position: '',
    career: '',
    type: '',
    period: '',
    salary: '',
    benefit: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // 필수 필드 검증
    const requiredFields = ['companyName', 'location', 'position', 'type', 'salary'];
    const missingFields = requiredFields.filter(field => !formData[field as keyof typeof formData].trim());
    
    if (missingFields.length > 0) {
      alert('필수 항목을 모두 입력해주세요.');
      return;
    }

    setIsSubmitting(true);
    
    // 실제로는 API 호출을 여기에 추가
    setTimeout(() => {
      alert('구인공고가 성공적으로 등록되었습니다!');
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
            <h1 className="text-xl font-bold text-gray-800">구인공고 등록</h1>
            <p className="text-sm text-gray-500">새로운 구인공고를 작성해주세요</p>
          </div>
        </div>
      </div>

      {/* 구인공고 등록 폼 */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* 회사명 */}
          <div>
            <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">
              회사명 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="companyName"
              value={formData.companyName}
              onChange={(e) => handleChange('companyName', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-200 focus:border-pink-400 transition-colors"
              placeholder="회사명을 입력해주세요"
            />
          </div>

          {/* 위치 */}
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
              위치 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="location"
              value={formData.location}
              onChange={(e) => handleChange('location', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-200 focus:border-pink-400 transition-colors"
              placeholder="예: 서울 강남구"
            />
          </div>

          {/* 직종 */}
          <div>
            <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-2">
              직종 <span className="text-red-500">*</span>
            </label>
            <select
              id="position"
              value={formData.position}
              onChange={(e) => handleChange('position', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-200 focus:border-pink-400 transition-colors"
            >
              <option value="">직종을 선택해주세요</option>
              <option value="헤어디자이너">헤어디자이너</option>
              <option value="네일아티스트">네일아티스트</option>
              <option value="피부관리사">피부관리사</option>
              <option value="메이크업아티스트">메이크업아티스트</option>
              <option value="에스테틱">에스테틱</option>
            </select>
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

          {/* 고용형태 */}
          <div>
            <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-2">
              고용형태 <span className="text-red-500">*</span>
            </label>
            <select
              id="type"
              value={formData.type}
              onChange={(e) => handleChange('type', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-200 focus:border-pink-400 transition-colors"
            >
              <option value="">고용형태를 선택해주세요</option>
              <option value="정규직">정규직</option>
              <option value="계약직">계약직</option>
              <option value="인턴">인턴</option>
              <option value="알바">알바</option>
              <option value="프리랜서">프리랜서</option>
            </select>
          </div>

          {/* 근무기간 */}
          <div>
            <label htmlFor="period" className="block text-sm font-medium text-gray-700 mb-2">
              근무기간
            </label>
            <input
              type="text"
              id="period"
              value={formData.period}
              onChange={(e) => handleChange('period', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-200 focus:border-pink-400 transition-colors"
              placeholder="예: 주 5일, 6개월~1년"
            />
          </div>

          {/* 급여 */}
          <div>
            <label htmlFor="salary" className="block text-sm font-medium text-gray-700 mb-2">
              급여 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="salary"
              value={formData.salary}
              onChange={(e) => handleChange('salary', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-200 focus:border-pink-400 transition-colors"
              placeholder="예: 월 250~300만원, 추후협의"
            />
          </div>

          {/* 복지 */}
          <div>
            <label htmlFor="benefit" className="block text-sm font-medium text-gray-700 mb-2">
              복지
            </label>
            <input
              type="text"
              id="benefit"
              value={formData.benefit}
              onChange={(e) => handleChange('benefit', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-200 focus:border-pink-400 transition-colors"
              placeholder="예: 4대보험, 식사제공, 교통비지원"
            />
          </div>

          {/* 상세설명 */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
              상세설명
            </label>
            <textarea
              id="description"
              value={formData.description}
              onChange={(e) => handleChange('description', e.target.value)}
              rows={8}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-200 focus:border-pink-400 transition-colors resize-none"
              placeholder="업무 내용, 자격요건, 우대사항 등을 상세히 작성해주세요"
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
                  공고 등록
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
} 