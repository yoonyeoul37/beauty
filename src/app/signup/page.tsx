'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUser, 
  faBuilding, 
  faEnvelope, 
  faLock, 
  faEye, 
  faEyeSlash,
  faArrowLeft,
  faSpinner,
  faCheckCircle,
  faMapMarkerAlt,
  faPhone,
  faStore,
  faCalendarAlt,
  faPercent,
  faTag
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

// 업종별 설정
const categoryConfig = {
  '헤어': {
    services: ['컷', '펌', '염색', '클리닉', '스타일링'],
    icon: '💇‍♀️',
    color: 'from-blue-500 to-indigo-600'
  },
  '네일아트': {
    services: ['젤네일', '네일아트', '네일케어', '패디큐어'],
    icon: '💅',
    color: 'from-pink-500 to-rose-600'
  },
  '메이크업': {
    services: ['데일리메이크업', '웨딩메이크업', '특수분장', '메이크업클래스'],
    icon: '💄',
    color: 'from-purple-500 to-violet-600'
  },
  '피부관리': {
    services: ['기본피부관리', '고급피부관리', '특수관리', '장비관리'],
    icon: '🧴',
    color: 'from-green-500 to-emerald-600'
  },
  '속눈썹': {
    services: ['속눈썹연장', '속눈썹펌', '속눈썹관리'],
    icon: '👁️',
    color: 'from-amber-500 to-orange-600'
  },
  '왁싱': {
    services: ['얼굴왁싱', '바디왁싱', '특수부위'],
    icon: '🪶',
    color: 'from-red-500 to-pink-600'
  },
  '반영구': {
    services: ['눈썹문신', '아이라인', '입술문신'],
    icon: '🖋️',
    color: 'from-gray-500 to-slate-600'
  }
};

