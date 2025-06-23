'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPhone, faCalendar, faMapMarkerAlt, faInstagram, faYoutube, faCertificate, faBriefcase, faStar, faUpload, faCheck } from '@fortawesome/free-solid-svg-icons';

export default function ExpertRegisterPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // 기본 정보
    name: '',
    email: '',
    phone: '',
    birthdate: '',
    gender: '',
    address: '',
    
    // 전문 분야
    profession: [],
    experience: '',
    specialization: '',
    
    // 자격 및 경력
    certificates: [],
    workExperience: '',
    awards: '',
    education: '',
    
    // SNS 활동
    hasSns: false,
    instagram: '',
    instagramFollowers: '',
    youtube: '',
    youtubeSubscribers: '',
    tiktok: '',
    tiktokFollowers: '',
    
    // 포트폴리오
    portfolio: [],
    
    // 활동 의향
    activities: [],
    targetRevenue: '',
    availableTime: '',
    
    // 약관 동의
    termsAgreed: false,
    privacyAgreed: false,
    revenueAgreed: false,
    marketingAgreed: false
  });

  const professions = [
    '메이크업 아티스트',
    '헤어 디자이너',
    '네일 아티스트',
    '뷰티 인플루언서',
    '스킨케어 전문가',
    '뷰티 에디터',
    '뷰티 유튜버',
    '기타'
  ];

  const activities = [
    '제품 추천',
    '콘텐츠 제작',
    '개인 상담',
    '브랜드 협업',
    '교육 서비스',
    '이벤트 참여'
  ];

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 폼 제출 로직
    console.log('Expert registration:', formData);
    // 성공 시 대시보드로 이동
    router.push('/partnership/experts/dashboard');
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Link href="/partnership/experts" className="inline-flex items-center text-amber-600 hover:text-amber-700 mb-4">
            <FontAwesomeIcon icon={faStar} className="w-4 h-4 mr-2" />
            전문가 파트너십으로 돌아가기
          </Link>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            전문가 등록
          </h1>
          <p className="text-xl text-slate-600">
            tegana와 함께 당신의 전문성을 마음껏 발휘하세요
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            {['기본 정보', '전문 분야', '자격 경력', '활동 의향'].map((step, index) => (
              <div key={step} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                  currentStep > index + 1 
                    ? 'bg-amber-400 text-white' 
                    : currentStep === index + 1 
                    ? 'bg-amber-400 text-white' 
                    : 'bg-slate-200 text-slate-600'
                }`}>
                  {currentStep > index + 1 ? (
                    <FontAwesomeIcon icon={faCheck} className="w-4 h-4" />
                  ) : (
                    index + 1
                  )}
                </div>
                {index < 3 && (
                  <div className={`w-16 h-1 mx-2 ${
                    currentStep > index + 1 ? 'bg-amber-400' : 'bg-slate-200'
                  }`}></div>
                )}
              </div>
            ))}
          </div>
          <p className="text-center text-slate-600">
            {currentStep} / 4 단계
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8">
          {/* Step 1: 기본 정보 */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">기본 정보</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    <FontAwesomeIcon icon={faUser} className="w-4 h-4 mr-2" />
                    이름 *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4 mr-2" />
                    이메일 *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    <FontAwesomeIcon icon={faPhone} className="w-4 h-4 mr-2" />
                    전화번호 *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    <FontAwesomeIcon icon={faCalendar} className="w-4 h-4 mr-2" />
                    생년월일
                  </label>
                  <input
                    type="date"
                    value={formData.birthdate}
                    onChange={(e) => handleInputChange('birthdate', e.target.value)}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    성별
                  </label>
                  <select
                    value={formData.gender}
                    onChange={(e) => handleInputChange('gender', e.target.value)}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400"
                  >
                    <option value="">선택하세요</option>
                    <option value="female">여성</option>
                    <option value="male">남성</option>
                    <option value="other">기타</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="w-4 h-4 mr-2" />
                    주소
                  </label>
                  <input
                    type="text"
                    value={formData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400"
                    placeholder="서울시 강남구"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 2: 전문 분야 */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">전문 분야</h2>
              
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-4">
                  전문 분야 (다중 선택 가능) *
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {professions.map((profession) => (
                    <label key={profession} className="flex items-center p-3 border border-slate-300 rounded-lg hover:bg-slate-50 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.profession.includes(profession)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            handleInputChange('profession', [...formData.profession, profession]);
                          } else {
                            handleInputChange('profession', formData.profession.filter(p => p !== profession));
                          }
                        }}
                        className="mr-3"
                      />
                      {profession}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  경력 기간 *
                </label>
                <input
                  type="text"
                  value={formData.experience}
                  onChange={(e) => handleInputChange('experience', e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400"
                  placeholder="예: 5년"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  특화 분야
                </label>
                <textarea
                  value={formData.specialization}
                  onChange={(e) => handleInputChange('specialization', e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400"
                  rows={3}
                  placeholder="특별히 잘하는 분야나 특화된 기술을 설명해주세요"
                />
              </div>
            </div>
          )}

          {/* Step 3: 자격 및 경력 */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">자격 및 경력</h2>
              
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  <FontAwesomeIcon icon={faCertificate} className="w-4 h-4 mr-2" />
                  보유 자격증
                </label>
                <textarea
                  value={formData.certificates.join('\n')}
                  onChange={(e) => handleInputChange('certificates', e.target.value.split('\n').filter(cert => cert.trim()))}
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400"
                  rows={3}
                  placeholder="보유하고 있는 자격증을 한 줄씩 입력해주세요"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  <FontAwesomeIcon icon={faBriefcase} className="w-4 h-4 mr-2" />
                  업무 경력
                </label>
                <textarea
                  value={formData.workExperience}
                  onChange={(e) => handleInputChange('workExperience', e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400"
                  rows={3}
                  placeholder="근무했던 미용실, 뷰티샵 등의 경력을 입력해주세요"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  <FontAwesomeIcon icon={faStar} className="w-4 h-4 mr-2" />
                  수상 경력
                </label>
                <textarea
                  value={formData.awards}
                  onChange={(e) => handleInputChange('awards', e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400"
                  rows={2}
                  placeholder="뷰티 대회 수상, 매체 출연 등의 경력을 입력해주세요"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  교육 이수
                </label>
                <textarea
                  value={formData.education}
                  onChange={(e) => handleInputChange('education', e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400"
                  rows={2}
                  placeholder="수료한 뷰티 관련 교육 과정을 입력해주세요"
                />
              </div>
            </div>
          )}

          {/* Step 4: 활동 의향 */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">활동 의향</h2>
              
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-4">
                  희망 활동 (다중 선택 가능) *
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {activities.map((activity) => (
                    <label key={activity} className="flex items-center p-3 border border-slate-300 rounded-lg hover:bg-slate-50 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.activities.includes(activity)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            handleInputChange('activities', [...formData.activities, activity]);
                          } else {
                            handleInputChange('activities', formData.activities.filter(a => a !== activity));
                          }
                        }}
                        className="mr-3"
                      />
                      {activity}
                    </label>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    월 목표 수익
                  </label>
                  <select
                    value={formData.targetRevenue}
                    onChange={(e) => handleInputChange('targetRevenue', e.target.value)}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400"
                  >
                    <option value="">선택하세요</option>
                    <option value="50-100">50-100만원</option>
                    <option value="100-200">100-200만원</option>
                    <option value="200-300">200-300만원</option>
                    <option value="300-500">300-500만원</option>
                    <option value="500+">500만원 이상</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    주당 활동 가능 시간
                  </label>
                  <select
                    value={formData.availableTime}
                    onChange={(e) => handleInputChange('availableTime', e.target.value)}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400"
                  >
                    <option value="">선택하세요</option>
                    <option value="5-10">5-10시간</option>
                    <option value="10-20">10-20시간</option>
                    <option value="20-30">20-30시간</option>
                    <option value="30+">30시간 이상</option>
                  </select>
                </div>
              </div>

              {/* 약관 동의 */}
              <div className="space-y-4 border-t pt-6">
                <h3 className="text-lg font-semibold text-slate-900">약관 동의</h3>
                
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    checked={formData.termsAgreed}
                    onChange={(e) => handleInputChange('termsAgreed', e.target.checked)}
                    className="mr-3 mt-1"
                    required
                  />
                  <span className="text-sm text-slate-700">
                    <span className="text-red-500">*</span> 이용약관에 동의합니다
                  </span>
                </label>

                <label className="flex items-start">
                  <input
                    type="checkbox"
                    checked={formData.privacyAgreed}
                    onChange={(e) => handleInputChange('privacyAgreed', e.target.checked)}
                    className="mr-3 mt-1"
                    required
                  />
                  <span className="text-sm text-slate-700">
                    <span className="text-red-500">*</span> 개인정보처리방침에 동의합니다
                  </span>
                </label>

                <label className="flex items-start">
                  <input
                    type="checkbox"
                    checked={formData.revenueAgreed}
                    onChange={(e) => handleInputChange('revenueAgreed', e.target.checked)}
                    className="mr-3 mt-1"
                    required
                  />
                  <span className="text-sm text-slate-700">
                    <span className="text-red-500">*</span> 수익 공유 정책에 동의합니다
                  </span>
                </label>

                <label className="flex items-start">
                  <input
                    type="checkbox"
                    checked={formData.marketingAgreed}
                    onChange={(e) => handleInputChange('marketingAgreed', e.target.checked)}
                    className="mr-3 mt-1"
                  />
                  <span className="text-sm text-slate-700">
                    마케팅 정보 수신에 동의합니다 (선택사항)
                  </span>
                </label>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t">
            {currentStep > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="px-6 py-3 border border-slate-300 text-slate-700 rounded-xl hover:bg-slate-50 transition-colors"
              >
                이전
              </button>
            )}
            
            <div className="ml-auto">
              {currentStep < 4 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="px-6 py-3 bg-gradient-to-r from-amber-400 to-orange-400 text-white rounded-xl hover:from-amber-500 hover:to-orange-500 transition-all duration-300"
                >
                  다음
                </button>
              ) : (
                <button
                  type="submit"
                  className="px-8 py-3 bg-gradient-to-r from-amber-400 to-orange-400 text-white rounded-xl hover:from-amber-500 hover:to-orange-500 transition-all duration-300 font-semibold"
                >
                  등록 완료
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
} 