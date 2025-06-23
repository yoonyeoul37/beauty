'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faCheck, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function BusinessRegistrationPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: 기본 정보
    businessName: '',
    businessType: '',
    representativeName: '',
    businessNumber: '',
    email: '',
    phone: '',
    address: '',
    detailAddress: '',
    
    // Step 2: 서비스 정보
    services: [] as string[],
    specialties: [] as string[],
    businessDescription: '',
    operatingHours: {
      monday: { open: '', close: '' },
      tuesday: { open: '', close: '' },
      wednesday: { open: '', close: '' },
      thursday: { open: '', close: '' },
      friday: { open: '', close: '' },
      saturday: { open: '', close: '' },
      sunday: { open: '', close: '' }
    },
    
    // Step 3: 가격 정보
    priceRange: '',
    pricePolicy: '',
    specialOffers: '',
    paymentMethods: [] as string[],
    
    // Step 4: 시설 정보
    staffCount: '',
    parkingAvailable: false,
    wifiAvailable: false,
    facilities: [] as string[],
    certifications: [] as string[],
    
    // Step 5: 동의사항
    termsAgreed: false,
    privacyAgreed: false,
    marketingAgreed: false
  });

  const businessTypes = ['미용실', '네일샵', '뷰티샵', '메디컬 뷰티', '기타'];
  const serviceOptions = {
    '미용실': ['커트', '염색', '펌', '스타일링', '헤드스파', '트리트먼트', '업스타일', '기타'],
    '네일샵': ['젤네일', '아크릴', '네일아트', '네일케어', '패디큐어', '기타'],
    '뷰티샵': ['메이크업', '에스테틱', '피부관리', '왁싱', '아이라인', '속눈썹', '기타'],
    '메디컬 뷰티': ['레이저 시술', '보톡스', '필러', '리프팅', '피부과 시술', '기타'],
    '기타': ['기타']
  };
  const specialtyOptions = ['신부 메이크업', '프로 메이크업', '네일아트', '헤어스타일링', '피부관리', '에스테틱', '메디컬 뷰티', '기타'];
  const priceRanges = ['저가(1만원 미만)', '중저가(1-3만원)', '중가(3-5만원)', '중고가(5-10만원)', '고가(10만원 이상)'];
  const paymentMethods = ['현금', '카드', '계좌이체', '간편결제', '포인트', '기타'];
  const facilityOptions = ['주차장', 'WiFi', '화장실', '대기실', '음료제공', 'TV', '음악', '기타'];
  const certificationOptions = ['화장품GMP', 'ISO9001', 'ISO14001', 'HACCP', '미용사면허', '기타'];

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleArrayChange = (field: string, value: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: checked 
        ? [...prev[field as keyof typeof prev] as string[], value]
        : (prev[field as keyof typeof prev] as string[]).filter(item => item !== value)
    }));
  };

  const handleOperatingHoursChange = (day: string, type: 'open' | 'close', value: string) => {
    setFormData(prev => ({
      ...prev,
      operatingHours: {
        ...prev.operatingHours,
        [day]: {
          ...prev.operatingHours[day as keyof typeof prev.operatingHours],
          [type]: value
        }
      }
    }));
  };

  const nextStep = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('비즈니스 등록 데이터:', formData);
    // 여기에 실제 제출 로직 추가
    alert('비즈니스 등록이 완료되었습니다! 검토 후 연락드리겠습니다.');
  };

  const renderStep1 = () => (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-slate-900 mb-6">기본 정보</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">비즈니스명 *</label>
          <input
            type="text"
            value={formData.businessName}
            onChange={(e) => handleInputChange('businessName', e.target.value)}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">비즈니스 유형 *</label>
          <select
            value={formData.businessType}
            onChange={(e) => handleInputChange('businessType', e.target.value)}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent"
            required
          >
            <option value="">유형을 선택하세요</option>
            {businessTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">대표자명 *</label>
          <input
            type="text"
            value={formData.representativeName}
            onChange={(e) => handleInputChange('representativeName', e.target.value)}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">사업자등록번호 *</label>
          <input
            type="text"
            value={formData.businessNumber}
            onChange={(e) => handleInputChange('businessNumber', e.target.value)}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent"
            placeholder="000-00-00000"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">이메일 *</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">연락처 *</label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent"
            placeholder="010-0000-0000"
            required
          />
        </div>
        
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-slate-700 mb-2">주소 *</label>
          <input
            type="text"
            value={formData.address}
            onChange={(e) => handleInputChange('address', e.target.value)}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent"
            placeholder="기본주소"
            required
          />
        </div>
        
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-slate-700 mb-2">상세주소</label>
          <input
            type="text"
            value={formData.detailAddress}
            onChange={(e) => handleInputChange('detailAddress', e.target.value)}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent"
            placeholder="상세주소 (건물명, 층수 등)"
          />
        </div>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-slate-900 mb-6">서비스 정보</h3>
      
      <div className="space-y-6">
        {formData.businessType && (
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">제공 서비스 (복수 선택 가능) *</label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {serviceOptions[formData.businessType as keyof typeof serviceOptions]?.map(service => (
                <label key={service} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={formData.services.includes(service)}
                    onChange={(e) => handleArrayChange('services', service, e.target.checked)}
                    className="rounded border-slate-300 text-amber-400 focus:ring-amber-400"
                  />
                  <span className="text-sm text-slate-700">{service}</span>
                </label>
              ))}
            </div>
          </div>
        )}
        
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">전문 분야 (복수 선택 가능)</label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {specialtyOptions.map(specialty => (
              <label key={specialty} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={formData.specialties.includes(specialty)}
                  onChange={(e) => handleArrayChange('specialties', specialty, e.target.checked)}
                  className="rounded border-slate-300 text-amber-400 focus:ring-amber-400"
                />
                <span className="text-sm text-slate-700">{specialty}</span>
              </label>
            ))}
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">비즈니스 설명 *</label>
          <textarea
            value={formData.businessDescription}
            onChange={(e) => handleInputChange('businessDescription', e.target.value)}
            rows={4}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent"
            placeholder="비즈니스의 특징과 강점을 설명해주세요"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-4">운영시간</label>
          <div className="space-y-3">
            {Object.entries(formData.operatingHours).map(([day, hours]) => (
              <div key={day} className="flex items-center space-x-4">
                <div className="w-20 text-sm font-medium text-slate-700">
                  {day === 'monday' && '월요일'}
                  {day === 'tuesday' && '화요일'}
                  {day === 'wednesday' && '수요일'}
                  {day === 'thursday' && '목요일'}
                  {day === 'friday' && '금요일'}
                  {day === 'saturday' && '토요일'}
                  {day === 'sunday' && '일요일'}
                </div>
                <input
                  type="time"
                  value={hours.open}
                  onChange={(e) => handleOperatingHoursChange(day, 'open', e.target.value)}
                  className="px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                />
                <span className="text-slate-500">~</span>
                <input
                  type="time"
                  value={hours.close}
                  onChange={(e) => handleOperatingHoursChange(day, 'close', e.target.value)}
                  className="px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-slate-900 mb-6">가격 정보</h3>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">가격대 *</label>
          <select
            value={formData.priceRange}
            onChange={(e) => handleInputChange('priceRange', e.target.value)}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent"
            required
          >
            <option value="">가격대를 선택하세요</option>
            {priceRanges.map(range => (
              <option key={range} value={range}>{range}</option>
            ))}
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">가격 정책</label>
          <textarea
            value={formData.pricePolicy}
            onChange={(e) => handleInputChange('pricePolicy', e.target.value)}
            rows={3}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent"
            placeholder="가격 정책이나 할인 혜택을 설명해주세요"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">특별 혜택</label>
          <textarea
            value={formData.specialOffers}
            onChange={(e) => handleInputChange('specialOffers', e.target.value)}
            rows={3}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent"
            placeholder="신규 고객 할인, 패키지 할인 등 특별 혜택을 설명해주세요"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">결제 방법 (복수 선택 가능)</label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {paymentMethods.map(method => (
              <label key={method} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={formData.paymentMethods.includes(method)}
                  onChange={(e) => handleArrayChange('paymentMethods', method, e.target.checked)}
                  className="rounded border-slate-300 text-amber-400 focus:ring-amber-400"
                />
                <span className="text-sm text-slate-700">{method}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-slate-900 mb-6">시설 정보</h3>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">직원 수</label>
          <select
            value={formData.staffCount}
            onChange={(e) => handleInputChange('staffCount', e.target.value)}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent"
          >
            <option value="">직원 수를 선택하세요</option>
            <option value="1명">1명</option>
            <option value="2-3명">2-3명</option>
            <option value="4-5명">4-5명</option>
            <option value="6-10명">6-10명</option>
            <option value="10명 이상">10명 이상</option>
          </select>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={formData.parkingAvailable}
                onChange={(e) => handleInputChange('parkingAvailable', e.target.checked)}
                className="rounded border-slate-300 text-amber-400 focus:ring-amber-400"
              />
              <span className="text-sm font-medium text-slate-700">주차 가능</span>
            </label>
          </div>
          
          <div>
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={formData.wifiAvailable}
                onChange={(e) => handleInputChange('wifiAvailable', e.target.checked)}
                className="rounded border-slate-300 text-amber-400 focus:ring-amber-400"
              />
              <span className="text-sm font-medium text-slate-700">WiFi 제공</span>
            </label>
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">편의시설 (복수 선택 가능)</label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {facilityOptions.map(facility => (
              <label key={facility} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={formData.facilities.includes(facility)}
                  onChange={(e) => handleArrayChange('facilities', facility, e.target.checked)}
                  className="rounded border-slate-300 text-amber-400 focus:ring-amber-400"
                />
                <span className="text-sm text-slate-700">{facility}</span>
              </label>
            ))}
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">인증서 (복수 선택 가능)</label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {certificationOptions.map(cert => (
              <label key={cert} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={formData.certifications.includes(cert)}
                  onChange={(e) => handleArrayChange('certifications', cert, e.target.checked)}
                  className="rounded border-slate-300 text-amber-400 focus:ring-amber-400"
                />
                <span className="text-sm text-slate-700">{cert}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderStep5 = () => (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-slate-900 mb-6">동의사항</h3>
      
      <div className="space-y-4">
        <label className="flex items-start space-x-3">
          <input
            type="checkbox"
            checked={formData.termsAgreed}
            onChange={(e) => handleInputChange('termsAgreed', e.target.checked)}
            className="mt-1 rounded border-slate-300 text-amber-400 focus:ring-amber-400"
            required
          />
          <div className="text-sm text-slate-700">
            <span className="font-medium">이용약관</span>에 동의합니다. *
          </div>
        </label>
        
        <label className="flex items-start space-x-3">
          <input
            type="checkbox"
            checked={formData.privacyAgreed}
            onChange={(e) => handleInputChange('privacyAgreed', e.target.checked)}
            className="mt-1 rounded border-slate-300 text-amber-400 focus:ring-amber-400"
            required
          />
          <div className="text-sm text-slate-700">
            <span className="font-medium">개인정보처리방침</span>에 동의합니다. *
          </div>
        </label>
        
        <label className="flex items-start space-x-3">
          <input
            type="checkbox"
            checked={formData.marketingAgreed}
            onChange={(e) => handleInputChange('marketingAgreed', e.target.checked)}
            className="mt-1 rounded border-slate-300 text-amber-400 focus:ring-amber-400"
          />
          <div className="text-sm text-slate-700">
            <span className="font-medium">마케팅 정보 수신</span>에 동의합니다. (선택)
          </div>
        </label>
      </div>
      
      <div className="bg-slate-50 p-4 rounded-lg">
        <p className="text-sm text-slate-600">
          * 표시된 항목은 필수 동의사항입니다. 모든 필수 항목에 동의해야 등록이 완료됩니다.
        </p>
      </div>
    </div>
  );

  const renderStepContent = () => {
    switch (currentStep) {
      case 1: return renderStep1();
      case 2: return renderStep2();
      case 3: return renderStep3();
      case 4: return renderStep4();
      case 5: return renderStep5();
      default: return renderStep1();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/partnership/business" className="inline-flex items-center text-slate-600 hover:text-slate-900 mb-4">
            <FontAwesomeIcon icon={faArrowLeft} className="w-4 h-4 mr-2" />
            뷰티 비즈니스 파트너십으로 돌아가기
          </Link>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">비즈니스 등록</h1>
          <p className="text-lg text-slate-600">tegana와 함께 위치 기반 동적 가격으로 수익을 최적화하세요</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            {[1, 2, 3, 4, 5].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                  step <= currentStep 
                    ? 'bg-amber-400 text-white' 
                    : 'bg-slate-200 text-slate-600'
                }`}>
                  {step < currentStep ? <FontAwesomeIcon icon={faCheck} className="w-4 h-4" /> : step}
                </div>
                {step < 5 && (
                  <div className={`w-16 h-1 mx-2 ${
                    step < currentStep ? 'bg-amber-400' : 'bg-slate-200'
                  }`}></div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center text-sm text-slate-600">
            {currentStep === 1 && '기본 정보'}
            {currentStep === 2 && '서비스 정보'}
            {currentStep === 3 && '가격 정보'}
            {currentStep === 4 && '시설 정보'}
            {currentStep === 5 && '동의사항'}
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <form onSubmit={handleSubmit}>
            {renderStepContent()}
            
            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <button
                type="button"
                onClick={prevStep}
                disabled={currentStep === 1}
                className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  currentStep === 1
                    ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                    : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                }`}
              >
                <FontAwesomeIcon icon={faArrowLeft} className="w-4 h-4 mr-2" />
                이전
              </button>
              
              {currentStep < 5 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="flex items-center px-6 py-3 bg-gradient-to-r from-amber-400 to-orange-400 text-white rounded-lg font-semibold hover:from-amber-500 hover:to-orange-500 transition-all duration-300"
                >
                  다음
                  <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4 ml-2" />
                </button>
              ) : (
                <button
                  type="submit"
                  className="flex items-center px-8 py-3 bg-gradient-to-r from-amber-400 to-orange-400 text-white rounded-lg font-semibold hover:from-amber-500 hover:to-orange-500 transition-all duration-300"
                >
                  등록 완료
                  <FontAwesomeIcon icon={faCheck} className="w-4 h-4 ml-2" />
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 