export default function SignupPage() {
  const [step, setStep] = useState(1);
  const [userType, setUserType] = useState<'user' | 'business'>('user');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [hasTimeSpecial, setHasTimeSpecial] = useState(false);
  
  const [formData, setFormData] = useState({
    // 기본 정보
    email: '',
    password: '',
    businessName: '',
    phone: '',
    address: '',
    
    // 서비스 가격
    servicePrices: {},
    
    // 타임스페셜
    timeSpecialService: '',
    discountRate: '',
    startDate: '',
    endDate: '',
    description: '',
    
    // 업체 프로필 (4단계)
    businessDescription: '',
    businessHours: {
      monday: { open: '09:00', close: '18:00', closed: false },
      tuesday: { open: '09:00', close: '18:00', closed: false },
      wednesday: { open: '09:00', close: '18:00', closed: false },
      thursday: { open: '09:00', close: '18:00', closed: false },
      friday: { open: '09:00', close: '18:00', closed: false },
      saturday: { open: '10:00', close: '17:00', closed: false },
      sunday: { open: '10:00', close: '17:00', closed: true }
    },
    parkingAvailable: false,
    wifiAvailable: false,
    cardPayment: true,
    cashPayment: true
  });

  const handleInputChange = (field: string, value: string | object) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleServicePriceChange = (service: string, price: string) => {
    setFormData(prev => ({
      ...prev,
      servicePrices: {
        ...prev.servicePrices,
        [service]: price
      }
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // 시뮬레이션된 회원가입 처리
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      
      // 성공 후 업체 관리 페이지로 리다이렉트
      setTimeout(() => {
        window.location.href = '/dashboard';
      }, 2000);
    }, 3000);
  };

  const nextStep = () => {
    if (step < (userType === 'business' ? 4 : 1)) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const selectedCategoryConfig = categoryConfig[selectedCategory as keyof typeof categoryConfig];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-100 flex items-center justify-center p-4">
      {/* 배경 애니메이션 요소들 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-slate-300 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-32 h-32 bg-zinc-300 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative w-full max-w-2xl">
        {/* 뒤로가기 버튼 */}
        <Link 
          href="/"
          className="absolute -top-16 left-0 flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors duration-300 group"
        >
          <FontAwesomeIcon 
            icon={faArrowLeft} 
            className="transition-transform duration-300 group-hover:-translate-x-1" 
          />
          <span className="text-sm font-medium">홈으로 돌아가기</span>
        </Link>

        {/* 메인 카드 */}
        <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/30">
          {/* 로고 및 제목 */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <span className="text-2xl font-bold text-white">S</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">스타일로그</h1>
            <p className="text-gray-600 text-sm">회원가입으로 뷰티 비즈니스를 시작하세요</p>
          </div>

          {/* 진행 단계 표시 */}
          <div className="flex items-center justify-center mb-8">
            {userType === 'business' ? [1, 2, 3, 4].map((stepNumber) => (
              <div key={stepNumber} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  step >= stepNumber 
                    ? 'bg-amber-500 text-white' 
                    : 'bg-gray-200 text-gray-500'
                }`}>
                  {stepNumber}
                </div>
                {stepNumber < 4 && (
                  <div className={`w-12 h-1 mx-2 ${
                    step > stepNumber ? 'bg-amber-500' : 'bg-gray-200'
                  }`}></div>
                )}
              </div>
            )) : (
              <div className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center text-sm font-medium">
                1
              </div>
            )}
          </div>

          {/* 단계별 폼 */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* 1단계: 사용자 유형 및 기본 정보 */}
            {step === 1 && (
              <div className="space-y-6">
                {/* 사용자 유형 선택 */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-800">사용자 유형 선택</h3>
                  <div className="flex bg-gray-100 rounded-2xl p-1">
                    <button
                      type="button"
                      onClick={() => setUserType('user')}
                      className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-medium text-sm transition-all duration-300 ${
                        userType === 'user'
                          ? 'bg-white text-amber-600 shadow-md transform scale-105'
                          : 'text-gray-600 hover:text-gray-800'
                      }`}
                    >
                      <FontAwesomeIcon icon={faUser} className="text-base" />
                      <span>일반 회원가입</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setUserType('business')}
                      className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-medium text-sm transition-all duration-300 ${
                        userType === 'business'
                          ? 'bg-white text-amber-600 shadow-md transform scale-105'
                          : 'text-gray-600 hover:text-gray-800'
                      }`}
                    >
                      <FontAwesomeIcon icon={faBuilding} className="text-base" />
                      <span>사업자 회원가입</span>
                    </button>
                  </div>
                </div>

                {/* 기본 정보 */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-800">기본 정보</h3>
                  
                  {/* 이메일 */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                      <FontAwesomeIcon icon={faEnvelope} className="text-amber-500" />
                      이메일
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 bg-white/70 backdrop-blur-sm"
                      placeholder="이메일을 입력하세요"
                      required
                    />
                  </div>

                  {/* 비밀번호 */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                      <FontAwesomeIcon icon={faLock} className="text-amber-500" />
                      비밀번호
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        value={formData.password}
                        onChange={(e) => handleInputChange('password', e.target.value)}
                        className="w-full px-4 py-3 pr-12 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 bg-white/70 backdrop-blur-sm"
                        placeholder="비밀번호를 입력하세요"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                      >
                        <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                      </button>
                    </div>
                  </div>

                  {/* 사업자 정보 (사업자 선택 시) */}
                  {userType === 'business' && (
                    <>
                      {/* 업체명 */}
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                          <FontAwesomeIcon icon={faStore} className="text-amber-500" />
                          업체명
                        </label>
                        <input
                          type="text"
                          value={formData.businessName}
                          onChange={(e) => handleInputChange('businessName', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 bg-white/70 backdrop-blur-sm"
                          placeholder="업체명을 입력하세요"
                          required
                        />
                      </div>

                      {/* 연락처 */}
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                          <FontAwesomeIcon icon={faPhone} className="text-amber-500" />
                          연락처
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 bg-white/70 backdrop-blur-sm"
                          placeholder="연락처를 입력하세요"
                          required
                        />
                      </div>

                      {/* 주소 */}
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                          <FontAwesomeIcon icon={faMapMarkerAlt} className="text-amber-500" />
                          주소
                        </label>
                        <input
                          type="text"
                          value={formData.address}
                          onChange={(e) => handleInputChange('address', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 bg-white/70 backdrop-blur-sm"
                          placeholder="주소를 입력하세요"
                          required
                        />
                      </div>
                    </>
                  )}
                </div>
              </div>
            )}

            {/* 2단계: 업종 및 서비스 가격 (사업자만) */}
            {step === 2 && userType === 'business' && (
              <div className="space-y-6">
                {/* 업종 선택 */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-800">업종 선택</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {Object.entries(categoryConfig).map(([category, config]) => (
                      <button
                        key={category}
                        type="button"
                        onClick={() => setSelectedCategory(category)}
                        className={`p-4 rounded-xl border-2 transition-all duration-300 text-center ${
                          selectedCategory === category
                            ? `border-amber-500 bg-gradient-to-r ${config.color} text-white shadow-lg transform scale-105`
                            : 'border-gray-200 bg-white hover:border-amber-300 hover:shadow-md'
                        }`}
                      >
                        <div className="text-2xl mb-2">{config.icon}</div>
                        <div className="text-sm font-medium">{category}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 서비스 가격 입력 */}
                {selectedCategory && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {selectedCategory} 서비스 가격
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedCategoryConfig.services.map((service) => (
                        <div key={service} className="space-y-2">
                          <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                            <FontAwesomeIcon icon={faTag} className="text-amber-500" />
                            {service}
                          </label>
                          <div className="relative">
                            <input
                              type="number"
                              value={formData.servicePrices[service as keyof typeof formData.servicePrices] || ''}
                              onChange={(e) => handleServicePriceChange(service, e.target.value)}
                              className="w-full px-4 py-3 pr-12 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 bg-white/70 backdrop-blur-sm"
                              placeholder="가격을 입력하세요"
                              required
                            />
                            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm">
                              원
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* 3단계: 타임스페셜 설정 (사업자만) */}
            {step === 3 && userType === 'business' && (
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-800">타임스페셜 설정</h3>
                  
                  {/* 타임스페셜 등록 여부 */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">타임스페셜 등록</label>
                    <div className="flex bg-gray-100 rounded-2xl p-1">
                      <button
                        type="button"
                        onClick={() => setHasTimeSpecial(true)}
                        className={`flex-1 py-3 px-4 rounded-xl font-medium text-sm transition-all duration-300 ${
                          hasTimeSpecial
                            ? 'bg-white text-amber-600 shadow-md transform scale-105'
                            : 'text-gray-600 hover:text-gray-800'
                        }`}
                      >
                        등록하기
                      </button>
                      <button
                        type="button"
                        onClick={() => setHasTimeSpecial(false)}
                        className={`flex-1 py-3 px-4 rounded-xl font-medium text-sm transition-all duration-300 ${
                          !hasTimeSpecial
                            ? 'bg-white text-amber-600 shadow-md transform scale-105'
                            : 'text-gray-600 hover:text-gray-800'
                        }`}
                      >
                        나중에
                      </button>
                    </div>
                  </div>

                  {/* 타임스페셜 상세 설정 */}
                  {hasTimeSpecial && selectedCategory && (
                    <div className="space-y-4 p-4 bg-amber-50 rounded-xl border border-amber-200">
                      {/* 할인 서비스 선택 */}
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">할인 서비스</label>
                        <select
                          value={formData.timeSpecialService}
                          onChange={(e) => handleInputChange('timeSpecialService', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 bg-white/70 backdrop-blur-sm"
                          required
                        >
                          <option value="">서비스를 선택하세요</option>
                          {selectedCategoryConfig.services.map((service) => (
                            <option key={service} value={service}>{service}</option>
                          ))}
                        </select>
                      </div>

                      {/* 할인율 */}
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                          <FontAwesomeIcon icon={faPercent} className="text-amber-500" />
                          할인율
                        </label>
                        <div className="relative">
                          <input
                            type="number"
                            value={formData.discountRate}
                            onChange={(e) => handleInputChange('discountRate', e.target.value)}
                            className="w-full px-4 py-3 pr-12 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 bg-white/70 backdrop-blur-sm"
                            placeholder="할인율을 입력하세요"
                            min="1"
                            max="100"
                            required
                          />
                          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm">
                            %
                          </span>
                        </div>
                      </div>

                      {/* 기간 설정 */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                            <FontAwesomeIcon icon={faCalendarAlt} className="text-amber-500" />
                            시작일
                          </label>
                          <input
                            type="date"
                            value={formData.startDate}
                            onChange={(e) => handleInputChange('startDate', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 bg-white/70 backdrop-blur-sm"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                            <FontAwesomeIcon icon={faCalendarAlt} className="text-amber-500" />
                            종료일
                          </label>
                          <input
                            type="date"
                            value={formData.endDate}
                            onChange={(e) => handleInputChange('endDate', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 bg-white/70 backdrop-blur-sm"
                            required
                          />
                        </div>
                      </div>

                      {/* 설명 */}
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">타임스페셜 설명</label>
                        <textarea
                          value={formData.description}
                          onChange={(e) => handleInputChange('description', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 bg-white/70 backdrop-blur-sm resize-none"
                          rows={3}
                          placeholder="타임스페셜에 대한 설명을 입력하세요"
                          required
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* 4단계: 업체 프로필 정보 (사업자만) */}
            {step === 4 && userType === 'business' && (
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-800">업체 프로필 정보</h3>
                  <p className="text-sm text-gray-600">업체 소개와 기본 정보를 입력해주세요. 나중에 언제든 수정할 수 있습니다.</p>
                  
                  {/* 업체 소개 */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">업체 소개</label>
                    <textarea
                      value={formData.businessDescription}
                      onChange={(e) => handleInputChange('businessDescription', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 bg-white/70 backdrop-blur-sm resize-none"
                      rows={4}
                      placeholder="업체에 대한 소개를 입력하세요 (예: 저희는 10년 경력의 전문가들이 운영하는 헤어샵입니다...)"
                    />
                  </div>

                  {/* 영업시간 */}
                  <div className="space-y-3">
                    <label className="text-sm font-medium text-gray-700">영업시간</label>
                    <div className="space-y-2">
                      {Object.entries({
                        monday: '월요일',
                        tuesday: '화요일', 
                        wednesday: '수요일',
                        thursday: '목요일',
                        friday: '금요일',
                        saturday: '토요일',
                        sunday: '일요일'
                      }).map(([day, label]) => (
                        <div key={day} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                          <div className="w-16 text-sm font-medium text-gray-700">{label}</div>
                          <input
                            type="checkbox"
                            checked={!formData.businessHours[day as keyof typeof formData.businessHours].closed}
                            onChange={(e) => {
                              const newHours = { ...formData.businessHours };
                              newHours[day as keyof typeof formData.businessHours].closed = !e.target.checked;
                              handleInputChange('businessHours', newHours);
                            }}
                            className="w-4 h-4 text-amber-600 border-gray-300 rounded focus:ring-amber-500"
                          />
                          <span className="text-sm text-gray-600">영업</span>
                          {!formData.businessHours[day as keyof typeof formData.businessHours].closed && (
                            <>
                              <input
                                type="time"
                                value={formData.businessHours[day as keyof typeof formData.businessHours].open}
                                onChange={(e) => {
                                  const newHours = { ...formData.businessHours };
                                  newHours[day as keyof typeof formData.businessHours].open = e.target.value;
                                  handleInputChange('businessHours', newHours);
                                }}
                                className="px-2 py-1 border border-gray-200 rounded text-sm"
                              />
                              <span className="text-gray-500">~</span>
                              <input
                                type="time"
                                value={formData.businessHours[day as keyof typeof formData.businessHours].close}
                                onChange={(e) => {
                                  const newHours = { ...formData.businessHours };
                                  newHours[day as keyof typeof formData.businessHours].close = e.target.value;
                                  handleInputChange('businessHours', newHours);
                                }}
                                className="px-2 py-1 border border-gray-200 rounded text-sm"
                              />
                            </>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 편의시설 */}
                  <div className="space-y-3">
                    <label className="text-sm font-medium text-gray-700">편의시설</label>
                    <div className="grid grid-cols-2 gap-3">
                      <label className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
                        <input
                          type="checkbox"
                          checked={formData.parkingAvailable}
                          onChange={(e) => handleInputChange('parkingAvailable', e.target.checked)}
                          className="w-4 h-4 text-amber-600 border-gray-300 rounded focus:ring-amber-500"
                        />
                        <span className="text-sm">주차 가능</span>
                      </label>
                      <label className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
                        <input
                          type="checkbox"
                          checked={formData.wifiAvailable}
                          onChange={(e) => handleInputChange('wifiAvailable', e.target.checked)}
                          className="w-4 h-4 text-amber-600 border-gray-300 rounded focus:ring-amber-500"
                        />
                        <span className="text-sm">Wi-Fi</span>
                      </label>
                    </div>
                  </div>

                  {/* 결제 방법 */}
                  <div className="space-y-3">
                    <label className="text-sm font-medium text-gray-700">결제 방법</label>
                    <div className="grid grid-cols-2 gap-3">
                      <label className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
                        <input
                          type="checkbox"
                          checked={formData.cardPayment}
                          onChange={(e) => handleInputChange('cardPayment', e.target.checked)}
                          className="w-4 h-4 text-amber-600 border-gray-300 rounded focus:ring-amber-500"
                        />
                        <span className="text-sm">카드 결제</span>
                      </label>
                      <label className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
                        <input
                          type="checkbox"
                          checked={formData.cashPayment}
                          onChange={(e) => handleInputChange('cashPayment', e.target.checked)}
                          className="w-4 h-4 text-amber-600 border-gray-300 rounded focus:ring-amber-500"
                        />
                        <span className="text-sm">현금 결제</span>
                      </label>
                    </div>
                  </div>

                  {/* 이미지 업로드 안내 */}
                  <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
                    <h4 className="text-sm font-medium text-blue-800 mb-2">📸 이미지 업로드</h4>
                    <p className="text-sm text-blue-700">
                      회원가입 완료 후 업체 관리 페이지에서 업체 사진, 작업 사진, 인테리어 사진 등을 업로드할 수 있습니다.
                    </p>
                  </div>

                  {/* 위치 정보 안내 */}
                  <div className="p-4 bg-green-50 rounded-xl border border-green-200">
                    <h4 className="text-sm font-medium text-green-800 mb-2">📍 위치 정보</h4>
                    <p className="text-sm text-green-700">
                      정확한 위치는 회원가입 완료 후 업체 관리 페이지에서 지도 API를 통해 설정할 수 있습니다.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* 버튼 영역 */}
            <div className="flex justify-between pt-6">
              {step > 1 && (
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors duration-200"
                >
                  이전
                </button>
              )}
              
              <div className="flex-1"></div>
              
              {step < (userType === 'business' ? 4 : 1) ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="px-6 py-3 bg-gradient-to-r from-amber-500 to-yellow-600 text-white rounded-xl hover:from-amber-600 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105"
                >
                  다음
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`px-8 py-3 rounded-xl font-medium text-white transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed ${
                    isSuccess 
                      ? 'bg-emerald-600 hover:bg-emerald-700' 
                      : 'bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700'
                  }`}
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center gap-2">
                      <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
                      회원가입 중...
                    </div>
                  ) : isSuccess ? (
                    <div className="flex items-center justify-center gap-2">
                      <FontAwesomeIcon icon={faCheckCircle} />
                      회원가입 완료!
                    </div>
                  ) : (
                    '회원가입 완료'
                  )}
                </button>
              )}
            </div>
          </form>

          {/* 로그인 링크 */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              이미 계정이 있으신가요?{' '}
              <Link href="/login" className="text-amber-600 hover:text-amber-700 font-medium transition-colors duration-200">
                로그인
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 