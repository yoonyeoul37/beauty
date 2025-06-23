'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faCheck } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function BrandRegistrationPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: 기본 정보
    brandName: '',
    companyName: '',
    businessNumber: '',
    representativeName: '',
    email: '',
    phone: '',
    website: '',
    
    // Step 2: 브랜드 정보
    category: '',
    subCategories: [] as string[],
    brandDescription: '',
    targetAge: [] as string[],
    priceRange: '',
    brandStory: '',
    
    // Step 3: 제품 정보
    mainProducts: [] as string[],
    productCount: '',
    bestSellers: '',
    certifications: [] as string[],
    
    // Step 4: 마케팅 정보
    marketingBudget: '',
    preferredCollaboration: [] as string[],
    socialMedia: {
      instagram: '',
      youtube: '',
      tiktok: '',
      blog: ''
    },
    
    // Step 5: 동의사항
    termsAgreed: false,
    privacyAgreed: false,
    marketingAgreed: false
  });

  const categories = ['스킨케어', '메이크업', '헤어케어', '네일케어', '바디케어', '향수', '기타'];
  const subCategoryOptions = {
    '스킨케어': ['클렌저', '토너', '에센스', '크림', '마스크팩', '선케어', '기타'],
    '메이크업': ['베이스메이크업', '아이메이크업', '립메이크업', '치크메이크업', '기타'],
    '헤어케어': ['샴푸', '컨디셔너', '트리트먼트', '헤어에센스', '헤어스프레이', '기타'],
    '네일케어': ['네일폴리시', '베이스코트', '탑코트', '네일케어제품', '기타'],
    '바디케어': ['바디워시', '바디로션', '핸드케어', '풋케어', '기타'],
    '향수': ['여성향수', '남성향수', '유니섹스향수', '기타'],
    '기타': ['기타']
  };
  const ageGroups = ['10대', '20대', '30대', '40대', '50대+'];
  const priceRanges = ['저가(1만원 미만)', '중저가(1-3만원)', '중가(3-5만원)', '중고가(5-10만원)', '고가(10만원 이상)'];
  const collaborationTypes = ['제품 추천', '브랜드 콘텐츠', '브랜드 앰버서더', '이벤트 협력', '전문가 교육'];
  const certificationOptions = ['화장품GMP', 'ISO9001', 'ISO14001', 'HACCP', 'FDA승인', 'CE인증', '기타'];

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

  const handleSocialMediaChange = (platform: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      socialMedia: {
        ...prev.socialMedia,
        [platform]: value
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
    console.log('브랜드 등록 데이터:', formData);
    // 여기에 실제 제출 로직 추가
    alert('브랜드 등록이 완료되었습니다! 검토 후 연락드리겠습니다.');
  };

  const renderStep1 = () => (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-slate-900 mb-6">기본 정보</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">브랜드명 *</label>
          <input
            type="text"
            value={formData.brandName}
            onChange={(e) => handleInputChange('brandName', e.target.value)}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">회사명 *</label>
          <input
            type="text"
            value={formData.companyName}
            onChange={(e) => handleInputChange('companyName', e.target.value)}
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
          <label className="block text-sm font-medium text-slate-700 mb-2">웹사이트</label>
          <input
            type="url"
            value={formData.website}
            onChange={(e) => handleInputChange('website', e.target.value)}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent"
            placeholder="https://www.example.com"
          />
        </div>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-slate-900 mb-6">브랜드 정보</h3>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">카테고리 *</label>
          <select
            value={formData.category}
            onChange={(e) => handleInputChange('category', e.target.value)}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent"
            required
          >
            <option value="">카테고리를 선택하세요</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
        
        {formData.category && (
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">세부 카테고리 (복수 선택 가능)</label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {subCategoryOptions[formData.category as keyof typeof subCategoryOptions]?.map(subCategory => (
                <label key={subCategory} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={formData.subCategories.includes(subCategory)}
                    onChange={(e) => handleArrayChange('subCategories', subCategory, e.target.checked)}
                    className="rounded border-slate-300 text-amber-400 focus:ring-amber-400"
                  />
                  <span className="text-sm text-slate-700">{subCategory}</span>
                </label>
              ))}
            </div>
          </div>
        )}
        
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">브랜드 설명 *</label>
          <textarea
            value={formData.brandDescription}
            onChange={(e) => handleInputChange('brandDescription', e.target.value)}
            rows={4}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent"
            placeholder="브랜드의 특징과 가치를 설명해주세요"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">타겟 연령층 (복수 선택 가능)</label>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {ageGroups.map(age => (
              <label key={age} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={formData.targetAge.includes(age)}
                  onChange={(e) => handleArrayChange('targetAge', age, e.target.checked)}
                  className="rounded border-slate-300 text-amber-400 focus:ring-amber-400"
                />
                <span className="text-sm text-slate-700">{age}</span>
              </label>
            ))}
          </div>
        </div>
        
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
          <label className="block text-sm font-medium text-slate-700 mb-2">브랜드 스토리</label>
          <textarea
            value={formData.brandStory}
            onChange={(e) => handleInputChange('brandStory', e.target.value)}
            rows={4}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent"
            placeholder="브랜드의 탄생 배경과 철학을 설명해주세요"
          />
        </div>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-slate-900 mb-6">제품 정보</h3>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">주요 제품군 (복수 선택 가능)</label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {subCategoryOptions[formData.category as keyof typeof subCategoryOptions]?.map(product => (
              <label key={product} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={formData.mainProducts.includes(product)}
                  onChange={(e) => handleArrayChange('mainProducts', product, e.target.checked)}
                  className="rounded border-slate-300 text-amber-400 focus:ring-amber-400"
                />
                <span className="text-sm text-slate-700">{product}</span>
              </label>
            ))}
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">총 제품 수 *</label>
          <select
            value={formData.productCount}
            onChange={(e) => handleInputChange('productCount', e.target.value)}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent"
            required
          >
            <option value="">제품 수를 선택하세요</option>
            <option value="1-10개">1-10개</option>
            <option value="11-30개">11-30개</option>
            <option value="31-50개">31-50개</option>
            <option value="51-100개">51-100개</option>
            <option value="100개 이상">100개 이상</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">베스트셀러 제품</label>
          <textarea
            value={formData.bestSellers}
            onChange={(e) => handleInputChange('bestSellers', e.target.value)}
            rows={3}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent"
            placeholder="인기 제품명과 특징을 설명해주세요"
          />
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

  const renderStep4 = () => (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-slate-900 mb-6">마케팅 정보</h3>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">월 마케팅 예산</label>
          <select
            value={formData.marketingBudget}
            onChange={(e) => handleInputChange('marketingBudget', e.target.value)}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent"
          >
            <option value="">예산을 선택하세요</option>
            <option value="100만원 미만">100만원 미만</option>
            <option value="100-300만원">100-300만원</option>
            <option value="300-500만원">300-500만원</option>
            <option value="500-1000만원">500-1000만원</option>
            <option value="1000만원 이상">1000만원 이상</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">선호하는 협력 방식 (복수 선택 가능)</label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {collaborationTypes.map(type => (
              <label key={type} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={formData.preferredCollaboration.includes(type)}
                  onChange={(e) => handleArrayChange('preferredCollaboration', type, e.target.checked)}
                  className="rounded border-slate-300 text-amber-400 focus:ring-amber-400"
                />
                <span className="text-sm text-slate-700">{type}</span>
              </label>
            ))}
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">소셜 미디어 계정</label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-slate-600 mb-1">Instagram</label>
              <input
                type="text"
                value={formData.socialMedia.instagram}
                onChange={(e) => handleSocialMediaChange('instagram', e.target.value)}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                placeholder="@username"
              />
            </div>
            <div>
              <label className="block text-sm text-slate-600 mb-1">YouTube</label>
              <input
                type="text"
                value={formData.socialMedia.youtube}
                onChange={(e) => handleSocialMediaChange('youtube', e.target.value)}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                placeholder="채널명"
              />
            </div>
            <div>
              <label className="block text-sm text-slate-600 mb-1">TikTok</label>
              <input
                type="text"
                value={formData.socialMedia.tiktok}
                onChange={(e) => handleSocialMediaChange('tiktok', e.target.value)}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                placeholder="@username"
              />
            </div>
            <div>
              <label className="block text-sm text-slate-600 mb-1">Blog</label>
              <input
                type="text"
                value={formData.socialMedia.blog}
                onChange={(e) => handleSocialMediaChange('blog', e.target.value)}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                placeholder="블로그 주소"
              />
            </div>
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
          <Link href="/partnership/brands" className="inline-flex items-center text-slate-600 hover:text-slate-900 mb-4">
            <FontAwesomeIcon icon={faArrowLeft} className="w-4 h-4 mr-2" />
            브랜드 파트너십으로 돌아가기
          </Link>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">브랜드 등록</h1>
          <p className="text-lg text-slate-600">tegana와 함께 브랜드 가치를 높여보세요</p>
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
            {currentStep === 2 && '브랜드 정보'}
            {currentStep === 3 && '제품 정보'}
            {currentStep === 4 && '마케팅 정보'}
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